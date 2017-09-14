error here!!!

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a[],v){
  var n = a;
  return n.unshift[v]
}


function destructivelyAddElementToBeginningOfArray(a[],v){
  return a.unshift[v]
}


function addElementToEndOfArray(a[],v){
  var n = a;
  return n.push[v]
}


function destructivelyAddElementToEndOfArray(a[],v){
  return a.push[v]
}

function accessElementInArray(a[],i){
  return a[i]
}


function destructivelyRemoveElementFromBeginningOfArray(a[]){
  return a.shift()
}

function removeElementFromBeginningOfArray(a[]){
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a[]){
  return a.pop()
}

function removeElementFromEndOfArray(a[]){
  return a.slice(0,a.length()-1)
}
