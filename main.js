var request = require("request");
var url = "http://www.omdbapi.com/?t=";
var searchTerm = "harry";

request(url+searchTerm, function(err, res, body) {
console.log(body);
console.log(err);
});
