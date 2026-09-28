function generateGreeting(name) {
    return "Hello, " + name + "! Welcome to JavaScript!";
}

function showInfo() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let greeting = generateGreeting(name);

    let status;

    if (age < 18) {
        status = "You are a minor.";
    } else {
        status = "You are an adult.";
    }

    document.getElementById("result").innerHTML =
        greeting + "<br>" +
        "Your age is " + age + ".<br>" +
        status;
}