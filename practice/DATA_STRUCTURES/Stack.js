function Node(data) {
    this.data = data;
    this.next;
}

function Stack() {

    this.top = null;

    Stack.prototype.add = function(data) {
        if (this.top === null) {
            this.top = new Node(data);
        }else{
            var newNode = new Node(data);
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    Stack.prototype.remove = function() {
        var temp = this.top,
            data = this.top.data;
        this.top = this.top.next;
        temp = null;
        return data;
    }

    Stack.prototype.print = function(){
        console.log("Top node: " + this.top.data);
    }
}

var s = new Stack();
s.add(1);
s.add(2);
s.add(3);

s.print();

s.remove();

s.print();
