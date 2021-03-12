const something = 'hello'

console.log(something)

// export client-side code for testing in node.js
if (typeof module !== 'undefined') {
  module.exports = {
    something
  }
}
