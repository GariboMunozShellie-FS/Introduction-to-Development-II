//<!-- Shellie Garibo Munoz
//Mar 19, 2021
//Assignment3-Employee-Tracker
//GariboMunoz_Shellie_Assignment3-Employee-Tracker -->//


class Employee {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.annualSalary = 0;
    }
}
class PartTime extends Employee {
    constructor( name, age, pay, hours ) {
    super(name, age);
    this.payRate = pay;
    this.hours = hours
    this.position = "Part Time";
    }
    calculatePay(){
        this.annualSalary = ((this.payRate * this.hours)*52);
    }
}
class Manager extends Employee {
    constructor( name, age, pay, hours ) {
    super(name, age);
        this.payRate = pay;
        hours = 40;
        this.hours= hours
        this.position = "Manager"
    }
    calculatePay(){
        this.annualSalary = ((this.payRate * 40)*52)-1000;
    }
}
class Main {
    constructor() {
        this.workers = [];
        const e1 = new Manager("Seth", 20, 15);
        e1.calculatePay();
        const e2 = new Manager("Morty", 25, 10);
        e2.calculatePay();
        const e3 = new PartTime("Jose", 30, 7, 25);
        e3.calculatePay();
        this.workers.push(e1,e2,e3)
        this.display();
        this.displayMenu();
    }
    displayMenu() {
        let choice = Number(prompt("Main Munu\n 1. Add Employee \n 2. Remove Employee \n 3. Edit Employee \n 4. Display Employee ")
    );
        switch (choice) {
            case 1:this.add();
                break;
            case 2:this.remove();
                break;
            case 3:this.edit();
                break;
            case 4:this.display();
                break;
        }
    }

    add() {

        let data = prompt("Please add the following information. Each seperated by a comma. (EX: Name, Age, Hours, Pay)");
        let pieces = data.split(",")
        if (pieces[2] < 40){
            const partTime= new PartTime(pieces[0], Number(pieces[1]), Number(pieces[3]), Number(pieces[2]))
            partTime.calculatePay();
            this.workers.push(partTime)
        }
        else{
            const manager = new Manager( pieces[0], Number(pieces[1]),Number(pieces[3]));
            manager.calculatePay();
            this.workers.push(manager)
        }
        this.display();
        
    }

    remove() {
        let removing =prompt("Please input the employee Name or ID Number to remove this individual.");
        let removeNum = Number(removing)-1
            if (removeNum >=0){
                this.workers.splice(removeNum, 1);
            }
            else{
                this.workers.forEach(emp => {
                    if(emp.name == removing){
                        this.workers.splice(this.workers.indexOf(emp), 1)
                    }
                });
            }

        
        this.display();
    }
    edit() {

        let editing = Number(prompt("Please input Employee ID Number to Edit there Pay Rate")-1);
        let newPay = Number(prompt("What is "+this.workers[editing].name+" new pay rate?"));
        this.workers[editing].payRate = newPay;
        this.workers[editing].calculatePay();

        this.display();
    }
    display() {
        
        console.clear();


        console.log("ID\tName\tAge\tSalary\thrs\tpay\tFT/PT");
        
        this.workers.forEach((emp,id)=> {
        
            console.log(id +1 +"\t" +emp.name +"\t" +emp.age +"\t" +emp.annualSalary +"\t" +emp.hours +"\t" +emp.payRate +"\t" +emp.position);
        })
        this.displayMenu();
    }

}

(() => {
    const main = new Main();
})();