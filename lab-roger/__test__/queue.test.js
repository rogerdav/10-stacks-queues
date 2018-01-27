'use strict';

const Queue = require('../lib/queue');
require ('jest');


describe('Queue Module', function() {

  beforeEach(() => this.queue = new Queue());


  describe('Default Properties', () =>{

    it('should create a new instance of a stack', () =>{
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default value of 1 assigned to the oldest', () =>{
      expect(this.queue.oldest).toBe(1);
    });
    it('should have a default val 0 assigned to the size property', () => {
      expect(this.queue.size()).toEqual(0);
    });

  });

  describe('enQueue', () =>{

    it('should create a new placeholder in queue', () =>{
      expect(this.queue.enQueue(1)).toBe('Value 1');
    });
    it('should return a size of 1', () =>{
      this.queue.enQueue(1);
      expect(this.queue.size()).toEqual(1);
    });
    it('should have a newest index value of 2', () => {
      this.queue.enQueue(1);
      expect(this.queue.newest).toEqual(2);
    });

  });
  describe('enQueue', () =>{

    it('should remove a placeholder in queue', () =>{
      this.queue.enQueue(1);
      this.queue.enQueue(2);
      this.queue.enQueue(25);
      expect(this.queue.deQueue()).toEqual(1);
      expect(this.queue.size()).toEqual(2);

    });
    // it('should return a size of 1', () =>{
    //   this.queue.enQueue(1);
    //   expect(this.queue.size()).toEqual(1);
    // });
    // it('should have a newest index value of 2', () => {
    //   this.queue.enQueue(1);
    //   expect(this.queue.newest).toEqual(2);
    // });

  });




});
