// vreate an array of objects,
var movies = [
    {
      title: "Harry Potter",
      rating: 5,
      watched: false
    },
     {
      title: " The Lord of the Rings",
      rating: 4.5,
      watched: true
    },
    {
      title: " The Lord of the Flies",
      rating: 4,
      watched: true
    },
    {
      title: " Avatar",
      rating: 3,
      watched: true
    },
    {
      title: " Pretty in Pink",
      rating: 2,
      watched: false
    }
  ];
  console.log("Hello first type in movies into the console to see the object list.");
  console.log("then run function seen with movies passed in the parenthasis to see the list.");

function seen(arr) {
  for(var i=0; i<arr.length; i++){
    if(arr[i].watched !== true){
      console.log("You have not seen" + arr[i].title,+" "+ "with a rating of:"+ arr[i].rating);
    }else{console.log("Yay you have watched" + arr[i].title,+""+ "with a rating of:"+ arr[i].rating);
      }
  }
};
