// async function fetchUsers() {
//     try{
//         const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const users = await resp.json();
//         console.log(users);

//     }catch(err){
//         console.log(err)

//     }
   
// }
// fetchUsers();




// const message=function(){

//     console.log("message call after 3 second");
// }

// setTimeout(message,3000);

function result(x,y,callback){
    console.log(x+y);
    callback();
}

function show(){
    console.log("this is the callback funcitons");

}

result(3,4,show);


function showData(name, amt) {  
   console.log(' Hello ' + name + '\n Your entered amount is ' + amt);  
    }  
      
    function getData(callback) {  
    var name = "amrat";  
    var amt = 3000;
    console.log("jell");

    callback(name, amt);  
    }  
  
getData(showData);



