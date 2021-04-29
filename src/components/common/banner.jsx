import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../common/common.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  img:{
      objectFit: 'contain',
      backgroundColor:'#f8ede3',
      
  }
});

export default function Banner(props) {
  const classes = useStyles();

  return (
    <div className='banner'>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
            className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={props.imageUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className = {classes.btnStyles} size="small" variant="contained" color="primary" onClick={props.playHandler}>
          Play
        </Button>
        
      </CardActions>
    </Card>

    </div>
    
  );
}