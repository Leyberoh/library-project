function isLoggedIn(req, res, next) {
  if (req.session.userDetails) {
    next();
  } else {
    res.send("You are not logged in");
  }
}

module.exports = isLoggedIn;
