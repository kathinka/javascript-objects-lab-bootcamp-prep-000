var recipes = {prop:1};

function updateObjectWithKeyAndValue(object, key, value){
   var newRecipe = Object.assign({}, recipes, {prop2:2});
   return newRecipe;
  
}

function deleteFromObjectbyKey(object, key){
  var newRecipe2 = Object.assign({}, recipes);
  delete newRecipe2.prop;
  return newRecipe2;
  
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