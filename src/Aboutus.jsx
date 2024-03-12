const AboutUs = () => {
    return (
        <div className="about-us" 
        style={{
            backgroundcolor: '#f8f9fa',
            padding:'50px' ,
            textalign: 'center'
            }}
            >
            <div className="container text-center">
                <h2 className="mb-4">About Us</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="glass-effect p-4"
                        style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            padding: '20px',
                            borderradius: '15px',
                            boxshadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                        }}
                        >
                            <img src="https://img.freepik.com/free-photo/close-up-soil-sprout_23-2148905253.jpg?size=626&ext=jpg&uid=R113732626&ga=GA1.1.1413596509.1704338526&semt=ais" alt="Team Image" className="img-fluid rounded mb-4" />
                            <p>Welcome to Grow Leaf Web, where our team of passionate individuals is dedicated to bringing the beauty of nature into your life. We believe in the positive impact of plants on well-being and the environment.</p>
                            <p>Our diverse team of experts is here to assist you on your journey to becoming a successful gardener. Whether you are a seasoned enthusiast or a beginner, we are committed to providing the resources and support you need.</p>
                            <p>Join us in our mission to make the world greener, one plant at a time. Happy gardening!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
