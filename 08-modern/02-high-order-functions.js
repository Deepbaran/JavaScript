// Higher Order Functions are those functions that accept other functions as parameters (callbacks) and/or return functions.

// High Order Functons: (For all of these, index parameter for the callback is optional)
//forEach
//filter
//map
//sort
//reduce

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach: It takes a asynchronous callback an iterates over all elements of the list just like for loop
companies.forEach((company, index) => {
  //This is a synchronous callback
  //index is optional
  console.log(company);
  /*
  { name: 'Google', category: 'Product Based', start: 1981, end: 2004 }
  { name: 'Amazon', category: 'Product Based', start: 1992, end: 2008 }  
  { name: 'Paytm', category: 'Product Based', start: 1999, end: 2007 }   
  { name: 'Coforge', category: 'Service Based', start: 1989, end: 2010 } 
  { name: 'Mindtree', category: 'Service Based', start: 1989, end: 2010 }
  */
});

//filter: It takes a asynchronous callback and filters out the data that do not pass the test provided in the callback and returns the filtered array
const filteredAge = ages.filter((age, index) => age > 20);
console.log(filteredAge);

const filteredCompany = companies.filter(
  company => company.category === "Service Based"
);
console.log(filteredCompany);

//map: It takes a asynchronous callback. It makes changed to each element in the array according to the callback and then returns the mapped array
const dummy = companies.map(company => {
  return `${company.name} ${company.category}`;
});
console.log(dummy);

//sort: It takes a asynchronous callback for custom sort. Otherwise by default the sort method converts the elements into string (UTF-16) then does the sort.
// const sorted = companies.sort((c1, c2) => {
//   if (c1.start < c2.start) {
//     return 1; //swap
//   } else {
//     return -1; //do not swap
//   }
// });
const sorted = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
console.log(sorted);

//reduce: It takes a asynchronous callback and following the callback reduces the array to a single element.
let total = 0;
for (let i = 0; i < ages.length; i++) {
  const element = ages[i];
}
console.log(total);
// const summage = ages.reduce((total, age) => {
//   return total, age;
// }, 0);
const sumAge = ages.reduce((total, age) => total + age, 0);
console.log(sumAge);
