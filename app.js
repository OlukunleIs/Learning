// alert('hello world')
// let name='Lawrence'
// console.log(name);
// document.write(name)
// document.getElementById('lasop').innerHTML=name

// var _student=('pro')
// console.log(_student)

// const man='woman'
// console.log(man)

// let name='timini'
// console.log(name)

// var _student=('Kunle')
// console.log(_student)

// data type
// 1 String datatyp
// 2 numbers data type
// 3 interger data type
// 4 Bigint
// 5 Boolean da type6 undefined
// 6 undefined
// 7 Objects
// 8 Array

// let home='Adron'
// console.log(home);

// let match='fixed'
// document.getElementById('lasop').innerHTML='fixed'
// document.getElementById('las').innerHTML='I wasn\'t home';

// Sting Methods
// Concatenation

// let club='Chelsea'
// let play='Timo'
// let player='Werner'
// let match=play + player + 'wears jersey number 9 for ' + club;
// document.getElementById('lasop').innerHTML=match;

// let driver='Louis'
// let surname='Hamilton'
// let car='Mercedez'
// let sport='Formula'
// let sentence=driver + ' ' + surname +' drives '+ car +' '+ 'benz car in '+ sport +'1 race'
// document.getElementById('law').innerHTML=sentence;

// let char=prompt('Compose your tweet');
// let message=('You have written '+ char+', you have '+ (200- char.length)+ 'characters remaining');
// document.getElementById('law').innerHTML=message;

// Template Literal

// let match=`${play} ${player} wear jersey number 11 for ${club}`
// document.getElementById('law').innerHTML=match;

// let classwork= `${driver} ${surname} drives ${car} benz in ${sport}1 race.`
// document.getElementById('law').innerHTML=classwork;

// // Length Method
// let school='Programming';
// console.log(school.length);

// // Include Methods
// console.log(school.includes('c'))

// // Index
// console.log(school[0])
// console.log(school.indexOf('a'))

// let email='supermen@gmail.com'
// console.log(email.lastIndexOf('e'));
// console.log(email.indexOf('e'));

// console.log(email.toLocaleUpperCase())
// console.log(email.toLocaleLowerCase())

// // Number Datatype
//  let x=10;
//  let y=2;

//  console.log(42+2)
//  console.log(42-2)
//  console.log(42*2)
//  console.log(42**2)
//  console.log(42/2)
//  console.log(42%2)
//  console.log(x*y)

// //  Increamental Method
// let likes=5;
// likes++;
// console.log(likes)


// Boolean

// Comparison

// let k=5;
// console.log(k==7);
// console.log(k=='5'); //weak equality
// console.log(k==='5'); //strong equality
// console.log(k!=5);
// console.log(k>=5);
// console.log(k<=5);
// console.log(k='5');
// console.log(k=5);

// Comparison operators :AND (conjuction), OR (disjuction) and NOT (negation)
// let a=6;
// let b=3;
// console.log(a < 10 && b > 1);
// console.log(a < 10 && b < 1);
// console.log(a < 10 || b < 1);
// console.log(a==1);
// console.log(!(a==1));

// Conditional statement
// if and else statement
// ternary operation
// switch statement


// if and else statement
// let v=5;
// let w=7;

// if(w>v){
//     console.log(`${w} is greater than ${v}`);
// }
// else{
//     console.log(`${v} is greater than ${w}`);
// }


// let user=prompt('Enter your number');
// if (user%2==0 && user%3==0){
//     console.log(`${user} is divisible by 2 and 3`);
// }
// else if (user%2==0 && user%5==0){
//     console.log(`${user} is divisible by 2 and 5`);
// }
// else if(user%2==0){
//     console.log(`${user} is divisible by 2`);
// }
// else if(user%3==0){
//     console.log(`${user} is divisible by 3`);
// }
// else if(user%5==0){
//     console.log(`${user} is divisible by 5`);
// }
// else if(user%2==0){
//     console.log(`${user} is divisible by 2`);
// }
// else{
//     console.log(`${user} is not divisible by 2, 3, or 5`)
// }



// Class Work

// let input = prompt('Enter a number from 1 to 10');
// let user1=parseInt(input)
// if (user1>= 1 && user1<=10){
    

//     if (user1%2==0 && user1%3==0){
//         document.getElementById('law').innerHTML=` ${user1} is divisible by 2 and 3`;
//     }
//     else if (user1%2==0 && user1%5==0){
//         document.getElementById('law').innerHTML=`${user1} is divisible by 2 and 5`;
//     }
//     else if(user1%2==0){
//         document.getElementById('law').innerHTML=`${user1} is divisible by 2`;
//     }
//     else if(user1%3==0){
//         document.getElementById('law').innerHTML=`${user1} is divisible by 3`;
//     }
//     else if(user1%5==0){
//         document.getElementById('law').innerHTML=`${user1} is divisible by 5`;
//     }
//     else if(user1%2==0){
//         document.getElementById('law').innerHTML=`${user1} is divisible by 2`;
//     }
//     else{
//         document.getElementById('law').innerHTML=`${user1} is not divisible by 2, 3, or 5`
//     }
    
// }
// else{
// document.getElementById('law').innerHTML='Enter a valid number';
// }
// Classwork ends



// ternary operation
// let age=prompt('How old are you');
// let vote=(age>=18)?'You can register and vote': 'You are too young to vote'
// document.getElementById('law').innerHTML=vote;


// let age=prompt('How old are you');
// if (age>=18 && age<=100){
//     document.getElementById('law').innerHTML='You are qualified for the job'
// }
// else if(age<=17){
//     document.getElementById('law').innerHTML='You are too young for the job'
// }
// else{
//     document.getElementById('law').innerHTML='You are too old for the job, go and rest'
// }



// Switch operation

// `

// let day;
// switch (new Date().getDay()){
//     case 0:
//         day='Sunday'
//     break;
//     case 1:
//         day='Monday'
//     break;
//     case 2:
//         day='Tuesday'
//     break;
//     case 3:
//         day='Wednesday'
//     break;
//     case 4:
//         day='Thurday'
//     break;
//     case 5:
//         day='Friday'
//     break;
//     case 6:
//         day='Saturday'
//     break;
//     default:
//         break;
// }

// document.getElementById('law').innerHTML=`Today is ${day}, and the date and time are ${new Date}`


// let now=new Date();
// let time=now.getHours()
// if(time>=00 && time<12){
//     document.getElementById('law').innerHTML=`Good morning Sir/Ma\'am `;
// }
// else if(time>=12 && time<=16){
//     document.getElementById('law').innerHTML=`Good afternoon Sir/Ma\'am`;
// }
// else{
//     document.getElementById('law').innerHTML=`Good evening Sir/Ma\'am`;
// }


// let password=prompt('Enter your password')
// if(password==''){
//     console.log('This field is required')
// }
//     else if(password.length>=8 || password.length<=15){
   
    
//      if(password.includes('&') && password.includes('@')){
//         console.log('Password is strong')
//     }
//     else if(password.includes('$') && password.includes('#')){
//         console.log('Password is okay')
//     }
//     else if(password.includes('&')){
//         console.log('Password is intermediate')
//     }
//     else if(password.includes('@')){
//         console.log('Password is weak')
//     }
//     else {
//         console.log('Enter a valid password')
//     }
// }
// else{
//     console.log('Password must be between 8 and 15 characters')
// }



// Object data type
// let car= {
//     color: 'White',
//     brand:'Mercedes',
//     model:'G-Wagon',
//     year: 2020
// };
// console.log(car)
// console.log(car.brand)

// document.getElementById('check').click()

// let list=[1, 2, 3, 4] - list
// let list=['one', 1, 2, 3, 'True', 3.232] - array


// var prycolor=['red', 'blue', 'green']
// console.log(prycolor)
// console.log(prycolor [2])
// let colors=new Array('Purple', 'Black', 'Yellow', 'Pink')
// console.log(colors)


// // Array methods

// // Pop (to remove the last item in an array)
// let vehicle=['venza', 'BMW', 'corola', 'Volkswagen', 'Lexus']
// vehicle.pop()
// console.log(vehicle)

// // shift (to remove the first item in an array)
// let comedians=new Array('AY', 'Alibaba', 'I go save', 'Gordons', 'Basketmouth', 'Bovi')
// comedians.shift()
// console.log(comedians)

// // Push is to add to array items at the end
// comedians.push('I go dye')
// console.log(comedians)

// // Unshift  is to add to array items at the end
// vehicle.unshift('Ferari')
// console.log(vehicle)

// // Join allows you to put space, or - to items in an array
// let framework=['vue.js', 'Angular.js', 'Ajax.js']
// let result=framework.join(' - ')
// document.getElementById('law').innerHTML=result

// // Concat
// let complain=comedians.concat(['Taooma', 'Mr Jollof', 'Ojas'])
// document.getElementById('law').innerHTML=complain


// // Splice allows you to add list of items or item to an array
// let sm=['Whatsapp','facebook', 'instagram', 'messanger']
// // 1 is the position where you want the addition to start and the 0 is the number of items yoy want to remove. check second example for more clarity
// sm.splice(1,0, 'Tikto', 'Snapchat', 'Linkedin' , 'Quora')
// document.getElementById('law').innerHTML=sm;

// // let sim=['Whatsapp','facebook', 'instagram', 'messanger'];
// // sim.splice(1,2, 'Reddit', 'Quora', 'Twitter')
// // document.getElementById('law').innerHTML=sim;

// let sam=['me', 'you', 'them']
// sam.splice(1,1)
// console.log(sam)

// // slice
// var fruits=['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// var citrus=fruits.slice(1,3)
// console.log(citrus)




// let party_invitees=['dele', 'kunle', 'rowland', 'isaac', 'tumininu', 'david', 'dumoye', 'ariyo']
// let guest=prompt('Enter your name')
// let firstChar=guest.slice(0,1)
// let upperCaseFirstChar=firstChar.toUpperCase()
// let restOfName=guest.slice(1,guest.length)
// let lowerCaseRemChar=restOfName.toLowerCase()
// let fullName=upperCaseFirstChar+lowerCaseRemChar
// if(party_invitees.includes(fullName)){
//     document.getElementById('law').innerHTML='You are welcome to the party '+ fullName
// }
// else{
//     document.getElementById('law').innerHTML='Sorry! '+ fullName+ ', you are not invited here'
// }

// Specifying index
// let stude=['Oladunmoye Adeniyi', 'Akerele Tomiwa', 'Muyiwa Oluwole', 'Tony Elumelu','Shuaib David']
// // stude[1='Warila']
// console.log(stude)

// console.log(stude.sort())

// // sorting numbers
// var points=[40, 100, 1, 5, 25, 10]
// points.sort(function(a, b){return b-a})
// console.log(points)


// var pointer=[40, 100, 1, 5, 25, 10]
// pointer.sort(function(a, b){return a-b})
// console.log(pointer)

// // reverse
// let browsers=['Explorer', 'Chrome', 'Firefox', 'Microsoft edge', 'Pheonix', 'Opera', 'UC']
// browsers.reverse()
// console.log(browsers)

// splitting
// let str='Please get out you idiot'
// let mystr=str.split(' ')
// console.log(mystr)
// document.getElementById('law').innerHTML=mystr


// // function
// function practice(){
//     alert('Hello World')
// }
// practice()

// // Global scope
// // userName here is a global variable
// let userName= 'Sam';
// function showMessage(){
//     let message='Hello '+ userName
//     document.getElementById('law').innerHTML=message
// }
// showMessage()



// Local Scope
// userName here is a local variable

// function showMessage(){
//     let userName= 'Sam';
//     let message='Hello '+ userName
//     document.getElementById('law').innerHTML=message
// }
// showMessage()

// const lasop = () =>{
//     let mess='Lagos School of Programming'
//     document.getElementById('law').innerHTML='I love '+ mess
// }
// lasop()

// const myintro = () =>{
//     let name='My name is Johnbull Odion'
//     let work='I am a programmer and I code with JavaScprit'
//     document.getElementById('law').innerHTML=name +'. '+work
// }
// myintro()


// // Returning a function
// function ret (){
//     let userName= 'Sam';
//     let message= `Hello ${userName}`
//     return message
// }
// document.getElementById('law').innerHTML=ret()


// // Passing parameters into a function
// function number(nos){
//     return(nos*nos)
// }
// document.getElementById('law').innerHTML=number(5)

// function areaRectangle (l,b){
//     return(l*b);
// }
// document.getElementById('law').innerHTML=areaRectangle(6,9)



// a=prompt('Enter the value of a')
// b=prompt('Enter the value of b')
// c=prompt('Enter the value of c')
// let discriminant=b*b-4*a*c
// let quad= function(a,b,c){
//     root1=(- b + Math.sqrt(discriminant))/(2*a)
//     root2=(- b - Math.sqrt(discriminant))/(2*a)
//     result=[root1, root2]
//     return result

// }
// document.getElementById('law').innerHTML=quad(a,b,c)

// a=prompt('Enter the value of a')
// b=prompt('Enter the value of b')
// c=prompt('Enter the value of c')
// let discriminant=b*b-4*a*c
// let quad= function(a,b,c){
//     root1=(- b + Math.sqrt(discriminant))/(2*a)
//     root2=(- b - Math.sqrt(discriminant))/(2*a)
//     result=[root1, root2]
  
//     document.getElementById('law').innerHTML=result
// }
// quad(a,b,c)


// // Creating our own object
// function person(name,age){ //constructive function
//     this.name=name;
//     this.age=age;
// }
// let david=new person('Boma Akpore', 36)
// let tega=new person('Tega Dominic', 26)
// let bbNaija=david.name + ' of age ' + david.age + 'messes up with married '+ tega.name + ' of age '+ tega.age+ ' in the Big brother house'
// document.getElementById('law').innerHTML=bbNaija



// Objective initializers

let bucky={name: 'Bucky Roberts', age:30};
let taylor={name: 'Taylor Swift', age:20}

let bond=`${bucky.name} loves ${taylor.name} because she is ${taylor.age} years old`
document.getElementById('law').innerHTML=bond


// Event Handlers
// Onclick
// OnmouseOut
// onmouseover
// onload
// unonload

function tomiwa(){
    document.getElementById('btn').value ='you just clicked me'
}

function fun(){
    alert('Welcome to Lasop.net')
}

function fun1(){
    document.getElementById('law').innerHTML='This is second function';
}
function fun2(){
    document.getElementById('fagba').innerHTML='This is third function';
}

// var mybtn= document.getElementById('but');
// mybtn.addEventListener('click', fun)
// mybtn.addEventListener('click', fun1)
// mybtn.addEventListener('click', fun2)


// create a GamepadButton, when mouse hover, change height to 60px, background to  yellow and font to blue, on click it should say 'why you clicking me' on removal it should go back to its original ResizeObserverSize.

// function work(){
//     btn.style.background='Yellow'
//     btn.style.height='50px'
//     btn.style.width='50px'
//     btn.style.color='blue'
    
// }
// function work1(){
//     document.getElementById('fagba').innerHTML='why are you touching me';
    
// }
// function work2(){
//     btn.style.background=''
//     btn.style.height=''
//     btn.style.width=''
//     btn.style.color=''
    
// }
// var mybit= document.getElementById('bit');
// mybit.addEventListener('mouseover', work)
// mybit.addEventListener('click', work1)
// mybit.addEventListener('mouseout', work2)


// setTimeout(fun3, 5000);

// function fun3(){
//     document.getElementById('fagba').innerHTML='Welcome to Lasop dot net';
// }


// // Keyup and Keydown

// document.getElementById('number').addEventListener('keydown', mymethod);
// function mymethod(){
//     var number = document.getElementById('number');
//     number.value= number.value+'*';
// }


// Map
// Random
// addclass, removeclass, and toggleclass
// class
// js filter
// loop
// for
// while
// Do while
// For each
// Application
// Web Behaviors
// Api
// DOM
// Version control:Git


// Map

const numbers=[65,44,12,4]
const newArr=numbers.map(devWarila)
document.getElementById('latest').innerHTML=newArr

function devWarila(num){
    return num*10
}


const persons=[
    {firstName: 'John', lastName: 'Doe'},
    {firstName: ' Peter', lastName: 'Piper'},
    {firstName: ' Angela', lastName: 'Okorie'},
    {firstName: ' Stefan', lastName: 'Boltzman'},
]
document.getElementById('ariyo').innerHTML=persons.map(person)


function person(name){
    return [name.firstName , name.lastName].join(' ')
   
}


// Random Number
// document.getElementById('pro').innerHTML=Math.random()//it gives numbers between 0 to 1 but 1 exclusive

// document.getElementById ('prog').innerHTML=Math.floor(Math.random()*10)+1

// const min=parseInt(prompt('Enter a min value: '))
// const max=parseInt(prompt('Enter a max value: '))

// const randint=Math.floor(Math.random()* (max - min + 1)) + min
// document.getElementById ('prog').innerHTML=randint

// function getRandomNumber(min,max){
//     return Math.floor(Math.random() * (max - min)) + min
// }

// Js addClass
function addClassDemo(){
    var element=
    document.getElementById('name')
    element.classList.add('mystyle')
}

function removeClassDemo(){
    var element=
    document.getElementById('name')
    element.classList.remove('mystyle')
}

function toggleClassDemo(){
    var element=
    document.getElementById('name')
    element.classList.toggle('mystyle')
}

// Js classes
// class Perso{
//     constructor(name,year){
//         this.name=name
//         this.year=year
//     }

//     age(){
//         let date=new Date()
//         return date.getFullYear() - this.year
//     }
// }
// let myPerso=new Perso ('Warila',1979)
// document.getElementById('las').innerHTML='My name is ' + myPerso.name + ', and I am ' + myPerso.age() + ' years old'

class Perso{
    constructor(name,year){
        this.name=name
        this.year=year
    }

    age(x){
        let date=new Date()
        return date.getFullYear() - this.year
    }
}
let myPerso=new Perso ('Warila',1979)
document.getElementById('las').innerHTML='My name is ' + myPerso.name + ', and I am ' + myPerso.age() + ' years old'


// Filter 
const ages=[17,15,56,76,90,65]
function ageCheck(age){
    return age>
    document.getElementById('checkage').value
}
function ageFilter(){
    document.getElementById('lat').innerHTML=ages.filter(ageCheck)
}


// For loop
for (let i=0; i< 10; i++){
    console.log(i);
}

// let mum= prompt('How many times did I asked you to clean your room')
// for (i=0; i<mum; i++){
//     console.log(i +' clean up your room');
// }
// let mum= prompt('How many times did I asked you to clean your room')
// for (i=mum; i>0; i--){
//     console.log(i +' clean up your room');
// }

// for loop in Array
// this array has 3 indexedDB(starting from 0 to 3) and 4 length (i.e the number of element in it)
// const shinobis = ['Sasuke', 'Minato', 'Itachi', 'Kakashi']
// for (i=0; i<shinobis.length; i++){
//     console.log(shinobis [i])
// }

const fizzbuzz = () =>{
for (i=0; i<=100; i++){
    if(i % 3==0 && i % 5==0){

        console.log('fizz buzz')
    }
    else if(i % 3==0){
        console.log('fizz')
    }
    else if(i % 5==0){
        console.log('Buzz')
    }
    else{
        console.log(i)
    }
}
}

fizzbuzz()

// While loop
i=0
while(i<10){
    console.log(i)
    i++
}
i=10
while(i>0){
    console.log(i)
    i--
}

const fizzbuzzwhile = () =>{
    val=1
    while(val<=100){
        if(i % 3==0 && i % 5==0){

            console.log('fizz buzz')
        }
        else if(i % 3==0){
            console.log('fizz')
        }
        else if(i % 5==0){
            console.log('Buzz')
        }
        else{
            console.log(i)
        }
        val++
    }
 
}

fizzbuzzwhile()

// Do while loop
b=2;
do{
    console.log(b)
    b++
}while (b<10)


// let num=prompt('Enter your number');
// n=0
// const testnum = () =>{
//     for (i=2; i<=100; i++)
//      if(num % i ===0){
//      n=n+1;
//         if(n>2){
//             console.log(num +' is not a prime number')
//         }
//         else{
//             console.log(num +' is a prime number')
//         }
//     }
//     else{
//         console.log( num +' is out of range')
//     }

// }
// testnum()

// Algorithm
let k=parseInt(prompt('Enter an integer'));
function checkForPrimeNumber(k){
    if (k<=100){
        if (k===1){
            return(k + ' is not a prime number')
        }
        else if(k===2){
            return(k + ' is a prime number')
        }
        else{
            // for (let m=2; m++)
            let m=2;
            while(m<k){
                if(k%m===0){
                    return(k +' is not a prime number');
                }
                m++
            }
            return(k +' is a prime number');
        }

    }
    else{
        return(k +' is too large')
    }

}
console.log(checkForPrimeNumber(k))


//forEach loop

// const girls=['Tumininu', 'Joy', 'Linda', 'Mary', 'Peace', 'Tobi', 'Eniola']
// girls.forEach(function(girl){
//     console.log(girl)
// })

const girls=['Tumininu', 'Joy', 'Linda', 'Mary', 'Peace', 'Tobi', 'Eniola']
girls.forEach(function(girl, index, Array){
    console.log(`${index}: ${girl}`)
    console.log(Array)
})

// map loop
// const girls=['Tumininu', 'Joy', 'Linda', 'Mary', 'Peace', 'Tobi', 'Eniola']
// const namesOfGirls=girls.map(mapFunction)
// console.log=namesOfGirls

// function mapFunction(girl){
// return girl
// }


// forin
var user={
    firstName:'Kunle',
    lastName:'Adeleke',
    age: 21
}
for(let x in user){
    console.log(x)  //this will have only the key
}

// to get the key
for (let u in user){
    console.log(`${u}: ${user[u]}`)
}
