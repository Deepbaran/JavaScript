//TODO: Part 1 for this keyword.
// KEY TAKEAWAYS IN THIS PART:
// this keyword gives us access to the Global Context.
// Global Context differs in the situations.
// In case of node it gives us empty scope, in case of browser it gives access to window object.

console.log(this); // {} <- Empty Scope. This is because we are running it on node and node powers V8 engine. So, if we run it on browser, we will get the window object.

var game = "basketball";

function sayName() {
  var name = "Deep";
  console.log(this); //We get the below o/p when running on node but will get window object if we run in the browser.
  /*
  <ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    performance: Performance {
      nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 57.623899936676025,
        nodeStart: 0.8252999782562256,
        v8Start: 3.6910998821258545,
        bootstrapComplete: 33.787999868392944,
        environment: 16.57800006866455,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
      },
      timeOrigin: 1660402490119.561
    },
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
  }
  */
}
sayName();
