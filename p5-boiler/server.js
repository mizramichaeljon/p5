const express = require('express');
const app = express();
const p5port = 3000;


//-- Serve the directory -- //
/* 
the first argument is the web-address we attach to the end of the localhost:{port}/p5
the second argument is where to find the folder with the data
 */
app.use('/p5', express.static(__dirname + '/public'));

// Start the server
app.listen(p5port, () => {
  console.log(`the server running on port ${p5port}`);
});
