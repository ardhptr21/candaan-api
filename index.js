const express = require("express");
const cors = require("cors");
const chalk = require("chalk");

const textRoutes = require("./routes/api/text.js");
const imageRoutes = require("./routes/api/image");

const app = express();
const PORT = process.env.PORT || 3000 || 5000 || 8080;

/**============================================
 *               SETUP MIDDLEWARE
 *=============================================**/
app.use(cors());
app.set("json spaces", 2);

/**============================================
 *               SETUP ROUTES
 *=============================================**/
app.get("/", (req, res) => {
  res.status(200).json({
    api_name: "Candaan API",
    author: "ardhptr21",
    description:
      "Candaan API merupakan Rest API yang dibuat untuk mendapatkan beberapa jokes jokes receh dari Indonesia, semua data data yang ada di Candaan API diambil dari internet yang kemudian dikumpulkan menjadi satu, untuk dibuat Rest API",
    version: "v1.0.0",
    end_points: {
      "/api/text": "Mendapatkan semua data candaan berupa teks",
      "/api/text/random": "Mendapatkan satu data candaan berupa teks secara random",
      "/api/image": "Mendapatkan semua data candaan berupa gambar secara random",
      "/api/image/random": "Mendapatkan satu data candaan berupa gambar secara random",
    },
    repository: "https://github.com/ardhptr21/candaan-api",
    email: "ardhiputrapradana21@gmail.com",
    social: {
      github: "https://github.com/ardhptr21",
      instagram: "https://instagram.com/ardhptr21",
      twitter: "https://twitter.com/ardhptr21",
    },
  });
});

app.use("/api/text", textRoutes);
app.use("/api/image", imageRoutes);

/**============================================
 *               LISTENING APP
 *=============================================**/
app.listen(PORT, () => console.log(chalk.blue.bold(`App now running on port ${chalk.yellow(PORT)}, yeayy😉`)));
