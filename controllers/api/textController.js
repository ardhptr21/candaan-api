const text = require("../../data/api/text.json");

module.exports.getAllTextJokes = (req, res) => {
  res.status(200).json({
    total: text.length,
    route: req.originalUrl,
    method: req.method,
    data: text,
  });
};

module.exports.randomTextJoke = (req, res) => {
  const selectedIndex = Math.floor(Math.random() * text.length);
  res.status(200).json({
    route: req.originalUrl,
    method: req.method,
    data: text[selectedIndex],
  });
};
