const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const { q, name, apikey } = req.query;
  res.json({ msg: "get API-controllers", q, name, apikey });
};

const usersPut = (req, res = response) => {
  const { id } = req.params;
  res.json({ msg: "put API-controllers", id });
};

const usersPost = (req, res) => {
  const body = req.body;
  res.json({ msg: "post API-controllers", body });
};
const usersDelete = (req, res) => {
  res.send({ msg: "delete API-controllers" });
};

module.exports = { usersGet, usersPut, usersPost, usersDelete };
