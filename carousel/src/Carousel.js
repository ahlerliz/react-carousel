import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  // mirror what they did in results in lecture before rendering i
  //const isAtBeginning = currCardIdx === 0 ? 
  //const isAtEnd = currCardIdx === total - 1 ?
  // mirror what is done with result in demo/nineteen/src/NineteenGame.js 
  // from the React Testing lecture 

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBackward}
          style={(currCardIdx === 0) 
                  ? {"display": "none"}
                  : {"display": "inline"}}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          style={(currCardIdx + 1 === total) 
                    ? {"display": "none"}
                    : {"display": "inline"}}
        />
      </div>
    </div>
  );
}

export default Carousel;
