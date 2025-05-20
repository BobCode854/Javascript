/**
 *   **************   Arrow Function   ********************************
 * 
 *    **) It is an special form of function expression.
 *    **) They’re a shorter and more modern way to write functions, 
 *           often used in React and modern codebases.
 * 
 *    **) An arrow function is a concise way to write a function using the => (arrow) syntax.
 * 
 *      ✅ Basic Syntax
 * 
*                const greet = () => {
                      console.log("Hello!");
                    };

                    greet(); // Output: Hello!


                    🧠 When to Use Arrow Functions
                        ✅ Best for:

                        Callbacks

                        Array methods (map, filter, forEach)

                        Event handlers in React

                        ❌ Avoid for:

                        Object methods (this behaves unexpectedly)

                        Constructor functions
 */

  /**
   *   ✅ Example: Normal Function vs Arrow Function
🔸Normal Function:

          const person = {
            name: "Alice",
            sayHello: function() {
              console.log("Hello, I'm " + this.name);
            }
          };

          person.sayHello(); // ✅ Output: Hello, I'm Alice
          this refers to person object.


      🔸Arrow Function:

                const person = {
                  name: "Alice",
                  sayHello: () => {
                    console.log("Hello, I'm " + this.name);
                  }
                };

             person.sayHello(); // ❌ Output: Hello, I'm undefined
             this is not bound to person. 
             It’s inherited from the surrounding scope (likely window or undefined in strict mode).
   */