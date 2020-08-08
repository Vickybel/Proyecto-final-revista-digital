const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			getMagazine: () => {
				fetch("https://5000-e415c755-f0d4-4272-8c20-df2b48e34360.ws-us02.gitpod.io/premium");
				const store = getStore();
				fetch("https://5000-c9c6b521-788f-42eb-ae49-fadcea8f2c1a.ws-us02.gitpod.io/magazine")
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
				formData.append("name", store.magazine_name);
				formData.append("date", store.magazine_date);

				//formData.append("name", store.name);
				//formData.append("lastname", store.lastname);

				// fetch(`${store.apiUrl}/update-profile`, {

				fetch("https://5000-c9c6b521-788f-42eb-ae49-fadcea8f2c1a.ws-us02.gitpod.io/magazine", {
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
