
/**
 * Created by Tom on 2/24/2017.
 * Array Helper Functions
 */


// forEach = loop but always returns undefined
// map = creates new array  by returning value for each iteration
// filter = returns array where row is true
// find = returns 1st row that is true
// every = true if all lines in the array meet the condition
// some = true if some of the lines in the array meet the condition
// reduce = be sure to set the default value at the end
// sort = expecting 2 values and returns a sorted list



// forEach = loop but always returns undefined ************************************************************

var myVars=[1,2,3];
var Sum=0;

var myFunc=myVar => Sum+=myVar;

myVars.forEach( myFunc );

console.log(Sum);


// forEach actually accepts 3 values but you don't have to use the second 2

var myArr = [1,2,3];
myArr.forEach(function (value,index,array){
    console.log(value,index);
});

// or this is the same thing

[1,2,3].forEach((value,index,array) => console.log(value,index))


// create a function that returns an array of half values

var myArr = [10,30,80];

function halfValues (arr) {
    var newArr = [];
    arr.forEach((val) => {
        newArr.push(val / 2);
})
    return newArr ;
}

console.log(halfValues(myArr));

/*
 Write a function called addKeyAndValue which accepts an array of objects, a key,
 and a value and returns the array passed to the function with the new key and value added for each object

 Examples:
 addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
 returns  [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
function addKeyAndValue(arr,key,value){
    arr.forEach( val => val[key] = value);
    return arr;
}


// End of forEach examples ****************************************************************************************




// Map always returns an array of the same length **************************************************************

// map = creates new array  by returning value for each iteration
// the following works because the return is implicit because there are no blocks
// ie.  this would not work  myNums.map(myNum=>{myNum*2})
// if using an arrow function and it is not in a block the second return is automaticly inclucded
// return arr.map((value, index, array)=> { return value *2;}) becomes return arr.map((value, index, array)=> value *2);
//1.
var myNums=[1,2,3];
var doubles = myNums.map(myNum=>myNum*2);
console.log(doubles);

// as a function be sure to add the return key word
var myNums=[1,2,3];
function tripleNums(arr) {return arr.map( myNum  => myNum * 3)};
console.log(tripleNums(myNums));



//2.
var myObjs =[
    {name:'Tom',gender:'M',age:63},
    {name:'Pam',gender:'F',age:61},
    {name:'Daniel',gender:'M',age:30},
    {name:'Hana',gender:'F',age:27}
];

var myObjs2 = myObjs.map(myObj=>myObj.name);
console.log(myObjs2);



//3.
var thePaints=[
    {color: 'red',num:12},
    {color: 'blue',num:10},
    {color: 'yellow',num:5}
];

function pluck(array, property) {
    return array.map(a => a[property]);
}

var theNewArray=pluck(thePaints,'color');
console.log(theNewArray);

// End of MAP examples ****************************************************************************************


// Map always returns an array of same or smaller size **************************************************************

// filter = returns array where row is true
var myNums=[1,2,3];

function greaterThan(arr,theNum) { return arr.filter( myNum  => myNum>theNum)};
console.log(greaterThan(myNums, 2));


//1.
var myClients =[
    {name:'Tom',gender:'M',age:63},
    {name:'Pam',gender:'F',age:61},
    {name:'Daniel',gender:'M',age:30},
    {name:'Hana',gender:'F',age:27}
];

var myClients2 = myClients.filter(myClient=>myClient.gender==='F' && myClient.age<30 );
console.log(myClients2);



//2.
var client ={id:1,Name:'Tom'};

var cars = [{clientID: 1, Car: 'VW'},
    {clientID: 2, Car: 'Chev'},
    {clientID: 1, Car: 'Dodge'},
    {clientID: 1, Car: 'Plymoth'}
];

function myCars(client,cars){
    return cars.filter (car => car.clientID===client.id)
};

console.log(myCars(client,cars));

//console.log(theNewArray);


// find = returns 1st row that is true

//1.
var owner ={id:1,Name:'Tom'};

var autos = [{ownerID: 1, Auto: 'VW'},
    {ownerID: 2, Auto: 'Chev'},
    {ownerID: 1, Auto: 'Dodge'},
    {ownerID: 1, Auto: 'Plymoth'}
];

// remember that find will only return the first row found
var myAuto = autos.find(auto=>auto.ownerID===1);
console.log(myAuto);



//2, findIndex returns the line number of the found record -- remember zero based
var indexNumber = autos.findIndex(auto=>auto.ownerID===2);
console.log('The index Number is '+indexNumber);
// to remove the found line
autos.splice(indexNumber,1);
console.log(autos);



// every = true if all lines in the array meet the condition
//1.
var user ={id:1,Name:'Tom'};

var bikes = [{userID: 1, bike: 'Honda'},
    {userID: 2, bike: 'Harley'},
    {userID: 1, bike: 'Suzuki'},
    {userID: 1, bike: 'Yamaha'}
];

var every = bikes.every(bike=> bike.userID>1);
console.log(every);

//2.
function Field(value){
    this.value = value;
}

Field.prototype.validate = function(){
    return this.value.length>2;
};

var username = new Field('tom');
var password = new Field('pwddddddd');

var fields=[username,password];

var areValid = fields.every(field => field.validate());
console.log('All fields are valid: '+areValid);



//Some = true if some of the lines in the array meet the condition

//1.
var people ={id:1,Name:'Tom'};

var homes = [{peopleID: 1, home: 'JR Condo'},
    {peopleID: 2, home: 'Sun Peak'},
    {peopleID: 1, home: 'Crest Point'},
    {peopleID: 1, home: 'Cove Point'}
];

var some = homes.some(home=> home.peopleID>1);
console.log(some);


//2.
var family=[
    {name: 'Tom', year:1953},
    {name: 'Pam', year:1955},
    {name: 'Daniel', year:1986},
    {name: 'Hana', year:1989}
];

var isOver30 = family.some(person=>(new Date().getFullYear()-person.year>=30));
console.log('Some members are over 30: '+isOver30);


// reduce
//1.
var numbers =[1,2,3,4,5,6];
var sum =0;

var theNum = numbers.reduce ((sum,number)=> sum + number,0);
console.log(theNum);


//2.
var colors=[
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'},
];

var newArray = colors.reduce((previous,color)=> {previous.push(color.color);
return previous;},[]);

console.log(newArray);

//3.    here is how to use reduce to add items up
var items =['car','bike','house','house','table','car','trailier'];
var count = items.reduce((obj,item)=>{
     if(!obj[item]) obj[item]=0;

    obj[item]++;
    return obj;
},{});

console.log(count);



//**************************************************
// using Set this will give you an array of unique values
//1.
var myArray = [1,2,3,4,3];
var mySet =new Set(myArray);

console.log(mySet);


//2.
var array =
    [
        {"name":"Joe", "age":17},
        {"name":"Bob", "age":17},
        {"name":"Carl", "age": 35}
    ];

var unique = [... new Set (array.map(item => item.age))];

console.log(unique);


//**************************************************
// exercise showing how to make sure that the string has = # of Parens

function balanceParens(string){
    return !string.split('').reduce((previous,char ) =>{
            if (previous<0){return previous};
            if (char ==='('){return ++previous};
            if (char ===')'){return --previous};
            return previous;
},0);
}

var theCount = balanceParens(')(())');

console.log(theCount);


//***********************************************************
//using sort will give you a new sorted array


//1.
var Inventors = [{name:'tom',age:63},{name:'pam',age:61},{name:'Daniel',age:30},{name:'Hana',age:27},];
var myNewArray =Inventors.sort((a,b)=> a.age > b.age ? 1:-1);

console.log(myNewArray);


//2.  sort with destructing example
var presidents= ['Trump, Donald','Obama, Barack','Bush, Geroge', 'Clinton, Bill','Reagan, Ronald'];
var sorted = presidents.sort((firstOne,nextOne)=>{
    var [lastName1,firstName1]=firstOne.split(', ');
    var [lastName2,firstName2]=nextOne.split(', ');

    return lastName1>lastName2? 1:-1;
});

console.log(sorted);



//*****************************




