const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const port = 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.engine("html", require("ejs").__express);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// CORS 설정
app.use(cors());

app.get("/", (req, res, next) => {
	res.render("/index");
});

app.listen(port, () => {
	console.log(`Server is running at ${port}`);
});
