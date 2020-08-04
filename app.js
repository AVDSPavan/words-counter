const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
const homeRoutes = require("./routes/home");
const path = require("path");
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/api/", homeRoutes);

if (process.env.NODE_ENV == "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(port, () => {
	console.log(`app is running at ${port}`);
});
