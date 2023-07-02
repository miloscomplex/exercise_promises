// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise( (resolve, reject) => {
  setTimeout(resolve, 4000, 'success')
})

// #2) Run the above promise and make it console.log "success"
promise 

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise1 = Promise.resolve("success")

promise1.then((value) => {
  console.log(value);
})


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

const promise2 = new Promise((resolve, reject) => {
  throw new Error("Oooops something went wrong");
});

promise2.catch((error) => {
  console.log(error);
});

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.

const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]


Promise.all(urls.map( url =>
  fetch(url).then(people => people.json())
))
  .then( array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch( err => console.log('something happened!!', err));
  
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]


Promise.all(urls.map( url =>
  fetch(url).then(people => people.json())
))
  .then( array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch( err => console.log('something happened!!', err));