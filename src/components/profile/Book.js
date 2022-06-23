
import React from 'react'
import { Card, CardGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import com from "./img/com.jpg";
import black from "./img/black.jpg";
import ree from "./img/ree.jpg";

import comb from "./img/comb.jpg";
import bookk from "./img/bookk.jpg";
import aber from "./img/aber.jpg";


const Book = () => {
  return (
    <CardGroup>
    <Card>
        <Card.Img variant="top" src={com} height={450} width={200}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={comb} height={450} width={200}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={bookk} height={450} width={200} />
      </Card>
      <Card>
        <Card.Img variant="top" src={ree} height={450} width={200}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={black} height={450} width={200} />
      </Card>
      <Card>
        <Card.Img variant="top" src={aber} height={450} width={200}/>
      </Card>
    </CardGroup>
  );
}

export default Book