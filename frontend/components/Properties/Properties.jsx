// src/components/Properties/Properties.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Properties.scss"; // Create this file for styles

// Import images from the Properties/images folder
import chennaiImage from "./images/Chennai.jpg";
import coimbatoreImage from "./images/Coimbatore.jpg";
import maduraiImage from "./images/Madurai.jpg";
import trichyImage from "./images/Trichy.jpg";
import salemImage from "./images/Salem.jpg";
import tirunelveliImage from "./images/Tirunelveli.jpg";
import erodeImage from "./images/Erode.jpg";
import tirupurImage from "./images/Tirupur.avif";
import velloreImage from "./images/Vellore.jpg";
import thoothukudiImage from "./images/Thoothukudi.jpg";
import dindigulImage from "./images/Dindigul.jpg";
import thanjavurImage from "./images/Thanjavur.jpg";
import hosurImage from "./images/Hosur.avif";
import karurImage from "./images/Karur.jpg";
import nagapattinamImage from "./images/Nagapattinam.jpg";
import rajapalayamImage from "./images/Rajapalayam.jpg";
import nagercoilImage from "./images/Nagercoil.jpg";
import bengaluruImage from "./images/Bengaluru.jpg";
import hyderabadImage from "./images/Hyderabad.jpg";
import kochiImage from "./images/Kochi.jpg";
import vizagImage from "./images/Vizag.jpg";

const cities = [
  { name: "Chennai", image: chennaiImage },
  { name: "Coimbatore", image: coimbatoreImage },
  { name: "Madurai", image: maduraiImage },
  { name: "Trichy", image: trichyImage },
  { name: "Salem", image: salemImage },
  { name: "Tirunelveli", image: tirunelveliImage },
  { name: "Erode", image: erodeImage },
  { name: "Tirupur", image: tirupurImage },
  { name: "Vellore", image: velloreImage },
  { name: "Thoothukudi", image: thoothukudiImage },
  { name: "Dindigul", image: dindigulImage },
  { name: "Thanjavur", image: thanjavurImage },
  { name: "Hosur", image: hosurImage },
  { name: "Karur", image: karurImage },
  { name: "Nagapattinam", image: nagapattinamImage },
  { name: "Rajapalayam", image: rajapalayamImage },
  { name: "Nagercoil", image: nagercoilImage },
  { name: "Bengaluru", image: bengaluruImage },
  { name: "Hyderabad", image: hyderabadImage },
  { name: "Kochi", image: kochiImage },
  { name: "Vizag", image: vizagImage },
];

const Properties = () => {
  return (
    <div className="properties-container">
      <header className="properties-header">
        <h1>Premier Properties in Sought-After Locations</h1>
        <p>
        Dive into our extensive selection of properties in vibrant cities and serene locales throughout Tamil Nadu and South India. From bustling urban centers to charming hidden retreats, each location presents distinct opportunities and lifestyles. Explore our diverse range of options, including stylish apartments, family homes, and promising plots of land. Whether you're searching for a modern apartment, a spacious residence, or a land for future development, we offer something to match every preference. Select a city to view available listings and find your perfect property today.
        </p>
      </header>
      <section className="properties-list">
        {cities.map((city) => (
          <div key={city.name} className="property-card">
            <Link to={`/properties/${city.name.toLowerCase()}`}>
              <img src={city.image} alt={city.name} />
              <div className="property-overlay">
                <h2>{city.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Properties;
