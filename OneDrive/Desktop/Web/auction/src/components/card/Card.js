import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/material';


// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// // import * as logo from '../../thela.jpg';


// export default function ActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={require("../../thela.jpg")}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import IconButton from '@mui/joy/IconButton';
// import Typography from '@mui/joy/Typography';
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

// export default function BasicCard() {
//   return (
//     <Card variant="outlined" sx={{ width: 200 }}>
//       <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
//         Yosemite National Park
//       </Typography>
//       <Typography level="body2">April 24 to May 02, 2021</Typography>
//       <IconButton
//         aria-label="bookmark Bahamas Islands"
//         variant="plain"
//         color="neutral"
//         size="sm"
//         sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
//       >
//         <BookmarkAdd />
//       </IconButton>
//       <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
//         <img
//           src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
//           srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
//           loading="lazy"
//           alt=""
//         />
//       </AspectRatio>
//       <Box sx={{ display: 'flex' }}>
//         <div>
//           <Typography level="body3">Total price:</Typography>
//           <Typography fontSize="lg" fontWeight="lg">
//             $2,900
//           </Typography>
//         </div>
//         <Button
//           variant="solid"
//           size="sm"
//           color="primary"
//           aria-label="Explore Bahamas Islands"
//           sx={{ ml: 'auto', fontWeight: 600 }}
//         >
//           Explore
//         </Button>
//       </Box>
//     </Card>
//   );
// }

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SimpleCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
