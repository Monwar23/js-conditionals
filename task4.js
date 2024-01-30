let MyScore=52;
let FriendScore=50;

if(MyScore>=80){
    if(FriendScore>=80){
        console.log('Go for a launce');
    }

    if(FriendScore<80 && FriendScore>=60){
        console.log('Good luck next time');
    }

    if(FriendScore<60 && FriendScore>=40){
        console.log('Unseen ');
    }

    if(FriendScore<40){
        console.log('You are block');
    }
}
else{
    console.log('Go to home & Sleep & act sad');
}