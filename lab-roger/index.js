'use strict';
const Queue = require('./lib/queue');
const Stack = require('./lib/stack');


let aStack = new Stack();
let aQueue = new Queue();

aStack.push(25);
console.log('A statck peek', aStack.peek());

aQueue.enQueue(34);
console.log('A queue deQueue', aQueue.deQueue());
