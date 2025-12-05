// /* Deconstructing a URL */

// // Create an instance of the URL class
// const url = new URL('https://www.example.com/p/a/t/h?query=string');

// // Access parts of the URL as properties on the url instance
// const host = url.hostname; // example.com
// const pathname = url.pathname; // /p/a/t/h
// const searchParams = url.searchParams; // {query: 'string'}


// /* Constructing a URL */

// // Create an instance of the URL class
// const createdUrl = new URL('https://www.example.com');

// // Assign values to the properties on the url instance
// createdUrl.pathname = '/p/a/t/h';
// createdUrl.search = '?query=string';

// createdUrl.toString(); // Creates https://www.example.com/p/a/t/h?query=string


const url = new URL('https://www.example.com/p/a/t/h?query=string');

console.log('Host:', url.hostname); // example.com
console.log('Path:', url.pathname); // /p/a/t/h
console.log('Query:', url.searchParams.get('query')); // string

const createdUrl = new URL('https://www.example.com');
createdUrl.pathname = '/p/a/t/h';
createdUrl.search = '?query=string';

console.log('Constructed URL:', createdUrl.toString()); // https://www.example.com/p/a/t/h?query=string
