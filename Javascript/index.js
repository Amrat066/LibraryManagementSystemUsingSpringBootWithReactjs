//functions in js


//function parameter
function calcAddition(number1, number2) { 
    return number1 + number2; 
}
console.log(calcAddition(6,9));




//function expression
const square = function (number) {
	return number * number;
};
const x = square(4); 
console.log(x);



const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const d=a.map((E)=>{
	console.log(E.length);
})




//first class function

//simple calling function
const data=()=>{

	console.log("hii");
}
data();

//how functions treates as an object
data.lang="english";
console.log(data.lang);


const res=(x)=>{
	
	return x*x;

}
let da=res(5);
console.log(da);


function formalgreeting(){
	console.log("this is formal greeting");
}
function causalgreeting() {

	console.log("this is casualgreeting");
  }

  
function hello(type,formal,casual){

	if(type==='')
		casual();
	else
		formal();


}

hello('casual',formalgreeting,causalgreeting);


//higher order function


		//-without higher order

		let arr1=[1,2,3,4,5]
		let arr2=[];

		// arr1.forEach((item)=>{
		// 	arr2.push(item*3);
		// })
		// console.log(arr2)

		for(let i=0;i<arr1.length;i++){
			arr2.push(arr1[i]*2);
		}
		console.log(arr2)

		//-with higher order function


		let arr=[3,4,5,6,7];
		let m=arr.map((item)=>{
			return item*2;
		})
		console.log(m)


		//Map without the higher order function

		const birthYear = [1975, 1997, 2002, 1995, 1985];
		let age=[];

		for(let i=0;i<birthYear.length;i++){
			let ages=2018-birthYear[i];
			age.push(ages);
		}
		console.log(age)


		//Map with higher order functions
		//Map is used to take value from the callback functions  and create the new array from that values



		const birth = [1975, 1997, 2002, 1995, 1985];
		const ag=birth.map((item)=>2018-item);
		console.log(ag);


		//filter function without higher order function
		const person=[
			{id:1,name:"amrat",age:20},
			{id:2,name:"satish",age:22},
			{id:3,name:"mukesh",age:18},
			{id:4,name:"hitesh",age:20}
		]
		const perArr=[];
		for(let i=0;i<person.length;i++){
			if(person[i].age>18){
				perArr.push(person[i])
			}
		}
		console.log(perArr);


		//filter with highr order functions
		//filter is used to take value from the callback functions and perform conditions  and create the new array from that values


		const Personn=[
			{id:1,name:"amrat",age:20},
			{id:2,name:"satish",age:22},
			{id:3,name:"mukesh",age:18},
			{id:4,name:"hitesh",age:20}
		]

		const per=Personn.filter((item)=>item.age>18)
		console.log(per)

		const personn=[
			{id:1,name:"amrat",age:20},
			{id:2,name:"satish",age:22},
			{id:3,name:"mukesh",age:18},
			{id:4,name:"hitesh",age:20}
		]

		const p=personn.filter((item)=>item.age>18)
		console.log(p);



		//reduce functions without initial values

		const array = [5, 7, 1, 8, 4];
		const dd=array.reduce((accumulator,currentvalue)=>{
			return accumulator+currentvalue
		});
		console.log(dd);


		//with initial value

		const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
		function mapforeach(strArray,fun){
			const ar1=[];
			for(let i=0;i<strArray.length;i++){
				ar1.push(fun(strArray[i]))
			}
			console.log(ar1)
		}

		const r1=mapforeach(strArray,function (item) {
			return item.length;
		  })

		  //Array Methods
		  //push
		  //pop
		  //concat
		  //shift
		  //unshift
		  //slice
		  //some
		  //every
		  //fill
		  //join
		  //includes
		  //findindex
		  //find
		  //indexof
		  //flat
		  //flatmap
		  
		  const jp=[1,2,3,4,5];
		 const kk=[5,6,7,8]
		 console.log(jp.flat(kk))


		 console.log(jp.fill(0))

		 console.log(jp.fill("Abc",1,5))




		const u=person.find((student)=>{
			return student.name==="mukesh";
		}).age
		console.log(u)


		let staff = [
			{ name: "John Doe", salary: 120 },
			{ name: "Jane Doe", salary: 350 },
			{ name: "Karl Don", salary: 710 }
		];

		const sal=staff.reduce((total,personstaff)=>{
				return total+=personstaff.salary
		},0)
		console.log(sal);


		//Destructor in js

		//Array destructing
		const organizations = ['Pyke', 'Black Sun', 'Kanjiklub', 'Crimson Dawn'];
		const [value1,value2, ...rest]=organizations;
		console.log(value1)
		console.log(value2)
		console.log(rest)

		//Object destructing

		const obj={
			name:"amrat",
			add:"surat"
		}


		const {name,add}=obj;
		console.log(name)




		//spread and rest operatore
		
		
		//spread:= it allow you to expand an iterable object such as an array string or object into individual elements

		//the spread operator is commonly used in function calls,array literals,and object literals


		//1. Array concatination
		const arr3=[1,2,3,4];
		const arr4=[5,6,7];

		const concat=[...arr3,...arr4];
		console.log(concat);

		//2.Array copy

		const orginal=[1,2,3];
		const uu=[...orginal];
		console.log(uu);

		//3.object copy

		const obj1={
			id:"101",
			name:"amrat"
		}
		const copyobj={...obj1};
		console.log(copyobj);

		//4.merging objet

		const obj2={
			address:"surat",
			pincode:"1011"
		}

		const mergobj={...obj1,...obj2}
		console.log(mergobj)
		

		//5.functional argument

		function addnumber(a,b,c){
			return a+b+c;
		}
		const numbers=[1,2,3];
		const sum=addnumber(...numbers);
		console.log(sum);



		//The rest parameter syntax allows a function to accept 
		//an indefinite number of arguments as an array



		function summ(...number){
			let total=0;
			number.map((item)=>{
				 total+=item;
			})
			return total
			
		}

		const ff=summ(1,2,3,4,5,6);
		console.log(ff);


		function myFun(a, b, ...manyMoreArgs) {
			console.log("a", a);
			console.log("b", b);
			console.log("manyMoreArgs", manyMoreArgs);
		  }
		  
		  myFun("one", "two", "three", "four", "five", "six");


		  //Swithcase syntax

		  let fruitType="Bananas"
		  switch (fruitType) {
			case "Oranges":
			  console.log("Oranges are $0.59 a pound.");
			  break;
			case "Apples":
			  console.log("Apples are $0.32 a pound.");
			  break;
			case "Bananas":
			  console.log("Bananas are $0.48 a pound.");
			  break;
			case "Cherries":
			  console.log("Cherries are $3.00 a pound.");
			  break;
			case "Mangoes":
			  console.log("Mangoes are $0.56 a pound.");
			  break;
			case "Papayas":
			  console.log("Mangoes and papayas are $2.79 a pound.");
			  break;
			default:
			  console.log(`Sorry, we are out of ${fruitType}.`);
		  }


		  //fetch the data throught the AJAX
	// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	// const requestURL='https://jsonplaceholder.typicode.com/posts/10'
	// const xhrr= new XMLHttpRequest();
	// xhrr.open('GET',requestURL)
	// xhrr.onreadystatechange=function(){
	// 	console.log(xhrr.readyState);
	// 	if(xhrr.readyState===4){
	// 		const data=JSON.parse(this.responseText)
	// 		console.log(data);
	// 	}
	// }
	// xhrr.send(); 


			//post the data using the ajax
// const requestURLL = 'https://jsonplaceholder.typicode.com/posts'; 
// const xhr= new XMLHttpRequest();
// xhr.open('POST', requestURLL);
// xhr.setRequestHeader('Content-Type', 'application/json'); 
// const postData = JSON.stringify({
//   title: 'Static Data Title',
//   body: 'This is some static data that we are posting.',
//   userId: 1 
// });

// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const responseData = JSON.parse(this.responseText);
//     console.log(responseData);
//   }
// }

// xhr.send(postData);


		  	//delete the data using the ajax
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const requestURL = 'https://jsonplaceholder.typicode.com/posts/1'; // Example endpoint for deleting data
// const xhr = new XMLHttpRequest();
// xhr.open('DELETE', requestURL);
// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     console.log('Data deleted successfully.');
//   }
// }
// xhr.send();


		  //update the data using the ajax
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const requestURL = 'https://jsonplaceholder.typicode.com/posts/10'; 
// const xhr = new XMLHttpRequest();
// xhr.open('PUT', requestURL); 
// xhr.setRequestHeader('Content-Type', 'application/json'); 
// const updatedData = JSON.stringify({
//   title: 'my name is amrat prajapati',
//   body: 'This is the updated content of the post.',
//   userId: 10
// });
// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const responseData = JSON.parse(this.responseText);
//     console.log(responseData);
//   }
// }
// xhr.send(updatedData);

