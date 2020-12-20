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