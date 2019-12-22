
var conf1=0;
var id=0;
var conf2=0;
var hell="a";
function signup(){
  conf1=1;
  var sname=document.getElementById("name").value;
  var sphone =document.getElementById("phone").value;
  var spassword =document.getElementById("password").value;
  var scar =document.getElementById("car").value;
  id=scar;
  var semail =document.getElementById("email").value;
  firebase.database().ref('/users/'+scar).set({
    Name: sname,
    Email: semail,
    Phone : sphone,
    Password:spassword,
    ID:scar,
  }); 
  window.alert("you siggned up succcesfully");
  
}
function proceed(){
  if(conf1==1){
    var queryString = "?" + id ;
    window.location = "inner.html" +queryString;
  }
  else{
    window.alert("plzz fill your details first");
  }
}
 
function login(){
  var id2 = document.getElementById("id2").value;
  var pass = document.getElementById("pass").value; 
  console.log(id2);
  console.log(pass);
  firebase.database().ref('/users/').child(id2).once('value').then(function(snapshot){
    var lname = snapshot.val().Name;
    var lphone= snapshot.val().Phone;
    var lemail= snapshot.val().Email;
    var lid= snapshot.val().ID;
    var lpassword=snapshot.val().Password;
    var queryString = "?" + lid ;
    if(lpassword==pass){
      window.alert("welcome "+ lname +" to my smart parking ");
       
      window.location = "inner.html"  + queryString;   
    }
    else{
      window.alert("you Entered a wrong password");
    } 
  });
  
  
}
function slot1(){
  if(conf2==0){
    document.getElementById("button1").style.backgroundColor = "red";
    conf2=1;
    hell="slot1";
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("&");
  for (var i = 0; i < queries.length; i++)
  {
    id3=queries[i];
  }
  firebase.database().ref('/users/').child(id3).once('value').then(function(snapshot){
    var name = snapshot.val().Name;
    var phone= snapshot.val().Phone;
    var email= snapshot.val().Email;
    var car= snapshot.val().ID;
    var password=snapshot.val().Password;
   firebase.database().ref('slot1/').set({
    Name: name,
    Email: email,
    Phone : phone,
    ID:car,
    Password:password,
    OTP:generateOTP(),
    Sensor1:"0",
    Paid1:"0",
    Booked1:"1",

  });});

  }}
function checkout(){
  if(conf2==1){
    var checking = "?" + hell ;
    localStorage.setItem("hey",hell);
    window.location = "main.html"+checking;
  }
  else{
    window.alert("plzz select a slot first");
  }  
}
function generateOTP() {  
  var digits = '0123456789'; 
  let OTP = ''; 
  for (let i = 0; i < 4; i++ ) { 
      OTP += digits[Math.floor(Math.random() * 10)]; 
  } 
  return OTP;
}
function slot2() {
  if(conf2==0){
    document.getElementById("button2").style.backgroundColor = "red";
    conf2=1;
    hell="slot2";
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("&");
  for (var i = 0; i < queries.length; i++)
  {
    id3=queries[i];
  }
  firebase.database().ref('/users/').child(id3).once('value').then(function(snapshot){
    var name = snapshot.val().Name;
    var phone= snapshot.val().Phone;
    var email= snapshot.val().Email;
    var car= snapshot.val().ID;
    var password=snapshot.val().Password;
   firebase.database().ref('slot2/').set({
    Name: name,
    Email: email,
    Phone : phone,
    ID:car,
    Password:password,
    OTP2:generateOTP(),
    Sensor2:"0",
    Paid2:"0",
    Booked2:"1",

  });});

  }
}
function slot3() {
  if(conf2==0){
    document.getElementById("button3").style.backgroundColor = "red";
    conf2=1;
    hell="slot3";
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("&");
  for (var i = 0; i < queries.length; i++)
  {
    id3=queries[i];
  }
  firebase.database().ref('/users/').child(id3).once('value').then(function(snapshot){
    var name = snapshot.val().Name;
    var phone= snapshot.val().Phone;
    var email= snapshot.val().Email;
    var car= snapshot.val().ID;
    var password=snapshot.val().Password;
   firebase.database().ref('slot3/').set({
    Name: name,
    Email: email,
    Phone : phone,
    ID:car,
    Password:password,
    OTP3:generateOTP(),
    Sensor3:"0",
    Paid3:"0",
    Booked3:"1",

  });});

  }
}
function slot4() {
  if(conf2==0){
    document.getElementById("button4").style.backgroundColor = "red";
    conf2=1;
    hell="slot4";
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("&");
  for (var i = 0; i < queries.length; i++)
  {
    id3=queries[i];
  }
  firebase.database().ref('/users/').child(id3).once('value').then(function(snapshot){
    var name = snapshot.val().Name;
    var phone= snapshot.val().Phone;
    var email= snapshot.val().Email;
    var car= snapshot.val().ID;
    var password=snapshot.val().Password;
   firebase.database().ref('slot4/').set({
    Name: name,
    Email: email,
    Phone : phone,
    ID:car,
    Password:password,
    OTP4:generateOTP(),
    Sensor4:"0",
    Paid4:"0",
    Booked4:"1",

  });});

  }
}
function reverse(){
  var checking = decodeURIComponent(window.location.search);
  checking = checking.substring(1);
  var queries = checking.split("&");
  for (var i = 0; i < queries.length; i++)
  {
    high=queries[i];
  }
  console.log(high);
  high2=localStorage.getItem("hey");
  if(high2=="slot1"){
    var count1=0;
    var count11=0;
    var count12;
    var stop1=setInterval(function(){
         var starCountRef = firebase.database().ref("/slot1");
         starCountRef.on('value', function(snapshot) {
         sense1=snapshot.val().Sensor1;})
         count12=count1;
         if(sense1==1){
           count1++;
           console.log(count1);
         }
         if(count12==count1 && count1>1){
           count11++;
           console.log(count11);
         }
         if(count11>1){
           window.alert("hey you are done now");
           var vb=count1;
           window.alert("your payment amount is " +vb+ " rupees");
           localStorage.setItem("amount",vb);
           localStorage.setItem("slot","slot1");
           window.location="payment.html";
           clearInterval(stop1);
           
         }
    }, 5000);
   }
   else if(high2=="slot2"){
    var count2=0;
    var count21=0;
    var count22;
    var stop2=setInterval(function(){
         var starCountRef = firebase.database().ref("/slot2");
         starCountRef.on('value', function(snapshot) {
         sense2=snapshot.val().Sensor2;})
         count22=count2;
         if(sense2==1){
           count2++;
         }
         if(count22==count2 && count2>2){
           count21++;
         }
         if(count21>2){
           window.alert("hey you are done now");
           var vb=((count1*10)-30)*1;
           window.alert(vb);
           localStorage.setItem("amount",vb);
           localStorage.setItem("slot","slot2");
           clearInterval(stop2);
           
         }
    }, 10000);
   }
   else if(high2=="slot3"){
    var count3=0;
    var count31=0;
    var count32;
    var stop3=setInterval(function(){
         var starCountRef = firebase.database().ref("/slot3");
         starCountRef.on('value', function(snapshot) {
         sense3=snapshot.val().Sensor3;})
         count32=count3;
         if(sense3==1){
           count3++;
         }
         if(count32==count3 && count3>2){
           count31++;
         }
         if(count31>2){
           window.alert("hey you are done now");
           var vb=((count1*10)-30)*1;
           window.alert(vb);
           localStorage.setItem("amount",vb);
           localStorage.setItem("slot","slot3");
           clearInterval(stop3);
           
         }
    }, 10000);
   }
   else if(high2=="slot4"){
    var count4=0;
    var count41=0;
    var count42;
    var stop4=setInterval(function(){
         var starCountRef = firebase.database().ref("/slot4");
         starCountRef.on('value', function(snapshot) {
         sense4=snapshot.val().Sensor4;})
         count42=count4;
         if(sense4==4){
           count4++;
         }
         if(count42==count4 && count4>5){
           count41++;
         }
         if(count41>3){
           window.alert("hey you are done now");
           window.alert(vb);
           localStorage.setItem("amount",vb);
           localStorage.setItem("slot","slot4");
           clearInterval(stop4);
           
         }
    }, 10000);
   }
   else{
     console.log("something is wrong");
   }
 
}
function payment(){
  x=localStorage.getItem("amount");
  y=localStorage.getItem("slot");
  console.log(y);
  if(y="slot1"){
    firebase.database().ref("/slot1").update({ Paid1: "1" });
  }
  else if(y="slot2"){
    firebase.database().ref("/slot2").update({ Paid2: "1" });
  }
  else if(y="slot3"){
    firebase.database().ref("/slot3").update({ Paid3: "1" });
  }
  else if(y="slot4"){
    firebase.database().ref("/slot4").update({ Paid4: "1" });
  }
  console.log(x);
}

