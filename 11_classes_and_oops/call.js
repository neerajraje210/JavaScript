function SetUsername (usernmae) {

    this.usernmae = usernmae
    console.log("called");
}

function createuser(usernmae,email,password)
{   
    SetUsername.call(this, usernmae)
    this.password=password
    this.email=email
}

const chai = new createuser("chai","chai@gmail.com","123")

console.log(chai);