# Async in javascript

- JS by nature is single threaded (until worker thread)
- Event loop
- Code not always executed in order

```javascript
const https = require("https");

console.log("before request");

https.get("https://example.com/", resp => {
  let data = "";

  // A chunk of data has been recieved.
  resp.on("data", chunk => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on("end", () => {
    console.log("response received");
    console.log(data);
  });
});

console.log("after request");
```

## Async example using setTimeout

```javascript
const hello = () => {
  console.log("Hello");
};
const sing = () => {
  console.log("Lets sing together");
};
const goodbye = () => {
  console.log("Goodbye");
};

hello();

setTimeout(() => {
  sing();
}, 1000); // Invoke `second` after 1000ms

goodbye();
```

Reference:  
https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

# Callback

Callbacks are by far the most common way to express and manage asynchrony in JavaScript programs, Indeed, callback is the most fundamental async pattern in the JavaScript language.

Callback in essence is function used as parameter to a function call

# Enter the Promise

```javascript
// make promise which directly resolve to some value
Promise.resolve(374);

// make promise by instantiating Promise object
new Promise((resolve, reject) => {
  resolve(374);
});
```
