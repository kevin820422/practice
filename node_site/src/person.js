class Person{
    constructor(name,age) { //此處未給預設值 <=> (name='mary',age=20)
        this.name = name;
        this.age = age;
    }
    toJSON() {
        const obj = {
            name: this.name,
            age: this.age
        };
        return JSON.stringify(obj);
    }
}
module.exports = Person; //node匯出類別