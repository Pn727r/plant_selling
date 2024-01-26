import home_image from "./assets/home_page_image.jpg"

function LiveImage() {
  return (
    <div className="live-image" style={{ position: 'relative' }}>
      <img
        src={home_image}
        alt="Growing Tree Image"
        style={{ width: '100%', height: '400px', objectFit: "cover" }}
      />
      <div
        className="quote-container"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          zIndex: '4',
          textAlign: 'left'
        }}
      >
        <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' , color:"#f5f5f5" }}>Grow your heart with gardening</p>
        <button
          className="btn"
          style={{ backgroundColor: '#93ff82', borderRadius: '25px', padding: '10px 20px', fontSize: '18px'  }}
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
        color: '#116530',
        padding: '15px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '30px'
      }}
    >
      Categories
    </div>
  );
}



// Home component
function Home() {
  return (
    <div>
      <LiveImage />
      <CategoryHeading />
     
    </div>
  );
}

export default Home;