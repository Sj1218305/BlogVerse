const express = require('express')
const app = express();
var getCaretCoordinates = require('textarea-caret');
//console.log(getCaretCoordinates);
var path    = require("path");
const port = 3000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '.')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'));
});

app.get('/beta',function(req,res){
	res.render('index',{getCaretCoordinates : getCaretCoordinates});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})