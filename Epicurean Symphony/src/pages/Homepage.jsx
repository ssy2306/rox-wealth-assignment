import { Box, Card, CardContent, CardMedia } from '@mui/material';
import * as React from 'react'
import { useEffect, useState } from 'react';
import "../components/logo.css";
import instagram from '../pages/instagram.png'
import facebook from '../pages/facebook.png'
import twiter from '../pages/twitter.png'
import video1 from '../pages/1.mp4';
import MMaps from '../pages/map.png';
//import Maps from '../components/Maps';

function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/data');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Run the effect only once when the component mounts

    const renderDishes = (dishes) => {
        return dishes.map((dish, index) => (
            <Card key={index} sx={{ maxWidth: 345, margin: '20px', borderRadius: 0, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://img.freepik.com/premium-photo/assorted-traditional-indian-food-dark-stone-background-frame-indian-dish-chicken-tikka-masala-palak-paneer-saffron-rice-lentil-soup-pita-bread-spices-top-view-flat-laycopy-space_410516-2172.jpg?w=2000`}
                    alt={dish.name}
                />
                <CardContent sx={{ backgroundColor: '#111111' }}>
                    <Box sx={{ fontSize: 20, color: '#DFBD69', fontWeight: 'bold', }}>
                        {dish.name}
                    </Box>
                    <Box sx={{ fontSize: 14, color: 'grey', }}>
                        Rating: {dish.rating}
                        <br />
                        Price: {dish.price}
                        <br />
                        Description: {dish.description}
                    </Box>
                </CardContent>
            </Card>
        ));
    };

    // SustainabilityInitiativeCard component
    const SustainabilityInitiativeCard = ({ initiative }) => (
        <Card sx={{ maxWidth: 345, margin: '20px', borderRadius: 0, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent sx={{ background: 'linear-gradient(#DFBD69, #141414)' }}>
                <Box sx={{ fontWeight: 'bold' }}>
                    {initiative.name}
                </Box>
                <Box sx={{ color: 'white' }}>
                    {initiative.description}
                </Box>
            </CardContent>
        </Card>
    );

    const AwardsCard = ({ award }) => {
        return (
            <Card sx={{ maxWidth: 345, margin: '20px', borderRadius: 0, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardContent sx={{ background: 'linear-gradient(#000000, #111111)' }}>
                    <Box variant="h6" sx={{ color: '#DFBD69', fontWeight: 'bold' }}>
                        {award.year}
                    </Box>
                    <Box variant="subtitle1" sx={{ color: 'grey' }}>
                        {award.organization}
                    </Box>
                    <Box variant="body2" sx={{ color: 'white' }}>
                        {award.award}
                    </Box>
                </CardContent>
            </Card>
        );
    };

    if (!data) {
        return <div>Loading...</div>; // You can replace this with a loading indicator
    }
    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <Box>
                <video autoPlay muted loop className="myVideo" style={{ zIndex: -2, position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', opacity: 0.9, filter: 'brightness(60%) ' }}>
                    <source src={video1} type="video/mp4" />
                </video>
            </Box>
            <Box className="first" sx={{ paddingTop: 25, paddingLeft: 25, paddingRight: 25, display: 'flex', alignItems: 'center', paddingBottom: 20, position: 'relative' }}>
                <Box sx={{
                    alignItems: 'center',
                    border: '10px solid rgba(223,188,104, 0.3)',
                    borderRadius: '0px',
                    textAlign: 'center',
                    borderOpacity: '20%',
                    width: '100%',
                    boxSizing: 'border-box',
                    margin: '0px 150px 0px 150px'
                }}>
                    <Box className="logoName" sx={{
                        fontSize: 53,
                        zIndex: 0,
                        textAlign: 'center',
                        padding: '20px',
                        color: '#DFBD69'
                    }}>
                        <b>Enjoy Delicious Food
                            <br /> Continental Food and More </b>
                    </Box>
                </Box>
            </Box>
            {data && (
                <Box>
                    <Box sx={{
                        color: 'white',
                        marginTop: '20',
                        fontSize: 20,
                        textAlign: 'center',
                        paddingBottom: '120px',
                        paddingLeft: '200px',
                        paddingRight: '200px'
                    }}>
                        {data.message.restaurant.ambiance.description}
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', zIndex: 2 }}>
                            {renderDishes(data.message.restaurant.menu.categories[1].items)}
                        </Box>
                        <Box className="logoName" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 40 }}>
                            - Our Top Picks -
                        </Box>
                    </Box>
                </Box>
            )}
            <Box sx={{
                backgroundColor: 'black', color: 'white', marginTop: -35, paddingTop: 40,
                fontSize: 20, textAlign: 'center', zIndex: 0
            }}>


                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
                    {data.message.restaurant.awards && data.message.restaurant.awards.map((award, index) => (
                        <AwardsCard key={index} award={award} />
                    ))}
                </Box>

               <br /><br />


                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
                    {data.message.restaurant.sustainability.initiatives && data.message.restaurant.sustainability.initiatives.map((initiative, index) => (
                        <SustainabilityInitiativeCard key={index} initiative={initiative} />
                    ))}
                </Box>


                <Box sx={{ width: '100%',  display: 'flex', flexWrap: 'wrap', marginTop: 10, paddingBottom: 10}}>
                    
                    

                    <Box sx={{ width: '50%'}}>
                        <img src="https://www.fourseasons.com/content/dam/fourseasons/images/web/TRI/TRI_1471_aspect4x5.jpg" style={{ borderRadius: '50%',width: '250px'}}/>
                    </Box>

                    <Box sx={{ width: '25%', paddingLeft: 0, alignContent: 'center', alignItems: 'center', marginTop: 0, paddingTop: 0}}  >
                        <Box className="logoName" sx={{ marginTop: 10, fontWeight:'bold', fontSize: '40px', textAlign:'left' }}>
                            {data.message.restaurant.chef.name}
                        </Box>
                        <Box sx={{  textAlign:'left', display: 'flex', flexWrap: 'wrap'}}>
                            {data.message.restaurant.chef.bio}
                        </Box>
                        <Box sx={{  textAlign:'left' }}>
                            <Box className="logoName"> Signature Dish</Box>
                            <Box>{data.message.restaurant.chef.signature_dish}</Box>
                            
                        </Box>
                    </Box>
                </Box>

            </Box>
            {/* <Maps /> 
            
            I integratedt the google maps api wqith the coordinatesd but i dont have the access to Maps API as it's a 
            paid service
            */}

            {data && (<Box className="footer" sx={{ padding: 8, display: 'flex', backgroundColor: '#111111', color: '#DFBD69' }}>

                <Box sx={{ width: '50%' }}>

                    <a href="https://www.google.com/maps/place/40%C2%B042'46.1%22N+74%C2%B000'21.6%22W/@40.712804,-74.0085803,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.7128!4d-74.006?entry=ttu">
                        <img src={MMaps} style={{ width: '50%' }} /></a><br />
                    Epicurean Symphony<br />
                    Address: {data.message.restaurant.location.address}
                </Box>
                <Box sx={{ width: '50%', justifyContent: 'center', alignContent: 'center' }}>
                    <a href={data.message.restaurant.online_presence.social_media.facebook} style={{ textDecoration: 'none' }}> <img src={facebook} style={{ width: '5%', marginLeft: 20 }} /> </a>
                    <img src={instagram} style={{ width: '5%', marginLeft: 20 }} />
                    <img src={twiter} style={{ width: '5%', marginLeft: 20 }} />
                </Box>
            </Box>)}

        </Box>
    );
}

export default HomePage;
