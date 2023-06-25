import React, { Suspense } from "react";
import "./App.css";
import { PublicRoutes } from "./routes";
import { ReactNotifications } from "react-notifications-component";


const App = () => {
  return (
        <Suspense fallback={"Loading ..."}>
          {/* <Navbar /> */}
          <ReactNotifications />
          <PublicRoutes />
          {/* <Footer /> */}
        </Suspense>
    );
}

export default App;
