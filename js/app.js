console.log('this is the app js connected');

var userName = prompt('What is your name.');
  
var deltaTeam = prompt('Hello ' + userName + '! Are you a developer?').trim().toUpperCase();
  console.log(deltaTeam);
    if(deltaTeam === 'N' || deltaTeam === 'NO'){
      alert('You should go to DeltaV!!!');
    } else if (deltaTeam === 'Y' || deltaTeam === 'YES'){
      alert('I bet you learned at DeltaV!');
    } else {
      alert("I don't think you understand Booleans.");
    }


    <script language="javascript"> 
      months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
      var d=new Date();
      var weekday=new Array(7);
      weekday[0]="Sunday";
      weekday[1]="Monday";
      weekday[2]="Tuesday";
      weekday[3]="Wednesday";
      weekday[4]="Thursday";
      weekday[5]="Friday";
      weekday[6]="Saturday";

      var d = new Date();
      (d.getFullYear());


      var theDate = new Date(document.lastModified); 
      theDate.setTime((theDate.getTime()+(60*60)) ) 
      with (theDate) { 
      document.write("<i>Last updated "+weekday[getDay()]+' '+getDate()+' '+months[getMonth()]+' '+d.getFullYear()+' '+getHours()+':'+getMinutes()+" GMT</i>") 
      } 
      </script> 