function saveLocalstorage(){

    let person = {
        name: "David",
        age: 33,
        email: "tabidavid@mailaxy.com",
        country: "Ecuador"

    }
};

let name = "Jhon";

localStorage.setItem("name", name);
localStorage.setItem("person", JSON.stringify(person));

function obtainLocalstorage(){
let name = localStorage.getItem("name");
let person = JSON.parse(localStorage.getItem("person"));

}