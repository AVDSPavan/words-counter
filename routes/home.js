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
			let words = body;
			words = words.replace(/[\n]/gi, " ");
			words = words.replace(/[^A-Za-z\']/gi, " ");
			words = words.split(" ");
			wordsCount = {};
			for (var i = 0; i < words.length; i++) {
				var word = words[i].toLowerCase();
				if (wordsCount[word] === undefined) {
					wordsCount[word] = 1;
				} else {
					wordsCount[word] += 1;
				}
			}
			delete wordsCount[""];
			// Create items array
			let items = Object.keys(wordsCount).map(function (key) {
				return [key, wordsCount[key]];
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
