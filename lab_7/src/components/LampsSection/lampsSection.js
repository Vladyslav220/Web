import React, { useState } from 'react';
import LampItem from '../LampItem/lampItem';

function LampsSection() {
  const items = [
    {
      image: "images/section2(1).jpg",
      title: "Lamp1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(2).jpg",
      title: "Lamp2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(3).jpg",
      title: "Lamp3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(4).jpg",
      title: "Lamp4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(5).jpg",
      title: "Lamp5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(6).jpg",
      title: "Lamp6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(7).jpg",
      title: "Lamp7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    },
    {
      image: "images/section2(8).jpg",
      title: "Lamp8",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit."
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
      <div className="lamp-section">
        {items.slice(0, visibleCount).map((item, index) => (
            <LampItem item={item} key={index} />
        ))}
        {visibleCount < items.length && (
            <div className="button-container">
              <button type="button" className="view-more-button" onClick={handleViewMore}>
                View More
              </button>
            </div>
        )}
      </div>
  );
}

export default LampsSection;
