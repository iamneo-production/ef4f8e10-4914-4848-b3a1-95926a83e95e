import '/src/css/home.css'
import Navbar from '../Component/Navbar';
import { useEffect } from 'react';
import AOS from "aos";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom'
// import { Box } from '@mui/material';
export default function Home() {
  const nav = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    //navBar
    <div className='hm'>
      <Navbar />
      <div className='con' id='container'>
        <div id='catlog'>
          <h1>
            CatLog
          </h1>
          <center>
            <div className='cour1'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://res.cloudinary.com/djpss9cg9/image/upload/v1689322584/Sethu/bcutrr5gazloeprtqkn4.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CPP
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => nav('/Course')}>view</Button>
                <Button size="small"></Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://res.cloudinary.com/djpss9cg9/image/upload/v1689322584/Sethu/bcutrr5gazloeprtqkn4.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Java
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" onClick={() => nav('/Course')}>view</Button>
                <Button size="small"></Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://res.cloudinary.com/djpss9cg9/image/upload/v1689322584/Sethu/bcutrr5gazloeprtqkn4.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" onClick={() => nav('/Course')}>view</Button>
                <Button size="small"></Button>
              </CardActions>
            </Card>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

