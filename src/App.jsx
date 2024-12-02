import React from 'react';
import './App.css'; // Ensure this is your CSS file path
import { Helmet } from 'react-helmet'; // Use react-helmet-async if you installed that
import Footer from './Footer.jsx'; // Ensure Footer is used or remove this line

function App() {

  function welcome() {
    //alert("Welcome to Moalboal!");
    //window.open("https://reefspecies.com/moalboal/moalboal-info/", '_blank');
    window.open("https://julianna-kunn.github.io/PELEC_Tumulak_Juliana_Midterm/", '_blank');
  }

  return (
    <>
      <Helmet>
        <script src="/MainPageFeaturedMoalboal/LandingPage.js" defer /> {/* Use leading slash */}
      </Helmet>

      {/* Header Section */}
      <header className="header">
        <a href="#" className="logo">EXPLORE MOALBOAL</a>
        <nav className="navbar">
          <a href="#" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#Travel">Travel</a>
          <a href="#Food">Food</a>
          <a href="#Culture">Culture</a>
          <a href="#Book-A-Tour" className="book-tour">
            <img src="MainPageFeaturedMoalboal/WhiteCalendarIcon.png" alt="Tour Icon" className="book-icon" /> Book A Tour
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/MainPageFeaturedMoalboal/MainFeaturedTouristSpot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <h1>Moalboal <br /><span>The Heart Of Vibrant Marine Bliss</span></h1>
          <p>
            Moalboal, located on the southwestern coast of Cebu,
            is a paradise known for its crystal-clear waters and <br />
            vibrant marine life. Famous for the stunning Sardine Run,
            it offers world-class diving and snorkeling experiences.<br />
            With beautiful beaches, thrilling canyoneering adventures,
            and a relaxed atmosphere, Moalboal is the ultimate<br />
            destination for nature lovers and adventure seekers.
          </p>
          {/* <a href="#">Explore More</a> */}
          <button onClick={welcome}>Explore More</button>
        </div>
      </section>

      {/* Section with Title */}
      <section className="title-section">
        <div className="line"></div>
        <h2><span className="moalboal">Moalboal</span> <span className="adventure">Adventures</span></h2>
        <div className="line"></div>
      </section>

      {/* Cards Section */}
      <section className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src="MainPageFeaturedMoalboal/MoalAd1.png" alt="Image 1" />
          <div className="card-content">
            <h3>Canyoneering</h3>
            <p>Short description about the adventure in Moalboal.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <img src="MainPageFeaturedMoalboal/MoalAd2.png" alt="Image 2" />
          <div className="card-content">
            <h3>Trekking</h3>
            <p>Short description about the adventure in Moalboal.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <img src="MainPageFeaturedMoalboal/MoalAd3.png" alt="Image 3" />
          <div className="card-content">
            <h3>Snorkeling</h3>
            <p>Short description about the adventure in Moalboal.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card">
          <img src="MainPageFeaturedMoalboal/MoalAd4.png" alt="Image 4" />
          <div className="card-content">
            <h3>Beaches</h3>
            <p>Short description about the adventure in Moalboal.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

    </>
  );
}

export default App;



