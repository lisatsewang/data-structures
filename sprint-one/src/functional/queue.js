var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var head = 1;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    tail++;
    storage[tail] = value;
  };

  someInstance.dequeue = function(){
    var value;
    if (length > 0) {
      value = storage[head];
      delete storage[head];
      head++;
      length--;
    }
    return value;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
