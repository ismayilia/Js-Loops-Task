"use strict";

// function showNums(num){
//     for (let i = 0; i < num; i++) {

//         console.log(i);
//     }
// }

// showNums(5);

// function showNums(num){
//    let number = num - 1

//    console.log(num);

//    showNums(5);
// }

// showNums(5);

// function showNums(num){
//     let number = num-1;
//     console.log(num);

//     if (number>0) {
//         showNums(number);
//     }
// }

// showNums(5);

// function sumOfNums(m){
//     let sum =0 ;
//     for (let i = 0; i <=m; i++) {
//         sum+=i;

//     }
//     console.log(sum);
// }

// sumOfNums(4);


//rekursiv yazilish

// function sumOfNums(m) {
//     let functionRes;

//     if (m == 0) {
//         return m;
//     }
//     else {
//         functionRes = sumOfNums(m - 1);
//         return m + functionRes;
//     }
// }

// console.log(sumOfNums(4));





// function sumOfNums(m) {
//     if (m == 0) {
//         return m;
//     }
//     else {
//         return m + sumOfNums(m - 1);
//     }
// }

// console.log(sumOfNums(4));


//factorial


// let num = 5 + test(2,4);

// function test(a,b){
//     return a+b;
// }




// let num = 5 + test(2,4);

// function test(a,b){
//     return a+b + test2();
// }

// function test2(){
//     return 50;
// }





// function sumOfNums(m) {
//     if (m == 1) {
//         return m;
//     }
//     else {
//         return m * sumOfNums(m - 1);
//     }
// }

// console.log(sumOfNums(4));



//loops

//forof

// let names = ["Fidan", "Kubra", "Cahangir", "Ismayil"];

// for (const item of names) {
//     console.log(item);
// }


    // let student = {
    //     name: "Xeyyam",
    //     surname: "Isgenderov",
    //     age: 29,
    //     address:"address",
    // }

    // for (const key in student) {
    //     console.log(key + " " + student[key]);
    // }


    let student = {
        name: "Xeyyam",
        surname: "Isgenderov",
        age: 29
    }

    for (const key in student) {
        if (student[key] == "address") {
            console.log("yes");
            
        }
        
        else{
            console.log("no"); // 3 defe no verir key-leri bir bir yoxlayir
            
        }
        
    }




    
    // let student = {
    //     name: "Xeyyam",
    //     surname: "Isgenderov",
    //     age: 29,
    //     address: "Yasamal"
    // }

    // for (const key in student) {
    //     if (key == "age") {
    //         console.log("yes");
    //     }
        
    // }


    let stu1 = {
        name: "Xeyyam",
        age: 29
        
    }

    let stu2 = {
        name: "Pervin",
        age: 30
        
    }

    let stu3 = {
        name: "Fidan",
        age: 22
        
    }

    let stu4 = {
        name: "Kubra",
        age: 25
        
    }

    let stu5 = {
        name: "Surac",
        age: 23,
        
    }

    let students = [stu1, stu2, stu3, stu4, stu5];

    //forof-nan bir bir gotur, sonra forin-ile key value-lerin gosterek

    // for (const student of students) {
    //     // console.log(student);// objectleri verir {}-nen

    //     for (const key in student) {
    //         console.log(key + "--" + student[key]);
                
            
    //     }
    // }

    // for (const student of students) {
    //     // console.log(student);// objectleri verir {}-nen

    //     if (student.name == "Xeyyam") {
    //         for (const key in student) {
    //             console.log(key + "--" + student[key]);
                    
                
    //         }
    //         break;
    //     }
    // }

    // for (const student of students) {
    //     // console.log(student);// objectleri verir {}-nen

    //     if (student.age > 25) {
    //         for (const key in student) {
    //             console.log(key + "--" + student[key]);
                    
                
    //         }
            
    //     }
    // }

    



    