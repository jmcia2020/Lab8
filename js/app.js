console.log('this is the app js connected');

var userName = prompt('What is your name.');
alert('Hello ' + userName + ', click ok to go to page.');
console.log ()


    if(userName === 'Craig' || userName === 'Yo'){
      alert('Hello ' + userName + ', click ok to go to YO YO  page.');
      // || or && and 
    } else if (userName === 'Bob' && userName === ' Smith'){
      alert('Hello ' + userName + ', click BOb BOB ok to go to page.');
    } else {
      alert('Hello ' + userName + ', click ok to go to page.');
    }

    var favoriteFood = prompt('Is Pizza your favorite food.').trim();
  console.log(favoriteFood);
    if(favoriteFood === 'N' || favoriteFood === 'No'){
      alert('Are you sure? Have you even tried it?');
    } else if (favoriteFood === 'Y' || favoriteFood === 'Yes'){
      alert('Yes Pizza is my favorite too....');
    } else {
      alert('Please go eat pizza.');
    }