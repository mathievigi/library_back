const notFoundHandler = (req, res) => {
  res.status(404).json({ error: "Page not found" });
};
module.exports = notFoundHandler