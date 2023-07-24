import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import '../css/course.css'
export default function Upcourse() {
    const nav = useNavigate;
    return (
        <div>
            <div className='cou'>
                <div id='row1'>
                    <div>
                        <Card
                            sx={{ height: '370px', display: 'flex', flexDirection: 'column', width: '370px' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '40.25%',
                                }}
                                image="https://res.cloudinary.com/djpss9cg9/image/upload/v1689571860/cpp_vl0gto.jpg"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    C++
                                </Typography>
                                <Typography>
                                    C++ is an Object Oriented Programing language which
                                    is used to work with Objects.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => nav('/Course')}>Enroll</Button>
                                <Button size="small">Edit</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card
                            sx={{ height: '370px', display: 'flex', flexDirection: 'column', width: '370px' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '40.25%',
                                }}
                                image="https://res.cloudinary.com/djpss9cg9/image/upload/v1689571860/cpp_vl0gto.jpg"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    C++
                                </Typography>
                                <Typography>
                                    C++ is an Object Oriented Programing language which
                                    is used to work with Objects.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => nav('/Course')}>Enroll</Button>
                                <Button size="small">Edit</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card
                            sx={{ height: '370px', display: 'flex', flexDirection: 'column', width: '370px' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '40.25%',
                                }}
                                image="https://res.cloudinary.com/djpss9cg9/image/upload/v1689571860/cpp_vl0gto.jpg"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    C++
                                </Typography>
                                <Typography>
                                    C++ is an Object Oriented Programing language which
                                    is used to work with Objects.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => nav('/Course')}>Enroll</Button>
                                <Button size="small">Edit</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}