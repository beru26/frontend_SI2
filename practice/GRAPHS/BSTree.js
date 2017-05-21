function Node(element, left, right) {
    this.element = element;
    this.left = left;
    this.right = right;
    this.show = show;
    this.isParent = false;
}

// just a peek function to the current node data
function show() {
    return this.data;
}

function BST() {
    this.root = root;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if(this.root == null) {
        this.root = n;
    }else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = n;
                    break;
                }
            }else {
                currenr = current.right;
                if(current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
