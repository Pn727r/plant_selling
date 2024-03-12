/* eslint-disable react/prop-types */

import AboutUs from "./Aboutus";
import "./style.css";

import home_image from "./assets/img2.jpg";

function CategoryCard({ imageUrl, buttonText }) {
  return (
    <div className="col">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="Card Image" />
        <button className="btn btn-category">{buttonText}</button>
      </div>
    </div>
  );
}

function LiveImage() {
  return (
    <div className="live-image" style={{ position: "relative" }}>
      <img
        src={home_image}
        origin
        alt="Growing Tree Image"
        // style={{ width: '100%', height: '400px', objectFit: "cover" }}
      />
      <div className="quote-container">
        <p>Grow your heart with gardening</p>
        <button
          className="btn btn-shop-now"
          // style={{ backgroundColor: '#218838', borderRadius: '10px', padding: '10px 20px', fontSize: '18px'  }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

function CategoryHeading() {
  return (
    <div
      className="category-heading"
      style={{
        color: "#218838",
        padding: "15px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        marginTop: "30px",
      }}
    >
      {" "}
      <div>
        <div className="category-heading">Categories</div>
        <div
          className="container"
          style={{
            border: "none",
            transition: "transform 0.3s ease",
            borderradius: "15px",
            boxshadow: "4px 8px rgba(0, 0, 0, 0.1)",
            marginbottom: "20px",
          }}
        >
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
            <CategoryCard
              imageUrl="https://img.freepik.com/free-photo/elegant-roses-blooming-bush_23-2147829194.jpg?size=626&ext=jpg&uid=R113732626&ga=GA1.1.1413596509.1704338526&semt=ais"
              buttonText="Plants"
              style={{
                width: "100%",
                backgroundcolor: "#76B947",
                color: "#fff",
                border: "none",
                borderradius: "0 0 15px 15px",
                padding: "10px",
                fontsize: "18px",
              }}
            />
            <CategoryCard
              imageUrl="https://img.freepik.com/free-photo/beautiful-house-plants-flower-pots-table_181624-23920.jpg?size=626&ext=jpg&uid=R113732626&ga=GA1.1.1413596509.1704338526&semt=ais"
              buttonText="Pots/Decoration"
              style={{
                width: "100%",
                backgroundcolor: "#76B947",
                color: "#fff",
                border: "none",
                borderradius: "0 0 15px 15px",
                padding: "10px",
                fontsize: "18px",
              }}
            />
            <CategoryCard
              imageUrl="https://img.freepik.com/premium-photo/fertile-loam-soil-suitable-planting_38663-893.jpg?size=626&ext=jpg&uid=R113732626&ga=GA1.1.1413596509.1704338526&semt=sph"
              buttonText="Soil-Fertilizers"
            />
            <CategoryCard
              imageUrl="https://img.freepik.com/free-photo/still-life-with-gardening-objects_23-2148060608.jpg?size=626&ext=jpg&uid=R113732626&ga=GA1.1.1413596509.1704338526&semt=ais"
              buttonText="Equipment"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <LiveImage />
      <CategoryHeading />
      <AboutUs />
    </div>
  );
}

export default Home;
