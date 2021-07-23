
'use strict';
module.exports = leftPad;

function leftPad (str='', len=0, ch=' ') {
  return str.padStart(len, ch)
}
