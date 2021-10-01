const text = require("../../data/api/text.json");
const getRandom = require("../../helpers/getRandom");

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
  const count = parseInt(req.query.count);

  if (req.query.count !== undefined) {
    if (isNaN(count)) {
      return res.status(400).json({
        status: 400,
        end_point: req.originalUrl,
        method: req.method,
        error: "The query param 'count' is not a valid number",
      });
    }

    if (count > 1) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push(text[getRandom(text.length)]);
      }

      return res.status(200).json({
        status: 200,
        end_point: req.originalUrl,
        method: req.method,
        data,
      });
    }
  }

  res.status(200).json({
    status: 200,
    end_point: req.originalUrl,
    method: req.method,
    data: text[getRandom(text.length)],
  });
};
