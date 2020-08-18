const getState = ({ getStore, setStore }) => {
	return {
		store: {
			magazine: {
				apiUrl: "https://5000-c9c6b521-788f-42eb-ae49-fadcea8f2c1a.ws-us02.gitpod.io/magazine",
				url: "https://5000-b4add0ee-14ad-4ce9-be91-b858ddcfbf50.ws-us02.gitpod.io",
				magazines: [],
				magazine_name: "",
				magazine_date: "",
				magazine_glance: "",
				magazine_body: ""
			},
			alertCreateNewMagazine: "",
			alertUpdateMagazine: "",
			alertDelete: "",
			AllMagazines: [],
			username: "",
			password: "",
			currentUser: null,
			error: null,
			isAuth: false
		},

		actions: {
			// handleChange: e => {
			// 	e.preventDefault();
			// 	const { magazine } = getStore();
			// 	magazine[e.target.name] = e.target.value;
			// 	setStore({ magazine: magazine });
			// },
			handleChange: e => {
				const { name, value } = e.target;
				setStore({ [name]: value });
			},
			handleFile: e => {
				const { name, files } = e.target;
				setStore({
					[name]: files[0]
				});
			},

			clearNotifications: () => {
				setStore({ alertCreateNewMagazine: "", alertUpdateMagazine: "" });
			},

			handleCreateNewMagazine: e => {
				e.preventDefault();
				const store = getStore();
				let formData = new FormData();
				formData.append("magazine", store.magazine);
				fetch("", {
					method: "POST",
					body: formData,
					headers: {
						//Authorization: `Bearer ${store.currentUser.access_token}`
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						let { magazines } = store;
						magazines["magazines"] = data.magazines;
						setStore({
							success: data.success,
							Magazines: Magazines,
							magazine_glance: null,
							magazine_body: null
						});
					})
					.then(data => {
						fetch("", {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({ AllContacts: data, alertCreateNewMagazine: "show" });
								document.getElementById("createMagazine").reset();
							})
							.catch(error => {
								console.log(error);
							});
					});
			},

			getAllMagazine: () => {
				fetch("", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ AllContacts: data });
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteMagazine: e => {
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.target.id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(resp => {
					if (resp.ok === true) {
						fetch("", {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({ AllMagazine: data, alertDelete: "Revista Eliminada" });
								alert(store.alertDelete);
							})
							.catch(error => {
								console.log(error);
							});
					}
				});
			},

			updateMagazine: (e, idform) => {
				e.preventDefault();
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.target.id}`, {
					method: "PUT",
					body: JSON.stringify(store.magazine),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(resp => {
					if (resp.ok === true) {
						fetch("", {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({ AllContacts: data, alertUpdateMagazine: "show" });
							})
							.catch(error => {
								console.log(error);
							});
					}
				});
			},

			GetMagazineToUpdate: e => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.match.params.id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ magazine: data });
					})
					.catch(error => {
						console.log(error);
					});
			},
			getLogin: async (e, history) => {
				e.preventDefault();
				const store = getStore();
				const data = {
					email: store.username,
					password: store.password
				};
				// const resp = await fetch(`${store.url}/login`, {

				const resp = await fetch("https://5000-b4add0ee-14ad-4ce9-be91-b858ddcfbf50.ws-us02.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				});

				const result = await resp.json();
				if (result.msg) {
					setStore({
						error: result.msg
					});
				} else {
					setStore({
						username: "",
						password: "",
						currentUser: result,
						error: null
					});
					history.push("/");
				}
			}
		}
	};
};

export default getState;
