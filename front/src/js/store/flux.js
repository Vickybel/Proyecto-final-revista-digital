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
			url_magazine: "https://5000-b8b51ae6-b147-4b20-bf2b-061f1de363ad.ws-us02.gitpod.io/magazine",
			magazines: [],
			banners: [],
			carousels: [],

			magazine_name: null,
			magazine_date: null,
			magazine_glance: null,
			magazine_body: null
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
				const store = getStore();
				fetch("https://5000-dcf25949-9e95-4385-8b93-6191affea14e.ws-us02.gitpod.io/magazine")
					.then(res => res.json())
					.then(data => {
						setStore({ magazines: data });
					});
			},
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value[0]
				});
			},
			handleFile: e => {
				const { name, files } = e.target;
				setStore({
					[name]: files[0]
				});
			},
			handleUpdateMagazine: e => {
				e.preventDefault();
				const store = getStore();

				let formData = new FormData();
				formData.append("glance", store.magazine_glance);
				// formData.append("name", store.magazine_name);
				// formData.append("date", store.magazine_date);

				//formData.append("name", store.name);
				//formData.append("lastname", store.lastname);

				// fetch(`${store.apiUrl}/update-profile`, {

				fetch("https://5000-dcf25949-9e95-4385-8b93-6191affea14e.ws-us02.gitpod.io/magazine", {
					method: "POST",
					body: formData,
					headers: {
						// Authorization: `Bearer ${store.currentUser.access_token}`
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						// let {currentUser} = store;
						// currentUser['user'] = data.user;
						setStore({
							// success: data.success,
							// currentUser: currentUser,
							magazine_glance: null
						});
					});
			},
			getBanner: () => {
				fetch("https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/banner")
					.then(res => res.json())
					.then(data => {
						setStore({ banners: data });
					});
			},
			getCarousel: () => {
				fetch("https://5000-ddd8b02e-6351-44cc-82b7-00ec1e966a70.ws-us02.gitpod.io/carousel")
					.then(res => res.json())
					.then(data => {
						setStore({ carousels: data });
					});
			}
		}
	};
};

export default getState;
