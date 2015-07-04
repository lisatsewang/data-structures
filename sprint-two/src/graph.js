

var Graph = function() {
	this._graph = {};
};

Graph._findRemoveEdge = function(fromNode, toNode) {
  var found = -1;
  var edges = this._graph[fromNode];

  for (var i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      found = i;
      break;
    }
  }

  if (found !== -1) {
    edges.splice(found, 1);
  }
};

Graph.prototype.addNode = function(node){
	this._graph[node] = [];
};

Graph.prototype.contains = function(node){
	if (this._graph.hasOwnProperty(node)) {
		return true;
	} else {
		return false;
	}
};

Graph.prototype.removeNode = function(node){
	if (this._graph.hasOwnProperty(node)) {
		var edges = this._graph[node];

		for (var i = 0; i < edges.length; i++) {
			Graph._findRemoveEdge(edges[i], node);
		}

		delete this._graph[node];
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if (this._graph.hasOwnProperty(fromNode)) {
		var edges = this._graph[fromNode];

		for (var i = 0; i < edges.length; i++) {
			if (edges[i] === toNode) {
				return true;
			}	
		}
	}

	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if (this._graph.hasOwnProperty(fromNode) &&
		  this._graph.hasOwnProperty(toNode)) {

		this._graph[fromNode].push(toNode);
		this._graph[toNode].push(fromNode);	
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if (!this._graph.hasOwnProperty(fromNode) ||
		!this._graph.hasOwnProperty(toNode)) {
		return;
	}

	Graph._findRemoveEdge(fromNode, toNode);
	Graph._findRemoveEdge(toNode, fromNode);
};

Graph.prototype.forEachNode = function(cb){
	for (var node in this._graph) {
		cb(node);
	}
};

/*
 * 
 * Complexity: What is the time complexity of the above functions?
 * - addNode: O(1)
 * - contains: depends on implementation of Javascript Object; if a hash table = O(1); if naive, could be O(n)
 * - removeNode: O(n^2) -- double loop to find and remove all edge references
 * - hasEdge: O(n)
 * - addEdge: O(1)
 * - forEachNode: O(n)
 */



