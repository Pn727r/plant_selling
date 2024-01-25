import React from 'react';


function LiveImage() {
  return (
    <div className="live-image" style={{ position: 'relative' }}>
      <img
        src="https://img.freepik.com/free-photo/plant-growing-ground_1150-19317.jpg?size=626&ext=jpg&uid=R113732626&ga=GA1.1.1413596509.1704338526&semt=ais"
        alt="Growing Tree Image"
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <div
        className="quote-container"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          color: '#fff',
          zIndex: '4',
          textAlign: 'left'
        }}
      >
        <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Grow more trees</p>
        <button
          className="btn btn-shop-now"
          style={{ backgroundColor: '#D8F9D3', borderRadius: '20px', padding: '10px 20px', fontSize: '18px' }}
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
