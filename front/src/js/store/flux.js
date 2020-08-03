const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			url_magazine: "https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/magazine",
			magazines: [],
			banners: [],
			carousels: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getMagazine: () => {
				// const store = getStore();
				//fetch("https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/magazine")
				fetch("https://5000-e415c755-f0d4-4272-8c20-df2b48e34360.ws-us02.gitpod.io/premium")
					.then(res => res.json())
					.then(data => {
						setStore({ magazines: data });
					});
			},
			getBanner: () => {
				//fetch("https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/banner")
				fetch("https://5000-e415c755-f0d4-4272-8c20-df2b48e34360.ws-us02.gitpod.io/premium")
					.then(res => res.json())
					.then(data => {
						setStore({ banners: data });
					});
			},
			getCarousel: () => {
				//fetch("https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/carousel")
				fetch("https://5000-e415c755-f0d4-4272-8c20-df2b48e34360.ws-us02.gitpod.io/premium")
					.then(res => res.json())
					.then(data => {
						setStore({ carousels: data });
					});
			}
		}
	};
};

export default getState;
