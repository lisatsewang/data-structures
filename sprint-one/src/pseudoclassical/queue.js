var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.head = 1;
  this.tail = 0;
};

Queue.prototype.enqueue = function (value) {
	this.length++;
	this.tail++;
	this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function () {
	var result;

	if (this.length > 0) {
		this.length--;
		result = this.storage[this.head];
		delete this.storage[this.head];
		this.head++;
	}

	return result;
};

Queue.prototype.size = function () {
	return this.length;
};


