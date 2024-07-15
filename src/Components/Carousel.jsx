import React from "react";
import test from '../img/testimonial1.jpg'
import test2 from '../img/testimonial2.jpg'


const { useEffect, useState } = React;

// Data
const initialImages = [
  {
    img: test,
    name: "Chandni Singh",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },
  {
    img: test2,
    name: "Chandni Singh",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },
  {
    img: test,
    name: "Chandni Singh",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },
  {
    img: test2,
    name: "Chandni Singh",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },
  {
    img: test2,
    name: "Chandni Singh",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },
  {
    img: test,
    name: "Chandni Singh",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  }
  
  
];

// Carousel
const Carousel = () => {
    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        moveItems();
      }, 2000); // Change the interval (in milliseconds) as desired
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const moveItems = () => {
      // Get the next index
      const nextIndex = (currentIndex + 1) % images.length;
  
      // Update the state with the new current index
      setCurrentIndex(nextIndex);
    };
  
    const handleItemClick = (index) => {
      setCurrentIndex(index);
    };
  
    // Function to create a circular index based on the current index and array length
    const getCircularIndex = (index, length) => {
      return (index + length) % length;
    };
  
    return (
      <div className="carousel-container">
        <div className="d-flex flex-column">
          <div className="carousel-items">
            {/* Render 5 items on the screen */}
            {Array(5)
              .fill()
              .map((_, index) => {
                const imageItem =
                  images[
                    getCircularIndex(currentIndex + index - 2, images.length)
                  ];
                return (
                  <div
                    key={index}
                    className={`${index === 2 ? "center" : "opacity"} ${
                      (index === 0 || index === 4) &&
                      "end d-none d-md-block d-lg-block"
                    }
                      ${
                        (index === 1 || index === 3) &&
                        "d-none d-md-block d-lg-block"
                      }`}
                    onClick={() =>
                      handleItemClick(
                        getCircularIndex(currentIndex + index - 2, images.length)
                      )
                    }
                  >
                    <img src={imageItem.img} alt="item" />
                  </div>
                );
              })}
          </div>
          <div>
            {/* Render the current item description */}
            <div className="description">
              <p>
                <b>{images[currentIndex].name}</b>
              </p>
              <p>{images[currentIndex].desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Carousel;