import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	}
});

export default function ImgMediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image="https://static.iris.net.co/sostenibilidad/upload/images/2017/4/25/37634_1.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Penguin
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Shop the Penguin Clothing Collection from the official Original Penguin by Munsingwear website
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<a href="https://www.facebook.com/">
					<Button size="small" color="primary">
						Compartir
					</Button>
				</a>
				<Link to="/theview">
					<Button size="small" color="primary">
						Leer mas
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
