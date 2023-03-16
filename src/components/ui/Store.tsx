import items from "../../data/item.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';


const Store = () => {
	console.log(items);
function sliceDescription(data: string, value:number) {
	if (data) {
		var mainData = data.slice(0, value);
		return mainData
	}
}
return (
	<>
		<Typography variant="h5" className="text-white"> Products</Typography>
		<Box className="card-box">
			{items && items.map((item, k) => (
				<Card className="card" sx={{ maxWidth: 345 }} key={k}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							image={item.image}
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{sliceDescription(item.title,22)}
							</Typography>
							<Typography variant="body2" color="text.secondary" style={{ textAlign: "center" }}>
								{sliceDescription(item.description,120)}
							</Typography>
							<Button variant="contained" className="cart-button">ADD TO CART</Button>

						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</Box>
	</>
);
};

export default Store;