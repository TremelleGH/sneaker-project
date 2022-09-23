import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import "./SneakerCard.css"



function SneakerCard({sneaker, handleClick}) {
const {name, image, price, brand} = sneaker



  return (
    <Card sx={{maxWidth: 345}} style={{border: "6px inset #ff6550"}}>
      <CardMedia
      component="img"
      height="160"
      image={image}
      alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant ="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brand: {brand}
          <br></br>
          Price: ${price}
        </Typography>
        <button onClick={() => handleClick(sneaker)} className='sneaker-button'>Add to Cart</button>
      </CardContent>
    </Card>
  )
}

export default SneakerCard