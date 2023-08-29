const router = require("express").Router();

const Book = require("../models/Book.model.js");
const Author = require("../models/Author.model");

router.get("/authors", (req, res, next) => {
  Author.find()
    .then((allTheAuthorsFromDB) => {
      res.render("authors/authors-list.hbs", { allTheAuthorsFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the authors from the DB: ", error);
      next(error);
    });
});

module.exports = router;
