function json2csv(inputArr,separator) {
	var output = '';
	var _keys = '';
	var _sepa = separator || ',';

	for(var k in inputArr[0]){
		_keys += k + ',';
	}
	output += _keys.substr(0,_keys.length-1) + '\n'

	for (var i = 0; i < inputArr.length; i++) {
		var _obj = inputArr[i];
		var _line = '';

		for(var k in _obj){
			_line += _obj[k] + _sepa;
		}
		_line = _line.substr(0,_line.length-1) + '\n';

		output += _line;
	}

	return output;
}

module.exports = json2csv;