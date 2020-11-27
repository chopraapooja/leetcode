// How will you implement a linked list ?
var ListNode = (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
})();
var LinkedList = (function () {
    function LinkedList(nums) {
        this.head = null;
        for (let i = 0; i < nums.length; i++) {
            this.addNode(new ListNode(nums[i]));
        }
    }
    LinkedList.prototype.addNode = function (node) {
        if (!this.head) {
            this.head = node;
            return;
        }
        let ptr = this.head;
        while (ptr.next) {
            ptr = ptr.next;
        }
        ptr.next = node;
    };
    LinkedList.prototype.traverse = function () {
        let ptr = this.head;
        while (ptr) {
            console.log(ptr.data);
            ptr = ptr.next;
        }
    };
    return LinkedList;
})();
const one = new LinkedList([1]);
one.traverse();
const l = new LinkedList([1, 2, 3]);
l.traverse();
const empty = new LinkedList([]);
empty.traverse();
