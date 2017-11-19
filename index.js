const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var kitten = [...kittens, name];
  return kitten;
}

function prependKitten(name){
  var kitten = [name, ...kittens];
  return kitten;
}

function removeLastKitten(){
  var kitten = kittens(slice.kittens - 1);
  return kitten;
}