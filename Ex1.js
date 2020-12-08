/** @format */

// Binary Tree

// Creating node

function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
	this.remove = remove;
	this.count = 1;
}

function show() {
	return this.data;
}

// building class to represent a binary search tree.
// The class will consist of only one data member, which is a node object that will represent the root of the tree
// we will set the root to be null so that we can create an empty node

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.removeNode = removeNode;
	this.getSmallest = getSmallest;
	this.update = update;
	this.Arrayz = Arrayz;
	this.genArray = genArray;
}

function insert(data) {
	var node = new Node(data, null, null);
	if (this.root === null) {
		this.root = node;
	} else {
		var current = this.root;
		var parent;

		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = node;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = node;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (node !== null) {
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (node !== null) {
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if (node !== null) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}

function getMin() {
	var current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	var current = this.root;
	while (current && current.data !== data) {
		if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
	}
	return current;
}

function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if (node === null) {
		return null;
	}
	if (data === node.data) {
		// check to see if the node have no children
		if (node.left === null && node.right === null) {
			return null;
		}
		// node has no left child
		if (node.left === null) {
			return node.right;
		}
		// node has no right child
		if (node.right === null) {
			return node.left;
		}
		// node has two children'
		var temp = getSmallest(node.right);
		node.data = temp.data;
		node.right = this.removeNode(node.right, temp.data);
		return node;
	} else if (data < node.data) {
		node.left = this.removeNode(node.left, data);
		return node;
	} else {
		node.right = this.removeNode(node.right, data);
		return node;
	}
}

function getSmallest(node) {
	if (node.left == null) {
		return node;
	} else {
		return getSmallest(node.left);
	}
}

function update(data) {
	var grade = this.find(data);
	grade.count++;
	return grade;
}

function Arrayz(array) {
	console.log(`${array[0].toString()} `);
	for (var i = 1; i < array.length; i++) {
		console.log(`${array[i].toString()} `);
		if (i % 10 === 0) {
			console.log("\n");
		}
	}
}

function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 100);
	}
	return arr;
}

var grades = genArray(100);
Arrayz(grades);

var graded = new BST();
for (var i = 0; i < gradees.length; i++) {
	var g = grades[i];
	var grade = graded.find(g);

	if (grade === null) {
		graded.insert(g);
	} else {
		graded.update(g);
	}
}

var numbers = new BST();

numbers.insert(23);
numbers.insert(45);
numbers.insert(16);
numbers.insert(37);
numbers.insert(3);
numbers.insert(99);
numbers.insert(22);
console.log("Inorder traversal: ");
numbers.inOrder(numbers.root);
console.log("Preorder traversal: ");
numbers.preOrder(numbers.root);
console.log("Postorder traversal: ");
numbers.postOrder(numbers.root);

var mini = numbers.getMin();
console.log(`The minimum value is ${mini}`);
console.log("\n");

var maxi = numbers.getMax();
console.log(`The maximum value is ${maxi}`);
