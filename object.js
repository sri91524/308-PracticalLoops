const myCar ={
    color:"blue", 
    year:1989, 
    hp:4000,
    "active registration" : true
};
console.log(typeof myCar.color);
console.log(myCar.year);
console.log(myCar.hp);
console.log(myCar["active registration"]);
console.log(myCar["year"]);

myCar.color ="Hot Pink";
myCar.isElectric = true;

//add new properties
// key = value
myCar.autoPilot = "Tesla Auto Software";

//deletes a property of an object
delete myCar["active registration"];

console.log(myCar);

//loop over an object
for(const key in myCar){
    console.log(`Key: ${key}, Value: ${myCar[key]}`);

    if(myCar[key] === 4000){
        console.log(`HP is ${myCar[key]}`);
        break;
    }else {
        console.log(myCar[key]);
    }
}

//returns an array of the object's values
const values = Object.values(myCar);
values.forEach( (value) => console.log(value));

//create an array and loop over the array of values
for(let value of Object.values(myCar))
{
    console.log(value);
}


if(myCar.year < 2000){
    console.log('check the engine');
}

//add an new engine property
myCar.engine ={
    size: 3.1,
    cylinders: 6
};
console.log(myCar);
console.log(myCar.engine.size);

//makes a copy of an object using spread operator
const myUsedCar = {...myCar};
console.log(myUsedCar);

const product ={
    price: 300,
    description: "Sunglasses"
}

const products = [product];
console.log(products[0].price);

if(myCar.isElectric){
    console.log(`Car is electric`);
}

const user = {
    isAdmin: false
}

if(user.isAdmin) {
    console.log('Admin');
}else {
    console.log('User');
}

