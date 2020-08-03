import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

export const Banner = () => {
	const { store } = useContext(Context);
	return (
		<>
			{!!store.banners &&
				store.banners.map(item => {
					const name = item.name;
					const img = item.body;
					if ((item.size = "260x160")) {
						return <Card.Img src={img} alt={name} className="banner_pequeño" />;
					} else if ((item.size = "260x460")) {
						return <Card.Img src={img} alt={name} className="banner_grande" />;
					} else if (item.size != "260x160" && item.size != "260x460") {
						return <Card.Text>Ups!, algo anda mal, este anuncio se encuentra en desarrollo</Card.Text>;
					}
				})}
		</>
	);
};
