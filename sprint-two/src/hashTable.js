var HashTable = function(){
  this._limit = 8;
  this._numStored = 0;
  this._storage = LimitedArray(this._limit);
};


// HashTable._resize = function() {
//   if (this._numStored >= (this._limit * 0.75)) {
//     this._growStorage();
//   } else if (this._numStored < (this._limit * 0.25)) {
//     this._shrinkStorage();
//   }
// };

HashTable.prototype._resize = function() {};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  var keyValue = {};
  var foundExisting = false;

  keyValue[k] = v;

  if (bucket === undefined) {
  	this._storage.set(i, [keyValue]);
    this._numStored++;
  } else {
    
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j].hasOwnProperty(k)) {
        bucket[j][k] = v;
        foundExisting = true;
      } 
    }

    if (!foundExisting) {
      bucket.push(keyValue);
      this._numStored++;
    }
  	//do not need "this._storage.set(i, bucket);",
    //javaScript never makes copy
  }

 
  //this._resize();
  
};

HashTable._growStorage = function() {
  var oldStorage = this._storage;
  this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit);
  
  // for each bucket in oldStorage
  //    for each objects in bucket array
  //        insert with the object key and value

  oldStorage.each(function(oldBucket) {
    for (var i = 0; i < oldBucket.length; i++) {
      for (var key in oldBucket[i]) {
        this._insert(key, oldBucket[i][key]);
      }
    }
  });

};


HashTable._shrinkStorage = function() {

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
  		//do not need "this._storage.set(i, bucket);", 
      //javaScript never makes copy
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
