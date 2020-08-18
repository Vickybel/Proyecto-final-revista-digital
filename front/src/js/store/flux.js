/* const getState = ({ getStore, getActions, setStore }) => {
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
      // Authorization: Bearer ${store.currentUser.access_token}
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
}; */

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiUrl: "https://5000-c52f4e43-f7de-4e76-8ef8-5e8d0cd01d39.ws-us02.gitpod.io",
			magazine: {
				apiUrl: "https://5000-c9c6b521-788f-42eb-ae49-fadcea8f2c1a.ws-us02.gitpod.io/magazine",
				url: "https://5000-b4add0ee-14ad-4ce9-be91-b858ddcfbf50.ws-us02.gitpod.io",
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
