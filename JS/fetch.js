// fetch('https://reqres.in/api/users')
//     .then(Response=>Response.json())
//     .then(data=>console.log(data))

    // Using Fetch API with Promise
// const fetchDataPromise = fetch('https://reqres.in/api/users'); // Creating a Promise for fetching data

// fetchDataPromise
//   .then(response => {
//     // Handle the response
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse response as JSON
//   }) // Success block starts here
//   .then(data => {
//     // Handle the parsed data
//     console.log('Data received:', data);
//   }) // Success block ends here
//   .catch(error => {
//     // Handle any errors that occurred during the fetch operation
//     console.error('Fetch error:', error); // Failure block starts here
//   });

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { id: 1, name: 'John Doe', age: 30 };
        // Simulating success by resolving the Promise with the fetched data
        resolve(data);
        // Simulating an error by rejecting the Promise
        // reject(new Error('Failed to fetch data'));
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  fetchData()
  .then(data => {
    console.log('Data:', data);
    // Handle the fetched data here
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle errors here
  });