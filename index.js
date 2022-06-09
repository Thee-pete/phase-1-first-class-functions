function receivesAFunction(comeTomorrow){
    comeTomorrow();
}gi
function returnsANamedFunction(){
    return function comeTomorrow(){console.log("Coming Tomorrow");};
}
function returnsAnAnonymousFunction(){
    return function(){console.log("Coming Tomorrow");};
}