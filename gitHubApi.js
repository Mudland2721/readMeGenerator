// require axios to make api call
const axios = require("axios");

// api to https github
const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}/events/public`).catch(error => {});

  }
};

//export to js files 
module.exports = api;

