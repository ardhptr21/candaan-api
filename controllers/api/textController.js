const text = require("../../data/api/text.json");

module.exports.getAllTextJokes = (req, res) => {
  res.status(200).json({
    status: 200,
    total: text.length,
    end_point: req.originalUrl,
    method: req.method,
    data: text,
  });
};

module.exports.randomTextJoke = (req, res) => {
  const selectedIndex = Math.floor(Math.random() * text.length);
  res.status(200).json({
    status: 200,
    end_point: req.originalUrl,
    method: req.method,
    data: text[selectedIndex],
  });
};
