import { DateTime } from 'luxon';
import jmespath from 'jmespath';

import { UnwrapInput } from './tools.js';

import input from '../data/inputShort.json' assert { type: "json" };

console.log("Input: ");
console.log(input);

// TODO: auto replace UnwrapInput(input) -> $input.all()
var data = input; // UnwrapInput(input);

// TODO: auto replace jmespath.search() -> $jmespath()

var subTaskModels = jmespath.search(data, "sum([].\"Stock value\".to_number(@))");

var result = [];

//return result;
