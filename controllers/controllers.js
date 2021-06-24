const db = require("../models");
const axios = require("axios");

const Fetch = db.fetchs;

exports.create = (req, res) => {
  axios
    .get("https://api.kawalcorona.com/indonesia")
    .then(function (response) {
      // handle success
      if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

      // Create a Tutorial
      const fetch = new Fetch({
        name: response.data[0].name,
        positif: response.data[0].positif,
        sembuh: response.data[0].sembuh,
        meninggal: response.data[0].meninggal,
        dirawat: response.data[0].dirawat,
      });

      // Save fetch in the database
      fetch
        .save(fetch)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial.",
          });
        });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
