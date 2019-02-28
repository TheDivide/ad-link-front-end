// server.js
const express = require('express');
const app = express();
const path = require('path');
const debug = require('debug')('express-example');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/ad-link-ng-app/'));
// Start the app by listening on the default
// Heroku port
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/ad-link-ng-app/index.html'));
});