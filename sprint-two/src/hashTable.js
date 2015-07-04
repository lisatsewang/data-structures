var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  var keyValue = {};
  keyValue[k] = v;
  if (bucket === undefined) {
  	this._storage.set(i, [keyValue]);
  } else {
  	bucket.push(keyValue);
  	this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (bucket !== undefined) {
  	for (var j = 0; j < bucket.length; j++) {
  		if (bucket[j].hasOwnProperty(k)) {
  			return bucket[j][k];
  		}
  	}
  } 
  
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var removeIndex;
  var result;

  // TODO: check if bucket is undefined.
  if (bucket !== undefined) {
  	for (var j = 0; j < bucket.length; j++) {
  		if (bucket[j].hasOwnProperty(k)) {
  			removeIndex = j;
  			break;
  		}
  	}

  	if (removeIndex !== undefined) {
  		result = bucket[removeIndex][k];
  		bucket.splice(removeIndex, 1);
  		this._storage.set(i, bucket);
  	}
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * - insert: O(1)
 * - retrieve: O(1) if the table is implemented to automatically grow
 * - remove:   "
 */
