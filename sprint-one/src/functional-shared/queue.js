var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.head = 1;
  newQueue.tail = 0;

  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.length++;
  this.tail++;
  this.storage[this.tail] = value;
};

queueMethods.dequeue = function() {
  var temp;

  if (this.length > 0) {
    this.length--;
    temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
  }

  return temp;
};

queueMethods.size = function() {
  return this.length;	
};
