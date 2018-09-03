var recipes = {prop:1};
var key = 'prop';
/*
function updateObjectWithKeyAndValue(object, key, value){
   var newRecipe = Object.assign({}, recipes, {prop2:2});
   return newRecipe;
  
}
*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value;
 return object;
}

function deleteFromObjectByKey (object, key){
  var newRecipes = Object.assign({},recipes);
  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes[prop2];
  return recipes;
}
/*

/*
/*var key;
var value;
*/
function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, { [key]: value });
   //return recipes;
  
  
}



