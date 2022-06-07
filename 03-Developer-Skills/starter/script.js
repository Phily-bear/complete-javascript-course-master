// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 5;
if (x === 23) console.log(23);

const calcAge = (birthday) => 2037 - birthday;
console.log();

let sanbing = 'svnjkdsvndjk';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
    num: prompt('输入整数'),
  };

  console.log(measurement);
  console.log(measurement.num);
  console.log('你好啊');
  // B) FIND
  // console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
