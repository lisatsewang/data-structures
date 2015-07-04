var BinarySearchTree = function(value){
  var bsTree = {};
	bsTree.value = value;
	bsTree.left = null;
	bsTree.right = null;

  bsTree.insert = function(newValue) {
    
    // find where to add the BST:
    //    if 'value' is < bsTree.value
    //      if no left child, create new bsTree with value and add as left child
    //      else recurse: ask left child to insert
    //    else if 'value' is > bsTree.value
    //      if no right child, create new bsTree with value and add as right child
    //      else recurse: ask right child to insert
    //    (implicitly any other case 'value' equals bsTree.value -- don't add new BST)

    if (newValue < bsTree.value) {
      if (bsTree.left === null) {
        bsTree.left = BinarySearchTree(newValue);
      } else {
        bsTree.left.insert(newValue);
      }
    } else if (newValue > bsTree.value) {
      if (bsTree.right === null) {
        bsTree.right = BinarySearchTree(newValue);
      } else {
        bsTree.right.insert(newValue);
      }
    }
  };

  bsTree.contains = function(target) {

    // if 'target' equals bsTree.value
    //    return true
    // else if 'target' < bsTree.value
    //    if bsTree.left is null 
    //      return false
    //    else
    //      bsTree.left.contains
    // else  // 'target' > bsTree.value
    //    if bsTree.right is null 
    //      return false
    //    else
    //      bsTree.right.contains

    if (target === bsTree.value) {
      return true;
    } else if (target < bsTree.value) {
      if (bsTree.left === null) {
        return false;
      } else {
        return bsTree.left.contains(target);
      }
    } else {
      if (bsTree.right === null) {
        return false;
      } else {
        return bsTree.right.contains(target);
      }
    }

  };

  bsTree.depthFirstLog = function(func) {
    //  call func passing in bsTree.value as parameter
    //  recursivly call depthFirstLog on any children that exist

    func(bsTree.value);

    if (bsTree.left !== null) {
      bsTree.left.depthFirstLog(func);
    }

    if (bsTree.right !== null) {
      bsTree.right.depthFirstLog(func);
    }

  };

  return bsTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * - insert: O(log n)
 * - contains: O(log n)
 * - depthFirstLog: O(n)
 */
