import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './homeComponent.css';
import rsIcon from '../../assets/icons/Reliable-Shipping-icon.svg';
import sIcon from '../../assets/icons/Safe-icon.svg';
import qpIcon from '../../assets/icons/BestQandP.svg';

gsap.registerPlugin(ScrollTrigger);

const OurPromise = () => {
  useEffect(() => {
    // Select the elements to animate
    const icons = document.querySelectorAll(".ourPromise-icon");
    const headings = document.querySelectorAll(".Promise-heading");
    const descriptions = document.querySelectorAll(".Promise-description");

    // Create individual animations for each icon
    icons.forEach((icon) => {
      gsap.from(icon, {
        opacity: 0,
        y: 50,
      })
      gsap.to(icon, {
        opacity: 1,
        y:0,
        scrollTrigger: {
          trigger: ".ourPromise-grid-container",
          start: "top 50%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
          duration: 3,
        }
      });
    });

    
    headings.forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        y: 50,
      })
      gsap.to(heading, {
        opacity: 1,
        y:0,
        scrollTrigger: {
          trigger: ".ourPromise-grid-container",
          start: "top 40%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
          duration: 3,
        }
      });
    });

    
    descriptions.forEach((description) => {
      gsap.from(description, {
        opacity: 0,
        y: 50,
      })
      gsap.to(description, {
        opacity: 1,
        y:0,
        scrollTrigger: {
          trigger: ".ourPromise-grid-container",
          start: "top 30%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
          duration: 3,
        }
      });
    });

    

  }, []);

  const ourPromises = [
    {
      img: rsIcon,
      heading: 'Reliable Shipping',
      description: 'Experience hassle-free and reliable shipping on all your orders. We ensure timely delivery with top-notch packaging, so your purchases reach you in perfect condition.'
    },
    {
      img: sIcon,
      heading: "You're Safe with Us",
      description: 'Your safety is our priority. Our products are rigorously tested and compliant with industry standards, ensuring a secure and worry-free shopping experience.'
    },
    {
      img: qpIcon,
      heading: 'Best Quality & Pricing',
      description: 'Discover unbeatable deals on premium products. Experience the best quality and pricing in our exclusive e-commerce store. Shop now!'
    },
  ];

  return (
    <div className="ourPromise bg-be">
      <div className="container ourPromise-container">
        <div className="ourPromise-grid-container">
          {ourPromises.map((promise, index) => (
            <div className="ourPromise-grid-item" key={index}>
              <img className='ourPromise-icon sh-4' src={promise.img} alt="icon" />
              <div className="Promise-container">
                <div className="Promise-heading">
                  <h4>{promise.heading}</h4>
                </div>
                <div className="Promise-description">
                  <p>{promise.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
