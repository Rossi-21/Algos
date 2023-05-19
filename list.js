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
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
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
}

var SLL1 = new SLL();
SLL1.addFront(18).addFront(12);

console.log(SLL1);

SLL1.removeFront();

console.log(SLL1);

