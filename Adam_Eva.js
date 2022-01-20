class Apple{
    constructor(weight) {
        this.weight = 10;
    }
    decrease(value){
        return this.weight - value;
    }
    isEmpty(){
        if (this.weight == 0){
            return true;
        }
    }
    getWeight(){
        return this.weight;
    }
}
class Human{
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    setGender(male){
        this.gender = male;
    }
    checkApple(Apple){
        return Apple.getWeight();
    }
    eat(Apple){
        if(Apple.isEmpty()){
        }
        else{
            this.weight ++;
            Apple.weight --;
        }
    }
    speak(string){
        return this.speak = string ;
    }
    getName(){
        return this.name;
    }
    setName(string){
        this.name = string
    }
    getWeight(){
        return this.weight;
    }
    setWeight(int){
        this.weight = int;
    }

}
let apple = new Apple(10);
let Adam = new Human("Adam","male","70");
let Eva = new Human("Eva","female","50");