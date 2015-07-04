var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }

    list.tail = newNode; 
  };

  list.removeHead = function(){
    var value;

    if (list.head !== null) {
      value = list.head.value;
      list.head = list.head.next;

      if (list.head === null) {
        list.tail = null;
      }
    }
    
    return value;
  };

  list.contains = function(target){
    var current = list.head;

    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * - addToTail = O(1)
 * - removeHead = O(1)
 * - contains = O(n)
 */
