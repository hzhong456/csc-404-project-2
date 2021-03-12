const something = 'hello'

// export client-side code for testing in node.js
if (typeof module !== 'undefined') {
  module.exports = {
    something
  }
}
