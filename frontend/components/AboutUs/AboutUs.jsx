import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Elevate Property  Group</h1>
        <p>Effortless Real Estate Services, Tailored for You</p>
      </div>

      <div className="about-us-content">
        <section className="company-description">
          <h2>Company Description</h2>
          <p>
          At Elevate Property  Group, we are redefining the real estate landscape with a focus on innovation and client satisfaction. Our agency stands out for its commitment to delivering top-tier service, backed by thorough market insight and a tailored approach. We are dedicated to guiding you through every step of the property journey, ensuring clarity, efficiency, and outstanding results. Trust our expert team to make your real estate experience exceptional.


          </p>
        </section>

        <section className="achievements">
          <h2>Our Achievements</h2>
          <ul>
            <li>Completed over 8,000 property transactions in the last 5 years, underscoring our extensive experience.</li>
            <li>Recognized as one of the top 5 real estate firms in Tamil Nadu by Realty Insights Magazine.</li>
            <li> Honored with the Excellence in Service Award 2023 for outstanding customer care.</li>
            <li> Expanded our portfolio to include luxury real estate, enhancing our service offerings..</li>
            <li>Featured in leading industry publications for our innovative approach and superior service..</li>
          </ul>
        </section>

        <section className="our-values">
          <h2>Our Values</h2>
          <p>
          Elevate Property  Group, At Property Group, we are guided by a commitment to integrity, customer-centricity, and excellence. We prioritize transparency and honesty in every transaction while focusing on delivering tailored solutions that exceed client expectations. Our dedication to innovation ensures we stay ahead in a dynamic market, and our engagement with the community reflects our commitment to contributing positively to society.


          </p>
        </section>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            For inquiries or assistance, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> arunrealestate@gmail.com <br />
            <strong>Phone:</strong> +91 8838292480 <br />
            <strong>Address:</strong> 2/21 cross cut road, Chennai, Tamil Nadu, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
