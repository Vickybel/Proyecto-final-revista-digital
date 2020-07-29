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
			banner: []
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
				fetch("https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/magazine")
					.then(res => res.json())
					.then(data => {
						setStore({ magazines: data });
					});
			}
		}
	};
};

export default getState;
