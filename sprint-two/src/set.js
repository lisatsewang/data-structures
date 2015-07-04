var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item] = item;
};

setPrototype.contains = function(item){
	if (this._storage.hasOwnProperty(item)) {
		return true;
	} else {
		return false;
	}
};

setPrototype.remove = function(item){
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Dependent on Javascript Object implementation.
 * - add: O(1)
 * - contains: O(1)
 * - remove: O(1)
 */
