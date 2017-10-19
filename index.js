// index.js
//var moment = require('moment');
import moment from 'moment';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "Barry",
    time = "today";
console.log(`Hello ${name}, how are you ${time}?`);