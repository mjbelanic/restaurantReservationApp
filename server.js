var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
app = express();
app.set('port',process.env.PORT || 3000);

require("./app/routing/htmlRouting.js")(app);
require("./app/routing/apiRouting.js")(app);

app.listen(app.get('port') , function(){
    console.log("Application is listening on PORT: " + app.get('port'));
})