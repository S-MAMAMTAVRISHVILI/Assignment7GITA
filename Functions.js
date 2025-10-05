// async function dataFromInvalidUrl() {
//     try {
//       let res = await fetch('https://jsonplaceholde.typicode.com')
//       if (res.ok) {
//         const data = await res.json()
//         console.log(data, "data")
//       }
//     } catch (err) {
//         for (let i = 0; i < 5; i++) {
//             try {
//             let res = await fetch('https://jsonplaceholde.typicode.com')
//             if (res.ok) {
//                 const data = await res.json()
//                 console.log(data, "data")
//             }
//             } catch (err) {
//                 console.log("Retry Failed")
//             }
//         } 
//         console.log("Could not fetch") 
//     }
//   }
  

// dataFromInvalidUrl()

// async function logFastest() {
//     const res = await Promise.race([
//         fetch('https://dummyjson.com/users'),
//         fetch('https://jsonplaceholder.typicode.com/users'),
//     ])
//     const data = await res.json()
//     console.log(data, "data")
// }

// logFastest()

// async function logProducts() {
//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json()
//     const filteredData = data.products.filter(prod => prod.price > 10)
//     console.log(filteredData, "Filtered Data")
// }

// logProducts()

// async function logUsers() {
//     const res = await fetch('https://dummyjson.com/users')
//     const data = await res.json()
//     const filteredDataWithTitle = data.users.filter(user => user.company.title === "Web Developer")
//     const filteredDataInfo = filteredDataWithTitle.map(user => ({
//                                                                 firstName: user.firstName,
//                                                                 lastName: user.lastName,
//                                                                 middleName: user.middleName,
//                                                                 address: user.address.city,
//                                                                 email: user.email,
//                                                                 phone: user.phone
//                                                                 }));
//     console.log(filteredDataInfo);
// }

// logUsers()


// async function logAll() {
//     const res = await Promise.all([
//         fetch('https://dummyjson.com/recipes'),
//         fetch('https://dummyjson.com/comments'),
//         fetch('https://dummyjson.com/todos'),     
//         fetch('https://dummyjson.com/quotes'),
//     ])
//     const data = await Promise.all(res.map(r => r.json()))
//     data.forEach(data => console.log(data)) 
// }

// logAll()
