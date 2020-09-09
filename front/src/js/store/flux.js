const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiUrl: "https://5000-f640acd6-33c8-4560-a61e-674066f61a41.ws-us02.gitpod.io/",
			magazine: {
				magazines: [],
				magazine_name: "",
				magazine_date: "",
				magazine_glance: "",
				magazine_body: ""
			},
			carousel: {
				carousel: [],
				carousel_name: "",
				carousel_size: "",
				carousel_body: ""
			},
			banner: {
				banner: [],
				banner_name: "",
				banner_size: "",
				banner_body: ""
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
				formData.append("user_type", "admin");
				formData.append("name", store.magazine.magazine_name);
				formData.append("date", store.magazine.magazine_date);
				formData.append("glance", store.magazine.magazine_glance);
				formData.append("body", store.magazine.magazine_body);
				formData.append("premium_id", 1);
				formData.append("admin_id", 1);
				fetch(`${store.apiUrl}/magazine/25`, {
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
				fetch(`https://5000-b5e73340-cac7-42f0-adf0-db1bf1692c22.ws-us02.gitpod.io/magazine${e.target.id}`, {
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
				fetch(`https://5000-b5e73340-cac7-42f0-adf0-db1bf1692c22.ws-us02.gitpod.io/${e.target.id}`, {
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
				fetch(`https://5000-b5e73340-cac7-42f0-adf0-db1bf1692c22.ws-us02.gitpod.io/${e.match.params.id}`, {
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

				const resp = await fetch("https://5000-f640acd6-33c8-4560-a61e-674066f61a41.ws-us02.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				});

				const result = await resp.json();
				if (result.msg) {
					setStore({
						isAuth: null,
						error: result.msg
					});
				} else {
					setStore({
						username: "",
						password: "",
						currentUser: result,
						error: null,
						isAuth: true
					});

					localStorage.setItem("currentUser", JSON.stringify(result));
					localStorage.setItem("isAuth", true);

					history.push("/");
				}
			},
			isAuthenticated: () => {
				if (localStorage.getItem("isAuth")) {
					setStore({
						currentUser: JSON.parse(localStorage.getItem("currentUser")),
						isAuth: JSON.parse(localStorage.getItem("isAuth"))
					});
				}
			},
			logout: history => {
				if (localStorage.getItem("isAuth")) {
					localStorage.removeItem("isAuth");
					localStorage.removeItem("currentUser");
					setStore({
						error: null,
						isAuth: false,
						currentUser: null
					});
					history.push("/login");
				}
			}
		}
	};
};

export default getState;
