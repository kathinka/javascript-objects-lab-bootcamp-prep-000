var recipes = {};

function updateObject(object, key, value){
   return Object.assign({} recipes, {key:value});
  
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