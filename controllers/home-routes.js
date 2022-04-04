const router = require("express").Router();

// get all posts to display on homepage
router.get("/", async (req, res) => {
  try {
    //We will go into the db and get all posts
    res.render("all-posts");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Next endpoint will be a get request post/:id
// when a user selects a blog from the list on homepage

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("sign-up");
});

module.exports = router;
