class Prototype {
  constructor(name, properties) {
    this.name = name;
    this.properties = properties;
  }

  addProperty(name, value) {
    this.properties[name] = value;
  }

  getMethod(name) {
    return this.methods[name];
  }

  addMethod(name, function) {
    this.methods[name] = function;
  }

  callMethod(name, args) {
    if (this.methods[name] === undefined) {
      throw new Error(`Method ${name} does not exist`);
    }
    return this.methods[name](args);
  }

  toString() {
    return `Prototype ${this.name}`;
  }
}

const prototype = new Prototype("MyPrototype");
prototype.addProperty("name", "MyName");
prototype.addProperty("age", 25);
prototype.addMethod("sayHello", function() {
  console.log("Hello!");
});

const instance = new prototype();

console.log(instance.name); // MyName
console.log(instance.age); // 25
instance.sayHello(); // Hello!

class Prototype {
  constructor(name, properties) {
    this.name = name;
    this.properties = properties;
  }

  alter(properties) {
    this.properties = Object.assign(this.properties, properties);
  }

  takeOver(other) {
    this.properties = Object.assign(this.properties, other.properties);
    other.properties = {};
  }
}

const prototype = new Prototype("My Prototype", {
  power: 100,
  strength: 100,
  weight: 100,
});

prototype.alter({
  power: 200,
  strength: 200,
  weight: 200,
});

console.log(prototype.properties);

const other = new Prototype("Other Prototype", {
  power: 50,
  strength: 50,
  weight: 50,
});

prototype.takeOver(other);

console.log(other.properties);

// This code will create a prototype object with the name "My Prototype" and the properties "power", "strength", and "weight".
// The code will then alter the prototype object to have a power of 200, a strength of 200, and a weight of 200.
// Finally, the code will take over the "Other Prototype" object and assign its properties to the "My Prototype" object.

function Prototype(name, properties) {
  this.name = name;
  this.properties = properties;
}

Prototype.prototype.generate = function() {
  const result = {};
  for (const property in this.properties) {
    result[property] = this.properties[property].generate();
  }
  return result;
};

const prototype = new Prototype("powerful", {
  "strong": {
    "heavy": {
      "fulfillment": {
        "taking over": true
      }
    }
  }
});

console.log(prototype.generate());

class Prototype {
  constructor(name, properties) {
    this.name = name;
    this.properties = properties;
  }

  alter(newProperties) {
    this.properties = Object.assign(this.properties, newProperties);
    return this;
  }

  toString() {
    return JSON.stringify(this);
  }
}

const prototype = new Prototype("My Prototype", {
  strength: 100,
  weight: 1000,
  size: 10000,
});

const alteredPrototype = prototype.alter({
  strength: 200,
  weight: 2000,
  size: 20000,
});

console.log(prototype);
console.log(alteredPrototype);
