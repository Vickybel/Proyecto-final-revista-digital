import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Banner = () => {
	const { store } = useContext(Context);
	return (
		<>
			{!!store.banners &&
				store.banners.map(item => {
					const name = item.name;
					const img = item.body;
					if ((item.size = "260x160")) {
						return <img src={img} alt={name} className="banner_pequeño" />;
					}
					if ((item.size = "260x460")) {
						return <img src={img} alt={name} className="banner_grande" />;
					}
					if (item.size != "260x160" && item.size != "260x460") {
						return <p>Ups!, algo anda mal, este anuncio se encuentra en desarrollo</p>;
					}
					// } else {
					// 	return <p>Ups!, algo anda mal, este anuncio se encuentra en desarrollo</p>;
					// }
				})}
		</>
	);
};
