import React, { useState } from "react";
import CardData from "./CardData";
import "../App.css";
import {Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Cards() {
  let[memeImage, setMemeImage] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };
  return (
    <div>
      <div class="cardss">
      <Card class="mycard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={memeImage} />
      
    </Card>

    <Button variant="secondary" onClick={myRandomEmg}>Get a new image</Button>{' '}
      {/* <button onClick={myRandomEmg}></button> */}
     </div>
    </div>
  );
}

export default Cards;
