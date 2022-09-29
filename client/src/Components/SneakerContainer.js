import { Grid } from '@mui/material'
import React from 'react'
import SneakerCard from './SneakerCard'


function SneakerContainer({handleDelete, sneakers, filteredSneakers, handleClick}) {


    const showSneakers = filteredSneakers?.map(sneaker => {
        return <Grid style={{padding: "20px"}} item xs={3}><SneakerCard sx={{maxWidth: "auto"}} key={sneaker.id} sneaker={sneaker} handleClick={handleClick} handleDelete={handleDelete}/></Grid>
    })


  return (
    <>
    <div style={{width: "1200px", marginLeft: "50px", marginTop: "40px"}}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        {showSneakers}
      </Grid>
    </div>
    </>
  )
}

export default SneakerContainer