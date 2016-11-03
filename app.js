function a() {
	console.log(JSON.stringify({
		"items": [

			{
				"uid": "desktop",
				"type": "file",
				"title": "Desktop",
				"subtitle": "~/Desktop",
				"arg": "~/Desktop",
				"autocomplete": "Desktop",
				"icon": {
					"type": "fileicon",
					"path": "~/Desktop"
				}
			},

			{
				"valid": false,
				"uid": "flickr",
				"title": "Flickr",
				"icon": {
					"path": "flickr.png"
				}
			},

			{
				"uid": "image",
				"type": "file",
				"title": "My holiday photo",
				"subtitle": "~/Pictures/My holiday photo.jpg",
				"autocomplete": "My holiday photo",
				"icon": {
					"type": "filetype",
					"path": "public.jpeg"
				}
			},

			{
				"valid": false,
				"uid": "alfredapp",
				"title": "Alfred Website",
				"subtitle": "https://www.alfredapp.com/",
				"arg": "alfredapp.com",
				"autocomplete": "Alfred Website",
				"quicklookurl": "https://www.alfredapp.com/",
				"mods": {
					"alt": {
						"valid": true,
						"arg": "alfredapp.com/powerpack",
						"subtitle": "https://www.alfredapp.com/powerpack/"
					},
					"cmd": {
						"valid": true,
						"arg": "alfredapp.com/powerpack/buy/",
						"subtitle": "https://www.alfredapp.com/powerpack/buy/"
					},
				},
				"text": {
					"copy": "https://www.alfredapp.com/ (text here to copy)",
					"largetype": "https://www.alfredapp.com/ (text here for large type)"
				}
			}

		]
	}))
}

let request = require('request');

function query(word) {
	let items = [];
	request.get('http://ggoer.com/word/' + word, function (err, res, body) {
		// let obj;
		if (body) {

			let json = JSON.parse(body);
			json.paraphrases.forEach((p) => {
				items.push({
					title: p.english_type+' '+p.chinese,
					subtitle:p.sample_sentence[0]
				})
			})
			console.log(JSON.stringify({
				items
			}));
		}
	})
}

module.exports = query