
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(a,v){
  return [v, ...a]
}


function destructivelyAddElementToBeginningOfArray(a,v){
  a.unshift(v);
  return a
}


function addElementToEndOfArray(a,v){
  return [...a, v]
}


function destructivelyAddElementToEndOfArray(a,v){
  a.push();
  return a
}

function accessElementInArray(a,i){
  return a[i]
}


function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}

function removeElementFromBeginningOfArray(a){
  a.slice(1)
  return a  
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}

function removeElementFromEndOfArray(a){
  a.slice(0,a.length()-1);
  return a
}
