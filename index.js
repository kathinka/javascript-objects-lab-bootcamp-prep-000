var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
   
   var newRecipe = Object.assign({}, recipes, {key:value});
   return newRecipes;
  
}
/*var key;
var value;
*/
/*function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, { [key]: value });
   return recipes;
  
  
}
function deleteFromObjectByKey (object, key){
  var newRecipes = Object.assign({},recipes);
  delete newRecipes.key;
  return newRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value;
 return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.key;
  return recipes;
}*/