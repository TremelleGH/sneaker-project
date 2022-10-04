import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import "./SneakerCard.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';





function SneakerCard({sneaker, handleClick, handleDelete}) {
const {name, description, image, price, brand, id} = sneaker
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};





  return (
    <Card sx={{maxWidth: 345}} style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
      <Button sx={{width: "100%"}} onClick={handleOpen}>
      <CardMedia
      component="img"
      height="160"
      image={image}
      alt={name}
      />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h7" component="h2">
            {name}
          </Typography>
          {/* <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
      /> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
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
        <button onClick={() => handleDelete(sneaker.id)} className='sneaker-button' >Remove</button>
      </CardContent>
    </Card>
  )
}

export default SneakerCard