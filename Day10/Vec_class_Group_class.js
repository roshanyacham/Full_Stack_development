class Vec {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
  
    plus(otherVec) {
      return new Vec(this.x + otherVec.x, this.y + otherVec.y)
    }
  
    minus(otherVec) {
      return new Vec(this.x - otherVec.x, this.y - otherVec.y)
    }
  
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
  }
console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(3, 4).length)



class Group {
    constructor() {
      this.members = []
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value)
      }
    }
  
    delete(value) {
      this.members = this.members.filter(member => member !== value)
    }
  
    has(value) {
      return this.members.includes(value)
    }
  
    static from(iterable) {
      let group = new Group()
      for (let value of iterable) {
        group.add(value)
      }
      return group
    }
  }
let group = Group.from([10, 20])
console.log(group.has(10))
console.log(group.has(30))
group.add(10);
group.delete(10);
console.log(group.has(10))
  