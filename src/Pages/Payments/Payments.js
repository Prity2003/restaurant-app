// import React from "react";
// import { useState } from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import "./Payments.css";
// export default function App() {
//    const sliderImages = [ 
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTdUmK6fRPfPQIMyOxUOjiTnR2VYizvkkWUxLhGoVJNobm5Id3fpRhsIGtPj3H06ujPb4&usqp=CAU",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQduUpBWhSdgkWqqIrSmw5MMU697Xlx3SCjlB4eZSv0Q&s",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTnzApyh1ZmbXLBUg_iFRio23hzRyAJfwBRfnVozXdEnu-NK4jFt2_gsYujKf-CbT6Cr_A&usqp=CAU",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
//       },
//       {
//          url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
//       },
//    ];
//    const [activeImageNum, setCurrent] = useState(0);
//    const length = sliderImages.length;
//    const nextSlide = () => {
//       setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
//    };
//    const prevSlide = () => {
//       setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
//    };
//    if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
//       return null;
//    }
//    return (
//       <div>
//          <h2>
//             {" "}
//             Creating the image slider from scratch in ReactJS
//          </h2>
//          <section className = "image-slider">
//             <div class = "left">
//                <ArrowBackIosIcon onClick = {prevSlide} />
//             </div>
//             <div class="right"> 
//                <ArrowForwardIosIcon onClick = {nextSlide} />
//             </div>
//             {sliderImages.map((currentSlide, ind) => {
//                return (
//                   <div
//                      className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
//                      key={ind}
//                   >
//                      {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
//                   </div>
//                );
//             })}
//          </section>
//       </div>
//    );
// }