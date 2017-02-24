

/**
 * Created by Tom on 2/24/2017.
 * Array Helper Functions
 */



// forEach = loop but does not return a value
// map = creates new array  by returning value for each iteration
// filter = returns array where row is true
// find = returns 1st row that is true
// every = true if all lines in the array meet the condition
// some = true if some of the lines in the array meet the condition
// reduce = be sure to set the default value at the end



// forEach = loop but does not return a value

var myVars=[1,2,3];
var Sum=0;

var myFunc=myVar => Sum+=myVar;

myVars.forEach( myFunc );

console.log(Sum);



// map = creates new array  by returning value for each iteration
//1.
var myNums=[1,2,3];
var doubles = myNums.map(myNum=>myNum*2);
console.log(doubles);


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





// filter = returns array where row is true
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
var owner ={id:1,Name:'Tom'};

var autos = [{ownerID: 1, Auto: 'VW'},
    {ownerID: 2, Auto: 'Chev'},
    {ownerID: 1, Auto: 'Dodge'},
    {ownerID: 1, Auto: 'Plymoth'}
];

var myAuto = autos.find(auto=>auto.ownerID===1);
console.log(myAuto);


// every = true if all lines in the array meet the condition
//1.
var user ={id:1,Name:'Tom'};

var bikes = [{userID: 1, bike: 'Honda'},
    {userID: 2, bike: 'Harley'},
    {userID: 1, bike: 'Suzuki'},
    {userID: 1, bike: 'Yahama'}
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


// some = true if some of the lines in the array meet the condition
var people ={id:1,Name:'Tom'};

var homes = [{peopleID: 1, home: 'JR Condo'},
    {peopleID: 2, home: 'Sun Peak'},
    {peopleID: 1, home: 'Crest Point'},
    {peopleID: 1, home: 'Cove Point'}
];

var some = homes.some(home=> home.peopleID>1);
console.log(some);



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
