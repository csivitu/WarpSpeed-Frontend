//objects which we will interact from our eventsheet
var AUTH={
    errcd:"",
    errmsg:"",
    state:"", //specifies whether user is signed in or not
    userEmail:"",
}

var LB={
    score:0,
    s1:0,
    s2:0,
    s3:0,
    s4:0,
    s5:0,
    s6:0,
    s7:0,
    s8:0,
    s9:0,
    s10:0,
    e1:"",
    e2:"",
    e3:"",
    e4:"",
    e5:"",
    e6:"",
    e7:"",
    e8:"",
    e9:"",
    e10:"",
}

//Authentication functions
function SignUp(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
        //Handles errors
        AUTH.errcd=error.code;
        AUTH.errmsg=error.message;
        console.log(AUTH.errcd);
    });
}
function SignIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        //Handles errors
        AUTH.errcd=error.code;
        AUTH.errmsg=error.message;
        console.log(AUTH.errcd)
    });
}
function SignInGoogle(){
    var provider = new firebase.authGoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).catch(function(error){
        //Handles errors
        AUTH.errcd=error.code;
        AUTH.errmsg=error.message;
        console.log(AUTH.errcd)  
    });
}
function SignOut(){
    irebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
        //Handles errors
        AUTH.errcd=error.code;
        AUTH.errmsg=error.message;
        console.log(AUTH.errcd);
    }); 
}


//Getting current user
function CurrentUser(){
    firebase.auth().onAuthStateChanged(function(firebaseUser){
        if(firebaseUser){
            //User is signed in
            AUTH.state="Signed In";
            AUTH.userID= firebase.auth().currentUser.uid;
            AUTH.userEmail= firebase.auth().currentUser.email;
        }
        else
            //User is signed out
            AUTH.state="Signed Out";
            AUTH.userID= "";
            AUTH.userEmail= "";
    }
    console.log(AUTH.state);
    
} //call only once after firebase initilization


//realtime database functions
function SetVal(score){
    var id=AUTH.userID;
    firebase.database().ref('users/'+id).set({
        score: score,
        email: AUTH.userEmail
    })
}
//Read value of 'val' from above function
function ReadVal(){
    var id = AUTH.userID;
    var dbRef = firebase.database().ref('users/'+id+'/score');
    dbRef.on('value', function(snapshot) {
        if(snapshot.exists())
            DB.score=snapshot.val(); //returns false if no such path exists lol
        else
            SetVal(0); //SetVal function called with 0 being the parameter for score
    })  
}

//Leaderboard function
function SetLB(score){
    var id=AUTH.userID;
    firebase.database().ref('leaderboard/'+id).set({
        score: score,
        email: AUTH.userEmail
    })
}

function ReadLB(){
    var i; 
    //data is in ascending order, so we're getting the last 10 values
    var query = firebase.database().ref('leaderboard').orderbyChild('score').limitToLast(10); 
    query.on('value', function(snapshot ){
        i = 0; //on function triggered -> i=0
        var childDataEmail= childSnapshot.child('email').val();
        var childDataScore= childSnapshot.child('score').val();
        switch(i)
        {
            case 0: DB.e10=childDataEmail;
                    DB.s10=childDataScore;
            break;
            case 1: DB.e9=childDataEmail;
                    DB.s9=childDataScore;
            break;
            case 2: DB.e8=childDataEmail;
                    DB.s8=childDataScore;
            break;
            case 3: DB.e7=childDataEmail;
                    DB.s7=childDataScore;
            break;
            case 4: DB.e6=childDataEmail;
                    DB.s6=childDataScore;
            break;
            case 5: DB.e5=childDataEmail;
                    DB.s5=childDataScore;
            break;
            case 6: DB.e4=childDataEmail;
                    DB.s4=childDataScore;
            break;
            case 7: DB.e3=childDataEmail;
                    DB.s3=childDataScore;
            break;
            case 8: DB.e2=childDataEmail;
                    DB.s2=childDataScore;
            break;
            case 9: DB.e1=childDataEmail;
                    DB.s1=childDataScore;
            break;
        }
        ++i;
    }); 
}

