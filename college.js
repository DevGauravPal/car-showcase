class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data", DATA);
    }
}


let student1 = new User('test','test@gmail.com');
let student2 = new User('demo','demo@gmail.com');

