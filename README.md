# json2csv
Convert JSON array to CSV strings


## Usage

```
$ npm install somax/json2csv  --save
```

## Example
```
var fs = require('fs'),
    json2csv = require('json2csv');

var input = require('./input.json');
var output = json2csv(input);

fs.writeFile('output.csv', output , (err)=> {
    if (err) return console.log(err);
    console.log('Done!');
});
```