
exports.min = function min (array) {
  return (array&&Array.isArray(array)&&array.length>0)?array.sort((a,b)=>a-b)[0]:0;
}

exports.max = function max (array) {
  return (array&&Array.isArray(array)&&array.length>0)?array.sort((a,b)=>b-a)[0]:0;
}

exports.avg = function avg (array) {
  return (array&&Array.isArray(array)&&array.length>0)?array.reduce((acc,cur)=>acc+cur)/array.length:0;
}
