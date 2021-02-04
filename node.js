// צרו פונקציה שמקבלת מספרים מהמשתמש עד שהוא מכניס את הספרה 0 ואז הפונקציה מדפיסה את המספר הגדול ואת הקטן 
// function task1() {
//     var min = Number.MAX_SAFE_INTEGER;
//     var max = Number.MIN_SAFE_INTEGER;
//     var x = Number.MAX_SAFE_INTEGER

//     for (var i = 0; i < x; i++) {
//         var user = +prompt('please enter a number')

//         if (user > max) {
//             max = user
//             if (user == 0) {
//                 break;
//             }
//         }

//             if (user < min){
//                 min=user
//             if (user==0){
//                 break;
//             }
//             }


//     }


//     console.log(max,'this is the max')
//     console.log(min,' this is the min')
// }

// task1()

// function tas1() {
//     var min1 = Number.MAX_SAFE_INTEGER
//     var max1 = Number.MIN_SAFE_INTEGER
//     while (user1 != 0) {
//         var user1 = +prompt('please enter a number')
//         if (user1 > max1) {
//             max1 = user1
//         }
//         else if (user1 < min1) {
//             min1 = user1
//         }

//     }
//     console.log(min1, 'this is the minimum')
//     console.log(max1, 'this is the maximum')



// }

// tas1()




// צרו פונקציה שמקבלת 10 מספרים מהמשתמש המספרים נכנסים לתוך מערך שמודפס למסך הפונקציה מחזירה בסוף מערך של מספרים זוגיים בלבד

// function task2() {
//     var myArray = []
//     var newa = []
//     for (var i = 0; i < 10; i++) {
//         var user24 = +prompt('please enter a number for the array')
//         myArray.push(user24)
//     }
//     // console.log(myArray);
//     for (var j = 0; j < 10; j++) {
//         if (myArray[j] % 2 == 0) {
//             newa.push(myArray[j])
//         }
//     }
//     console.log(newa)
// }
// task2()


//3.	צרו פונקציה שמקבלת מספר מהמשתמש, הפונקציה יוצרת למערך של 100 מספרים רנדומליים ובודקת האם המספר קיים במערך, במידה וכן יש להדפיס למסך הודעת הצלחה והודעת כישלון במידה ולא. יש להדפיס הודעה מתאימה אם המספר דל המשתמש חורג ממגודל המותר.

// function task3 (){
//     var user3= +prompt ('please enter a number')
//     var newArrye=[];

    // for (var i = 0; i < 100; i++) {
    //     var random1= Math.floor(Math.random()*100);
    //     newArrye[i]=random1;

//     }
//     for (let j = 0; j < 100; j++) {
//         if (user3==newArrye[j]) {
//         document.writeln('congrats you did it')
//     }
//     else if (user3 !=newArrye[j]) {
//         document.writeln('you faild')
//     }


//     }

//     console.log(newArrye);
// }
// task3()



// task4
// function task4(){
//  var fname= prompt('please enter your fitst name in english')
//  var myArray=[]
//  myArray[0]=fname
//  if (fname[0]=='Z' ) {
//      console.log ('nice')
//  }
//  else if (fname=='A') {
//      console.log('good')
//  }
//  else{
//      console.log (fname)
//  }
// }
// task4()



// task5
// function task5() {
//     for (let i = 0; i < 100; i++) {
//         var fizz = i * 3

//         var buzz = i * 5
//         document.writeln('<br/>')
//         document.writeln(buzz, '-----------------------', fizz)

//     }

// for (let i = 0; i < 100; i++) {
//     var buzzfizz = [i * 5, i * 3]
//     document.writeln('<br/>')
//     document.writeln(buzzfizz)
// }


// }
// task5()


// task6
function task6() {
    var myArray = []
    var newArray1 = []
    var name = prompt('what is your name')
    for (let i = 0; i < 10; i++) {
        var guessN = +prompt('hi ' + name + ' please take a guess')
        myArray[i] = guessN

        if (guessN < 0) {
            alert('enter a number smaller the 50 and larger then 0 start frm the begining')
            break;
        }
        else if (guessN > 50) {
            alert('this is to high try agian from the start')
            break;
        }


    }
    for (let j = 0; j < 50; j++) {
        var random12 = Math.floor(Math.random()*50)
        newArray1[j] = random12
    }


    console.log(newArray1)
    console.log(myArray);
}
task6()



 // for (let j = 0; j < 10; j++) {
        //     if (myArray[j]=myArray) {
        //         alert('the is wrong')
        //         break
        //     }

        //}