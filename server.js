const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(_dirname + '/dist/interfaz-proyecto'));

app.get('/*', function(req, res){
res.sendFile(path.join(_dirname + '/dist/interfaz-proyecto/index.html'));
});

app.listen(process.env.PORT || 5000);
