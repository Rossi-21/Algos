//create a node class for the linked list
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
// create the linked list class with a head
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if (this.head === null){
            return null;
        }
        const temp = this.head.data;
        this.head = this.head.next;
        return temp;
    }
    front(){
        console.log(this.head.data);
    }
    findSum(){
        if (this.head === null){
            return 0;
        }
        let runner = this.head;
        let sum = 0;
        while (runner !== null){
            sum+=runner.data;
            runner=runner.next;
        }
        return sum;
    }
    push(data) {
        if (this.head === null){
            this.head = new Node(data);
            return;
        }
        let pointer = this.head;
        while( pointer.next !== null){
            pointer = pointer.next;
        }
        pointer.next = new Node(data);
    }
    contains(value){
        if (this.head === null){
            return null;
        }
        let runner = this.head;
        while (runner !== null){
            runner=runner.next;
            if(runner.data === value){
                return true;
            }
            return false;
        }
    }
    length(){
        if (this.head === null){
            return null;
        }
        let runner = this.head;
        let sum = 0;
        while (runner !== null){
            runner=runner.next;
            sum++;
        }
        return sum;
    }
    display(){
        if (this.head === null){
            return null;
        }
        let runner = this.head; 
        var string = "";
        while (runner){
            string += runner.data + ", ";
            runner = runner.next;
            } 
            console.log(string);          
        }
    reverse(){
        if (this.head === null){
            return null;
        }
        let pointer = this.head;
        let previous = null;
        while(pointer !== null){
            const temp = pointer.next;
            pointer.next = previous;
            previous = pointer;
            pointer = temp;
        }
        this.head = previous;
    }
}

var SLL1 = new SLL();
SLL1.addFront(10);
SLL1.addFront(13);
SLL1.push(12);
SLL1.addFront(119);
console.log(SLL1);
SLL1.display();

