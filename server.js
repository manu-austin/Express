// tells node that we are creating an "express" server
const express = require("express");
const path = require("path");

// telling node we are using express 
const app = express();

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use public folder
app.use(express.static(path.join(__dirname, "public")));

// sets the port either default or 8080
const PORT = process.env.PORT || 8080;

// ================================================================================
// ROUTER
// points our server to a series of "route" files.
// these routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});