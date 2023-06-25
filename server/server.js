import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import "babel-polyfill";
import passport from "passport";
import expressValidator from "express-validator";
import session from "express-session";
import responseTime from "response-time";
import boom from "express-boom";
import compression from "compression";
import helmet from "helmet";
import config from "config";
import connectDB from "./config/db";
import routes from "./routes/api";
import connectMongo from "connect-mongo";
import expressip from "express-ip";
import http from "http";
const MongoStore = connectMongo(session);
const app = express();
const PORT = process.env.PORT || 9001;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  if (req.originalUrl === "/api/payment/stripe-webhook") {
    next();
  } else {
    bodyParser.json({ limit: "50mb" })(req, res, next);
  }
});
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);
app.use(logger("dev"));
app.use(expressValidator());
app.use(cookieParser());
app.use(boom());
app.use(compression());
dotenv.config();

// app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");

app.use(responseTime());
app.use(helmet());

app.use(expressip().getIpInfoMiddleware);

app.use(
  session({
    secret: config.get("jwtSecret"),
    proxy: true,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    name: "restaurant",
    cookie: {
      // sameSite: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // Milliseconds (3600000ms -> 60min)
    },
    store: new MongoStore({
      url: process.env.MONGO_URI,
      host: "localhost",
      port: 27017,
      autoRemove: "native",
      stringify: false,
    }),
  })
);

// session secret
app.use(passport.initialize());
app.use(passport.session());
app.disable("x-powered-by");

app.set("trust proxy", true);

//@user module api
app.use("/api/auth", routes.auth);
app.use("/api/user", routes.user);

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Connect database
connectDB().then(async () => {
  let server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(
      "Server listening at http://" +
        server.address().address +
        ":" +
        server.address().port
    );
  });
  process.on("SIGINT", function () {
    server.close(function () {
      console.log("Finished all requests");
    });
  });
  process.on("exit", function () {
    server.close(function () {
      console.log("Finished all requests");
    });
  });
});
