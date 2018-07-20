/**
 * angular-input-masks
 * Personalized input masks for AngularJS
 * @version v4.2.1
 * @link http://github.com/assisrafael/angular-input-masks
 * @license MIT
 */
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUTCMinutes;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setUTCMinutes(date.getUTCMinutes() + amount);
  return date;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneObject;
function cloneObject(dirtyObject) {
  dirtyObject = dirtyObject || {};
  var object = {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object;
}
module.exports = exports["default"];
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCDayOfYear;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear(dirtyDate, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCISOWeek;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfUTCISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../startOfUTCISOWeekYear/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek(dirtyDate, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var diff = (0, _index4.default)(date, dirtyOptions).getTime() - (0, _index6.default)(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34,"../startOfUTCISOWeek/index.js":10,"../startOfUTCISOWeekYear/index.js":11}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCISOWeekYear;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfUTCISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0, _index4.default)(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0, _index4.default)(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
module.exports = exports['default'];
},{"../../toDate/index.js":34,"../startOfUTCISOWeek/index.js":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCDay;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var day = Number(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISODay;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
  var day = Number(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISOWeek;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../getUTCISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = (0, _index4.default)(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34,"../getUTCISOWeek/index.js":4}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISOWeekYear;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfUTCISOWeekYear/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeekYear(dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var isoYear = Number(dirtyISOYear);
  var dateStartOfYear = (0, _index4.default)(date, dirtyOptions);
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  date = (0, _index4.default)(fourthOfJanuary, dirtyOptions);
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34,"../startOfUTCISOWeekYear/index.js":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCISOWeek;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
  var weekStartsOn = 1;

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
module.exports = exports['default'];
},{"../../toDate/index.js":34}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCISOWeekYear;

var _index = require('../getUTCISOWeekYear/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfUTCISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
  var year = (0, _index2.default)(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0, _index4.default)(fourthOfJanuary, dirtyOptions);
  return date;
}
module.exports = exports['default'];
},{"../getUTCISOWeekYear/index.js":5,"../startOfUTCISOWeek/index.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMilliseconds;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var timestamp = (0, _index2.default)(dirtyDate, dirtyOptions).getTime();
  var amount = Number(dirtyAmount);
  return new Date(timestamp + amount);
}
module.exports = exports['default'];
},{"../toDate/index.js":34}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMinutes;

var _index = require('../addMilliseconds/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_MINUTE = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = Number(dirtyAmount);
  return (0, _index2.default)(dirtyDate, amount * MILLISECONDS_IN_MINUTE, dirtyOptions);
}
module.exports = exports['default'];
},{"../addMilliseconds/index.js":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/getUTCDayOfYear/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/getUTCISOWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../../_lib/getUTCISOWeekYear/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function M(date) {
    return date.getUTCMonth() + 1;
  },

  // Month: 1st, 2nd, ..., 12th
  'Mo': function Mo(date, options) {
    var month = date.getUTCMonth() + 1;
    return options.locale.localize.ordinalNumber(month, { unit: 'month' });
  },

  // Month: 01, 02, ..., 12
  'MM': function MM(date) {
    return addLeadingZeros(date.getUTCMonth() + 1, 2);
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function MMM(date, options) {
    return options.locale.localize.month(date.getUTCMonth(), { type: 'short' });
  },

  // Month: January, February, ..., December
  'MMMM': function MMMM(date, options) {
    return options.locale.localize.month(date.getUTCMonth(), { type: 'long' });
  },

  // Quarter: 1, 2, 3, 4
  'Q': function Q(date) {
    return Math.ceil((date.getUTCMonth() + 1) / 3);
  },

  // Quarter: 1st, 2nd, 3rd, 4th
  'Qo': function Qo(date, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    return options.locale.localize.ordinalNumber(quarter, { unit: 'quarter' });
  },

  // Day of month: 1, 2, ..., 31
  'D': function D(date) {
    return date.getUTCDate();
  },

  // Day of month: 1st, 2nd, ..., 31st
  'Do': function Do(date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDate(), { unit: 'dayOfMonth' });
  },

  // Day of month: 01, 02, ..., 31
  'DD': function DD(date) {
    return addLeadingZeros(date.getUTCDate(), 2);
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function DDD(date) {
    return (0, _index2.default)(date);
  },

  // Day of year: 1st, 2nd, ..., 366th
  'DDDo': function DDDo(date, options) {
    return options.locale.localize.ordinalNumber((0, _index2.default)(date), { unit: 'dayOfYear' });
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function DDDD(date) {
    return addLeadingZeros((0, _index2.default)(date), 3);
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function dd(date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), { type: 'narrow' });
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function ddd(date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), { type: 'short' });
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function dddd(date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), { type: 'long' });
  },

  // Day of week: 0, 1, ..., 6
  'd': function d(date) {
    return date.getUTCDay();
  },

  // Day of week: 0th, 1st, 2nd, ..., 6th
  'do': function _do(date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDay(), { unit: 'dayOfWeek' });
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function E(date) {
    return date.getUTCDay() || 7;
  },

  // ISO week: 1, 2, ..., 53
  'W': function W(date) {
    return (0, _index4.default)(date);
  },

  // ISO week: 1st, 2nd, ..., 53th
  'Wo': function Wo(date, options) {
    return options.locale.localize.ordinalNumber((0, _index4.default)(date), { unit: 'isoWeek' });
  },

  // ISO week: 01, 02, ..., 53
  'WW': function WW(date) {
    return addLeadingZeros((0, _index4.default)(date), 2);
  },

  // Year: 00, 01, ..., 99
  'YY': function YY(date) {
    return addLeadingZeros(date.getUTCFullYear(), 4).substr(2);
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function YYYY(date) {
    return addLeadingZeros(date.getUTCFullYear(), 4);
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function GG(date) {
    return String((0, _index6.default)(date)).substr(2);
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function GGGG(date) {
    return (0, _index6.default)(date);
  },

  // Hour: 0, 1, ... 23
  'H': function H(date) {
    return date.getUTCHours();
  },

  // Hour: 00, 01, ..., 23
  'HH': function HH(date) {
    return addLeadingZeros(date.getUTCHours(), 2);
  },

  // Hour: 1, 2, ..., 12
  'h': function h(date) {
    var hours = date.getUTCHours();
    if (hours === 0) {
      return 12;
    } else if (hours > 12) {
      return hours % 12;
    } else {
      return hours;
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function hh(date) {
    return addLeadingZeros(formatters['h'](date), 2);
  },

  // Minute: 0, 1, ..., 59
  'm': function m(date) {
    return date.getUTCMinutes();
  },

  // Minute: 00, 01, ..., 59
  'mm': function mm(date) {
    return addLeadingZeros(date.getUTCMinutes(), 2);
  },

  // Second: 0, 1, ..., 59
  's': function s(date) {
    return date.getUTCSeconds();
  },

  // Second: 00, 01, ..., 59
  'ss': function ss(date) {
    return addLeadingZeros(date.getUTCSeconds(), 2);
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function S(date) {
    return Math.floor(date.getUTCMilliseconds() / 100);
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function SS(date) {
    return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2);
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function SSS(date) {
    return addLeadingZeros(date.getUTCMilliseconds(), 3);
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function Z(date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset(), ':');
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function ZZ(date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset());
  },

  // Seconds timestamp: 512969520
  'X': function X(date, options) {
    var originalDate = options._originalDate || date;
    return Math.floor(originalDate.getTime() / 1000);
  },

  // Milliseconds timestamp: 512969520900
  'x': function x(date, options) {
    var originalDate = options._originalDate || date;
    return originalDate.getTime();
  },

  // AM, PM
  'A': function A(date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'uppercase' });
  },

  // am, pm
  'a': function a(date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'lowercase' });
  },

  // a.m., p.m.
  'aa': function aa(date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'long' });
  }
};

function formatTimezone(offset, delimeter) {
  delimeter = delimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
}

function addLeadingZeros(number, targetLength) {
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output;
}

exports.default = formatters;
module.exports = exports['default'];
},{"../../../_lib/getUTCDayOfYear/index.js":3,"../../../_lib/getUTCISOWeek/index.js":4,"../../../_lib/getUTCISOWeekYear/index.js":5}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../isValid/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../locale/en-US/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./_lib/formatters/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../_lib/cloneObject/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../_lib/addUTCMinutes/index.js');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 * | Long format             | LT    | 05:30 a.m.                       |
 * |                         | LTS   | 05:30:15 a.m.                    |
 * |                         | L     | 07/02/1995                       |
 * |                         | l     | 7/2/1995                         |
 * |                         | LL    | July 2 1995                      |
 * |                         | ll    | Jul 2 1995                       |
 * |                         | LLL   | July 2 1995 05:30 a.m.           |
 * |                         | lll   | Jul 2 1995 05:30 a.m.            |
 * |                         | LLLL  | Sunday, July 2 1995 05:30 a.m.   |
 * |                         | llll  | Sun, Jul 2 1995 05:30 a.m.       |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || _index6.default;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var localeFormatters = locale.formatters || {};
  var formattingTokensRegExp = locale.formattingTokensRegExp || defaultFormattingTokensRegExp;
  var formatLong = locale.formatLong;

  var originalDate = (0, _index2.default)(dirtyDate, options);

  if (!(0, _index4.default)(originalDate, options)) {
    return 'Invalid Date';
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = originalDate.getTimezoneOffset();
  var utcDate = (0, _index12.default)(originalDate, -timezoneOffset, options);

  var formatterOptions = (0, _index10.default)(options);
  formatterOptions.locale = locale;
  formatterOptions.formatters = _index8.default;

  // When UTC functions will be implemented, options._originalDate will likely be a part of public API.
  // Right now, please don't use it in locales. If you have to use an original date,
  // please restore it from `date`, adding a timezone offset to it.
  formatterOptions._originalDate = originalDate;

  var result = formatStr.replace(longFormattingTokensRegExp, function (substring) {
    if (substring[0] === '[') {
      return substring;
    }

    if (substring[0] === '\\') {
      return cleanEscapedString(substring);
    }

    return formatLong(substring);
  }).replace(formattingTokensRegExp, function (substring) {
    var formatter = localeFormatters[substring] || _index8.default[substring];

    if (formatter) {
      return formatter(utcDate, formatterOptions);
    } else {
      return cleanEscapedString(substring);
    }
  });

  return result;
}

function cleanEscapedString(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '');
  }
  return input.replace(/\\/g, '');
}
module.exports = exports['default'];
},{"../_lib/addUTCMinutes/index.js":1,"../_lib/cloneObject/index.js":2,"../isValid/index.js":16,"../locale/en-US/index.js":29,"../toDate/index.js":34,"./_lib/formatters/index.js":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValid;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  return !isNaN(date);
}
module.exports = exports['default'];
},{"../toDate/index.js":34}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFormatLongFn;
var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;

function buildShortLongFormat(format) {
  return format.replace(tokensToBeShortedPattern, function (token) {
    return token.slice(1);
  });
}

/**
 * @name buildFormatLongFn
 * @category Locale Helpers
 * @summary Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 *
 * @description
 * Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 * Returns a function which takes one of the following tokens as the argument:
 * `'LTS'`, `'LT'`, `'L'`, `'LL'`, `'LLL'`, `'l'`, `'ll'`, `'lll'`, `'llll'`
 * and returns a long format string written as `format` token strings.
 * See [format]{@link https://date-fns.org/docs/format}
 *
 * `'l'`, `'ll'`, `'lll'` and `'llll'` formats are built automatically
 * by shortening some of the tokens from corresponding unshortened formats
 * (e.g., if `LL` is `'MMMM DD YYYY'` then `ll` will be `MMM D YYYY`)
 *
 * @param {Object} obj - the object with long formats written as `format` token strings
 * @param {String} obj.LT - time format: hours and minutes
 * @param {String} obj.LTS - time format: hours, minutes and seconds
 * @param {String} obj.L - short date format: numeric day, month and year
 * @param {String} [obj.l] - short date format: numeric day, month and year (shortened)
 * @param {String} obj.LL - long date format: day, month in words, and year
 * @param {String} [obj.ll] - long date format: day, month in words, and year (shortened)
 * @param {String} obj.LLL - long date and time format
 * @param {String} [obj.lll] - long date and time format (shortened)
 * @param {String} obj.LLLL - long date, time and weekday format
 * @param {String} [obj.llll] - long date, time and weekday format (shortened)
 * @returns {Function} `formatLong` property of the locale
 *
 * @example
 * // For `en-US` locale:
 * locale.formatLong = buildFormatLongFn({
 *   LT: 'h:mm aa',
 *   LTS: 'h:mm:ss aa',
 *   L: 'MM/DD/YYYY',
 *   LL: 'MMMM D YYYY',
 *   LLL: 'MMMM D YYYY h:mm aa',
 *   LLLL: 'dddd, MMMM D YYYY h:mm aa'
 * })
 */
function buildFormatLongFn(obj) {
  var formatLongLocale = {
    LTS: obj.LTS,
    LT: obj.LT,
    L: obj.L,
    LL: obj.LL,
    LLL: obj.LLL,
    LLLL: obj.LLLL,
    l: obj.l || buildShortLongFormat(obj.L),
    ll: obj.ll || buildShortLongFormat(obj.LL),
    lll: obj.lll || buildShortLongFormat(obj.LLL),
    llll: obj.llll || buildShortLongFormat(obj.LLLL)
  };

  return function (token) {
    return formatLongLocale[token];
  };
}
module.exports = exports["default"];
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildLocalizeArrayFn;
/**
 * @name buildLocalizeArrayFn
 * @category Locale Helpers
 * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @returns {Function} the resulting function
 *
 * @example
 * var weekdayValues = {
 *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
 *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 * }
 * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'long')
 * locale.localize.weekdays({type: 'narrow'}) //=> ['Su', 'Mo', ...]
 * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
 */
function buildLocalizeArrayFn(values, defaultType) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    return values[type] || values[defaultType];
  };
}
module.exports = exports["default"];
},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildLocalizeFn;
/**
 * @name buildLocalizeFn
 * @category Locale Helpers
 * @summary Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale
 * used by `format` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * `localize.weekday` function takes the weekday index as argument (0 - Sunday).
 * `localize.month` takes the month index (0 - January).
 * `localize.timeOfDay` takes the hours. Use `indexCallback` to convert them to an array index (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @param {Function} [indexCallback] - the callback which takes the resulting function argument
 *   and converts it into value array index
 * @returns {Function} the resulting function
 *
 * @example
 * var timeOfDayValues = {
 *   uppercase: ['AM', 'PM'],
 *   lowercase: ['am', 'pm'],
 *   long: ['a.m.', 'p.m.']
 * }
 * locale.localize.timeOfDay = buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
 *   // 0 is a.m. array index, 1 is p.m. array index
 *   return (hours / 12) >= 1 ? 1 : 0
 * })
 * locale.localize.timeOfDay(16, {type: 'uppercase'}) //=> 'PM'
 * locale.localize.timeOfDay(5) //=> 'a.m.'
 */
function buildLocalizeFn(values, defaultType, indexCallback) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var valuesArray = values[type] || values[defaultType];
    var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
    return valuesArray[index];
  };
}
module.exports = exports["default"];
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchFn;
/**
 * @name buildMatchFn
 * @category Locale Helpers
 * @summary Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale used by `parse` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 * The result of the match function will be passed into corresponding parser function
 * (`match.weekday`, `match.month` or `match.timeOfDay` respectively. See `buildParseFn`).
 *
 * @param {Object} values - the object with RegExps
 * @param {String} defaultType - the default type for the match function
 * @returns {Function} the resulting function
 *
 * @example
 * var matchWeekdaysPatterns = {
 *   narrow: /^(su|mo|tu|we|th|fr|sa)/i,
 *   short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
 *   long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
 * }
 * locale.match.weekdays = buildMatchFn(matchWeekdaysPatterns, 'long')
 * locale.match.weekdays('Sunday', {type: 'narrow'}) //=> ['Su', 'Su', ...]
 * locale.match.weekdays('Sunday') //=> ['Sunday', 'Sunday', ...]
 */
function buildMatchFn(patterns, defaultType) {
  return function (dirtyString, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var pattern = patterns[type] || patterns[defaultType];
    var string = String(dirtyString);
    return string.match(pattern);
  };
}
module.exports = exports["default"];
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchPatternFn;
/**
 * @name buildMatchPatternFn
 * @category Locale Helpers
 * @summary Build match function from a single RegExp.
 *
 * @description
 * Build match function from a single RegExp.
 * Usually used for building `match.ordinalNumbers` property of the locale.
 *
 * @param {Object} pattern - the RegExp
 * @returns {Function} the resulting function
 *
 * @example
 * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
 * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
 */
function buildMatchPatternFn(pattern) {
  return function (dirtyString) {
    var string = String(dirtyString);
    return string.match(pattern);
  };
}
module.exports = exports["default"];
},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildParseFn;
/**
 * @name buildParseFn
 * @category Locale Helpers
 * @summary Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale used by `parse` function.
 * The argument of the resulting function is the result of the corresponding match function
 * (`match.weekdays`, `match.months` or `match.timesOfDay` respectively. See `buildMatchFn`).
 *
 * @param {Object} values - the object with arrays of RegExps
 * @param {String} defaultType - the default type for the parser function
 * @returns {Function} the resulting function
 *
 * @example
 * var parseWeekdayPatterns = {
 *   any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
 * }
 * locale.match.weekday = buildParseFn(matchWeekdaysPatterns, 'long')
 * var matchResult = locale.match.weekdays('Friday')
 * locale.match.weekday(matchResult) //=> 5
 */
function buildParseFn(patterns, defaultType) {
  return function (matchResult, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var patternsArray = patterns[type] || patterns[defaultType];
    var string = matchResult[1];

    return patternsArray.findIndex(function (pattern) {
      return pattern.test(string);
    });
  };
}
module.exports = exports["default"];
},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDecimal;
/**
 * @name parseDecimal
 * @category Locale Helpers
 * @summary Parses the match result into decimal number.
 *
 * @description
 * Parses the match result into decimal number.
 * Uses the string matched with the first set of parentheses of match RegExp.
 *
 * @param {Array} matchResult - the object returned by matching function
 * @returns {Number} the parsed value
 *
 * @example
 * locale.match = {
 *   ordinalNumbers: (dirtyString) {
 *     return String(dirtyString).match(/^(\d+)(th|st|nd|rd)?/i)
 *   },
 *   ordinalNumber: parseDecimal
 * }
 */
function parseDecimal(matchResult) {
  return parseInt(matchResult[1], 10);
}
module.exports = exports["default"];
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistance;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance(token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}
module.exports = exports['default'];
},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatLong = (0, _index2.default)({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D YYYY',
  LLL: 'MMMM D YYYY h:mm aa',
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

exports.default = formatLong;
module.exports = exports['default'];
},{"../../../_lib/buildFormatLongFn/index.js":17}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] LT',
  yesterday: '[yesterday at] LT',
  today: '[today at] LT',
  tomorrow: '[tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];
},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildLocalizeFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildLocalizeArrayFn/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var timeOfDayValues = {
//     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
//   }
//
// And later:
//
//   var localize = {
//     // The callback takes the hours as the argument and returns the array index
//     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
//       if (hours >= 17) {
//         return 3
//       } else if (hours >= 12) {
//         return 2
//       } else if (hours >= 4) {
//         return 1
//       } else {
//         return 0
//       }
//     }),
//     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
//   }
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
  // 'dayOfMonth' or 'dayOfWeek'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function (hours) {
    return hours / 12 >= 1 ? 1 : 0;
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
};

exports.default = localize;
module.exports = exports['default'];
},{"../../../_lib/buildLocalizeArrayFn/index.js":18,"../../../_lib/buildLocalizeFn/index.js":19}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildMatchFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildParseFn/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../../_lib/buildMatchPatternFn/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../../../_lib/parseDecimal/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};

var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
};

var match = {
  ordinalNumbers: (0, _index6.default)(matchOrdinalNumbersPattern),
  ordinalNumber: _index8.default,
  weekdays: (0, _index2.default)(matchWeekdaysPatterns, 'long'),
  weekday: (0, _index4.default)(parseWeekdayPatterns, 'any'),
  months: (0, _index2.default)(matchMonthsPatterns, 'long'),
  month: (0, _index4.default)(parseMonthPatterns, 'any'),
  timesOfDay: (0, _index2.default)(matchTimesOfDayPatterns, 'long'),
  timeOfDay: (0, _index4.default)(parseTimeOfDayPatterns, 'any')
};

exports.default = match;
module.exports = exports['default'];
},{"../../../_lib/buildMatchFn/index.js":20,"../../../_lib/buildMatchPatternFn/index.js":21,"../../../_lib/buildParseFn/index.js":22,"../../../_lib/parseDecimal/index.js":23}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./_lib/formatDistance/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./_lib/formatLong/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./_lib/formatRelative/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./_lib/localize/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./_lib/match/index.js');

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 */
var locale = {
  formatDistance: _index2.default,
  formatLong: _index4.default,
  formatRelative: _index6.default,
  localize: _index8.default,
  match: _index10.default,
  options: {
    weekStartsOn: 0 /* Sunday */
    , firstWeekContainsDate: 1
  }
};

exports.default = locale;
module.exports = exports['default'];
},{"./_lib/formatDistance/index.js":24,"./_lib/formatLong/index.js":25,"./_lib/formatRelative/index.js":26,"./_lib/localize/index.js":27,"./_lib/match/index.js":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var patterns = {
  'M': /^(1[0-2]|0?\d)/, // 0 to 12
  'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  'YYYY': /^(\d{1,4})/, // 0 to 9999
  'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  'm': /^([0-5]?\d)/, // 0 to 59
  'Z': /^([+-])(\d{2}):(\d{2})/,
  'ZZ': /^([+-])(\d{2})(\d{2})/,
  singleDigit: /^(\d)/,
  twoDigits: /^(\d{2})/,
  threeDigits: /^(\d{3})/,
  fourDigits: /^(\d{4})/,
  anyDigits: /^(\d+)/
};

function parseDecimal(matchResult) {
  return parseInt(matchResult[1], 10);
}

var parsers = {
  // Year: 00, 01, ..., 99
  'YY': {
    unit: 'twoDigitYear',
    match: patterns.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult);
    }
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': {
    unit: 'year',
    match: patterns.YYYY,
    parse: parseDecimal
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': {
    unit: 'isoYear',
    match: patterns.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult) + 1900;
    }
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': {
    unit: 'isoYear',
    match: patterns.YYYY,
    parse: parseDecimal
  },

  // Quarter: 1, 2, 3, 4
  'Q': {
    unit: 'quarter',
    match: patterns.singleDigit,
    parse: parseDecimal
  },

  // Ordinal quarter
  'Qo': {
    unit: 'quarter',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'quarter' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'quarter' });
    }
  },

  // Month: 1, 2, ..., 12
  'M': {
    unit: 'month',
    match: patterns.M,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult) - 1;
    }
  },

  // Ordinal month
  'Mo': {
    unit: 'month',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'month' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'month' }) - 1;
    }
  },

  // Month: 01, 02, ..., 12
  'MM': {
    unit: 'month',
    match: patterns.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult) - 1;
    }
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': {
    unit: 'month',
    match: function match(string, options) {
      return options.locale.match.months(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.month(matchResult, { type: 'short' });
    }
  },

  // Month: January, February, ..., December
  'MMMM': {
    unit: 'month',
    match: function match(string, options) {
      return options.locale.match.months(string, { type: 'long' }) || options.locale.match.months(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.month(matchResult, { type: 'long' });

      if (parseResult == null) {
        parseResult = options.locale.match.month(matchResult, { type: 'short' });
      }

      return parseResult;
    }
  },

  // ISO week: 1, 2, ..., 53
  'W': {
    unit: 'isoWeek',
    match: patterns.W,
    parse: parseDecimal
  },

  // Ordinal ISO week
  'Wo': {
    unit: 'isoWeek',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'isoWeek' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'isoWeek' });
    }
  },

  // ISO week: 01, 02, ..., 53
  'WW': {
    unit: 'isoWeek',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Day of week: 0, 1, ..., 6
  'd': {
    unit: 'dayOfWeek',
    match: patterns.singleDigit,
    parse: parseDecimal
  },

  // Ordinal day of week
  'do': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'dayOfWeek' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfWeek' });
    }
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.weekdays(string, { type: 'narrow' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.weekday(matchResult, { type: 'narrow' });
    }
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.weekdays(string, { type: 'short' }) || options.locale.match.weekdays(string, { type: 'narrow' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, { type: 'short' });

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, { type: 'narrow' });
      }

      return parseResult;
    }
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.weekdays(string, { type: 'long' }) || options.locale.match.weekdays(string, { type: 'short' }) || options.locale.match.weekdays(string, { type: 'narrow' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, { type: 'long' });

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, { type: 'short' });

        if (parseResult == null) {
          parseResult = options.locale.match.weekday(matchResult, { type: 'narrow' });
        }
      }

      return parseResult;
    }
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': {
    unit: 'dayOfISOWeek',
    match: patterns.singleDigit,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult);
    }
  },

  // Day of month: 1, 2, ..., 31
  'D': {
    unit: 'dayOfMonth',
    match: patterns.D,
    parse: parseDecimal
  },

  // Ordinal day of month
  'Do': {
    unit: 'dayOfMonth',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'dayOfMonth' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfMonth' });
    }
  },

  // Day of month: 01, 02, ..., 31
  'DD': {
    unit: 'dayOfMonth',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Day of year: 1, 2, ..., 366
  'DDD': {
    unit: 'dayOfYear',
    match: patterns.DDD,
    parse: parseDecimal
  },

  // Ordinal day of year
  'DDDo': {
    unit: 'dayOfYear',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'dayOfYear' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfYear' });
    }
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': {
    unit: 'dayOfYear',
    match: patterns.threeDigits,
    parse: parseDecimal
  },

  // AM, PM
  'A': {
    unit: 'timeOfDay',
    match: function match(string, options) {
      return options.locale.match.timesOfDay(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.timeOfDay(matchResult, { type: 'short' });
    }
  },

  // a.m., p.m.
  'aa': {
    unit: 'timeOfDay',
    match: function match(string, options) {
      return options.locale.match.timesOfDay(string, { type: 'long' }) || options.locale.match.timesOfDay(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.timeOfDay(matchResult, { type: 'long' });

      if (parseResult == null) {
        parseResult = options.locale.match.timeOfDay(matchResult, { type: 'short' });
      }

      return parseResult;
    }
  },

  // Hour: 0, 1, ... 23
  'H': {
    unit: 'hours',
    match: patterns.H,
    parse: parseDecimal
  },

  // Hour: 00, 01, ..., 23
  'HH': {
    unit: 'hours',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Hour: 1, 2, ..., 12
  'h': {
    unit: 'timeOfDayHours',
    match: patterns.M,
    parse: parseDecimal
  },

  // Hour: 01, 02, ..., 12
  'hh': {
    unit: 'timeOfDayHours',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Minute: 0, 1, ..., 59
  'm': {
    unit: 'minutes',
    match: patterns.m,
    parse: parseDecimal
  },

  // Minute: 00, 01, ..., 59
  'mm': {
    unit: 'minutes',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Second: 0, 1, ..., 59
  's': {
    unit: 'seconds',
    match: patterns.m,
    parse: parseDecimal
  },

  // Second: 00, 01, ..., 59
  'ss': {
    unit: 'seconds',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': {
    unit: 'milliseconds',
    match: patterns.singleDigit,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult) * 100;
    }
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': {
    unit: 'milliseconds',
    match: patterns.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult) * 10;
    }
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': {
    unit: 'milliseconds',
    match: patterns.threeDigits,
    parse: parseDecimal
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': {
    unit: 'timezone',
    match: patterns.Z,
    parse: function parse(matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return sign === '+' ? absoluteOffset : -absoluteOffset;
    }
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': {
    unit: 'timezone',
    match: patterns.ZZ,
    parse: function parse(matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return sign === '+' ? absoluteOffset : -absoluteOffset;
    }
  },

  // Seconds timestamp: 512969520
  'X': {
    unit: 'timestamp',
    match: patterns.anyDigits,
    parse: function parse(matchResult) {
      return parseDecimal(matchResult) * 1000;
    }
  },

  // Milliseconds timestamp: 512969520900
  'x': {
    unit: 'timestamp',
    match: patterns.anyDigits,
    parse: parseDecimal
  }
};

parsers['a'] = parsers['A'];

exports.default = parsers;
module.exports = exports['default'];
},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/setUTCDay/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/setUTCISODay/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../../_lib/setUTCISOWeek/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../../../_lib/setUTCISOWeekYear/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../../../_lib/startOfUTCISOWeek/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../../../_lib/startOfUTCISOWeekYear/index.js');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_MINUTE = 60000;

function setTimeOfDay(hours, timeOfDay) {
  var isAM = timeOfDay === 0;

  if (isAM) {
    if (hours === 12) {
      return 0;
    }
  } else {
    if (hours !== 12) {
      return 12 + hours;
    }
  }

  return hours;
}

var units = {
  twoDigitYear: {
    priority: 10,
    set: function set(dateValues, value) {
      var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
      var year = century * 100 + value;
      dateValues.date.setUTCFullYear(year, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  year: {
    priority: 10,
    set: function set(dateValues, value) {
      dateValues.date.setUTCFullYear(value, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  isoYear: {
    priority: 10,
    set: function set(dateValues, value, options) {
      dateValues.date = (0, _index12.default)((0, _index8.default)(dateValues.date, value, options), options);
      return dateValues;
    }
  },

  quarter: {
    priority: 20,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMonth((value - 1) * 3, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  month: {
    priority: 30,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMonth(value, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  isoWeek: {
    priority: 40,
    set: function set(dateValues, value, options) {
      dateValues.date = (0, _index10.default)((0, _index6.default)(dateValues.date, value, options), options);
      return dateValues;
    }
  },

  dayOfWeek: {
    priority: 50,
    set: function set(dateValues, value, options) {
      dateValues.date = (0, _index2.default)(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  dayOfISOWeek: {
    priority: 50,
    set: function set(dateValues, value, options) {
      dateValues.date = (0, _index4.default)(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  dayOfMonth: {
    priority: 50,
    set: function set(dateValues, value) {
      dateValues.date.setUTCDate(value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  dayOfYear: {
    priority: 50,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMonth(0, value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  timeOfDay: {
    priority: 60,
    set: function set(dateValues, value, options) {
      dateValues.timeOfDay = value;
      return dateValues;
    }
  },

  hours: {
    priority: 70,
    set: function set(dateValues, value, options) {
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues;
    }
  },

  timeOfDayHours: {
    priority: 70,
    set: function set(dateValues, value, options) {
      var timeOfDay = dateValues.timeOfDay;
      if (timeOfDay != null) {
        value = setTimeOfDay(value, timeOfDay);
      }
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues;
    }
  },

  minutes: {
    priority: 80,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMinutes(value, 0, 0);
      return dateValues;
    }
  },

  seconds: {
    priority: 90,
    set: function set(dateValues, value) {
      dateValues.date.setUTCSeconds(value, 0);
      return dateValues;
    }
  },

  milliseconds: {
    priority: 100,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMilliseconds(value);
      return dateValues;
    }
  },

  timezone: {
    priority: 110,
    set: function set(dateValues, value) {
      dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE);
      return dateValues;
    }
  },

  timestamp: {
    priority: 120,
    set: function set(dateValues, value) {
      dateValues.date = new Date(value);
      return dateValues;
    }
  }
};

exports.default = units;
module.exports = exports['default'];
},{"../../../_lib/setUTCDay/index.js":6,"../../../_lib/setUTCISODay/index.js":7,"../../../_lib/setUTCISOWeek/index.js":8,"../../../_lib/setUTCISOWeekYear/index.js":9,"../../../_lib/startOfUTCISOWeek/index.js":10,"../../../_lib/startOfUTCISOWeekYear/index.js":11}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../subMinutes/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../locale/en-US/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./_lib/parsers/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./_lib/units/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../_lib/cloneObject/index.js');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE = 60000;

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format.
 *
 * Accepted format tokens:
 * | Unit                    | Priority | Token | Input examples                   |
 * |-------------------------|----------|-------|----------------------------------|
 * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
 * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
 * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
 * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
 * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Month                   | 30       | M     | 1, 2, ..., 12                    |
 * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
 * |                         |          | MM    | 01, 02, ..., 12                  |
 * |                         |          | MMM   | Jan, Feb, ..., Dec               |
 * |                         |          | MMMM  | January, February, ..., December |
 * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
 * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         |          | WW    | 01, 02, ..., 53                  |
 * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
 * |                         |          | do    | 0th, 1st, ..., 6th               |
 * |                         |          | dd    | Su, Mo, ..., Sa                  |
 * |                         |          | ddd   | Sun, Mon, ..., Sat               |
 * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
 * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
 * |                         |          | Do    | 1st, 2nd, ..., 31st              |
 * |                         |          | DD    | 01, 02, ..., 31                  |
 * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
 * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         |          | DDDD  | 001, 002, ..., 366               |
 * | Time of day             | 60       | A     | AM, PM                           |
 * |                         |          | a     | am, pm                           |
 * |                         |          | aa    | a.m., p.m.                       |
 * | Hour                    | 70       | H     | 0, 1, ... 23                     |
 * |                         |          | HH    | 00, 01, ... 23                   |
 * | Time of day hour        | 70       | h     | 1, 2, ..., 12                    |
 * |                         |          | hh    | 01, 02, ..., 12                  |
 * | Minute                  | 80       | m     | 0, 1, ..., 59                    |
 * |                         |          | mm    | 00, 01, ..., 59                  |
 * | Second                  | 90       | s     | 0, 1, ..., 59                    |
 * |                         |          | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | 100      | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | 100      | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | 100      | SSS   | 000, 001, ..., 999               |
 * | Timezone                | 110      | Z     | -01:00, +00:00, ... +12:00       |
 * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | 120      | X     | 512969520                        |
 * | Milliseconds timestamp  | 120      | x     | 512969520900                     |
 *
 * Values will be assigned to the date in the ascending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * Also, `parse` unfolds long formats like those in [format]{@link https://date-fns.org/docs/format}:
 * | Token | Input examples                 |
 * |-------|--------------------------------|
 * | LT    | 05:30 a.m.                     |
 * | LTS   | 05:30:15 a.m.                  |
 * | L     | 07/02/1995                     |
 * | l     | 7/2/1995                       |
 * | LL    | July 2 1995                    |
 * | ll    | Jul 2 1995                     |
 * | LLL   | July 2 1995 05:30 a.m.         |
 * | lll   | Jul 2 1995 05:30 a.m.          |
 * | LLLL  | Sunday, July 2 1995 05:30 a.m. |
 * | llll  | Sun, Jul 2 1995 05:30 a.m.     |
 *
 * The characters wrapped in square brackets in the format string are escaped.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/DD/YYYY',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in English locale in the context of 2010 year:
 * import eoLocale from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   'Do [de] MMMM',
 *   new Date(2010, 0, 1)
 *   {locale: eoLocale}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
  }

  var dateString = String(dirtyDateString);
  var options = dirtyOptions || {};

  var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var locale = options.locale || _index6.default;
  var localeParsers = locale.parsers || {};
  var localeUnits = locale.units || {};

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var formatString = String(dirtyFormatString).replace(longFormattingTokensRegExp, function (substring) {
    if (substring[0] === '[') {
      return substring;
    }

    if (substring[0] === '\\') {
      return cleanEscapedString(substring);
    }

    return locale.formatLong(substring);
  });

  if (formatString === '') {
    if (dateString === '') {
      return (0, _index2.default)(dirtyBaseDate, options);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = (0, _index12.default)(options);
  subFnOptions.locale = locale;

  var tokens = formatString.match(locale.parsingTokensRegExp || defaultParsingTokensRegExp);
  var tokensLength = tokens.length;

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];

  var i;
  for (i = 0; i < tokensLength; i++) {
    var token = tokens[i];
    var parser = localeParsers[token] || _index8.default[token];
    if (parser) {
      var matchResult;

      if (parser.match instanceof RegExp) {
        matchResult = parser.match.exec(dateString);
      } else {
        matchResult = parser.match(dateString, subFnOptions);
      }

      if (!matchResult) {
        return new Date(NaN);
      }

      var unitName = parser.unit;
      var unit = localeUnits[unitName] || _index10.default[unitName];

      setters.push({
        priority: unit.priority,
        set: unit.set,
        value: parser.parse(matchResult, subFnOptions),
        index: setters.length
      });

      var substring = matchResult[0];
      dateString = dateString.slice(substring.length);
    } else {
      var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
      if (dateString.indexOf(head) === 0) {
        dateString = dateString.slice(head.length);
      } else {
        return new Date(NaN);
      }
    }
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return a - b;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).reverse();
  }).map(function (setterArray) {
    return setterArray[0];
  });

  var date = (0, _index2.default)(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN);
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = (0, _index4.default)(date, date.getTimezoneOffset());

  var dateValues = { date: utcDate };

  var settersLength = uniquePrioritySetters.length;
  for (i = 0; i < settersLength; i++) {
    var setter = uniquePrioritySetters[i];
    dateValues = setter.set(dateValues, setter.value, subFnOptions);
  }

  return dateValues.date;
}

function dateToSystemTimezone(dateValues) {
  var date = dateValues.date;
  var time = date.getTime();

  // Get the system timezone offset at (moment of time - offset)
  var offset = date.getTimezoneOffset();

  // Get the system timezone offset at the exact moment of time
  offset = new Date(time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();

  // Convert date in timezone "UTC+00:00" to the system timezone
  dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE);

  return dateValues;
}

function cleanEscapedString(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '');
  }
  return input.replace(/\\/g, '');
}
module.exports = exports['default'];
},{"../_lib/cloneObject/index.js":2,"../locale/en-US/index.js":29,"../subMinutes/index.js":33,"../toDate/index.js":34,"./_lib/parsers/index.js":30,"./_lib/units/index.js":31}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subMinutes;

var _index = require('../addMinutes/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the mintues subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = Number(dirtyAmount);
  return (0, _index2.default)(dirtyDate, -amount, dirtyOptions);
}
module.exports = exports['default'];
},{"../addMinutes/index.js":13}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument is null, it is treated as an invalid date.
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  if (argument === null) {
    return new Date(NaN);
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  // Clone the date
  if (argument instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument !== 'string') {
    return new Date(argument);
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
  } else {
    return new Date(argument);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }

  // Invalid ISO-formatted year
  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date;
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date;
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week);
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek);
  }

  // Invalid ISO-formatted date
  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  }

  // Invalid ISO-formatted time
  return null;
}

function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  return 0;
}

function dayOfISOYear(isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
module.exports = exports['default'];
},{}],35:[function(require,module,exports){
(function(root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.StringMask = factory();
    }
}(this, function() {
    var tokens = {
        '0': {pattern: /\d/, _default: '0'},
        '9': {pattern: /\d/, optional: true},
        '#': {pattern: /\d/, optional: true, recursive: true},
        'A': {pattern: /[a-zA-Z0-9]/},
        'S': {pattern: /[a-zA-Z]/},
        'U': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleUpperCase(); }},
        'L': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleLowerCase(); }},
        '$': {escape: true}
    };

    function isEscaped(pattern, pos) {
        var count = 0;
        var i = pos - 1;
        var token = {escape: true};
        while (i >= 0 && token && token.escape) {
            token = tokens[pattern.charAt(i)];
            count += token && token.escape ? 1 : 0;
            i--;
        }
        return count > 0 && count % 2 === 1;
    }

    function calcOptionalNumbersToUse(pattern, value) {
        var numbersInP = pattern.replace(/[^0]/g,'').length;
        var numbersInV = value.replace(/[^\d]/g,'').length;
        return numbersInV - numbersInP;
    }

    function concatChar(text, character, options, token) {
        if (token && typeof token.transform === 'function') {
            character = token.transform(character);
        }
        if (options.reverse) {
            return character + text;
        }
        return text + character;
    }

    function hasMoreTokens(pattern, pos, inc) {
        var pc = pattern.charAt(pos);
        var token = tokens[pc];
        if (pc === '') {
            return false;
        }
        return token && !token.escape ? true : hasMoreTokens(pattern, pos + inc, inc);
    }

    function hasMoreRecursiveTokens(pattern, pos, inc) {
        var pc = pattern.charAt(pos);
        var token = tokens[pc];
        if (pc === '') {
            return false;
        }
        return token && token.recursive ? true : hasMoreRecursiveTokens(pattern, pos + inc, inc);
    }

    function insertChar(text, char, position) {
        var t = text.split('');
        t.splice(position, 0, char);
        return t.join('');
    }

    function StringMask(pattern, opt) {
        this.options = opt || {};
        this.options = {
            reverse: this.options.reverse || false,
            usedefaults: this.options.usedefaults || this.options.reverse
        };
        this.pattern = pattern;
    }

    StringMask.prototype.process = function proccess(value) {
        if (!value) {
            return {result: '', valid: false};
        }
        value = value + '';
        var pattern2 = this.pattern;
        var valid = true;
        var formatted = '';
        var valuePos = this.options.reverse ? value.length - 1 : 0;
        var patternPos = 0;
        var optionalNumbersToUse = calcOptionalNumbersToUse(pattern2, value);
        var escapeNext = false;
        var recursive = [];
        var inRecursiveMode = false;

        var steps = {
            start: this.options.reverse ? pattern2.length - 1 : 0,
            end: this.options.reverse ? -1 : pattern2.length,
            inc: this.options.reverse ? -1 : 1
        };

        function continueCondition(options) {
            if (!inRecursiveMode && !recursive.length && hasMoreTokens(pattern2, patternPos, steps.inc)) {
                // continue in the normal iteration
                return true;
            } else if (!inRecursiveMode && recursive.length &&
                hasMoreRecursiveTokens(pattern2, patternPos, steps.inc)) {
                // continue looking for the recursive tokens
                // Note: all chars in the patterns after the recursive portion will be handled as static string
                return true;
            } else if (!inRecursiveMode) {
                // start to handle the recursive portion of the pattern
                inRecursiveMode = recursive.length > 0;
            }

            if (inRecursiveMode) {
                var pc = recursive.shift();
                recursive.push(pc);
                if (options.reverse && valuePos >= 0) {
                    patternPos++;
                    pattern2 = insertChar(pattern2, pc, patternPos);
                    return true;
                } else if (!options.reverse && valuePos < value.length) {
                    pattern2 = insertChar(pattern2, pc, patternPos);
                    return true;
                }
            }
            return patternPos < pattern2.length && patternPos >= 0;
        }

        /**
         * Iterate over the pattern's chars parsing/matching the input value chars
         * until the end of the pattern. If the pattern ends with recursive chars
         * the iteration will continue until the end of the input value.
         *
         * Note: The iteration must stop if an invalid char is found.
         */
        for (patternPos = steps.start; continueCondition(this.options); patternPos = patternPos + steps.inc) {
            // Value char
            var vc = value.charAt(valuePos);
            // Pattern char to match with the value char
            var pc = pattern2.charAt(patternPos);

            var token = tokens[pc];
            if (recursive.length && token && !token.recursive) {
                // In the recursive portion of the pattern: tokens not recursive must be seen as static chars
                token = null;
            }

            // 1. Handle escape tokens in pattern
            // go to next iteration: if the pattern char is a escape char or was escaped
            if (!inRecursiveMode || vc) {
                if (this.options.reverse && isEscaped(pattern2, patternPos)) {
                    // pattern char is escaped, just add it and move on
                    formatted = concatChar(formatted, pc, this.options, token);
                    // skip escape token
                    patternPos = patternPos + steps.inc;
                    continue;
                } else if (!this.options.reverse && escapeNext) {
                    // pattern char is escaped, just add it and move on
                    formatted = concatChar(formatted, pc, this.options, token);
                    escapeNext = false;
                    continue;
                } else if (!this.options.reverse && token && token.escape) {
                    // mark to escape the next pattern char
                    escapeNext = true;
                    continue;
                }
            }

            // 2. Handle recursive tokens in pattern
            // go to next iteration: if the value str is finished or
            //                       if there is a normal token in the recursive portion of the pattern
            if (!inRecursiveMode && token && token.recursive) {
                // save it to repeat in the end of the pattern and handle the value char now
                recursive.push(pc);
            } else if (inRecursiveMode && !vc) {
                // in recursive mode but value is finished. Add the pattern char if it is not a recursive token
                formatted = concatChar(formatted, pc, this.options, token);
                continue;
            } else if (!inRecursiveMode && recursive.length > 0 && !vc) {
                // recursiveMode not started but already in the recursive portion of the pattern
                continue;
            }

            // 3. Handle the value
            // break iterations: if value is invalid for the given pattern
            if (!token) {
                // add char of the pattern
                formatted = concatChar(formatted, pc, this.options, token);
                if (!inRecursiveMode && recursive.length) {
                    // save it to repeat in the end of the pattern
                    recursive.push(pc);
                }
            } else if (token.optional) {
                // if token is optional, only add the value char if it matchs the token pattern
                //                       if not, move on to the next pattern char
                if (token.pattern.test(vc) && optionalNumbersToUse) {
                    formatted = concatChar(formatted, vc, this.options, token);
                    valuePos = valuePos + steps.inc;
                    optionalNumbersToUse--;
                } else if (recursive.length > 0 && vc) {
                    valid = false;
                    break;
                }
            } else if (token.pattern.test(vc)) {
                // if token isn't optional the value char must match the token pattern
                formatted = concatChar(formatted, vc, this.options, token);
                valuePos = valuePos + steps.inc;
            } else if (!vc && token._default && this.options.usedefaults) {
                // if the token isn't optional and has a default value, use it if the value is finished
                formatted = concatChar(formatted, token._default, this.options, token);
            } else {
                // the string value don't match the given pattern
                valid = false;
                break;
            }
        }

        return {result: formatted, valid: valid};
    };

    StringMask.prototype.apply = function(value) {
        return this.process(value).result;
    };

    StringMask.prototype.validate = function(value) {
        return this.process(value).valid;
    };

    StringMask.process = function(value, pattern, options) {
        return new StringMask(pattern, options).process(value);
    };

    StringMask.apply = function(value, pattern, options) {
        return new StringMask(pattern, options).apply(value);
    };

    StringMask.validate = function(value, pattern, options) {
        return new StringMask(pattern, options).validate(value);
    };

    return StringMask;
}));

},{}],36:[function(require,module,exports){
'use strict';

module.exports = angular.module('ui.utils.masks', [
	require('./global/global-masks'),
	require('./us/us-masks')
]).name;

},{"./global/global-masks":39,"./us/us-masks":50}],37:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('../../helpers/mask-factory');

var ccSize = 16;

var ccMask = new StringMask('0000 0000 0000 0000');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^0-9]/g, '').slice(0, ccSize);
	},
	format: function(cleanValue) {
		var formatedValue;

		formatedValue = ccMask.apply(cleanValue) || '';

		return formatedValue.trim().replace(/[^0-9]$/, '');
	},
	validations: {
		creditCard: function(value) {
			var valueLength = value && value.toString().length;
			return valueLength === ccSize;
		}
	}
});

},{"../../helpers/mask-factory":45,"string-mask":35}],38:[function(require,module,exports){
'use strict';

var formatDate = require('date-fns/format');
var parseDate = require('date-fns/parse');
var isValidDate = require('date-fns/isValid');
var StringMask = require('string-mask');

function isISODateString(date) {
	return /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}([-+][0-9]{2}:[0-9]{2}|Z)$/
		.test(date.toString());
}

var dateFormatMapByLocale = {
	'pt-br': 'DD/MM/YYYY',
	'es-ar': 'DD/MM/YYYY',
	'es-mx': 'DD/MM/YYYY',
	'es'   : 'DD/MM/YYYY',
	'en-us': 'MM/DD/YYYY',
	'en'   : 'MM/DD/YYYY',
	'fr-fr': 'DD/MM/YYYY',
	'fr'   : 'DD/MM/YYYY',
	'ru'   : 'DD.MM.YYYY'
};

function DateMaskDirective($locale) {
	var dateFormat = dateFormatMapByLocale[$locale.id] || 'YYYY-MM-DD';

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			attrs.parse = attrs.parse || 'true';

			dateFormat = attrs.uiDateMask || dateFormat;

			var dateMask = new StringMask(dateFormat.replace(/[YMD]/g,'0'));

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return null;
				}

				var cleanValue = value;
				if (typeof value === 'object' || isISODateString(value)) {
					cleanValue = formatDate(value, dateFormat);
				}

				cleanValue = cleanValue.replace(/[^0-9]/g, '');
				var formatedValue = dateMask.apply(cleanValue) || '';

				return formatedValue.trim().replace(/[^0-9]$/, '');
			}

			ctrl.$formatters.push(formatter);

			ctrl.$parsers.push(function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var formatedValue = formatter(value);

				if (ctrl.$viewValue !== formatedValue) {
					ctrl.$setViewValue(formatedValue);
					ctrl.$render();
				}

				return attrs.parse === 'false'
					? formatedValue
					: parseDate(formatedValue, dateFormat, new Date());
			});

			ctrl.$validators.date =	function validator(modelValue, viewValue) {
				if (ctrl.$isEmpty(modelValue)) {
					return true;
				}

				return isValidDate(parseDate(viewValue, dateFormat, new Date())) && viewValue.length === dateFormat.length;
			};
		}
	};
}
DateMaskDirective.$inject = ['$locale'];

module.exports = DateMaskDirective;

},{"date-fns/format":15,"date-fns/isValid":16,"date-fns/parse":32,"string-mask":35}],39:[function(require,module,exports){
'use strict';

var m = angular.module('ui.utils.masks.global', [])
	.directive('uiCreditCardMask', require('./credit-card/credit-card'))
	.directive('uiDateMask', require('./date/date'))
	.directive('uiMoneyMask', require('./money/money'))
	.directive('uiNumberMask', require('./number/number'))
	.directive('uiPercentageMask', require('./percentage/percentage'))
	.directive('uiScientificNotationMask', require('./scientific-notation/scientific-notation'))
	.directive('uiTimeMask', require('./time/time'));

module.exports = m.name;

},{"./credit-card/credit-card":37,"./date/date":38,"./money/money":40,"./number/number":41,"./percentage/percentage":42,"./scientific-notation/scientific-notation":43,"./time/time":44}],40:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var validators = require('../../helpers/validators');
var PreFormatters = require('../../helpers/pre-formatters');

function MoneyMaskDirective($locale, $parse) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
				thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP,
				currencySym = $locale.NUMBER_FORMATS.CURRENCY_SYM,
				symbolSeparation = ' ',
				decimals = $parse(attrs.uiMoneyMask)(scope),
				backspacePressed = false;

			element.bind('keydown keypress', function(event) {
				backspacePressed = event.which === 8;
			});

			function maskFactory(decimals) {
				var decimalsPattern = decimals > 0 ? decimalDelimiter + new Array(decimals + 1).join('0') : '';
				var maskPattern =  '#' + thousandsDelimiter + '##0' + decimalsPattern;
				if (angular.isDefined(attrs.uiCurrencyAfter)) {
					maskPattern += symbolSeparation;
				} else {
					maskPattern =  symbolSeparation + maskPattern;
				}
				return new StringMask(maskPattern, {reverse: true});
			}

			if (angular.isDefined(attrs.uiDecimalDelimiter)) {
				decimalDelimiter = attrs.uiDecimalDelimiter;
			}

			if (angular.isDefined(attrs.uiThousandsDelimiter)) {
				thousandsDelimiter = attrs.uiThousandsDelimiter;
			}

			if (angular.isDefined(attrs.uiHideGroupSep)) {
				thousandsDelimiter = '';
			}

			if (angular.isDefined(attrs.uiHideSpace)) {
				symbolSeparation = '';
			}

			if (angular.isDefined(attrs.currencySymbol)) {
				currencySym = attrs.currencySymbol;
				if (attrs.currencySymbol.length === 0) {
					symbolSeparation = '';
				}
			}

			if (isNaN(decimals)) {
				decimals = 2;
			}
			decimals = parseInt(decimals);
			var moneyMask = maskFactory(decimals);

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return '';
				}

				if (angular.isDefined(attrs.uiIntegerModel)) {
					value /= Math.pow(10, decimals);
				}

				var prefix = (angular.isDefined(attrs.uiNegativeNumber) && value < 0) ? '-' : '';
				var valueToFormat = PreFormatters.prepareNumberToFormatter(value, decimals);

				if (angular.isDefined(attrs.uiCurrencyAfter)) {
					return prefix + moneyMask.apply(valueToFormat) + currencySym;
				}

				return prefix + currencySym + moneyMask.apply(valueToFormat);
			}

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return null;
				}

				var actualNumber = value.replace(/[^\d]+/g,''), formatedValue;
				actualNumber = actualNumber.replace(/^[0]+([1-9])/,'$1');
				actualNumber = actualNumber || '0';

				if (backspacePressed && angular.isDefined(attrs.uiCurrencyAfter) && actualNumber !== 0) {
					actualNumber = actualNumber.substring(0, actualNumber.length - 1);
					backspacePressed = false;
				}

				if (angular.isDefined(attrs.uiCurrencyAfter)) {
					formatedValue = moneyMask.apply(actualNumber) + currencySym;
				} else {
					formatedValue = currencySym + moneyMask.apply(actualNumber);
				}

				if (angular.isDefined(attrs.uiNegativeNumber)) {
					var isNegative = (value[0] === '-'),
						needsToInvertSign = (value.slice(-1) === '-');

					//only apply the minus sign if it is negative or(exclusive)
					//needs to be negative and the number is different from zero
					if (needsToInvertSign ^ isNegative && !!actualNumber) {
						actualNumber *= -1;
						formatedValue = '-' + formatedValue;
					}
				}

				if (value !== formatedValue) {
					ctrl.$setViewValue(formatedValue);
					ctrl.$render();
				}

				var retValue = parseInt(formatedValue.replace(/[^\d\-]+/g,''));

				if (!isNaN(retValue)) {
					if (!angular.isDefined(attrs.uiIntegerModel)) {
						retValue /= Math.pow(10, decimals);
					}

					return retValue;
				}

				return null;
			}

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			if (attrs.uiMoneyMask) {
				scope.$watch(attrs.uiMoneyMask, function(_decimals) {
					decimals = isNaN(_decimals) ? 2 : _decimals;
					decimals = parseInt(decimals);
					moneyMask = maskFactory(decimals);

					parser(ctrl.$viewValue);
				});
			}

			if (attrs.currency) {
				scope.$watch(attrs.currency, function(_currency) {
					currencySym = _currency;
					moneyMask = maskFactory(decimals);
					parser(ctrl.$viewValue);
				});
			}

			if (attrs.min) {
				var minVal;

				ctrl.$validators.min = function(modelValue) {
					return validators.minNumber(ctrl, modelValue, minVal);
				};

				scope.$watch(attrs.min, function(value) {
					minVal = value;
					ctrl.$validate();
				});
			}

			if (attrs.max) {
				var maxVal;

				ctrl.$validators.max = function(modelValue) {
					return validators.maxNumber(ctrl, modelValue, maxVal);
				};

				scope.$watch(attrs.max, function(value) {
					maxVal = value;
					ctrl.$validate();
				});
			}
		}
	};
}
MoneyMaskDirective.$inject = ['$locale', '$parse'];

module.exports = MoneyMaskDirective;

},{"../../helpers/pre-formatters":47,"../../helpers/validators":48,"string-mask":35}],41:[function(require,module,exports){
'use strict';

var validators = require('../../helpers/validators');
var NumberMasks = require('../../helpers/number-mask-builder');
var PreFormatters = require('../../helpers/pre-formatters');

function NumberMaskDirective($locale, $parse) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
				thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP,
				decimals = $parse(attrs.uiNumberMask)(scope);

			if (angular.isDefined(attrs.uiHideGroupSep)) {
				thousandsDelimiter = '';
			}

			if (isNaN(decimals)) {
				decimals = 2;
			}

			var viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter),
				modelMask = NumberMasks.modelMask(decimals);

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return null;
				}

				var valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0';
				var formatedValue = viewMask.apply(valueToFormat);
				var actualNumber = parseFloat(modelMask.apply(valueToFormat));

				if (angular.isDefined(attrs.uiNegativeNumber)) {
					var isNegative = (value[0] === '-'),
						needsToInvertSign = (value.slice(-1) === '-');

					//only apply the minus sign if it is negative or(exclusive) or the first character
					//needs to be negative and the number is different from zero
					if ((needsToInvertSign ^ isNegative) || value === '-') {
						actualNumber *= -1;
						formatedValue = '-' + ((actualNumber !== 0) ? formatedValue : '');
					}
				}

				if (ctrl.$viewValue !== formatedValue) {
					ctrl.$setViewValue(formatedValue);
					ctrl.$render();
				}

				return actualNumber;
			}

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var prefix = (angular.isDefined(attrs.uiNegativeNumber) && value < 0) ? '-' : '';
				var valueToFormat = PreFormatters.prepareNumberToFormatter(value, decimals);
				return prefix + viewMask.apply(valueToFormat);
			}

			function clearViewValueIfMinusSign() {
				if (ctrl.$viewValue === '-') {
					ctrl.$setViewValue('');
					ctrl.$render();
				}
			}

			element.on('blur', clearViewValueIfMinusSign);

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			if (attrs.uiNumberMask) {
				scope.$watch(attrs.uiNumberMask, function(_decimals) {
					decimals = isNaN(_decimals) ? 2 : _decimals;
					viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter);
					modelMask = NumberMasks.modelMask(decimals);

					parser(ctrl.$viewValue);
				});
			}

			if (attrs.min) {
				var minVal;

				ctrl.$validators.min = function(modelValue) {
					return validators.minNumber(ctrl, modelValue, minVal);
				};

				scope.$watch(attrs.min, function(value) {
					minVal = value;
					ctrl.$validate();
				});
			}

			if (attrs.max) {
				var maxVal;

				ctrl.$validators.max = function(modelValue) {
					return validators.maxNumber(ctrl, modelValue, maxVal);
				};

				scope.$watch(attrs.max, function(value) {
					maxVal = value;
					ctrl.$validate();
				});
			}
		}
	};
}
NumberMaskDirective.$inject = ['$locale', '$parse'];

module.exports = NumberMaskDirective;

},{"../../helpers/number-mask-builder":46,"../../helpers/pre-formatters":47,"../../helpers/validators":48}],42:[function(require,module,exports){
'use strict';

var validators = require('../../helpers/validators');
var NumberMasks = require('../../helpers/number-mask-builder');
var PreFormatters = require('../../helpers/pre-formatters');

function preparePercentageToFormatter(value, decimals, modelMultiplier) {
	return PreFormatters.clearDelimitersAndLeadingZeros((parseFloat(value)*modelMultiplier).toFixed(decimals));
}

function PercentageMaskDirective($locale) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP;

			var backspacePressed = false;
			element.bind('keydown keypress', function(event) {
				backspacePressed = event.which === 8;
			});

			var thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP;
			if (angular.isDefined(attrs.uiHideGroupSep)) {
				thousandsDelimiter = '';
			}

			var percentageSymbol = ' %';
			if (angular.isDefined(attrs.uiHidePercentageSign)) {
				percentageSymbol = '';
			} else if (angular.isDefined(attrs.uiHideSpace)) {
				percentageSymbol = '%';
			}

			var decimals = parseInt(attrs.uiPercentageMask);
			if (isNaN(decimals)) {
				decimals = 2;
			}

			var modelValue = {
				multiplier : 100,
				decimalMask: 2
			};
			if (angular.isDefined(attrs.uiPercentageValue)) {
				modelValue.multiplier  = 1;
				modelValue.decimalMask = 0;
			}

			var numberDecimals = decimals + modelValue.decimalMask;
			var viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter),
				modelMask = NumberMasks.modelMask(numberDecimals);

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}
				var prefix = (angular.isDefined(attrs.uiNegativeNumber) && value < 0) ? '-' : '';
				var valueToFormat = preparePercentageToFormatter(value, decimals, modelValue.multiplier);
				var formatedValue = prefix + viewMask.apply(valueToFormat) + percentageSymbol;

				return formatedValue;
			}

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return null;
				}

				var valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0';
				if (percentageSymbol !== '' && value.length > 1 && value.indexOf('%') === -1) {
					valueToFormat = valueToFormat.slice(0, valueToFormat.length - 1);
				}

				if (backspacePressed && value.length === 1 && value !== '%') {
					valueToFormat = '0';
				}

				var formatedValue = viewMask.apply(valueToFormat) + percentageSymbol;
				var actualNumber = parseFloat(modelMask.apply(valueToFormat));

				if (angular.isDefined(attrs.uiNegativeNumber)) {
					var isNegative = (value[0] === '-'),
						needsToInvertSign = (value.slice(-1) === '-');

					//only apply the minus sign if it is negative or(exclusive) or the first character
					//needs to be negative and the number is different from zero
					if ((needsToInvertSign ^ isNegative) || value === '-') {
						actualNumber *= -1;
						formatedValue = '-' + ((actualNumber !== 0) ? formatedValue : '');
					}
				}

				if (ctrl.$viewValue !== formatedValue) {
					ctrl.$setViewValue(formatedValue);
					ctrl.$render();
				}

				return actualNumber;
			}

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			if (attrs.uiPercentageMask) {
				scope.$watch(attrs.uiPercentageMask, function(_decimals) {
					decimals = isNaN(_decimals) ? 2 : _decimals;

					numberDecimals = decimals + modelValue.decimalMask;
					viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter);
					modelMask = NumberMasks.modelMask(numberDecimals);

					parser(formatter(ctrl.$modelValue));
				});
			}

			if (attrs.min) {
				var minVal;

				ctrl.$validators.min = function(modelValue) {
					return validators.minNumber(ctrl, modelValue, minVal);
				};

				scope.$watch(attrs.min, function(value) {
					minVal = value;
					ctrl.$validate();
				});
			}

			if (attrs.max) {
				var maxVal;

				ctrl.$validators.max = function(modelValue) {
					return validators.maxNumber(ctrl, modelValue, maxVal);
				};

				scope.$watch(attrs.max, function(value) {
					maxVal = value;
					ctrl.$validate();
				});
			}
		}
	};
}
PercentageMaskDirective.$inject = ['$locale'];

module.exports = PercentageMaskDirective;

},{"../../helpers/number-mask-builder":46,"../../helpers/pre-formatters":47,"../../helpers/validators":48}],43:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');

function ScientificNotationMaskDirective($locale, $parse) {
	var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
		defaultPrecision = 2;

	function significandMaskBuilder(decimals) {
		var mask = '0';

		if (decimals > 0) {
			mask += decimalDelimiter;
			for (var i = 0; i < decimals; i++) {
				mask += '0';
			}
		}

		return new StringMask(mask, {
			reverse: true
		});
	}

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var decimals = $parse(attrs.uiScientificNotationMask)(scope);

			if (isNaN(decimals)) {
				decimals = defaultPrecision;
			}

			var significandMask = significandMaskBuilder(decimals);

			function splitNumber(value) {
				var stringValue = value.toString(),
					splittedNumber = stringValue.match(/(-?[0-9]*)[\.]?([0-9]*)?[Ee]?([\+-]?[0-9]*)?/);

				return {
					integerPartOfSignificand: splittedNumber[1],
					decimalPartOfSignificand: splittedNumber[2],
					exponent: splittedNumber[3] | 0
				};
			}

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				if (typeof value === 'number') {
					value = value.toExponential(decimals);
				} else {
					value = value.toString().replace(decimalDelimiter, '.');
				}

				var formattedValue, exponent;
				var splittedNumber = splitNumber(value);

				var integerPartOfSignificand = splittedNumber.integerPartOfSignificand || 0;
				var numberToFormat = integerPartOfSignificand.toString();
				if (angular.isDefined(splittedNumber.decimalPartOfSignificand)) {
					numberToFormat += splittedNumber.decimalPartOfSignificand;
				}

				var needsNormalization =
					(integerPartOfSignificand >= 1 || integerPartOfSignificand <= -1) &&
					(
						(angular.isDefined(splittedNumber.decimalPartOfSignificand) &&
						splittedNumber.decimalPartOfSignificand.length > decimals) ||
						(decimals === 0 && numberToFormat.length >= 2)
					);

				if (needsNormalization) {
					exponent = numberToFormat.slice(decimals + 1, numberToFormat.length);
					numberToFormat = numberToFormat.slice(0, decimals + 1);
				}

				formattedValue = significandMask.apply(numberToFormat);

				if (splittedNumber.exponent !== 0) {
					exponent = splittedNumber.exponent;
				}

				if (angular.isDefined(exponent)) {
					formattedValue += 'e' + exponent;
				}

				var prefix = (angular.isDefined(attrs.uiNegativeNumber) && value[0] === '-') ? '-' : '';

				return prefix + formattedValue;
			}

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var isExponentNegative = /e-/.test(value);
				var cleanValue = value.replace('e-', 'e');
				var viewValue = formatter(cleanValue);

				var needsToInvertSign = (value.slice(-1) === '-');

				if (needsToInvertSign ^ isExponentNegative) {
					viewValue = viewValue.replace(/(e[-]?)/, 'e-');
				}

				if (needsToInvertSign && isExponentNegative) {
					viewValue = viewValue[0] !== '-' ? ('-' + viewValue) : viewValue.replace(/^(-)/,'');
				}

				var modelValue = parseFloat(viewValue.replace(decimalDelimiter, '.'));

				if (ctrl.$viewValue !== viewValue) {
					ctrl.$setViewValue(viewValue);
					ctrl.$render();
				}

				return modelValue;
			}

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			ctrl.$validators.max = function validator(value) {
				return ctrl.$isEmpty(value) || value < Number.MAX_VALUE;
			};
		}
	};
}
ScientificNotationMaskDirective.$inject = ['$locale', '$parse'];

module.exports = ScientificNotationMaskDirective;

},{"string-mask":35}],44:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');

module.exports = function TimeMaskDirective() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var timeFormat = '00:00:00';

			if (angular.isDefined(attrs.uiTimeMask) && attrs.uiTimeMask === 'short') {
				timeFormat = '00:00';
			}

			var formattedValueLength = timeFormat.length;
			var unformattedValueLength = timeFormat.replace(':', '').length;
			var timeMask = new StringMask(timeFormat);

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var cleanValue = value.replace(/[^0-9]/g, '').slice(0, unformattedValueLength) || '';
				return (timeMask.apply(cleanValue) || '').replace(/[^0-9]$/, '');
			}

			ctrl.$formatters.push(formatter);

			ctrl.$parsers.push(function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var viewValue = formatter(value);
				var modelValue = viewValue;

				if (ctrl.$viewValue !== viewValue) {
					ctrl.$setViewValue(viewValue);
					ctrl.$render();
				}

				return modelValue;
			});

			ctrl.$validators.time = function(modelValue) {
				if (ctrl.$isEmpty(modelValue)) {
					return true;
				}

				var splittedValue = modelValue.toString().split(/:/).filter(function(v) {
					return !!v;
				});

				var hours = parseInt(splittedValue[0]),
					minutes = parseInt(splittedValue[1]),
					seconds = parseInt(splittedValue[2] || 0);

				return modelValue.toString().length === formattedValueLength &&
					hours < 24 && minutes < 60 && seconds < 60;
			};
		}
	};
};

},{"string-mask":35}],45:[function(require,module,exports){
'use strict';

module.exports = function maskFactory(maskDefinition) {
	return function MaskDirective() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ctrl) {
				ctrl.$formatters.push(function formatter(value) {
					if (ctrl.$isEmpty(value)) {
						return value;
					}

					var cleanValue = maskDefinition.clearValue(value.toString(), attrs);
					return maskDefinition.format(cleanValue);
				});

				ctrl.$parsers.push(function parser(value) {
					if (ctrl.$isEmpty(value)) {
						return value;
					}

					var cleanValue = maskDefinition.clearValue(value.toString(), attrs);
					var formattedValue = maskDefinition.format(cleanValue);

					if (ctrl.$viewValue !== formattedValue) {
						ctrl.$setViewValue(formattedValue);
						ctrl.$render();
					}

					if (angular.isUndefined(maskDefinition.getModelValue)) {
						return cleanValue;
					}

					var actualModelType = typeof ctrl.$modelValue;
					return maskDefinition.getModelValue(formattedValue, actualModelType);
				});

				angular.forEach(maskDefinition.validations, function(validatorFn, validationErrorKey) {
					ctrl.$validators[validationErrorKey] = function validator(modelValue, viewValue) {
						return ctrl.$isEmpty(modelValue) || validatorFn(modelValue, viewValue, attrs);
					};
				});
			}
		};
	};
};

},{}],46:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');

function viewMask(decimals, decimalDelimiter, thousandsDelimiter) {
	var mask = '#' + thousandsDelimiter + '##0';

	if (decimals > 0) {
		mask += decimalDelimiter;
		for (var i = 0; i < decimals; i++) {
			mask += '0';
		}
	}

	return new StringMask(mask, {
		reverse: true
	});
}

function modelMask(decimals) {
	var mask = '###0';

	if (decimals > 0) {
		mask += '.';
		for (var i = 0; i < decimals; i++) {
			mask += '0';
		}
	}

	return new StringMask(mask, {
		reverse: true
	});
}

module.exports = {
	viewMask: viewMask,
	modelMask: modelMask
};

},{"string-mask":35}],47:[function(require,module,exports){
'use strict';

function clearDelimitersAndLeadingZeros(value) {
	if (value === '0') {
		return '0';
	}

	var cleanValue = value.toString().replace(/^-/,'').replace(/^0*/, '');
	return cleanValue.replace(/[^0-9]/g, '');
}

function prepareNumberToFormatter(value, decimals) {
	return clearDelimitersAndLeadingZeros((parseFloat(value)).toFixed(decimals));
}

module.exports = {
	clearDelimitersAndLeadingZeros: clearDelimitersAndLeadingZeros,
	prepareNumberToFormatter: prepareNumberToFormatter
};

},{}],48:[function(require,module,exports){
'use strict';

module.exports = {
	maxNumber: function(ctrl, value, limit) {
		var max = parseFloat(limit, 10);
		return ctrl.$isEmpty(value) || isNaN(max) || value <= max;
	},
	minNumber: function(ctrl, value, limit) {
		var min = parseFloat(limit, 10);
		return ctrl.$isEmpty(value) || isNaN(min) || value >= min;
	}
};

},{}],49:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('../../helpers/mask-factory');

var phoneMaskUS = new StringMask('(000) 000-0000'),
	phoneMaskINTL = new StringMask('+00-00-000-000000');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^0-9]/g, '');
	},
	format: function(cleanValue) {
		var formattedValue;

		if (cleanValue.length < 11) {
			formattedValue = phoneMaskUS.apply(cleanValue) || '';
		} else {
			formattedValue = phoneMaskINTL.apply(cleanValue);
		}

		return formattedValue.trim().replace(/[^0-9]$/, '');
	},
	validations: {
		usPhoneNumber: function(value) {
			return value && value.toString().length > 9;
		}
	}
});

},{"../../helpers/mask-factory":45,"string-mask":35}],50:[function(require,module,exports){
'use strict';

var m = angular.module('ui.utils.masks.us', [])
	.directive('uiUsPhoneNumberMask', require('./phone/us-phone'));

module.exports = m.name;

},{"./phone/us-phone":49}]},{},[36]);
