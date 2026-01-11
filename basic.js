// function checkvote(age,isvotercardexist,isadharcardexist){
//     if (age>18 && isvotercardexist || isadharcardexist){
//         console.log("you are eligible");
//     }
//     else{
//         console.log("you are not eligible");
//     }
// }
// checkvote(18,true,false)
// function checkvote(age,isvotercardexist,isadharcardexist){
//     if (age>=18){
//         if(isvotercardexist || isadharcardexist){
//         if(isvotercardexist){
//             console.log("u are eligible becasue u are above 18 and have voter card")
//         }
//         else if (isadharcardexist){
//             console.log("u are eligible becasue u have adhar card and above 18");
//         }
//     }
//     else{
//         console.log("u dont have identity card");
//     }
// }else{
//     console.log("u are not eligible");
// }
// }
    // checkvote(18,true)  
// let a =10
//  a +=2
//  console.log(a)
// let a = 10
// console.log(a++ + a++)

// check wheter the number is leap year or not?

// function isLeapYear(year) {
//     if (year%4==0){
//         return "Leap Year";
//     } else {
//         return "Not a Leap Year";
//     }
// }

// year = 2024;
// console.log(isLeapYear(year));
//  question finish


// function checkeligibility(loanandcreditcard){
//     if (account>=10 && kyc==true || age==10){
//         return "then it is eligible for both credit card and loan";
//     } if (account>=7 && kyc==true || age==10 ){
//         return "the it is eligible for loan";
//     } if (account>=5 && kyc==true || age==10){
//         return "then it is eligible for loan";
//     } else{
//         return "else not eligible"
//     }

//}




// introduction of array 
// array is a collection multiple Elementof different data type 
//  let tablenum = 2
//    let i =1
//  while(i<=10){
//     console.log("tablenum"+'x'+i+'='+tablenum*i);
//     i++
//  }
//  question end 



// let i = 0
// while (i < 100) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// }
// num = 5
// i = 2
// while(i<0){
//     if(num%i!==0){
//         this is prime
//     }else{
//         this is not prime
//     }
// }
// function fact(num){
//     if (num==0){
//         console.log("no factorial");
//         return 1
//     }
//     let prod = 1;
//     while(num>1){
//         prod*= num;
//         num--
//     }
//     console.log(prod);
//      return prod
// }
// fact(s)

// count digit 
// function countdigit(num){
//     let count =0
//     while(num>0){
//         count++
//         num= Math.floor(num/10);
//     }
//     console.log(count,"ffff");
//     return count;
// }
// countdigit(10)
// // end 
// let n = 11;
// while(n<10){
//     console.log("hello");
//     n++;
// }

// do{
//     console.log("hello world tyhis is do while loop");
//     n++; 
// }
// while(n<10)
  


// function checknumner(num){
//     do{
//         console.log("1,2,3,4,5");
//         n++;
//     }
// }
// while(n<5)




// for (let i =0; i<10;i++){
//     console.log(i); 
// }

// function sumnumber(num){
//     let sum = 0;
//     do {
//         sum+=num;
//         num--;
//     }

// }



// function evenno(num){
//    for (let i =0;i<=num;i++){
//         if(i%2==0){
//             console.log("this is even",i);
            
//         }

//     }
// }
// evenno(8)

 


// function sumevenno(num){
//     let sum = 0
//     for (let i =0;i<=num;i++){
//         if(i%2==0){
//             console.log("this is a even",i);
//             sum+=i
            
//         }
//     }
//     console.log(sum);
// }
// sumevenno(10)




// // start 

// function sumnumber(num){
//     let sum = 0
//     while(num>0){
//         sum += num%10;
//         num= Math.floor(num/10)

//     }
//     console.log(sum);
    
// }
// sumnumber(11)
// // end 


// function fibnumber(num){
//     let sum = 0
//     for(let i =0 ; i<=num ; i++){
        
//     }
// }
// function armstrong(num){
//     for (let i = 0; i<=num;i++);
//     console.log();
    
// }

// quewstion start 
// function weekday(num){
//     if (num==1){
//         console.log("monaday");  
//     }
//     else if (num==2){
//         console.log("tuesday");  
//     }
//     else if (num==3){
//         console.log("wednesday");
//     }
//     else if(num==4){
//         console.log("thursday");  
//     }
//     else if(num==5){
//         console.log("friday");
//     }
//     else if (num==6){
//         console.log("saturday");
//     }
//     else {
//         console.log("sunday");
        
//     }
// }
// weekday(2)
// //  question end 


// questio start calculator 
// function calculator(a,b,symbol){
//     switch(symbol){
//         case "+":
//             console.log(a+b);
//         case"-":
//             console.log(a-b);
//         case"*":
//             console.log(a*b);
//         case"/":
//             if (b==0) {
//                 console.log("not divisible");
//                 break;
                
//             }
//             else{
//                 console.log(a/b);
//                 break;
                
//             }
//             default:
//             console.log("wrong number");    

//     }


// }
// calculator(10,0,"/")
    
// end question 


// start question 

// function star(num){
//     for(
//         let i=0;i<num;i++) {
//         console.log("👾");
//     }
    
// }
// star(100)
// end questyion 

// start quetion 
// function star(num){
//     let star= ""
//     for(
//         let i=0;i<num;i++) {
//             for (let j=0;j<num;j++){
//              star+="🦁"
//             }
//             star+="\n"
        
//     }
//     console.log(star);
    
// }star(50)

// // end question 


// let numArr = [10,28,34,41,50];
// // closing an Array;
// let newArr = [...numArr]; spread operator 
// let newarr = Array(numArr);
// let newarr3 = [].concat(numarr) 

//  4/01/26 👾
//  q1 start
// let arr101 = [1,2,3,4,5];
// let newarr1 = []
// for (let i = 0; i<arr101.length;i++){
//     if(arr101[1]<3){
//         newarr1.push(arr101[i])
//     }
// }
//     console.log(newarr1);

// let newarr4 = arr101.filter((val)=>val>3);
// console.log(newarr4);

// question end

// q2 start

// let arr101 = [1,2,3,4,5,6]
// let newarr5 = arr101.filter((val)=>val%2);
// console.log(newarr5);
// end question

// q3 start

// let arr101 = ["banana","apple","grapes"]
// let newarr6 = arr101.filter((val)=>val.length>=5);
// console.log(newarr6);
// question end 

// q4 start
// let arr101 = [1,2,3,4,5,6]
// let newarr7 = arr101.filter((val)=>val%2==0).map((val)=>val*3);
// console.log(newarr7);
// end 


// q4 start
// let arr101 = [1,2,3,4,5,6]
// let accsum = arr101.reduce((acc,val,idx,arr)=>acc+=val,1000)
// console.log(accsum);
// end 


// q5 start
// let x = [1,2,3,4,5]
// let accsum = x.reduce((pre,val,idx)=>pre+=1)
// console.log(accsum);

// let accusum = x.reduce((acc,val)=>{
//     if (acc<val)
//         return acc = val
// }
//         ,x[0])
// end question


// 10/jan/2026

// let strarr = ["banana","apple","aaple","mango","grapes"]
// let numarr1 = [10,2,3,4,5,6,7] 



// subarry/slicing

// let mynewarr1 = [1,3,43,5,6,7,8];
// console.log(
// mynewarr1.slice(0,8))

// let mynewarr2 = [1,3,43,5,6,7,8];
// console.log(
// mynewarr1.slice(0,-1))

// splice

// console.log(mynewarr1.splice(0,2,10,20),"splice",mynewarr1);

// [1,2,3,4,5,6,7,8]-> 1_2_3_4_5_6_7_8
// console.log(mynewarr1.join("_"));

// // condition checking
// console.log(mynewarr1.every((n)=>n%2 ===0));

// console.log(mynewarr1.some((n)=>n%2 ===0));


// let arrflat = [1,[2,3,[4]]];   // => [1,2,3,4]
// console.log(arrflat.flat(2));

// mynewarr1.fill(0)
// console.log(mynewarr1);



// mynewarr1.fill(0,2,3)
// console.log(mynewarr1);


// //copy and merging of n array

// // let a1 = [1,2]
// // let b1 = [3,4]
// // let newc1= a1.concat(b1);
// // console.log(newc1);


// // mynewarr2=[30,33,40,22]

// // console.log(mynewarr2.every((n)=>n>33 ===0));



// // let arr101 = [3,7,12,5,20]
// // console.log(arr101.find((x)=>x>=10));


// //q1
// let dd = [10,5,20,8,20];
// let set = new Set(dd)
// result = [...set].sort((a,b)=>b-a)
// console.log(result[1]);

// //q2
// let d1=[1,2,3,4,5,6]
// let even=d1.filter((x)=>x%2===0)
// console.log(even.length);


// q3
// let d2=[1,2,3,4,5,6]
// let odd=d2.filter((x)=>x%2!==0);
// console.log(odd.reduce((x,y)=>x+y));



//11/jan/2026
//dot notation and bracket notation
// const objc2 = new Object();
// objc2.first ="200"
// console.log(objc2,"ddd");


//accessing values

// console.log(objc2.last);

//add keys
// user2.age= 25

//update values
// user2.name= "raunak"

// delete user2.hobbies

//q1

const objc3 = new Object();
objc3.first = "raunak";
objc3.first1 = "raunak4";
objc3["last name"] = "bamotra"
console.log(objc3,"ddd");



let user3 = {
    name :"raunak",
    city : "new delhi",
    ph : 2342355,
    isinactive : true
}
console.log(user3);


//this refer to the current object in normal function


for(let usr in user3){
    console.log(usr);
}