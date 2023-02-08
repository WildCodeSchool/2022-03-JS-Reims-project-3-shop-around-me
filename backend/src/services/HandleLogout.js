const handleLogout = (req, res) => {
  res.clearCookie("accessToken", { httpOnly: true });
  res.clearCookie("refreshToken", { httpOnly: true });
  res.sendStatus(200);
};

module.exports = handleLogout;
