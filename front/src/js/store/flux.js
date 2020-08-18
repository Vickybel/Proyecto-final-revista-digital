const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiUrl: "https://5000-d71b49a7-8903-44db-ae1a-99aa5de996c2.ws-us02.gitpod.io",
			magazine: {
				magazines: [],
				magazine_name: "",
				magazine_date: "",
				magazine_glance: "",
				magazine_body: ""
			},
			banner: {
				carousel: [],
				carousel_name: "",
				carousel_size: "",
				carousel_body: ""
			},

			alertCreateNewMagazine: "",
			alertUpdateMagazine: "",
			alertDelete: "",
			AllMagazines: []
		},

		actions: {
			/* handleChange: e => {
				e.preventDefault();
				const { magazine } = getStore();
				magazine[e.target.name] = e.target.value;
				setStore({ magazine: magazine });
			}, */

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
				fetch(`https://5000-d71b49a7-8903-44db-ae1a-99aa5de996c2.ws-us02.gitpod.io/magazine${e.target.id}`, {
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
				fetch(`https://5000-d71b49a7-8903-44db-ae1a-99aa5de996c2.ws-us02.gitpod.io/magazine/${e.target.id}`, {
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
				fetch(
					`https://5000-d71b49a7-8903-44db-ae1a-99aa5de996c2.ws-us02.gitpod.io/magazine/${e.match.params.id}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ magazine: data });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
