let famTree = [];

class Grandparent {
  constructor(hairColor, eyeColor){
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
  }
  Vertical(){
    console.log(`Grandparent can jump 11 inches high`);
  }
}


class Parent extends Grandparent {
  constructor(hairColor,eyeColor){
    super(hairColor, eyeColor);
  }
  Vertical(){
    console.log("Parent can jump 8 inches high");
  }
}

class Child extends Parent {
  constructor(hairColor, eyeColor){
    super(hairColor, eyeColor);
  }
  Vertical(){
    console.log("Child can jump 6 inches high");
  }
}

let Joline = new Grandparent("Red hair", "Brown eyes");
let Joni = new Parent ("Blonde hair", "Brown eyes");
let Kaitlin = new Child("Red Hair", "Green eyes");

famTree.push(Joline);
famTree.push(Joni);
famTree.push(Kaitlin);

for (let i = 0; i < famTree.length; i++){
famTree[i].Vertical();
}
