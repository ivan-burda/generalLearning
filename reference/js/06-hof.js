function higherOrderFunction(x, callback){
  return callback (5, x)
}

function add (y,x){
  return x+y;
}

higherOrderFunction(10, add)