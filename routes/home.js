const express = require("express");
const router = express.Router();
const fs = require("fs");
const request = require("request");
router.param("limit", (req, res, next, limit) => {
	req.word_limit = limit;
	next();
});

router.get("/:limit", (req, res) => {
	request.get("https://terriblytinytales.com/test.txt", function (
		error,
		response,
		body
	) {
		if (!error && response.statusCode == 200) {
			let data = body;
			data = data.replace(/[\n]/gi, " ");
			data = data.replace(/[^A-Za-z\']/gi, " ");
			data = data.split(" ");
			output = {};
			for (var i = 0; i < data.length; i++) {
				var word = data[i];
				if (output[word] === undefined) {
					output[word] = 1;
				} else {
					output[word] += 1;
				}
			}
			delete output[""];
			// Create items array
			let items = Object.keys(output).map(function (key) {
				return [key, output[key]];
			});

			// Sort the array based on the second element
			items.sort(function (first, second) {
				return second[1] - first[1];
			});

			// Create a new array with only the first 5 items
			return res.json(items.slice(0, req.word_limit));
		}
	});
});

module.exports = router;
