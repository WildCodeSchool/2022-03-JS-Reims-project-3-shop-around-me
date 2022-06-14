const authRouter = require("express").Router();
const User = require("../models/UserManager");

authRouter.post("/checkCredentials", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email)
    .then((existingUserWithEmail) => {
      if (!existingUserWithEmail) return Promise.reject("WRONG_EMAIL");
      User.verifyPassword(password, existingUserWithEmail.password)
        .then((passwordIsCorrect) => {
          if (!passwordIsCorrect) return Promise.reject("WRONG_PASSWORD");
          res.sendStatus(200);
        })
        .catch((err) => {
          console.error(err);
          if (err === "WRONG_PASSWORD")
            res.status(401).json({ message: "Wrong password" });
          else res.status(500).send("Error connecting the user");
        });
    })
    .catch((err) => {
      console.error(err);
      if (err === "WRONG_EMAIL")
        res.status(401).json({ message: "Wrong email" });
      else res.status(500).send("Error connecting the user");
    });
});

module.exports = authRouter;
