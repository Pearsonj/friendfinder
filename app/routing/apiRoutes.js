let path = require("path");
console.log("apiRoutes");
let friendData = require("./../data/friends.js");


module.exports = function(app){
    app.post("/api/findBestFriend", function (req, res) {
        var user = req.body;
        console.log(user);

        let bestFriend = {};
        let bestFriendDiff = 100000;
        
        for (let i = 0; i < friendData.arrfriends.length; i++) {
            let diff = 0;
            for (let j = 0; j < friendData.arrfriends[i].quizAns.length; j++) {
                    let first = parseInt(user.quizAns[j], 10);
                    let second = friendData.arrfriends[i].quizAns[j];
                    diff += Math.abs(first - second);
           }
           if(diff < bestFriendDiff){
               bestFriendDiff = diff;
               bestFriend = friendData.arrfriends[i];
           }
        }
        res.send({bestFriend: bestFriend});
    





    
    // function compare(user) {

    //     let friendData = require("./../data/friends.js");
        
    //     console.log(friendData.arrfriends[0]);
    //     console.log(friendData.arrfriends[1]);
    //     console.log(friendData.arrfriends[2]);
    
    //     function getSum(total, num) {
    //         return total + num;
    //     }
    
    //     let newArr = [];
    //     let diffArr = [];
    //     let diffArr1 = [];
    //     let diffArr2 = [];
    //     let diffTotals = [];
    
    //     //turns users array into an array of integers
    //     for (var i = 0; i < user.quizAns.length; i++) {
    //         let int = user.quizAns[i] = parseInt(user.quizAns[i]);
    //         newArr.push(int);
    //     }
    
    //     for (let i = 0; i < 10; i++) {
    //         let first = newArr[i];
    //         let second = friendData.arrfriends[0].quizAns[i];
    //         let diff = Math.abs(first - second);
    //         diffArr.push(diff);
    //     }
    //     console.log('absolute diff Array')
    //     console.log(diffArr)
    //     console.log("---------------")
    //     var total = diffArr.reduce(getSum);
    //     diffTotals.push(total);
    
    
    //     for (let i = 0; i < 10; i++) {
    //         let first = newArr[i];
    //         let second = friendData.arrfriends[1].quizAns[i];
    //         let diff = Math.abs(first - second);
    //         diffArr1.push(diff);
    //     }
    //     console.log('absolute diff Array')
    //     console.log(diffArr1)
    //     console.log("---------------")
    //     var total1 = diffArr1.reduce(getSum);
    //     diffTotals.push(total1);
    
    //     for (let i = 0; i < 10; i++) {
    //         let first = newArr[i];
    //         let second = friendData.arrfriends[1].quizAns[i];
    //         let diff = Math.abs(first - second);
    //         diffArr2.push(diff);
    
    //     }
    //     console.log('absolute diff Array')
    //     console.log(diffArr2)
    //     console.log("---------------")
    //     var total2 = diffArr2.reduce(getSum);
    //     diffTotals.push(total2);
    //     console.log(diffTotals.sort(function (a, b) {
    //         return a - b
    //     }));
    //     boolean = true;
    
    //     if (boolean === true) {
    //         console.log("best friend: " + diffTotals[0]);
    //     }
    //     res.send({bestFriend: diffTotals[0]});
    // }
    
    // compare(user);
    });

}





// module.exports = compare;

// module.exports = {
//     compare:compare,
//     }


// exp = require('./pathToFile')

// exp.other(args)