var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.head = 1;
  newQueue.tail = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.length++;
	this.tail++;
	this.storage[this.tail] = value;
};

queueMethods.dequeue = function() {
	var result;
	if (this.length > 0) {
		result = this.storage[this.head];
		this.length--;
		this.head++;
	}
	return result;
};

queueMethods.size = function() {
	return this.length;
};



