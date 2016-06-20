var input = require('./input.json');
var fs = require('fs');
var json2csv = require('../lib/json2csv');


describe('json2csv',()=>{
	var output = json2csv(input);

	it('should convert to csv format',()=>{
		return output = 'id,name,time\n1,abc,2014-8-27 3:29:00\n2,efg,2014-8-27 3:29:00\n3,hij,2014-8-27 3:29:00';
	})

	it('should write to file output.csv',(done)=>{
		fs.writeFile('output.csv', output , function (err) {
		  if (err) return console.log(err);
		  done();
		});
	})
})




