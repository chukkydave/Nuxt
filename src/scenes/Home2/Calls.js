const apiPath = 'https://justaportfolio.herokuapp.com/api/v1/';
function getAbout() {
	// axios({
	// 	method: 'get',
	// 	url: `${apiPath}view/contacts`,

	// 	// headers: { Authorization: token },
	// })
	// 	.then((res) => {
	// 		return res.data.contacts;
	// 		// this.setState({
	// 		// 	about: res.data.contacts,
	// 		// });
	// 	})
	// 	.catch((error) => {
	// 		// return error;
	// 		this.setState({
	// 			about: '',
	// 		});
	// 	});

	return fetch(`${apiPath}view/contacts`).then((data) => data.json());
}

function getServices() {
	// axios({
	// 	method: 'get',
	// 	url: `${apiPath}view/services`,

	// 	// headers: { Authorization: token },
	// })
	// 	.then((res) => {
	// 		// if (res.data.services.length > 0) {
	// 		// return res.data.services;
	// 		this.setState({
	// 			service: res.data.services,
	// 		});
	// 		// }
	// 	})
	// 	.catch((error) => {
	// 		// return error;
	// 		this.setState({
	// 			service: '',
	// 		});
	// 	});
	return fetch(`${apiPath}view/services`).then((data) => data.json());
}

function getEducation() {
	// 	axios({
	// 		method: 'get',
	// 		url: `${apiPath}view/education`,

	// 		// headers: { Authorization: token },
	// 	})
	// 		.then((res) => {
	// 			// if (res.data.education.length > 0) {
	// 			// return res.data.education;
	// 			this.setState({
	// 				education: res.data.education,
	// 			});
	// 			// }
	// 		})
	// 		.catch((error) => {
	// 			// return error;
	// 			this.setState({
	// 				education: '',
	// 			});
	// 		});
	return fetch(`${apiPath}view/education`).then((data) => data.json());
}

function getExperience() {
	// 	axios({
	// 		method: 'get',
	// 		url: `${apiPath}view/experience`,

	// 		// headers: { Authorization: token },
	// 	})
	// 		.then((res) => {
	// 			// if (res.data.experience.length > 0) {
	// 			// return res.data.experience;
	// 			this.setState({
	// 				experience: res.data.experience,
	// 			});
	// 			// }
	// 		})
	// 		.catch((error) => {
	// 			// return error;
	// 			this.setState({
	// 				experience: '',
	// 			});
	// 		});
	return fetch(`${apiPath}view/experience`).then((data) => data.json());
}

function getCategory() {
	// 	axios({
	// 		method: 'get',
	// 		url: `${apiPath}view/category`,

	// 		// headers: { Authorization: token },
	// 	})
	// 		.then((res) => {
	// 			// if (res.data.categories.length > 0) {
	// 			// return res.data.categories;
	// 			this.setState({
	// 				category: res.data.categories,
	// 			});
	// 			// }
	// 		})
	// 		.catch((error) => {
	// 			// return error;
	// 			this.setState({
	// 				category: '',
	// 			});
	// 		});
	return fetch(`${apiPath}view/category`).then((data) => data.json());
}

function getPortfolio() {
	// 	axios({
	// 		method: 'get',
	// 		url: `${apiPath}view/portfolio`,

	// 		// headers: { Authorization: token },
	// 	})
	// 		.then((res) => {
	// 			// if (res.data.portfolio.length > 0) {
	// 			// return res.data.portfolio;
	// 			this.setState({
	// 				portfolio: res.data.portfolio,
	// 			});
	// 			// }
	// 		})
	// 		.catch((error) => {
	// 			// return error;
	// 			this.setState({
	// 				portfolio: '',
	// 			});
	// 		});
	return fetch(`${apiPath}view/portfolio`).then((data) => data.json());
}

function getBlog() {
	// 	axios({
	// 		method: 'get',
	// 		url: `${apiPath}view/blog`,

	// 		// headers: { Authorization: token },
	// 	})
	// 		.then((res) => {
	// 			// return res.data.blog;
	// 			this.setState({
	// 				blog: res.data.blog,
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			// return error;
	// 			this.setState({
	// 				blog: '',
	// 			});
	// 		});
	return fetch(`${apiPath}view/blog`).then((data) => data.json());
}

export { getAbout, getServices, getPortfolio, getExperience, getEducation, getCategory, getBlog };
