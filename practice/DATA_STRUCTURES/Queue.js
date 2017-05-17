function Node(data) {
    this.data = data;
    this.next;
}

function Queue() {
    this.head = null;
    this.tail = null;

    Queue.prototype.add = function(data) {
        if(this.head === null) {
            this.head = new Node(data);
        }else if(this.tail === null) {
            var newNode = new Node(data);
            this.tail = newNode;
            this.head.next = this.tail;
        }else{
            var newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    Queue.prototype.remove = function() {
        var temp = this.head,
            data = this.head.data;
        this.head = this.head.next;
        temp = null;
        return data;
    }

    Queue.prototype.print = function() {
        console.log("HEAD: " + this.head.data + ", TAIL: " + this.tail.data);
    }
}

var q = new Queue();

q.add(2);
q.add(6);
q.add(26);

q.print();

q.remove();

q.print();
