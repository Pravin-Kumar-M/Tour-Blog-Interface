import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography, Dialog, DialogContent, styled } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Content = () => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [favoriteStatus, setFavoriteStatus] = useState({});

    const handleClickOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage('');
    };

    const handleFavoriteClick = (index) => {
        setFavoriteStatus((prevStatus) => ({
            ...prevStatus,
            [index]: !prevStatus[index],
        }));
    };

    const HoverButton = styled(Button)({
        '&:hover': {
            backgroundColor: 'green',
        },
    });

    const cardsData = [
        {
            title: "Taj Mahal located in 'India'",
            image: require('../assests/1.jpg'),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            rating: 4,
        },
        {
            title: "The Wonderful view in the mountain",
            image: require('../assests/2.jpg'),
            description: "This magnificent Eiffel Tower is a great example of engineering and art combined, creating a wonderful experience for all visitors.",
            rating: 3,
        },
        {
            title: "The waterfall and in the middle of the forest",
            image: require('../assests/3.jpg'),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            rating: 3,
        },
        {
            title: "The Iconic view and Entertainment spot",
            image: require('../assests/4.jpg'),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            rating: 4,
        },
        {
            title: "The Peaceful view Located in 'Tamil Nadu'",
            image: require('../assests/5.jpg'),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            rating: 3,
        },
        {
            title: "The Brigadeswara temple Located in 'Tanjour'",
            image: require('../assests/6.jpg'),
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            rating: 5,
        },
    ];

    return (
        <Box flex={2}>
            {cardsData.map((card, index) => (
                <Card key={index} sx={{ maxWidth: 650, marginBottom: '20px', marginTop: '20px' }}>
                    <CardHeader title={card.title} />
                    <CardMedia
                        component="img"
                        height="194"
                        image={card.image}
                        alt={card.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} disableSpacing>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick(index)}>
                                <FavoriteIcon sx={{ color: favoriteStatus[index] ? 'red' : 'inherit' }} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <Rating name="simple-controlled" defaultValue={card.rating} sx={{ ml: 1 }} />
                        </Box>
                        <HoverButton variant="contained" onClick={() => handleClickOpen(card.image)}>Click to View Image</HoverButton>
                    </CardActions>
                </Card>
            ))}

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <img src={currentImage} alt="Current Display" style={{ width: '100%' }} />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Content;
