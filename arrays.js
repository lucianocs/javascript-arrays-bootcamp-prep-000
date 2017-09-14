
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(a,v){
  return [v, ...a]
}


function destructivelyAddElementToBeginningOfArray(a,v){
var n = a;
return  a.unshift(v);
}


function addElementToEndOfArray(a,v){
  return [...a, v]
}


function destructivelyAddElementToEndOfArray(a,v){
  return a.push(v)
}

function accessElementInArray(a,i){
  return a[i]
}


function destructivelyRemoveElementFromBeginningOfArray(a){
  return a.shift()
}

function removeElementFromBeginningOfArray(a){
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a){
  return a.pop()
}

function removeElementFromEndOfArray(a){
  return a.slice(0,a.length()-1)
}
