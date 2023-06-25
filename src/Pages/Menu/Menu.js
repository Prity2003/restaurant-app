import React, { Fragment } from "react";
import "./Menu.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Menu = () => {

  let items = [];
  const handleCart=(image , price)=>{
    const obj ={
      image,price ,count :1
    }

    const isItemExists = items.some(item => item.image === image && item.price === price);

    if (!isItemExists) {
      items.push(obj);
      localStorage.setItem("item", JSON.stringify(items));
      console.log(JSON.parse(localStorage.getItem("item")));
    }
  }
  

  return (
    <Fragment>
      <Navbar />
      <div className="menu">
        <div className="heading">
          <h1>&mdash; MENU &mdash; </h1>
          <h4>Enjoy scrumptious, authentic Indian dishes.</h4>
        </div>
        {/* <!-- starter --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Starter</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_880689c64f9a47ec9ef1db5236bfdd2c~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Veg Galouti Kebab</h5>
              <h5 className="price"> Rs.160 </h5>
            </div>
            <p>
              A kebab is made with rajma and stuff like
              cashew,onions,coriander,saffron water etc.
            </p>
            <button onClick={()=>handleCart("https://static.wixstatic.com/media/076680_880689c64f9a47ec9ef1db5236bfdd2c~mv2.jpg",160)}>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_7e1ad0de535c4d36b97abd5b92a26938~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Dahi ke kebab</h5>
              <h5 className="price"> Rs.160 </h5>
            </div>
            <p>
              The soft,creamy,rich kebab is specially made with Dahi and other
              stuffs..
            </p>
            <button onClick={()=>handleCart("https://static.wixstatic.com/media/076680_7e1ad0de535c4d36b97abd5b92a26938~mv2.jpg",10)}>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_024b0f4e98e94dfd9a72eca0ed0a830a~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Veg Hara-bhara Kebab</h5>
              <h5 className="price"> Rs.160 </h5>
            </div>
            <p>
              prepared with green vegetables and leafy vegetables which gives a
              green colour to this kebab recipe and also the name.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_72b2382631374f07b29c65aee4923dec~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Paneer Tikka</h5>
              <h5 className="price"> Rs.190</h5>
            </div>
            <p>
              Indian dish made from chunks of paneer marinated in yogurt with
              spices and grilled in a tandoor.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_7518d33f20134178921e0cca8d785db4~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Tandoori Soya Chap</h5>
              <h5 className="price"> Rs.180</h5>
            </div>
            <p>A healthy and popular vegan Indian dish made with soybeans</p>
            <button>Add To Cart</button>
          </div>
        </div>
        {/* <!-- soups --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Soups</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_5716ce7aeac94bff815455edbed12dfe~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Sheet Pan Roasted Tomato Soup</h5>
              <h5 className="price"> Rs.100 </h5>
            </div>
            <p>
              All the ingredients and tomato are roasted on one pan to make
              things super simple. No dairy or cream is required and every bite
              is full of rich, fresh flavor!
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_572a694cce284d24acc4b2b510cdea58~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Hot and Sour</h5>
              <h5 className="price"> Rs.100 </h5>
            </div>
            <p>
              Spicy, tangy and hearty, this Chinese Hot and Sour Soup is a bowl
              of ultimate comfort that comes together in only 15 minutes.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_51fbba2fec1f4fdcb0acfbf7c946093a~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Sweet corn</h5>
              <h5 className="price"> Rs.100</h5>
            </div>
            <p>
              A delicious vegetarian soup prepared using cream style corn and
              whole sweet corn kernels.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_f508724abf734f25b1afb9504f7b7622~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Veg manchow soup</h5>
              <h5 className="price"> Rs.100</h5>
            </div>
            <p>
              A chinese vegetarian soup made with mixed vegetables, garlic,
              ginger, soya sauce, ground pepper & a few other pantry ingredients
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        {/* <!-- Punjabi --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Punjabi</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_245e7b49b46046ddaf2e5a21b39c0c17~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Shahi paneer</h5>
              <h5 className="price"> Rs.250 </h5>
            </div>
            <p>
              A wonderful, creamy paneer gravy without all that butter and
              cream...
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_e43980cea6aa439abcb2806274149125~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Palak paneer</h5>
              <h5 className="price"> Rs.250 </h5>
            </div>
            <p>
              An evergreen delicacy from North India, is perhaps one of the most
              interesting ways to include spinach in your meal
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_00a5d0dc7c3d4c83acafb9ac13622970~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Paneer butter Masala</h5>
              <h5 className="price"> Rs.250 </h5>
            </div>
            <p>
              Paneer Butter Masala is a remarkable creamy dish of paneer cooked
              in tomato cashew nut gravy, spices and cream.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_d051395b61404a67b40df8ad96112fea~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Paneer Korma</h5>
              <h5 className="price"> Rs.250</h5>
            </div>
            <p>
              A Mughlai style Paneer dish where fried paneer cubes are cooked in
              a rich and creamy onion & saffron based gravy.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_970af0d9ea344cceb317eb68783d0b28~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Chole</h5>
              <h5 className="price"> Rs.200</h5>
            </div>
            <p>
              Chole is an easy Indian food recipe that is prepared with kabuli
              chana or chickpeas, spices like coriander, cinnamon, black
              cardamom and pomegranate seeds and tomatoes.
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        {/* <!-- Roti --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Roti/Naan/Paratha</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_de3bd6c52d5d4d14a3d144823e46c020~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Veg Butter Naan</h5>
              <h5 className="price"> Rs.30 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_26a47d4aa2e84b28a98ae6471bb2488a~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Tandoori Roti</h5>
              <h5 className="price"> Rs.30 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_572202fce9714c45899d3a9f6795d0b7~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Tawa Paratha</h5>
              <h5 className="price"> Rs.25 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_929e714a7e05457686d24727c66e7176~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Pudina Lachha Paratha</h5>
              <h5 className="price"> Rs.25</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_60d23552a35649578295643da18a3576~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Roomali Roti</h5>
              <h5 className="price"> Rs.20</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        {/* <!-- rice --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Rice</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_17d0cff988944b20b07b7eb0ec32ee7b~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Rajma Chawal</h5>
              <h5 className="price"> Rs.200 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_006a3ac118eb41e4896c1160f1400d4e~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Vegetable Fried Rice</h5>
              <h5 className="price"> Rs.200 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_259e7b1df59d4c9492a19c7db443dc12~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Jeera Rice</h5>
              <h5 className="price"> Rs.200 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_bd06b6b6a7a043a8a4a18733c497b7ee~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Veg Dum Biryan</h5>
              <h5 className="price"> Rs.200</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_246788b567eb4d369d74f18ba43e9419~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Soya Chunks Biryani</h5>
              <h5 className="price"> Rs.200</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Dal</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_244c8b7495b04efe92b43009a850dc09~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Lahsooni Moong Dal</h5>
              <h5 className="price"> Rs.150 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_347900b8ade844198dc10c687a1cf997~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Toor Dal </h5>
              <h5 className="price"> Rs.150 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_9f8bd623e23546fa905a29b31d0e2d0f~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Dal Fry</h5>
              <h5 className="price"> Rs.150 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_9b462ef99cb448738540c72e539f3995~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Dal Makhani</h5>
              <h5 className="price"> Rs.150</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        {/* <!-- Dessert --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Dessert</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_3c6dc404419c4e568c874fef39efb24f~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Basundi</h5>
              <h5 className="price"> Rs.120 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_9672b8c9610e4c438cd56d76b2225243~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Rabri</h5>
              <h5 className="price"> Rs.130 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_a9b1f759147b4e0cb5d3d9bb113712bb~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Gulab jamoon</h5>
              <h5 className="price"> Rs.120 </h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_4854457064724d269ccbad1b72f19c57~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Rasogulla</h5>
              <h5 className="price"> Rs.100</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_9ce325263e524301b359f42bec5dc7a0~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Gajar ka Halwa</h5>
              <h5 className="price"> Rs.120</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        {/* <!-- Thali special --> */}
        <div className="menu-box">
          <div className="menu-line"></div>
          <h2>Thali special</h2>
          <div className="menu-line"></div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_bb513c5ca3374ace8ce8e4c52503a829~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Regular Thal</h5>
              <h5 className="price"> Rs.200 </h5>
            </div>
            <p>
              (1 sabji, Dal fry,Phulka roti,Jeera rice,1 Dessert, Papad,Salad,
              Pickle,Buttermilk)
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_b711c3ebae8446cca930a74aa66bd99e~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Medium Thal</h5>
              <h5 className="price"> Rs.350 </h5>
            </div>
            <p>
              (2 sabji, Dla fry, Dal makhani, Rayta, Naan, Papad,Pickle, Jeera
              rice, Dessert, Buttermilk)
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="food-items">
          <img src="https://static.wixstatic.com/media/076680_0038db47f2214f0886e98d71b3d60624~mv2.jpg" />
          <div className="details">
            <div className="details-sub">
              <h5>Special Large Thal</h5>
              <h5 className="price"> Rs.600 </h5>
            </div>
            <p>
              (2 sabji, 1 Seasonal veg., Jeera rice, Veg pulao, Dal fry, Dal
              makhani, Papad, Phulka roti, Tandoori roti, Salad, Pickle, 2
              dessert, Buttermilk)
            </p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Menu;
