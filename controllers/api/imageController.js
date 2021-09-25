const image = require("../../data/api/image.json");

module.exports.getAllImageJokes = (req, res) => {
  res.status(200).json({
    status: 200,
    total: image.length,
    end_point: req.originalUrl,
    method: req.method,
    data: image,
  });
};

module.exports.randomImageJoke = (req, res) => {
  const selectedIndex = Math.floor(Math.random() * image.length);
  res.status(200).json({
    status: 200,
    end_point: req.originalUrl,
    method: req.method,
    data: image[selectedIndex],
  });
};
