var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.length++;
	this.storage[this.length] = value;
};

stackMethods.pop = function() {
	var result;

	if (this.length > 0) {
		this.length--;
		result = this.storage[this.length + 1];	
	}

	return result;
};

stackMethods.size = function() {
	return this.length;
};


