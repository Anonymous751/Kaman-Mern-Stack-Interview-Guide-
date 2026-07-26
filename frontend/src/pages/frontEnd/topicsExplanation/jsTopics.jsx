const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};

export const jsTopics = [
  {
    id: 5,
    title: "JavaScript Fundamentals",
    path: "/frontend/js-fundamentals",
    explanation: (
      <>
        <p>
          Mastering core JavaScript concepts is essential for both interviews
          and real-world development. Topics like the{" "}
          <strong>event loop</strong>,<strong> closures</strong>,{" "}
          <strong>hoisting</strong>,<strong> prototype chain</strong>, and{" "}
          <strong>promises</strong> are frequently asked and tested.
        </p>

        <h2>Event Loop & Asynchronous JavaScript</h2>
        <p>The event loop manages the execution order of sync & async code.</p>
        <pre>
          {`console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output:
// Start
// End
// Promise
// Timeout`}
        </pre>
        <p>
          <strong>Note:</strong> Promise callbacks (microtasks) run before
          setTimeout callbacks (macrotasks).
        </p>

        <h2>Closures</h2>
        <p>
          A closure is created when a function remembers variables from its
          lexical scope even after the outer function has executed.
        </p>
        <pre>
          {`function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`}
        </pre>

        <h2>Hoisting</h2>
        <ul>
          <li>Declarations are moved to the top of their scope.</li>
          <li>
            <strong>var</strong> is hoisted with <em>undefined</em>{" "}
            initialization.
          </li>
          <li>
            <strong>let</strong> and <strong>const</strong> are hoisted but stay
            in the "Temporal Dead Zone" until initialized.
          </li>
        </ul>

        <h2>Prototype Chain</h2>
        <p>
          JavaScript uses prototypal inheritance, meaning objects inherit
          methods and properties through their <strong>prototype chain</strong>.
        </p>

        <h2>Promises</h2>
        <p>
          Promises represent the eventual completion of async operations. Use
          <strong> then/catch</strong> or <strong>async/await</strong> for
          cleaner async code.
        </p>

        <h2>Interview Tip</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Explain the
            event loop — macro vs micro tasks.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> JS runs on a
            single thread. Microtasks (Promises, MutationObserver) run
            **before** the next rendering and after the current task. Macrotasks
            (setTimeout, setInterval, I/O) run **after** microtasks and one
            event loop tick.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between closures and scope?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Scope = where a variable is accessible. Closure = a function
            remembering its outer variables even after outer function has
            finished.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Prototype
            inheritance vs class-based inheritance.
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Prototype: objects inherit directly from other objects. Class:
            syntactic sugar over prototypes; cleaner and more structured syntax.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Explain "this"
            in JS.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Refers to the
            object calling the function. In arrow functions, "this" is lexical
            (from surrounding scope).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            hoisting?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Variable &
            function declarations are moved to the top of their scope before
            execution. let/const are hoisted but not initialized.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between var, let, const?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> var = function
            scoped, can re-declare; let = block scoped, can update; const =
            block scoped, cannot update.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between == and ===?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> == compares
            values after type coercion; === compares value and type (strict
            equality).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            async/await and Promises?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promises
            handle async operations with then/catch. async/await is syntactic
            sugar to write async code like sync code.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Explain call,
            apply, bind.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> All set the
            "this" context: call = invoke immediately with args, apply = invoke
            immediately with args array, bind = returns new function with fixed
            "this".
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between shallow and deep copy.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Shallow copy
            copies top-level only; nested objects still reference original. Deep
            copy duplicates all levels.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Call Stack",
    path: "/frontend/js-call-stack",
    explanation: (
      <>
        <p>
          The <strong>Call Stack</strong> is a data structure used by JavaScript
          to keep track of <strong>function calls</strong>. It decides the order
          in which functions are executed and completed during program
          execution.
        </p>

        <h2>What Is the Call Stack?</h2>
        <ul>
          <li>
            A <strong>stack</strong> data structure.
          </li>
          <li>
            Uses <strong>LIFO</strong> (Last In, First Out) principle.
          </li>
          <li>
            Stores <strong>stack frames</strong> for each function call.
          </li>
          <li>Ensures JavaScript executes one function at a time.</li>
        </ul>

        <h2>What Is a Stack Frame?</h2>
        <ul>
          <li>A record of a function call.</li>
          <li>
            Contains:
            <ul>
              <li>Function arguments</li>
              <li>Local variables</li>
              <li>Return address</li>
            </ul>
          </li>
          <li>Created when a function is called.</li>
          <li>Removed when the function finishes execution.</li>
        </ul>

        <h2>How the Call Stack Works</h2>
        <ul>
          <li>Global Execution Context is pushed first.</li>
          <li>
            Each function call is <strong>pushed</strong> onto the stack.
          </li>
          <li>
            When a function completes, it is <strong>popped</strong> off.
          </li>
        </ul>

        <h2>Push and Pop Mechanism</h2>
        <ul>
          <li>
            <strong>Push</strong> – When a function is invoked, its execution
            context is added to the stack.
          </li>
          <li>
            <strong>Pop</strong> – When a function finishes, its context is
            removed.
          </li>
        </ul>

        <h2>LIFO Execution Order</h2>
        <ul>
          <li>The last function called executes first.</li>
          <li>Inner functions finish before outer functions.</li>
          <li>Ensures predictable execution flow.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

function third() {
  second();
  console.log("Third");
}

third();`}
        </pre>

        <ul>
          <li>
            <code>third()</code> is pushed to the stack.
          </li>
          <li>
            <code>second()</code> is pushed.
          </li>
          <li>
            <code>first()</code> is pushed.
          </li>
          <li>
            <code>first()</code> completes and pops.
          </li>
          <li>
            <code>second()</code> completes and pops.
          </li>
          <li>
            <code>third()</code> completes and pops.
          </li>
        </ul>

        <h2>Call Stack and Recursion</h2>
        <ul>
          <li>Each recursive call creates a new stack frame.</li>
          <li>Deep or infinite recursion grows the stack.</li>
          <li>
            If the stack exceeds its limit → <strong>stack overflow</strong>.
          </li>
        </ul>

        <h2>Stack Overflow</h2>
        <ul>
          <li>Occurs when the call stack memory limit is exceeded.</li>
          <li>Usually caused by infinite recursion.</li>
          <li>Results in runtime error and program crash.</li>
        </ul>

        <h2>Relation with Execution Context</h2>
        <ul>
          <li>Each stack frame represents an execution context.</li>
          <li>Call Stack manages execution contexts.</li>
          <li>Execution contexts are pushed and popped in order.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            call stack?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A stack that
            tracks function calls in JavaScript.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            JavaScript single-threaded?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it
            uses a single call stack to execute code.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What causes
            stack overflow?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Too many
            nested or infinite function calls.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between call stack and execution context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Execution
            context defines how code runs; call stack manages their order.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Call Stack manages function execution order.</li>
          <li>Uses LIFO principle.</li>
          <li>Each function call creates a stack frame.</li>
          <li>Helps understand recursion, errors, and async behavior.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 8,
    title: "Lexical Environment",
    path: "/frontend/js/lexical-environment",
    explanation: (
      <>
        <p>
          The <strong>Lexical Environment</strong> is an internal JavaScript
          structure that defines how <strong>variables are stored</strong> and
          <strong> how they are accessed</strong> based on where they are
          written in the code. It is the foundation of <strong>scope</strong>{" "}
          and
          <strong> closures</strong>.
        </p>

        <h2>What Is a Lexical Environment?</h2>
        <ul>
          <li>Created whenever code is written (lexically).</li>
          <li>
            Determines <strong>variable accessibility</strong>.
          </li>
          <li>Used during identifier resolution.</li>
          <li>Exists for global scope, functions, and blocks.</li>
        </ul>

        <h2>Components of Lexical Environment</h2>
        <ul>
          <li>
            <strong>Environment Record</strong> – Stores variable and function
            declarations.
          </li>
          <li>
            <strong>Outer Lexical Reference</strong> – Reference to the parent
            lexical environment.
          </li>
        </ul>

        <h2>Environment Record</h2>
        <ul>
          <li>Contains bindings for variables, functions, and parameters.</li>
          <li>
            Different types:
            <ul>
              <li>Declarative Environment Record (let, const, function)</li>
              <li>Object Environment Record (global object)</li>
            </ul>
          </li>
        </ul>

        <h2>Outer Lexical Reference</h2>
        <ul>
          <li>Points to the lexical environment of the parent scope.</li>
          <li>
            Creates the <strong>scope chain</strong>.
          </li>
          <li>Stops at the global lexical environment.</li>
        </ul>

        <h2>Scope Chain</h2>
        <ul>
          <li>A chain of lexical environments.</li>
          <li>
            Used during <strong>variable lookup</strong>.
          </li>
          <li>Searches from inner scope to outer scope.</li>
        </ul>

        <h2>Identifier Resolution</h2>
        <ul>
          <li>Process of finding variables in the scope chain.</li>
          <li>Stops once the identifier is found.</li>
          <li>Throws a reference error if not found.</li>
        </ul>

        <h2>Lexical Environment and Closures</h2>
        <ul>
          <li>Closures retain access to their outer lexical environment.</li>
          <li>Allows functions to remember variables after execution.</li>
          <li>Key concept for callbacks and async code.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn();`}
        </pre>

        <ul>
          <li>
            <code>inner()</code> remembers <code>x</code>.
          </li>
          <li>Closure keeps reference to outer lexical environment.</li>
          <li>
            <code>x</code> is resolved via scope chain.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            lexical environment?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An internal
            structure that stores variable bindings and manages scope
            resolution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            environment record?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A storage that
            holds variable and function declarations.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is outer
            lexical reference?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A reference to
            the parent lexical environment.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            JavaScript find variables?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By searching
            through the scope chain.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            closures related to lexical environment?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Closures
            preserve access to their lexical environment even after execution.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Lexical environment defines scope.</li>
          <li>Controls variable access and resolution.</li>
          <li>Core concept behind closures.</li>
          <li>Essential for mastering JavaScript internals.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 9,
    title: "Variable Environment",
    path: "/frontend/js/variable-environment",
    explanation: (
      <>
        <p>
          The <strong>Variable Environment</strong> is an internal JavaScript
          structure that stores{" "}
          <strong>variable and function declarations</strong>
          during the execution of code. It plays a key role in
          <strong> hoisting</strong>, <strong>scope</strong>, and the
          <strong> creation phase</strong> of execution contexts.
        </p>

        <h2>What Is a Variable Environment?</h2>
        <ul>
          <li>Created for every execution context.</li>
          <li>Stores variable and function bindings.</li>
          <li>Used mainly during the creation phase.</li>
          <li>Helps JavaScript manage hoisting behavior.</li>
        </ul>

        <h2>What Does It Store?</h2>
        <ul>
          <li>
            <strong>var</strong> declarations.
          </li>
          <li>
            <strong>Function declarations</strong>.
          </li>
          <li>Function parameters.</li>
        </ul>

        <h2>Creation Phase and Hoisting</h2>
        <ul>
          <li>Memory is allocated before code execution.</li>
          <li>
            <code>var</code> variables are initialized as <code>undefined</code>
            .
          </li>
          <li>Function declarations are stored fully.</li>
          <li>Enables accessing variables before declaration.</li>
        </ul>

        <h2>Binding Initialization</h2>
        <ul>
          <li>Defines how variables are initialized in memory.</li>
          <li>
            <code>var</code> → initialized as <code>undefined</code>.
          </li>
          <li>
            <code>let</code> and <code>const</code> → uninitialized initially.
          </li>
        </ul>

        <h2>Temporal Dead Zone (TDZ)</h2>
        <ul>
          <li>
            Applies to <code>let</code> and <code>const</code>.
          </li>
          <li>Time between declaration and initialization.</li>
          <li>Accessing variables in TDZ throws an error.</li>
        </ul>

        <h2>Environment Record Storage</h2>
        <ul>
          <li>Variables are stored inside the environment record.</li>
          <li>Different records exist for global and function scopes.</li>
          <li>Helps manage identifier resolution.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

test();

function test() {
  console.log("Function Hoisted");
}`}
        </pre>

        <ul>
          <li>
            <code>a</code> is hoisted and initialized.
          </li>
          <li>
            <code>b</code> is in the TDZ.
          </li>
          <li>
            <code>test()</code> is fully hoisted.
          </li>
        </ul>

        <h2>Difference: Variable vs Lexical Environment</h2>
        <ul>
          <li>Variable Environment focuses on declarations and hoisting.</li>
          <li>Lexical Environment focuses on scope and closures.</li>
          <li>Both work together inside execution contexts.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            variable environment?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is an
            internal structure that stores variable and function declarations.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does
            hoisting occur?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            variables are allocated memory during the creation phase.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is TDZ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A time period
            where let and const exist but cannot be accessed.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are let and
            const hoisted?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, but they
            are not initialized until execution reaches them.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is stored
            in environment records?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Variable
            bindings, function declarations, and parameters.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Variable environment manages hoisting.</li>
          <li>Created during execution context creation phase.</li>
          <li>Explains var, let, and const behavior.</li>
          <li>Essential for understanding JavaScript internals.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 10,
    title: "Environment Records",
    path: "/frontend/js-environment-records",
    explanation: (
      <>
        <p>
          <strong>Environment Records</strong> are internal JavaScript data
          structures used to{" "}
          <strong>store variable and function bindings </strong>
          inside an execution context. They work closely with the
          <strong> lexical environment</strong> to manage scope and identifier
          resolution.
        </p>

        <h2>What Is an Environment Record?</h2>
        <ul>
          <li>Stores bindings for variables, functions, and parameters.</li>
          <li>Created for each lexical environment.</li>
          <li>Helps JavaScript resolve identifiers.</li>
          <li>Not directly accessible by developers.</li>
        </ul>

        <h2>Types of Environment Records</h2>
        <ul>
          <li>
            <strong>Declarative Environment Record</strong>
          </li>
          <li>
            <strong>Object Environment Record</strong>
          </li>
        </ul>

        <h2>Declarative Environment Records</h2>
        <ul>
          <li>Used for function, block, and module scopes.</li>
          <li>
            Stores:
            <ul>
              <li>
                <code>let</code> and <code>const</code> variables
              </li>
              <li>Function declarations</li>
              <li>Function parameters</li>
            </ul>
          </li>
          <li>Supports Temporal Dead Zone (TDZ).</li>
        </ul>

        <h2>Object Environment Records</h2>
        <ul>
          <li>Used mainly in the global scope.</li>
          <li>Bindings are stored as properties on an object.</li>
          <li>
            In browsers, this object is <code>window</code>.
          </li>
          <li>
            Used by <code>var</code> declarations.
          </li>
        </ul>

        <h2>Variable and Function Bindings</h2>
        <ul>
          <li>Variables are mapped to values.</li>
          <li>Functions are stored fully during creation phase.</li>
          <li>Parameters act as bindings inside functions.</li>
        </ul>

        <h2>Scope Management</h2>
        <ul>
          <li>Each scope has its own environment record.</li>
          <li>Prevents variable name conflicts.</li>
          <li>Controls variable visibility.</li>
        </ul>

        <h2>Outer References</h2>
        <ul>
          <li>Each environment record references its parent.</li>
          <li>
            Forms the <strong>scope chain</strong>.
          </li>
          <li>Stops at the global environment.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`let x = 10;

function test() {
  let y = 20;

  function inner() {
    console.log(x + y);
  }

  inner();
}

test();`}
        </pre>

        <ul>
          <li>
            <code>x</code> stored in global environment record.
          </li>
          <li>
            <code>y</code> stored in function environment record.
          </li>
          <li>Scope chain resolves variables.</li>
        </ul>

        <h2>Relation with Lexical Environment</h2>
        <ul>
          <li>Lexical environment = environment record + outer reference.</li>
          <li>Environment record stores data.</li>
          <li>Outer reference connects scopes.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            environment record?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An internal
            structure that stores variable and function bindings.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between declarative and object environment record?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Declarative
            stores let/const and functions; object stores var on global object.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where are
            function parameters stored?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Inside the
            function’s environment record.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            JavaScript resolve identifiers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By checking
            environment records through the scope chain.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is environment
            record accessible directly?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it is an
            internal JavaScript mechanism.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Environment records store bindings.</li>
          <li>They manage variable and function storage.</li>
          <li>Core part of lexical environments.</li>
          <li>Essential for understanding scope and closures.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 11,
    title: "Scope Chain",
    path: "/frontend/js/scope-chain",
    explanation: (
      <>
        <p>
          The <strong>Scope Chain</strong> is the mechanism JavaScript uses to
          <strong> resolve variables</strong> by searching through
          <strong> lexical scopes</strong>. It connects multiple
          <strong> execution contexts</strong> and allows inner scopes to access
          variables from outer scopes.
        </p>

        <h2>What Is the Scope Chain?</h2>
        <ul>
          <li>A linked chain of lexical environments.</li>
          <li>Used for variable and function lookup.</li>
          <li>Created automatically during execution.</li>
          <li>Stops at the global scope.</li>
        </ul>

        <h2>Lexical Scopes</h2>
        <ul>
          <li>Scope is determined by where code is written.</li>
          <li>Inner scopes are nested inside outer scopes.</li>
          <li>Block, function, and global scopes participate.</li>
        </ul>

        <h2>Variable Lookup Process</h2>
        <ul>
          <li>JavaScript first checks the current scope.</li>
          <li>If not found, it moves to the parent scope.</li>
          <li>This continues until the global scope.</li>
          <li>Throws a reference error if not found.</li>
        </ul>

        <h2>Parent Scope References</h2>
        <ul>
          <li>Each lexical environment has a reference to its parent.</li>
          <li>Forms a chain of environments.</li>
          <li>Known internally as the outer lexical reference.</li>
        </ul>

        <h2>Scope Chain and Execution Context</h2>
        <ul>
          <li>Every execution context has its own scope chain.</li>
          <li>Created during the creation phase.</li>
          <li>Based on lexical environment hierarchy.</li>
        </ul>

        <h2>Scope Chain and Closures</h2>
        <ul>
          <li>Closures retain access to outer scopes.</li>
          <li>Variables remain accessible after execution.</li>
          <li>Essential for callbacks and async code.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a + b + c);
  }

  inner();
}

outer();`}
        </pre>

        <ul>
          <li>
            <code>inner()</code> looks for <code>c</code> in its scope.
          </li>
          <li>
            <code>b</code> is found in <code>outer()</code> scope.
          </li>
          <li>
            <code>a</code> is resolved in global scope.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming scope is dynamic (it is lexical).</li>
          <li>Expecting inner scope variables outside.</li>
          <li>
            Forgetting block scope of <code>let</code> and <code>const</code>.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            scope chain?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A chain of
            lexical environments used to resolve variables.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            JavaScript find a variable?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By searching
            from the current scope up through the scope chain.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where does the
            scope chain stop?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> At the global
            scope.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            closures related to scope chain?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Closures
            preserve the scope chain even after function execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is scope
            determined at runtime?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, scope is
            determined lexically at code write time.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Scope chain resolves variables.</li>
          <li>Built from lexical environments.</li>
          <li>Searches from inner to outer scopes.</li>
          <li>Fundamental to closures and JS internals.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 12,
    title: "Hoisting Internals",
    path: "/frontend/js/hoisting",
    explanation: (
      <>
        <p>
          <strong>Hoisting</strong> is a JavaScript behavior where
          <strong> variable and function declarations</strong> are processed
          before code execution. This happens during the
          <strong> creation phase</strong> of the execution context, allowing
          certain identifiers to be accessed earlier than expected.
        </p>

        <h2>What Is Hoisting?</h2>
        <ul>
          <li>Declarations are moved to the top internally.</li>
          <li>Memory is allocated before execution starts.</li>
          <li>Only declarations are hoisted, not assignments.</li>
          <li>Result of engine parsing and memory allocation.</li>
        </ul>

        <h2>Engine Parsing Order</h2>
        <ul>
          <li>JavaScript engine scans the code before execution.</li>
          <li>Creates execution contexts.</li>
          <li>Registers variables and functions in memory.</li>
          <li>Determines scope and bindings.</li>
        </ul>

        <h2>Function Declaration Hoisting</h2>
        <ul>
          <li>Fully hoisted with implementation.</li>
          <li>Can be called before declaration.</li>
          <li>Stored in environment record.</li>
        </ul>

        <h2>var Hoisting</h2>
        <ul>
          <li>
            Hoisted and initialized as <code>undefined</code>.
          </li>
          <li>Accessible before declaration.</li>
          <li>Stored in object environment record.</li>
        </ul>

        <h2>Temporal Dead Zone (TDZ)</h2>
        <ul>
          <li>
            Applies to <code>let</code> and <code>const</code>.
          </li>
          <li>Exists from scope start to initialization.</li>
          <li>Accessing variables during TDZ throws error.</li>
        </ul>

        <h2>Memory Allocation</h2>
        <ul>
          <li>Memory allocated during creation phase.</li>
          <li>Variables and functions registered.</li>
          <li>Execution phase assigns actual values.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`hello();

function hello() {
  console.log("Hello World");
}

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;`}
        </pre>

        <ul>
          <li>
            <code>hello()</code> works before declaration.
          </li>
          <li>
            <code>a</code> exists but is undefined.
          </li>
          <li>
            <code>b</code> is in the TDZ.
          </li>
        </ul>

        <h2>Common Misconceptions</h2>
        <ul>
          <li>Hoisting moves code physically (it does not).</li>
          <li>All variables are accessible before declaration.</li>
          <li>
            <code>let</code> and <code>const</code> are not hoisted.
          </li>
        </ul>

        <h2>Relation with Execution Context</h2>
        <ul>
          <li>Hoisting occurs during creation phase.</li>
          <li>Managed by variable and lexical environments.</li>
          <li>Driven by environment records.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            hoisting?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> JavaScript
            behavior where declarations are processed before execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are let and
            const hoisted?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, but they
            remain uninitialized in the TDZ.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does var
            return undefined?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it is
            initialized during memory allocation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What phase
            causes hoisting?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The creation
            phase of execution context.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does hoisting
            move code?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it is an
            internal engine behavior.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Hoisting is a result of memory allocation.</li>
          <li>Function declarations are fully hoisted.</li>
          <li>var is initialized as undefined.</li>
          <li>let and const are affected by TDZ.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 13,
    title: "Temporal Dead Zone (TDZ)",
    path: "/frontend/js/tdz",
    explanation: (
      <>
        <p>
          The <strong>Temporal Dead Zone (TDZ)</strong> is the period in
          JavaScript where variables declared using <strong>let</strong> and
          <strong> const</strong> exist but cannot be accessed. It starts from
          the beginning of the scope until the variable is initialized, and
          accessing it during this time results in a{" "}
          <strong>ReferenceError</strong>.
        </p>

        <h2>What Is the Temporal Dead Zone?</h2>
        <ul>
          <li>
            Applies only to <code>let</code> and <code>const</code>.
          </li>
          <li>Occurs between declaration and initialization.</li>
          <li>Prevents unsafe variable access.</li>
          <li>Enforced by the JavaScript engine at runtime.</li>
        </ul>

        <h2>Why Does TDZ Exist?</h2>
        <ul>
          <li>Encourages safer coding practices.</li>
          <li>Avoids bugs caused by accessing uninitialized variables.</li>
          <li>Makes block scoping predictable.</li>
          <li>Improves code clarity and maintainability.</li>
        </ul>

        <h2>TDZ and Scope Boundaries</h2>
        <ul>
          <li>TDZ is tied to block scope.</li>
          <li>Starts at the beginning of the block.</li>
          <li>Ends when the variable is initialized.</li>
        </ul>

        <h2>Runtime Checks and Engine Enforcement</h2>
        <ul>
          <li>JavaScript engine tracks uninitialized bindings.</li>
          <li>Access triggers a runtime reference check.</li>
          <li>
            Throws <code>ReferenceError</code> if violated.
          </li>
        </ul>

        <h2>TDZ vs Hoisting</h2>
        <ul>
          <li>
            <code>let</code> and <code>const</code> are hoisted.
          </li>
          <li>They are not initialized during creation phase.</li>
          <li>TDZ exists until execution reaches initialization.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`console.log(a); // ReferenceError
let a = 10;

{
  console.log(b); // ReferenceError
  const b = 20;
}`}
        </pre>

        <ul>
          <li>
            <code>a</code> and <code>b</code> exist but are inaccessible.
          </li>
          <li>TDZ ends when initialization happens.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming let/const are not hoisted.</li>
          <li>Accessing variables before initialization.</li>
          <li>Confusing TDZ with scope errors.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is TDZ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The time when
            let and const variables exist but cannot be accessed.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does TDZ
            throw ReferenceError?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To prevent
            access to uninitialized bindings.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are let and
            const hoisted?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, but they
            remain uninitialized until execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does var have
            TDZ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, var is
            initialized as undefined.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does TDZ
            end?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When the
            variable is initialized.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>TDZ applies to let and const.</li>
          <li>Accessing variables in TDZ throws error.</li>
          <li>Ensures safer and predictable code.</li>
          <li>Closely related to hoisting and scope.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 14,
    title: "Lexical Scoping",
    path: "/frontend/js/lexical-scoping",
    explanation: (
      <>
        <p>
          <strong>Lexical Scoping</strong> is a JavaScript scoping model where
          <strong> scope is determined at the time of code definition</strong>,
          not during execution. It defines how variables are resolved based on
          where functions and blocks are written in the source code.
        </p>

        <h2>What Is Lexical Scoping?</h2>
        <ul>
          <li>Scope is fixed at code write time.</li>
          <li>Inner scopes can access outer scope variables.</li>
          <li>Scope does not change at runtime.</li>
          <li>Foundation of closures.</li>
        </ul>

        <h2>Function Scope Determination</h2>
        <ul>
          <li>Functions capture the scope in which they are defined.</li>
          <li>Not affected by where the function is called.</li>
          <li>Determines variable accessibility.</li>
        </ul>

        <h2>Lexical Scoping vs Dynamic Scoping</h2>
        <ul>
          <li>JavaScript uses lexical scoping.</li>
          <li>Dynamic scoping depends on call location.</li>
          <li>JavaScript does NOT support dynamic scoping.</li>
        </ul>

        <h2>Parent Scope Access</h2>
        <ul>
          <li>Inner functions access parent variables.</li>
          <li>Access is read/write unless restricted.</li>
          <li>Resolved through scope chain.</li>
        </ul>

        <h2>Lexical Scoping and Closures</h2>
        <ul>
          <li>Closures retain lexical scope.</li>
          <li>Variables stay alive after function execution.</li>
          <li>Critical for callbacks and async logic.</li>
        </ul>

        <h2>Variable Resolution</h2>
        <ul>
          <li>Search starts from current scope.</li>
          <li>Moves outward through parent scopes.</li>
          <li>Stops at global scope.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`let x = 10;

function outer() {
  let y = 20;

  function inner() {
    console.log(x + y);
  }

  return inner;
}

const fn = outer();
fn();`}
        </pre>

        <ul>
          <li>
            <code>inner()</code> remembers <code>x</code> and <code>y</code>.
          </li>
          <li>Scope is based on definition, not call site.</li>
        </ul>

        <h2>Common Misconceptions</h2>
        <ul>
          <li>Scope changes based on execution (false).</li>
          <li>Variables are copied into functions.</li>
          <li>Closures only work with functions.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            lexical scoping?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Scope
            resolution based on where code is written.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When is scope
            determined?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> At the time of
            function definition.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            JavaScript support dynamic scoping?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, JavaScript
            uses lexical scoping.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            closures related to lexical scoping?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Closures
            preserve lexical scope after execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            variables resolved?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Through the
            scope chain from inner to outer.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Lexical scoping defines variable access.</li>
          <li>Scope is fixed at definition time.</li>
          <li>Foundation of closures and scope chain.</li>
          <li>Essential for predictable JavaScript behavior.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 15,
    title: "Function Scope vs Block Scope",
    path: "/frontend/js/function-vs-block-scope",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>scope</strong> determines where variables can
          be accessed. The key difference between
          <strong> function scope</strong> and
          <strong> block scope</strong> depends on how variables are declared
          using
          <code> var</code>, <code>let</code>, and <code>const</code>.
        </p>

        <h2>Function Scope</h2>
        <ul>
          <li>
            Applies to variables declared with <code>var</code>.
          </li>
          <li>Accessible throughout the entire function.</li>
          <li>
            Ignores block boundaries like <code>if</code> and <code>for</code>.
          </li>
        </ul>

        <h2>Block Scope</h2>
        <ul>
          <li>
            Applies to <code>let</code> and <code>const</code>.
          </li>
          <li>
            Restricted to the nearest block <code>{}</code>.
          </li>
          <li>Prevents accidental variable access.</li>
        </ul>

        <h2>Hoisting Differences</h2>
        <ul>
          <li>
            <code>var</code> is hoisted and initialized as{" "}
            <code>undefined</code>.
          </li>
          <li>
            <code>let</code> and <code>const</code> are hoisted but
            uninitialized.
          </li>
          <li>
            Accessing <code>let</code>/<code>const</code> early triggers TDZ.
          </li>
        </ul>

        <h2>Temporal Dead Zone (TDZ)</h2>
        <ul>
          <li>
            Only affects <code>let</code> and <code>const</code>.
          </li>
          <li>Exists from block start to initialization.</li>
          <li>Improves safety and predictability.</li>
        </ul>

        <h2>Lifetime of Variables</h2>
        <ul>
          <li>
            <code>var</code> lives for entire function execution.
          </li>
          <li>
            <code>let</code>/<code>const</code> live only inside their block.
          </li>
          <li>Variables are garbage collected after scope ends.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

test();`}
        </pre>

        <ul>
          <li>
            <code>a</code> is function-scoped.
          </li>
          <li>
            <code>b</code> and <code>c</code> are block-scoped.
          </li>
        </ul>

        <h2>Common Pitfalls</h2>
        <ul>
          <li>
            Using <code>var</code> in loops unintentionally.
          </li>
          <li>Shadowing variables without realizing.</li>
          <li>Confusing TDZ with hoisting absence.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            function scope?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Scope limited
            to the function where var is declared.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is block
            scope?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Scope limited
            to the nearest block using let or const.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is let
            safer than var?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it
            respects block scope and avoids hoisting issues.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does var have
            TDZ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, var is
            initialized as undefined.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            var be avoided?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> In modern
            JavaScript, let and const are preferred.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>var → function-scoped.</li>
          <li>let/const → block-scoped.</li>
          <li>TDZ applies only to let and const.</li>
          <li>Understanding scope prevents bugs.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 16,
    title: "Parser & AST (Abstract Syntax Tree)",
    path: "/frontend/js/engine/parser-ast",
    explanation: (
      <>
        <p>
          The <strong>JavaScript Parser</strong> is responsible for converting
          human-readable JavaScript code into a structured format that the
          engine can understand. This structure is called the
          <strong> Abstract Syntax Tree (AST)</strong>.
        </p>

        <h2>What Is a Parser?</h2>
        <ul>
          <li>First step of JavaScript execution.</li>
          <li>Reads source code character by character.</li>
          <li>Ensures code follows JavaScript grammar.</li>
        </ul>

        <h2>Tokenization (Lexical Analysis)</h2>
        <ul>
          <li>Breaks code into meaningful tokens.</li>
          <li>
            Tokens include keywords, identifiers, operators, and literals.
          </li>
          <li>Ignores whitespace and comments.</li>
        </ul>

        <h2>Syntax Analysis</h2>
        <ul>
          <li>Validates token order against grammar rules.</li>
          <li>Detects syntax errors early.</li>
          <li>Ensures valid program structure.</li>
        </ul>

        <h2>AST (Abstract Syntax Tree)</h2>
        <ul>
          <li>Tree representation of source code.</li>
          <li>Each node represents a language construct.</li>
          <li>Preserves code structure, not formatting.</li>
        </ul>

        <h2>AST Node Types</h2>
        <ul>
          <li>Program</li>
          <li>FunctionDeclaration</li>
          <li>VariableDeclaration</li>
          <li>ExpressionStatement</li>
          <li>CallExpression</li>
        </ul>

        <h2>Code Validation</h2>
        <ul>
          <li>Parser throws syntax errors.</li>
          <li>Execution stops on invalid syntax.</li>
          <li>No AST is generated for invalid code.</li>
        </ul>

        <h2>Interpreter Input</h2>
        <ul>
          <li>AST is passed to the interpreter.</li>
          <li>Interpreter generates bytecode.</li>
          <li>Bytecode is executed or optimized by JIT.</li>
        </ul>

        <h2>Example</h2>
        <pre>{`let x = 5 + 10;`}</pre>

        <ul>
          <li>
            Tokens: <code>let</code>, <code>x</code>, <code>=</code>,{" "}
            <code>5</code>, <code>+</code>, <code>10</code>.
          </li>
          <li>AST nodes represent declaration reminding structure.</li>
        </ul>

        <h2>Why AST Matters</h2>
        <ul>
          <li>Used by compilers, linters, and bundlers.</li>
          <li>Enables static analysis.</li>
          <li>Supports code transformation.</li>
        </ul>

        <h2>Tools That Use AST</h2>
        <ul>
          <li>Babel</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>TypeScript</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does a
            JavaScript parser do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Converts
            source code into an AST after validation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            tokenization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Breaking
            source code into meaningful tokens.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            AST?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A tree
            structure representing program syntax.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is AST
            human-readable?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, but not
            meant to be manually written.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if parsing fails?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Execution
            stops with a syntax error.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Parser converts code into AST.</li>
          <li>Tokenization and syntax analysis come first.</li>
          <li>AST drives interpretation and optimization.</li>
          <li>Essential for JavaScript tooling.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 17,
    title: "Ignition Interpreter",
    path: "/frontend/js/engine/ignition",
    explanation: (
      <>
        <p>
          <strong>Ignition</strong> is the <strong>baseline interpreter</strong>{" "}
          of the V8 JavaScript engine. It executes JavaScript by interpreting
          <strong> bytecode</strong> generated from the Abstract Syntax Tree
          (AST).
        </p>

        <h2>What Is Ignition?</h2>
        <ul>
          <li>Baseline interpreter in V8.</li>
          <li>Executes bytecode instead of raw JavaScript.</li>
          <li>Designed for fast startup and low memory usage.</li>
        </ul>

        <h2>From AST to Bytecode</h2>
        <ul>
          <li>Parser creates the AST.</li>
          <li>AST is converted into bytecode.</li>
          <li>Bytecode is platform-independent.</li>
        </ul>

        <h2>Bytecode Execution</h2>
        <ul>
          <li>Ignition reads bytecode line by line.</li>
          <li>Each instruction performs a small operation.</li>
          <li>No heavy optimization at this stage.</li>
        </ul>

        <h2>Step-by-Step Interpretation</h2>
        <ul>
          <li>Instructions are executed sequentially.</li>
          <li>Uses registers to store intermediate values.</li>
          <li>Manages control flow (loops, conditions).</li>
        </ul>

        <h2>Baseline Performance</h2>
        <ul>
          <li>Fast initial execution.</li>
          <li>Lower memory footprint.</li>
          <li>Slower than optimized machine code.</li>
        </ul>

        <h2>Call Stack Integration</h2>
        <ul>
          <li>Each function call creates a stack frame.</li>
          <li>Frames are pushed and popped during execution.</li>
          <li>Works closely with the JavaScript call stack.</li>
        </ul>

        <h2>Microtask Handling</h2>
        <ul>
          <li>Microtasks are queued during execution.</li>
          <li>Executed after the current call stack is empty.</li>
          <li>Promises rely heavily on this mechanism.</li>
        </ul>

        <h2>Why Ignition Exists</h2>
        <ul>
          <li>Replaced the old Full-Codegen compiler.</li>
          <li>Better memory efficiency.</li>
          <li>Provides profiling data for optimization.</li>
        </ul>

        <h2>Relationship With TurboFan</h2>
        <ul>
          <li>Ignition executes code first.</li>
          <li>Hot code paths are detected.</li>
          <li>TurboFan optimizes frequently used code.</li>
        </ul>

        <h2>Example Flow</h2>
        <pre>
          {`function add(a, b) {
  return a + b;
}

add(2, 3);`}
        </pre>

        <ul>
          <li>AST is created.</li>
          <li>Bytecode is generated.</li>
          <li>Ignition executes bytecode.</li>
          <li>TurboFan may optimize later.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Ignition?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The baseline
            bytecode interpreter in the V8 engine.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does Ignition
            execute JavaScript directly?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it
            executes bytecode generated from AST.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why not
            compile directly to machine code?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Interpretation
            allows faster startup and profiling.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Ignition help optimization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It collects
            runtime feedback for TurboFan.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is Ignition
            faster than TurboFan?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, TurboFan
            generates faster optimized machine code.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Ignition is V8’s baseline interpreter.</li>
          <li>Executes bytecode step by step.</li>
          <li>Fast startup, low memory usage.</li>
          <li>Feeds optimization data to TurboFan.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 18,
    title: "TurboFan Compiler",
    path: "/frontend/js/engine/turbofan",
    explanation: (
      <>
        <p>
          <strong>TurboFan</strong> is the <strong>optimizing compiler</strong>{" "}
          in the V8 JavaScript engine. It takes frequently executed (
          <strong>hot</strong>) JavaScript code and compiles it into highly
          optimized <strong>machine code</strong> for maximum performance.
        </p>

        <h2>What Is TurboFan?</h2>
        <ul>
          <li>Optimizing compiler in V8.</li>
          <li>Works after Ignition interpreter.</li>
          <li>Produces fast native machine code.</li>
        </ul>

        <h2>Hot Code Detection</h2>
        <ul>
          <li>Ignition monitors execution frequency.</li>
          <li>Frequently executed functions are marked as hot.</li>
          <li>Hot code is sent to TurboFan.</li>
        </ul>

        <h2>Optimizing Compiler</h2>
        <ul>
          <li>Applies aggressive optimizations.</li>
          <li>Removes unnecessary checks.</li>
          <li>Reorders instructions for speed.</li>
        </ul>

        <h2>Machine Code Generation</h2>
        <ul>
          <li>Converts optimized IR into machine code.</li>
          <li>Machine code is CPU-specific.</li>
          <li>Executes faster than bytecode.</li>
        </ul>

        <h2>Inline Caching (IC)</h2>
        <ul>
          <li>Optimizes property access.</li>
          <li>Remembers object shapes.</li>
          <li>Avoids repeated lookup costs.</li>
        </ul>

        <h2>Type Specialization</h2>
        <ul>
          <li>Assumes stable data types.</li>
          <li>Removes dynamic type checks.</li>
          <li>Speeds up arithmetic and access.</li>
        </ul>

        <h2>Deoptimization Handling</h2>
        <ul>
          <li>Occurs when assumptions break.</li>
          <li>Falls back to Ignition.</li>
          <li>Ensures correctness over speed.</li>
        </ul>

        <h2>Why TurboFan Is Needed</h2>
        <ul>
          <li>JavaScript is dynamically typed.</li>
          <li>Optimizations require runtime data.</li>
          <li>Balances speed and flexibility.</li>
        </ul>

        <h2>Ignition vs TurboFan</h2>
        <ul>
          <li>Ignition: fast startup, bytecode execution.</li>
          <li>TurboFan: slower startup, faster execution.</li>
          <li>Both work together.</li>
        </ul>

        <h2>Example Flow</h2>
        <pre>
          {`function multiply(a, b) {
  return a * b;
}

for (let i = 0; i < 100000; i++) {
  multiply(2, 3);
}`}
        </pre>

        <ul>
          <li>Ignition executes initially.</li>
          <li>Function becomes hot.</li>
          <li>TurboFan compiles optimized code.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            TurboFan?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> V8’s
            optimizing compiler that generates machine code.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            TurboFan run?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When code
            becomes frequently executed (hot).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is type
            specialization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Optimizing
            code by assuming stable data types.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            deoptimization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reverting
            optimized code back to interpreter execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            TurboFan faster than Ignition?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It runs native
            machine code instead of bytecode.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>TurboFan compiles hot code.</li>
          <li>Uses runtime data for optimization.</li>
          <li>Generates fast machine code.</li>
          <li>Falls back safely when assumptions fail.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 19,
    title: "Bytecode Generation",
    path: "/frontend/js/engine/bytecode",
    explanation: (
      <>
        <p>
          <strong>Bytecode</strong> is an{" "}
          <strong>intermediate representation</strong>
          of JavaScript code used by the V8 engine. It sits between the
          <strong> Abstract Syntax Tree (AST)</strong> and optimized
          <strong> machine code</strong>, allowing fast execution and efficient
          optimization.
        </p>

        <h2>What Is Bytecode?</h2>
        <ul>
          <li>Low-level, platform-independent instructions.</li>
          <li>Easier to interpret than raw JavaScript.</li>
          <li>Designed for fast execution.</li>
        </ul>

        <h2>Why V8 Uses Bytecode</h2>
        <ul>
          <li>Reduces memory usage.</li>
          <li>Improves startup performance.</li>
          <li>Enables runtime optimization.</li>
        </ul>

        <h2>From AST to Bytecode</h2>
        <ul>
          <li>Parser builds the AST.</li>
          <li>AST is converted into bytecode.</li>
          <li>Bytecode is fed to Ignition.</li>
        </ul>

        <h2>Ignition Output</h2>
        <ul>
          <li>Ignition executes bytecode instructions.</li>
          <li>Uses registers instead of a stack.</li>
          <li>Tracks execution frequency.</li>
        </ul>

        <h2>Function Call Instructions</h2>
        <ul>
          <li>Dedicated bytecode for function calls.</li>
          <li>Handles argument passing.</li>
          <li>Manages return values.</li>
        </ul>

        <h2>Execution Efficiency</h2>
        <ul>
          <li>Compact instruction format.</li>
          <li>Minimizes decoding overhead.</li>
          <li>Improves cache locality.</li>
        </ul>

        <h2>Optimization Input</h2>
        <ul>
          <li>Collects runtime feedback.</li>
          <li>Feeds hot paths to TurboFan.</li>
          <li>Supports type specialization.</li>
        </ul>

        <h2>Bytecode vs Machine Code</h2>
        <ul>
          <li>Bytecode: interpreted, portable.</li>
          <li>Machine code: compiled, CPU-specific.</li>
          <li>Both are used at different stages.</li>
        </ul>

        <h2>Example Flow</h2>
        <pre>
          {`function square(x) {
  return x * x;
}

square(4);`}
        </pre>

        <ul>
          <li>AST is generated.</li>
          <li>Bytecode is created.</li>
          <li>Ignition executes bytecode.</li>
          <li>TurboFan optimizes if hot.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            bytecode in V8?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An
            intermediate representation executed by Ignition.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why not
            execute AST directly?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Bytecode is
            faster and more memory-efficient.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Who generates
            bytecode?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The V8 engine
            during compilation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            bytecode help optimization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Provides
            runtime feedback to TurboFan.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is bytecode
            CPU-dependent?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it is
            platform-independent.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Bytecode bridges AST and machine code.</li>
          <li>Executed by Ignition.</li>
          <li>Collects data for optimization.</li>
          <li>Key part of V8 performance pipeline.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 20,
    title: "Hidden Classes",
    path: "/frontend/js/engine/hidden-classes",
    explanation: (
      <>
        <p>
          <strong>Hidden Classes</strong> are internal V8 engine structures that
          optimize property access for JavaScript objects. They help V8
          transform dynamically typed objects into predictable shapes for
          <strong> fast property lookup</strong>.
        </p>

        <h2>What Are Hidden Classes?</h2>
        <ul>
          <li>Internal structures used by V8 to represent object layout.</li>
          <li>Each object shape corresponds to a hidden class.</li>
          <li>Allows inline cache optimizations.</li>
        </ul>

        <h2>Property Map</h2>
        <ul>
          <li>Maps property names to offsets in memory.</li>
          <li>Used for quick property retrieval.</li>
          <li>Updated when object structure changes.</li>
        </ul>

        <h2>Monomorphic vs Polymorphic Shapes</h2>
        <ul>
          <li>
            <strong>Monomorphic:</strong> Objects share the same hidden class.
          </li>
          <li>
            <strong>Polymorphic:</strong> Objects have different hidden classes.
          </li>
          <li>Monomorphic shapes allow better optimization.</li>
        </ul>

        <h2>Inline Cache Optimization</h2>
        <ul>
          <li>Stores last property access location.</li>
          <li>Speeds up repeated property lookups.</li>
          <li>Works efficiently with monomorphic objects.</li>
        </ul>

        <h2>Fast Property Access</h2>
        <ul>
          <li>Hidden classes convert dynamic access to offset-based access.</li>
          <li>Reduces time complexity from O(n) to O(1).</li>
          <li>Critical for performance in tight loops.</li>
        </ul>

        <h2>Example Flow</h2>
        <pre>
          {`function Point(x, y) {
  this.x = x;
  this.y = y;
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);`}
        </pre>

        <ul>
          <li>p1 and p2 share the same hidden class.</li>
          <li>
            Accessing <code>p1.x</code> or <code>p2.x</code> uses fast offset.
          </li>
          <li>Adding a new property later may create a new hidden class.</li>
        </ul>

        <h2>Why Hidden Classes Matter</h2>
        <ul>
          <li>JavaScript objects are dynamic.</li>
          <li>Hidden classes provide predictable memory layout.</li>
          <li>Supports TurboFan optimizations.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            hidden classes in V8?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Internal
            object structures that optimize property access.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do hidden
            classes help performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They allow
            fast property lookup via memory offsets.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            monomorphic object?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An object
            sharing the same hidden class as others.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            when object shape changes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A new hidden
            class is created, potentially slowing access.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are inline
            caches related?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They remember
            last property locations for fast access.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Hidden classes optimize JavaScript object property access.</li>
          <li>Monomorphic objects are fastest.</li>
          <li>Changes in structure may trigger new hidden classes.</li>
          <li>Critical for TurboFan and overall V8 performance.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 21,
    title: "Inline Caching",
    path: "/frontend/js/engine/inline-caching",
    explanation: (
      <>
        <p>
          <strong>Inline Caching (IC)</strong> is a V8 optimization technique
          that stores results of property and method lookups to speed up
          repeated access. IC works closely with <strong>hidden classes</strong>{" "}
          and leverages monomorphic or polymorphic object shapes for
          performance.
        </p>

        <h2>What Is Inline Caching?</h2>
        <ul>
          <li>Stores the location of properties/methods in memory.</li>
          <li>Reduces repeated lookup cost for the same object type.</li>
          <li>Closely tied to hidden classes.</li>
        </ul>

        <h2>Monomorphic vs Polymorphic ICs</h2>
        <ul>
          <li>
            <strong>Monomorphic:</strong> Same hidden class repeated → very
            fast.
          </li>
          <li>
            <strong>Polymorphic:</strong> Multiple hidden classes → slightly
            slower.
          </li>
          <li>
            Megamorphic: many hidden classes → fallback to generic lookup.
          </li>
        </ul>

        <h2>How IC Speeds Up Access</h2>
        <ul>
          <li>Caches property offsets after first access.</li>
          <li>Subsequent accesses avoid full property map traversal.</li>
          <li>
            Improves performance in loops and frequently called functions.
          </li>
        </ul>

        <h2>Type Specialization</h2>
        <ul>
          <li>IC assumes consistent data types for variables.</li>
          <li>Enables TurboFan to generate type-specific optimized code.</li>
          <li>Breaks assumptions → deoptimization occurs.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function getX(obj) {
  return obj.x;
}

let p1 = {x: 10};
let p2 = {x: 20};

console.log(getX(p1));
console.log(getX(p2));`}
        </pre>

        <ul>
          <li>p1 and p2 share the same hidden class → monomorphic IC.</li>
          <li>
            Accessing <code>x</code> uses cached offset → very fast.
          </li>
          <li>
            Adding new property changes hidden class → IC may become
            polymorphic.
          </li>
        </ul>

        <h2>Why Inline Caching Matters</h2>
        <ul>
          <li>Optimizes property and method access.</li>
          <li>Reduces dynamic lookup overhead.</li>
          <li>Works with TurboFan for aggressive machine code optimization.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is inline
            caching in V8?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A mechanism to
            cache property/method access results for faster repeated lookups.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does it
            relate to hidden classes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> IC uses hidden
            classes to know object shape and memory offsets.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between monomorphic and polymorphic IC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Monomorphic →
            one hidden class, very fast; Polymorphic → multiple hidden classes,
            slightly slower.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            when assumptions break?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Deoptimization
            occurs and execution falls back to Ignition.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is IC
            important for TurboFan?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Provides
            runtime type/property info for optimized machine code generation.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>IC caches property/method locations.</li>
          <li>Monomorphic IC is fastest, polymorphic is slower.</li>
          <li>Helps TurboFan generate optimized code.</li>
          <li>Breaks in assumptions trigger deoptimization.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 22,
    title: "Deoptimization",
    path: "/frontend/js/engine/deoptimization",
    explanation: (
      <>
        <p>
          <strong>Deoptimization</strong> occurs when runtime assumptions made
          by TurboFan fail. Optimized machine code is reverted back to baseline
          execution (Ignition bytecode) to ensure correctness. This process is
          also called a <strong>bailout</strong>.
        </p>

        <h2>What Is Deoptimization?</h2>
        <ul>
          <li>Reverts optimized code to interpreted bytecode.</li>
          <li>Ensures program correctness when assumptions fail.</li>
          <li>
            Triggered by type changes, hidden class changes, or IC invalidation.
          </li>
        </ul>

        <h2>Bailouts</h2>
        <ul>
          <li>TurboFan may insert bailout points in optimized code.</li>
          <li>If runtime check fails, execution jumps to Ignition.</li>
          <li>Collects new runtime information for re-optimization.</li>
        </ul>

        <h2>Impact on Performance</h2>
        <ul>
          <li>Temporary slowdown due to fallback to interpreter.</li>
          <li>Allows safe handling of dynamic code.</li>
          <li>
            Subsequent hot paths may be re-optimized with updated assumptions.
          </li>
        </ul>

        <h2>Why Deoptimization Happens</h2>
        <ul>
          <li>Object type changes (polymorphic transition).</li>
          <li>Property added or removed, altering hidden classes.</li>
          <li>Unexpected values violating type specialization.</li>
          <li>Inline cache assumptions fail.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function add(a, b) {
  return a + b;
}

add(2, 3); // optimized
add("hi", " world"); // deoptimization occurs`}
        </pre>

        <ul>
          <li>First call triggers TurboFan optimization (numbers).</li>
          <li>Second call violates type assumptions → bailout.</li>
          <li>Execution falls back to Ignition until assumptions stabilize.</li>
        </ul>

        <h2>TurboFan Behavior</h2>
        <ul>
          <li>Marks hot code with runtime feedback.</li>
          <li>Optimizes based on observed types and shapes.</li>
          <li>Deoptimizes when unexpected types or structures occur.</li>
          <li>Ensures correctness while still aiming for performance.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            deoptimization in V8?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reverting
            optimized code back to baseline execution when assumptions fail.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What triggers
            a bailout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Type changes,
            hidden class changes, or inline cache invalidation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            deoptimization break correctness?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it ensures
            correct program execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            TurboFan handle repeated deoptimizations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It collects
            runtime feedback and may re-optimize with updated assumptions.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Impact of
            deoptimization on performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Temporary
            slowdown, but ensures safety and correctness.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Deoptimization = fallback to baseline code.</li>
          <li>Triggered when runtime assumptions fail.</li>
          <li>
            Ensures program correctness while maintaining optimization feedback.
          </li>
          <li>Integral part of TurboFan and V8 performance pipeline.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 23,
    title: "Garbage Collection (Mark & Sweep)",
    path: "/frontend/js/engine/gc-mark-sweep",
    explanation: (
      <>
        <p>
          <strong>Garbage Collection (GC)</strong> in JavaScript automatically
          frees memory by identifying objects that are no longer reachable.
          <strong>Mark & Sweep</strong> is one of the fundamental GC algorithms
          used in V8 to manage memory efficiently.
        </p>

        <h2>What Is Mark & Sweep?</h2>
        <ul>
          <li>Two-phase algorithm: mark phase and sweep phase.</li>
          <li>Identifies live objects and removes unreachable ones.</li>
          <li>Helps prevent memory leaks and excessive memory usage.</li>
        </ul>

        <h2>Mark Phase</h2>
        <ul>
          <li>
            Traverse the object graph from roots (global objects, stack
            variables).
          </li>
          <li>Mark all reachable objects as live.</li>
          <li>Unmarked objects are candidates for deletion.</li>
        </ul>

        <h2>Sweep Phase</h2>
        <ul>
          <li>Iterate through all allocated memory.</li>
          <li>Delete unmarked/unreachable objects.</li>
          <li>Free memory back to the system.</li>
        </ul>

        <h2>Incremental vs Full GC</h2>
        <ul>
          <li>
            <strong>Full GC:</strong> Stops the world, collects all unreachable
            objects.
          </li>
          <li>
            <strong>Incremental GC:</strong> Breaks collection into small chunks
            to avoid long pauses.
          </li>
          <li>Incremental GC improves application responsiveness.</li>
        </ul>

        <h2>Impact on Performance</h2>
        <ul>
          <li>Frequent GC can cause CPU overhead.</li>
          <li>Full GC may introduce noticeable pause in execution.</li>
          <li>Optimizations like generational GC reduce impact.</li>
        </ul>

        <h2>Memory Freeing Strategy</h2>
        <ul>
          <li>Keep track of object references.</li>
          <li>Automatically reclaim memory for unreachable objects.</li>
          <li>
            Combines with other strategies like generational collection for
            efficiency.
          </li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`let obj1 = { name: "A" };
let obj2 = { name: "B" };
obj1.ref = obj2;
obj2.ref = obj1;

// Later
obj1 = null;
obj2 = null; // Mark & Sweep will free both objects if unreachable`}
        </pre>

        <h2>Why Mark & Sweep Matters</h2>
        <ul>
          <li>Automatically manages memory in JS.</li>
          <li>Prevents memory leaks from unused objects.</li>
          <li>Ensures efficient long-running applications.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is Mark &
            Sweep GC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A GC algorithm
            that marks reachable objects and sweeps unreferenced objects to free
            memory.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between incremental and full GC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Full GC stops
            execution and collects all garbage; incremental GC collects in small
            steps to avoid long pauses.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does Mark
            phase work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Traverses
            object graph from roots and marks all reachable objects as live.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does Sweep
            phase work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Iterates over
            memory and frees unmarked/unreachable objects.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is GC
            important in JS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Automatically
            manages memory, prevents leaks, and ensures efficient execution.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Mark & Sweep identifies live objects and removes unreachable ones.
          </li>
          <li>Incremental GC reduces pause times.</li>
          <li>Crucial for performance in long-running applications.</li>
          <li>Forms the foundation of modern V8 garbage collection.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 24,
    title: "Generational Garbage Collection",
    path: "/frontend/js/engine/gc-generational",
    explanation: (
      <>
        <p>
          <strong>Generational Garbage Collection</strong> is a memory
          management strategy used by V8 based on the observation that
          <strong> most objects die young</strong>. Memory is divided into
          generations to make garbage collection faster and more efficient.
        </p>

        <h2>Core Idea</h2>
        <ul>
          <li>Most objects are short-lived.</li>
          <li>Few objects survive for a long time.</li>
          <li>Collect young objects more frequently.</li>
        </ul>

        <h2>Memory Spaces in V8</h2>
        <ul>
          <li>
            <strong>New Space (Young Generation)</strong> – short-lived objects.
          </li>
          <li>
            <strong>Old Space (Old Generation)</strong> – long-lived objects.
          </li>
          <li>Objects move between spaces based on lifetime.</li>
        </ul>

        <h2>New Space (Young Generation)</h2>
        <ul>
          <li>Stores newly created objects.</li>
          <li>Uses fast allocation.</li>
          <li>Collected frequently.</li>
        </ul>

        <h2>Minor GC</h2>
        <ul>
          <li>Runs on the young generation.</li>
          <li>Very fast and frequent.</li>
          <li>Uses copying (Scavenger) algorithm.</li>
        </ul>

        <h2>Old Space (Old Generation)</h2>
        <ul>
          <li>Holds objects that survive multiple GCs.</li>
          <li>Objects are considered stable.</li>
          <li>Collected less frequently.</li>
        </ul>

        <h2>Major GC</h2>
        <ul>
          <li>Runs on the old generation.</li>
          <li>Uses Mark & Sweep / Mark & Compact.</li>
          <li>More expensive than Minor GC.</li>
        </ul>

        <h2>Promotion Rules</h2>
        <ul>
          <li>Objects surviving multiple Minor GCs are promoted.</li>
          <li>Promotion moves objects from New Space to Old Space.</li>
          <li>Reduces repeated scanning of long-lived objects.</li>
        </ul>

        <h2>Why Generational GC Is Efficient</h2>
        <ul>
          <li>Most garbage collected in young generation.</li>
          <li>Small memory size → faster collection.</li>
          <li>Old generation collected rarely.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function createTemp() {
  let temp = { value: 123 };
  return temp;
}

createTemp();`}
        </pre>

        <ul>
          <li>
            <code>temp</code> is allocated in New Space.
          </li>
          <li>Becomes unreachable quickly.</li>
          <li>Collected by Minor GC.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Generational Garbage Collection?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A GC strategy
            that separates objects by age to improve performance.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are there
            two generations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because most
            objects are short-lived and can be collected quickly.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is Minor
            GC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Garbage
            collection of the young generation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is Major
            GC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Garbage
            collection of the old generation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            promotion happen?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When objects
            survive multiple Minor GC cycles.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Generational GC separates objects by lifetime.</li>
          <li>Young generation is collected frequently.</li>
          <li>Old generation is collected less often.</li>
          <li>Improves overall GC efficiency and performance.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 25,
    title: "Memory Management in V8",
    path: "/frontend/js/engine/memory-management",
    explanation: (
      <>
        <p>
          <strong>Memory Management in V8</strong> refers to how the JavaScript
          engine allocates, uses, optimizes, and frees memory during program
          execution to ensure high performance and low memory overhead.
        </p>

        <h2>Stack vs Heap</h2>
        <ul>
          <li>
            <strong>Stack</strong> stores primitive values and function call
            frames.
          </li>
          <li>
            <strong>Heap</strong> stores objects, arrays, and reference types.
          </li>
          <li>Stack memory is fast and automatically managed.</li>
          <li>Heap memory is dynamic and managed by Garbage Collection.</li>
        </ul>

        <h2>Stack Memory</h2>
        <ul>
          <li>Used for execution context storage.</li>
          <li>Stores local variables and function parameters.</li>
          <li>Memory is released when the function exits.</li>
          <li>Uses LIFO (Last In, First Out).</li>
        </ul>

        <h2>Heap Memory</h2>
        <ul>
          <li>Stores objects and closures.</li>
          <li>Allows dynamic memory allocation.</li>
          <li>Managed by V8’s Garbage Collector.</li>
          <li>Objects live as long as they are reachable.</li>
        </ul>

        <h2>Heap Allocation</h2>
        <ul>
          <li>New objects are allocated in the young generation.</li>
          <li>Fast allocation using pointer bumping.</li>
          <li>Long-lived objects are promoted to old generation.</li>
        </ul>

        <h2>Object Lifetimes</h2>
        <ul>
          <li>Short-lived objects die quickly.</li>
          <li>Long-lived objects survive multiple GC cycles.</li>
          <li>Lifetime determines which memory space is used.</li>
        </ul>

        <h2>Garbage Collection</h2>
        <ul>
          <li>Automatically frees unreachable memory.</li>
          <li>Uses Mark & Sweep and Generational GC.</li>
          <li>Prevents memory leaks.</li>
        </ul>

        <h2>Memory Fragmentation</h2>
        <ul>
          <li>Occurs when free memory is split into small blocks.</li>
          <li>Can reduce allocation efficiency.</li>
          <li>Handled using compaction in Major GC.</li>
        </ul>

        <h2>Pointer Tracking</h2>
        <ul>
          <li>V8 tracks references between objects.</li>
          <li>Used during marking phase.</li>
          <li>Helps determine reachability.</li>
        </ul>

        <h2>Optimization Strategies</h2>
        <ul>
          <li>Generational memory separation.</li>
          <li>Inline caching for fast access.</li>
          <li>Hidden classes for object layout optimization.</li>
          <li>Escape analysis to reduce heap allocations.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function demo() {
  let x = 10;            // stack
  let obj = { a: 1 };   // heap
  return obj;
}

demo();`}
        </pre>

        <ul>
          <li>
            <code>x</code> is stored on the stack.
          </li>
          <li>
            <code>obj</code> is allocated on the heap.
          </li>
          <li>Heap memory is freed when unreachable.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is memory
            management in V8?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The process of
            allocating, tracking, optimizing, and freeing memory during JS
            execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between stack and heap?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Stack stores
            primitives and call frames, heap stores objects and references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does V8
            free memory?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using
            automatic garbage collection.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What causes
            memory fragmentation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Repeated
            allocation and deallocation of objects of varying sizes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does V8
            optimize memory usage?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using
            generational GC, hidden classes, inline caching, and compaction.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Stack is fast and short-lived.</li>
          <li>Heap is dynamic and GC-managed.</li>
          <li>Garbage collection prevents memory leaks.</li>
          <li>V8 uses multiple optimization strategies.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 26,
    title: "Memory Stack",
    path: "/frontend/js/memory/stack",
    explanation: (
      <>
        <p>
          <strong>Memory Stack</strong> is a region of memory used to store
          primitive values, function call frames, and execution context data
          during JavaScript program execution.
        </p>

        <h2>What Is Stored in the Stack</h2>
        <ul>
          <li>Primitive values (number, string, boolean, null, undefined).</li>
          <li>Function call frames.</li>
          <li>Local variables and parameters.</li>
          <li>Execution context metadata.</li>
        </ul>

        <h2>LIFO Order</h2>
        <ul>
          <li>Stack follows Last In, First Out (LIFO).</li>
          <li>Most recent function call is executed first.</li>
          <li>Frames are pushed and popped automatically.</li>
        </ul>

        <h2>Function Call Frames</h2>
        <ul>
          <li>Each function call creates a new stack frame.</li>
          <li>Frame stores local variables and arguments.</li>
          <li>Removed when function execution completes.</li>
        </ul>

        <h2>Execution Context Management</h2>
        <ul>
          <li>Global execution context is created first.</li>
          <li>Function execution contexts are stacked.</li>
          <li>Managed entirely via the call stack.</li>
        </ul>

        <h2>Call Stack Overflow</h2>
        <ul>
          <li>Occurs when stack memory limit is exceeded.</li>
          <li>Commonly caused by infinite recursion.</li>
          <li>Throws “Maximum call stack size exceeded”.</li>
        </ul>

        <h2>Why Stack Is Fast</h2>
        <ul>
          <li>Fixed-size memory allocation.</li>
          <li>No garbage collection required.</li>
          <li>Direct memory access.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function first() {
  let a = 10;
  second();
}

function second() {
  let b = 20;
}

first();`}
        </pre>

        <ul>
          <li>
            <code>first()</code> frame is pushed to the stack.
          </li>
          <li>
            <code>second()</code> frame is pushed on top.
          </li>
          <li>Frames are popped after execution.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            memory stack?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A memory
            region that stores function call frames and primitive values.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does the
            stack use LIFO?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because the
            most recent function call must finish before returning to the
            previous one.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What causes
            call stack overflow?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Excessive or
            infinite function calls exceeding stack size.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is garbage
            collection needed for stack memory?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, stack
            memory is automatically freed when functions return.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is stored
            in a stack frame?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Local
            variables, parameters, and execution context data.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Stack stores execution contexts and primitives.</li>
          <li>Uses LIFO execution order.</li>
          <li>Fast and automatically managed.</li>
          <li>Limited in size.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 27,
    title: "Memory Heap",
    path: "/frontend/js/memory/heap",
    explanation: (
      <>
        <p>
          <strong>Memory Heap</strong> is a large, dynamically allocated region
          of memory used to store objects, arrays, functions, and closures in
          JavaScript. Unlike the stack, heap memory is managed by the JavaScript
          engine using garbage collection.
        </p>

        <h2>What Is Stored in the Heap</h2>
        <ul>
          <li>Objects and object literals.</li>
          <li>Arrays and nested data structures.</li>
          <li>Functions and closures.</li>
          <li>Dynamically allocated memory.</li>
        </ul>

        <h2>Dynamic Allocation</h2>
        <ul>
          <li>Memory is allocated at runtime.</li>
          <li>Size is not fixed.</li>
          <li>Objects can grow or shrink.</li>
          <li>Managed automatically by the engine.</li>
        </ul>

        <h2>Reference Tracking</h2>
        <ul>
          <li>Heap memory is accessed via references.</li>
          <li>Variables on stack point to heap addresses.</li>
          <li>Unused references make objects eligible for GC.</li>
        </ul>

        <h2>Garbage Collection</h2>
        <ul>
          <li>Removes unreachable objects.</li>
          <li>Uses algorithms like Mark & Sweep.</li>
          <li>Prevents memory leaks.</li>
          <li>Runs automatically.</li>
        </ul>

        <h2>Memory Fragmentation</h2>
        <ul>
          <li>Occurs when free memory is scattered.</li>
          <li>Reduces allocation efficiency.</li>
          <li>Handled internally by V8 compaction.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`let user = {
  name: "Alex",
  age: 25
};

let arr = [1, 2, 3];`}
        </pre>

        <ul>
          <li>
            <code>user</code> and <code>arr</code> are stored in heap.
          </li>
          <li>Variables hold references to heap memory.</li>
          <li>When references are removed, GC frees memory.</li>
        </ul>

        <h2>Heap vs Stack</h2>
        <ul>
          <li>Heap stores complex data structures.</li>
          <li>Stack stores primitive values and references.</li>
          <li>Heap is slower but flexible.</li>
          <li>Stack is fast but limited.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is memory
            heap in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A memory
            region that stores objects, arrays, and functions dynamically.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Who manages
            heap memory?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The JavaScript
            engine using garbage collection.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is heap
            slower than stack?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it
            involves dynamic allocation and garbage collection.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What causes
            memory leaks in heap?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Retained
            references to unused objects.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does GC
            know what to clean?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By checking
            object reachability via references.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Heap stores objects and dynamic data.</li>
          <li>Managed by garbage collection.</li>
          <li>Uses references from stack.</li>
          <li>Essential for complex JavaScript programs.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 28,
    title: "Call Stack Frame Layout",
    path: "/frontend/js/memory/call-stack-frame",
    explanation: (
      <>
        <p>
          A <strong>Call Stack Frame</strong> is a structured block of memory
          created for each function invocation. It stores all information needed
          to execute a function and return control to the caller.
        </p>

        <h2>What Is Stored in a Call Stack Frame?</h2>
        <ul>
          <li>Return address (where execution resumes).</li>
          <li>Execution context information.</li>
          <li>Local variables.</li>
          <li>Function arguments.</li>
          <li>
            <code>this</code> binding.
          </li>
        </ul>

        <h2>Why Call Stack Frames Are Needed</h2>
        <ul>
          <li>To isolate function executions.</li>
          <li>To track where to return after a function finishes.</li>
          <li>To maintain correct variable scope.</li>
          <li>To support nested and recursive function calls.</li>
        </ul>

        <h2>Benefits of Call Stack Frames</h2>
        <ul>
          <li>Prevents variable collision between functions.</li>
          <li>Ensures predictable execution flow.</li>
          <li>Allows recursion and deep call hierarchies.</li>
          <li>Enables fast memory allocation and cleanup.</li>
        </ul>

        <h2>Frame Creation & Destruction</h2>
        <ul>
          <li>A frame is created when a function is called.</li>
          <li>Pushed onto the call stack.</li>
          <li>Popped when the function returns.</li>
          <li>Memory is released immediately.</li>
        </ul>

        <h2>How Execution Uses Frames</h2>
        <ul>
          <li>Top frame is always the currently executing function.</li>
          <li>Lower frames wait until higher ones finish.</li>
          <li>Return address restores previous execution.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Hello");
}

a();`}
        </pre>

        <ul>
          <li>
            Frame for <code>a()</code> is created.
          </li>
          <li>
            Frame for <code>b()</code> is pushed on top.
          </li>
          <li>
            Frame for <code>c()</code> is pushed next.
          </li>
          <li>Frames are popped in reverse order.</li>
        </ul>

        <h2>Relation to Execution Context</h2>
        <ul>
          <li>Each frame corresponds to one execution context.</li>
          <li>Stores variable and lexical environments.</li>
          <li>
            Maintains <code>this</code> value.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a call
            stack frame?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A memory
            structure that stores all information required to execute a
            function.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is return
            address important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It tells the
            engine where to resume execution after the function finishes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            to a stack frame after function execution?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is popped
            from the stack and memory is freed immediately.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            recursion use stack frames?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Each recursive
            call creates a new stack frame with its own variables.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are stack
            frames fast?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They use
            fixed-size, sequential memory allocation.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Stack frames store execution data per function call.</li>
          <li>Essential for function isolation and flow control.</li>
          <li>Created and destroyed automatically.</li>
          <li>Fundamental to JavaScript execution.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 29,
    title: "Closures Memory Retention",
    path: "/frontend/js/memory/closures-retention",
    explanation: (
      <>
        <p>
          <strong>Closures Memory Retention</strong> refers to how closures keep
          references to variables from their outer lexical scope, preventing
          those variables from being garbage collected as long as the closure
          exists.
        </p>

        <h2>What Is Retained by a Closure?</h2>
        <ul>
          <li>Variables from outer lexical scopes.</li>
          <li>Function parameters of parent functions.</li>
          <li>References to objects and arrays.</li>
          <li>Entire lexical environment if referenced.</li>
        </ul>

        <h2>Why Closures Retain Memory</h2>
        <ul>
          <li>Functions remember the scope where they were created.</li>
          <li>Lexical scoping requires access to outer variables.</li>
          <li>Garbage collector sees retained references as reachable.</li>
          <li>Ensures correct behavior of nested functions.</li>
        </ul>

        <h2>Benefits of Closure Memory Retention</h2>
        <ul>
          <li>Enables data encapsulation.</li>
          <li>Preserves state between function calls.</li>
          <li>Supports functional programming patterns.</li>
          <li>Allows private variables.</li>
        </ul>

        <h2>Memory Retention Risks</h2>
        <ul>
          <li>Unintentional memory leaks.</li>
          <li>Long-lived closures holding large objects.</li>
          <li>Event listeners capturing unused variables.</li>
          <li>Detached DOM nodes retained via closures.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();`}
        </pre>

        <ul>
          <li>
            <code>count</code> remains in memory.
          </li>
          <li>Closure keeps reference to its lexical environment.</li>
          <li>
            GC cannot collect <code>count</code> while <code>counter</code>{" "}
            exists.
          </li>
        </ul>

        <h2>Common Memory Retention Patterns</h2>
        <ul>
          <li>Closures stored in global scope.</li>
          <li>Callbacks stored in long-lived objects.</li>
          <li>Timers and intervals capturing variables.</li>
          <li>Event handlers not removed.</li>
        </ul>

        <h2>Best Practices to Avoid Memory Leaks</h2>
        <ul>
          <li>Remove event listeners when no longer needed.</li>
          <li>Clear intervals and timeouts.</li>
          <li>Avoid capturing unnecessary variables.</li>
          <li>
            Set unused references to <code>null</code>.
          </li>
          <li>Prefer local scopes over globals.</li>
        </ul>

        <h2>Relation to Garbage Collection</h2>
        <ul>
          <li>GC checks reachability, not variable usage.</li>
          <li>Closures keep variables reachable.</li>
          <li>Unreferenced closures are collected.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do
            closures retain memory?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            keep references to their outer lexical environment.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are closures
            memory leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, but they
            can cause leaks if misused.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can
            closures prevent garbage collection?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By keeping
            variables reachable through references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to fix
            closure-related memory leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Remove
            listeners, clear timers, and avoid unnecessary captured variables.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Do closures
            keep the entire scope?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Only the
            variables that are referenced.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Closures retain outer scope variables.</li>
          <li>Essential for state and encapsulation.</li>
          <li>Can cause memory leaks if unmanaged.</li>
          <li>Understanding GC reachability is key.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 30,
    title: "Reference Holding in JavaScript",
    path: "/frontend/js/memory/reference-holding",
    explanation: (
      <>
        <p>
          <strong>Reference Holding in JavaScript</strong> means that objects,
          arrays, and functions are not stored directly in variables. Instead,
          variables store references (pointers) to locations in memory where
          these values exist.
        </p>

        <h2>What Is Reference Holding?</h2>
        <ul>
          <li>Objects are stored in heap memory.</li>
          <li>Variables hold references, not actual data.</li>
          <li>Multiple variables can point to the same object.</li>
          <li>Changes via one reference affect all others.</li>
        </ul>

        <h2>Why JavaScript Uses References</h2>
        <ul>
          <li>Avoids expensive copying of large objects.</li>
          <li>Improves performance and memory efficiency.</li>
          <li>Allows shared access to complex data.</li>
          <li>Enables mutation and state updates.</li>
        </ul>

        <h2>Benefits of Reference Holding</h2>
        <ul>
          <li>Efficient memory usage.</li>
          <li>Fast data sharing between functions.</li>
          <li>Supports object-oriented patterns.</li>
          <li>Reduces unnecessary allocations.</li>
        </ul>

        <h2>Shared References</h2>
        <ul>
          <li>Two variables can reference the same object.</li>
          <li>Mutating through one affects the other.</li>
          <li>Common source of bugs if misunderstood.</li>
        </ul>

        <h2>Example: Shared Reference</h2>
        <pre>
          {`let user1 = { name: "Alex" };
let user2 = user1;

user2.name = "John";`}
        </pre>

        <ul>
          <li>
            <code>user1</code> and <code>user2</code> point to the same object.
          </li>
          <li>
            Changing <code>user2</code> affects <code>user1</code>.
          </li>
        </ul>

        <h2>Shallow Copy</h2>
        <ul>
          <li>Copies only the top-level reference.</li>
          <li>Nested objects remain shared.</li>
          <li>
            Created using spread operator or <code>Object.assign</code>.
          </li>
        </ul>

        <pre>
          {`const obj1 = { a: 1, nested: { b: 2 } };
const obj2 = { ...obj1 };

obj2.nested.b = 99;`}
        </pre>

        <h2>Deep Copy</h2>
        <ul>
          <li>Creates completely independent copies.</li>
          <li>No shared references.</li>
          <li>Prevents unintended mutations.</li>
        </ul>

        <h2>Implications on Memory Management</h2>
        <ul>
          <li>Objects remain in memory as long as references exist.</li>
          <li>Unreleased references prevent garbage collection.</li>
          <li>Can cause memory leaks if not managed.</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Be cautious with shared references.</li>
          <li>Use deep copy when immutability is required.</li>
          <li>Clear references when objects are no longer needed.</li>
          <li>Avoid mutating shared state unintentionally.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            objects stored in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Objects are
            stored in heap memory and accessed via references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            when you assign one object to another?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Both variables
            reference the same object.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between shallow and deep copy?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Shallow copy
            shares nested references, deep copy does not.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            references affect garbage collection?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Objects are
            not collected as long as references exist.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why can shared
            references cause bugs?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Mutations
            through one reference affect all references.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Objects are accessed via references.</li>
          <li>Reference holding improves performance.</li>
          <li>Shared references require careful handling.</li>
          <li>Understanding copies is crucial for safe code.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 31,
    title: "Garbage Collection Phases",
    path: "/frontend/js/memory/gc-phases",
    explanation: (
      <>
        <p>
          <strong>Garbage Collection Phases</strong> describe how JavaScript
          engines automatically identify unused memory and free it to optimize
          performance and prevent memory leaks.
        </p>

        <h2>What Is Garbage Collection?</h2>
        <ul>
          <li>Automatic memory management process.</li>
          <li>Frees memory that is no longer reachable.</li>
          <li>Handled internally by the JS engine.</li>
          <li>Prevents memory exhaustion.</li>
        </ul>

        <h2>Why Garbage Collection Is Needed</h2>
        <ul>
          <li>JavaScript uses dynamic memory allocation.</li>
          <li>Developers do not manually free memory.</li>
          <li>Prevents memory leaks and crashes.</li>
          <li>Ensures stable long-running applications.</li>
        </ul>

        <h2>Benefits of Garbage Collection</h2>
        <ul>
          <li>Reduces developer responsibility.</li>
          <li>Improves application reliability.</li>
          <li>Optimizes memory usage.</li>
          <li>Prevents dangling pointers.</li>
        </ul>

        <h2>Main Garbage Collection Phases</h2>

        <h3>1. Mark-and-Sweep</h3>
        <ul>
          <li>Marks all reachable objects.</li>
          <li>Unmarked objects are considered garbage.</li>
          <li>Sweeps and frees unused memory.</li>
          <li>Most common GC strategy.</li>
        </ul>

        <h3>2. Reference Counting</h3>
        <ul>
          <li>Tracks number of references to objects.</li>
          <li>Object freed when count reaches zero.</li>
          <li>Fails with circular references.</li>
          <li>Rarely used alone in modern engines.</li>
        </ul>

        <h3>3. Generational Garbage Collection</h3>
        <ul>
          <li>Separates memory into young and old generations.</li>
          <li>Young objects collected more frequently.</li>
          <li>Improves GC efficiency.</li>
        </ul>

        <h3>4. Incremental Garbage Collection</h3>
        <ul>
          <li>Breaks GC work into small chunks.</li>
          <li>Reduces UI blocking.</li>
          <li>Runs alongside application execution.</li>
        </ul>

        <h3>5. Compacting Garbage Collection</h3>
        <ul>
          <li>This method moves things so they sit close to each other.</li>
          <li>It removes empty spaces left behind.</li>
          <li>This helps the computer use space better.</li>
          <li>It is often used along with another cleaning method.</li>
        </ul>

        <h2>Memory Freeing Strategies</h2>
        <ul>
          <li>Immediate cleanup of unreachable objects.</li>
          <li>Deferred cleanup during idle time.</li>
          <li>Promotion of long-lived objects.</li>
          <li>Heap compaction.</li>
        </ul>

        <h2>JS Engine Optimizations</h2>
        <ul>
          <li>Uses reachability instead of reference counting.</li>
          <li>Optimizes GC based on allocation patterns.</li>
          <li>Minimizes pause times.</li>
          <li>Balances performance and memory safety.</li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`let obj = { name: "JS" };
obj = null;`}
        </pre>

        <ul>
          <li>Object becomes unreachable.</li>
          <li>Marked as garbage.</li>
          <li>Memory freed during GC cycle.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            main purpose of garbage collection?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To
            automatically free unused memory.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which GC
            strategy does JavaScript mainly use?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Mark-and-sweep
            with generational optimizations.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            reference counting insufficient?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It cannot
            handle circular references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            incremental GC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> GC that runs
            in small steps to reduce blocking.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is heap
            compaction important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It reduces
            fragmentation and improves allocation speed.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>GC is automatic memory cleanup.</li>
          <li>Mark-and-sweep is the core strategy.</li>
          <li>Modern engines use generational and incremental GC.</li>
          <li>Optimized for performance and safety.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 32,
    title: "Memory Leak: Global Leaks",
    path: "/frontend/js/memory/global-leaks",
    explanation: (
      <>
        <p>
          <strong>Global Memory Leaks</strong> occur when variables or objects
          are unintentionally attached to the global scope, making them live for
          the entire lifetime of the application and preventing garbage
          collection.
        </p>

        <h2>What Are Global Memory Leaks?</h2>
        <ul>
          <li>Variables unintentionally created in global scope.</li>
          <li>
            Objects attached to <code>window</code> (or <code>globalThis</code>
            ).
          </li>
          <li>Globals persist until the page or app is closed.</li>
          <li>GC cannot collect global references.</li>
        </ul>

        <h2>Why Global Leaks Happen</h2>
        <ul>
          <li>
            Missing <code>let</code>, <code>const</code>, or <code>var</code>.
          </li>
          <li>
            Accidentally attaching data to <code>window</code>.
          </li>
          <li>Debug variables left in production.</li>
          <li>Libraries polluting global namespace.</li>
        </ul>

        <h2>Why Global Leaks Are Dangerous</h2>
        <ul>
          <li>Memory grows continuously.</li>
          <li>Objects are never released.</li>
          <li>Long-running apps slow down.</li>
          <li>Hard to detect in large codebases.</li>
        </ul>

        <h2>Impact on Performance</h2>
        <ul>
          <li>Increased memory usage.</li>
          <li>More frequent GC cycles.</li>
          <li>UI lag and slow responsiveness.</li>
          <li>Potential browser crashes.</li>
        </ul>

        <h2>Example: Unintended Global</h2>
        <pre>
          {`function createUser() {
  user = { name: "Alex" }; // ❌ no declaration
}

createUser();`}
        </pre>

        <ul>
          <li>
            <code>user</code> becomes a global variable.
          </li>
          <li>
            Stored on <code>window.user</code>.
          </li>
          <li>Never garbage collected.</li>
        </ul>

        <h2>Example: Window Object Reference</h2>
        <pre>
          {`window.cache = {
  data: new Array(1000000)
};`}
        </pre>

        <ul>
          <li>Data lives as long as the page.</li>
          <li>GC cannot free this memory.</li>
        </ul>

        <h2>How to Debug Global Leaks</h2>
        <ul>
          <li>
            Use <code>"use strict"</code>.
          </li>
          <li>
            Inspect <code>window</code> in DevTools.
          </li>
          <li>Take heap snapshots.</li>
          <li>Monitor memory growth over time.</li>
        </ul>

        <h2>Best Practices to Prevent Global Leaks</h2>
        <ul>
          <li>
            Always use <code>let</code> or <code>const</code>.
          </li>
          <li>
            Avoid attaching data to <code>window</code>.
          </li>
          <li>Use module scope (ES Modules).</li>
          <li>Clean up debug/test variables.</li>
          <li>Enable strict mode.</li>
        </ul>

        <h2>Relation to Garbage Collection</h2>
        <ul>
          <li>Globals are always reachable.</li>
          <li>GC never marks them as garbage.</li>
          <li>Leaks persist across app lifetime.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            global memory leak?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Memory
            retained by unintended global variables that are never garbage
            collected.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are global
            variables dangerous?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They persist
            for the entire app lifetime and block GC.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            prevent accidental globals?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use strict
            mode and proper variable declarations.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do global
            leaks affect performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They increase
            memory usage and cause frequent GC cycles.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are globals
            ever garbage collected?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, as long as
            the application is running.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Global leaks retain memory permanently.</li>
          <li>Caused by accidental globals or window references.</li>
          <li>Hard to detect but very harmful.</li>
          <li>Strict mode and modular code prevent them.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 33,
    title: "Memory Leak: Detached DOM Nodes",
    path: "/frontend/js/memory/detached-dom",
    explanation: (
      <>
        <p>
          <strong>Detached DOM Node Memory Leaks</strong> occur when DOM
          elements are removed from the document tree but are still referenced
          by JavaScript, preventing garbage collection.
        </p>

        <h2>What Are Detached DOM Nodes?</h2>
        <ul>
          <li>DOM nodes removed from the document.</li>
          <li>Still referenced in JavaScript memory.</li>
          <li>Invisible in UI but present in heap.</li>
          <li>Cannot be garbage collected.</li>
        </ul>

        <h2>Why Detached DOM Leaks Happen</h2>
        <ul>
          <li>Event listeners not removed.</li>
          <li>Closures capturing DOM references.</li>
          <li>Global or cached DOM references.</li>
          <li>Framework mismanagement of lifecycle.</li>
        </ul>

        <h2>Why Detached DOM Leaks Are Dangerous</h2>
        <ul>
          <li>DOM nodes are heavy memory objects.</li>
          <li>Leak grows with repeated UI updates.</li>
          <li>Common in single-page applications.</li>
          <li>Hard to detect visually.</li>
        </ul>

        <h2>Example: Detached DOM Leak</h2>
        <pre>
          {`let btn;

function createButton() {
  btn = document.createElement("button");
  btn.addEventListener("click", () => {
    console.log("Clicked");
  });
  document.body.appendChild(btn);
}

function removeButton() {
  document.body.removeChild(btn);
}

createButton();
removeButton();`}
        </pre>

        <ul>
          <li>Button removed from DOM.</li>
          <li>JS variable still references it.</li>
          <li>Event listener keeps closure alive.</li>
        </ul>

        <h2>Impact on Garbage Collection</h2>
        <ul>
          <li>GC sees node as reachable.</li>
          <li>Memory not freed.</li>
          <li>Detached nodes accumulate.</li>
        </ul>

        <h2>How to Identify Detached DOM Nodes</h2>
        <ul>
          <li>Chrome DevTools → Memory → Heap Snapshot.</li>
          <li>Look for "Detached HTMLDivElement".</li>
          <li>Compare snapshots over time.</li>
          <li>Monitor increasing retained size.</li>
        </ul>

        <h2>Best Practices to Prevent Detached DOM Leaks</h2>
        <ul>
          <li>Remove event listeners explicitly.</li>
          <li>Clear references to DOM nodes.</li>
          <li>Use weak references where applicable.</li>
          <li>Let frameworks manage DOM lifecycles.</li>
          <li>Clean up in component unmount phase.</li>
        </ul>

        <h2>Relation to Closures</h2>
        <ul>
          <li>Closures can capture DOM references.</li>
          <li>Captured nodes remain reachable.</li>
          <li>Closure lifespan controls memory.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            detached DOM node?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A DOM element
            removed from the document but still referenced in JavaScript.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            detached DOM nodes not garbage collected?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            JavaScript still holds references to them.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do event
            listeners cause DOM leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They keep
            closures alive that reference the DOM node.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            detect detached DOM nodes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using heap
            snapshots in browser DevTools.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to prevent
            detached DOM leaks in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Clean up
            effects and event listeners in component unmount.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Detached DOM nodes are invisible memory leaks.</li>
          <li>Caused by lingering JS references.</li>
          <li>Common in dynamic UIs.</li>
          <li>Proper cleanup prevents them.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 34,
    title: "Memory Leak: Closures Retaining Data",
    path: "/frontend/js/memory/closure-leaks",
    explanation: (
      <>
        <p>
          <strong>Closure-related memory leaks</strong> occur when a closure
          unintentionally retains references to variables or large objects from
          its outer lexical scope, preventing garbage collection.
        </p>

        <h2>What Is a Closure Memory Leak?</h2>
        <ul>
          <li>Closures capture variables from outer scope.</li>
          <li>Captured data remains in memory.</li>
          <li>Large or unnecessary objects stay referenced.</li>
          <li>Memory is not released by GC.</li>
        </ul>

        <h2>Why Closure Memory Leaks Happen</h2>
        <ul>
          <li>Closures referencing large data structures.</li>
          <li>Long-lived callbacks or event handlers.</li>
          <li>Timers and intervals holding closures.</li>
          <li>Global references to functions.</li>
        </ul>

        <h2>Why Closure Leaks Are Dangerous</h2>
        <ul>
          <li>Retains more memory than expected.</li>
          <li>Memory grows silently over time.</li>
          <li>Hard to detect during development.</li>
          <li>Common in SPAs and async-heavy code.</li>
        </ul>

        <h2>Example: Closure Retaining Large Data</h2>
        <pre>
          {`function createHandler() {
  const largeData = new Array(1000000).fill("data");

  return function handler() {
    console.log(largeData.length);
  };
}

const clickHandler = createHandler();`}
        </pre>

        <ul>
          <li>
            <code>largeData</code> remains in memory.
          </li>
          <li>Closure holds reference.</li>
          <li>GC cannot free it.</li>
        </ul>

        <h2>Impact on Garbage Collection</h2>
        <ul>
          <li>GC sees captured variables as reachable.</li>
          <li>Objects stay in heap.</li>
          <li>Memory usage increases.</li>
        </ul>

        <h2>How to Detect Closure Memory Leaks</h2>
        <ul>
          <li>Chrome DevTools → Memory → Heap Snapshot.</li>
          <li>Look for retained objects via closures.</li>
          <li>Check retaining paths.</li>
          <li>Monitor increasing heap size.</li>
        </ul>

        <h2>Best Practices to Prevent Closure Leaks</h2>
        <ul>
          <li>Avoid capturing unnecessary data.</li>
          <li>Nullify references when done.</li>
          <li>Limit scope of closures.</li>
          <li>Use WeakMap / WeakSet when applicable.</li>
          <li>Clear timers and event listeners.</li>
        </ul>

        <h2>Benefits of Understanding Closure Memory Leaks</h2>
        <ul>
          <li>Improves application performance.</li>
          <li>Prevents hidden memory growth.</li>
          <li>Enhances scalability of SPAs.</li>
          <li>Helps write optimized async code.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            closure memory leak?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When closures
            retain unnecessary outer-scope data preventing garbage collection.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do
            closures prevent garbage collection?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            referenced variables are still reachable through the closure.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Give a
            real-world example of closure memory leak.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Event handlers
            or timers capturing large objects.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can
            closure leaks be avoided?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By minimizing
            captured data and cleaning up references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to detect
            closure-related leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using heap
            snapshots and analyzing retaining paths.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Closures retain lexical scope.</li>
          <li>Unnecessary data causes leaks.</li>
          <li>Long-lived closures are risky.</li>
          <li>Proper cleanup prevents leaks.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 35,
    title: "Memory Leak: Event Listener Leaks",
    path: "/frontend/js/memory/listener-leaks",
    explanation: (
      <>
        <p>
          <strong>Event listener memory leaks</strong> occur when event
          listeners are added to DOM elements but never removed, causing
          referenced DOM nodes and closures to remain in memory.
        </p>

        <h2>What Is an Event Listener Memory Leak?</h2>
        <ul>
          <li>Event listeners attached to elements.</li>
          <li>Listeners not removed when no longer needed.</li>
          <li>DOM nodes remain reachable.</li>
          <li>Garbage collection is blocked.</li>
        </ul>

        <h2>Why Event Listener Leaks Happen</h2>
        <ul>
          <li>
            Missing <code>removeEventListener</code>.
          </li>
          <li>Anonymous functions used as listeners.</li>
          <li>Improper component cleanup.</li>
          <li>Dynamic DOM creation without teardown.</li>
        </ul>

        <h2>Why Event Listener Leaks Are Dangerous</h2>
        <ul>
          <li>DOM nodes are heavy memory objects.</li>
          <li>Leaks increase with user interaction.</li>
          <li>Common in SPAs.</li>
          <li>Causes slowdowns and crashes.</li>
        </ul>

        <h2>Example: Event Listener Memory Leak</h2>
        <pre>
          {`function attachListener() {
  const btn = document.createElement("button");

  btn.addEventListener("click", () => {
    console.log("Clicked");
  });

  document.body.appendChild(btn);
}

attachListener();`}
        </pre>

        <ul>
          <li>Anonymous function cannot be removed.</li>
          <li>Button persists in memory.</li>
          <li>Listener keeps closure alive.</li>
        </ul>

        <h2>Impact on Garbage Collection</h2>
        <ul>
          <li>GC treats listener references as reachable.</li>
          <li>DOM and closures remain in heap.</li>
          <li>Memory usage grows.</li>
        </ul>

        <h2>How to Detect Event Listener Leaks</h2>
        <ul>
          <li>Chrome DevTools → Memory → Heap Snapshot.</li>
          <li>Check retaining paths via listeners.</li>
          <li>Monitor increasing detached nodes.</li>
          <li>Use Performance tab for long sessions.</li>
        </ul>

        <h2>Best Practices to Prevent Event Listener Leaks</h2>
        <ul>
          <li>Always remove listeners explicitly.</li>
          <li>Avoid anonymous listener functions.</li>
          <li>Use event delegation when possible.</li>
          <li>Clean up in component unmount phase.</li>
          <li>Clear listeners on DOM removal.</li>
        </ul>

        <h2>Benefits of Understanding Event Listener Leaks</h2>
        <ul>
          <li>Prevents hidden DOM memory leaks.</li>
          <li>Improves SPA performance.</li>
          <li>Makes applications stable over time.</li>
          <li>Boosts debugging confidence.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            event listener memory leak?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When event
            listeners keep DOM nodes and closures alive after they are no longer
            needed.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do
            anonymous event listeners cause leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            cannot be removed without a reference.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does event
            delegation help prevent leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By attaching a
            single listener to a parent instead of many children.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            frameworks like React help avoid listener leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They manage
            event lifecycles and cleanup during unmount.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            detect event listener leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using heap
            snapshots and tracking retained DOM nodes.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Event listeners must be cleaned up.</li>
          <li>Anonymous functions are risky.</li>
          <li>Delegation reduces listeners.</li>
          <li>Proper cleanup avoids leaks.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 36,
    title: "Memory Leak: Timer & Interval Leaks",
    path: "/frontend/js/memory/timer-leaks",
    explanation: (
      <>
        <p>
          <strong>Timer and interval memory leaks</strong> occur when
          <code>setTimeout</code> or <code>setInterval</code> continues running
          after it is no longer needed, retaining references to variables,
          objects, or DOM nodes.
        </p>

        <h2>What Is a Timer & Interval Memory Leak?</h2>
        <ul>
          <li>
            Timers created using <code>setTimeout</code> or{" "}
            <code>setInterval</code>.
          </li>
          <li>
            Timers not cleared using <code>clearTimeout</code> or{" "}
            <code>clearInterval</code>.
          </li>
          <li>Callbacks keep references alive.</li>
          <li>Garbage collection is blocked.</li>
        </ul>

        <h2>Why Timer Leaks Happen</h2>
        <ul>
          <li>Intervals running indefinitely.</li>
          <li>Timers created inside components without cleanup.</li>
          <li>Closures capturing large objects.</li>
          <li>Navigation or unmount without clearing timers.</li>
        </ul>

        <h2>Why Timer Leaks Are Dangerous</h2>
        <ul>
          <li>Callbacks run repeatedly.</li>
          <li>Hidden memory growth.</li>
          <li>Unnecessary CPU usage.</li>
          <li>Performance degradation over time.</li>
        </ul>

        <h2>Example: Timer Memory Leak</h2>
        <pre>
          {`function startTimer() {
  const largeData = new Array(100000).fill("data");

  setInterval(() => {
    console.log(largeData.length);
  }, 1000);
}

startTimer();`}
        </pre>

        <ul>
          <li>
            <code>largeData</code> remains in memory.
          </li>
          <li>Interval never stops.</li>
          <li>Garbage collector cannot clean it.</li>
        </ul>

        <h2>Impact on Garbage Collection</h2>
        <ul>
          <li>Active timers are treated as roots.</li>
          <li>Captured variables stay reachable.</li>
          <li>Memory usage increases.</li>
        </ul>

        <h2>How to Detect Timer & Interval Leaks</h2>
        <ul>
          <li>Chrome DevTools → Memory snapshots.</li>
          <li>Performance tab showing repeated callbacks.</li>
          <li>Growing heap size over time.</li>
          <li>Long-running intervals in sources.</li>
        </ul>

        <h2>Best Practices to Prevent Timer Leaks</h2>
        <ul>
          <li>Always store timer IDs.</li>
          <li>Clear timers when no longer needed.</li>
          <li>Clean up timers on component unmount.</li>
          <li>
            Prefer <code>requestAnimationFrame</code> when appropriate.
          </li>
          <li>Avoid unnecessary global timers.</li>
        </ul>

        <h2>Benefits of Understanding Timer Leaks</h2>
        <ul>
          <li>Prevents silent memory growth.</li>
          <li>Improves app performance.</li>
          <li>Reduces CPU waste.</li>
          <li>Creates stable long-running apps.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do timers
            cause memory leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because active
            timers keep callback references alive.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does{" "}
            <code>setTimeout</code> also leak memory?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, if
            repeatedly created or chained without cleanup.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you fix
            interval leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Store the ID
            and clear it using <code>clearInterval</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            frameworks handle timer cleanup?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Via lifecycle
            hooks or cleanup functions.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Timers act as GC roots.</li>
          <li>Intervals must be cleared.</li>
          <li>Closures amplify leaks.</li>
          <li>Cleanup is mandatory.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 37,
    title: "Function Declarations vs Expressions",
    path: "/frontend/js/functions/declaration-vs-expression",
    explanation: (
      <>
        <p>
          <strong>Function Declarations</strong> and{" "}
          <strong>Function Expressions</strong> differ in how JavaScript hoists,
          allocates memory, and creates execution contexts during runtime.
        </p>

        <h2>What Is a Function Declaration?</h2>
        <ul>
          <li>
            Declared using the <code>function</code> keyword.
          </li>
          <li>Has a mandatory function name.</li>
          <li>Hoisted completely.</li>
          <li>Available before execution.</li>
        </ul>

        <pre>
          {`sayHello();

function sayHello() {
  console.log("Hello");
}`}
        </pre>

        <h2>What Is a Function Expression?</h2>
        <ul>
          <li>Function assigned to a variable.</li>
          <li>Can be anonymous or named.</li>
          <li>Not fully hoisted.</li>
          <li>Accessible only after initialization.</li>
        </ul>

        <pre>
          {`sayHi(); // Error

const sayHi = function () {
  console.log("Hi");
};`}
        </pre>

        <h2>Hoisting Behavior Difference</h2>
        <ul>
          <li>
            <strong>Function Declaration:</strong> Hoisted with full definition.
          </li>
          <li>
            <strong>Function Expression:</strong> Variable hoisted, function is
            not.
          </li>
          <li>
            <code>let</code> / <code>const</code> expressions fall into TDZ.
          </li>
        </ul>

        <h2>Temporal Dead Zone (TDZ) Impact</h2>
        <ul>
          <li>Function declarations are not affected by TDZ.</li>
          <li>
            Function expressions using <code>let</code> or <code>const</code>{" "}
            are.
          </li>
          <li>
            Accessing before initialization throws <code>ReferenceError</code>.
          </li>
        </ul>

        <h2>Memory Allocation Differences</h2>
        <ul>
          <li>Declarations are allocated during creation phase.</li>
          <li>Expressions are created during execution phase.</li>
          <li>Expressions consume memory only when assigned.</li>
        </ul>

        <h2>Execution Context Differences</h2>
        <ul>
          <li>
            Declarations exist in global/function execution context early.
          </li>
          <li>Expressions depend on variable initialization.</li>
          <li>Named expressions add a private inner scope.</li>
        </ul>

        <h2>Named vs Anonymous Function Expressions</h2>
        <pre>
          {`const foo = function bar() {
  console.log(bar);
};`}
        </pre>

        <ul>
          <li>
            <code>bar</code> exists only inside the function.
          </li>
          <li>Helpful for recursion and debugging.</li>
          <li>Does not pollute outer scope.</li>
        </ul>

        <h2>Why This Difference Matters</h2>
        <ul>
          <li>Prevents runtime errors.</li>
          <li>Improves code predictability.</li>
          <li>Helps avoid TDZ bugs.</li>
          <li>Important for clean architecture.</li>
        </ul>

        <h2>Benefits of Using the Right Type</h2>
        <ul>
          <li>Declarations for reusable utilities.</li>
          <li>Expressions for conditional logic.</li>
          <li>Better memory control.</li>
          <li>Improved readability.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            main difference between function declaration and expression?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Declarations
            are fully hoisted, expressions are not.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does a
            function expression throw an error before definition?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it
            depends on variable initialization.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are function
            expressions affected by TDZ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, when
            declared using let or const.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use function expressions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> For callbacks,
            conditional definitions, and closures.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Do function
            declarations consume memory earlier?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, during
            the creation phase.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Declarations are hoisted completely.</li>
          <li>Expressions depend on variables.</li>
          <li>TDZ affects expressions.</li>
          <li>Understanding prevents bugs.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 38,
    title: "Arrow Functions vs Normal Functions",
    path: "/frontend/js/functions/arrow-vs-normal",
    explanation: (
      <>
        <p>
          <strong>Arrow functions</strong> and <strong>normal functions</strong>{" "}
          differ in how they handle <code>this</code>, arguments, prototypes,
          memory allocation, and usage patterns.
        </p>

        <h2>Normal Functions</h2>
        <ul>
          <li>
            Have their own <code>this</code> binding.
          </li>
          <li>
            Have <code>arguments</code> object.
          </li>
          <li>Can be used as constructors.</li>
          <li>Have a prototype.</li>
          <li>
            Support dynamic <code>this</code> binding.
          </li>
        </ul>

        <pre>
          {`function normalFn(a, b) {
  console.log(this);
  console.log(arguments);
}

normalFn(1, 2);`}
        </pre>

        <h2>Arrow Functions</h2>
        <ul>
          <li>
            Do not have their own <code>this</code>.
          </li>
          <li>
            Lexically bind <code>this</code> from parent scope.
          </li>
          <li>
            No <code>arguments</code> object.
          </li>
          <li>Cannot be used as constructors.</li>
          <li>No prototype.</li>
        </ul>

        <pre>
          {`const arrowFn = (a, b) => {
  console.log(this);
};`}
        </pre>

        <h2>
          Lexical <code>this</code> Behavior
        </h2>
        <ul>
          <li>
            Arrow functions capture <code>this</code> at definition time.
          </li>
          <li>
            Normal functions bind <code>this</code> at call time.
          </li>
          <li>Useful for callbacks and handlers.</li>
        </ul>

        <h2>
          <code>arguments</code> Object Difference
        </h2>
        <ul>
          <li>
            Normal functions expose <code>arguments</code>.
          </li>
          <li>Arrow functions rely on rest parameters.</li>
        </ul>

        <pre>{`const sum = (...args) => args.reduce((a, b) => a + b, 0);`}</pre>

        <h2>Constructor & Prototype Difference</h2>
        <ul>
          <li>
            Normal functions can be instantiated using <code>new</code>.
          </li>
          <li>
            Arrow functions throw an error with <code>new</code>.
          </li>
          <li>
            Arrow functions have no <code>prototype</code>.
          </li>
        </ul>

        <h2>Memory & Performance Differences</h2>
        <ul>
          <li>
            Arrow functions reuse parent <code>this</code>.
          </li>
          <li>
            No extra execution context for <code>this</code>.
          </li>
          <li>Cleaner closure behavior.</li>
        </ul>

        <h2>When to Use Arrow Functions</h2>
        <ul>
          <li>Callbacks and array methods.</li>
          <li>Functional programming.</li>
          <li>Short utility functions.</li>
          <li>
            Preserving lexical <code>this</code>.
          </li>
        </ul>

        <h2>When to Avoid Arrow Functions</h2>
        <ul>
          <li>
            Object methods requiring dynamic <code>this</code>.
          </li>
          <li>Constructors.</li>
          <li>Prototype-based methods.</li>
          <li>Event handlers needing element context.</li>
        </ul>

        <h2>Benefits of Understanding the Difference</h2>
        <ul>
          <li>
            Avoids <code>this</code>-related bugs.
          </li>
          <li>Improves code clarity.</li>
          <li>Prevents memory misuse.</li>
          <li>Strengthens JS fundamentals.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why don't
            arrow functions have their own <code>this</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They lexically
            inherit <code>this</code> from the enclosing scope.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can arrow
            functions be used as constructors?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, they do
            not have <code>[[Construct]]</code> capability.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Do arrow
            functions have <code>arguments</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, use rest
            parameters instead.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are arrow
            functions faster?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They are not
            inherently faster, but reduce boilerplate.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            arrow functions be avoided?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When dynamic{" "}
            <code>this</code> behavior is required.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Arrow functions use lexical <code>this</code>.
          </li>
          <li>
            Normal functions bind <code>this</code> dynamically.
          </li>
          <li>Arrow functions are not constructors.</li>
          <li>Choosing correctly avoids bugs.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 40,
    title: "bind(), call(), apply() Internals",
    path: "/frontend/js/functions/bind-call-apply",
    explanation: (
      <>
        <p>
          <strong>bind()</strong>, <strong>call()</strong>, and{" "}
          <strong>apply()</strong> are used to explicitly control the{" "}
          <code>this</code> binding of a function and influence how execution
          contexts are created and executed.
        </p>

        <h2>
          What Is <code>call()</code>?
        </h2>
        <ul>
          <li>Invokes a function immediately.</li>
          <li>
            Explicitly sets the <code>this</code> value.
          </li>
          <li>Arguments are passed individually.</li>
        </ul>

        <pre>
          {`function greet(city) {
  console.log(this.name, city);
}

greet.call({ name: "Alex" }, "Delhi");`}
        </pre>

        <h2>
          What Is <code>apply()</code>?
        </h2>
        <ul>
          <li>
            Similar to <code>call()</code>.
          </li>
          <li>Invokes function immediately.</li>
          <li>Arguments are passed as an array.</li>
        </ul>

        <pre>{`greet.apply({ name: "Alex" }, ["Delhi"]);`}</pre>

        <h2>
          What Is <code>bind()</code>?
        </h2>
        <ul>
          <li>Does not invoke the function immediately.</li>
          <li>Returns a new bound function.</li>
          <li>
            <code>this</code> is permanently bound.
          </li>
        </ul>

        <pre>
          {`const boundGreet = greet.bind({ name: "Alex" });
boundGreet("Delhi");`}
        </pre>

        <h2>Execution Context Creation</h2>
        <ul>
          <li>
            <code>call()</code> / <code>apply()</code> create an execution
            context instantly.
          </li>
          <li>
            <code>bind()</code> delays execution.
          </li>
          <li>
            <code>this</code> is injected into the context.
          </li>
        </ul>

        <h2>Memory Implications</h2>
        <ul>
          <li>
            <code>bind()</code> creates a new function object.
          </li>
          <li>Bound functions retain references.</li>
          <li>Excessive binding can increase memory usage.</li>
        </ul>

        <h2>
          Why <code>bind()</code> Is Different
        </h2>
        <ul>
          <li>Partial application support.</li>
          <li>Useful for callbacks.</li>
          <li>
            Prevents losing <code>this</code>.
          </li>
        </ul>

        <h2>When to Use Which?</h2>
        <ul>
          <li>
            <code>call()</code> – immediate invocation.
          </li>
          <li>
            <code>apply()</code> – dynamic arguments.
          </li>
          <li>
            <code>bind()</code> – delayed execution.
          </li>
        </ul>

        <h2>Benefits of Understanding Internals</h2>
        <ul>
          <li>
            Mastery of <code>this</code>.
          </li>
          <li>Better debugging.</li>
          <li>Optimized memory usage.</li>
          <li>Cleaner APIs.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            main difference between call and apply?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> call takes
            arguments individually, apply takes an array.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does bind
            change the original function?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it returns
            a new bound function.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can bind be
            overridden?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, bound{" "}
            <code>this</code> is permanent.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why can bind
            cause memory issues?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it
            creates new functions that retain references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            bind be avoided?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Inside render
            loops or repeated bindings.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>call()</code> and <code>apply()</code> execute immediately.
          </li>
          <li>
            <code>bind()</code> returns a new function.
          </li>
          <li>
            <code>this</code> is explicitly controlled.
          </li>
          <li>Improper usage affects memory.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 41,
    title: "Closures — Internal Mechanics",
    path: "/frontend/js/functions/closures",
    explanation: (
      <>
        <p>
          A <strong>closure</strong> is created when a function remembers and
          continues to access variables from its <strong>lexical scope</strong>,
          even after the outer function has finished execution.
        </p>

        <h2>What Is a Closure?</h2>
        <ul>
          <li>A function bundled with its lexical environment.</li>
          <li>Allows access to outer variables.</li>
          <li>Works due to lexical scoping.</li>
          <li>Preserves state across calls.</li>
        </ul>

        <h2>Basic Closure Example</h2>
        <pre>
          {`function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter();`}
        </pre>

        <ul>
          <li>
            <code>inner</code> remembers <code>count</code>.
          </li>
          <li>
            <code>outer</code> execution is finished.
          </li>
          <li>Variable still exists in memory.</li>
        </ul>

        <h2>Lexical Scope & Scope Chain</h2>
        <ul>
          <li>Scope is determined at definition time.</li>
          <li>Functions remember where they were created.</li>
          <li>JS uses the scope chain to resolve variables.</li>
        </ul>

        <h2>Environment Records</h2>
        <ul>
          <li>Each execution context has an environment record.</li>
          <li>Stores variable and function bindings.</li>
          <li>Closures retain a reference to this record.</li>
        </ul>

        <h2>Captured Variables Retention</h2>
        <ul>
          <li>Captured variables are kept in heap memory.</li>
          <li>They are not garbage collected.</li>
          <li>Only released when no references exist.</li>
        </ul>

        <h2>Closure Memory Behavior</h2>
        <ul>
          <li>Outer function stack frame is destroyed.</li>
          <li>Lexical environment remains in heap.</li>
          <li>GC treats closures as reachable.</li>
        </ul>

        <h2>Private State Using Closures</h2>
        <pre>
          {`function createUser() {
  let password = "secret";

  return {
    checkPassword(pwd) {
      return pwd === password;
    }
  };
}`}
        </pre>

        <ul>
          <li>
            <code>password</code> is private.
          </li>
          <li>Cannot be accessed directly.</li>
          <li>Only via exposed methods.</li>
        </ul>

        <h2>Why Closures Are Important</h2>
        <ul>
          <li>Enable data encapsulation.</li>
          <li>Preserve state.</li>
          <li>Foundation of functional programming.</li>
          <li>Power async callbacks.</li>
        </ul>

        <h2>Risks of Closures</h2>
        <ul>
          <li>Can cause memory leaks.</li>
          <li>Retain large objects.</li>
          <li>Must be managed carefully.</li>
        </ul>

        <h2>Benefits of Understanding Closures</h2>
        <ul>
          <li>Master JS scope.</li>
          <li>Write cleaner APIs.</li>
          <li>Avoid memory leaks.</li>
          <li>Improve debugging skills.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do
            closures exist in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            JavaScript uses lexical scoping.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where are
            closure variables stored?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> In heap memory
            via environment records.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When are
            closure variables garbage collected?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When no
            references to the closure remain.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can closures
            cause memory leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, if they
            retain unnecessary references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            closures used in real-world apps?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> State
            management, callbacks, data privacy.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Closures capture lexical scope.</li>
          <li>Variables persist in memory.</li>
          <li>Enable private state.</li>
          <li>Must be used responsibly.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 42,
    title: "Higher-Order Functions",
    path: "/frontend/js/functions/higher-order",
    explanation: (
      <>
        <p>
          A <strong>Higher-Order Function (HOF)</strong> is a function that{" "}
          <strong>takes another function as an argument</strong> or{" "}
          <strong>returns a function</strong>. This is possible because
          functions are first-class citizens in JavaScript.
        </p>

        <h2>What Makes a Function Higher-Order?</h2>
        <ul>
          <li>Accepts a function as a parameter.</li>
          <li>Returns a function as a result.</li>
          <li>Or does both.</li>
          <li>Enables functional programming patterns.</li>
        </ul>

        <h2>Functions as First-Class Citizens</h2>
        <ul>
          <li>Functions can be stored in variables.</li>
          <li>Functions can be passed as arguments.</li>
          <li>Functions can be returned from other functions.</li>
          <li>This enables higher-order behavior.</li>
        </ul>

        <h2>Example: Function as an Argument</h2>
        <pre>
          {`function greet(name, formatter) {
  return formatter(name);
}

function upperCase(name) {
  return name.toUpperCase();
}

greet("Alex", upperCase);`}
        </pre>

        <h2>Example: Function Returning a Function</h2>
        <pre>
          {`function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
double(5);`}
        </pre>

        <h2>Built-in Higher-Order Functions</h2>
        <ul>
          <li>
            <code>map()</code> – transforms each element.
          </li>
          <li>
            <code>filter()</code> – selects elements conditionally.
          </li>
          <li>
            <code>reduce()</code> – accumulates values.
          </li>
          <li>
            <code>forEach()</code> – executes logic for each item.
          </li>
        </ul>

        <h2>Example: map, filter, reduce</h2>
        <pre>
          {`const numbers = [1, 2, 3, 4];

numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);`}
        </pre>

        <h2>Callback Handling</h2>
        <ul>
          <li>Callbacks are functions passed into HOFs.</li>
          <li>Executed later or conditionally.</li>
          <li>Used heavily in async operations.</li>
        </ul>

        <h2>Why Higher-Order Functions Are Important</h2>
        <ul>
          <li>Promote reusable logic.</li>
          <li>Reduce code duplication.</li>
          <li>Improve readability.</li>
          <li>Encourage declarative programming.</li>
        </ul>

        <h2>Functional Programming Patterns</h2>
        <ul>
          <li>Composition.</li>
          <li>Currying.</li>
          <li>Immutability.</li>
          <li>Pure functions.</li>
        </ul>

        <h2>Benefits of Using Higher-Order Functions</h2>
        <ul>
          <li>Cleaner and shorter code.</li>
          <li>Better abstraction.</li>
          <li>Easy testing.</li>
          <li>Powerful data transformations.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Overusing nested callbacks.</li>
          <li>Hard-to-read chains.</li>
          <li>Ignoring performance for large data sets.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            higher-order function?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A function
            that takes or returns another function.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are map,
            filter, and reduce higher-order functions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            accept callback functions.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are callbacks
            and higher-order functions the same?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Callbacks are
            functions; HOFs use callbacks.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            benefits of higher-order functions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reusability,
            abstraction, and cleaner code.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Do
            higher-order functions affect performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Slightly, but
            benefits usually outweigh the cost.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Higher-order functions work with other functions.</li>
          <li>Enabled by first-class functions.</li>
          <li>Core to functional programming.</li>
          <li>Used everywhere in modern JavaScript.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 43,
    title: "Currying — Deep Explanation",
    path: "/frontend/js/functions/currying",
    explanation: (
      <>
        <p>
          <strong>Currying</strong> means turning a function that takes{" "}
          <strong>many values at once</strong> into a function that takes{" "}
          <strong>one value at a time</strong>.
        </p>

        <p>
          Instead of giving all values together, you give them{" "}
          <strong>step by step</strong>.
        </p>

        <h2>Simple Meaning</h2>
        <ul>
          <li>A function normally needs many inputs.</li>
          <li>Currying breaks it into smaller functions.</li>
          <li>Each function takes only one value.</li>
          <li>The final result comes at the last step.</li>
        </ul>

        <h2>Normal Function Example</h2>
        <pre>
          {`function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3);`}
        </pre>

        <h2>Same Function Using Currying</h2>
        <pre>
          {`function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3);`}
        </pre>

        <p>
          Each function remembers the value passed to it and waits for the next
          one.
        </p>

        <h2>How Currying Works (Easy Words)</h2>
        <ul>
          <li>The first function saves the first value.</li>
          <li>The second function saves the second value.</li>
          <li>The last function uses all saved values.</li>
          <li>This happens using memory (closures).</li>
        </ul>

        <h2>Why Currying Is Used</h2>
        <ul>
          <li>To reuse functions easily.</li>
          <li>To avoid passing the same values again and again.</li>
          <li>To make code cleaner and more organized.</li>
        </ul>

        <h2>Simple Real-Life Example</h2>
        <pre>
          {`function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
double(5);`}
        </pre>

        <p>
          Here, <strong>double</strong> always multiplies by 2.
        </p>

        <h2>Currying vs Normal Function Call</h2>
        <ul>
          <li>
            <strong>Normal:</strong> All values at once.
          </li>
          <li>
            <strong>Currying:</strong> One value at a time.
          </li>
        </ul>

        <h2>Currying vs Partial Application</h2>
        <ul>
          <li>
            <strong>Currying:</strong> One argument per function.
          </li>
          <li>
            <strong>Partial Application:</strong> Fix some values and pass the
            rest later.
          </li>
          <li>They are similar but not the same.</li>
        </ul>

        <h2>Where Currying Is Useful</h2>
        <ul>
          <li>Creating helper functions.</li>
          <li>Math utilities like double, triple.</li>
          <li>Validation functions.</li>
          <li>Functional programming code.</li>
        </ul>

        <h2>Is Currying Bad for Performance?</h2>
        <ul>
          <li>It creates extra functions.</li>
          <li>Uses a little more memory.</li>
          <li>Usually not a problem in real apps.</li>
        </ul>

        <h2>Common Beginner Mistakes</h2>
        <ul>
          <li>Using currying when not needed.</li>
          <li>Confusing it with partial application.</li>
          <li>Making simple code too complex.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            currying in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is breaking
            a function into smaller functions that take one value at a time.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do we use
            currying?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To reuse
            functions and avoid repeating arguments.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is currying
            the same as partial application?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. Currying
            takes one argument per function, partial application fixes some
            arguments.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does currying
            affect performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Slightly, but
            usually not noticeable.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Currying passes values one by one.</li>
          <li>Each function remembers its value.</li>
          <li>Makes functions reusable.</li>
          <li>Common in functional JavaScript.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 44,
    title: "Partial Application",
    path: "/frontend/js/functions/partial-application",
    explanation: (
      <>
        <p>
          <strong>Partial Application</strong> means creating a{" "}
          <strong>new function</strong> by fixing (pre-filling){" "}
          <strong>some arguments</strong> of an existing function.
        </p>

        <p>
          The new function remembers those values and waits for the{" "}
          <strong>remaining arguments</strong> later.
        </p>

        <h2>Simple Meaning</h2>
        <ul>
          <li>You already know some values.</li>
          <li>You don’t want to pass them again and again.</li>
          <li>You create a new function with those values saved.</li>
        </ul>

        <h2>Normal Function</h2>
        <pre>
          {`function add(a, b) {
  return a + b;
}

add(2, 3);`}
        </pre>

        <h2>Partial Application Example</h2>
        <pre>
          {`function add(a, b) {
  return a + b;
}

const addFive = add.bind(null, 5);
addFive(10);`}
        </pre>

        <p>
          Here, <strong>5</strong> is already fixed. Now you only need to pass
          the second value.
        </p>

        <h2>How It Works Internally</h2>
        <ul>
          <li>The fixed value is stored in memory.</li>
          <li>A new function is returned.</li>
          <li>The new function uses both old and new values.</li>
        </ul>

        <h2>Another Easy Example</h2>
        <pre>
          {`function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
double(6);`}
        </pre>

        <p>
          <strong>double</strong> is a new function that always multiplies by 2.
        </p>

        <h2>Why Partial Application Is Useful</h2>
        <ul>
          <li>Saves time by avoiding repeated arguments.</li>
          <li>Makes code shorter and cleaner.</li>
          <li>Creates reusable helper functions.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Improves readability.</li>
          <li>Reduces duplicate code.</li>
          <li>Makes functions more flexible.</li>
          <li>Easy to understand once practiced.</li>
        </ul>

        <h2>Partial Application vs Normal Function Calls</h2>
        <ul>
          <li>
            <strong>Normal:</strong> Pass all arguments every time.
          </li>
          <li>
            <strong>Partial:</strong> Fix some arguments once.
          </li>
        </ul>

        <h2>Real-Life Use Cases</h2>
        <ul>
          <li>API request helpers.</li>
          <li>Validation functions.</li>
          <li>Logging utilities.</li>
          <li>Math helpers like double, triple, tax calculators.</li>
        </ul>

        <h2>Common Beginner Mistakes</h2>
        <ul>
          <li>Confusing partial application with currying.</li>
          <li>Overusing it for very simple functions.</li>
          <li>
            Not understanding how <code>bind()</code> works.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            partial application?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Fixing some
            arguments of a function and creating a new function.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How is partial
            application useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It avoids
            passing the same values again and again.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which method
            is commonly used for partial application?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The{" "}
            <code>bind()</code> method.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is partial
            application the same as currying?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. Partial
            application fixes some arguments, currying takes one argument at a
            time.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Partial application means fixing some arguments.</li>
          <li>It returns a new function.</li>
          <li>Makes code reusable and clean.</li>
          <li>Very common in real-world JavaScript.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 45,
    title: "Pure vs Impure Functions",
    path: "/frontend/js/functions/pure-functions",
    explanation: (
      <>
        <p>
          In JavaScript, functions can be <strong>pure</strong> or{" "}
          <strong>impure</strong> based on how they behave.
        </p>

        <p>
          This concept is very important in <strong>clean code</strong> and{" "}
          <strong>functional programming</strong>.
        </p>

        <h2>What Is a Pure Function?</h2>
        <ul>
          <li>
            A pure function always gives the <strong>same output</strong> for
            the <strong>same input</strong>.
          </li>
          <li>
            It does <strong>not change anything outside</strong> the function.
          </li>
          <li>
            It does <strong>not depend on external values</strong>.
          </li>
        </ul>

        <h2>Pure Function Example</h2>
        <pre>
          {`function add(a, b) {
  return a + b;
}

add(2, 3); // Always returns 5`}
        </pre>

        <p>
          No matter how many times you call this function with the same values,
          the result will always be the same.
        </p>

        <h2>Why Is It Called "Pure"?</h2>
        <ul>
          <li>No side effects.</li>
          <li>No hidden behavior.</li>
          <li>No external dependency.</li>
        </ul>

        <h2>What Is an Impure Function?</h2>
        <ul>
          <li>
            An impure function <strong>depends on external data</strong>.
          </li>
          <li>
            It may <strong>change something outside</strong> the function.
          </li>
          <li>
            Same input can give <strong>different output</strong>.
          </li>
        </ul>

        <h2>Impure Function Example</h2>
        <pre>
          {`let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}`}
        </pre>

        <p>
          This function depends on <strong>external variable</strong>{" "}
          <code>total</code>, so it is impure.
        </p>

        <h2>Another Impure Example (Using Date)</h2>
        <pre>
          {`function getCurrentTime() {
  return new Date();
}`}
        </pre>

        <p>Each call returns a different time, even with no input.</p>

        <h2>Side Effects (Easy Meaning)</h2>
        <ul>
          <li>Changing a global variable</li>
          <li>Modifying an object outside the function</li>
          <li>Updating DOM</li>
          <li>Logging to console</li>
          <li>Making API calls</li>
        </ul>

        <h2>Pure vs Impure (Quick Comparison)</h2>
        <ul>
          <li>
            <strong>Pure:</strong> Safe, predictable, testable
          </li>
          <li>
            <strong>Impure:</strong> Risky, unpredictable, harder to debug
          </li>
        </ul>

        <h2>Why Pure Functions Are Important</h2>
        <ul>
          <li>Easier to understand</li>
          <li>Easier to test</li>
          <li>Less bugs</li>
          <li>Better performance optimizations</li>
          <li>Works well with React & functional code</li>
        </ul>

        <h2>Are Impure Functions Always Bad?</h2>
        <ul>
          <li>No — sometimes they are necessary.</li>
          <li>Examples: API calls, DOM updates, logging.</li>
          <li>
            But they should be <strong>controlled</strong>.
          </li>
        </ul>

        <h2>Best Practice</h2>
        <ul>
          <li>Keep most functions pure.</li>
          <li>Move side effects to separate functions.</li>
          <li>Use impure functions only when needed.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a pure
            function?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A function
            that always returns the same output for the same input and has no
            side effects.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            impure function?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A function
            that depends on or changes external data.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are pure
            functions easier to test?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            don’t depend on external state and always give predictable output.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can a function
            with console.log be pure?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, because
            logging is a side effect.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Pure functions are predictable and safe.</li>
          <li>Impure functions depend on outside data.</li>
          <li>Prefer pure functions when possible.</li>
          <li>Impure functions should be isolated.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },

  {
    id: 6,
    title: "Execution Context",
    path: "/frontend/js-execution-context",
    explanation: (
      <>
        <p>
          In <strong>JavaScript</strong>, an <strong>Execution Context</strong>{" "}
          is the environment where code is evaluated and executed. Every time
          JavaScript runs code, it creates an execution context to manage
          variables, functions, and the value of <code>this</code>.
        </p>

        <h2>What Is an Execution Context?</h2>
        <ul>
          <li>
            It decides <strong>which code runs</strong> and{" "}
            <strong>how it runs</strong>.
          </li>
          <li>
            It stores variables, function declarations, and scope information.
          </li>
          <li>
            JavaScript is <strong>single-threaded</strong> and executes one
            context at a time.
          </li>
        </ul>

        <h2>Types of Execution Context</h2>
        <ul>
          <li>
            <strong>Global Execution Context (GEC)</strong> – Created when the
            JS file starts running.
          </li>
          <li>
            <strong>Function Execution Context (FEC)</strong> – Created whenever
            a function is invoked.
          </li>
          <li>
            <strong>Eval Execution Context</strong> – Created by{" "}
            <code>eval()</code>
            (rarely used and discouraged).
          </li>
        </ul>

        <h2>Global Execution Context (GEC)</h2>
        <ul>
          <li>
            Created only <strong>once</strong>.
          </li>
          <li>
            Creates the global object:
            <ul>
              <li>
                <code>window</code> (in browser)
              </li>
              <li>
                <code>global</code> (in Node.js)
              </li>
            </ul>
          </li>
          <li>
            <code>this</code> refers to the global object.
          </li>
        </ul>

        <h2>Function Execution Context (FEC)</h2>
        <ul>
          <li>Created every time a function is called.</li>
          <li>Has its own variables and scope.</li>
          <li>Destroyed after function execution completes.</li>
        </ul>

        <h2>Execution Context Phases</h2>

        <h3>1️⃣ Creation Phase</h3>
        <ul>
          <li>
            <strong>Memory allocation</strong> happens.
          </li>
          <li>
            Variables declared with <code>var</code> are initialized as{" "}
            <code>undefined</code>.
          </li>
          <li>Function declarations are stored fully in memory.</li>
          <li>
            <code>this</code> value is determined.
          </li>
        </ul>

        <h3>2️⃣ Execution Phase</h3>
        <ul>
          <li>Code is executed line by line.</li>
          <li>Variable assignments happen.</li>
          <li>Functions are executed.</li>
        </ul>

        <h2>Variable Environment</h2>
        <ul>
          <li>Stores variables and function declarations.</li>
          <li>
            Handles <strong>hoisting</strong>.
          </li>
          <li>Exists separately for each execution context.</li>
        </ul>

        <h2>Lexical Environment</h2>
        <ul>
          <li>
            Defines <strong>scope</strong> and scope chain.
          </li>
          <li>Helps JavaScript find variables.</li>
          <li>Inner scopes can access outer scope variables.</li>
        </ul>

        <h2>
          <code>this</code> Binding
        </h2>
        <ul>
          <li>
            In global context → <code>this === window</code> (browser).
          </li>
          <li>In a function → depends on how the function is called.</li>
          <li>
            Arrow functions do NOT have their own <code>this</code>.
          </li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`var a = 10;

function test() {
  var b = 20;
  console.log(a + b);
}

test();`}
        </pre>

        <ul>
          <li>Global Execution Context is created first.</li>
          <li>
            <code>a</code> and <code>test()</code> are stored in memory.
          </li>
          <li>
            Calling <code>test()</code> creates a new Function Execution
            Context.
          </li>
          <li>After execution, the function context is removed.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong>Q:</strong> What is an execution context?
            <br />
            <strong>A:</strong> An environment where JavaScript code is executed
            and managed.
          </li>
          <li>
            <strong>Q:</strong> How many execution contexts are created?
            <br />
            <strong>A:</strong> One global execution context and one for each
            function call.
          </li>
          <li>
            <strong>Q:</strong> What happens in the creation phase?
            <br />
            <strong>A:</strong> Memory allocation, hoisting, and{" "}
            <code>this</code> binding.
          </li>
          <li>
            <strong>Q:</strong> Difference between variable environment and
            lexical environment?
            <br />
            <strong>A:</strong> Variable environment stores variables; lexical
            environment manages scope and scope chain.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Execution context controls how JS code runs.</li>
          <li>Global context runs first.</li>
          <li>Each function call creates a new context.</li>
          <li>
            Understanding this helps master hoisting, scope, and closures.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 46,
    title: "Function Scope vs Block Scope",
    path: "/frontend/js/functions/scope-types",
    explanation: (
      <>
        <p>
          <strong>Scope</strong> means where a variable can be{" "}
          <strong>used or accessed</strong> in your code.
        </p>

        <p>
          In JavaScript, variables mainly follow <strong>function scope</strong>{" "}
          or <strong>block scope</strong>.
        </p>

        <h2>What Is Function Scope?</h2>
        <ul>
          <li>
            Variables declared with <code>var</code> are function scoped.
          </li>
          <li>They are accessible anywhere inside the function.</li>
          <li>
            Blocks like <code>if</code> or <code>for</code> do NOT limit them.
          </li>
        </ul>

        <h2>Function Scope Example (var)</h2>
        <pre>
          {`function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}

test();`}
        </pre>

        <p>
          Even though <code>x</code> is declared inside <code>if</code>, it is
          still accessible outside because <code>var</code> is function scoped.
        </p>

        <h2>What Is Block Scope?</h2>
        <ul>
          <li>
            Variables declared with <code>let</code> and <code>const</code> are
            block scoped.
          </li>
          <li>
            They exist only inside <code>{}</code>.
          </li>
          <li>They cannot be accessed outside the block.</li>
        </ul>

        <h2>Block Scope Example (let)</h2>
        <pre>
          {`function test() {
  if (true) {
    let y = 20;
  }
  console.log(y); // Error
}

test();`}
        </pre>

        <p>
          <code>y</code> is limited to the <code>if</code> block only.
        </p>

        <h2>Block Scope with const</h2>
        <pre>
          {`if (true) {
  const z = 30;
}
console.log(z); // Error`}
        </pre>

        <h2>Hoisting Difference</h2>
        <ul>
          <li>
            <code>var</code> is hoisted and initialized as{" "}
            <code>undefined</code>.
          </li>
          <li>
            <code>let</code> and <code>const</code> are hoisted but NOT
            initialized.
          </li>
          <li>
            Accessing <code>let</code>/<code>const</code> early causes an error.
          </li>
        </ul>

        <h2>Hoisting Example</h2>
        <pre>
          {`console.log(a); // undefined
var a = 10;

console.log(b); // Error
let b = 20;`}
        </pre>

        <h2>Temporal Dead Zone (TDZ)</h2>
        <ul>
          <li>The time between block start and variable declaration.</li>
          <li>
            Applies to <code>let</code> and <code>const</code>.
          </li>
          <li>Accessing variables in TDZ throws an error.</li>
        </ul>

        <h2>Why Block Scope Is Better</h2>
        <ul>
          <li>Prevents accidental variable access.</li>
          <li>Reduces bugs.</li>
          <li>Makes code more predictable.</li>
          <li>Improves readability.</li>
        </ul>

        <h2>Scope and Closures</h2>
        <ul>
          <li>Closures remember variables from their scope.</li>
          <li>Block scoped variables are safer in loops.</li>
          <li>Avoids common loop-related bugs.</li>
        </ul>

        <h2>Loop Example (var vs let)</h2>
        <pre>
          {`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}
// Output: 0 1 2`}
        </pre>

        <h2>Best Practice</h2>
        <ul>
          <li>
            Avoid using <code>var</code>.
          </li>
          <li>
            Use <code>let</code> for changing values.
          </li>
          <li>
            Use <code>const</code> by default.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            function scope?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Variables are
            accessible anywhere inside the function.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is block
            scope?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Variables are
            accessible only inside the block where they are defined.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is let
            better than var?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> let is block
            scoped and prevents unexpected bugs.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is TDZ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The time when
            let/const variables exist but cannot be accessed.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>var</code> → function scoped.
          </li>
          <li>
            <code>let</code> & <code>const</code> → block scoped.
          </li>
          <li>Block scope is safer and recommended.</li>
          <li>
            Modern JavaScript avoids <code>var</code>.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 47,
    title: "Function Execution Context Internals",
    path: "/frontend/js/functions/execution-context",
    explanation: (
      <>
        <p>
          Whenever a <strong>function is called</strong> in JavaScript, the
          engine creates something called a{" "}
          <strong>Function Execution Context</strong>.
        </p>

        <p>
          This context is like a <strong>box</strong> where JavaScript stores
          all information needed to run that function.
        </p>

        <h2>What Is a Function Execution Context?</h2>
        <ul>
          <li>A special environment created when a function runs.</li>
          <li>It controls how the function executes.</li>
          <li>Each function call gets its own execution context.</li>
        </ul>

        <h2>Two Phases of Execution Context</h2>
        <ul>
          <li>
            <strong>1. Creation Phase</strong>
          </li>
          <li>
            <strong>2. Execution Phase</strong>
          </li>
        </ul>

        <h2>1️⃣ Creation Phase (Setup Phase)</h2>
        <p>
          Before any line of code runs, JavaScript prepares memory for the
          function.
        </p>

        <ul>
          <li>Memory is allocated for variables.</li>
          <li>Function declarations are stored.</li>
          <li>
            <code>this</code> value is decided.
          </li>
          <li>Scope chain is created.</li>
        </ul>

        <h2>What Happens in Creation Phase?</h2>
        <ul>
          <li>
            <strong>Variables:</strong> Declared and set to{" "}
            <code>undefined</code>.
          </li>
          <li>
            <strong>Functions:</strong> Fully stored in memory.
          </li>
          <li>
            <strong>this:</strong> Gets its value.
          </li>
        </ul>

        <h2>Creation Phase Example</h2>
        <pre>
          {`function demo(a) {
  var x = 10;
  function inner() {}
}

demo(5);`}
        </pre>

        <p>At creation phase:</p>
        <ul>
          <li>
            <code>a</code> → initialized
          </li>
          <li>
            <code>x</code> → undefined
          </li>
          <li>
            <code>inner</code> → stored as function
          </li>
        </ul>

        <h2>Activation Object (Simple Meaning)</h2>
        <ul>
          <li>A container holding function data.</li>
          <li>Includes arguments, variables, and inner functions.</li>
          <li>Created during execution context setup.</li>
        </ul>

        <h2>Variable Environment</h2>
        <ul>
          <li>
            Stores variables declared using <code>var</code>.
          </li>
          <li>Used during memory creation.</li>
          <li>Helps in hoisting.</li>
        </ul>

        <h2>Lexical Environment</h2>
        <ul>
          <li>
            Stores <code>let</code> and <code>const</code>.
          </li>
          <li>Keeps reference to outer scope.</li>
          <li>Used for scope resolution.</li>
        </ul>

        <h2>'this' Binding</h2>
        <ul>
          <li>Value depends on how the function is called.</li>
          <li>In normal function: refers to global or object.</li>
          <li>In arrow function: inherited from parent scope.</li>
        </ul>

        <h2>2️⃣ Execution Phase</h2>
        <p>
          After setup is done, JavaScript starts running the code line by line.
        </p>

        <ul>
          <li>Variables get real values.</li>
          <li>Functions are executed.</li>
          <li>Expressions are evaluated.</li>
        </ul>

        <h2>Execution Phase Example</h2>
        <pre>
          {`function add(a, b) {
  var sum = a + b;
  return sum;
}

add(2, 3);`}
        </pre>

        <p>During execution phase:</p>
        <ul>
          <li>
            <code>a = 2</code>
          </li>
          <li>
            <code>b = 3</code>
          </li>
          <li>
            <code>sum = 5</code>
          </li>
        </ul>

        <h2>Scope Chain Resolution</h2>
        <ul>
          <li>JavaScript searches variables step by step.</li>
          <li>First in current function.</li>
          <li>Then in parent scope.</li>
          <li>Finally in global scope.</li>
        </ul>

        <h2>Execution Context & Call Stack</h2>
        <ul>
          <li>Each execution context is pushed to the call stack.</li>
          <li>Removed when function finishes.</li>
          <li>Stack follows LIFO (Last In, First Out).</li>
        </ul>

        <h2>Why Execution Context Is Important</h2>
        <ul>
          <li>Explains hoisting behavior.</li>
          <li>Helps understand scope and closures.</li>
          <li>Helps debug errors.</li>
          <li>Core concept of JavaScript internals.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            function execution context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is an
            environment created when a function runs to manage its execution.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            phases of execution context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Creation phase
            and execution phase.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            in the creation phase?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Memory
            allocation, hoisting, this binding, and scope chain setup.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            role of lexical environment?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It stores
            variables and keeps reference to outer scope.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Execution context is created when a function runs.</li>
          <li>It has creation and execution phases.</li>
          <li>Handles variables, scope, and this keyword.</li>
          <li>Works closely with the call stack.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 48,
    title: "Recursion — Internals",
    path: "/frontend/js/functions/recursion",
    explanation: (
      <>
        <p>
          <strong>Recursion</strong> is when a function{" "}
          <strong>calls itself</strong> to solve a problem.
        </p>

        <p>
          Instead of doing everything at once, the function breaks the problem
          into <strong>smaller versions</strong> of the same problem.
        </p>

        <h2>Simple Meaning of Recursion</h2>
        <ul>
          <li>A function runs.</li>
          <li>It calls itself.</li>
          <li>This continues until a stopping condition is met.</li>
        </ul>

        <h2>Very Important Rule (Base Case)</h2>
        <ul>
          <li>
            Every recursive function must have a <strong>base case</strong>.
          </li>
          <li>The base case stops the recursion.</li>
          <li>Without it, the function will run forever.</li>
        </ul>

        <h2>Simple Recursion Example</h2>
        <pre>
          {`function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}

countDown(3);`}
        </pre>

        <h2>What Happens Internally?</h2>
        <ul>
          <li>
            Each function call creates a new <strong>stack frame</strong>.
          </li>
          <li>Each frame stores local variables and return address.</li>
          <li>
            Frames are pushed onto the <strong>call stack</strong>.
          </li>
        </ul>

        <h2>Call Stack Behavior</h2>
        <ul>
          <li>Functions are added to the stack when called.</li>
          <li>Removed after they finish.</li>
          <li>Uses LIFO (Last In, First Out).</li>
        </ul>

        <h2>Call Stack Example</h2>
        <pre>
          {`factorial(3)
→ factorial(2)
→ factorial(1)
→ factorial(0)`}
        </pre>

        <p>When the base case is reached, the stack starts to clear.</p>

        <h2>Factorial Example</h2>
        <pre>
          {`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

factorial(3); // 6`}
        </pre>

        <h2>Memory Allocation in Recursion</h2>
        <ul>
          <li>Each call needs separate memory.</li>
          <li>More calls = more memory usage.</li>
          <li>Deep recursion can be risky.</li>
        </ul>

        <h2>Stack Overflow (Common Problem)</h2>
        <ul>
          <li>Happens when too many recursive calls are made.</li>
          <li>Call stack runs out of space.</li>
          <li>Usually caused by missing base case.</li>
        </ul>

        <h2>Recursive vs Iterative</h2>
        <ul>
          <li>
            <strong>Recursion:</strong> Cleaner and easier to read.
          </li>
          <li>
            <strong>Loop:</strong> Faster and uses less memory.
          </li>
          <li>Loops are safer for large inputs.</li>
        </ul>

        <h2>Same Problem Using Loop</h2>
        <pre>
          {`function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}`}
        </pre>

        <h2>Tail Call Optimization (Simple Idea)</h2>
        <ul>
          <li>Some engines optimize recursive calls.</li>
          <li>No new stack frame is created.</li>
          <li>JavaScript support is limited.</li>
        </ul>

        <h2>When to Use Recursion</h2>
        <ul>
          <li>Tree structures.</li>
          <li>Nested data.</li>
          <li>Divide-and-conquer problems.</li>
        </ul>

        <h2>When to Avoid Recursion</h2>
        <ul>
          <li>Very large inputs.</li>
          <li>Performance-critical code.</li>
          <li>When a loop is simpler.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            recursion?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When a
            function calls itself to solve a problem.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a base
            case?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A condition
            that stops the recursion.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What causes
            stack overflow?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Too many
            function calls without stopping.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is recursion
            slower than loops?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, because
            recursion uses more memory.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Recursion is a function calling itself.</li>
          <li>Each call uses stack memory.</li>
          <li>Base case is mandatory.</li>
          <li>Loops are usually more efficient.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 49,
    title: "Prototype Chain",
    path: "/frontend/js/prototypes/prototype-chain",
    explanation: (
      <>
        <p>
          In JavaScript, every object can have a <strong>prototype</strong>.
          This prototype is another object from which it can{" "}
          <strong>inherit properties and methods</strong>.
        </p>

        <p>
          The <strong>prototype chain</strong> is the chain of objects that
          JavaScript follows to find a property or method.
        </p>

        <h2>Simple Meaning</h2>
        <ul>
          <li>
            If a property is not found on the object itself, JS looks at its
            prototype.
          </li>
          <li>
            If not found there, it looks at the prototype's prototype, and so
            on.
          </li>
          <li>
            This continues until it reaches <code>null</code>.
          </li>
        </ul>

        <h2>__proto__ vs [[Prototype]]</h2>
        <ul>
          <li>
            <code>[[Prototype]]</code> – internal hidden property pointing to
            parent object.
          </li>
          <li>
            <code>__proto__</code> – visible way to access [[Prototype]] in most
            browsers.
          </li>
        </ul>

        <h2>Example: Prototype Chain Lookup</h2>
        <pre>
          {`const parent = { greet: "Hello" };
const child = Object.create(parent);

console.log(child.greet); // "Hello"`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            <code>child</code> doesn’t have <code>greet</code>.
          </li>
          <li>
            JS looks into <code>child.__proto__</code>, which points to{" "}
            <code>parent</code>.
          </li>
          <li>
            Finds <code>greet</code> there and returns "Hello".
          </li>
        </ul>

        <h2>Method Resolution Order</h2>
        <ul>
          <li>JS checks the object itself first.</li>
          <li>Then its prototype.</li>
          <li>Then prototype's prototype, etc.</li>
          <li>
            Stops at <code>null</code>.
          </li>
        </ul>

        <h2>Inheritance with Prototype Chain</h2>
        <pre>
          {`function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  return "Hi, " + this.name;
}

const p = new Person("Alex");
console.log(p.sayHi()); // "Hi, Alex"`}
        </pre>

        <p>
          Here, <code>p</code> inherits <code>sayHi</code> from{" "}
          <code>Person.prototype</code>.
        </p>

        <h2>Why Prototype Chain Is Important</h2>
        <ul>
          <li>Enables inheritance without copying properties.</li>
          <li>Helps objects share methods efficiently.</li>
          <li>Forms the basis for OOP in JavaScript.</li>
          <li>Makes JS memory-efficient.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Method sharing across instances.</li>
          <li>Efficient memory usage.</li>
          <li>Dynamic addition of methods to prototypes.</li>
          <li>Supports object delegation pattern.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            prototype chain?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A chain of
            objects used to look up properties and methods in JavaScript.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between __proto__ and prototype?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> __proto__ is
            the object’s link to its prototype; prototype is the object used
            when creating instances.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does JS
            find a property?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Checks the
            object, then prototype, then prototype's prototype, up to null.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            prototype for methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> So all
            instances share the same method, saving memory.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Prototype chain allows property/method lookup across linked objects.
          </li>
          <li>Enables inheritance in JavaScript.</li>
          <li>__proto__ points to [[Prototype]] internally.</li>
          <li>Memory-efficient way to share methods.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 50,
    title: "__proto__ vs prototype",
    path: "/frontend/js/prototypes/proto-vs-prototype",
    explanation: (
      <>
        <p>
          In JavaScript, objects can inherit properties and methods from other
          objects. Two key concepts are <strong>__proto__</strong> and{" "}
          <strong>prototype</strong>.
        </p>

        <h2>__proto__ (Instance Link)</h2>
        <ul>
          <li>
            <code>__proto__</code> is an internal link of an object pointing to
            its constructor’s prototype.
          </li>
          <li>
            Every object has a <code>__proto__</code> (unless it's created with{" "}
            <code>null</code>).
          </li>
          <li>
            Used during property/method lookup in the{" "}
            <strong>prototype chain</strong>.
          </li>
        </ul>

        <h2>prototype (Constructor Blueprint)</h2>
        <ul>
          <li>
            Every function (used as constructor) has a <code>prototype</code>{" "}
            property.
          </li>
          <li>
            This <code>prototype</code> object contains properties/methods that
            all instances can share.
          </li>
          <li>
            When you create a new object with <code>new Constructor()</code>,
            its <code>__proto__</code> points to{" "}
            <code>Constructor.prototype</code>.
          </li>
        </ul>

        <h2>Example: Linking __proto__ and prototype</h2>
        <pre>
          {`function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return "Hi, " + this.name;
}

const p = new Person("Alex");

console.log(p.__proto__ === Person.prototype); // true
console.log(p.sayHi()); // "Hi, Alex"`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            <code>p.__proto__</code> points to <code>Person.prototype</code>.
          </li>
          <li>
            Any method added to <code>Person.prototype</code> is accessible by{" "}
            <code>p</code>.
          </li>
        </ul>

        <h2>Key Differences</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>__proto__</th>
              <th>prototype</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Belongs to</td>
              <td>Object instance</td>
              <td>Function (constructor)</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>Link to prototype for inheritance</td>
              <td>Holds shared methods/properties for instances</td>
            </tr>
            <tr>
              <td>Used for</td>
              <td>Property lookup in chain</td>
              <td>Method/property sharing among instances</td>
            </tr>
            <tr>
              <td>Visibility</td>
              <td>
                Accessible via <code>obj.__proto__</code>
              </td>
              <td>
                Accessible via <code>Constructor.prototype</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Why It Matters</h2>
        <ul>
          <li>Helps understand inheritance in JS.</li>
          <li>
            Explains why multiple objects can share methods without copying.
          </li>
          <li>Essential for debugging and optimizing prototypes.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Memory-efficient method sharing.</li>
          <li>Enables prototype-based inheritance.</li>
          <li>Supports dynamic addition of methods to existing objects.</li>
          <li>Helps understand object delegation patterns.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is{" "}
            <code>__proto__</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is an
            object’s link to its constructor’s prototype, used for property
            lookup.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is{" "}
            <code>prototype</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is an
            object attached to a constructor function, holding
            properties/methods shared by instances.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are
            __proto__ and prototype related?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When an object
            is created, its __proto__ points to the constructor’s prototype.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can we add
            methods to prototype after creating instances?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, all
            existing instances can access the new methods via the prototype
            chain.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>__proto__</code> = instance link to prototype.
          </li>
          <li>
            <code>prototype</code> = blueprint for instances.
          </li>
          <li>
            Together they form the <strong>prototype chain</strong>.
          </li>
          <li>Allows memory-efficient inheritance and shared methods.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 51,
    title: "Constructor Functions & ES6 Classes",
    path: "/frontend/js/prototypes/constructor-classes",
    explanation: (
      <>
        <p>
          In JavaScript, we can create multiple objects using either{" "}
          <strong>constructor functions</strong> (old style) or{" "}
          <strong>ES6 classes</strong> (modern style). Both are ways to build
          objects that share properties and methods efficiently.
        </p>

        <h2>Constructor Functions (Old Way)</h2>
        <ul>
          <li>
            A normal function used with <code>new</code> keyword.
          </li>
          <li>Creates a new object instance.</li>
          <li>
            Properties assigned with <code>this</code> belong to the instance.
          </li>
          <li>
            Methods can be added to the <code>prototype</code> so all instances
            share them.
          </li>
        </ul>

        <h2>Example: Constructor Function</h2>
        <pre>
          {`function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.sayHi = function() {
  return "Hi, I am " + this.name;
}

const p1 = new Person("Alex", 25);
console.log(p1.sayHi()); // "Hi, I am Alex"
`}
        </pre>

        <h2>ES6 Classes (Modern Way)</h2>
        <ul>
          <li>Syntactic sugar over constructor functions.</li>
          <li>Class keyword provides cleaner, easier-to-read syntax.</li>
          <li>
            Constructor function inside class is called <code>constructor</code>
            .
          </li>
          <li>
            Methods defined in the class automatically go on{" "}
            <code>prototype</code>.
          </li>
        </ul>

        <h2>Example: ES6 Class</h2>
        <pre>
          {`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return "Hi, I am " + this.name;
  }
}

const p2 = new Person("Sara", 30);
console.log(p2.sayHi()); // "Hi, I am Sara"
`}
        </pre>

        <h2>Key Differences</h2>
        <ul>
          <li>Classes are easier to read and maintain.</li>
          <li>Constructor functions are older and more flexible.</li>
          <li>
            Classes always use <code>new</code> to create instances; calling
            without <code>new</code> throws an error.
          </li>
          <li>
            Methods inside classes automatically go on <code>prototype</code>,
            while constructor functions need manual assignment.
          </li>
        </ul>

        <h2>Prototype Linkage</h2>
        <ul>
          <li>
            Instances created via <code>new</code> point to the constructor’s
            prototype via <code>__proto__</code>.
          </li>
          <li>This allows shared methods and inheritance.</li>
        </ul>

        <h2>Why Use Classes?</h2>
        <ul>
          <li>Cleaner syntax for object-oriented programming.</li>
          <li>
            Easier inheritance using <code>extends</code> and <code>super</code>
            .
          </li>
          <li>Better readability for teams and maintainability.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Reusability: multiple objects share same methods.</li>
          <li>Memory efficiency: methods on prototype are shared.</li>
          <li>Consistency: class syntax standardizes object creation.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between constructor function and class?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Constructor
            function is old style, class is modern syntax; class methods
            automatically go to prototype.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            instances share methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Methods are
            stored on the constructor’s prototype, accessed via the prototype
            chain.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can we create
            a class without <code>new</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, calling a
            class without <code>new</code> throws an error.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            classes over constructor functions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Cleaner
            syntax, better inheritance, readability, and maintainability.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Constructor functions and classes are ways to create objects.</li>
          <li>Classes are modern, cleaner, and easier to maintain.</li>
          <li>Both rely on prototype linkage to share methods.</li>
          <li>
            Use <code>new</code> to create instances, access shared methods via
            prototype chain.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 52,
    title: "Super Keyword Behavior",
    path: "/frontend/js/prototypes/super-keyword",
    explanation: (
      <>
        <p>
          In JavaScript, the <strong>super</strong> keyword is used inside
          classes to access and call functions on an object's parent class. It
          helps with inheritance by letting a child class use the properties or
          methods of its parent.
        </p>

        <h2>
          When to Use <code>super</code>
        </h2>
        <ul>
          <li>
            Inside a child class constructor to call the parent class
            constructor.
          </li>
          <li>
            Inside child class methods to call a method from the parent class.
          </li>
        </ul>

        <h2>
          Example: Using <code>super()</code> in Constructor
        </h2>
        <pre>
          {`class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi, I am " + this.name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name); // calls parent constructor
    this.grade = grade;
  }
}

const s = new Student("Alex", "A");
console.log(s.name); // "Alex"
console.log(s.grade); // "A"`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            Child class <code>Student</code> extends <code>Person</code>.
          </li>
          <li>
            Inside <code>Student</code> constructor, <code>super(name)</code>{" "}
            calls the parent constructor to set <code>name</code>.
          </li>
        </ul>

        <h2>
          Example: Using <code>super</code> in Methods
        </h2>
        <pre>
          {`class Employee extends Person {
  greet() {
    return super.greet() + ", I am an employee.";
  }
}

const e = new Employee("Sara");
console.log(e.greet()); // "Hi, I am Sara, I am an employee."`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            <code>super.greet()</code> calls the parent method{" "}
            <code>greet()</code>.
          </li>
          <li>
            Child can add extra functionality while still using parent logic.
          </li>
        </ul>

        <h2>Key Points</h2>
        <ul>
          <li>
            <code>super()</code> must be called before using <code>this</code>{" "}
            in child constructors.
          </li>
          <li>Helps maintain proper prototype chain and inheritance.</li>
          <li>Works for both constructor calls and method calls.</li>
        </ul>

        <h2>
          Why <code>super</code> is Important
        </h2>
        <ul>
          <li>Ensures parent class is properly initialized.</li>
          <li>Allows code reuse and avoids rewriting parent methods.</li>
          <li>Makes inheritance predictable and clear.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Clean inheritance in classes.</li>
          <li>Access parent methods easily.</li>
          <li>Supports multi-level class hierarchies.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>super()</code> do in a constructor?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Calls the
            parent class constructor to initialize inherited properties.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can we use{" "}
            <code>this</code> before <code>super()</code> in a child
            constructor?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it will
            throw a ReferenceError.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do we call
            a parent method from a child method?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>super.methodName()</code> inside the child method.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use{" "}
            <code>super</code> in ES6 classes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To reuse
            parent class logic, maintain inheritance, and keep code DRY.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>super()</code> calls parent constructor.
          </li>
          <li>
            <code>super.method()</code> calls parent method.
          </li>
          <li>
            Must be called before <code>this</code> in child constructors.
          </li>
          <li>Makes inheritance clean and predictable.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 53,
    title: "Inheritance Internals",
    path: "/frontend/js/prototypes/inheritance",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>inheritance</strong> allows one object to use
          properties and methods of another object. This is done using{" "}
          <strong>prototypal inheritance</strong> and the{" "}
          <strong>prototype chain</strong>.
        </p>

        <h2>Prototypal Inheritance</h2>
        <ul>
          <li>Objects can inherit directly from other objects.</li>
          <li>
            The child object looks up properties and methods on its{" "}
            <code>__proto__</code> chain if not found on itself.
          </li>
          <li>
            This is different from classical inheritance (like Java), as JS is
            prototype-based.
          </li>
        </ul>

        <h2>Example: Prototype Chain</h2>
        <pre>
          {`const parent = {
  greet() {
    return "Hello from parent";
  }
};

const child = Object.create(parent);
child.name = "Alex";

console.log(child.greet()); // "Hello from parent"
console.log(child.name); // "Alex"
`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            <code>child</code> doesn’t have its own <code>greet()</code>, so it
            looks up <code>parent</code> via <code>__proto__</code>.
          </li>
          <li>
            <code>name</code> is found on <code>child</code> itself.
          </li>
        </ul>

        <h2>__proto__ vs prototype</h2>
        <ul>
          <li>
            <code>__proto__</code> is the link an object uses to inherit from
            another object.
          </li>
          <li>
            <code>prototype</code> is used by constructor functions/classes to
            provide shared properties/methods.
          </li>
        </ul>

        <h2>Overriding Properties & Methods</h2>
        <pre>
          {`child.greet = function() {
  return "Hello from child";
};

console.log(child.greet()); // "Hello from child"`}
        </pre>
        <ul>
          <li>
            If the child object has a property/method with the same name, it
            overrides the parent’s version.
          </li>
        </ul>

        <h2>Why Inheritance is Useful</h2>
        <ul>
          <li>Code reuse: share methods instead of duplicating them.</li>
          <li>Memory efficiency: methods stored on prototypes are shared.</li>
          <li>Organizes objects into hierarchies.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Reduces repeated code.</li>
          <li>Supports dynamic property/method sharing.</li>
          <li>Helps build modular and maintainable object structures.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            prototypal inheritance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Objects
            inherit properties/methods from other objects via the prototype
            chain.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            JavaScript look up properties in inheritance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It checks the
            object itself first, then goes up the <code>__proto__</code> chain
            until found.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between <code>__proto__</code> and <code>prototype</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>__proto__</code> links an object to its prototype,{" "}
            <code>prototype</code> is used by constructors/classes to define
            shared properties/methods.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can child
            override parent methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, defining
            the same property/method on child takes precedence.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Inheritance lets objects reuse properties/methods.</li>
          <li>Uses prototype chain for property/method lookup.</li>
          <li>
            __proto__ links child to parent, prototype is blueprint for
            constructors.
          </li>
          <li>Supports method overriding and efficient memory usage.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 54,
    title: "Method Lookup & Resolution",
    path: "/frontend/js/prototypes/method-lookup",
    explanation: (
      <>
        <p>
          In JavaScript, when we call a method on an object, the engine decides
          **which function to execute**. This process is called{" "}
          <strong>method lookup</strong>. It checks the object itself first, and
          if the method isn’t there, it moves up the{" "}
          <strong>prototype chain</strong>.
        </p>

        <h2>How Method Lookup Works</h2>
        <ul>
          <li>JavaScript first checks the object itself for the method.</li>
          <li>
            If not found, it looks at the object’s <code>__proto__</code>{" "}
            (parent prototype).
          </li>
          <li>
            It continues up the chain until it finds the method or reaches{" "}
            <code>null</code>.
          </li>
        </ul>

        <h2>Example: Method Lookup</h2>
        <pre>
          {`const parent = {
  greet() {
    return "Hello from parent";
  }
};

const child = Object.create(parent);
child.sayHi = function() {
  return "Hi from child";
};

console.log(child.sayHi()); // "Hi from child" (own property)
console.log(child.greet()); // "Hello from parent" (prototype property)
`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            <code>sayHi()</code> is on the child object itself, so it is used
            first.
          </li>
          <li>
            <code>greet()</code> isn’t on child, so JS checks{" "}
            <code>child.__proto__</code> and finds it on the parent.
          </li>
        </ul>

        <h2>Method Overriding</h2>
        <ul>
          <li>
            If a child object defines a method with the same name as the parent,
            it <strong>overrides</strong> the parent method.
          </li>
        </ul>

        <h2>Property Descriptors & Lookup</h2>
        <ul>
          <li>
            JavaScript stores metadata about properties called{" "}
            <strong>property descriptors</strong> (writable, configurable,
            enumerable).
          </li>
          <li>
            These descriptors affect how the engine resolves methods and whether
            they can be changed or deleted.
          </li>
        </ul>

        <h2>Why Method Lookup Matters</h2>
        <ul>
          <li>Allows code reuse via prototypes.</li>
          <li>Enables inheritance and clean object hierarchies.</li>
          <li>
            Supports method overriding to customize behavior in child objects.
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Efficient memory usage: methods on prototypes are shared.</li>
          <li>
            Code clarity: child objects can override methods without duplicating
            parent logic.
          </li>
          <li>
            Flexible object-oriented patterns without heavy class structures.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            JavaScript find a method on an object?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It first
            checks the object itself, then traverses the prototype chain until
            the method is found.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if a child and parent have methods with the same name?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The child’s
            method overrides the parent’s method.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why store
            methods on prototype instead of object itself?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Saves memory
            and allows all instances to share the same function.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            property descriptors?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Metadata about
            properties that control writability, enumerability, and
            configurability, affecting method lookup.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Method lookup is how JS decides which function to execute.</li>
          <li>Checks own properties first, then prototype chain.</li>
          <li>Allows overriding parent methods in child objects.</li>
          <li>Efficient and supports inheritance through shared methods.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 55,
    title: "Property Shadowing",
    path: "/frontend/js/prototypes/property-shadowing",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>property shadowing</strong> happens when an
          object has its own property with the same name as a property on its
          prototype. The object’s own property <strong>shadows</strong> the
          prototype property, meaning the object property is used first.
        </p>

        <h2>How Property Shadowing Works</h2>
        <ul>
          <li>JavaScript first checks the object itself for a property.</li>
          <li>
            If found, it uses that property and ignores the prototype property.
          </li>
          <li>
            If not found, it looks up the <code>__proto__</code> chain for the
            property.
          </li>
        </ul>

        <h2>Example: Property Shadowing</h2>
        <pre>
          {`const parent = { color: "blue" };
const child = Object.create(parent);

child.color = "red"; // shadows parent property

console.log(child.color); // "red" (child property is used)
delete child.color;
console.log(child.color); // "blue" (parent property now used)`}
        </pre>

        <p>Explanation:</p>
        <ul>
          <li>
            <code>child.color</code> initially shadows <code>parent.color</code>
            .
          </li>
          <li>
            After deleting <code>child.color</code>, JavaScript looks up the
            prototype chain and finds <code>parent.color</code>.
          </li>
        </ul>

        <h2>Key Points</h2>
        <ul>
          <li>Shadowing only affects the property on the specific object.</li>
          <li>Prototype property remains unchanged.</li>
          <li>
            Useful for customizing object behavior while keeping shared
            defaults.
          </li>
        </ul>

        <h2>Why Property Shadowing Matters</h2>
        <ul>
          <li>Allows objects to override default prototype values.</li>
          <li>Supports flexible inheritance patterns.</li>
          <li>Helps avoid modifying the prototype directly.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Customizes objects without affecting other instances.</li>
          <li>Keeps prototype clean and reusable.</li>
          <li>Supports dynamic behavior at instance level.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            property shadowing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When an object
            property overrides a property with the same name on its prototype.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if the shadowing property is deleted?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> JavaScript
            will use the property from the prototype.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does property
            shadowing change the prototype property?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, the
            prototype property stays the same.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            shadowing useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows
            objects to customize behavior without modifying shared prototypes.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Instance properties override prototype properties.</li>
          <li>
            Deleting the instance property reveals the prototype property.
          </li>
          <li>Supports flexible and reusable object inheritance patterns.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 56,
    title: "Private Fields (#fields)",
    path: "/frontend/js/prototypes/private-fields",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>private fields</strong> are variables inside a
          class that **cannot be accessed from outside the class**. They are
          declared with a <code>#</code> before the name, e.g.,{" "}
          <code>#password</code>.
        </p>

        <h2>Why Private Fields?</h2>
        <ul>
          <li>Protects sensitive data inside a class.</li>
          <li>Enforces encapsulation: only class methods can access them.</li>
          <li>Prevents accidental modifications from outside code.</li>
        </ul>

        <h2>Example: Using Private Fields</h2>
        <pre>
          {`class User {
  #password; // private field

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("Alex", "1234");
console.log(user.name); // "Alex"
console.log(user.#password); // Error! Cannot access private field
console.log(user.checkPassword("1234")); // true`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>
            Private fields are **per-instance**; each object has its own copy.
          </li>
          <li>
            They are **not on the prototype**, so they cannot be shared or
            accessed through inheritance.
          </li>
          <li>JavaScript engines enforce privacy at runtime.</li>
        </ul>

        <h2>Why Use Private Fields</h2>
        <ul>
          <li>Keeps internal state hidden and secure.</li>
          <li>Makes your class API clean and predictable.</li>
          <li>Prevents external code from breaking class logic.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Data encapsulation and safety.</li>
          <li>Clear separation of internal and external properties.</li>
          <li>Prevents bugs caused by unintended external access.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            private field in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A class
            variable that starts with <code>#</code> and cannot be accessed
            outside the class.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can private
            fields be accessed from the prototype?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, they exist
            only in the instance itself.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            private fields useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They protect
            sensitive data and ensure proper encapsulation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can subclasses
            access private fields of a parent class?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, private
            fields are strictly per-class instance.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Private fields use <code>#</code> and are only accessible inside the
            class.
          </li>
          <li>
            They are not on the prototype and cannot be inherited or accessed
            externally.
          </li>
          <li>
            They improve safety, encapsulation, and maintainability of class
            code.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 57,
    title: "Property Descriptors",
    path: "/frontend/js/objects/property-descriptors",
    explanation: (
      <>
        <p>
          In JavaScript, every object property has extra information called a{" "}
          <strong>property descriptor</strong>. This tells the engine how the
          property behaves — for example, whether you can change it, see it in
          loops, or delete it.
        </p>

        <h2>Property Attributes</h2>
        <ul>
          <li>
            <strong>writable:</strong> Can the property value be changed?
          </li>
          <li>
            <strong>enumerable:</strong> Will the property show up in loops like{" "}
            <code>for...in</code>?
          </li>
          <li>
            <strong>configurable:</strong> Can the property be deleted or its
            descriptor changed?
          </li>
        </ul>

        <h2>Example: Checking Property Descriptors</h2>
        <pre>
          {`const person = { name: "Alex" };

// Check descriptor
console.log(Object.getOwnPropertyDescriptor(person, "name"));
/* Output:
{
  value: "Alex",
  writable: true,
  enumerable: true,
  configurable: true
}
*/`}
        </pre>

        <h2>Example: Define Property</h2>
        <pre>
          {`const user = {};
Object.defineProperty(user, "id", {
  value: 123,
  writable: false, // cannot change value
  enumerable: true, // shows in loops
  configurable: false // cannot delete
});

console.log(user.id); // 123
user.id = 456;       // ignored, still 123
delete user.id;      // fails`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>Descriptors control how properties behave in JS.</li>
          <li>
            Default descriptors for properties created normally:{" "}
            <code>writable, enumerable, configurable</code> are{" "}
            <code>true</code>.
          </li>
          <li>
            Using <code>Object.defineProperty</code>, you can customize property
            behavior.
          </li>
        </ul>

        <h2>Why Property Descriptors Matter</h2>
        <ul>
          <li>Helps create **read-only** or **hidden** properties.</li>
          <li>Controls object behavior for **loops and serialization**.</li>
          <li>Supports encapsulation and safer code design.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Protects data from accidental changes.</li>
          <li>Improves control over object API.</li>
          <li>Enables creating advanced libraries and frameworks.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            property descriptor?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Extra
            information about a property that controls writability,
            enumerability, and configurability.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            check a property descriptor?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using{" "}
            <code>Object.getOwnPropertyDescriptor(obj, "propName")</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            create a non-writable property?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>{`Object.defineProperty(obj, "prop", { writable: false })`}</code>
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if configurable is false?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> You cannot
            delete the property or change its descriptor.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Property descriptors control how object properties behave.</li>
          <li>Writable, enumerable, configurable are the main attributes.</li>
          <li>Using descriptors improves data safety and object design.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 58,
    title: "Getters & Setters",
    path: "/frontend/js/objects/getters-setters",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>getters</strong> and <strong>setters</strong>{" "}
          are special methods that allow you to <strong>control access</strong>{" "}
          to object properties. They let you run code when a property is read or
          written.
        </p>

        <h2>Why Use Getters & Setters?</h2>
        <ul>
          <li>Encapsulate and control property access.</li>
          <li>Compute property values dynamically.</li>
          <li>Run validation or extra logic when setting a value.</li>
          <li>Keep the API clean while hiding internal representation.</li>
        </ul>

        <h2>Example: Getter</h2>
        <pre>
          {`const person = {
  firstName: "Alex",
  lastName: "Smith",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName); // "Alex Smith"`}
        </pre>

        <h2>Example: Setter</h2>
        <pre>
          {`const person = {
  firstName: "Alex",
  lastName: "Smith",
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "John Doe";
console.log(person.firstName); // "John"
console.log(person.lastName);  // "Doe"`}
        </pre>

        <h2>Integration with Property Descriptors</h2>
        <ul>
          <li>
            Getters and setters can be defined via{" "}
            <code>Object.defineProperty</code>.
          </li>
          <li>They allow computed properties and fine-grained control.</li>
          <li>
            They do not store values directly; they run code when accessed or
            modified.
          </li>
        </ul>

        <h2>Key Points</h2>
        <ul>
          <li>Getter: runs when property is read.</li>
          <li>Setter: runs when property is written.</li>
          <li>Can include validation, computation, or logging.</li>
          <li>Supports encapsulation and reactive patterns.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Control access to object properties.</li>
          <li>Compute values on the fly.</li>
          <li>Prevent invalid data from being assigned.</li>
          <li>
            Keep object internals hidden while exposing a clean interface.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            getter?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A method that
            runs automatically when a property is read.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            setter?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A method that
            runs automatically when a property is assigned a new value.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can getters
            and setters store values directly?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, they
            compute or control access; the actual value is usually stored in
            another property.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            getters and setters?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To encapsulate
            data, run extra logic, validate input, and provide a clean
            interface.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Getters and setters control how properties are read and written.
          </li>
          <li>
            They support encapsulation, validation, and computed properties.
          </li>
          <li>Used widely for clean, maintainable object APIs.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 59,
    title: "Object.freeze, seal, preventExtensions",
    path: "/frontend/js/objects/freeze-seal-preventextensions",
    explanation: (
      <>
        <p>
          JavaScript provides ways to **control how objects can be changed**.
          You can make an object completely immutable, allow updates but prevent
          adding/removing properties, or just stop new properties from being
          added.
        </p>

        <h2>Methods to Control Object Mutability</h2>
        <ul>
          <li>
            <strong>Object.freeze(obj)</strong> – Makes an object fully
            immutable. You <strong>cannot add, delete, or change</strong> any
            property.
          </li>
          <li>
            <strong>Object.seal(obj)</strong> – Prevents adding or deleting
            properties, but you <strong>can still update</strong> existing
            property values.
          </li>
          <li>
            <strong>Object.preventExtensions(obj)</strong> – Stops new
            properties from being added, but you can{" "}
            <strong>change or delete</strong> existing ones.
          </li>
        </ul>

        <h2>Example: Object.freeze()</h2>
        <pre>
          {`const user = { name: "Alex", age: 25 };
Object.freeze(user);

user.name = "John"; // ignored
user.gender = "male"; // ignored
delete user.age; // ignored

console.log(user); // { name: "Alex", age: 25 }`}
        </pre>

        <h2>Example: Object.seal()</h2>
        <pre>
          {`const user = { name: "Alex", age: 25 };
Object.seal(user);

user.name = "John"; // allowed
user.gender = "male"; // ignored
delete user.age; // ignored

console.log(user); // { name: "John", age: 25 }`}
        </pre>

        <h2>Example: Object.preventExtensions()</h2>
        <pre>
          {`const user = { name: "Alex", age: 25 };
Object.preventExtensions(user);

user.name = "John"; // allowed
user.gender = "male"; // ignored
delete user.age; // allowed

console.log(user); // { name: "John" }`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>
            All three methods **affect only the object itself**, not nested
            objects.
          </li>
          <li>
            These changes are **enforced by the JavaScript engine** at runtime.
          </li>
          <li>
            Helps maintain **data integrity** and prevents accidental
            modifications.
          </li>
        </ul>

        <h2>Why Control Object Mutability?</h2>
        <ul>
          <li>Prevents accidental changes in large codebases.</li>
          <li>Helps create **predictable and safe objects**.</li>
          <li>Useful in functional programming and state management.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Improves reliability of your code.</li>
          <li>Reduces bugs caused by unintended object changes.</li>
          <li>Helps enforce **read-only or controlled access** to objects.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>Object.freeze()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Makes the
            object fully immutable — no adding, deleting, or changing
            properties.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How is{" "}
            <code>Object.seal()</code> different from freeze?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Seal allows
            updating existing properties but prevents adding or deleting
            properties.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>Object.preventExtensions()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Stops new
            properties from being added but allows changing or deleting existing
            ones.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can these
            methods affect nested objects?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, they only
            affect the object they are called on.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use <code>freeze</code> for fully immutable objects.
          </li>
          <li>
            Use <code>seal</code> to prevent structure changes but allow
            updates.
          </li>
          <li>
            Use <code>preventExtensions</code> to stop new properties but allow
            other changes.
          </li>
          <li>
            These methods improve code safety, reliability, and maintainability.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 60,
    title: "Spread Operator Internals",
    path: "/frontend/js/objects/spread-operator",
    explanation: (
      <>
        <p>
          In JavaScript, the <strong>spread operator (...) </strong> lets you
          copy or merge object properties easily. It copies only the object's{" "}
          <strong>own enumerable properties</strong> and ignores properties
          inherited from the prototype.
        </p>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            Uses internal operations like <code>[[OwnPropertyKeys]]</code> to
            get the list of properties.
          </li>
          <li>
            Uses <code>[[Get]]</code> to read property values.
          </li>
          <li>
            Only copies properties directly on the object (not from prototype).
          </li>
          <li>
            Performs a <strong>shallow copy</strong>, so nested objects are
            still referenced.
          </li>
          <li>Preserves property order as defined in the object.</li>
          <li>Invokes getters if present, and copies the returned value.</li>
        </ul>

        <h2>Example: Copying an Object</h2>
        <pre>
          {`const original = { name: "Alex", age: 25 };
const copy = { ...original };

console.log(copy); // { name: "Alex", age: 25 }

// Changing copy doesn't affect original
copy.age = 30;
console.log(original.age); // 25`}
        </pre>

        <h2>Example: Shallow Copy Behavior</h2>
        <pre>
          {`const original = { user: { name: "Alex" } };
const copy = { ...original };

copy.user.name = "John";
console.log(original.user.name); // "John" (nested object shared)`}
        </pre>

        <h2>Example: Ignoring Prototype Properties</h2>
        <pre>
          {`const proto = { role: "admin" };
const obj = Object.create(proto);
obj.name = "Alex";

const copy = { ...obj };
console.log(copy); // { name: "Alex" }, proto.role is not copied`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>Copies only own enumerable properties.</li>
          <li>Performs a shallow copy, nested objects remain linked.</li>
          <li>Prototype properties are ignored.</li>
          <li>Works with arrays, objects, and in function arguments.</li>
        </ul>

        <h2>Why Use Spread Operator</h2>
        <ul>
          <li>Quick and easy way to copy or merge objects.</li>
          <li>Supports immutability patterns by creating new objects.</li>
          <li>Useful in state management (like React).</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Simpler syntax than Object.assign or loops.</li>
          <li>Preserves property order.</li>
          <li>Works with getters and computed properties.</li>
          <li>Helps write cleaner and readable code.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does the
            spread operator copy prototype properties?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it copies
            only own enumerable properties.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is the copy
            shallow or deep?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Shallow —
            nested objects are still shared.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does it
            handle getters?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It calls the
            getter and copies the returned value.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use spread
            instead of Object.assign()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Cleaner
            syntax, easier to read, supports immutability patterns.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Spread operator copies own enumerable properties to a new object.
          </li>
          <li>Shallow copy — nested objects remain shared.</li>
          <li>Prototype properties are ignored.</li>
          <li>Useful for copying, merging, and immutably updating objects.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 61,
    title: "Shallow vs Deep Copy",
    path: "/frontend/js/objects/shallow-deep-copy",
    explanation: (
      <>
        <p>
          In JavaScript, copying objects can be tricky because objects are
          stored by reference. There are two main types of copying:
          <strong> shallow copy</strong> and <strong>deep copy</strong>.
        </p>

        <h2>Shallow Copy</h2>
        <ul>
          <li>Copies only the top-level properties of an object.</li>
          <li>
            Nested objects or arrays are still references to the original
            object.
          </li>
          <li>Changes to nested objects in the copy affect the original.</li>
        </ul>

        <h2>Example: Shallow Copy</h2>
        <pre>
          {`const original = { name: "Alex", address: { city: "NY" } };
const shallowCopy = { ...original };

shallowCopy.name = "John"; // changes copy only
shallowCopy.address.city = "LA"; // changes nested object in original too

console.log(original.address.city); // "LA"`}
        </pre>

        <h2>Deep Copy</h2>
        <ul>
          <li>Recursively copies all nested objects and arrays.</li>
          <li>Changes in the copy do not affect the original object.</li>
          <li>
            Can be done manually or with utilities like{" "}
            <code>structuredClone()</code> or JSON methods.
          </li>
        </ul>

        <h2>Example: Deep Copy</h2>
        <pre>
          {`const original = { name: "Alex", address: { city: "NY" } };

// Using structuredClone (modern JS)
const deepCopy = structuredClone(original);

deepCopy.address.city = "LA";
console.log(original.address.city); // "NY" (original unaffected)`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>Shallow copy: fast, but nested objects share references.</li>
          <li>
            Deep copy: fully independent, but may be slower for large objects.
          </li>
          <li>Spread operator, Object.assign → shallow copy only.</li>
          <li>
            JSON.parse(JSON.stringify(obj)) → simple deep copy but fails for
            functions, symbols, undefined.
          </li>
        </ul>

        <h2>Why Copy Objects</h2>
        <ul>
          <li>Prevent accidental changes to the original object.</li>
          <li>Work safely with immutable patterns.</li>
          <li>Useful in React state management and functional programming.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Shallow copy: fast, simple for top-level objects.</li>
          <li>
            Deep copy: safe for nested structures, avoids bugs from shared
            references.
          </li>
          <li>Helps maintain predictable code behavior.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between shallow and deep copy?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Shallow copy
            copies only top-level properties; deep copy recursively copies all
            nested objects.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which methods
            create shallow copies?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Spread
            operator (...), Object.assign().
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            create a deep copy in modern JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using{" "}
            <code>structuredClone()</code> or manually recursively copying.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can shallow
            copy affect the original object?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, if the
            object has nested objects or arrays.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Shallow copy: copies top-level, nested objects shared.</li>
          <li>Deep copy: fully independent copy of all nested structures.</li>
          <li>
            Choose the right copy method depending on safety vs performance
            needs.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 62,
    title: "Structured Cloning Algorithm",
    path: "/frontend/js/objects/structured-cloning",
    explanation: (
      <>
        <p>
          The <strong>Structured Cloning Algorithm</strong> is a built-in way in
          JavaScript to make a <strong>deep copy</strong> of objects, including
          complex or special objects like <code>Date</code>, <code>Map</code>,{" "}
          <code>Set</code>, and even objects with circular references.
        </p>

        <h2>Where It Is Used</h2>
        <ul>
          <li>
            <strong>postMessage</strong> – Sending data between windows or web
            workers.
          </li>
          <li>
            <strong>IndexedDB</strong> – Storing objects safely in the database.
          </li>
          <li>
            <strong>Web Workers</strong> – Passing objects between threads.
          </li>
          <li>Deep cloning objects without losing nested structure.</li>
        </ul>

        <h2>How It Works</h2>
        <ul>
          <li>Recursively copies all nested objects and arrays.</li>
          <li>
            Handles circular references safely (doesn’t cause infinite loops).
          </li>
          <li>Preserves special objects like Date, Map, Set.</li>
          <li>
            Cannot copy functions, DOM nodes, or some browser-specific objects.
          </li>
        </ul>

        <h2>Example: Deep Clone Using Structured Cloning</h2>
        <pre>
          {`const original = {
  name: "Alex",
  date: new Date(),
  nested: { city: "NY" },
  numbers: new Set([1, 2, 3])
};

const copy = structuredClone(original);

copy.nested.city = "LA";
console.log(original.nested.city); // "NY" (original unchanged)

copy.numbers.add(4);
console.log(original.numbers.has(4)); // false`}
        </pre>

        <h2>Why Use Structured Cloning?</h2>
        <ul>
          <li>Safely copy objects with nested structures.</li>
          <li>Works for special objects like Map, Set, Date.</li>
          <li>Avoids bugs caused by shared references.</li>
          <li>Handles circular references automatically.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Deep clone without writing custom recursion logic.</li>
          <li>Reliable for browser APIs like postMessage and IndexedDB.</li>
          <li>Safe for complex data structures.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            structured cloning algorithm?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A built-in JS
            way to deep copy objects, including special objects and circular
            references.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which objects
            can it handle?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Date, Map,
            Set, Array, Object, and nested structures. Cannot clone functions or
            DOM nodes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where is it
            commonly used?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> postMessage,
            IndexedDB, Web Workers, deep cloning objects.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why not use
            JSON.parse(JSON.stringify()) for deep copy?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> JSON method
            cannot copy special objects (Map, Set, Date) and fails with circular
            references.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Structured cloning = deep copy for complex JS objects.</li>
          <li>
            Handles nested objects, circular references, and special objects.
          </li>
          <li>Safe and reliable for browser APIs and state management.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 63,
    title: "Object Property Internal Slots",
    path: "/frontend/js/objects/internal-slots",
    explanation: (
      <>
        <p>
          In JavaScript, every object has hidden <strong>internal slots</strong>{" "}
          that store metadata about the object. These slots are not directly
          accessible but are used internally by the engine to manage object
          behavior.
        </p>

        <h2>What Are Internal Slots?</h2>
        <ul>
          <li>Hidden storage for engine-related metadata.</li>
          <li>
            Keep track of the object’s prototype (<code>[[Prototype]]</code>).
          </li>
          <li>
            Store property attributes (writable, enumerable, configurable).
          </li>
          <li>Manage object extensibility (can new properties be added?).</li>
          <li>
            Track internal behavior during operations like get, set, delete.
          </li>
        </ul>

        <h2>Example: Property Attributes</h2>
        <pre>
          {`const obj = {};
Object.defineProperty(obj, "name", {
  value: "Alex",
  writable: false,       // cannot change value
  enumerable: true,      // shows in loops
  configurable: false    // cannot delete or redefine
});

console.log(obj.name); // "Alex"
obj.name = "John";     // ignored because writable: false
delete obj.name;       // fails because configurable: false`}
        </pre>

        <h2>Why Internal Slots Matter</h2>
        <ul>
          <li>They make object behavior predictable.</li>
          <li>
            Used internally by JavaScript engines to implement things like
            getters/setters, prototype chain, and immutability.
          </li>
          <li>
            Allow methods like <code>Object.getOwnPropertyDescriptor</code> to
            work correctly.
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Enable fine-grained control of object properties.</li>
          <li>Support encapsulation and secure object design.</li>
          <li>Help engines optimize memory and property access.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            internal slots in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Hidden engine
            storage used to manage object metadata like prototype, property
            attributes, and extensibility.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can you access
            internal slots directly?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, they are
            internal to the engine. But you can interact indirectly using
            methods like <code>Object.getOwnPropertyDescriptor</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            internal slots important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They ensure
            predictable behavior, allow property control, and help engine
            optimizations.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Give an
            example of internal slot usage.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Property
            descriptors use [[Writable]], [[Enumerable]], [[Configurable]]
            internal slots internally.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Internal slots = hidden metadata storage for objects.</li>
          <li>Control property attributes, prototype, and extensibility.</li>
          <li>
            Not accessible directly but essential for predictable object
            behavior.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 64,
    title: "Symbol Properties",
    path: "/frontend/js/objects/symbol-properties",
    explanation: (
      <>
        <p>
          In JavaScript, a <strong>Symbol</strong> is a special and unique type
          that can be used as a property key. Symbol properties help avoid name
          collisions and allow "hidden" or private-like properties in objects.
        </p>

        <h2>What Are Symbol Properties?</h2>
        <ul>
          <li>Unique keys that don’t conflict with string property names.</li>
          <li>
            Non-enumerable by default (won’t show up in <code>for...in</code> or{" "}
            <code>Object.keys</code>).
          </li>
          <li>
            Stored separately in the engine, often used for meta-programming.
          </li>
          <li>Can be used for internal or special object behavior.</li>
        </ul>

        <h2>Example: Using Symbol as a Property Key</h2>
        <pre>
          {`const id = Symbol("id");
const user = {
  name: "Alex",
  [id]: 123 // Symbol property
};

console.log(user.name); // "Alex"
console.log(user[id]);   // 123

// Symbol properties are not included in normal loops
for (let key in user) {
  console.log(key); // only logs "name"
}

console.log(Object.keys(user)); // ["name"]`}
        </pre>

        <h2>Why Use Symbol Properties?</h2>
        <ul>
          <li>Avoid property name conflicts in objects or libraries.</li>
          <li>
            Store hidden or meta-data without affecting regular object keys.
          </li>
          <li>
            Enable engine features like iterators and built-in methods
            (Symbol.iterator, Symbol.toStringTag).
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Safe from accidental overwriting.</li>
          <li>Works for private-like or internal properties.</li>
          <li>Useful in meta-programming and framework development.</li>
          <li>Helps prevent bugs when extending objects.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            Symbol in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A unique
            primitive value that can be used as an object key.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are Symbol
            properties useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They prevent
            property name collisions and allow hidden/internal properties.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are Symbol
            properties enumerable?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, they are
            non-enumerable by default.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Give an
            example of a built-in Symbol.
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>Symbol.iterator</code> for defining custom iterable behavior.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Symbols = unique keys for object properties.</li>
          <li>Safe from conflicts and hidden from normal loops.</li>
          <li>
            Used for meta-programming, internal behavior, and library design.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 65,
    title: "Event Loop",
    path: "/frontend/js/async/event-loop",
    explanation: (
      <>
        <p>
          The <strong>Event Loop</strong> is a core concept in JavaScript that
          lets the language handle <strong>asynchronous tasks</strong> while
          keeping code non-blocking. It continuously checks the{" "}
          <strong>call stack</strong> and executes tasks from different queues.
        </p>

        <h2>How the Event Loop Works</h2>
        <ul>
          <li>
            JavaScript has a single <strong>call stack</strong> for executing
            code.
          </li>
          <li>
            Async tasks (like setTimeout, promises, fetch) go into{" "}
            <strong>task queues</strong>.
          </li>
          <li>
            The Event Loop continuously checks if the call stack is empty.
          </li>
          <li>
            If the stack is empty, it picks tasks from the queues and executes
            them.
          </li>
          <li>
            Microtasks (Promises, MutationObserver) have higher priority than
            macrotasks (setTimeout, setInterval).
          </li>
        </ul>

        <h2>Example: Event Loop in Action</h2>
        <pre>
          {`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`}

          {/* Expected Output */}
          <p>Output:</p>
          <pre>
            {`Start
End
Promise
Timeout`}
          </pre>
        </pre>

        <h2>Why Event Loop Is Important</h2>
        <ul>
          <li>
            Allows JavaScript to be non-blocking and handle async operations
            efficiently.
          </li>
          <li>Ensures that long-running tasks don’t freeze the UI.</li>
          <li>Helps in managing multiple asynchronous events in order.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Enables smooth UI rendering in browsers.</li>
          <li>Keeps code execution predictable with task queues.</li>
          <li>
            Supports promises, async/await, and other asynchronous patterns.
          </li>
          <li>
            Prevents blocking the main thread while handling I/O operations.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Event Loop?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A mechanism
            that allows JavaScript to execute async tasks while keeping code
            non-blocking.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between microtasks and macrotasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Microtasks
            (Promises) run before the next rendering cycle, macrotasks
            (setTimeout) run after.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why doesn’t
            setTimeout with 0ms delay execute immediately?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It goes to the
            macrotask queue and waits for the call stack to be empty.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does the
            Event Loop handle promises?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise
            callbacks go to the microtask queue and execute after the current
            stack clears but before macrotasks.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Event Loop manages the execution of asynchronous code.</li>
          <li>Checks call stack and task queues continuously.</li>
          <li>Microtasks have higher priority than macrotasks.</li>
          <li>Ensures non-blocking, smooth execution in JavaScript.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 66,
    title: "Callbacks Queue",
    path: "/frontend/js/async/callbacks-queue",
    explanation: (
      <>
        <p>
          The <strong>Callbacks Queue</strong> (or macrotask queue) is where
          JavaScript stores tasks like <code>setTimeout</code>,{" "}
          <code>setInterval</code>, and I/O callbacks. These tasks wait until
          the <strong>call stack</strong> is empty before being executed by the{" "}
          <strong>Event Loop</strong>.
        </p>

        <h2>How Callbacks Queue Works</h2>
        <ul>
          <li>
            Async tasks (macrotasks) are added to the queue when they are ready.
          </li>
          <li>The Event Loop checks if the call stack is empty.</li>
          <li>
            If empty, it takes the first task from the queue and pushes it onto
            the stack.
          </li>
          <li>
            Execution happens one by one in order (FIFO - First In, First Out).
          </li>
          <li>
            Examples of macrotasks: <code>setTimeout</code>,{" "}
            <code>setInterval</code>, network I/O callbacks.
          </li>
        </ul>

        <h2>Example: Callbacks Queue in Action</h2>
        <pre>
          {`console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");`}

          {/* Expected Output */}
          <p>Output:</p>
          <pre>
            {`Start
End
Timeout 1
Timeout 2`}
          </pre>
        </pre>

        <h2>Why Callbacks Queue Exists</h2>
        <ul>
          <li>
            Ensures asynchronous tasks don’t block the main code execution.
          </li>
          <li>
            Helps manage and schedule tasks efficiently in JavaScript’s
            single-threaded environment.
          </li>
          <li>
            Works together with the Event Loop for predictable execution order.
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Allows non-blocking code execution.</li>
          <li>Keeps UI responsive in browsers.</li>
          <li>Helps handle I/O, timers, and events in an orderly manner.</li>
          <li>Makes asynchronous JavaScript predictable and manageable.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Callbacks Queue in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A queue that
            stores asynchronous macrotasks like <code>setTimeout</code> and
            executes them when the call stack is empty.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does the
            Event Loop interact with the Callbacks Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It
            continuously checks if the stack is empty and then pushes tasks from
            the queue to the stack.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between microtasks and macrotasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Microtasks
            (Promises) run before the next rendering cycle; macrotasks
            (setTimeout, I/O) run after.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use a
            Callbacks Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To prevent
            blocking the main thread and handle asynchronous tasks in order.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Callbacks Queue stores macrotasks like timers and I/O callbacks.
          </li>
          <li>Tasks are executed in order when the call stack is empty.</li>
          <li>
            Works with the Event Loop to handle async operations smoothly.
          </li>
          <li>Helps JavaScript remain non-blocking and responsive.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 67,
    title: "Microtask Queue",
    path: "/frontend/js/async/microtask-queue",
    explanation: (
      <>
        <p>
          The <strong>Microtask Queue</strong> is a special queue in JavaScript
          that stores <strong>microtasks</strong> like <code>Promise</code>{" "}
          callbacks and <code>queueMicrotask</code>. These tasks run{" "}
          <strong>immediately after the current call stack is empty</strong> and{" "}
          <strong>before any macrotasks</strong> like <code>setTimeout</code>.
        </p>

        <h2>How Microtask Queue Works</h2>
        <ul>
          <li>
            Microtasks are added when a promise resolves or{" "}
            <code>queueMicrotask</code> is called.
          </li>
          <li>The Event Loop first clears the current stack.</li>
          <li>All microtasks in the queue are executed in order (FIFO).</li>
          <li>
            Only after all microtasks are done does the Event Loop move to
            macrotasks.
          </li>
          <li>This ensures predictable asynchronous behavior.</li>
        </ul>

        <h2>Example: Microtask Queue in Action</h2>
        <pre>
          {`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");`}

          {/* Expected Output */}
          <p>Output:</p>
          <pre>
            {`Start
End
Promise 1
Promise 2
Timeout`}
          </pre>
        </pre>

        <h2>Why Microtask Queue Is Important</h2>
        <ul>
          <li>
            Ensures promise callbacks run as soon as possible after the current
            code.
          </li>
          <li>Provides a predictable order of execution for async tasks.</li>
          <li>Helps avoid race conditions and timing issues in async code.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>
            Guarantees that microtasks execute before rendering or macrotasks.
          </li>
          <li>Improves consistency in async operations.</li>
          <li>Supports promise chaining and async/await behavior.</li>
          <li>
            Helps developers write cleaner, more predictable asynchronous code.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Microtask Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A queue that
            stores microtasks like Promise callbacks, executed after the current
            stack but before macrotasks.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between microtasks and macrotasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Microtasks run
            before the next rendering or macrotasks; macrotasks like setTimeout
            run later.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            microtasks executed before macrotasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To make
            promise and async/await execution predictable and fast.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can multiple
            microtasks run in order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, they run
            in FIFO order until the queue is empty before moving to macrotasks.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Microtask Queue handles promises and queueMicrotask callbacks.
          </li>
          <li>
            Executed immediately after current code finishes and before
            macrotasks.
          </li>
          <li>Ensures predictable async execution order.</li>
          <li>Essential for promise chains, async/await, and responsive UI.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 68,
    title: "Macrotask Queue",
    path: "/frontend/js/async/macrotask-queue",
    explanation: (
      <>
        <p>
          The <strong>Macrotask Queue</strong> is where JavaScript stores tasks
          like <code>setTimeout</code>, <code>setInterval</code>, I/O callbacks,
          and UI events. These tasks are executed{" "}
          <strong>
            after the current call stack is empty and all microtasks are
            completed
          </strong>
          .
        </p>

        <h2>How Macrotask Queue Works</h2>
        <ul>
          <li>
            Async tasks like timers, network I/O, and UI events are added to the
            macrotask queue.
          </li>
          <li>The Event Loop checks if the call stack is empty.</li>
          <li>All microtasks are executed first before taking a macrotask.</li>
          <li>The first macrotask is then pushed to the stack and executed.</li>
          <li>
            Tasks run in <strong>FIFO order</strong> (First In, First Out).
          </li>
        </ul>

        <h2>Example: Macrotask Queue in Action</h2>
        <pre>
          {`console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");`}

          <p>Output:</p>
          <pre>
            {`Start
End
Timeout 1
Timeout 2`}
          </pre>
        </pre>

        <h2>Why Macrotask Queue Exists</h2>
        <ul>
          <li>
            Allows non-blocking execution for tasks that take time (timers, I/O,
            UI updates).
          </li>
          <li>
            Keeps JavaScript single-threaded while still handling async tasks
            efficiently.
          </li>
          <li>
            Works with the Event Loop to schedule tasks in a predictable way.
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Prevents blocking the main thread.</li>
          <li>Ensures UI stays responsive.</li>
          <li>Helps organize and execute asynchronous tasks in order.</li>
          <li>Makes it easier to reason about timing of async code.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Macrotask Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A queue that
            stores timers, I/O, and UI events to execute after the call stack
            and microtasks are cleared.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between microtasks and macrotasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Microtasks
            (Promise callbacks) run before the next rendering cycle, macrotasks
            (setTimeout, I/O) run after microtasks.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is the
            Macrotask Queue needed?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To handle
            longer async tasks without blocking JavaScript’s single thread.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does the
            Event Loop use the Macrotask Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> After
            finishing current code and all microtasks, it takes the next
            macrotask and executes it.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Macrotask Queue stores timers, I/O, and events for async execution.
          </li>
          <li>
            Tasks execute in order after call stack and microtasks are cleared.
          </li>
          <li>Essential for non-blocking and responsive JavaScript.</li>
          <li>
            Works alongside microtasks and Event Loop for predictable async
            behavior.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 69,
    title: "Promise Execution Model",
    path: "/frontend/js/async/promises",
    explanation: (
      <>
        <p>
          A <strong>Promise</strong> in JavaScript represents a value that may
          be available now, in the future, or never. When a promise is{" "}
          <strong>resolved</strong> or <strong>rejected</strong>, its{" "}
          <code>.then</code> or <code>.catch</code> callbacks are added to the{" "}
          <strong>microtask queue</strong>, so they run{" "}
          <strong>after the current code finishes</strong> but{" "}
          <strong>before any macrotasks</strong>.
        </p>

        <h2>How Promises Work</h2>
        <ul>
          <li>
            Create a promise using{" "}
            <code>new Promise((resolve, reject) =&gt; {"..."})</code>.
          </li>
          <li>
            Call <code>resolve()</code> or <code>reject()</code> to settle it.
          </li>
          <li>
            Callbacks registered with <code>.then</code> or <code>.catch</code>{" "}
            go into the <strong>microtask queue</strong>.
          </li>
          <li>
            The Event Loop executes these callbacks after the current stack is
            empty.
          </li>
          <li>This ensures predictable asynchronous behavior.</li>
        </ul>

        <h2>Example: Promise Execution</h2>
        <pre>
          {`console.log("Start");

const promise = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

promise.then((value) => {
  console.log(value);
});

console.log("End");`}

          <p>Output:</p>
          <pre>
            {`Start
End
Promise Resolved`}
          </pre>
        </pre>

        <h2>Why This Model Exists</h2>
        <ul>
          <li>
            Promises let us handle async operations without blocking the main
            thread.
          </li>
          <li>
            Callbacks are executed in a predictable order via the microtask
            queue.
          </li>
          <li>Allows chaining multiple async operations.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>
            Provides a clear syntax for async tasks (
            <code>.then/.catch/.finally</code>).
          </li>
          <li>
            Ensures all promise callbacks run before rendering or macrotasks.
          </li>
          <li>Makes async code easier to reason about.</li>
          <li>Supports chaining and composition of asynchronous operations.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does a
            promise execute in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Its{" "}
            <code>.then/.catch</code> callbacks are queued in the microtask
            queue, running after the current stack.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between promise callbacks and setTimeout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise
            callbacks go to the microtask queue, executed before macrotasks like
            setTimeout.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            promises predictable?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            always schedule callbacks via the microtask queue in FIFO order.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can multiple
            promise callbacks run in order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, all
            queued microtasks are executed in order before moving to the next
            macrotask.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promises schedule callbacks as microtasks.</li>
          <li>Executed after current code finishes and before macrotasks.</li>
          <li>Supports chaining and predictable async operations.</li>
          <li>Essential for modern asynchronous JavaScript and async/await.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 69,
    title: "Promise Execution Model",
    path: "/frontend/js/async/promises",
    explanation: (
      <>
        <p>
          A <strong>Promise</strong> in JavaScript represents a value that may
          be available now, in the future, or never. When a promise is{" "}
          <strong>resolved</strong> or <strong>rejected</strong>, its{" "}
          <code>.then</code> or <code>.catch</code> callbacks are added to the{" "}
          <strong>microtask queue</strong>, so they run{" "}
          <strong>after the current code finishes</strong> but{" "}
          <strong>before any macrotasks</strong>.
        </p>

        <h2>How Promises Work</h2>
        <ul>
          <li>
            Create a promise using{" "}
            <code>new Promise((resolve, reject) =&gt; {"..."})</code>.
          </li>
          <li>
            Call <code>resolve()</code> or <code>reject()</code> to settle it.
          </li>
          <li>
            Callbacks registered with <code>.then</code> or <code>.catch</code>{" "}
            go into the <strong>microtask queue</strong>.
          </li>
          <li>
            The Event Loop executes these callbacks after the current stack is
            empty.
          </li>
          <li>This ensures predictable asynchronous behavior.</li>
        </ul>

        <h2>Example: Promise Execution</h2>
        <pre>
          {`console.log("Start");

const promise = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

promise.then((value) => {
  console.log(value);
});

console.log("End");`}

          <p>Output:</p>
          <pre>
            {`Start
End
Promise Resolved`}
          </pre>
        </pre>

        <h2>Why This Model Exists</h2>
        <ul>
          <li>
            Promises let us handle async operations without blocking the main
            thread.
          </li>
          <li>
            Callbacks are executed in a predictable order via the microtask
            queue.
          </li>
          <li>Allows chaining multiple async operations.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>
            Provides a clear syntax for async tasks (
            <code>.then/.catch/.finally</code>).
          </li>
          <li>
            Ensures all promise callbacks run before rendering or macrotasks.
          </li>
          <li>Makes async code easier to reason about.</li>
          <li>Supports chaining and composition of asynchronous operations.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does a
            promise execute in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Its{" "}
            <code>.then/.catch</code> callbacks are queued in the microtask
            queue, running after the current stack.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between promise callbacks and setTimeout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise
            callbacks go to the microtask queue, executed before macrotasks like
            setTimeout.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            promises predictable?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            always schedule callbacks via the microtask queue in FIFO order.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can multiple
            promise callbacks run in order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, all
            queued microtasks are executed in order before moving to the next
            macrotask.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promises schedule callbacks as microtasks.</li>
          <li>Executed after current code finishes and before macrotasks.</li>
          <li>Supports chaining and predictable async operations.</li>
          <li>Essential for modern asynchronous JavaScript and async/await.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 69,
    title: "Promise Execution Model",
    path: "/frontend/js/async/promises",
    explanation: (
      <>
        <p>
          A <strong>Promise</strong> in JavaScript represents a value that may
          be available now, in the future, or never. When a promise is{" "}
          <strong>resolved</strong> or <strong>rejected</strong>, its{" "}
          <code>.then</code> or <code>.catch</code> callbacks are added to the{" "}
          <strong>microtask queue</strong>, so they run{" "}
          <strong>after the current code finishes</strong> but{" "}
          <strong>before any macrotasks</strong>.
        </p>

        <h2>How Promises Work</h2>
        <ul>
          <li>
            Create a promise using{" "}
            <code>new Promise((resolve, reject) =&gt; {"..."})</code>.
          </li>
          <li>
            Call <code>resolve()</code> or <code>reject()</code> to settle it.
          </li>
          <li>
            Callbacks registered with <code>.then</code> or <code>.catch</code>{" "}
            go into the <strong>microtask queue</strong>.
          </li>
          <li>
            The Event Loop executes these callbacks after the current stack is
            empty.
          </li>
          <li>This ensures predictable asynchronous behavior.</li>
        </ul>

        <h2>Example: Promise Execution</h2>
        <pre>
          {`console.log("Start");

const promise = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

promise.then((value) => {
  console.log(value);
});

console.log("End");`}

          <p>Output:</p>
          <pre>
            {`Start
End
Promise Resolved`}
          </pre>
        </pre>

        <h2>Why This Model Exists</h2>
        <ul>
          <li>
            Promises let us handle async operations without blocking the main
            thread.
          </li>
          <li>
            Callbacks are executed in a predictable order via the microtask
            queue.
          </li>
          <li>Allows chaining multiple async operations.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>
            Provides a clear syntax for async tasks (
            <code>.then/.catch/.finally</code>).
          </li>
          <li>
            Ensures all promise callbacks run before rendering or macrotasks.
          </li>
          <li>Makes async code easier to reason about.</li>
          <li>Supports chaining and composition of asynchronous operations.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does a
            promise execute in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Its{" "}
            <code>.then/.catch</code> callbacks are queued in the microtask
            queue, running after the current stack.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between promise callbacks and setTimeout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise
            callbacks go to the microtask queue, executed before macrotasks like
            setTimeout.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            promises predictable?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because they
            always schedule callbacks via the microtask queue in FIFO order.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can multiple
            promise callbacks run in order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, all
            queued microtasks are executed in order before moving to the next
            macrotask.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promises schedule callbacks as microtasks.</li>
          <li>Executed after current code finishes and before macrotasks.</li>
          <li>Supports chaining and predictable async operations.</li>
          <li>Essential for modern asynchronous JavaScript and async/await.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 70,
    title: "Async/Await Internals",
    path: "/frontend/js/async/async-await",
    explanation: (
      <>
        <p>
          <strong>Async / Await</strong> is a modern JavaScript feature that
          makes asynchronous code look and behave like{" "}
          <strong>normal synchronous code</strong>. Internally, JavaScript still
          uses <strong>Promises</strong>, but <code>async</code> and{" "}
          <code>await</code> hide the complexity and make the flow easier to
          understand.
        </p>

        <h2>
          What <code>async</code> Does
        </h2>
        <ul>
          <li>Declares a function as asynchronous.</li>
          <li>
            An <code>async</code> function{" "}
            <strong>always returns a Promise</strong>.
          </li>
          <li>
            If you return a value, it becomes{" "}
            <code>Promise.resolve(value)</code>.
          </li>
          <li>
            If an error is thrown, it becomes <code>Promise.reject(error)</code>
            .
          </li>
        </ul>

        <h2>
          What <code>await</code> Does
        </h2>
        <ul>
          <li>
            <code>await</code> pauses the execution of the async function.
          </li>
          <li>
            JavaScript does <strong>not block</strong> the main thread.
          </li>
          <li>It waits for the Promise to settle (resolve or reject).</li>
          <li>After resolution, execution continues from where it paused.</li>
        </ul>

        <h2>Simple Example</h2>
        <pre>
          {`function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}

async function fetchData() {
  console.log("Start");
  const result = await getData();
  console.log(result);
  console.log("End");
}

fetchData();`}
        </pre>

        <p>
          Even though <code>await</code> looks blocking, JavaScript continues
          running other code while waiting.
        </p>

        <h2>How Async/Await Works Internally</h2>
        <ul>
          <li>
            Async functions behave like <strong>generator functions</strong>{" "}
            internally.
          </li>
          <li>
            <code>await</code> splits the function into steps.
          </li>
          <li>
            The paused part is resumed later using the{" "}
            <strong>microtask queue</strong>.
          </li>
          <li>Execution resumes after the awaited Promise resolves.</li>
        </ul>

        <h2>Async/Await and the Event Loop</h2>
        <ul>
          <li>
            <code>await</code> schedules continuation as a{" "}
            <strong>microtask</strong>.
          </li>
          <li>Runs after the current call stack finishes.</li>
          <li>
            Executes before macrotasks like <code>setTimeout</code>.
          </li>
          <li>Ensures predictable async execution order.</li>
        </ul>

        <h2>Error Handling</h2>
        <pre>
          {`async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error occurred");
  }
}`}
        </pre>

        <ul>
          <li>
            Rejected Promises throw errors at <code>await</code>.
          </li>
          <li>
            <code>try/catch</code> works just like synchronous code.
          </li>
          <li>
            Makes error handling cleaner than <code>.catch()</code> chains.
          </li>
        </ul>

        <h2>Why Async/Await Is Important</h2>
        <ul>
          <li>Makes asynchronous code easier to read.</li>
          <li>
            Reduces nested <code>.then()</code> calls.
          </li>
          <li>Feels like step-by-step execution.</li>
          <li>Improves debugging and maintenance.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Using <code>await</code> outside an <code>async</code> function.
          </li>
          <li>Forgetting that async functions always return Promises.</li>
          <li>
            Awaiting independent tasks sequentially instead of in parallel.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            async/await block JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it pauses
            only the async function, not the main thread.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does an
            async function return?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Always a
            Promise.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does await
            resume execution?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Via the
            microtask queue after the Promise resolves.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            async/await better than .then?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Cleaner
            syntax, easier error handling, better readability.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>async</code> turns a function into a Promise-based function.
          </li>
          <li>
            <code>await</code> pauses execution until a Promise settles.
          </li>
          <li>Execution resumes using the microtask queue.</li>
          <li>Makes async JavaScript simple, readable, and maintainable.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 71,
    title: "setTimeout vs setImmediate vs requestAnimationFrame",
    path: "/frontend/js/async/timers-vs-raf",
    explanation: (
      <>
        <p>
          JavaScript provides different ways to schedule code to run later.
          <strong> setTimeout</strong>, <strong>setImmediate</strong>, and
          <strong> requestAnimationFrame</strong> look similar, but they are
          used for very different purposes and run at different times in the
          <strong> event loop</strong>.
        </p>

        <h2>1️⃣ setTimeout</h2>
        <p>
          <strong>setTimeout</strong> schedules code to run after a minimum
          delay. It does <strong>not guarantee exact timing</strong>.
        </p>

        <ul>
          <li>
            Runs as a <strong>macrotask</strong>.
          </li>
          <li>Executed only when the call stack is empty.</li>
          <li>Delay is the minimum wait time, not exact.</li>
          <li>Commonly used for timers and delayed actions.</li>
        </ul>

        <pre>
          {`setTimeout(() => {
  console.log("Runs later");
}, 1000);`}
        </pre>

        <h2>Why setTimeout Exists</h2>
        <ul>
          <li>Delay execution without blocking the main thread.</li>
          <li>Schedule background or non-urgent work.</li>
          <li>Useful for debouncing and retry logic.</li>
        </ul>

        <h2>2️⃣ setImmediate (Node.js only)</h2>
        <p>
          <strong>setImmediate</strong> is mainly used in{" "}
          <strong>Node.js</strong>. It runs code immediately{" "}
          <strong>after I/O operations</strong>.
        </p>

        <ul>
          <li>Executed after the current event loop phase.</li>
          <li>Runs before timers scheduled with setTimeout(0).</li>
          <li>Not available in browsers.</li>
          <li>Used for fast follow-up tasks in server code.</li>
        </ul>

        <pre>
          {`setImmediate(() => {
  console.log("Runs after I/O");
});`}
        </pre>

        <h2>Why setImmediate Exists</h2>
        <ul>
          <li>Allows code to run right after async I/O.</li>
          <li>Improves performance in Node.js servers.</li>
          <li>Gives predictable execution timing in backend apps.</li>
        </ul>

        <h2>3️⃣ requestAnimationFrame (Browser only)</h2>
        <p>
          <strong>requestAnimationFrame (rAF)</strong> schedules code to run
          <strong> before the browser repaints the screen</strong>.
        </p>

        <ul>
          <li>Runs before the next screen refresh.</li>
          <li>Perfect for animations and UI updates.</li>
          <li>Syncs with the browser’s refresh rate.</li>
          <li>Paused automatically when tab is inactive.</li>
        </ul>

        <pre>
          {`requestAnimationFrame(() => {
  element.style.transform = "translateX(100px)";
});`}
        </pre>

        <h2>Why requestAnimationFrame Exists</h2>
        <ul>
          <li>Creates smooth animations.</li>
          <li>Prevents unnecessary re-renders.</li>
          <li>More efficient than setTimeout for UI work.</li>
        </ul>

        <h2>Execution Order (Simplified)</h2>
        <ul>
          <li>Current call stack finishes</li>
          <li>Microtasks (Promises)</li>
          <li>requestAnimationFrame (before repaint)</li>
          <li>Macrotasks (setTimeout)</li>
          <li>setImmediate (Node.js specific)</li>
        </ul>

        <h2>When to Use What?</h2>
        <ul>
          <li>
            <strong>setTimeout</strong> → Delays, retries, non-UI work
          </li>
          <li>
            <strong>setImmediate</strong> → Node.js async follow-ups
          </li>
          <li>
            <strong>requestAnimationFrame</strong> → Animations, UI updates
          </li>
        </ul>

        <h2>Performance Considerations</h2>
        <ul>
          <li>setTimeout may cause frame drops in animations.</li>
          <li>rAF is optimized for rendering.</li>
          <li>setImmediate improves backend responsiveness.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Using setTimeout for animations.</li>
          <li>Expecting exact timing from setTimeout.</li>
          <li>Using setImmediate in browsers.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is setTimeout
            guaranteed to run on time?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it runs
            after the delay when the stack is free.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            requestAnimationFrame better for animations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It runs before
            repaint and syncs with screen refresh.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where does
            setImmediate work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Only in
            Node.js.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>setTimeout → delayed macrotask</li>
          <li>setImmediate → Node.js post-I/O execution</li>
          <li>requestAnimationFrame → smooth UI updates</li>
          <li>Choosing the right one improves performance and UX</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 72,
    title: "fetch Streaming & ReadableStreams",
    path: "/frontend/js/async/fetch-streaming",
    explanation: (
      <>
        <p>
          Normally, when you use <strong>fetch()</strong>, JavaScript waits for
          the <strong>entire response</strong> to download before you can use
          it. With <strong>fetch streaming</strong>, you can start reading the
          data
          <strong>piece by piece</strong> as it arrives.
        </p>

        <h2>What Is Fetch Streaming?</h2>
        <p>
          Fetch streaming allows you to process large responses in
          <strong> small chunks</strong> instead of loading everything into
          memory at once.
        </p>

        <ul>
          <li>fetch() still returns a Promise</li>
          <li>
            Response body is a <strong>ReadableStream</strong>
          </li>
          <li>Data arrives gradually</li>
          <li>You control how and when chunks are processed</li>
        </ul>

        <h2>Why Streaming Is Needed</h2>
        <ul>
          <li>Large files can crash memory if fully loaded</li>
          <li>Users want faster first response</li>
          <li>Apps should remain responsive</li>
          <li>Useful for real-time or progressive data</li>
        </ul>

        <h2>ReadableStream (Simple Meaning)</h2>
        <p>
          A <strong>ReadableStream</strong> is a data source that sends data
          <strong> over time</strong> instead of all at once.
        </p>

        <ul>
          <li>Think of it like water flowing from a tap</li>
          <li>You read until no data is left</li>
          <li>Each read gives a small chunk</li>
        </ul>

        <h2>Basic Streaming Example</h2>
        <pre>
          {`const response = await fetch("/big-data");
const reader = response.body.getReader();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log("Chunk received:", value);
}`}
        </pre>

        <h2>How It Works Internally</h2>
        <ul>
          <li>fetch starts network request</li>
          <li>Browser receives response chunks</li>
          <li>Chunks are placed into a ReadableStream</li>
          <li>reader.read() pulls data chunk by chunk</li>
          <li>Memory is freed as chunks are processed</li>
        </ul>

        <h2>Why It Improves Performance</h2>
        <ul>
          <li>Lower memory usage</li>
          <li>Faster time-to-first-byte</li>
          <li>No need to wait for full download</li>
          <li>Better user experience for large data</li>
        </ul>

        <h2>Common Use Cases</h2>
        <ul>
          <li>Large JSON or CSV files</li>
          <li>Video or audio streaming</li>
          <li>Chat or live data feeds</li>
          <li>Progressive rendering</li>
        </ul>

        <h2>Streaming vs Normal fetch()</h2>
        <ul>
          <li>
            <strong>Normal fetch:</strong> waits for full response
          </li>
          <li>
            <strong>Streaming fetch:</strong> processes data gradually
          </li>
          <li>Streaming is better for large payloads</li>
        </ul>

        <h2>Memory Benefits</h2>
        <ul>
          <li>No large buffers held in memory</li>
          <li>Garbage collection happens earlier</li>
          <li>Reduces memory pressure on low-end devices</li>
        </ul>

        <h2>Limitations</h2>
        <ul>
          <li>Not supported in very old browsers</li>
          <li>More complex than normal fetch</li>
          <li>Some APIs still require full response</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Using streaming for small responses</li>
          <li>Forgetting to handle done = true</li>
          <li>Trying to use response.json() with streams</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What problem
            does fetch streaming solve?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It avoids
            loading large responses fully into memory.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            ReadableStream?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A stream that
            provides data chunks over time.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can streaming
            improve UX?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, users see
            data sooner and apps stay responsive.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>fetch streaming reads data in chunks</li>
          <li>ReadableStream enables incremental processing</li>
          <li>Reduces memory usage</li>
          <li>Best for large or real-time responses</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 73,
    title: "Job Queue Mechanics",
    path: "/frontend/js/async/job-queue",
    explanation: (
      <>
        <p>
          The <strong>Job Queue</strong> (also called the{" "}
          <strong>Microtask Queue</strong>) is a special queue in JavaScript
          where <strong>Promise</strong> and
          <strong> async/await</strong> callbacks are stored. These tasks run
          <strong>immediately after the current code finishes</strong> and
          <strong>before any macrotasks</strong>.
        </p>

        <h2>What Is the Job Queue?</h2>
        <p>
          The Job Queue holds <strong>high-priority async tasks</strong> that
          must run as soon as possible.
        </p>

        <ul>
          <li>
            Also known as the <strong>Microtask Queue</strong>
          </li>
          <li>Used by Promises and async/await</li>
          <li>Runs after the call stack is empty</li>
          <li>Always runs before macrotasks</li>
        </ul>

        <h2>What Goes Into the Job Queue?</h2>
        <ul>
          <li>
            <code>.then()</code> / <code>.catch()</code> /{" "}
            <code>.finally()</code>
          </li>
          <li>
            <code>async / await</code> continuation
          </li>
          <li>
            <code>queueMicrotask()</code>
          </li>
          <li>MutationObserver callbacks</li>
        </ul>

        <h2>Simple Example</h2>
        <pre>
          {`console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`}
        </pre>

        <p>Output:</p>
        <pre>
          {`Start
End
Promise
setTimeout`}
        </pre>

        <h2>Why This Happens</h2>
        <ul>
          <li>Promises are placed in the Job Queue</li>
          <li>setTimeout goes to the Macrotask Queue</li>
          <li>Job Queue always runs first</li>
        </ul>

        <h2>How Job Queue Works Internally</h2>
        <ul>
          <li>JavaScript runs synchronous code</li>
          <li>Call stack becomes empty</li>
          <li>Event Loop checks Job Queue first</li>
          <li>Executes all microtasks completely</li>
          <li>Only then moves to macrotasks</li>
        </ul>

        <h2>Why Job Queue Exists</h2>
        <ul>
          <li>Ensures predictable async behavior</li>
          <li>Prevents race conditions</li>
          <li>Guarantees promise resolution order</li>
          <li>Keeps async logic reliable</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Promises always run before timers</li>
          <li>Stable execution order</li>
          <li>Better async control</li>
          <li>Cleaner async/await behavior</li>
        </ul>

        <h2>Job Queue vs Task Queue</h2>
        <ul>
          <li>
            <strong>Job Queue:</strong> Promises, async/await (high priority)
          </li>
          <li>
            <strong>Task Queue:</strong> setTimeout, I/O, UI events
          </li>
          <li>Job Queue is always executed first</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming setTimeout runs before promises</li>
          <li>Blocking microtasks with infinite promise loops</li>
          <li>Not understanding render delays caused by microtasks</li>
        </ul>

        <h2>Performance Note</h2>
        <ul>
          <li>Too many microtasks can delay rendering</li>
          <li>Promises should resolve quickly</li>
          <li>Use wisely in UI-heavy applications</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Job Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A queue that
            stores microtasks like promise callbacks.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which runs
            first: Job Queue or Task Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Job Queue
            always runs first.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if Job Queue never becomes empty?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Macrotasks and
            rendering can be blocked.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is Job Queue
            same as Microtask Queue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, Job Queue
            is another name for Microtask Queue.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Job Queue handles microtasks</li>
          <li>Promises and async/await use it</li>
          <li>Runs before macrotasks</li>
          <li>Critical for predictable async execution</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 74,
    title: "Cooperative Concurrency",
    path: "/frontend/js/async/cooperative-concurrency",
    explanation: (
      <>
        <p>
          <strong>Cooperative Concurrency</strong> is a way of writing code
          where
          <strong> long-running tasks voluntarily pause (yield)</strong> so that
          other important work—like UI updates or user interactions—can run.
        </p>

        <p>
          Instead of blocking the browser, tasks <strong>cooperate</strong> with
          the <strong>event loop</strong> to keep the app responsive.
        </p>

        <h2>What Is Cooperative Concurrency?</h2>
        <ul>
          <li>Tasks run in small chunks</li>
          <li>Long work is broken into steps</li>
          <li>Each step gives control back to the event loop</li>
          <li>Prevents UI freezing</li>
        </ul>

        <h2>Why Do We Need It?</h2>
        <ul>
          <li>JavaScript runs on a single thread</li>
          <li>Heavy computation can block rendering</li>
          <li>User clicks, scrolling, and animations may freeze</li>
          <li>Cooperative concurrency avoids this problem</li>
        </ul>

        <h2>Blocking Example (Bad)</h2>
        <pre>
          {`function heavyTask() {
  for (let i = 0; i < 1e9; i++) {
    // long blocking loop
  }
  console.log("Done");
}`}
        </pre>

        <p>❌ This blocks the UI completely until the loop finishes.</p>

        <h2>Cooperative Version (Good)</h2>
        <pre>
          {`function cooperativeTask(count) {
  if (count === 0) return;

  // do small work
  console.log("Working...", count);

  setTimeout(() => {
    cooperativeTask(count - 1);
  }, 0);
}

cooperativeTask(5);`}
        </pre>

        <p>✅ The task pauses and lets the browser handle UI updates.</p>

        <h2>How Cooperative Concurrency Works</h2>
        <ul>
          <li>Task starts executing</li>
          <li>Performs small unit of work</li>
          <li>Yields control using async tools</li>
          <li>Event loop runs other tasks</li>
          <li>Task resumes later</li>
        </ul>

        <h2>Ways to Yield Control</h2>
        <ul>
          <li>
            <code>setTimeout(fn, 0)</code>
          </li>
          <li>
            <code>requestAnimationFrame()</code>
          </li>
          <li>
            <code>await Promise.resolve()</code>
          </li>
          <li>
            <code>scheduler.yield()</code> (modern browsers)
          </li>
        </ul>

        <h2>requestAnimationFrame Example</h2>
        <pre>
          {`function renderStep() {
  // update UI safely
  console.log("Rendering chunk");

  requestAnimationFrame(renderStep);
}

renderStep();`}
        </pre>

        <h2>React & Cooperative Concurrency</h2>
        <ul>
          <li>React Fiber uses cooperative scheduling</li>
          <li>Rendering work is split into units</li>
          <li>React pauses rendering when browser is busy</li>
          <li>Ensures smooth UI and interactions</li>
        </ul>

        <h2>Why It’s Important</h2>
        <ul>
          <li>Keeps UI responsive</li>
          <li>Improves user experience</li>
          <li>Prevents frame drops</li>
          <li>Essential for large applications</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>No UI freezing</li>
          <li>Smooth animations</li>
          <li>Better perceived performance</li>
          <li>Scales well with complex apps</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Using long synchronous loops</li>
          <li>Not yielding during heavy computation</li>
          <li>Overusing microtasks and blocking rendering</li>
          <li>Ignoring browser rendering cycles</li>
        </ul>

        <h2>Performance Note</h2>
        <ul>
          <li>Too frequent yielding adds overhead</li>
          <li>Balance chunk size carefully</li>
          <li>Use rAF for UI work</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            cooperative concurrency?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A model where
            tasks voluntarily pause to let other work run.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is it
            important in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            JavaScript is single-threaded and UI can block.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does React
            use cooperative concurrency?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By splitting
            rendering into interruptible units using Fiber.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if tasks don’t yield?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> UI freezes and
            poor user experience.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Tasks cooperate by yielding control</li>
          <li>Prevents UI blocking</li>
          <li>Works with event loop</li>
          <li>Core idea behind React scheduling</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 75,
    title: "Promise States",
    path: "/frontend/js/promises/states",
    explanation: (
      <>
        <p>
          A <strong>Promise</strong> in JavaScript represents a value that will
          be available <strong>now, later, or never</strong>. Internally, every
          Promise moves through <strong>specific states</strong> that describe
          its current status.
        </p>

        <h2>What Are Promise States?</h2>
        <p>
          Promise states tell the JavaScript engine whether an async operation
          is still running, completed successfully, or failed.
        </p>

        <ul>
          <li>
            <strong>Pending</strong> – Initial state, operation not finished yet
          </li>
          <li>
            <strong>Fulfilled</strong> – Operation completed successfully
          </li>
          <li>
            <strong>Rejected</strong> – Operation failed with an error
          </li>
        </ul>

        <h2>Pending State</h2>
        <ul>
          <li>Promise is created</li>
          <li>Async work is still running</li>
          <li>No result available yet</li>
          <li>Can move only to fulfilled or rejected</li>
        </ul>

        <h2>Fulfilled State</h2>
        <ul>
          <li>Async operation completed successfully</li>
          <li>Promise now has a resolved value</li>
          <li>
            <code>.then()</code> callbacks are executed
          </li>
        </ul>

        <h2>Rejected State</h2>
        <ul>
          <li>Async operation failed</li>
          <li>Error or reason is stored</li>
          <li>
            <code>.catch()</code> callbacks are executed
          </li>
        </ul>

        <h2>Simple Example</h2>
        <pre>
          {`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});`}
        </pre>

        <p>
          Initially → <strong>Pending</strong>
          <br />
          After 1 second → <strong>Fulfilled</strong>
        </p>

        <h2>Rejected Example</h2>
        <pre>
          {`const promise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});`}
        </pre>

        <p>
          This promise immediately moves to the <strong>Rejected</strong> state.
        </p>

        <h2>Immutable State Transitions</h2>
        <ul>
          <li>A promise can change state only once</li>
          <li>Pending → Fulfilled OR Rejected</li>
          <li>Once settled, state never changes</li>
          <li>Extra resolve/reject calls are ignored</li>
        </ul>

        <h2>Why Promise States Are Important</h2>
        <ul>
          <li>Helps manage async flow</li>
          <li>Prevents inconsistent data</li>
          <li>Ensures predictable execution</li>
          <li>Makes error handling reliable</li>
        </ul>

        <h2>How JavaScript Tracks Promise State</h2>
        <ul>
          <li>Engine stores internal state</li>
          <li>State is hidden from developers</li>
          <li>Callbacks are queued based on state</li>
          <li>Handled via microtask queue</li>
        </ul>

        <h2>Promise State vs Promise Result</h2>
        <ul>
          <li>
            <strong>State:</strong> pending / fulfilled / rejected
          </li>
          <li>
            <strong>Result:</strong> value or error
          </li>
          <li>State tells status</li>
          <li>Result holds data</li>
        </ul>

        <h2>Error Propagation</h2>
        <ul>
          <li>Errors automatically move promise to rejected</li>
          <li>
            Errors bubble through <code>.then()</code> chains
          </li>
          <li>
            <code>.catch()</code> handles rejections
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Calling resolve and reject both</li>
          <li>Assuming promises can re-run</li>
          <li>Forgetting to handle rejection</li>
          <li>Expecting synchronous behavior</li>
        </ul>

        <h2>Performance Note</h2>
        <ul>
          <li>Promise state changes are lightweight</li>
          <li>Callbacks run asynchronously</li>
          <li>Too many chained promises may affect readability</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            states of a Promise?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Pending,
            Fulfilled, and Rejected.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can a promise
            change its state twice?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, once
            settled it becomes immutable.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where do
            promise callbacks run?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> In the
            microtask (job) queue.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if an error occurs in a promise?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The promise
            moves to the rejected state.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promises have three states</li>
          <li>State changes only once</li>
          <li>States control async flow</li>
          <li>Essential for reliable async code</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 76,
    title: ".then() Scheduling Mechanics",
    path: "/frontend/js/promises/then-scheduling",
    explanation: (
      <>
        <p>
          The <strong>.then()</strong> method does{" "}
          <strong>not run immediately</strong>. Instead, its callback is{" "}
          <strong>scheduled</strong> by JavaScript to run later using the{" "}
          <strong>Microtask (Job) Queue</strong>.
        </p>

        <p>
          This scheduling behavior makes promise execution
          <strong>asynchronous, predictable, and reliable</strong>.
        </p>

        <h2>What Does “.then() Scheduling” Mean?</h2>
        <ul>
          <li>
            <code>.then()</code> registers a callback
          </li>
          <li>
            The callback is placed in the <strong>Microtask Queue</strong>
          </li>
          <li>It runs only after the current call stack is empty</li>
          <li>It always runs before macrotasks</li>
        </ul>

        <h2>Simple Example</h2>
        <pre>
          {`console.log("Start");

Promise.resolve().then(() => {
  console.log("Then callback");
});

console.log("End");`}
        </pre>

        <p>Output:</p>
        <pre>
          {`Start
End
Then callback`}
        </pre>

        <h2>Why This Happens</h2>
        <ul>
          <li>Synchronous code runs first</li>
          <li>
            <code>.then()</code> callback is queued as a microtask
          </li>
          <li>Event loop executes microtasks after the stack is empty</li>
        </ul>

        <h2>Where Does .then() Go?</h2>
        <ul>
          <li>
            <strong>Not</strong> on the call stack immediately
          </li>
          <li>
            <strong>Not</strong> in the macrotask queue
          </li>
          <li>
            Always in the <strong>Microtask (Job) Queue</strong>
          </li>
        </ul>

        <h2>.then() vs setTimeout</h2>
        <pre>
          {`Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);`}
        </pre>

        <p>Output:</p>
        <pre>
          {`Promise
Timeout`}
        </pre>

        <h2>Why Promise Runs First</h2>
        <ul>
          <li>
            <code>.then()</code> → microtask
          </li>
          <li>
            <code>setTimeout</code> → macrotask
          </li>
          <li>Microtasks always execute first</li>
        </ul>

        <h2>How .then() Works Internally</h2>
        <ul>
          <li>Promise settles (fulfilled/rejected)</li>
          <li>
            Registered <code>.then()</code> callback is queued
          </li>
          <li>Placed in microtask queue</li>
          <li>Executed after current stack finishes</li>
        </ul>

        <h2>Promise Chaining & Scheduling</h2>
        <pre>
          {`Promise.resolve()
  .then(() => {
    console.log("Step 1");
  })
  .then(() => {
    console.log("Step 2");
  });`}
        </pre>

        <ul>
          <li>
            Each <code>.then()</code> is scheduled separately
          </li>
          <li>Each runs as a new microtask</li>
          <li>Order is guaranteed</li>
        </ul>

        <h2>Why This Scheduling Is Important</h2>
        <ul>
          <li>Prevents blocking synchronous code</li>
          <li>Ensures consistent async behavior</li>
          <li>Guarantees correct chaining order</li>
          <li>Makes async code easier to reason about</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Predictable execution order</li>
          <li>Reliable promise chaining</li>
          <li>Better async flow control</li>
          <li>Cleaner separation of sync and async code</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Assuming <code>.then()</code> runs synchronously
          </li>
          <li>Confusing microtasks with macrotasks</li>
          <li>Expecting UI updates inside heavy microtasks</li>
          <li>Creating infinite promise loops</li>
        </ul>

        <h2>Performance Note</h2>
        <ul>
          <li>Too many microtasks can delay rendering</li>
          <li>Promises should resolve quickly</li>
          <li>
            Avoid long logic inside <code>.then()</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is .then()
            synchronous or asynchronous?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Always
            asynchronous.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where does
            .then() execute?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> In the
            microtask (job) queue.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does
            .then() run before setTimeout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            microtasks have higher priority.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does each
            .then() create a new task?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, each
            .then() is scheduled separately.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>.then()</code> never runs immediately
          </li>
          <li>Scheduled as a microtask</li>
          <li>Runs after call stack clears</li>
          <li>Executes before macrotasks</li>
          <li>Key to predictable promise behavior</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 77,
    title: "Promise Chaining",
    path: "/frontend/js/promises/chaining",
    explanation: (
      <>
        <p>
          <strong>Promise chaining</strong> allows multiple asynchronous
          operations to be executed <strong>sequentially</strong>, where each
          step depends on the result of the previous one.
        </p>

        <p>
          This works because{" "}
          <strong>every .then() call returns a new Promise</strong>, enabling a
          clean, readable chain of async logic.
        </p>

        <h2>What Is Promise Chaining?</h2>
        <ul>
          <li>
            Calling multiple <code>.then()</code> methods in sequence
          </li>
          <li>
            Each <code>.then()</code> waits for the previous promise
          </li>
          <li>Data flows from one step to the next</li>
          <li>Execution order is guaranteed</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`Promise.resolve(1)
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
  });`}
        </pre>

        <p>Output:</p>
        <pre>
          {`1
2
3`}
        </pre>

        <h2>Why Chaining Works</h2>
        <ul>
          <li>
            Each <code>.then()</code> creates a <strong>new Promise</strong>
          </li>
          <li>Returned value becomes the next promise’s resolution value</li>
          <li>If a promise is returned, the chain waits for it</li>
          <li>
            Next <code>.then()</code> runs after resolution
          </li>
        </ul>

        <h2>Internal Flow</h2>
        <ul>
          <li>Promise settles (fulfilled or rejected)</li>
          <li>
            Associated <code>.then()</code> callback is queued
          </li>
          <li>Callback executes as a microtask</li>
          <li>Return value resolves the next promise</li>
        </ul>

        <h2>Returning Values vs Promises</h2>
        <pre>
          {`Promise.resolve()
  .then(() => 10)
  .then((v) => Promise.resolve(v * 2))
  .then((v) => console.log(v));`}
        </pre>

        <ul>
          <li>Returning a value → auto-wrapped in a Promise</li>
          <li>Returning a Promise → chain waits for it</li>
        </ul>

        <h2>Error Handling in Chains</h2>
        <pre>
          {`Promise.resolve()
  .then(() => {
    throw new Error("Failed");
  })
  .then(() => {
    console.log("Not executed");
  })
  .catch((err) => {
    console.log("Caught:", err.message);
  });`}
        </pre>

        <ul>
          <li>
            Error skips remaining <code>.then()</code>
          </li>
          <li>
            Control jumps to nearest <code>.catch()</code>
          </li>
          <li>Error propagation is automatic</li>
        </ul>

        <h2>Multiple Catch Handlers</h2>
        <ul>
          <li>
            Each <code>.catch()</code> also returns a Promise
          </li>
          <li>Chain can continue after handling errors</li>
          <li>Useful for recovery logic</li>
        </ul>

        <h2>Maintaining Execution Order</h2>
        <ul>
          <li>Promises execute in strict order</li>
          <li>No race conditions in a single chain</li>
          <li>Each step waits for the previous one</li>
        </ul>

        <h2>Why Promise Chaining Is Important</h2>
        <ul>
          <li>Avoids callback hell</li>
          <li>Improves readability</li>
          <li>Predictable async flow</li>
          <li>Centralized error handling</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Forgetting to return a value or promise</li>
          <li>Mixing synchronous and async logic incorrectly</li>
          <li>Creating deeply nested chains instead of flat ones</li>
          <li>
            Not handling errors with <code>.catch()</code>
          </li>
        </ul>

        <h2>Performance Notes</h2>
        <ul>
          <li>Each step runs as a microtask</li>
          <li>Too many chained microtasks may delay rendering</li>
          <li>Prefer batching where possible</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why can
            promises be chained?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            .then() always returns a new Promise.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if you don’t return anything in .then()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The next
            promise resolves with undefined.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How are errors
            propagated?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Errors skip to
            the nearest .catch().
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does chaining
            guarantee order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, execution
            order is preserved.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Each <code>.then()</code> returns a new Promise
          </li>
          <li>Promises execute sequentially</li>
          <li>Values and promises propagate automatically</li>
          <li>Errors bubble down the chain</li>
          <li>Foundation of clean async JavaScript</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 78,
    title: "Error Propagation in Promises",
    path: "/frontend/js/promises/error-propagation",
    explanation: (
      <>
        <p>
          <strong>Error propagation in promises</strong> means that when an
          error happens in one step of a promise chain, the error automatically
          <strong>moves down the chain</strong> until it is handled.
        </p>

        <p>
          This behavior is very similar to how errors work in normal synchronous
          JavaScript using <code>throw</code> and <code>try/catch</code>.
        </p>

        <h2>What Is Error Propagation?</h2>
        <ul>
          <li>
            An error occurs inside a promise or <code>.then()</code>
          </li>
          <li>
            The promise becomes <strong>rejected</strong>
          </li>
          <li>
            All next <code>.then()</code> steps are skipped
          </li>
          <li>
            The error moves forward until a <code>.catch()</code> is found
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong");
  })
  .then(() => {
    console.log("This will NOT run");
  })
  .catch((error) => {
    console.log("Caught:", error.message);
  });`}
        </pre>

        <p>
          Once the error is thrown, JavaScript{" "}
          <strong>skips all remaining .then()</strong>
          calls and jumps directly to <code>.catch()</code>.
        </p>

        <h2>Why Errors Automatically Move Down</h2>
        <ul>
          <li>
            Each <code>.then()</code> returns a new Promise
          </li>
          <li>If an error occurs, that Promise is rejected</li>
          <li>The next promise receives the rejection</li>
          <li>This continues until a handler exists</li>
        </ul>

        <h2>Throwing Errors vs Rejecting Promises</h2>
        <pre>
          {`// Throwing an error
.then(() => {
  throw new Error("Failed");
});

// Rejecting a promise
.then(() => {
  return Promise.reject("Failed");
});`}
        </pre>

        <ul>
          <li>Both approaches do the same thing</li>
          <li>Both cause promise rejection</li>
          <li>Both trigger error propagation</li>
        </ul>

        <h2>Handling Errors with .catch()</h2>
        <ul>
          <li>
            <code>.catch()</code> stops error propagation
          </li>
          <li>It receives the error value</li>
          <li>It allows recovery or logging</li>
        </ul>

        <pre>
          {`Promise.resolve()
  .then(() => {
    throw "Network error";
  })
  .catch((err) => {
    console.log(err);
  });`}
        </pre>

        <h2>Continuing After an Error</h2>
        <p>
          After handling an error, the chain can continue if
          <code>.catch()</code> returns a value.
        </p>

        <pre>
          {`Promise.resolve()
  .then(() => {
    throw "Error occurred";
  })
  .catch(() => {
    return "Recovered";
  })
  .then((value) => {
    console.log(value);
  });`}
        </pre>

        <p>Output:</p>
        <pre>{`Recovered`}</pre>

        <h2>Uncaught Promise Rejections</h2>
        <ul>
          <li>
            If no <code>.catch()</code> exists
          </li>
          <li>
            The error becomes an <strong>unhandled rejection</strong>
          </li>
          <li>Browser triggers global error events</li>
          <li>Node.js may log warnings or crash</li>
        </ul>

        <h2>Why Uncaught Errors Are Dangerous</h2>
        <ul>
          <li>Hidden bugs</li>
          <li>Broken async flows</li>
          <li>Application instability</li>
          <li>Difficult debugging</li>
        </ul>

        <h2>Promise Errors vs Synchronous Errors</h2>
        <table>
          <thead>
            <tr>
              <th>Synchronous</th>
              <th>Promises</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>try / catch</td>
              <td>.then() / .catch()</td>
            </tr>
            <tr>
              <td>throw Error</td>
              <td>reject Promise</td>
            </tr>
            <tr>
              <td>Immediate</td>
              <td>Async (microtask)</td>
            </tr>
          </tbody>
        </table>

        <h2>Microtask Queue Behavior</h2>
        <ul>
          <li>Error handlers run as microtasks</li>
          <li>They execute after current call stack</li>
          <li>Before macrotasks like timers</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always end chains with <code>.catch()</code>
          </li>
          <li>Handle errors close to their source</li>
          <li>Log errors clearly</li>
          <li>Avoid silent failures</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            when a promise is rejected?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The rejection
            propagates down the chain until caught.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What if there
            is no .catch()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It becomes an
            unhandled promise rejection.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is throwing an
            error inside .then() allowed?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, it
            automatically rejects the promise.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Errors move down promise chains automatically</li>
          <li>Rejected promises skip remaining .then()</li>
          <li>.catch() stops propagation</li>
          <li>Unhandled rejections are dangerous</li>
          <li>Error flow mirrors synchronous JavaScript</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 79,
    title: "Promise.all Internals",
    path: "/frontend/js/promises/promise-all",
    explanation: (
      <>
        <p>
          <strong>Promise.all</strong> is a built-in JavaScript method that
          allows multiple promises to run <strong>in parallel</strong> and waits
          until
          <strong>all of them succeed</strong> before continuing.
        </p>

        <p>
          It is mainly used when several independent asynchronous tasks must
          complete before moving forward.
        </p>

        <h2>What Is Promise.all?</h2>
        <ul>
          <li>
            Accepts an <strong>iterable</strong> (usually an array) of promises
          </li>
          <li>
            Runs all promises <strong>at the same time</strong>
          </li>
          <li>
            Resolves when <strong>all promises resolve</strong>
          </li>
          <li>
            Rejects immediately if <strong>any promise rejects</strong>
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  });`}
        </pre>

        <p>Output:</p>
        <pre>{`[10, 20, 30]`}</pre>

        <h2>Why Promise.all Exists</h2>
        <ul>
          <li>To avoid unnecessary sequential waiting</li>
          <li>To improve performance using parallel execution</li>
          <li>To synchronize multiple async operations</li>
          <li>To keep code clean and readable</li>
        </ul>

        <h2>When to Use Promise.all</h2>
        <ul>
          <li>Multiple API calls needed together</li>
          <li>Loading dashboard data from many endpoints</li>
          <li>Fetching user, posts, and comments at once</li>
          <li>Independent async tasks with shared completion</li>
        </ul>

        <h2>How Promise.all Works Internally</h2>
        <ul>
          <li>Creates a new parent promise</li>
          <li>Iterates through each promise</li>
          <li>Attaches internal handlers to each promise</li>
          <li>Stores resolved values by index</li>
          <li>Counts completed promises</li>
          <li>Resolves only when count equals total</li>
        </ul>

        <h2>Order Preservation</h2>
        <p>
          Promise.all <strong>preserves the order</strong> of promises based on
          the original array — not the completion time.
        </p>

        <pre>
          {`Promise.all([
  Promise.resolve("first"),
  new Promise((res) => setTimeout(() => res("second"), 100)),
  Promise.resolve("third"),
]).then(console.log);`}
        </pre>

        <p>Output:</p>
        <pre>{`["first", "second", "third"]`}</pre>

        <h2>What Happens on Rejection?</h2>
        <ul>
          <li>If any promise rejects</li>
          <li>Promise.all immediately rejects</li>
          <li>Remaining results are ignored</li>
          <li>Error propagates to .catch()</li>
        </ul>

        <pre>
          {`Promise.all([
  Promise.resolve("OK"),
  Promise.reject("Failed"),
  Promise.resolve("Ignored"),
])
.catch(console.log);`}
        </pre>

        <p>Output:</p>
        <pre>{`Failed`}</pre>

        <h2>Why Promise.all Fails Fast</h2>
        <ul>
          <li>No point waiting if one dependency fails</li>
          <li>Saves time and resources</li>
          <li>Matches real-world dependency logic</li>
        </ul>

        <h2>Promise.all vs Sequential Await</h2>
        <table>
          <thead>
            <tr>
              <th>Promise.all</th>
              <th>Sequential await</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parallel execution</td>
              <td>One-by-one execution</td>
            </tr>
            <tr>
              <td>Faster</td>
              <td>Slower</td>
            </tr>
            <tr>
              <td>Best for independent tasks</td>
              <td>Best for dependent tasks</td>
            </tr>
          </tbody>
        </table>

        <h2>Microtask Queue Integration</h2>
        <ul>
          <li>Promise.all handlers run as microtasks</li>
          <li>Executed after call stack clears</li>
          <li>Before macrotasks like setTimeout</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Using Promise.all for dependent operations</li>
          <li>Forgetting error handling</li>
          <li>Expecting partial success results</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use Promise.all for independent async tasks</li>
          <li>Always wrap with try/catch or .catch()</li>
          <li>Use Promise.allSettled if partial success is acceptable</li>
          <li>Keep promises pure and predictable</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            Promise.all return?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A single
            promise that resolves to an array of results.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            Promise.all run promises in parallel?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, all
            promises start execution immediately.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if one promise fails?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise.all
            rejects immediately with that error.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            Promise.all preserve order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, results
            match the input array order.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promise.all runs multiple promises in parallel</li>
          <li>Resolves only when all succeed</li>
          <li>Rejects immediately on first failure</li>
          <li>Preserves result order</li>
          <li>Integrated with microtask queue</li>
          <li>Essential for performance optimization</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 80,
    title: "Promise.allSettled Internals",
    path: "/frontend/js/promises/promise-allsettled",
    explanation: (
      <>
        <p>
          <strong>Promise.allSettled</strong> is a JavaScript method that waits
          for
          <strong>all promises to finish</strong>, regardless of whether they
          succeed or fail.
        </p>

        <p>
          Unlike <code>Promise.all</code>, it{" "}
          <strong>never rejects early</strong>. It always resolves with a
          complete report of every promise outcome.
        </p>

        <h2>What Is Promise.allSettled?</h2>
        <ul>
          <li>Accepts an array (or iterable) of promises</li>
          <li>
            Waits until <strong>every promise settles</strong>
          </li>
          <li>Handles both success and failure</li>
          <li>Always resolves (never rejects)</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed"),
])
.then((results) => {
  console.log(results);
});`}
        </pre>

        <p>Output:</p>
        <pre>
          {`[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" }
]`}
        </pre>

        <h2>Why Promise.allSettled Exists</h2>
        <ul>
          <li>Sometimes failure is acceptable</li>
          <li>You still want results from successful promises</li>
          <li>You need a full status report</li>
          <li>You want predictable completion</li>
        </ul>

        <h2>When to Use Promise.allSettled</h2>
        <ul>
          <li>Running background tasks</li>
          <li>Uploading multiple files</li>
          <li>Batch processing jobs</li>
          <li>Analytics or logging operations</li>
          <li>Independent API calls where partial success is fine</li>
        </ul>

        <h2>How Promise.allSettled Works Internally</h2>
        <ul>
          <li>Creates a parent promise</li>
          <li>Attaches handlers to every input promise</li>
          <li>Tracks settlement (fulfilled or rejected)</li>
          <li>Stores result objects for each promise</li>
          <li>Waits until all promises finish</li>
          <li>Resolves with the full results array</li>
        </ul>

        <h2>Result Object Structure</h2>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Property</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fulfilled</td>
              <td>value</td>
            </tr>
            <tr>
              <td>rejected</td>
              <td>reason</td>
            </tr>
          </tbody>
        </table>

        <h2>Order Preservation</h2>
        <p>
          Just like <code>Promise.all</code>,{" "}
          <strong>order is preserved</strong>
          based on the input array, not execution speed.
        </p>

        <h2>Comparison with Promise.all</h2>
        <table>
          <thead>
            <tr>
              <th>Promise.all</th>
              <th>Promise.allSettled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fails fast</td>
              <td>Never fails</td>
            </tr>
            <tr>
              <td>Rejects on first error</td>
              <td>Waits for all</td>
            </tr>
            <tr>
              <td>No partial results</td>
              <td>Complete report</td>
            </tr>
          </tbody>
        </table>

        <h2>Why Promise.allSettled Is Predictable</h2>
        <ul>
          <li>No early termination</li>
          <li>No unhandled rejections</li>
          <li>Guaranteed completion</li>
          <li>Safe for batch operations</li>
        </ul>

        <h2>Microtask Queue Behavior</h2>
        <ul>
          <li>Handlers run in the microtask queue</li>
          <li>Executed after call stack clears</li>
          <li>Before macrotasks like setTimeout</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Expecting Promise.allSettled to reject</li>
          <li>Ignoring rejected results</li>
          <li>Using it when failure should stop execution</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use when partial success is acceptable</li>
          <li>
            Always inspect <code>status</code>
          </li>
          <li>Handle rejected reasons explicitly</li>
          <li>Prefer Promise.all for strict dependencies</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            Promise.allSettled ever reject?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it always
            resolves with results.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use Promise.allSettled?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you need
            results from all promises, even failures.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does it
            differ from Promise.all?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise.all
            fails fast, allSettled waits for all.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is order
            preserved?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, results
            match input order.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promise.allSettled waits for all promises</li>
          <li>Handles both success and failure</li>
          <li>Never rejects</li>
          <li>Returns detailed outcome objects</li>
          <li>Preserves order</li>
          <li>Ideal for batch and background tasks</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 81,
    title: "Promise.race Internals",
    path: "/frontend/js/promises/promise-race",
    explanation: (
      <>
        <p>
          <strong>Promise.race</strong> is a JavaScript method that settles as
          soon as <strong>any one promise settles</strong>, whether it resolves
          or rejects.
        </p>

        <p>
          It does <strong>not wait</strong> for all promises. The first
          completed promise <strong>wins the race</strong>, and all others are
          ignored.
        </p>

        <h2>What Is Promise.race?</h2>
        <ul>
          <li>Accepts an array (or iterable) of promises</li>
          <li>Returns the result of the first settled promise</li>
          <li>Can resolve or reject</li>
          <li>Ignores remaining promises</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 100)),
  new Promise(res => setTimeout(() => res("Slow"), 300)),
])
.then((result) => {
  console.log(result);
});`}
        </pre>

        <p>Output:</p>
        <pre>{`Fast`}</pre>

        <h2>Why Promise.race Exists</h2>
        <ul>
          <li>To get the fastest response</li>
          <li>To implement timeouts</li>
          <li>To compete multiple async sources</li>
          <li>To avoid unnecessary waiting</li>
        </ul>

        <h2>When to Use Promise.race</h2>
        <ul>
          <li>API request with timeout</li>
          <li>Fallback data sources</li>
          <li>First-available response logic</li>
          <li>Performance-sensitive operations</li>
        </ul>

        <h2>How Promise.race Works Internally</h2>
        <ul>
          <li>Creates a parent promise</li>
          <li>Attaches resolve and reject handlers to all promises</li>
          <li>Listens for the first settlement</li>
          <li>Settles immediately with that result</li>
          <li>Ignores all remaining promises</li>
        </ul>

        <h2>Resolve vs Reject Behavior</h2>
        <table>
          <thead>
            <tr>
              <th>First Promise</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resolved</td>
              <td>Promise.race resolves</td>
            </tr>
            <tr>
              <td>Rejected</td>
              <td>Promise.race rejects</td>
            </tr>
          </tbody>
        </table>

        <h2>Order vs Speed</h2>
        <p>
          Promise.race does <strong>not preserve order</strong>. The promise
          that settles first wins, regardless of position in the array.
        </p>

        <h2>Comparison with Promise.allSettled</h2>
        <table>
          <thead>
            <tr>
              <th>Promise.race</th>
              <th>Promise.allSettled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First settled wins</td>
              <td>Waits for all</td>
            </tr>
            <tr>
              <td>Can reject early</td>
              <td>Never rejects</td>
            </tr>
            <tr>
              <td>No full report</td>
              <td>Complete report</td>
            </tr>
          </tbody>
        </table>

        <h2>Why Promise.race Is Predictable</h2>
        <ul>
          <li>Only one result matters</li>
          <li>No unnecessary waiting</li>
          <li>Clear winner logic</li>
          <li>Deterministic outcome</li>
        </ul>

        <h2>Microtask Queue Behavior</h2>
        <ul>
          <li>Settlement handlers run as microtasks</li>
          <li>Executed after call stack clears</li>
          <li>Before macrotasks like setTimeout</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming it waits for all promises</li>
          <li>Using it when all results are required</li>
          <li>Forgetting rejection handling</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use for timeouts and fast responses</li>
          <li>Always handle both resolve and reject</li>
          <li>Combine with Promise.all if needed</li>
          <li>Keep promises independent</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            Promise.race return?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The result of
            the first settled promise.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can
            Promise.race reject?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, if the
            first settled promise rejects.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            Promise.race preserve order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it depends
            on settlement speed.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promise.race settles on the first completed promise</li>
          <li>Can resolve or reject</li>
          <li>Ignores remaining promises</li>
          <li>Does not preserve order</li>
          <li>Runs in microtask queue</li>
          <li>Ideal for timeouts and fast-response logic</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 82,
    title: "Promise.any Internals",
    path: "/frontend/js/promises/promise-any",
    explanation: (
      <>
        <p>
          <strong>Promise.any</strong> is a JavaScript method that waits for
          <strong>the first successful promise</strong>.
        </p>

        <p>
          If at least one promise is fulfilled (success), Promise.any resolves
          immediately. It rejects <strong>only when all promises fail</strong>.
        </p>

        <h2>What Is Promise.any?</h2>
        <ul>
          <li>Accepts an array (or iterable) of promises</li>
          <li>
            Resolves when the <strong>first promise succeeds</strong>
          </li>
          <li>Ignores rejected promises</li>
          <li>
            Rejects only if <strong>all promises are rejected</strong>
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Success"),
  Promise.reject("Error 2"),
])
.then((result) => {
  console.log(result);
});`}
        </pre>

        <p>Output:</p>
        <pre>{`Success`}</pre>

        <h2>Why Promise.any Exists</h2>
        <ul>
          <li>You only care about one successful result</li>
          <li>Failure is acceptable until success appears</li>
          <li>You want faster user experience</li>
          <li>You want backup options</li>
        </ul>

        <h2>When to Use Promise.any</h2>
        <ul>
          <li>Fetching data from multiple servers</li>
          <li>Using fallback Application Programming Interfaces (APIs)</li>
          <li>Loading resources from mirror links</li>
          <li>First available response logic</li>
        </ul>

        <h2>How Promise.any Works Internally</h2>
        <ul>
          <li>Creates a parent promise</li>
          <li>Attaches handlers to all promises</li>
          <li>Waits for the first fulfillment</li>
          <li>Resolves immediately with that value</li>
          <li>Tracks rejected promises</li>
          <li>Rejects only if all promises fail</li>
        </ul>

        <h2>What Happens If All Promises Fail?</h2>
        <p>
          If every promise is rejected, Promise.any rejects with an
          <strong>AggregateError</strong> (a special error type that contains
          all rejection reasons).
        </p>

        <pre>
          {`Promise.any([
  Promise.reject("Error A"),
  Promise.reject("Error B"),
])
.catch((error) => {
  console.log(error.errors);
});`}
        </pre>

        <h2>AggregateError (Full Form Explanation)</h2>
        <ul>
          <li>
            <strong>AggregateError</strong> means “collection of errors”
          </li>
          <li>It stores all rejection reasons</li>
          <li>
            Available in the <code>errors</code> property
          </li>
        </ul>

        <h2>Order vs Success</h2>
        <p>
          Promise.any does <strong>not follow order</strong>. The promise that
          succeeds first wins, no matter its position in the array.
        </p>

        <h2>Comparison with Promise.race</h2>
        <table>
          <thead>
            <tr>
              <th>Promise.any</th>
              <th>Promise.race</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First success wins</td>
              <td>First settle wins</td>
            </tr>
            <tr>
              <td>Ignores failures</td>
              <td>Failure can end race</td>
            </tr>
            <tr>
              <td>Rejects only if all fail</td>
              <td>Can reject immediately</td>
            </tr>
          </tbody>
        </table>

        <h2>Why Promise.any Is User-Friendly</h2>
        <ul>
          <li>Reduces failure impact</li>
          <li>Improves reliability</li>
          <li>Works well with fallback logic</li>
          <li>Focuses on success</li>
        </ul>

        <h2>Microtask Queue Behavior</h2>
        <ul>
          <li>Promise.any runs in the microtask queue</li>
          <li>Microtask means it runs after current code finishes</li>
          <li>
            It runs before timers like <code>setTimeout</code>
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Expecting Promise.any to stop on first failure</li>
          <li>Not handling AggregateError</li>
          <li>Using it when all results are required</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use when one success is enough</li>
          <li>
            Always add a <code>.catch()</code>
          </li>
          <li>
            Log <code>error.errors</code> for debugging
          </li>
          <li>Prefer Promise.all for strict dependencies</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            Promise.any reject?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Only when all
            promises are rejected.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What error
            does Promise.any throw?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> AggregateError
            containing all errors.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does
            Promise.any preserve order?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it depends
            on which promise succeeds first.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Promise.any waits for the first successful promise</li>
          <li>Ignores failed promises</li>
          <li>Rejects only if all promises fail</li>
          <li>Uses AggregateError for failures</li>
          <li>Does not preserve order</li>
          <li>Best for fallback and backup logic</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 83,
    title: "resolve() and reject() Internals",
    path: "/frontend/js/promises/resolve-reject",
    explanation: (
      <>
        <p>
          <strong>resolve()</strong> and <strong>reject()</strong> are functions
          used to <strong>finish a Promise</strong>.
        </p>

        <p>
          They decide whether a promise ends with <strong>success</strong> or
          <strong>failure</strong>. Once a promise is finished, its state
          <strong>can never change again</strong>.
        </p>

        <h2>What Are resolve() and reject()?</h2>
        <ul>
          <li>
            <code>resolve()</code> marks a promise as successful
          </li>
          <li>
            <code>reject()</code> marks a promise as failed
          </li>
          <li>Both end the promise execution</li>
          <li>Both move the promise out of pending state</li>
        </ul>

        <h2>Promise States (Simple Explanation)</h2>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pending</td>
              <td>Work is still running</td>
            </tr>
            <tr>
              <td>Fulfilled</td>
              <td>Work completed successfully</td>
            </tr>
            <tr>
              <td>Rejected</td>
              <td>Work failed with an error</td>
            </tr>
          </tbody>
        </table>

        <h2>Basic Example</h2>
        <pre>
          {`const promise = new Promise((resolve, reject) => {
  resolve("Done");
});

promise.then((value) => {
  console.log(value);
});`}
        </pre>

        <p>Output:</p>
        <pre>{`Done`}</pre>

        <h2>Why resolve() and reject() Exist</h2>
        <ul>
          <li>To control async (asynchronous) result</li>
          <li>To signal success or failure</li>
          <li>To connect async code with .then() and .catch()</li>
          <li>To manage async flow clearly</li>
        </ul>

        <h2>When resolve() Is Used</h2>
        <ul>
          <li>API (Application Programming Interface) call succeeds</li>
          <li>Data loads correctly</li>
          <li>Task finishes without error</li>
        </ul>

        <h2>When reject() Is Used</h2>
        <ul>
          <li>API request fails</li>
          <li>Network error happens</li>
          <li>Invalid data is received</li>
        </ul>

        <h2>How resolve() Works Internally</h2>
        <ul>
          <li>Promise state changes from pending to fulfilled</li>
          <li>Resolved value is stored internally</li>
          <li>.then() handlers are scheduled</li>
          <li>Handlers run in the microtask queue</li>
        </ul>

        <h2>How reject() Works Internally</h2>
        <ul>
          <li>Promise state changes from pending to rejected</li>
          <li>Error reason is stored internally</li>
          <li>.catch() handlers are scheduled</li>
          <li>Handlers run in the microtask queue</li>
        </ul>

        <h2>Important Rule (Very Important)</h2>
        <p>
          A promise can be resolved or rejected <strong>only once</strong>. Any
          further calls are ignored.
        </p>

        <pre>
          {`const promise = new Promise((resolve, reject) => {
  resolve("First");
  reject("Second"); // Ignored
});`}
        </pre>

        <h2>resolve() vs reject()</h2>
        <table>
          <thead>
            <tr>
              <th>resolve()</th>
              <th>reject()</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Success path</td>
              <td>Failure path</td>
            </tr>
            <tr>
              <td>Triggers .then()</td>
              <td>Triggers .catch()</td>
            </tr>
            <tr>
              <td>Stores value</td>
              <td>Stores error</td>
            </tr>
          </tbody>
        </table>

        <h2>Microtask Queue Behavior</h2>
        <ul>
          <li>resolve() and reject() do not run handlers immediately</li>
          <li>Handlers are placed in the microtask queue</li>
          <li>Microtask runs after current code finishes</li>
          <li>Microtask runs before timers like setTimeout</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Calling resolve() and reject() together</li>
          <li>Expecting promise state to change again</li>
          <li>Forgetting to handle rejection</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Call resolve() or reject() only once</li>
          <li>Always handle errors with .catch()</li>
          <li>Return meaningful values or errors</li>
          <li>Keep promise logic simple</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can a promise
            be resolved twice?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, only the
            first call matters.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            after resolve() is called?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise
            becomes fulfilled and .then() runs.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where do
            promise handlers execute?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> In the
            microtask queue.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>resolve() marks success</li>
          <li>reject() marks failure</li>
          <li>Promise starts in pending state</li>
          <li>State changes only once</li>
          <li>Handlers run as microtasks</li>
          <li>Core building blocks of promises</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 84,
    title: "Promise Execution Order in Event Loop",
    path: "/frontend/js/promises/execution-order",
    explanation: (
      <>
        <p>
          <strong>Promises</strong> in JavaScript have a specific order of
          execution because they work with the <strong>event loop</strong>.
        </p>

        <p>
          Understanding this order helps you predict when{" "}
          <strong>.then()</strong>,<strong>.catch()</strong>, and{" "}
          <strong>.finally()</strong> handlers run.
        </p>

        <h2>What Is the Event Loop?</h2>
        <ul>
          <li>
            The event loop manages <strong>asynchronous code</strong>
          </li>
          <li>
            It decides what code runs first: current code, promises, or timers
          </li>
          <li>Helps JavaScript be non-blocking and fast</li>
        </ul>

        <h2>Call Stack vs Microtasks vs Macrotasks</h2>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Call Stack</td>
              <td>Where normal code runs, synchronous functions</td>
            </tr>
            <tr>
              <td>Microtasks Queue</td>
              <td>Promises and process.nextTick in Node.js</td>
            </tr>
            <tr>
              <td>Macrotasks Queue</td>
              <td>
                Timers (<code>setTimeout</code>, <code>setInterval</code>) and
                I/O events
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Execution Order Rules</h2>
        <ul>
          <li>Normal code runs first on the call stack</li>
          <li>
            Promise handlers (<code>.then()</code>, <code>.catch()</code>,{" "}
            <code>.finally()</code>) run next in the{" "}
            <strong>microtasks queue</strong>
          </li>
          <li>
            Macrotasks like <code>setTimeout</code> run after microtasks
          </li>
          <li>This makes promises predictable and consistent</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("Timeout finished");
}, 0);

console.log("End");`}
        </pre>

        <p>Output:</p>
        <pre>
          {`Start
End
Promise resolved
Timeout finished`}
        </pre>

        <h2>Why This Happens</h2>
        <ul>
          <li>"Start" and "End" are synchronous, so they run first</li>
          <li>
            Promise resolution goes to microtasks queue → runs after call stack
          </li>
          <li>setTimeout goes to macrotasks queue → runs last</li>
        </ul>

        <h2>Multiple Promises Example</h2>
        <pre>
          {`Promise.resolve().then(() => console.log("First"));
Promise.resolve().then(() => console.log("Second"));`}
        </pre>

        <p>Output:</p>
        <pre>
          {`First
Second`}
        </pre>

        <p>
          <strong>Note:</strong> Microtasks preserve the order of promise
          creation.
        </p>

        <h2>Best Practices</h2>
        <ul>
          <li>Use promises for predictable async execution</li>
          <li>Be aware of microtask vs macrotask timing</li>
          <li>Avoid mixing too many timers and promises in one function</li>
          <li>Debug using console logs to see exact order</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When do
            promise handlers run?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> After current
            call stack finishes, in the microtasks queue.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which runs
            first, setTimeout or promise?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Promise runs
            first because it is in microtasks queue.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does order of
            multiple promises matter?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, they run
            in the order they were created.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Normal code runs first in the call stack</li>
          <li>Promises run in microtasks queue after call stack</li>
          <li>Timers run in macrotasks queue after microtasks</li>
          <li>Promises preserve creation order</li>
          <li>Event loop ensures predictable asynchronous execution</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 85,
    title: "ES Modules (ESM) Internals",
    path: "/frontend/js/modules/esm",
    explanation: (
      <>
        <p>
          <strong>ES Modules (ESM)</strong> are a way to organize JavaScript
          code into separate files called <strong>modules</strong>. They make
          code easier to manage and reuse.
        </p>

        <p>
          ES Modules use <strong>static imports</strong> and{" "}
          <strong>exports</strong>, which allows JavaScript engines to load
          modules predictably and efficiently.
        </p>

        <h2>What Are ES Modules?</h2>
        <ul>
          <li>Each file can export variables, functions, or classes</li>
          <li>Other files can import only what they need</li>
          <li>
            ES Modules use <code>import</code> and <code>export</code> keywords
          </li>
          <li>
            They run in <strong>strict mode</strong> automatically
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3));`}
        </pre>

        <p>Output:</p>
        <pre>{`5`}</pre>

        <h2>Why ES Modules Exist</h2>
        <ul>
          <li>Organize large projects into smaller files</li>
          <li>Prevent global variable conflicts</li>
          <li>Enable code reuse and sharing</li>
          <li>Support modern build tools and optimization</li>
        </ul>

        <h2>How ES Modules Work Internally</h2>
        <ul>
          <li>
            JavaScript performs <strong>static analysis</strong> at compile time
          </li>
          <li>Imports are determined before code runs</li>
          <li>Each module has its own scope</li>
          <li>
            Live bindings: imported variables update if the original changes
          </li>
          <li>
            Modules form a <strong>dependency graph</strong> to track imports
            and exports
          </li>
          <li>Tree shaking: unused exports can be removed by build tools</li>
        </ul>

        <h2>Static Analysis & Compile-Time Imports</h2>
        <ul>
          <li>
            JavaScript checks all <code>import</code> and <code>export</code>{" "}
            statements before running code
          </li>
          <li>This allows errors to be detected early</li>
          <li>
            Helps tools like bundlers (Webpack, Rollup, etc.) optimize code
          </li>
        </ul>

        <h2>Live Bindings</h2>
        <ul>
          <li>
            If a module exports a variable and another module imports it, the
            import always sees the latest value
          </li>
          <li>This keeps data synchronized across modules</li>
        </ul>

        <h2>Order of Execution</h2>
        <ul>
          <li>
            Modules are loaded in the order determined by the dependency graph
          </li>
          <li>
            Circular dependencies are handled gracefully with partial bindings
          </li>
          <li>
            Modules execute only once, no matter how many times they are
            imported
          </li>
        </ul>

        <h2>Comparison with CommonJS (CJS)</h2>
        <table>
          <thead>
            <tr>
              <th>CommonJS (CJS)</th>
              <th>ES Modules (ESM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dynamic require at runtime</td>
              <td>Static import at compile-time</td>
            </tr>
            <tr>
              <td>Exports are copies of values</td>
              <td>Exports are live bindings</td>
            </tr>
            <tr>
              <td>Module execution happens on first require</td>
              <td>Module execution happens once based on dependency graph</td>
            </tr>
            <tr>
              <td>No tree shaking support</td>
              <td>Supports tree shaking for unused code removal</td>
            </tr>
          </tbody>
        </table>

        <h2>Best Practices</h2>
        <ul>
          <li>Use ES Modules for modern JavaScript projects</li>
          <li>Always import only what is needed</li>
          <li>Avoid circular dependencies when possible</li>
          <li>Use named exports for clarity</li>
          <li>Keep module files small and focused</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a live
            binding in ESM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Imported
            variables always reflect the latest exported value.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can ES Modules
            run in strict mode automatically?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, ESM
            always uses strict mode.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do ESM
            support tree shaking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Unused exports
            can be removed by bundlers during build.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between ESM and CommonJS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> ESM is static,
            uses live bindings, supports tree shaking; CommonJS is dynamic,
            copies exports.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>ES Modules (ESM) organize JavaScript code into separate files</li>
          <li>
            Use <code>import</code> and <code>export</code> for code sharing
          </li>
          <li>Static analysis allows predictable module loading</li>
          <li>Live bindings keep imports updated</li>
          <li>Tree shaking removes unused code in builds</li>
          <li>Modules execute once and preserve order</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 86,
    title: "CommonJS Internals",
    path: "/frontend/js/modules/commonjs",
    explanation: (
      <>
        <p>
          <strong>CommonJS (CJS)</strong> is a module system mainly used in
          <strong> Node.js</strong>. It allows you to split JavaScript code into
          separate files called modules, which can be loaded at runtime.
        </p>

        <p>
          CommonJS uses <code>require()</code> to import modules and
          <code>module.exports</code> or <code>exports</code> to export
          functionality.
        </p>

        <h2>What Is CommonJS?</h2>
        <ul>
          <li>
            Modules are loaded at <strong>runtime</strong> using{" "}
            <code>require()</code>
          </li>
          <li>Exports are copies of values, not live bindings</li>
          <li>
            Code executes <strong>synchronously</strong> when required
          </li>
          <li>Widely used in Node.js for server-side JavaScript</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// main.js
const { add } = require('./math.js');
console.log(add(2, 3));`}
        </pre>

        <p>Output:</p>
        <pre>{`5`}</pre>

        <h2>How CommonJS Works Internally</h2>
        <ul>
          <li>
            When <code>require()</code> is called, Node.js reads and executes
            the module file
          </li>
          <li>
            Exports are copied into <code>module.exports</code>
          </li>
          <li>
            Subsequent <code>require()</code> calls return the cached module
          </li>
          <li>Modules execute only once and are stored in a cache</li>
          <li>
            Dynamic resolution: <code>require()</code> can be called anywhere in
            code
          </li>
        </ul>

        <h2>Key Differences from ES Modules (ESM)</h2>
        <table>
          <thead>
            <tr>
              <th>CommonJS (CJS)</th>
              <th>ES Modules (ESM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modules loaded at runtime</td>
              <td>Modules loaded at compile time (static)</td>
            </tr>
            <tr>
              <td>Exports are copies of values</td>
              <td>Exports are live bindings (always up-to-date)</td>
            </tr>
            <tr>
              <td>Synchronous execution</td>
              <td>Asynchronous-friendly, predictable loading</td>
            </tr>
            <tr>
              <td>No tree shaking support</td>
              <td>Supports tree shaking for unused code</td>
            </tr>
            <tr>
              <td>Require can be dynamic</td>
              <td>Imports must be static at the top</td>
            </tr>
          </tbody>
        </table>

        <h2>Best Practices</h2>
        <ul>
          <li>Use CommonJS mainly in Node.js projects</li>
          <li>Cache heavy modules to improve performance</li>
          <li>Be careful with circular dependencies</li>
          <li>Prefer named exports when possible for clarity</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            CommonJS handle module exports?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Exports are
            copied into <code>module.exports</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is require()
            synchronous or asynchronous?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Synchronous;
            it blocks execution until module loads.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does CommonJS
            support live bindings?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, exports
            are copies and do not update automatically.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can you call
            require() anywhere in code?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, it can be
            dynamic.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            CommonJS is Node.js module system using <code>require()</code> and{" "}
            <code>module.exports</code>
          </li>
          <li>Modules load at runtime and execute synchronously</li>
          <li>Exports are copies, not live bindings</li>
          <li>Supports dynamic module resolution</li>
          <li>No tree shaking; caching avoids repeated execution</li>
          <li>Best suited for server-side projects</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 87,
    title: "Tree Shaking Fundamentals",
    path: "/frontend/js/modules/tree-shaking",
    explanation: (
      <>
        <p>
          <strong>Tree Shaking</strong> is a way to remove{" "}
          <strong> unused code </strong>
          from JavaScript projects to make them smaller and faster.
        </p>

        <p>
          It works best with <strong>ES Modules (ESM)</strong> because imports
          and exports are known at compile time.
        </p>

        <h2>What Is Tree Shaking?</h2>
        <ul>
          <li>
            Eliminates <strong>dead code</strong> (code that is never used)
          </li>
          <li>Analyzes code before running (static analysis)</li>
          <li>Reduces bundle size for production</li>
          <li>Improves load time and performance</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// utils.js
export function usedFunction() {
  return "I am used";
}
export function unusedFunction() {
  return "I am not used";
}

// main.js
import { usedFunction } from './utils.js';
console.log(usedFunction());`}
        </pre>

        <p>Output after tree shaking (unusedFunction removed):</p>
        <pre>{`I am used`}</pre>

        <h2>Why Tree Shaking Exists</h2>
        <ul>
          <li>Projects often include many modules, some code is never used</li>
          <li>Removing unused code saves bandwidth and memory</li>
          <li>Makes web apps faster to load</li>
        </ul>

        <h2>How Tree Shaking Works Internally</h2>
        <ul>
          <li>
            Build tools (like Webpack or Rollup) scan the{" "}
            <strong>dependency graph</strong>
          </li>
          <li>Identify exports that are actually used</li>
          <li>Remove unused functions, variables, or classes</li>
          <li>Generate optimized bundles for production</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Use <strong>ES Modules (ESM)</strong> instead of CommonJS (CJS) for
            tree shaking
          </li>
          <li>Export only what you need</li>
          <li>Avoid side effects in modules</li>
          <li>Keep modules small and focused</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Using CommonJS modules, which cannot be tree-shaken properly</li>
          <li>Having modules with side effects that prevent removal</li>
          <li>Importing everything when only some parts are needed</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is tree
            shaking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is the
            process of removing unused code to optimize bundles.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which module
            system is best for tree shaking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> ES Modules
            (ESM), because imports and exports are static.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can tree
            shaking remove code with side effects?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, code with
            side effects may not be removed.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Tree Shaking removes unused code from JavaScript projects</li>
          <li>Static analysis detects dead code</li>
          <li>ES Modules (ESM) are required for effective tree shaking</li>
          <li>Reduces bundle size and improves performance</li>
          <li>Helps create optimized production builds</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 88,
    title: "Bundling Concepts (Webpack/Vite/Rollup)",
    path: "/frontend/js/modules/bundling",
    explanation: (
      <>
        <p>
          <strong>Bundling</strong> is the process of combining multiple
          JavaScript files and other assets (like CSS, images) into a single or
          few files called <strong>bundles</strong>. This makes web applications
          faster to load and easier to manage.
        </p>

        <p>
          Tools like <strong>Webpack</strong>, <strong>Vite</strong>, and{" "}
          <strong>Rollup</strong> are bundlers. They help convert, optimize, and
          package code for production.
        </p>

        <h2>What Is Bundling?</h2>
        <ul>
          <li>
            Analyzes project files and <strong>scans dependencies</strong>
          </li>
          <li>
            Converts modern JavaScript, TypeScript, or JSX to browser-friendly
            code
          </li>
          <li>Combines multiple files into chunks or bundles</li>
          <li>Applies loaders and plugins to transform or optimize code</li>
          <li>Minifies code to reduce size</li>
          <li>Produces optimized bundles for deployment</li>
        </ul>

        <h2>Basic Example</h2>
        <p>
          Suppose you have multiple JS files and some CSS files. The bundler:
        </p>
        <pre>
          {`// index.js
import { add } from './math.js';
import './style.css';
console.log(add(2, 3));`}
        </pre>
        <p>
          The bundler scans dependencies, processes JS and CSS, and outputs a
          single
          <code>bundle.js</code> and <code>bundle.css</code> ready for browsers.
        </p>

        <h2>Why Bundling Exists</h2>
        <ul>
          <li>Browsers load fewer files → faster performance</li>
          <li>Modern JS features (ESM, JSX, TypeScript) need conversion</li>
          <li>Optimized code improves SEO and user experience</li>
          <li>Enables modular code structure while shipping a single bundle</li>
        </ul>

        <h2>How Bundlers Work Internally</h2>
        <ul>
          <li>
            Scan all files to build a <strong>dependency graph</strong>
          </li>
          <li>Convert modules into browser-compatible code</li>
          <li>Apply loaders (like Babel for JS, CSS loaders)</li>
          <li>
            Apply plugins for optimization (like minification, tree shaking)
          </li>
          <li>Generate bundles and map files (source maps for debugging)</li>
        </ul>

        <h2>Common Features</h2>
        <ul>
          <li>
            <strong>Code splitting:</strong> create multiple bundles for better
            performance
          </li>
          <li>
            <strong>Hot Module Replacement (HMR):</strong> update modules
            without page reload (Vite/Webpack)
          </li>
          <li>
            <strong>Tree Shaking:</strong> remove unused code from bundles
          </li>
          <li>
            <strong>Minification:</strong> reduce file size by removing
            spaces/comments
          </li>
          <li>
            <strong>Plugins:</strong> extend bundler functionality (e.g., image
            optimization)
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use bundlers for production builds</li>
          <li>Keep modules small and focused</li>
          <li>Enable tree shaking and minification</li>
          <li>Use source maps for easier debugging</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            bundling in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Combining
            multiple files into one or few bundles for faster loading.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Name popular
            JavaScript bundlers.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Webpack, Vite,
            Rollup.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does a
            bundler optimize code?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Through
            minification, tree shaking, and code splitting.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            dependency graph?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A map of all
            modules and their dependencies used by the bundler to create
            bundles.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Bundlers combine multiple files into optimized bundles for browsers
          </li>
          <li>
            Tools like Webpack, Vite, Rollup handle conversion, minification,
            and optimization
          </li>
          <li>
            Dependency graph allows modular code while shipping one bundle
          </li>
          <li>
            Supports features like tree shaking, code splitting, and hot module
            replacement
          </li>
          <li>Improves performance, load time, and maintainability</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 89,
    title: "Module Graph Creation",
    path: "/frontend/js/modules/graph",
    explanation: (
      <>
        <p>
          <strong>Module Graph</strong> is a way bundlers (like{" "}
          <strong>Webpack</strong>, <strong>Vite</strong>, or{" "}
          <strong>Rollup</strong>) understand how different JavaScript files
          (modules) depend on each other.
        </p>

        <p>
          Each module is a <strong>node</strong> in the graph, and dependencies
          are <strong>directed edges</strong> connecting them.
        </p>

        <h2>What Is a Module Graph?</h2>
        <ul>
          <li>
            Represents modules as <strong>nodes</strong>
          </li>
          <li>
            Dependencies between modules are <strong>edges</strong>
          </li>
          <li>Helps bundlers know which modules to load first</li>
          <li>Supports code splitting and dead code removal (tree shaking)</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// math.js
export function add(a, b) { return a + b; }

// calc.js
import { add } from './math.js';
export function sumTwo(a, b) { return add(a, b); }

// main.js
import { sumTwo } from './calc.js';
console.log(sumTwo(2, 3));`}
        </pre>

        <p>
          <strong>Module Graph:</strong>
        </p>
        <ul>
          <li>main.js → depends on calc.js</li>
          <li>calc.js → depends on math.js</li>
          <li>math.js → no dependencies</li>
        </ul>

        <h2>Why Module Graph Exists</h2>
        <ul>
          <li>
            Determine <strong>execution order</strong> of modules
          </li>
          <li>
            Enable <strong>code splitting</strong> for faster loading
          </li>
          <li>
            Support <strong>tree shaking</strong> to remove unused code
          </li>
          <li>Optimize bundle size and dependency management</li>
        </ul>

        <h2>How Bundlers Use Module Graph</h2>
        <ul>
          <li>Scan all modules to build the graph (dependency analysis)</li>
          <li>Identify which modules are needed for the entry point</li>
          <li>Resolve execution order based on dependencies</li>
          <li>Remove modules that are not reachable (dead code)</li>
          <li>Split code into chunks for lazy loading if configured</li>
        </ul>

        <h2>Benefits of Module Graph</h2>
        <ul>
          <li>Predictable and correct execution order</li>
          <li>Smaller and optimized bundles</li>
          <li>Faster application load time</li>
          <li>Better maintainability and modularity</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            module graph?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A directed
            graph showing modules as nodes and their dependencies as edges.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does a
            module graph help bundlers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It determines
            execution order, enables code splitting, and removes unused code.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a node
            and edge in a module graph?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Node = module,
            Edge = dependency between modules.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Module graph is a visual representation of modules and their
            dependencies
          </li>
          <li>Helps bundlers determine execution order and optimize bundles</li>
          <li>Supports dead code removal and code splitting</li>
          <li>Essential for building fast, modular JavaScript applications</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 90,
    title: "Live Bindings (ESM-ECMAScript Module)",
    path: "/frontend/js/modules/live-bindings",
    explanation: (
      <>
        <p>
          <strong>Live Bindings</strong> are a feature of{" "}
          <strong>ES Modules (ESM)</strong>
          where exported values are <strong>references</strong> instead of
          copies.
        </p>

        <p>
          This means that if the exported value changes in the module, the
          change is <strong>automatically reflected</strong> wherever it is
          imported.
        </p>

        <h2>What Are Live Bindings?</h2>
        <ul>
          <li>Exports in ESM are references, not static copies</li>
          <li>Imported values update when the original module changes</li>
          <li>Supports real-time sharing of module state</li>
          <li>Helps maintain consistency across multiple modules</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// counter.js
export let count = 0;
export function increment() {
  count++;
}

// main.js
import { count, increment } from './counter.js';
console.log(count); // 0
increment();
console.log(count); // 1 (updated automatically)`}
        </pre>

        <h2>Why Live Bindings Exist</h2>
        <ul>
          <li>Modules may share state across different files</li>
          <li>Ensures consistency when values change</li>
          <li>Makes reactive and dynamic updates easier</li>
          <li>Prevents stale or outdated values in imports</li>
        </ul>

        <h2>How Live Bindings Work Internally</h2>
        <ul>
          <li>ESM keeps a reference to the exported variable</li>
          <li>
            When the original variable updates, the import sees the new value
          </li>
          <li>Dependency graph tracks these references</li>
          <li>Ensures updates are synchronous with module execution</li>
        </ul>

        <h2>Benefits of Live Bindings</h2>
        <ul>
          <li>Real-time state sharing between modules</li>
          <li>Predictable and consistent imports</li>
          <li>Supports reactive patterns without extra code</li>
          <li>Helps with tree shaking and dead code removal when unused</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Expecting imported values to be independent copies</li>
          <li>
            Mutating imported values directly (only mutate via exported
            functions)
          </li>
          <li>Confusing CommonJS behavior with ESM live bindings</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are live
            bindings in ES Modules?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Exports are
            references, so updates in the module are reflected in imports.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can you mutate
            an imported value directly?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, you should
            update via exported functions.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do live
            bindings differ from CommonJS imports?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> CommonJS
            imports are copies; ESM imports are live references.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Live bindings keep imports updated when the original module changes
          </li>
          <li>Exports are references, not copies</li>
          <li>Ensures consistent state across modules</li>
          <li>Supports reactive updates and predictable module behavior</li>
          <li>Different from CommonJS, which uses copies</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 91,
    title: "Import & Export Behavior",
    path: "/frontend/js/modules/import-export",
    explanation: (
      <>
        <p>
          <strong>Import and Export</strong> are ways to share code between
          JavaScript files (modules). Exports make variables, functions, or
          classes available, and imports bring them into another file.
        </p>

        <p>
          ES Modules (ESM) use <strong>static imports</strong> by default, which
          are loaded at the top level before code runs. Dynamic imports (
          <code>import()</code>) allow <strong>lazy-loading</strong> modules
          asynchronously when needed.
        </p>

        <h2>What Is Export?</h2>
        <ul>
          <li>Marks code to be used in other files</li>
          <li>Can export variables, functions, classes, or objects</li>
          <li>Supports named exports and default exports</li>
          <li>Defines the module interface</li>
        </ul>

        <h2>Basic Export Example</h2>
        <pre>
          {`// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14;

// default export
export default function multiply(a, b) { return a * b; }`}
        </pre>

        <h2>What Is Import?</h2>
        <ul>
          <li>Brings exported code from another module</li>
          <li>Must match the exported name for named imports</li>
          <li>Default imports can use any name</li>
          <li>Can be static (top-level) or dynamic (lazy-loaded)</li>
        </ul>

        <h2>Basic Import Example</h2>
        <pre>
          {`// main.js
import multiply, { add, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(PI); // 3.14`}
        </pre>

        <h2>Dynamic Import</h2>
        <p>
          Dynamic import (<code>import()</code>) allows loading a module only
          when needed.
        </p>
        <pre>
          {`// lazy-load module
button.addEventListener('click', async () => {
  const module = await import('./math.js');
  console.log(module.add(5, 10));
});`}
        </pre>

        <h2>Why Import & Export Exists</h2>
        <ul>
          <li>Encourages modular code structure</li>
          <li>Prevents global variable conflicts</li>
          <li>Supports reusability and maintainability</li>
          <li>Enables lazy-loading and performance optimization</li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>ESM uses static analysis at compile time</li>
          <li>Top-level imports are loaded before code execution</li>
          <li>Dynamic imports return a promise (async)</li>
          <li>
            Module exports can be live bindings, reflecting updates in imports
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use named exports for multiple exports in a module</li>
          <li>Use default export for a single main feature</li>
          <li>Prefer static imports unless lazy-loading is needed</li>
          <li>Keep module interfaces clean and minimal</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between named and default exports?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Named exports
            use specific names; default export allows any name in import.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            dynamic import?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A way to load
            modules asynchronously when needed using <code>import()</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are imports
            static or dynamic by default?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Static, loaded
            at the top level before code execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Do imports
            reflect updated values from the exporting module?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, because
            of live bindings in ES Modules.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Export makes code available to other modules</li>
          <li>Import brings exported code into another file</li>
          <li>
            Static imports load at the top level; dynamic imports allow
            lazy-loading
          </li>
          <li>Supports live bindings for updated values</li>
          <li>Encourages modular, maintainable, and performant code</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 92,
    title: "Dynamic Import Internals",
    path: "/frontend/js/modules/dynamic-import",
    explanation: (
      <>
        <p>
          <strong>Dynamic Import</strong> in JavaScript allows loading modules{" "}
          <strong>only when needed</strong> instead of loading everything at the
          start. It uses the <code>import()</code> function and returns a{" "}
          <strong>Promise</strong>, so it works asynchronously.
        </p>

        <p>
          This is useful for <strong>code splitting</strong> and{" "}
          <strong>lazy-loading</strong>, which improve page load performance by
          loading modules on demand.
        </p>

        <h2>What Is Dynamic Import?</h2>
        <ul>
          <li>
            Uses <code>import()</code> function instead of static{" "}
            <code>import</code>
          </li>
          <li>
            Returns a <strong>Promise</strong> that resolves to the module
            object
          </li>
          <li>Allows loading code only when it is needed</li>
          <li>Supports asynchronous execution and on-demand loading</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// main.js
button.addEventListener('click', async () => {
  const module = await import('./math.js');
  console.log(module.add(5, 10));
});`}
        </pre>

        <p>
          In this example, the module <code>math.js</code> is only loaded when
          the button is clicked.
        </p>

        <h2>Why Dynamic Import Exists</h2>
        <ul>
          <li>Reduces initial bundle size for faster loading</li>
          <li>Loads features only when they are needed (on-demand)</li>
          <li>Improves user experience and performance</li>
          <li>Supports code splitting and lazy-loading</li>
        </ul>

        <h2>How Dynamic Import Works Internally</h2>
        <ul>
          <li>
            <code>import()</code> creates a new <strong>Promise</strong>
          </li>
          <li>Browser or bundler fetches the requested module file</li>
          <li>
            Once the module is loaded, the Promise resolves with module exports
          </li>
          <li>Module execution happens asynchronously, after current tasks</li>
        </ul>

        <h2>Benefits of Dynamic Import</h2>
        <ul>
          <li>Smaller initial load and faster startup</li>
          <li>Load heavy features or libraries only when required</li>
          <li>Better performance for large applications</li>
          <li>
            Supports tree shaking by not including unused code in the main
            bundle
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Expecting dynamic import to be synchronous</li>
          <li>
            Not handling Promise rejections (use <code>try/catch</code> or{" "}
            <code>.catch()</code>)
          </li>
          <li>Overusing it for tiny modules (may add unnecessary overhead)</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            dynamic import?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A way to load
            modules asynchronously using <code>import()</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does dynamic
            import return a value immediately?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it returns
            a <strong>Promise</strong> that resolves with the module object.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            dynamic import instead of static import?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To load
            modules on-demand and reduce initial bundle size.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can dynamic
            import be used for code splitting?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, it is
            commonly used for lazy-loading and splitting code into chunks.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Dynamic import uses <code>import()</code> to load modules on demand
          </li>
          <li>
            Returns a <strong>Promise</strong> that resolves to module exports
          </li>
          <li>Supports code splitting and lazy-loading for performance</li>
          <li>Executes asynchronously after the current call stack</li>
          <li>Helps build faster, modular, and optimized applications</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 93,
    title: "Module Hoisting in ESM",
    path: "/frontend/js/modules/module-hoisting",
    explanation: (
      <>
        <p>
          <strong>Module Hoisting</strong> in{" "}
          <strong>ECMAScript Modules (ESM)</strong> means that{" "}
          <strong>imported modules are moved to the top</strong> of the code
          during compilation. This ensures that all dependencies are loaded and
          ready before the main module code runs.
        </p>

        <p>
          Hoisting allows JavaScript to handle module imports in a predictable
          order, even if the import statements appear later in the code.
        </p>

        <h2>What Is Module Hoisting?</h2>
        <ul>
          <li>
            Imports are resolved and initialized before the rest of the code
            executes
          </li>
          <li>Modules are analyzed at compile time (static analysis)</li>
          <li>Execution follows the dependency graph</li>
          <li>
            Helps prevent errors due to using modules before they are ready
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// math.js
export const add = (a, b) => a + b;

// main.js
console.log(add(2, 3)); // Works even if import is at the bottom
import { add } from './math.js';`}
        </pre>

        <p>
          In this example, <code>add</code> is available before the import
          statement executes, thanks to module hoisting.
        </p>

        <h2>Why Module Hoisting Exists</h2>
        <ul>
          <li>Ensures all dependencies are loaded before code runs</li>
          <li>Supports predictable execution order</li>
          <li>Helps bundlers and tools perform static analysis</li>
          <li>Prevents runtime errors from using undefined imports</li>
        </ul>

        <h2>When to Care About Module Hoisting</h2>
        <ul>
          <li>Understanding execution order in large applications</li>
          <li>Debugging import-related errors</li>
          <li>Optimizing code loading with bundlers like Webpack or Vite</li>
        </ul>

        <h2>How Module Hoisting Works Internally</h2>
        <ul>
          <li>
            During compilation, all <code>import</code> statements are moved to
            the top
          </li>
          <li>The dependency graph is built based on imports</li>
          <li>Modules are initialized in order according to the graph</li>
          <li>Main module code executes after all dependencies are ready</li>
        </ul>

        <h2>Benefits of Module Hoisting</h2>
        <ul>
          <li>Predictable module execution order</li>
          <li>Prevents runtime errors from missing imports</li>
          <li>Enables static analysis and tree shaking by bundlers</li>
          <li>Makes large applications more maintainable</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming imports execute exactly where they are written</li>
          <li>Confusing ESM hoisting with CommonJS behavior</li>
          <li>
            Trying to conditionally import modules without using{" "}
            <code>import()</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is module
            hoisting in ESM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It means
            imports are initialized before the main code runs.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            module hoisting differ from CommonJS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> CommonJS loads
            modules at runtime, while ESM resolves imports at compile time.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is module
            hoisting useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It ensures
            predictable execution, avoids runtime errors, and enables static
            analysis.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Module hoisting moves all imports to the top before execution</li>
          <li>
            Ensures dependencies are ready in order based on the dependency
            graph
          </li>
          <li>Prevents errors from using undefined imports</li>
          <li>Helps bundlers perform static analysis and tree shaking</li>
          <li>Makes module execution predictable and maintainable</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 94,
    title: "Bundler Optimization (Minification & Compression)",
    path: "/frontend/js/modules/optimization",
    explanation: (
      <>
        <p>
          <strong>Bundler Optimization</strong> in JavaScript refers to
          techniques used to make your final code bundle smaller and faster to
          load. This includes <strong>minification</strong> and{" "}
          <strong>compression</strong>.
        </p>

        <p>
          Minification reduces file size by removing unnecessary characters,
          while compression further shrinks the bundle when sending it over the
          network.
        </p>

        <h2>What Is Minification?</h2>
        <ul>
          <li>Removes spaces, line breaks, and comments</li>
          <li>Shortens variable and function names</li>
          <li>Inlines small functions to reduce code size</li>
          <li>Removes dead code (unused parts)</li>
        </ul>

        <h2>Basic Example of Minification</h2>
        <pre>
          {`// Original code
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 3));

// Minified code
function a(b,c){return b+c}console.log(a(2,3));`}
        </pre>

        <h2>What Is Compression?</h2>
        <ul>
          <li>
            Bundles are compressed using algorithms like <strong>Gzip</strong>{" "}
            or <strong>Brotli</strong>
          </li>
          <li>Reduces the size of files transferred from server to browser</li>
          <li>Improves page load speed and performance</li>
        </ul>

        <h2>Why Bundler Optimization Exists</h2>
        <ul>
          <li>Faster loading for users</li>
          <li>Reduced bandwidth usage</li>
          <li>Improved performance for large applications</li>
          <li>Helps meet web performance best practices</li>
        </ul>

        <h2>When to Use Bundler Optimization</h2>
        <ul>
          <li>Before deploying your application</li>
          <li>When you want smaller, faster-loading bundles</li>
          <li>
            For production builds in Webpack, Vite, Rollup, or other bundlers
          </li>
        </ul>

        <h2>How Bundler Optimization Works Internally</h2>
        <ul>
          <li>Bundler analyzes the dependency graph of your modules</li>
          <li>Removes unused code (tree shaking)</li>
          <li>Renames variables and functions to shorter names</li>
          <li>Applies compression algorithms to the final bundle</li>
        </ul>

        <h2>Benefits of Bundler Optimization</h2>
        <ul>
          <li>Smaller JavaScript bundles</li>
          <li>Faster page load and better user experience</li>
          <li>Reduced network usage and bandwidth costs</li>
          <li>Optimized performance for mobile and slow connections</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Skipping optimization for production builds</li>
          <li>Expecting minification to fix all performance issues</li>
          <li>Compressing already small files unnecessarily</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            minification in JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Minification
            is the process of removing unnecessary characters and shortening
            names to reduce bundle size.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            compression help?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Compression
            reduces the size of files sent over the network, improving load
            times.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            bundler optimization be applied?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> During
            production builds before deploying the application.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Bundler optimization reduces bundle size using minification and
            compression
          </li>
          <li>Removes dead code, shortens names, and compresses files</li>
          <li>Improves page load speed and performance</li>
          <li>Essential for production deployment of web applications</li>
          <li>
            Helps deliver a better experience to users, especially on slow
            connections
          </li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 95,
    title: "DOM Tree Internals",
    path: "/frontend/js/browser/dom-tree",
    explanation: (
      <>
        <p>
          <strong>DOM Tree</strong> (Document Object Model Tree) is a
          representation of your HTML page as a tree structure that the browser
          creates after parsing the HTML. It allows JavaScript to interact with
          page elements as objects.
        </p>

        <h2>What Is DOM Tree?</h2>
        <ul>
          <li>
            The browser parses HTML and builds a tree of <strong>nodes</strong>
          </li>
          <li>Each element, text, and comment becomes a node in the tree</li>
          <li>
            Nodes have <strong>parent</strong>, <strong>child</strong>, and{" "}
            <strong>sibling</strong> relationships
          </li>
          <li>
            This tree is called the <strong>DOM Tree</strong> and represents the
            page structure in memory
          </li>
        </ul>

        <h2>How the Browser Builds the DOM Tree</h2>
        <ul>
          <li>
            <strong>HTML Parsing:</strong> Browser reads HTML line by line
          </li>
          <li>
            <strong>Tokenization:</strong> HTML tags and text are converted into
            tokens
          </li>
          <li>
            <strong>Node Creation:</strong> Tokens are converted into nodes
            (element nodes, text nodes, comment nodes)
          </li>
          <li>
            <strong>Tree Construction:</strong> Nodes are connected to form
            parent-child relationships, building the DOM tree
          </li>
          <li>
            <strong>Live Updates:</strong> DOM tree is live, so JavaScript
            changes reflect immediately
          </li>
        </ul>

        <h2>Node Types in the DOM Tree</h2>
        <ul>
          <li>
            <strong>Element Node:</strong> Represents HTML tags like
            &lt;div&gt;, &lt;p&gt;, &lt;span&gt;
          </li>
          <li>
            <strong>Text Node:</strong> Contains the text inside elements
          </li>
          <li>
            <strong>Comment Node:</strong> Represents HTML comments &lt;!--
            comment --&gt;
          </li>
          <li>
            <strong>Document Node:</strong> The root of the DOM tree (represents
            the entire page)
          </li>
        </ul>

        <h2>Why DOM Tree Internals Matter</h2>
        <ul>
          <li>Helps understand how browsers parse HTML</li>
          <li>Improves performance when manipulating DOM with JavaScript</li>
          <li>Essential for debugging rendering and layout issues</li>
          <li>Helps optimize dynamic updates for better user experience</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// HTML
<div id="container">
  <p>Hello World</p>
</div>

// JavaScript
const p = document.querySelector('p');
console.log(p.parentNode.id); // Output: container`}
        </pre>

        <h2>When DOM Tree Is Created</h2>
        <ul>
          <li>Immediately after the browser starts parsing HTML</li>
          <li>
            Before JavaScript execution if scripts are placed at the end of body
          </li>
          <li>
            Scripts in the head may block parsing unless using{" "}
            <code>defer</code> or <code>async</code>
          </li>
        </ul>

        <h2>Benefits of Understanding DOM Tree</h2>
        <ul>
          <li>Write efficient DOM manipulations</li>
          <li>Reduce layout thrashing and reflows</li>
          <li>Better understanding of event propagation and bubbling</li>
          <li>Improves debugging and optimization skills</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Manipulating DOM before it is fully loaded</li>
          <li>Ignoring performance cost of repeated DOM access</li>
          <li>Not understanding live vs static node lists</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a DOM
            tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A tree
            structure representing the HTML page, where elements, text, and
            comments are nodes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            main types of DOM nodes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Element nodes,
            text nodes, comment nodes, and the document node.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does the
            browser build the DOM tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It parses
            HTML, tokenizes it, creates nodes, and links them into a tree.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is the DOM
            tree important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows
            JavaScript to interact with the page and helps optimize performance.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>The DOM tree represents the HTML page as a tree of nodes</li>
          <li>Nodes include elements, text, comments, and the document root</li>
          <li>
            Browser builds it by parsing HTML and creating a live structure
          </li>
          <li>
            Understanding it helps write efficient JavaScript and optimize
            performance
          </li>
          <li>Essential knowledge for front-end development and debugging</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 96,
    title: "CSSOM Tree",
    path: "/frontend/js/browser/cssom-tree",
    explanation: (
      <>
        <p>
          <strong>CSSOM Tree</strong> (CSS Object Model Tree) is a
          representation of all the CSS rules of a web page that the browser
          creates after parsing CSS. It helps the browser figure out{" "}
          <strong>how styles should be applied</strong> to the DOM elements.
        </p>

        <h2>What Is CSSOM Tree?</h2>
        <ul>
          <li>
            The browser parses all CSS (internal, external, inline) and builds a
            tree of style rules
          </li>
          <li>Each rule and selector becomes a node in the CSSOM tree</li>
          <li>
            The CSSOM works together with the DOM to calculate final styles for
            each element
          </li>
          <li>
            Allows handling of{" "}
            <strong>specificity, cascading, and inheritance</strong>
          </li>
        </ul>

        <h2>How the Browser Builds the CSSOM Tree</h2>
        <ul>
          <li>
            <strong>CSS Parsing:</strong> Browser reads CSS rules and tokenizes
            them
          </li>
          <li>
            <strong>Rule Storage:</strong> Each selector and declaration block
            is stored in the CSSOM
          </li>
          <li>
            <strong>Specificity & Cascade:</strong> Browser calculates which
            rules override others
          </li>
          <li>
            <strong>Inheritance:</strong> Some properties are inherited from
            parent elements
          </li>
          <li>
            <strong>DOM + CSSOM Merge:</strong> The DOM tree and CSSOM tree
            combine to create the <strong>Render Tree</strong>
          </li>
          <li>
            <strong>Computed Styles:</strong> Final style values for each
            element are calculated for painting on screen
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`/* CSS */
p { color: red; font-size: 16px; }
div p { font-weight: bold; }`}
        </pre>

        <p>
          In this example, the browser stores both rules in the CSSOM tree. For
          a &lt;p&gt; inside a &lt;div&gt;, both rules are applied according to
          specificity and inheritance.
        </p>

        <h2>Why CSSOM Exists</h2>
        <ul>
          <li>Separates style information from the DOM structure</li>
          <li>
            Helps browsers efficiently calculate which styles apply to each
            element
          </li>
          <li>
            Enables cascading, specificity, and inheritance rules to work
            correctly
          </li>
          <li>Essential for creating the Render Tree and painting the page</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Ignoring specificity conflicts, leading to unexpected styles</li>
          <li>
            Changing styles dynamically without understanding reflow/repaint
            costs
          </li>
          <li>
            Using too many complex selectors, which can slow down CSSOM building
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            CSSOM tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is a tree
            representation of all CSS rules that the browser uses to calculate
            styles for DOM elements.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does CSSOM
            interact with the DOM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The DOM tree
            and CSSOM tree merge to form the Render Tree, which is used for
            painting.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            role of specificity in CSSOM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Specificity
            determines which CSS rules take precedence when multiple rules match
            an element.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            computed styles?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Final styles
            calculated for each element after combining DOM and CSSOM
            information.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>CSSOM is a tree of CSS rules created by the browser</li>
          <li>Stores selectors and declarations for each rule</li>
          <li>Merges with the DOM tree to create the Render Tree</li>
          <li>Handles specificity, cascading, and inheritance</li>
          <li>
            Final computed styles are used for painting elements on the screen
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 97,
    title: "Render Tree Construction",
    path: "/frontend/js/browser/render-tree",
    explanation: (
      <>
        <p>
          <strong>Render Tree Construction</strong> is the process in which the
          browser combines the <strong>DOM Tree</strong> (Document Object Model)
          and the <strong>CSSOM Tree</strong> (CSS Object Model) to create a
          tree of elements that will actually be displayed on the screen.
        </p>

        <p>
          Only <strong>visible elements</strong> are included in the Render
          Tree, so elements like <code>&lt;head&gt;</code> or elements with{" "}
          <code>display: none</code> are ignored.
        </p>

        <h2>What Is Render Tree Construction?</h2>
        <ul>
          <li>
            Combines the <strong>DOM Tree</strong> and{" "}
            <strong>CSSOM Tree</strong>
          </li>
          <li>Includes only elements that are visible on the page</li>
          <li>Determines layout positions and dimensions for each node</li>
          <li>Prepares elements for painting on the screen</li>
          <li>Part of the browser rendering pipeline</li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            Browser parses HTML → builds the <strong>DOM Tree</strong>
          </li>
          <li>
            Browser parses CSS → builds the <strong>CSSOM Tree</strong>
          </li>
          <li>
            DOM + CSSOM are combined to form the <strong>Render Tree</strong>
          </li>
          <li>
            Layout calculation happens → determines size & position of nodes
          </li>
          <li>
            Browser uses the Render Tree for painting pixels to the screen
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<!-- HTML -->
<div>
  <p>Hello World</p>
</div>

/* CSS */
p { color: red; }`}
        </pre>

        <p>
          Here, the DOM has &lt;div&gt; and &lt;p&gt; nodes, CSSOM contains the{" "}
          <code>p {"color: red;"}</code> rule, and the Render Tree combines them
          to show the paragraph in red.
        </p>

        <h2>Why Render Tree Is Important</h2>
        <ul>
          <li>Only visible elements are considered, improving performance</li>
          <li>Determines how elements are drawn on the page</li>
          <li>Supports layout and paint calculations</li>
          <li>Essential for animations, repaints, and reflows</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Assuming invisible elements take part in layout (they are ignored)
          </li>
          <li>
            Forgetting that style changes can trigger Render Tree recalculation
          </li>
          <li>
            Overusing complex CSS selectors, which can slow Render Tree building
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            Render Tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is a tree
            of visible elements created by combining the DOM and CSSOM for
            painting on screen.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are invisible
            elements included in the Render Tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, elements
            with <code>display: none</code> or in the &lt;head&gt; are ignored.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Render Tree relate to layout and paint?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It provides
            the structure and style info required for layout calculation and
            painting pixels to the screen.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Render Tree is built from DOM + CSSOM</li>
          <li>Includes only visible elements</li>
          <li>Determines layout (position & size) for painting</li>
          <li>Essential step in the browser rendering pipeline</li>
          <li>Helps optimize page rendering and performance</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 97,
    title: "Render Tree Construction",
    path: "/frontend/js/browser/render-tree",
    explanation: (
      <>
        <p>
          <strong>Render Tree Construction</strong> is when the browser combines
          the <strong>DOM Tree</strong> (Document Object Model Tree) and the{" "}
          <strong>CSSOM Tree</strong> (CSS Object Model Tree) to make a tree of
          elements that will actually appear on the screen.
        </p>

        <p>
          Only <strong>visible elements</strong> are included. So, things like{" "}
          <code>&lt;head&gt;</code> or elements with <code>display: none</code>{" "}
          are ignored.
        </p>

        <h2>What Is Render Tree Construction?</h2>
        <ul>
          <li>
            Combines the <strong>DOM Tree</strong> and{" "}
            <strong>CSSOM Tree</strong>
          </li>
          <li>Includes only elements that are visible on the page</li>
          <li>Figures out layout positions and sizes for each node</li>
          <li>Prepares elements for painting on the screen</li>
          <li>Part of the browser rendering process</li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            Browser reads HTML → builds the <strong>DOM Tree</strong>
          </li>
          <li>
            Browser reads CSS → builds the <strong>CSSOM Tree</strong>
          </li>
          <li>DOM + CSSOM are combined → Render Tree is created</li>
          <li>
            Layout calculation happens → size & position of each element is
            determined
          </li>
          <li>Render Tree is used to paint pixels on the screen</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<!-- HTML -->
<div>
  <p>Hello World</p>
</div>

/* CSS */
p { color: red; }`}
        </pre>

        <p>
          Here, the DOM has &lt;div&gt; and &lt;p&gt; nodes, the CSSOM has the{" "}
          <code>{`p { color: red; }`}</code> rule, and the Render Tree combines
          them to display the paragraph in red.
        </p>

        <h2>Why Render Tree Is Important</h2>
        <ul>
          <li>Only visible elements are considered → faster performance</li>
          <li>Determines how elements are drawn on the page</li>
          <li>Helps with layout and painting calculations</li>
          <li>Important for animations, repaints, and reflows</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Thinking invisible elements are included (they are ignored)</li>
          <li>Forgetting that style changes trigger Render Tree rebuild</li>
          <li>
            Using very complex CSS selectors → slows Render Tree construction
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            Render Tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A tree of
            visible elements created from DOM + CSSOM for painting on screen.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are invisible
            elements included in the Render Tree?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, elements
            with <code>display: none</code> or inside <code>&lt;head&gt;</code>{" "}
            are ignored.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Render Tree relate to layout and paint?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It provides
            the structure and style information needed for layout and painting
            pixels.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Render Tree is built from DOM + CSSOM</li>
          <li>Includes only visible elements</li>
          <li>Calculates layout (position & size) for painting</li>
          <li>Essential step in browser rendering</li>
          <li>Optimizes page performance and rendering</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 98,
    title: "Reflow (Layout Calculation)",
    path: "/frontend/js/browser/reflow",
    explanation: (
      <>
        <p>
          <strong>Reflow</strong> (also called{" "}
          <strong>Layout Calculation</strong>) is the process where the browser
          calculates the <strong>positions and sizes</strong> of all elements in
          the <strong>DOM Tree</strong> after a change occurs.
        </p>

        <p>
          It is an important step in the browser rendering pipeline because it
          ensures that elements are displayed correctly on the screen.
        </p>

        <h2>What Is Reflow?</h2>
        <ul>
          <li>Calculates size and position of DOM elements</li>
          <li>Triggered by changes in the DOM or CSS</li>
          <li>Ensures the layout on the screen is updated correctly</li>
          <li>Part of the browser rendering pipeline before painting</li>
        </ul>

        <h2>When Reflow Happens</h2>
        <ul>
          <li>Adding, removing, or changing DOM elements</li>
          <li>Changing element styles (e.g., width, height, font)</li>
          <li>Window resize</li>
          <li>Loading fonts or images that affect layout</li>
          <li>Changing content like text or table rows</li>
        </ul>

        <h2>Why Reflow Is Important</h2>
        <ul>
          <li>
            Ensures elements are displayed in the correct position and size
          </li>
          <li>Supports accurate painting and rendering on screen</li>
          <li>Maintains visual consistency after DOM or style changes</li>
        </ul>

        <h2>How Reflow Works Internally</h2>
        <ul>
          <li>Browser detects changes in the DOM or styles</li>
          <li>
            Traverses the DOM Tree to calculate element dimensions and positions
          </li>
          <li>Updates the layout information</li>
          <li>Signals the next step in the rendering pipeline (paint)</li>
        </ul>

        <h2>Performance Notes</h2>
        <ul>
          <li>
            Reflow is an <strong>expensive operation</strong> — it can slow down
            the page if triggered frequently
          </li>
          <li>Batch DOM changes to reduce multiple reflows</li>
          <li>
            Use <code>documentFragment</code> or CSS class changes instead of
            individual element updates
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Modifying layout properties in loops repeatedly</li>
          <li>
            Reading layout properties (like offsetHeight) inside loops, which
            forces reflow
          </li>
          <li>Not batching DOM updates, causing multiple reflows</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is reflow
            in browsers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reflow is the
            process where the browser calculates positions and sizes of DOM
            elements after changes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What triggers
            reflow?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> DOM changes,
            style changes, resizing, font/image loading.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is reflow
            expensive?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, frequent
            reflows can slow down page performance.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Reflow calculates element positions and sizes in the DOM</li>
          <li>
            Triggered by DOM and style changes, resizing, or font/image loading
          </li>
          <li>Essential before painting on screen</li>
          <li>Can be performance-heavy if not optimized</li>
          <li>
            Batch updates and avoid unnecessary DOM reads/writes to optimize
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 99,
    title: "Repaint (Visual Update)",
    path: "/frontend/js/browser/repaint",
    explanation: (
      <>
        <p>
          <strong>Repaint</strong> happens in the browser when something on the
          page changes visually, like the <strong>color</strong> or{" "}
          <strong>background</strong> of an element, but the layout (position or
          size) does not change.
        </p>

        <p>
          It is part of the <strong>browser rendering process</strong> and
          updates the pixels on the screen without recalculating the layout.
        </p>

        <h2>What Is Repaint?</h2>
        <ul>
          <li>Occurs when visual styles change but layout stays the same</li>
          <li>Examples: color change, visibility change, outline change</li>
          <li>Does not recalculate the size or position of elements</li>
          <li>Only affects pixels on the screen</li>
          <li>
            Also called <strong>Visual Update</strong>
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// CSS
p { color: red; }

/* Later in JS */
document.querySelector('p').style.color = 'blue';`}
        </pre>

        <p>
          In this example, only the text color changes. The browser repaints the
          paragraph without recalculating its layout.
        </p>

        <h2>Why Repaint Happens</h2>
        <ul>
          <li>Style changes that affect appearance but not layout</li>
          <li>Hover effects, color changes, background updates</li>
          <li>Visual feedback for user interactions</li>
        </ul>

        <h2>How Browser Handles Repaint Internally</h2>
        <ul>
          <li>Browser detects a style change</li>
          <li>Determines which elements need repaint</li>
          <li>Updates the pixels on the screen</li>
          <li>No layout recalculation is done → faster than reflow</li>
        </ul>

        <h2>Repaint vs Reflow</h2>
        <table>
          <thead>
            <tr>
              <th>Repaint</th>
              <th>Reflow (Layout)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visual change only (color, background)</td>
              <td>Layout or size change (width, height, position)</td>
            </tr>
            <tr>
              <td>No layout recalculation</td>
              <td>Recalculates layout of elements</td>
            </tr>
            <tr>
              <td>Faster</td>
              <td>Slower</td>
            </tr>
          </tbody>
        </table>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Thinking every style change causes layout recalculation</li>
          <li>Ignoring performance cost for frequent repaints</li>
          <li>
            Changing visual properties on many elements at once → slows
            rendering
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            Repaint in the browser?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A visual
            update where only the pixels change without recalculating layout.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which changes
            trigger a repaint?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Changes in
            color, background, visibility, or outline that do not affect layout.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is repaint
            faster than reflow?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, because
            it does not recalculate layout, only updates pixels.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Repaint updates visuals on the screen without changing layout</li>
          <li>Faster than reflow (layout recalculation)</li>
          <li>Triggered by style changes like color or background</li>
          <li>Important for performance optimization</li>
          <li>Part of the browser rendering pipeline</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 100,
    title: "Layout Thrashing",
    path: "/frontend/js/browser/layout-thrashing",
    explanation: (
      <>
        <p>
          <strong>Layout Thrashing</strong> happens when the browser repeatedly
          calculates layouts (reflows) due to alternating <strong>reads</strong>{" "}
          and <strong>writes</strong> of DOM layout properties. This can make
          the page slow and affect performance.
        </p>

        <h2>What Is Layout Thrashing?</h2>
        <ul>
          <li>
            Occurs when reading and writing layout properties repeatedly in a
            loop
          </li>
          <li>
            Forces multiple synchronous <strong>reflows</strong>
          </li>
          <li>
            Common layout properties include <code>offsetWidth</code>,{" "}
            <code>scrollTop</code>, <code>clientHeight</code>, etc.
          </li>
          <li>Can create a performance bottleneck in rendering</li>
        </ul>

        <h2>Example of Layout Thrashing</h2>
        <pre>
          {`for (let i = 0; i < items.length; i++) {
  const height = items[i].offsetHeight; // read triggers reflow
  items[i].style.height = height + 10 + 'px'; // write triggers reflow
}`}
        </pre>

        <p>
          Here, reading <code>offsetHeight</code> forces a reflow, and writing a
          new style triggers another. Doing this repeatedly is{" "}
          <strong>layout thrashing</strong>.
        </p>

        <h2>Why It Happens</h2>
        <ul>
          <li>Alternating DOM reads and writes without batching</li>
          <li>Accessing layout properties that depend on current layout</li>
          <li>
            Performing changes inside loops or frequently-called functions
          </li>
        </ul>

        <h2>How to Avoid Layout Thrashing</h2>
        <ul>
          <li>Batch DOM reads and writes separately</li>
          <li>
            Use <code>documentFragment</code> for multiple DOM changes
          </li>
          <li>Cache layout values instead of reading multiple times</li>
          <li>
            Use <code>requestAnimationFrame</code> for style updates
          </li>
        </ul>

        <h2>Why It Matters</h2>
        <ul>
          <li>Prevents excessive reflows that slow down the page</li>
          <li>Improves browser rendering performance</li>
          <li>Essential for smooth animations and interactive UI</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Reading layout properties inside loops while writing styles</li>
          <li>Not caching frequently accessed properties</li>
          <li>Updating DOM one element at a time unnecessarily</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is layout
            thrashing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Repeated
            forced reflows caused by alternating reads and writes to DOM layout
            properties.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can layout
            thrashing affect performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It causes
            multiple reflows, slowing down page rendering and animations.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            prevent layout thrashing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Batch DOM
            reads/writes, cache layout values, and use{" "}
            <code>requestAnimationFrame</code>.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Layout thrashing happens due to alternating DOM reads and writes
          </li>
          <li>Triggers multiple synchronous reflows, affecting performance</li>
          <li>Batching changes and caching values can prevent it</li>
          <li>
            Important to optimize for smooth animations and fast rendering
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 101,
    title: "Event Capturing & Bubbling",
    path: "/frontend/js/browser/event-phases",
    explanation: (
      <>
        <p>
          <strong>Event Capturing</strong> and <strong>Event Bubbling</strong>{" "}
          are the two main phases of <strong>event propagation</strong> in the
          DOM (Document Object Model). They determine how events flow from
          parent to child elements and back.
        </p>

        <h2>What Are Event Phases?</h2>
        <ul>
          <li>
            <strong>Capturing Phase:</strong> The event starts from the topmost
            ancestor (<code>window</code>) and travels down to the target
            element.
          </li>
          <li>
            <strong>Target Phase:</strong> The event reaches the target element
            that triggered it.
          </li>
          <li>
            <strong>Bubbling Phase:</strong> The event bubbles up from the
            target element back to the topmost ancestor.
          </li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>Browser detects an event (like a click) on an element</li>
          <li>
            The event first goes through the <strong>capturing phase</strong>,
            checking for listeners set with <code>capture=true</code>
          </li>
          <li>
            Then it reaches the <strong>target element</strong>
          </li>
          <li>
            Finally, it bubbles up in the <strong>bubbling phase</strong> to the
            parent elements
          </li>
          <li>
            Each element in the path can handle the event if a listener is
            attached
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Capturing listener
parent.addEventListener('click', () => {
  console.log('Parent capturing');
}, true);

// Bubbling listener
parent.addEventListener('click', () => {
  console.log('Parent bubbling');
}, false);

child.addEventListener('click', () => {
  console.log('Child clicked');
});
</script>`}
        </pre>

        <p>
          Output when button is clicked: <br />
          <code>Parent capturing → Child clicked → Parent bubbling</code>
        </p>

        <h2>Why Event Capturing & Bubbling Matter</h2>
        <ul>
          <li>Helps manage events on nested elements</li>
          <li>Prevents attaching too many listeners (use delegation)</li>
          <li>Controls the order in which listeners execute</li>
          <li>Essential for event-driven UI behavior</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Confusing capture and bubble phases</li>
          <li>Not using event delegation for dynamic elements</li>
          <li>
            Forgetting to stop propagation when necessary (
            <code>event.stopPropagation()</code>)
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            capturing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The phase
            where the event travels from the topmost parent down to the target
            element.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            bubbling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The phase
            where the event bubbles up from the target element to the topmost
            parent.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            target phase?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The phase when
            the event reaches the element that actually triggered it.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            stop an event from bubbling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>event.stopPropagation()</code> inside the event handler.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Events propagate through three phases: capturing → target → bubbling
          </li>
          <li>
            Capturing listeners run before the target, bubbling listeners run
            after
          </li>
          <li>Event delegation can improve performance and simplify code</li>
          <li>Stop propagation if you want to prevent further event flow</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 102,
    title: "addEventListener Options",
    path: "/frontend/js/browser/event-listener-options",
    explanation: (
      <>
        <p>
          The <strong>addEventListener</strong> method in JavaScript can take an{" "}
          <strong>options object</strong> as the third argument to control how
          an event listener behaves.
        </p>

        <h2>What Are the Options?</h2>
        <ul>
          <li>
            <strong>capture:</strong> Determines if the listener runs during the{" "}
            <strong>capturing phase</strong> (<code>true</code>) or{" "}
            <strong>bubbling phase</strong> (<code>false</code>, default).
          </li>
          <li>
            <strong>once:</strong> If set to <code>true</code>, the listener
            will automatically be removed after it runs once.
          </li>
          <li>
            <strong>passive:</strong> If <code>true</code>, tells the browser
            that the listener will not call <code>event.preventDefault()</code>.
            This allows smoother scrolling and better performance.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`const button = document.getElementById('btn');

// Runs only once
button.addEventListener('click', () => {
  console.log('Button clicked once!');
}, { once: true });

// Capturing phase listener
button.addEventListener('click', () => {
  console.log('Capturing phase!');
}, { capture: true });

// Passive listener for scroll
window.addEventListener('scroll', () => {
  console.log('Scrolling...');
}, { passive: true });`}
        </pre>

        <h2>Why These Options Matter</h2>
        <ul>
          <li>Control when your listener runs (capturing vs bubbling)</li>
          <li>
            Improve performance for events like <code>scroll</code> and{" "}
            <code>touchmove</code>
          </li>
          <li>
            Automatically remove listeners to prevent memory leaks (
            <code>once</code>)
          </li>
          <li>Better user experience and smoother UI interactions</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Forgetting to set <code>passive: true</code> on scroll/touch events
            → can cause lag
          </li>
          <li>
            Not using <code>once: true</code> when listener is needed only once
            → unnecessary memory use
          </li>
          <li>
            Confusing <code>capture</code> with <code>bubble</code> phase
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does the{" "}
            <code>capture</code> option do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Determines if
            the event listener runs during the capturing phase (
            <code>true</code>) or the bubbling phase (<code>false</code>).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            passive listener?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A listener
            that never calls <code>event.preventDefault()</code>, allowing
            better performance for scrolling/touch events.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does the{" "}
            <code>once</code> option do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Automatically
            removes the listener after it runs once.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <strong>capture:</strong> Choose the phase (capturing vs bubbling)
          </li>
          <li>
            <strong>once:</strong> Run listener only once
          </li>
          <li>
            <strong>passive:</strong> Improve performance by skipping
            preventDefault
          </li>
          <li>Helps optimize event handling and memory usage</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 103,
    title: "Debouncing & Throttling (Browser Level)",
    path: "/frontend/js/browser/debounce-throttle",
    explanation: (
      <>
        <p>
          <strong>Debouncing</strong> and <strong>Throttling</strong> are
          techniques in JavaScript to control how often a function runs when
          events like <code>scroll</code>, <code>resize</code>, or{" "}
          <code>input</code> happen very quickly.
        </p>

        <h2>What Is Debouncing?</h2>
        <p>
          Debouncing makes sure a function runs{" "}
          <strong>
            only after a certain time has passed since the last event
          </strong>
          . If the event keeps happening, the function will wait and only run
          after things stop.
        </p>
        <ul>
          <li>Good for: search input, window resize, button clicks</li>
          <li>Prevents function from running too many times quickly</li>
        </ul>

        <h2>Basic Debounce Example</h2>
        <pre>
          {`function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

const handleResize = debounce(() => {
  console.log('Resized!');
}, 500);

window.addEventListener('resize', handleResize);`}
        </pre>

        <h2>What Is Throttling?</h2>
        <p>
          Throttling makes sure a function runs{" "}
          <strong>at most once every set period</strong>, even if the event
          happens many times.
        </p>
        <ul>
          <li>Good for: scroll events, animations, tracking mouse movement</li>
          <li>Controls event firing rate to improve performance</li>
        </ul>

        <h2>Basic Throttle Example</h2>
        <pre>
          {`function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

const handleScroll = throttle(() => {
  console.log('Scrolling...');
}, 1000);

window.addEventListener('scroll', handleScroll);`}
        </pre>

        <h2>Why Use Debounce & Throttle?</h2>
        <ul>
          <li>Prevents the browser from doing too much work at once</li>
          <li>Improves performance and reduces lag</li>
          <li>
            Prevents <strong>layout thrashing</strong> caused by too many
            reflows
          </li>
          <li>Makes event handling more efficient</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Using debounce for events where you want continuous updates (use
            throttle instead)
          </li>
          <li>
            Using throttle for events that should wait until finished (use
            debounce instead)
          </li>
          <li>Setting too short or too long delay values</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between debouncing and throttling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Debounce waits
            until the event stops to run, throttle runs at most once in a set
            period.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use debouncing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you want
            to run a function after an event stops, like typing in a search box.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use throttling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you want
            to limit how often a function runs, like scrolling or resizing.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Debounce → run function after events stop</li>
          <li>Throttle → run function at most once per time period</li>
          <li>Both help improve performance and avoid unnecessary work</li>
          <li>Useful for scroll, resize, input, and other frequent events</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 104,
    title: "DOMParser & Serialization Internals",
    path: "/frontend/js/browser/domparser",
    explanation: (
      <>
        <p>
          <strong>DOMParser</strong> and <strong>XMLSerializer</strong> are
          JavaScript tools that let you{" "}
          <strong>convert between strings and DOM nodes</strong>.
        </p>

        <h2>What Is DOMParser?</h2>
        <p>
          <strong>DOMParser</strong> takes an HTML or XML string and converts it
          into a <strong>DOM (Document Object Model)</strong> tree that the
          browser can use.
        </p>
        <ul>
          <li>Input: HTML or XML string</li>
          <li>Output: DOM nodes you can manipulate</li>
          <li>Useful for dynamically creating elements from strings</li>
        </ul>

        <h2>Basic DOMParser Example</h2>
        <pre>
          {`const parser = new DOMParser();
const doc = parser.parseFromString('<div><p>Hello</p></div>', 'text/html');
console.log(doc.body.firstChild); // <div><p>Hello</p></div>`}
        </pre>

        <h2>What Is XMLSerializer?</h2>
        <p>
          <strong>XMLSerializer</strong> does the opposite of DOMParser. It{" "}
          <strong>converts DOM nodes back into a string</strong>.
        </p>
        <ul>
          <li>Input: DOM node</li>
          <li>Output: HTML or XML string</li>
          <li>Useful for sending DOM content as text or saving it</li>
        </ul>

        <h2>Basic XMLSerializer Example</h2>
        <pre>
          {`const serializer = new XMLSerializer();
const htmlString = serializer.serializeToString(document.body.firstChild);
console.log(htmlString); // "<div><p>Hello</p></div>"`}
        </pre>

        <h2>Why It’s Useful</h2>
        <ul>
          <li>Parse HTML/XML from a string into DOM elements</li>
          <li>Serialize DOM elements back to string for storage or network</li>
          <li>Works with live DOM manipulation</li>
          <li>Helps in parsing, rendering, and sending HTML/XML dynamically</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Forgetting to specify the type in <code>parseFromString</code> (like
            'text/html' or 'application/xml')
          </li>
          <li>
            Assuming serialization preserves formatting exactly (it may minify
            or change whitespace)
          </li>
          <li>Using XMLSerializer on non-element nodes incorrectly</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            DOMParser do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It converts an
            HTML or XML string into DOM nodes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            XMLSerializer do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It converts
            DOM nodes back into a string.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            DOMParser and XMLSerializer?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To parse
            strings into DOM for manipulation and serialize DOM back to strings
            for storage or sending.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>DOMParser → string to DOM</li>
          <li>XMLSerializer → DOM to string</li>
          <li>
            Both help dynamically create, manipulate, and save HTML/XML content
          </li>
          <li>
            Useful in modern web applications for parsing and serialization
          </li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 105,
    title: "Intersection Observer Internals",
    path: "/frontend/js/browser/intersection-observer",
    explanation: (
      <>
        <p>
          <strong>IntersectionObserver</strong> is a JavaScript API that lets
          you watch when an element enters or leaves the{" "}
          <strong>viewport</strong> (what the user sees on screen) without
          constantly checking it.
        </p>

        <h2>What Is IntersectionObserver?</h2>
        <ul>
          <li>Helps detect when an element is visible on the screen</li>
          <li>
            Tracks visibility using the element's <strong>bounding box</strong>
          </li>
          <li>Runs a callback when visibility changes</li>
          <li>Works efficiently without causing performance issues</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('Element is visible!');
    }
  });
});

observer.observe(document.querySelector('#myElement'));`}
        </pre>

        <p>
          In this example, the callback runs only when <code>#myElement</code>{" "}
          appears in the viewport.
        </p>

        <h2>Why IntersectionObserver Exists</h2>
        <ul>
          <li>Lazy load images or content only when visible</li>
          <li>Implement infinite scroll efficiently</li>
          <li>
            Avoid performance issues like <strong>layout thrashing</strong>
          </li>
          <li>Detect elements entering or leaving the viewport</li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>Browser calculates the bounding box of observed elements</li>
          <li>Checks their intersection with the viewport or root element</li>
          <li>Queues a callback when visibility crosses the threshold</li>
          <li>
            Runs callbacks in microtasks to avoid blocking the main thread
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Observing too many elements at once (may reduce performance)</li>
          <li>Expecting immediate callback without threshold crossing</li>
          <li>Not unobserving elements when no longer needed</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            IntersectionObserver used for?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To detect when
            an element becomes visible or hidden in the viewport.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is it
            better than scroll event listeners?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It avoids
            continuous checks and layout thrashing, improving performance.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can
            IntersectionObserver be used for lazy loading images?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, it is
            commonly used to load images or content only when visible.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            IntersectionObserver watches elements’ visibility in the viewport
          </li>
          <li>Runs callbacks efficiently without blocking the main thread</li>
          <li>
            Used for lazy loading, infinite scrolling, and viewport detection
          </li>
          <li>Helps improve web performance and avoid layout thrashing</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 106,
    title: "Mutation Observer Internals",
    path: "/frontend/js/browser/mutation-observer",
    explanation: (
      <>
        <p>
          <strong>MutationObserver</strong> is a JavaScript API that lets you
          watch for <strong>changes in the DOM</strong> (like elements being
          added, removed, or modified) without constantly checking manually.
        </p>

        <h2>What Is MutationObserver?</h2>
        <ul>
          <li>Monitors changes in the DOM tree asynchronously</li>
          <li>Detects when nodes are added, removed, or changed</li>
          <li>Runs a callback whenever mutations happen</li>
          <li>Avoids performance problems from constant DOM polling</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`const observer = new MutationObserver((mutationsList) => {
  for(const mutation of mutationsList){
    console.log('A change occurred:', mutation);
  }
});

observer.observe(document.body, { childList: true, subtree: true });`}
        </pre>

        <p>
          In this example, the observer watches the entire body for added or
          removed elements (<code>childList</code>) and any nested elements (
          <code>subtree</code>).
        </p>

        <h2>Why MutationObserver Exists</h2>
        <ul>
          <li>Detect changes in the DOM efficiently</li>
          <li>Avoid expensive and slow polling with setInterval or loops</li>
          <li>Useful for dynamic content updates or reactive UI changes</li>
          <li>Improves performance by using asynchronous callbacks</li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>Browser tracks DOM mutations in the background</li>
          <li>Mutations are collected into a list</li>
          <li>
            Callback is queued in the <strong>microtask queue</strong> and runs
            after current scripts finish
          </li>
          <li>Runs efficiently without blocking the main thread</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Observing too many nodes without filtering (can hurt performance)
          </li>
          <li>Expecting immediate synchronous updates (callback is async)</li>
          <li>Forgetting to disconnect the observer when no longer needed</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            MutationObserver used for?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To watch for
            changes in the DOM tree asynchronously.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How is it
            better than using setInterval for checking DOM changes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is more
            efficient and avoids performance issues from constant polling.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What kind of
            mutations can it detect?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            Adding/removing nodes, attribute changes, and text content changes.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>MutationObserver watches DOM changes efficiently</li>
          <li>Runs async callbacks via the microtask queue</li>
          <li>Helps detect added, removed, or modified nodes</li>
          <li>Improves performance compared to polling</li>
          <li>Useful for dynamic content and reactive UIs</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 107,
    title: "Critical Rendering Path",
    path: "/frontend/js/browser/critical-rendering-path",
    explanation: (
      <>
        <p>
          <strong>Critical Rendering Path</strong> is the sequence of steps a
          browser takes to convert HTML, CSS, and JavaScript into pixels on the
          screen. Optimizing this path helps pages render faster.
        </p>

        <h2>What Is Critical Rendering Path?</h2>
        <ul>
          <li>
            It defines the order the browser follows to display a web page
          </li>
          <li>
            Includes parsing HTML, building the DOM, CSS parsing, and painting
          </li>
          <li>Helps understand how browsers render pages</li>
          <li>Optimization can reduce the time to first render</li>
        </ul>

        <h2>Steps in Critical Rendering Path</h2>
        <ol>
          <li>
            <strong>HTML Parsing → DOM Construction:</strong> Browser reads HTML
            and builds the Document Object Model (DOM) tree.
          </li>
          <li>
            <strong>CSS Parsing → CSSOM Creation:</strong> Browser parses CSS
            and creates the CSS Object Model (CSSOM) tree.
          </li>
          <li>
            <strong>Render Tree Construction:</strong> DOM and CSSOM are
            combined to form a tree of visible elements.
          </li>
          <li>
            <strong>Layout Calculation (Reflow):</strong> Determines the exact
            position and size of each element on the page.
          </li>
          <li>
            <strong>Painting:</strong> Browser fills pixels on the screen
            according to styles and layout.
          </li>
          <li>
            <strong>Compositing:</strong> Layers are combined, and the final
            frame is displayed to the user.
          </li>
        </ol>

        <h2>Why It Matters</h2>
        <ul>
          <li>
            Critical Rendering Path affects page load speed and user experience
          </li>
          <li>
            Reducing the number of render-blocking resources speeds up first
            paint
          </li>
          <li>Helps optimize how quickly users see content on screen</li>
        </ul>

        <h2>How to Optimize</h2>
        <ul>
          <li>Minimize CSS and JavaScript that blocks rendering</li>
          <li>Use asynchronous or deferred scripts</li>
          <li>Reduce the size of critical resources</li>
          <li>Inline small CSS to avoid extra HTTP requests</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<!-- Large CSS and JS files may block rendering -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>`}
        </pre>
        <p>
          Optimizing this by using <code>async</code>, <code>defer</code>, or
          splitting CSS/JS can make the page render faster.
        </p>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Blocking rendering with large CSS or JavaScript files</li>
          <li>Not considering the order of critical resources</li>
          <li>Ignoring layout and paint optimizations</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Critical Rendering Path?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is the
            sequence of steps a browser takes to turn HTML, CSS, and JS into
            pixels on screen.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why optimize
            the Critical Rendering Path?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To make pages
            display content faster and improve user experience.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            main steps?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> DOM building,
            CSSOM building, render tree construction, layout calculation,
            painting, and compositing.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Critical Rendering Path is how browsers render pages step by step
          </li>
          <li>Optimizing it improves first paint and page load time</li>
          <li>
            Includes DOM, CSSOM, render tree, layout, painting, and compositing
          </li>
          <li>Helps deliver faster and smoother user experience</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 108,
    title: "Compositing & Layers",
    path: "/frontend/js/browser/compositing",
    explanation: (
      <>
        <p>
          <strong>Compositing</strong> is the process where the browser combines
          different layers of a page to display the final content on the screen.
          Using layers can improve performance, especially for animations and
          visual effects.
        </p>

        <h2>What Are Layers?</h2>
        <ul>
          <li>
            Layers are separate parts of the page that the browser can render
            independently
          </li>
          <li>
            Elements with transforms, opacity changes, or certain CSS properties
            can be promoted to their own layer
          </li>
          <li>
            GPU (Graphics Processing Unit) can handle layers faster than the CPU
          </li>
          <li>
            Helps reduce the need to repaint or recalc layouts for the whole
            page
          </li>
        </ul>

        <h2>How Compositing Works</h2>
        <ul>
          <li>Browser divides the page into layers</li>
          <li>Each layer is painted separately</li>
          <li>GPU combines (composites) layers to create the final frame</li>
          <li>This process is faster for animations and scrolling</li>
        </ul>

        <h2>Common CSS Properties That Trigger New Layers</h2>
        <ul>
          <li>
            <code>transform</code> (e.g., translate, rotate, scale)
          </li>
          <li>
            <code>opacity</code>
          </li>
          <li>
            <code>will-change</code> (hinting the browser about future changes)
          </li>
          <li>
            3D transforms (e.g., <code>translateZ</code>,{" "}
            <code>perspective</code>)
          </li>
        </ul>

        <h2>Benefits of Compositing & Layers</h2>
        <ul>
          <li>Smoother animations</li>
          <li>Less repainting and reflowing of other elements</li>
          <li>Better scroll performance</li>
          <li>Improved rendering for complex pages</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Creating too many layers (can increase memory usage)</li>
          <li>
            Using <code>will-change</code> on every element unnecessarily
          </li>
          <li>Expecting compositing to fix slow JavaScript or layout issues</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            compositing in browsers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is the
            process of combining layers to display the final content on screen.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which CSS
            properties can trigger a new layer?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>transform</code>, <code>opacity</code>,{" "}
            <code>will-change</code>, and 3D transforms.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            layers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To improve
            animation performance, reduce repaints, and make scrolling smoother.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Compositing combines layers to render the page efficiently</li>
          <li>GPU handles layers for better performance</li>
          <li>
            Triggers like <code>transform</code> and <code>opacity</code> create
            new layers
          </li>
          <li>
            Helps smooth animations, scrolling, and complex visual effects
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 109,
    title: "Event Propagation Phases",
    path: "/frontend/js/events/propagation",
    explanation: (
      <>
        <p>
          <strong>Event Propagation</strong> is the way browser events travel
          through the <strong>DOM</strong> (Document Object Model). When an
          event happens on an element, it moves through different phases before
          reaching the final target.
        </p>

        <h2>What Are Event Propagation Phases?</h2>
        <ul>
          <li>
            <strong>Capturing Phase:</strong> The event starts from the top of
            the DOM tree and goes down to the target element.
          </li>
          <li>
            <strong>Target Phase:</strong> The event reaches the element where
            it actually happened (the target).
          </li>
          <li>
            <strong>Bubbling Phase:</strong> After reaching the target, the
            event moves back up the DOM tree to the root.
          </li>
        </ul>

        <h2>How It Works</h2>
        <ul>
          <li>
            When a user clicks a button, the event first travels from{" "}
            <code>document → html → body → parent → button</code> (capturing).
          </li>
          <li>
            The button is the <strong>target</strong>, so the event triggers
            listeners attached to it.
          </li>
          <li>
            Then the event bubbles back up{" "}
            <code>button → parent → body → html → document</code>, triggering
            any bubbling listeners.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', () => console.log('Parent clicked!'), true); // capturing
  child.addEventListener('click', () => console.log('Child clicked!')); // bubbling (default)
</script>`}
        </pre>

        <p>
          Output when button is clicked: <br />
          <code>Parent clicked!</code> → <code>Child clicked!</code>
        </p>

        <h2>Why Event Propagation Exists</h2>
        <ul>
          <li>Allows handling events at different levels in the DOM</li>
          <li>Makes it easier to manage dynamic elements</li>
          <li>
            Helps with event delegation (attaching a listener to a parent for
            multiple children)
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Not specifying capture when needed</li>
          <li>Confusing the order of capture vs bubbling</li>
          <li>Overusing event listeners instead of delegation</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            phases of event propagation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Capturing,
            Target, and Bubbling phases.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            attach a listener for capturing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Pass{" "}
            <code>true</code> as the third argument in{" "}
            <code>addEventListener</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            delegation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Attaching a
            listener to a parent element to handle events on its children.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Event propagation controls how events travel in the DOM</li>
          <li>Three phases: Capturing → Target → Bubbling</li>
          <li>
            Capture listeners run first, then target, then bubbling listeners
          </li>
          <li>Useful for event delegation and managing multiple elements</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 110,
    title: "Capturing vs Bubbling Internals",
    path: "/frontend/js/events/capture-bubble",
    explanation: (
      <>
        <p>
          <strong>Capturing</strong> and <strong>Bubbling</strong> are two ways
          that browser events move through the <strong>DOM</strong> (Document
          Object Model). Understanding them helps control when and where event
          listeners run.
        </p>

        <h2>What Are Capturing & Bubbling?</h2>
        <ul>
          <li>
            <strong>Capturing Phase:</strong> The event moves from the top of
            the DOM tree down to the target element. This is also called the{" "}
            <em>capture phase</em>.
          </li>
          <li>
            <strong>Target Phase:</strong> The event reaches the element where
            it actually happened (the target).
          </li>
          <li>
            <strong>Bubbling Phase:</strong> After the target, the event moves
            back up the DOM tree to the root. This is called the{" "}
            <em>bubble phase</em>.
          </li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            Browser starts at <code>document → html → body</code> for capture
            phase.
          </li>
          <li>Event reaches the target element and triggers its listeners.</li>
          <li>Event then bubbles back up through parent elements.</li>
          <li>
            You can control which phase a listener reacts to using the{" "}
            <code>capture</code> option in <code>addEventListener</code>.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Capturing listener
parent.addEventListener('click', () => console.log('Parent capture!'), true);

// Bubbling listener (default)
child.addEventListener('click', () => console.log('Child bubble!'));
</script>`}
        </pre>

        <p>
          Output when button is clicked: <br />
          <code>Parent capture!</code> → <code>Child bubble!</code>
        </p>

        <h2>Key Points</h2>
        <ul>
          <li>
            Capturing runs <strong>before</strong> the event reaches the target.
          </li>
          <li>
            Bubbling runs <strong>after</strong> the event reaches the target.
          </li>
          <li>Target phase always triggers listeners on the target element.</li>
          <li>
            Use <code>{"{ capture: true }"}</code> to make a listener run in
            capturing phase.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming all listeners run in bubbling phase by default.</li>
          <li>
            Forgetting to set <code>capture: true</code> when needed.
          </li>
          <li>Confusing capture and bubble order.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between capturing and bubbling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Capturing goes
            top → target, bubbling goes target → top.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            make a listener run in capture phase?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Pass{" "}
            <code>true</code> as the third argument in{" "}
            <code>addEventListener</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which phase
            runs first, capture or bubble?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Capturing
            phase runs first, then target, then bubbling.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Events move through three phases: Capturing → Target → Bubbling
          </li>
          <li>Capturing phase: top → target, Bubbling phase: target → top</li>
          <li>Target phase triggers listeners on the element itself</li>
          <li>
            Use <code>capture: true</code> to control listener execution
          </li>
          <li>
            Understanding this helps with event delegation and controlling event
            flow
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 110,
    title: "Capturing vs Bubbling Internals",
    path: "/frontend/js/events/capture-bubble",
    explanation: (
      <>
        <p>
          <strong>Capturing</strong> and <strong>Bubbling</strong> are two ways
          that browser events move through the <strong>DOM</strong> (Document
          Object Model). Understanding them helps control when and where event
          listeners run.
        </p>

        <h2>What Are Capturing & Bubbling?</h2>
        <ul>
          <li>
            <strong>Capturing Phase:</strong> The event moves from the top of
            the DOM tree down to the target element. This is also called the{" "}
            <em>capture phase</em>.
          </li>
          <li>
            <strong>Target Phase:</strong> The event reaches the element where
            it actually happened (the target).
          </li>
          <li>
            <strong>Bubbling Phase:</strong> After the target, the event moves
            back up the DOM tree to the root. This is called the{" "}
            <em>bubble phase</em>.
          </li>
        </ul>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            Browser starts at <code>document → html → body</code> for capture
            phase.
          </li>
          <li>Event reaches the target element and triggers its listeners.</li>
          <li>Event then bubbles back up through parent elements.</li>
          <li>
            You can control which phase a listener reacts to using the{" "}
            <code>capture</code> option in <code>addEventListener</code>.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Capturing listener
parent.addEventListener('click', () => console.log('Parent capture!'), true);

// Bubbling listener (default)
child.addEventListener('click', () => console.log('Child bubble!'));
</script>`}
        </pre>

        <p>
          Output when button is clicked: <br />
          <code>Parent capture!</code> → <code>Child bubble!</code>
        </p>

        <h2>Key Points</h2>
        <ul>
          <li>
            Capturing runs <strong>before</strong> the event reaches the target.
          </li>
          <li>
            Bubbling runs <strong>after</strong> the event reaches the target.
          </li>
          <li>Target phase always triggers listeners on the target element.</li>
          <li>
            Use <code>{"{ capture: true }"}</code> to make a listener run in
            capturing phase.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming all listeners run in bubbling phase by default.</li>
          <li>
            Forgetting to set <code>capture: true</code> when needed.
          </li>
          <li>Confusing capture and bubble order.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between capturing and bubbling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Capturing goes
            top → target, bubbling goes target → top.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            make a listener run in capture phase?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Pass{" "}
            <code>true</code> as the third argument in{" "}
            <code>addEventListener</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which phase
            runs first, capture or bubble?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Capturing
            phase runs first, then target, then bubbling.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Events move through three phases: Capturing → Target → Bubbling
          </li>
          <li>Capturing phase: top → target, Bubbling phase: target → top</li>
          <li>Target phase triggers listeners on the element itself</li>
          <li>
            Use <code>capture: true</code> to control listener execution
          </li>
          <li>
            Understanding this helps with event delegation and controlling event
            flow
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 111,
    title: "Event Target, CurrentTarget, and Path",
    path: "/frontend/js/events/target-path",
    explanation: (
      <>
        <p>
          When a browser event happens, it moves through the DOM tree.
          JavaScript provides properties to help understand where the event
          started and how it flows.
        </p>

        <h2>Key Properties</h2>
        <ul>
          <li>
            <strong>event.target</strong> → The element that{" "}
            <em>actually triggered</em> the event.
          </li>
          <li>
            <strong>event.currentTarget</strong> → The element whose listener is
            currently handling the event.
          </li>
          <li>
            <strong>event.composedPath()</strong> → Returns an array of all
            elements the event passes through from the root to the target.
          </li>
        </ul>

        <h2>How It Works</h2>
        <ul>
          <li>
            When you click on a child element, <code>event.target</code> is the
            child.
          </li>
          <li>
            Listeners on parent elements see <code>event.currentTarget</code> as
            the parent element.
          </li>
          <li>
            <code>composedPath()</code> helps you debug by showing the full
            chain the event went through.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', (event) => {
  console.log('target:', event.target.id);
  console.log('currentTarget:', event.currentTarget.id);
  console.log('path:', event.composedPath().map(el => el.id));
});
</script>`}
        </pre>

        <p>
          Clicking the button outputs:
          <br />
          <code>target: child</code> → the element clicked
          <br />
          <code>currentTarget: parent</code> → the listener's element
          <br />
          <code>
            path: ["child", "parent", "body", "html", "document", "window"]
          </code>
        </p>

        <h2>Key Points</h2>
        <ul>
          <li>
            <code>event.target</code> does not change; it’s always where the
            event started.
          </li>
          <li>
            <code>event.currentTarget</code> changes as the event moves through
            listeners.
          </li>
          <li>
            <code>composedPath()</code> gives the full path for debugging or
            complex event handling.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Confusing <code>target</code> and <code>currentTarget</code>.
          </li>
          <li>
            Assuming <code>composedPath()</code> is always needed; use only for
            event chain debugging.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between <code>target</code> and{" "}
            <code>currentTarget</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>target</code> is the element where the event started,{" "}
            <code>currentTarget</code> is the element whose listener is running.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>composedPath()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It returns the
            full chain of elements the event passed through.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>event.target</code> → origin of the event
          </li>
          <li>
            <code>event.currentTarget</code> → element whose listener is running
          </li>
          <li>
            <code>event.composedPath()</code> → full propagation path
          </li>
          <li>Helps manage and debug event flow in the DOM</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 112,
    title: "Event Delegation",
    path: "/frontend/js/events/delegation",
    explanation: (
      <>
        <p>
          <strong>Event Delegation</strong> is a technique where you attach a{" "}
          <strong>single event listener</strong> to a parent element instead of
          multiple listeners to its child elements. It relies on{" "}
          <strong>event bubbling</strong> to handle events efficiently.
        </p>

        <h2>Why Use Event Delegation?</h2>
        <ul>
          <li>Reduces memory usage by using fewer event listeners.</li>
          <li>Makes handling many child elements easier.</li>
          <li>Works for dynamically added elements.</li>
          <li>Improves performance in large DOMs.</li>
        </ul>

        <h2>How It Works</h2>
        <ul>
          <li>
            Event starts at the <code>target</code> element.
          </li>
          <li>It bubbles up through its parent elements.</li>
          <li>The parent listener checks which child triggered the event.</li>
          <li>Action is performed based on the child element.</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<script>
const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
  if(event.target.tagName === 'LI') {
    alert('Clicked on ' + event.target.textContent);
  }
});
</script>`}
        </pre>

        <p>
          Here, instead of adding listeners to each &lt;li&gt;, a single
          listener on &lt;ul&gt; handles clicks on any list item using{" "}
          <code>event.target</code>.
        </p>

        <h2>Key Points</h2>
        <ul>
          <li>
            Works because of <strong>event bubbling</strong>.
          </li>
          <li>
            Check <code>event.target</code> to identify the child element.
          </li>
          <li>Good for lists, tables, or any container with many children.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Forgetting to check <code>event.target</code> and acting on the
            parent itself.
          </li>
          <li>
            Using delegation for elements that don’t bubble (like{" "}
            <code>focus</code>).
          </li>
          <li>Overusing delegation for very few elements (not necessary).</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            delegation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using a single
            listener on a parent to handle events from multiple child elements.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use event
            delegation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Saves memory,
            handles dynamic elements, and improves performance for large DOMs.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Attach listener to a parent, not each child.</li>
          <li>
            Use <code>event.target</code> to find which child triggered the
            event.
          </li>
          <li>Relies on event bubbling to propagate events.</li>
          <li>Efficient and scalable way to handle many elements.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 113,
    title: "Custom Events & Event Dispatching",
    path: "/frontend/js/events/custom-events",
    explanation: (
      <>
        <p>
          <strong>Custom Events</strong> are user-defined events in JavaScript
          that allow different parts of your application to communicate. You can
          create them using <code>new CustomEvent()</code> and trigger them with{" "}
          <code>dispatchEvent()</code>.
        </p>

        <h2>Why Use Custom Events?</h2>
        <ul>
          <li>
            Enable communication between different components or parts of the
            page.
          </li>
          <li>
            Allow data to be passed along with the event using a{" "}
            <code>detail</code> object.
          </li>
          <li>
            Useful in event-driven programming for cleaner and decoupled code.
          </li>
        </ul>

        <h2>How It Works</h2>
        <ul>
          <li>
            Create a custom event with{" "}
            <pre>
              {`// Create a custom event
const myEvent = new CustomEvent('eventName', {
  detail: { key: 'value' }
});
document.dispatchEvent(myEvent);`}
            </pre>
          </li>
          <li>
            Add an event listener for the custom event using{" "}
            <code>addEventListener</code>
          </li>
          <li>
            Trigger the event using <code>dispatchEvent</code> on the element
          </li>
          <li>
            The listener receives the event and can use{" "}
            <code>event.detail</code> for data
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// Create a custom event
const myEvent = new CustomEvent('greet', { detail: { name: 'Alice' } });

// Add listener
document.addEventListener('greet', (event) => {
  console.log('Hello ' + event.detail.name);
});

// Dispatch event
document.dispatchEvent(myEvent);`}
        </pre>

        <p>
          Output: <code>Hello Alice</code>. The <code>detail</code> property
          lets you pass extra information with the event.
        </p>

        <h2>Key Points</h2>
        <ul>
          <li>
            Custom events can carry data using the <code>detail</code> object.
          </li>
          <li>
            Use <code>dispatchEvent</code> to trigger the event.
          </li>
          <li>
            Listeners can be added to any DOM element, including{" "}
            <code>document</code> or <code>window</code>.
          </li>
          <li>Helps implement a decoupled, event-driven architecture.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Forgetting to add a listener before dispatching the event.</li>
          <li>Using the wrong event name when dispatching or listening.</li>
          <li>
            Not passing required data in the <code>detail</code> object.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            custom event?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An event you
            define yourself to let different parts of your app communicate.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            send data with a custom event?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use the{" "}
            <code>detail</code> property when creating the event.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            trigger a custom event?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By calling{" "}
            <code>dispatchEvent</code> on the element where the listener is
            attached.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Custom events allow communication between different parts of an app.
          </li>
          <li>
            Created using <code>new CustomEvent()</code>.
          </li>
          <li>
            Triggered with <code>dispatchEvent()</code> and listened to with{" "}
            <code>addEventListener</code>.
          </li>
          <li>
            Can carry data through the <code>detail</code> property.
          </li>
          <li>Useful for building decoupled, event-driven applications.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 114,
    title: "Default Behavior & Preventing It",
    path: "/frontend/js/events/prevent-default",
    explanation: (
      <>
        <p>
          In JavaScript, many events have a{" "}
          <strong>default browser action</strong>. For example, clicking a link
          navigates to a URL, or submitting a form reloads the page. You can
          stop these default actions using <code>event.preventDefault()</code>.
        </p>

        <h2>Why Prevent Default?</h2>
        <ul>
          <li>Stop a form from submitting and reloading the page.</li>
          <li>Stop a link from navigating to another page.</li>
          <li>Handle the action yourself using JavaScript.</li>
          <li>Control browser behavior for a better user experience.</li>
        </ul>

        <h2>How It Works</h2>
        <ul>
          <li>
            Check if the event is <strong>cancelable</strong> (some events
            cannot be canceled).
          </li>
          <li>
            Call <code>event.preventDefault()</code> inside your event listener.
          </li>
          <li>
            The browser stops its default action but still runs your code.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// Prevent form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submission stopped!');
});`}
        </pre>

        <pre>
          {`// Prevent link navigation
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Link navigation stopped!');
});`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>
            Only works on <strong>cancelable events</strong>.
          </li>
          <li>
            Does not stop event propagation (use <code>stopPropagation()</code>{" "}
            for that).
          </li>
          <li>
            Useful for single-page apps, custom form handling, or custom UI
            interactions.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Calling <code>preventDefault()</code> on non-cancelable events
            (won't work).
          </li>
          <li>
            Forgetting to pass the <code>event</code> object to the listener.
          </li>
          <li>Using it when you actually want the default browser behavior.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>event.preventDefault()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It stops the
            browser from doing its default action for that event.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can you
            prevent all events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, only
            events that are <strong>cancelable</strong>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does{" "}
            <code>preventDefault()</code> stop event propagation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it only
            prevents the default action. Use <code>stopPropagation()</code> to
            stop bubbling/capturing.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>event.preventDefault()</code> stops the default browser
            action.
          </li>
          <li>Works on cancelable events like forms and links.</li>
          <li>Does not stop event propagation.</li>
          <li>Useful for handling actions manually using JavaScript.</li>
          <li>Helps create better control over user interactions.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 115,
    title: "Stopping Propagation",
    path: "/frontend/js/events/stop-propagation",
    explanation: (
      <>
        <p>
          <strong>Stopping Propagation</strong> in JavaScript means preventing
          an event from moving further through the DOM. By default, events move
          in phases: <strong>capturing</strong> (top-down),{" "}
          <strong>target</strong>, and <strong>bubbling</strong> (bottom-up).
        </p>

        <h2>What Is Event Propagation?</h2>
        <ul>
          <li>
            Events first go through the <strong>capture phase</strong> (top →
            target)
          </li>
          <li>
            Then reach the <strong>target element</strong>
          </li>
          <li>
            Finally, they move through the <strong>bubbling phase</strong>{" "}
            (target → top)
          </li>
        </ul>

        <h2>How to Stop Propagation</h2>
        <ul>
          <li>
            <code>event.stopPropagation()</code> – stops the event from bubbling
            or capturing further, but other listeners on the same element still
            run
          </li>
          <li>
            <code>event.stopImmediatePropagation()</code> – stops the event
            completely, including other listeners on the same element
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// HTML
<div id="parent">
  <button id="child">Click Me</button>
</div>

// JS
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent clicked');
});

child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Child clicked');
});`}
        </pre>

        <p>
          In this example, clicking the button logs <code>Child clicked</code>{" "}
          only. The parent click handler does not run because{" "}
          <code>stopPropagation()</code> prevents the event from reaching it.
        </p>

        <h2>When to Use Stopping Propagation</h2>
        <ul>
          <li>Prevent parent elements from reacting to child events</li>
          <li>Control complex event flows in nested elements</li>
          <li>Prevent multiple handlers from executing unintentionally</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Overusing <code>stopPropagation()</code>, which can break other
            expected behaviors
          </li>
          <li>
            Confusing <code>stopPropagation()</code> with{" "}
            <code>preventDefault()</code> (they are different)
          </li>
          <li>
            Not using <code>stopImmediatePropagation()</code> when multiple
            listeners exist on the same element
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>stopPropagation()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Stops the
            event from moving to parent elements in the DOM.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How is{" "}
            <code>stopImmediatePropagation()</code> different?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It stops the
            event completely, including other listeners on the same element.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use propagation stopping?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you want
            to control which elements react to events, especially in nested
            structures.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Event propagation moves events through capture → target → bubbling
            phases
          </li>
          <li>
            <code>stopPropagation()</code> stops the event from moving further
            in the DOM
          </li>
          <li>
            <code>stopImmediatePropagation()</code> stops the event completely
          </li>
          <li>
            Useful for controlling event flow and avoiding unintended handler
            calls
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 116,
    title: "addEventListener Options",
    path: "/frontend/js/events/listener-options",
    explanation: (
      <>
        <p>
          The <strong>addEventListener</strong> method in JavaScript allows you
          to listen for events on an element, like clicks or scrolls. You can
          pass an <strong>options object</strong> to control how the listener
          behaves.
        </p>

        <h2>What Are addEventListener Options?</h2>
        <ul>
          <li>
            <code>capture</code> – Determines whether the event is captured in
            the <strong>capture phase</strong> (top-down) instead of the
            bubbling phase (bottom-up).
          </li>
          <li>
            <code>once</code> – If true, the listener is automatically removed
            after it runs once.
          </li>
          <li>
            <code>passive</code> – Tells the browser that the listener{" "}
            <strong>won’t call preventDefault()</strong>, improving scroll
            performance.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// HTML
<button id="btn">Click Me</button>

// JS
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  console.log('Button clicked!');
}, { once: true });`}
        </pre>

        <p>
          In this example, the listener runs only once because{" "}
          <code>once: true</code> is used.
        </p>

        <h2>Other Examples</h2>
        <pre>
          {`// Capture example
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked during capture');
}, { capture: true });

// Passive scroll example
window.addEventListener('scroll', () => {
  console.log('Scrolling...');
}, { passive: true });`}
        </pre>

        <h2>Why These Options Matter</h2>
        <ul>
          <li>
            <code>capture</code> – Control the order in which nested elements
            handle events.
          </li>
          <li>
            <code>once</code> – Automatically remove listeners to save memory
            and prevent multiple calls.
          </li>
          <li>
            <code>passive</code> – Improves performance for touch and scroll
            events by letting the browser optimize rendering.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Not using <code>passive</code> for scroll/touch events, which can
            cause lag.
          </li>
          <li>
            Forgetting to remove listeners manually when <code>once</code> is
            not used.
          </li>
          <li>
            Confusing <code>capture</code> with <code>bubbling</code> – they are
            opposite phases.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does the{" "}
            <code>capture</code> option do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It makes the
            listener run during the capture phase (top-down) instead of bubbling
            (bottom-up).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            benefit of <code>once</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The listener
            automatically removes itself after running once, saving memory and
            avoiding repeated execution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use{" "}
            <code>passive: true</code> for scroll events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It improves
            scrolling performance because the browser knows{" "}
            <code>preventDefault()</code> won’t be called.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <strong>capture</strong> – controls event phase (capture vs bubble)
          </li>
          <li>
            <strong>once</strong> – listener runs once and removes itself
          </li>
          <li>
            <strong>passive</strong> – improves performance for scroll/touch
            events
          </li>
          <li>
            Using options makes event listeners more efficient and predictable
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 117,
    title: "How Browser Queues Events",
    path: "/frontend/js/events/event-loop-integration",
    explanation: (
      <>
        <p>
          When you interact with a web page, like clicking a button or
          scrolling, the browser needs a way to handle these events in an
          orderly way. This is done using <strong>queues</strong> and the{" "}
          <strong>event loop</strong>.
        </p>

        <h2>What Are Browser Event Queues?</h2>
        <ul>
          <li>
            <strong>Macrotask Queue:</strong> Stores tasks like{" "}
            <code>setTimeout</code>, <code>setInterval</code>, DOM events, and
            network requests.
          </li>
          <li>
            <strong>Microtask Queue:</strong> Stores tasks like{" "}
            <code>Promise</code> callbacks and <code>MutationObserver</code>{" "}
            callbacks, which run before the next macrotask.
          </li>
        </ul>

        <h2>How Events Are Handled</h2>
        <ul>
          <li>
            Events are added to the <strong>macrotask queue</strong> when they
            happen.
          </li>
          <li>
            The browser executes tasks from the queue one by one, after
            finishing the current code on the <strong>call stack</strong>.
          </li>
          <li>
            <strong>Microtasks</strong> always run before the next macrotask,
            ensuring promises and observers update first.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise');
});

console.log('End');`}
        </pre>

        <p>Output:</p>
        <pre>
          {`Start
End
Microtask: Promise
Macrotask: setTimeout`}
        </pre>

        <h2>Why This Happens</h2>
        <ul>
          <li>
            JavaScript runs in a <strong>single-threaded</strong> environment,
            so tasks are queued to avoid blocking.
          </li>
          <li>
            The <strong>event loop</strong> ensures asynchronous tasks run in
            order.
          </li>
          <li>
            Microtasks have higher priority than macrotasks, which is why
            promises run before <code>setTimeout</code>.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Expecting setTimeout with 0ms to run immediately (it waits in the
            macrotask queue).
          </li>
          <li>Not understanding why promises run before DOM events.</li>
          <li>
            Mixing heavy computations in the call stack, blocking queued events.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between macrotasks and microtasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Macrotasks
            include events, setTimeout, and setInterval. Microtasks include
            promises and MutationObservers, which run before the next macrotask.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do
            promises run before setTimeout even with 0ms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            promise callbacks go into the microtask queue, which has higher
            priority than the macrotask queue.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does the
            event loop help in handling events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It monitors
            the call stack and queues, making sure async events are executed in
            order without blocking the main thread.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Browser queues events in macrotask and microtask queues.</li>
          <li>Microtasks always run before the next macrotask.</li>
          <li>
            The event loop manages task execution to ensure predictable async
            behavior.
          </li>
          <li>Helps avoid blocking and keeps the page responsive.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 118,
    title: "Synthetic Events vs Native Events",
    path: "/frontend/js/events/synthetic-native",
    explanation: (
      <>
        <p>
          In React, events are handled differently than normal browser events.
          React uses <strong>Synthetic Events</strong> to make event handling
          consistent across all browsers, while browsers have their own{" "}
          <strong>Native Events</strong>.
        </p>

        <h2>What Are Synthetic Events?</h2>
        <ul>
          <li>
            React wraps native browser events into{" "}
            <strong>SyntheticEvent</strong> objects.
          </li>
          <li>
            They provide a consistent API for all browsers (cross-browser
            compatibility).
          </li>
          <li>
            They behave just like native events but normalize differences
            between browsers.
          </li>
          <li>
            React can optimize them for performance, like event pooling (reusing
            event objects).
          </li>
        </ul>

        <h2>What Are Native Events?</h2>
        <ul>
          <li>
            These are the standard browser events, like <code>click</code>,{" "}
            <code>keydown</code>, or <code>scroll</code>.
          </li>
          <li>They behave differently in different browsers sometimes.</li>
          <li>
            React uses synthetic events on top of native events to avoid
            inconsistencies.
          </li>
        </ul>

        <h2>Key Differences</h2>
        <table>
          <thead>
            <tr>
              <th>Synthetic Event</th>
              <th>Native Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross-browser consistent</td>
              <td>May differ across browsers</td>
            </tr>
            <tr>
              <td>Optimized by React (event pooling)</td>
              <td>Standard browser behavior</td>
            </tr>
            <tr>
              <td>Wrapped around native events</td>
              <td>Direct browser events</td>
            </tr>
            <tr>
              <td>Works with React's virtual DOM</td>
              <td>Works with real DOM only</td>
            </tr>
          </tbody>
        </table>

        <h2>Example</h2>
        <pre>
          {`// Synthetic event in React
<button onClick={(e) => {
  console.log(e.type); // 'click'
}}>Click Me</button>`}
        </pre>

        <p>
          This works the same in all browsers, even if the underlying native
          event differs.
        </p>

        <h2>Why React Uses Synthetic Events</h2>
        <ul>
          <li>Ensure consistent event behavior across browsers.</li>
          <li>Improve performance by reusing event objects (event pooling).</li>
          <li>Integrate events with React's virtual DOM efficiently.</li>
          <li>Provide a simpler and unified API for developers.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Trying to access event properties asynchronously without calling{" "}
            <code>e.persist()</code> (event pooling clears the event).
          </li>
          <li>
            Assuming native event APIs always behave the same inside React.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            synthetic event in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A
            cross-browser wrapper around native events with a consistent API.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does React
            use synthetic events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To ensure
            consistent behavior across browsers and improve performance.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            pooling in synthetic events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React reuses
            event objects to reduce memory usage.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Synthetic events wrap native events in React.</li>
          <li>They provide cross-browser consistency.</li>
          <li>Optimized for performance (event pooling).</li>
          <li>Work seamlessly with React's virtual DOM.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 119,
    title: "Pointer Events & Touch Events",
    path: "/frontend/js/events/pointer-touch",
    explanation: (
      <>
        <p>
          <strong>Pointer Events</strong> and <strong>Touch Events</strong> are
          ways for the browser to handle user interactions from different input
          devices like a mouse, finger, or stylus.
        </p>

        <h2>What Are Pointer Events?</h2>
        <ul>
          <li>Unified way to handle mouse, touch, and pen input.</li>
          <li>
            Includes events like <code>pointerdown</code>,{" "}
            <code>pointermove</code>, and <code>pointerup</code>.
          </li>
          <li>
            Supports extra info like pressure and tilt for stylus or pen
            devices.
          </li>
          <li>
            Works across devices, making it easier than using separate mouse &
            touch events.
          </li>
        </ul>

        <h2>What Are Touch Events?</h2>
        <ul>
          <li>Events specifically for touch devices like phones or tablets.</li>
          <li>
            Includes <code>touchstart</code>, <code>touchmove</code>,{" "}
            <code>touchend</code>, and <code>touchcancel</code>.
          </li>
          <li>Supports multi-touch gestures (like pinch or swipe).</li>
          <li>Used for handling finger interactions on touch screens.</li>
        </ul>

        <h2>Key Differences</h2>
        <table>
          <thead>
            <tr>
              <th>Pointer Events</th>
              <th>Touch Events</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Works with mouse, pen, and touch</td>
              <td>Only works with touch input</td>
            </tr>
            <tr>
              <td>Unified API, simpler to handle</td>
              <td>Separate events for multi-touch gestures</td>
            </tr>
            <tr>
              <td>Supports pressure and tilt</td>
              <td>Supports multiple fingers</td>
            </tr>
          </tbody>
        </table>

        <h2>Basic Example</h2>
        <pre>
          {`// Using Pointer Events
element.addEventListener('pointerdown', (e) => {
  console.log('Pointer pressed at', e.clientX, e.clientY);
});

// Using Touch Events
element.addEventListener('touchstart', (e) => {
  console.log('Number of touches:', e.touches.length);
});`}
        </pre>

        <h2>Why Use Pointer Events?</h2>
        <ul>
          <li>Simpler code for devices with multiple input types.</li>
          <li>Supports pressure and tilt for pen or stylus.</li>
          <li>Cross-device compatibility without writing separate handlers.</li>
        </ul>

        <h2>Why Use Touch Events?</h2>
        <ul>
          <li>
            Needed if you want detailed control over multi-touch gestures.
          </li>
          <li>
            Useful for mobile-specific interactions like swipe, pinch, or zoom.
          </li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Mixing pointer and touch events without proper checks (can cause
            duplicate handling).
          </li>
          <li>Not handling multi-touch correctly for pinch/zoom gestures.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            pointer events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Unified events
            to handle mouse, touch, and pen input.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are touch
            events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Events for
            finger interactions on touch devices.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why choose
            pointer events over touch events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They provide a
            single API for all input types and work across devices.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Pointer events unify mouse, touch, and pen input.</li>
          <li>Touch events are specific for finger interactions.</li>
          <li>Pointer events simplify cross-device handling.</li>
          <li>Touch events allow multi-touch gestures on mobile devices.</li>
          <li>Both help create interactive, responsive web apps.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 120,
    title: "Passive & Non-Blocking Events",
    path: "/frontend/js/events/passive-events",
    explanation: (
      <>
        <p>
          <strong>Passive & Non-Blocking Events</strong> are ways to improve
          performance for events like scrolling or touch gestures by letting the
          browser know that the event handler will not block the default action.
        </p>

        <h2>What Are Passive Event Listeners?</h2>
        <ul>
          <li>
            Normal event listeners can block the browser if they call{" "}
            <code>event.preventDefault()</code>.
          </li>
          <li>
            Using <code>{`{ passive: true }`}</code> tells the browser that the
            handler won’t call <code>preventDefault()</code>.
          </li>
          <li>
            This allows the browser to scroll smoothly without waiting for
            JavaScript.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// Passive event listener
window.addEventListener('scroll', (e) => {
  console.log('Scrolling...');
}, { passive: true });`}
        </pre>

        <h2>Benefits of Passive Listeners</h2>
        <ul>
          <li>Improves scroll performance.</li>
          <li>Reduces delays in gesture handling.</li>
          <li>Makes the page feel smoother on mobile devices.</li>
        </ul>

        <h2>Non-Blocking Event Processing</h2>
        <ul>
          <li>
            Events are processed without stopping the browser from performing
            default actions.
          </li>
          <li>
            Prevents layout or scrolling delays caused by heavy JavaScript.
          </li>
          <li>Works well with touch, wheel, and scroll events.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Marking an event as passive but trying to call{" "}
            <code>preventDefault()</code> (this will not work).
          </li>
          <li>
            Not using passive listeners for scroll-heavy or gesture-heavy pages,
            which can cause janky scrolling.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            passive event listener?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An event
            listener that won’t call <code>preventDefault()</code>, letting the
            browser handle events like scroll immediately.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            passive listeners?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To improve
            performance and make scrolling or gestures smooth.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if you call preventDefault() on a passive listener?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It will be
            ignored and a warning may appear in the console.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Passive listeners let the browser handle events without blocking
            default actions.
          </li>
          <li>They improve scroll and gesture performance.</li>
          <li>Non-blocking events reduce delays in layout and painting.</li>
          <li>
            Always use passive listeners for scroll, touch, or wheel events to
            make pages smoother.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 121,
    title: "Async Event Handling",
    path: "/frontend/js/events/async-events",
    explanation: (
      <>
        <p>
          <strong>Async Event Handling</strong> is when events (like clicks or
          input) are handled without blocking the browser, so the page stays
          responsive and updates smoothly.
        </p>

        <h2>How Async Events Work</h2>
        <ul>
          <li>
            Event handlers can run <strong>asynchronously</strong> using{" "}
            <code>Promise</code> or <code>async/await</code>.
          </li>
          <li>
            Browser uses <strong>microtasks</strong> and{" "}
            <strong>macrotasks</strong> queues to schedule these async
            operations.
          </li>
          <li>
            This lets the <strong>call stack</strong> clear first, so UI
            rendering and interactions aren’t blocked.
          </li>
        </ul>

        <h2>Microtasks vs Macrotasks</h2>
        <ul>
          <li>
            <strong>Microtasks:</strong> Promise callbacks, MutationObserver.
            Run <strong>after current code</strong> but{" "}
            <strong>before UI updates</strong>.
          </li>
          <li>
            <strong>Macrotasks:</strong> setTimeout, setInterval, I/O events.
            Run <strong>after microtasks and rendering</strong>.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`button.addEventListener('click', async () => {
  console.log('Start');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('After 1 second');
});
console.log('Handler attached');`}
        </pre>

        <p>
          Here, the click handler waits asynchronously for 1 second without
          freezing the page. The page stays interactive while waiting.
        </p>

        <h2>Why Async Event Handling Exists</h2>
        <ul>
          <li>
            Prevents blocking the UI during heavy calculations or API calls.
          </li>
          <li>Keeps animations and scrolling smooth.</li>
          <li>Makes web apps feel faster and more responsive.</li>
          <li>Helps integrate with the event loop and rendering pipeline.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Using synchronous blocking code inside event handlers.</li>
          <li>
            Not understanding microtask/macrotask order and causing unexpected
            UI updates.
          </li>
          <li>Forgetting to handle Promise rejections in async handlers.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is async
            event handling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Handling
            events in a way that doesn’t block the browser, often using Promises
            or async/await.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between microtasks and macrotasks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Microtasks run
            sooner (after current code, before UI updates), macrotasks run later
            (after microtasks and rendering).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is async
            handling useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It keeps the
            UI responsive and allows smooth rendering and interactions.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Async event handling avoids blocking the UI.</li>
          <li>Uses microtask and macrotask queues for scheduling.</li>
          <li>Keeps interactions, animations, and scrolling smooth.</li>
          <li>Integrates with the browser’s event loop and rendering.</li>
          <li>Essential for responsive, modern web applications.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 122,
    title: "try/catch Internals",
    path: "/frontend/js/errors/try-catch",
    explanation: (
      <>
        <p>
          <strong>try/catch</strong> in JavaScript is a way to{" "}
          <strong>handle errors safely</strong> without breaking your program.
          You put code that might fail inside a <code>try</code> block, and
          errors are caught in the <code>catch</code> block.
        </p>

        <h2>What Is try/catch?</h2>
        <ul>
          <li>
            <code>try</code>: Code that might throw an error goes here.
          </li>
          <li>
            <code>catch</code>: Runs if an error occurs in the try block.
          </li>
          <li>
            <code>finally</code> (optional): Runs after try/catch, no matter
            what.
          </li>
          <li>Helps prevent the program from crashing due to errors.</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`try {
  let result = riskyOperation(); // code that might fail
  console.log(result);
} catch (error) {
  console.log('Something went wrong:', error.message);
} finally {
  console.log('This runs always');
}`}
        </pre>

        <p>
          In this example, if <code>riskyOperation()</code> throws an error, the{" "}
          <code>catch</code> block handles it, and the program continues
          running.
        </p>

        <h2>How try/catch Works Internally</h2>
        <ul>
          <li>
            JavaScript engine executes code inside <code>try</code>.
          </li>
          <li>If an error occurs, normal execution stops immediately.</li>
          <li>
            The engine jumps to the <code>catch</code> block with the error
            object.
          </li>
          <li>
            After <code>catch</code>, the <code>finally</code> block runs if
            present.
          </li>
          <li>
            Errors are <strong>propagated</strong> only if not caught.
          </li>
        </ul>

        <h2>Why try/catch Exists</h2>
        <ul>
          <li>Prevent the app from crashing on errors.</li>
          <li>Handle exceptions in a controlled way.</li>
          <li>Debug and log errors safely.</li>
          <li>Maintain predictable program flow.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Putting too much code in <code>try</code> block.
          </li>
          <li>
            Ignoring the <code>error</code> object in <code>catch</code>.
          </li>
          <li>
            Using try/catch for normal control flow instead of error handling.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            try/catch?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A way to
            handle errors safely and prevent crashes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does the
            finally block do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Runs code
            after try/catch no matter if an error occurred or not.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if an error is not caught?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It propagates
            up and may crash the program.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>try</code>: run code that might fail.
          </li>
          <li>
            <code>catch</code>: handle errors safely.
          </li>
          <li>
            <code>finally</code>: always runs for cleanup.
          </li>
          <li>
            Prevents program crashes and allows controlled error handling.
          </li>
          <li>Helps in debugging and maintaining predictable code flow.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 123,
    title: "Error Propagation Mechanism",
    path: "/frontend/js/errors/propagation",
    explanation: (
      <>
        <p>
          <strong>Error propagation</strong> in JavaScript is how errors move
          through your program when they are not immediately handled. If an
          error happens inside a function and isn’t caught, it moves up the{" "}
          <strong>call stack</strong> until it is caught by a{" "}
          <code>try/catch</code> or a global error handler.
        </p>

        <h2>What Is Error Propagation?</h2>
        <ul>
          <li>
            Errors “bubble up” through functions that called the failing code.
          </li>
          <li>
            If no <code>try/catch</code> is found, the error continues to
            propagate.
          </li>
          <li>
            Eventually, unhandled errors reach the global environment (like the
            browser console or Node.js process).
          </li>
          <li>
            Helps identify where errors occur and control program behavior.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`function funcA() {
  funcB();
}

function funcB() {
  throw new Error("Oops!");
}

try {
  funcA();
} catch (err) {
  console.log("Caught an error:", err.message);
}`}
        </pre>

        <p>
          Here, <code>funcB</code> throws an error. The error moves up to{" "}
          <code>funcA</code>, and finally the <code>try/catch</code> around{" "}
          <code>funcA()</code> catches it.
        </p>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            The JavaScript engine runs functions on the{" "}
            <strong>call stack</strong>.
          </li>
          <li>
            If an error occurs and isn’t caught, the engine unwinds the stack,
            moving up to the caller function.
          </li>
          <li>
            This continues until a <code>try/catch</code> handles it or the
            stack is empty.
          </li>
          <li>
            Unhandled errors reach global error handlers (e.g.,{" "}
            <code>window.onerror</code> in browsers).
          </li>
        </ul>

        <h2>Why Error Propagation Exists</h2>
        <ul>
          <li>Provides a structured way to handle errors at higher levels.</li>
          <li>Prevents program from silently failing.</li>
          <li>Makes debugging easier by showing the error origin.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Not using <code>try/catch</code> where needed.
          </li>
          <li>Ignoring propagated errors, which may crash the app.</li>
          <li>
            Assuming errors stop immediately; they propagate up the call stack.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if an error is not caught?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It propagates
            up the call stack and may reach the global error handler.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            JavaScript propagate errors?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By unwinding
            the call stack until a <code>try/catch</code> catches it or it
            reaches the global handler.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can a
            propagated error be caught at a higher level?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, using{" "}
            <code>try/catch</code> around the calling functions.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Errors move up the call stack if not caught immediately.</li>
          <li>
            <code>try/catch</code> can catch errors at any level of the stack.
          </li>
          <li>Unhandled errors reach global handlers and may crash the app.</li>
          <li>
            Understanding propagation helps in debugging and writing safer code.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 124,
    title: "Types of Errors in JS",
    path: "/frontend/js/errors/types",
    explanation: (
      <>
        <p>
          In JavaScript, errors happen when something goes wrong while running
          code. There are different <strong>types of errors</strong> to help
          identify the problem.
        </p>

        <h2>Common Error Types</h2>
        <ul>
          <li>
            <strong>SyntaxError:</strong> Happens when code is written
            incorrectly, like missing a bracket or parenthesis.
            <br />
            <code>Example:</code> {`let x = ; // SyntaxError`}
          </li>
          <li>
            <strong>ReferenceError:</strong> Happens when code uses a variable
            that doesn’t exist.
            <br />
            <code>Example:</code>{" "}
            {`console.log(y); // ReferenceError if y is not defined`}
          </li>
          <li>
            <strong>TypeError:</strong> Happens when a value is not of the
            expected type.
            <br />
            <code>Example:</code>{" "}
            {`null.f(); // TypeError because null has no methods`}
          </li>
          <li>
            <strong>RangeError:</strong> Happens when a number is out of allowed
            range.
            <br />
            <code>Example:</code> {`let arr = new Array(-1); // RangeError`}
          </li>
          <li>
            <strong>URIError:</strong> Happens when functions like{" "}
            <code>decodeURI()</code> get a bad URI.
            <br />
            <code>Example:</code> {`decodeURI('%'); // URIError`}
          </li>
          <li>
            <strong>EvalError:</strong> Related to the <code>eval()</code>{" "}
            function (rarely used today).
            <br />
            <code>Example:</code>{" "}
            {`eval('2+2'); // Normally safe, EvalError occurs in strict or invalid use`}
          </li>
        </ul>

        <h2>Other Notes</h2>
        <ul>
          <li>
            Some errors are specific to certain JavaScript engines (like
            Chrome’s V8).
          </li>
          <li>
            Understanding the type of error helps in <strong>debugging</strong>{" "}
            faster.
          </li>
          <li>
            Errors can be caught and handled using <code>try/catch</code>.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`try {
  let x = y; // ReferenceError
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // y is not defined
}`}
        </pre>

        <h2>Summary</h2>
        <ul>
          <li>Errors indicate something went wrong in code execution.</li>
          <li>
            JavaScript has different types: Syntax, Reference, Type, Range, URI,
            Eval.
          </li>
          <li>
            Knowing the type helps debug faster and handle errors properly.
          </li>
          <li>
            Use <code>try/catch</code> to safely manage errors.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 125,
    title: "Custom Error Classes",
    path: "/frontend/js/errors/custom-errors",
    explanation: (
      <>
        <p>
          In JavaScript, you can create your <strong>own errors</strong> by
          making a class that extends the built-in <code>Error</code> class.
          This is useful when you want errors specific to your app or domain.
        </p>

        <h2>Why Use Custom Errors?</h2>
        <ul>
          <li>
            Make errors easier to identify by giving them a{" "}
            <strong>name</strong>.
          </li>
          <li>
            Keep the <strong>message</strong> and <strong>stack trace</strong>{" "}
            intact.
          </li>
          <li>
            Organize <strong>error handling</strong> better in your code.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`class ValidationError extends Error {
  constructor(message) {
    super(message); // Pass message to the built-in Error
    this.name = "ValidationError"; // Set custom error name
  }
}

// Usage
try {
  throw new ValidationError("Invalid input!");
} catch (err) {
  console.log(err.name); // ValidationError
  console.log(err.message); // Invalid input!
  console.log(err.stack); // Stack trace
}`}
        </pre>

        <h2>How It Works</h2>
        <ul>
          <li>
            <code>extends Error</code> lets your class behave like a normal
            error.
          </li>
          <li>
            <code>super(message)</code> calls the parent Error class to preserve
            message and stack trace.
          </li>
          <li>
            <code>this.name</code> gives your error a meaningful name.
          </li>
          <li>
            You can create multiple custom error classes for different
            scenarios.
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always set <code>this.name</code> to identify the error type.
          </li>
          <li>Use custom errors for domain-specific or app-specific issues.</li>
          <li>
            Combine with <code>try/catch</code> for structured error handling.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Custom errors extend <code>Error</code> for meaningful, app-specific
            errors.
          </li>
          <li>
            Preserve message and stack trace using <code>super()</code>.
          </li>
          <li>Helps organize and debug errors more clearly.</li>
          <li>
            Useful in complex apps or libraries where different error types
            exist.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 126,
    title: "Async Error Handling (Promises)",
    path: "/frontend/js/errors/async-promises",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>asynchronous code</strong> like{" "}
          <strong>Promises</strong> can fail. Handling errors in async code is
          important to avoid crashes or unexpected behavior.
        </p>

        <h2>Why Async Error Handling?</h2>
        <ul>
          <li>
            Promises may <strong>reject</strong> if something goes wrong.
          </li>
          <li>
            Using <code>async/await</code>, errors behave like thrown
            exceptions.
          </li>
          <li>
            Without proper handling, errors can be <strong>unhandled</strong>{" "}
            and trigger warnings or fail silently.
          </li>
        </ul>

        <h2>Handling Errors with .catch()</h2>
        <pre>
          {`const promise = fetch("/api/data");

promise
  .then(response => response.json())
  .catch(error => {
    console.log("Error:", error);
  });`}
        </pre>

        <p>
          Here, <code>.catch()</code> captures any rejection from the Promise
          and prevents unhandled errors.
        </p>

        <h2>Handling Errors with async/await</h2>
        <pre>
          {`async function getData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Async Error:", error);
  }
}

getData();`}
        </pre>

        <p>
          Using <code>try/catch</code> with <code>async/await</code> allows
          catching rejected Promises as if they were normal exceptions.
        </p>

        <h2>Unhandled Promise Rejections</h2>
        <ul>
          <li>
            If a Promise rejects and there is no <code>.catch()</code>, the
            error is unhandled.
          </li>
          <li>
            Browsers may warn in console: <code>Uncaught (in promise)</code>.
          </li>
          <li>
            Node.js can trigger <code>unhandledRejection</code> events.
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always add <code>.catch()</code> or <code>try/catch</code> for async
            code.
          </li>
          <li>
            For multiple Promises, handle errors individually or use{" "}
            <code>Promise.allSettled()</code>.
          </li>
          <li>Consider global error handlers for logging or reporting.</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Async code can fail and needs proper error handling.</li>
          <li>
            Use <code>.catch()</code> for Promises or <code>try/catch</code>{" "}
            with <code>async/await</code>.
          </li>
          <li>Unhandled rejections can cause warnings or break your app.</li>
          <li>Good async error handling improves reliability and debugging.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 127,
    title: "Promise Rejection Propagation",
    path: "/frontend/js/errors/rejection-propagation",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>Promises</strong> can be chained using{" "}
          <code>.then()</code>. If one Promise in the chain fails (rejects), the
          error <strong>propagates</strong> down the chain until it is caught.
        </p>

        <h2>Why Rejection Propagation Matters</h2>
        <ul>
          <li>Helps you catch errors from any step in a Promise chain.</li>
          <li>
            Makes async error handling similar to synchronous{" "}
            <code>try/catch</code> behavior.
          </li>
          <li>Prevents unhandled rejections and unexpected bugs.</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`Promise.resolve(10)
  .then(value => {
    console.log("Step 1:", value);
    return value * 2;
  })
  .then(value => {
    throw new Error("Something went wrong!");
  })
  .then(value => {
    console.log("Step 3:", value); // skipped
  })
  .catch(error => {
    console.log("Caught Error:", error.message);
  });`}
        </pre>

        <p>Output:</p>
        <pre>
          {`Step 1: 10
Caught Error: Something went wrong!`}
        </pre>

        <p>
          Notice that after the error is thrown, the remaining{" "}
          <code>.then()</code> blocks are skipped, and the <code>.catch()</code>{" "}
          handles the rejection.
        </p>

        <h2>How It Works Internally</h2>
        <ul>
          <li>
            Each <code>.then()</code> returns a new Promise.
          </li>
          <li>
            If a Promise rejects, it searches for the next <code>.catch()</code>{" "}
            in the chain.
          </li>
          <li>
            This mimics synchronous error propagation through the call stack.
          </li>
          <li>
            Rejections are queued as <strong>microtasks</strong> for predictable
            async handling.
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always add a <code>.catch()</code> at the end of a Promise chain.
          </li>
          <li>
            For multiple Promises, consider <code>Promise.allSettled()</code> if
            partial failures are acceptable.
          </li>
          <li>Use descriptive error messages to debug async issues easily.</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Errors in Promises propagate down the chain until caught.</li>
          <li>
            Remaining <code>.then()</code> blocks after a rejection are skipped.
          </li>
          <li>
            Propagation works like synchronous <code>try/catch</code>.
          </li>
          <li>Helps manage async errors cleanly and predictably.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 128,
    title: "Unhandled Promise Rejections",
    path: "/frontend/js/errors/unhandled-rejection",
    explanation: (
      <>
        <p>
          An <strong>unhandled Promise rejection</strong> happens when a Promise
          fails (rejects) but no <code>.catch()</code> or <code>try/catch</code>{" "}
          handles it.
        </p>

        <p>
          In browsers, this triggers the{" "}
          <code>window.onunhandledrejection</code> event. In Node.js, it can
          crash the process if not handled properly.
        </p>

        <h2>Why It Happens</h2>
        <ul>
          <li>
            No <code>.catch()</code> is attached to a Promise that rejects.
          </li>
          <li>
            Errors in async/await without <code>try/catch</code> blocks.
          </li>
          <li>Multiple Promise chains where one rejection is ignored.</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`// Unhandled rejection
Promise.reject("Something went wrong!");

// Handled using .catch()
Promise.reject("Handled error!").catch(err => console.log(err));`}
        </pre>

        <p>Output:</p>
        <pre>
          {`// First promise rejection triggers unhandledrejection event
// Second promise logs: Handled error!`}
        </pre>

        <h2>How Browsers & Node.js Handle It</h2>
        <ul>
          <li>
            <strong>Browser:</strong> Fires{" "}
            <code>window.onunhandledrejection</code> event.
          </li>
          <li>
            <strong>Node.js:</strong> Fires{" "}
            <code>process.on('unhandledRejection')</code> event. If unhandled,
            it may crash the process.
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always attach a <code>.catch()</code> to Promises.
          </li>
          <li>
            Use <code>try/catch</code> with <code>async/await</code>.
          </li>
          <li>
            Monitor <code>window.onunhandledrejection</code> or Node.js process
            events in production.
          </li>
          <li>Log errors for debugging and tracking issues.</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Unhandled rejections occur when a Promise fails without handling.
          </li>
          <li>
            Browsers fire <code>window.onunhandledrejection</code>.
          </li>
          <li>Node.js can crash if not handled.</li>
          <li>Always handle Promise rejections to avoid errors and crashes.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 129,
    title: "Global Error Handling (window.onerror)",
    path: "/frontend/js/errors/global",
    explanation: (
      <>
        <p>
          <strong>Global Error Handling</strong> in JavaScript lets you catch
          errors that are not handled anywhere else. In browsers, you can use{" "}
          <code>window.onerror</code> to catch{" "}
          <strong>uncaught synchronous errors</strong> in your code.
        </p>

        <p>
          This helps you{" "}
          <strong>log errors, monitor issues, and debug problems</strong> in
          production or during development.
        </p>

        <h2>What Is window.onerror?</h2>
        <ul>
          <li>A global error handler for the browser.</li>
          <li>
            Catches errors that are not caught by <code>try/catch</code>.
          </li>
          <li>Works for errors on the main thread (synchronous errors).</li>
          <li>Useful for logging and monitoring.</li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`window.onerror = function(message, source, lineno, colno, error) {
  console.log("Error message:", message);
  console.log("Source file:", source);
  console.log("Line:", lineno, "Column:", colno);
  console.log("Error object:", error);
  return true; // prevent default browser error handling
};

// Example error
nonExistentFunction();`}
        </pre>

        <h2>Parameters Explained</h2>
        <ul>
          <li>
            <strong>message:</strong> Error message string.
          </li>
          <li>
            <strong>source:</strong> URL of the script where the error happened.
          </li>
          <li>
            <strong>lineno:</strong> Line number of the error.
          </li>
          <li>
            <strong>colno:</strong> Column number of the error.
          </li>
          <li>
            <strong>error:</strong> Error object (if available).
          </li>
        </ul>

        <h2>Why Use Global Error Handling</h2>
        <ul>
          <li>Catch unexpected errors that were not handled.</li>
          <li>Send error logs to monitoring systems.</li>
          <li>Provide better debugging information.</li>
          <li>Improve reliability of your app.</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Use it alongside <code>try/catch</code> for critical code.
          </li>
          <li>Log errors to a server for monitoring in production.</li>
          <li>
            Do not rely solely on it; handle errors locally whenever possible.
          </li>
          <li>
            Return <code>true</code> to prevent default browser error messages
            if needed.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            <code>window.onerror</code> catches uncaught synchronous errors.
          </li>
          <li>
            Provides information about the error message, source, line, column,
            and error object.
          </li>
          <li>Helps with logging, monitoring, and debugging.</li>
          <li>
            Best used in combination with local error handling for robust
            applications.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 130,
    title: "Error Object Internals",
    path: "/frontend/js/errors/error-object",
    explanation: (
      <>
        <p>
          In JavaScript, when an error occurs, an <strong>Error object</strong>{" "}
          is created. This object contains useful information to help you{" "}
          <strong>understand and debug</strong> the problem.
        </p>

        <h2>What Is an Error Object?</h2>
        <ul>
          <li>Represents a problem that happened during code execution.</li>
          <li>Contains information like the message, name, and stack trace.</li>
          <li>Helps developers track where and why an error happened.</li>
        </ul>

        <h2>Key Properties</h2>
        <ul>
          <li>
            <strong>message:</strong> A description of what went wrong.
          </li>
          <li>
            <strong>name:</strong> The type of error (e.g.,{" "}
            <code>TypeError</code>, <code>ReferenceError</code>).
          </li>
          <li>
            <strong>stack:</strong> Shows the call stack at the point the error
            was thrown (useful for debugging).
          </li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`try {
  null.foo(); // This will throw a TypeError
} catch (err) {
  console.log(err.name);    // TypeError
  console.log(err.message); // Cannot read property 'foo' of null
  console.log(err.stack);   // Stack trace showing where the error happened
}`}
        </pre>

        <h2>Engine Differences</h2>
        <ul>
          <li>
            Different JavaScript engines (like V8 in Chrome/Node.js or
            SpiderMonkey in Firefox) may format the <code>stack</code> property
            differently.
          </li>
          <li>
            The <code>message</code> and <code>name</code> are generally
            consistent across engines.
          </li>
        </ul>

        <h2>Why Error Objects Are Useful</h2>
        <ul>
          <li>Help track exactly where and why an error occurred.</li>
          <li>Provide metadata for logging and monitoring systems.</li>
          <li>Useful in debugging and improving code reliability.</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always log the <code>stack</code> when debugging errors.
          </li>
          <li>
            Create custom errors by extending the <code>Error</code> class for
            specific application needs.
          </li>
          <li>
            Use <code>name</code> and <code>message</code> to provide clear,
            understandable error information.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Error objects store information about problems in code.</li>
          <li>
            Main properties: <code>name</code>, <code>message</code>,{" "}
            <code>stack</code>.
          </li>
          <li>
            Different engines may format <code>stack</code> differently, but{" "}
            <code>message</code> and <code>name</code> remain consistent.
          </li>
          <li>
            Essential for debugging, logging, and creating reliable
            applications.
          </li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 131,
    title: "Stack Trace & Call Stack Integration",
    path: "/frontend/js/errors/stack-trace",
    explanation: (
      <>
        <p>
          In JavaScript, when an error happens, the <strong>stack trace</strong>{" "}
          shows the path the program took to reach that error. It is closely
          linked to the <strong>call stack</strong>, which keeps track of
          function calls.
        </p>

        <h2>What Is a Call Stack?</h2>
        <ul>
          <li>
            The call stack is a list of functions that have been called but not
            yet finished.
          </li>
          <li>
            Each function call creates a <strong>stack frame</strong> that
            stores local variables and the point to return after execution.
          </li>
          <li>
            When an error occurs, the stack trace shows all these stack frames
            in order.
          </li>
        </ul>

        <h2>Stack Trace Example</h2>
        <pre>
          {`function first() {
  second();
}

function second() {
  third();
}

function third() {
  throw new Error("Something went wrong");
}

first();`}
        </pre>

        <p>Output in console:</p>
        <pre>
          {`Error: Something went wrong
    at third (script.js:7)
    at second (script.js:3)
    at first (script.js:0)
    at <anonymous>`}
        </pre>

        <h2>What It Shows</h2>
        <ul>
          <li>
            Which function caused the error (<code>third</code>)
          </li>
          <li>
            How the code reached that function (
            <code>first → second → third</code>)
          </li>
          <li>The exact line numbers where each function was called</li>
        </ul>

        <h2>Async Stack Tracking</h2>
        <ul>
          <li>
            For <strong>Promises</strong> or <strong>async/await</strong>, the
            stack trace shows the point where the async function was awaited or
            called.
          </li>
          <li>
            Helps debugging asynchronous code even when functions run later.
          </li>
        </ul>

        <h2>Why Stack Traces Are Useful</h2>
        <ul>
          <li>Identify the origin of an error quickly</li>
          <li>Understand how the code execution reached that point</li>
          <li>Debug both synchronous and asynchronous code effectively</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Always check the stack trace when debugging errors</li>
          <li>Use meaningful function names for easier tracing</li>
          <li>Combine with logging to track async errors in production</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Call stack tracks all active function calls.</li>
          <li>Stack trace shows the order of calls leading to an error.</li>
          <li>Helps locate errors and understand code flow.</li>
          <li>Supports debugging for both sync and async code.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 132,
    title: "try/catch Cost & V8 Optimization",
    path: "/frontend/js/errors/engine-cost",
    explanation: (
      <>
        <p>
          In JavaScript, <strong>try/catch</strong> blocks are used to handle
          errors. But using them can affect performance slightly, depending on
          the JavaScript engine.
          <strong>V8</strong> (the engine behind Chrome and Node.js) optimizes
          code differently when try/catch is used.
        </p>

        <h2>What Happens Inside V8</h2>
        <ul>
          <li>
            Normal code runs fast because V8 can optimize it for repeated
            execution.
          </li>
          <li>
            Code inside <code>try</code> may prevent some optimizations,
            especially if the block throws errors.
          </li>
          <li>
            V8 marks functions with potential errors as "deoptimized" to handle
            exceptions safely.
          </li>
          <li>
            If no errors actually occur, the performance impact is small for
            modern engines.
          </li>
        </ul>

        <h2>Example</h2>
        <pre>
          {`function safeDivide(a, b) {
  try {
    return a / b;
  } catch (e) {
    return 0;
  }
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Infinity (no real exception here)`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>try/catch adds a little overhead for error handling</li>
          <li>
            V8 optimizes "hot" (frequently run) code paths even with try/catch
          </li>
          <li>
            Actual exceptions are more expensive than just having the try/catch
            block
          </li>
          <li>
            Use try/catch for handling real errors, not as normal flow control
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Don’t wrap every function in try/catch unnecessarily</li>
          <li>
            Use try/catch for code that might fail (network requests, parsing,
            etc.)
          </li>
          <li>Keep try blocks small to reduce potential deoptimization</li>
          <li>Combine with logging to catch and debug errors efficiently</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            try/catch is safe for handling errors but can slightly affect
            performance
          </li>
          <li>
            V8 engine optimizes normal code paths; exceptions are more costly
          </li>
          <li>Keep try/catch only where needed and small in size</li>
          <li>Helps maintain robust error handling with minimal impact</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 133,
    title: "Error Boundaries (React vs JS)",
    path: "/frontend/js/errors/react-boundaries",
    explanation: (
      <>
        <p>
          In React, <strong>Error Boundaries</strong> are special components
          that catch JavaScript errors in their child components and prevent the
          entire app from crashing.
        </p>

        <p>
          Normal JavaScript errors can be caught using <code>try/catch</code>,
          but this only works for synchronous code and doesn’t stop a React
          component tree from unmounting if an error happens during rendering.
        </p>

        <h2>What Are Error Boundaries?</h2>
        <ul>
          <li>
            React components that catch render-time errors in their children
          </li>
          <li>Provide a fallback UI instead of crashing the app</li>
          <li>
            Catch errors during rendering, lifecycle methods, and constructors
          </li>
          <li>
            Do NOT catch errors inside event handlers or asynchronous code
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}
        </pre>

        <h2>Key Points</h2>
        <ul>
          <li>
            Error boundaries catch errors in child components, not themselves
          </li>
          <li>
            Synchronous errors during rendering, lifecycle methods, and
            constructors are caught
          </li>
          <li>
            Event handler errors and asynchronous errors are NOT caught; use{" "}
            <code>try/catch</code> for those
          </li>
          <li>Fallback UI helps maintain app stability</li>
        </ul>

        <h2>React vs Normal JS Error Handling</h2>
        <table>
          <thead>
            <tr>
              <th>React Error Boundaries</th>
              <th>Normal JS try/catch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Catches render-time errors in components</td>
              <td>Catches synchronous JS errors only</td>
            </tr>
            <tr>
              <td>Provides fallback UI</td>
              <td>No UI fallback automatically</td>
            </tr>
            <tr>
              <td>Does not catch async errors or event handlers</td>
              <td>Can catch errors inside any try block</td>
            </tr>
            <tr>
              <td>Component-level error isolation</td>
              <td>Global or block-level error handling</td>
            </tr>
          </tbody>
        </table>

        <h2>Best Practices</h2>
        <ul>
          <li>Wrap high-level UI components to catch errors gracefully</li>
          <li>Use try/catch for async code inside event handlers</li>
          <li>Log errors for debugging</li>
          <li>Provide meaningful fallback UI for better user experience</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Error boundaries are React components for catching render-time
            errors
          </li>
          <li>Normal JS try/catch works for synchronous code only</li>
          <li>Use both strategies together for robust error handling</li>
          <li>Fallback UI prevents the whole app from crashing</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 134,
    title: "Async Stack Traces",
    path: "/frontend/js/errors/async-stack",
    explanation: (
      <>
        <p>
          <strong>Async Stack Traces</strong> help track errors that happen in
          asynchronous code, like Promises or <code>async/await</code>, so you
          can see where the error came from in your code.
        </p>

        <p>
          Normal stack traces only show synchronous calls. Async operations run
          later in the microtask queue, so tracking the origin of errors can be
          tricky without proper async stack tracing.
        </p>

        <h2>What Are Async Stack Traces?</h2>
        <ul>
          <li>Stack traces that include asynchronous calls</li>
          <li>
            Show the chain of <code>Promise</code> or <code>async/await</code>{" "}
            calls leading to the error
          </li>
          <li>Helps debug errors across microtasks and event loop tasks</li>
          <li>
            Gives meaningful information instead of just “anonymous function”
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`async function fetchData() {
  await getData();
  throw new Error('Oops!');
}

fetchData().catch(err => console.error(err.stack));`}
        </pre>

        <p>
          Even though <code>getData()</code> is async, modern engines like
          Chrome V8 show the full async stack, so you know which function
          triggered the error.
        </p>

        <h2>How It Works Internally</h2>
        <ul>
          <li>Each async call creates a new microtask</li>
          <li>The runtime tracks the call chain across microtasks</li>
          <li>
            When an error occurs, it merges async calls into the stack trace
          </li>
          <li>
            Helps developers see the full path of execution leading to the error
          </li>
        </ul>

        <h2>Why Async Stack Traces Are Useful</h2>
        <ul>
          <li>Debugging async code becomes easier</li>
          <li>Helps find which Promise or async function caused the error</li>
          <li>Reduces confusion when errors happen “later” in time</li>
          <li>Essential for large apps with multiple async operations</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>Ignoring the async nature of errors</li>
          <li>Not catching Promise rejections, leading to unhandled errors</li>
          <li>
            Assuming stack traces always show the full async chain in older
            browsers
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always use <code>.catch()</code> for Promises or try/catch inside
            async functions
          </li>
          <li>
            Use modern browsers or Node.js versions that support async stack
            traces
          </li>
          <li>Log stack traces to monitor async error paths</li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Async stack traces show the chain of async calls leading to errors
          </li>
          <li>Include Promises, async/await, and microtask queue calls</li>
          <li>Helps debug asynchronous code more effectively</li>
          <li>
            Provides meaningful information instead of just the immediate error
            location
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is an async stack
            trace in JavaScript?
            <br />
            <strong style={{ color: "green" }}>A:</strong> A stack trace that
            shows the chain of asynchronous calls, like Promises or async/await,
            leading to an error.
          </li>

          <li>
            <strong style={{ color: "blue" }}>Q:</strong> Why are async stack
            traces important?
            <br />
            <strong style={{ color: "green" }}>A:</strong> They help track where
            errors occur in asynchronous code, making debugging easier across
            microtasks and event loop tasks.
          </li>

          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How does JavaScript
            keep track of async stack traces?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Each async call
            creates a microtask, and the runtime merges these calls into the
            stack trace when an error occurs.
          </li>

          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What are common
            mistakes when handling async stack traces?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Ignoring unhandled
            Promise rejections, assuming older browsers show full async stack,
            and not using try/catch for async functions.
          </li>

          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How can you make async
            stack traces more reliable?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Always catch
            Promises, use modern JS engines that support async stack traces, and
            log stack traces for debugging.
          </li>
        </ul>
      </>
    ),
    priority: "Low",
  },

  {
    id: 135,
    title: "JavaScript Design Patterns",
    path: "/frontend/js-design-patterns",
    explanation: (
      <>
        <p>
          <strong>JavaScript Design Patterns</strong> are reusable solutions to
          common coding problems. They help write{" "}
          <strong>organized, maintainable, and scalable</strong> code.
        </p>

        <p>
          Design patterns are not code you copy-paste, but templates or best
          practices you follow to solve problems in a structured way.
        </p>

        <h2>Common JavaScript Design Patterns</h2>
        <ul>
          <li>
            <strong>Module Pattern:</strong> Encapsulates code in a function to
            create private and public parts.
          </li>
          <li>
            <strong>Revealing Module Pattern:</strong> Like module pattern, but
            clearly exposes only what you want public.
          </li>
          <li>
            <strong>Constructor Pattern:</strong> Used to create objects with
            the <code>new</code> keyword.
          </li>
          <li>
            <strong>Prototype Pattern:</strong> Adds methods to object
            prototypes to save memory and share behavior.
          </li>
          <li>
            <strong>Factory Pattern:</strong> Creates objects without specifying
            the exact class, based on input.
          </li>
          <li>
            <strong>Singleton Pattern:</strong> Ensures only one instance of an
            object exists across the app.
          </li>
          <li>
            <strong>Observer Pattern:</strong> Allows objects to subscribe and
            get notified when something changes (publish/subscribe).
          </li>
          <li>
            <strong>Decorator Pattern:</strong> Adds new functionality to
            objects without changing their structure.
          </li>
          <li>
            <strong>Proxy Pattern:</strong> Controls access to an object, adding
            extra behavior when needed.
          </li>
          <li>
            <strong>Strategy Pattern:</strong> Lets you select algorithms or
            behaviors at runtime.
          </li>
          <li>
            <strong>Command Pattern:</strong> Encapsulates actions or requests
            as objects, useful for undo/redo or task queues.
          </li>
        </ul>

        <h2>Why Use Design Patterns?</h2>
        <ul>
          <li>Make your code easier to understand and maintain</li>
          <li>Reduce duplicate code and improve reusability</li>
          <li>Provide solutions for common coding problems</li>
          <li>Improve scalability for larger applications</li>
        </ul>

        <h2>Basic Example – Module Pattern</h2>
        <pre>
          {`const Counter = (function() {
  let count = 0; // private
  return {
    increment: function() { count++; },
    getCount: function() { return count; }
  };
})();

Counter.increment();
console.log(Counter.getCount()); // 1`}
        </pre>

        <p>
          Here, <code>count</code> is private and can only be accessed through
          the public methods <code>increment</code> and <code>getCount</code>.
        </p>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What are JavaScript
            design patterns?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Reusable solutions or
            templates for common coding problems that help organize, maintain,
            and scale code.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> Why should we use
            design patterns in JavaScript?
            <br />
            <strong style={{ color: "green" }}>A:</strong> They make code easier
            to understand, reduce duplicate code, solve common problems, and
            improve scalability.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the Module
            Pattern?
            <br />
            <strong style={{ color: "green" }}>A:</strong> A pattern that wraps
            code in a function to create private and public parts, hiding
            internal details.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How does the Singleton
            Pattern work?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It ensures only one
            instance of an object exists in the application.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the difference
            between Module Pattern and Revealing Module Pattern?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Revealing Module
            Pattern explicitly exposes only selected methods or properties,
            while Module Pattern may expose more.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Design patterns are proven ways to structure your code</li>
          <li>They help manage complexity and improve code quality</li>
          <li>
            JS has patterns for objects, modules, functions, and async handling
          </li>
          <li>Learning them makes you a better, more organized developer</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 136,
    title: "Functional Programming Concepts",
    path: "/frontend/functional-programming",
    explanation: (
      <>
        <p>
          <strong>Functional Programming (FP)</strong> is a way of writing code
          using <strong>functions</strong> to make it more predictable, easier
          to test, and less prone to bugs.
        </p>

        <p>
          In FP, we focus on <strong>pure functions</strong>, avoiding changes
          to data (immutability), and keeping side effects minimal.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Immutability:</strong> Data does not change. Instead of
            modifying, create new copies.
          </li>
          <li>
            <strong>Pure Functions:</strong> Functions that always return the
            same output for the same input and have no side effects.
          </li>
          <li>
            <strong>Referential Transparency:</strong> You can replace a
            function call with its result without changing the program behavior.
          </li>
          <li>
            <strong>Side Effects:</strong> Any operation that affects the
            outside world (like changing a variable, logging, or DOM updates).
            FP tries to minimize these.
          </li>
          <li>
            <strong>Higher-Order Functions (HOF):</strong> Functions that take
            other functions as arguments or return functions.
          </li>
          <li>
            <strong>Function Composition:</strong> Combining small functions to
            build bigger functionality.
          </li>
          <li>
            <strong>Recursion:</strong> Functions calling themselves instead of
            using loops.
          </li>
          <li>
            <strong>Memoization:</strong> Storing results of expensive function
            calls to reuse later for better performance.
          </li>
          <li>
            <strong>Lazy Evaluation:</strong> Delaying computation until the
            value is needed.
          </li>
          <li>
            <strong>Currying:</strong> Transforming a function with multiple
            arguments into a sequence of functions each taking one argument.
          </li>
          <li>
            <strong>Partial Application:</strong> Fixing a few arguments of a
            function, producing a new function waiting for the rest.
          </li>
        </ul>

        <h2>Basic Example – Pure Function</h2>
        <pre>
          {`// Pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5`}
        </pre>

        <h2>Basic Example – Higher-Order Function</h2>
        <pre>
          {`function mapArray(arr, fn) {
  const result = [];
  for (let i of arr) {
    result.push(fn(i));
  }
  return result;
}

const nums = [1,2,3];
console.log(mapArray(nums, x => x * 2)); // [2,4,6]`}
        </pre>

        <h2>Why Functional Programming?</h2>
        <ul>
          <li>Predictable code behavior</li>
          <li>Easier to test and debug</li>
          <li>Less bugs due to immutability and pure functions</li>
          <li>Encourages reusable, modular code</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is Functional
            Programming?
            <br />
            <strong style={{ color: "green" }}>A:</strong> A programming style
            that focuses on using pure functions and immutability to write
            predictable, testable, and less buggy code.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What are pure
            functions?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Functions that always
            return the same output for the same input and have no side effects.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is immutability
            in FP?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Data does not change.
            Instead of modifying data, create new copies.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What are Higher-Order
            Functions (HOF)?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Functions that take
            other functions as arguments or return functions.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the difference
            between currying and partial application?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Currying transforms a
            multi-argument function into a series of single-argument functions.
            Partial application fixes some arguments and returns a new function
            waiting for the rest.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Functional Programming focuses on functions and immutability</li>
          <li>Pure functions and no side effects make code predictable</li>
          <li>
            Higher-order functions, currying, and composition improve code
            reusability
          </li>
          <li>
            Recursion and lazy evaluation can replace loops and improve
            performance
          </li>
          <li>
            Memoization helps avoid repeated work and optimize performance
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 137,
    title: "Data Structures & Algorithms in JavaScript",
    path: "/frontend/data-structures-algorithms",
    explanation: (
      <>
        <p>
          <strong>Data Structures (DS)</strong> are ways to organize and store
          data so it can be accessed and modified efficiently.
          <strong>Algorithms (Algo)</strong> are step-by-step instructions to
          solve problems or perform tasks using these data structures.
        </p>

        <p>
          Understanding DS & Algo in JavaScript helps write faster, optimized,
          and maintainable code.
        </p>

        <h2>Common Data Structures in JavaScript</h2>
        <ul>
          <li>
            <strong>Arrays:</strong> Ordered list of items, indexed by numbers.
            Internally stored as contiguous memory blocks.
          </li>
          <li>
            <strong>Linked Lists:</strong> Nodes connected via pointers. Good
            for fast insertions/deletions.
          </li>
          <li>
            <strong>Stacks:</strong> Last-In-First-Out (LIFO) structure.
            Example: Undo operation.
          </li>
          <li>
            <strong>Queues:</strong> First-In-First-Out (FIFO) structure.
            Example: Task scheduling.
          </li>
          <li>
            <strong>Maps:</strong> Key-value pairs, keys can be any value.
            Maintains insertion order.
          </li>
          <li>
            <strong>WeakMaps:</strong> Similar to Map, but keys must be objects
            and can be garbage collected.
          </li>
          <li>
            <strong>Sets:</strong> Collection of unique values, no duplicates.
          </li>
          <li>
            <strong>WeakSets:</strong> Like Set, but only stores objects and
            supports garbage collection.
          </li>
          <li>
            <strong>Hash Tables:</strong> Key-value storage with fast access
            using hash functions.
          </li>
          <li>
            <strong>Trees:</strong> Hierarchical structure with parent-child
            relationships (e.g., DOM tree).
          </li>
          <li>
            <strong>Tries:</strong> Special tree for storing strings, useful in
            autocomplete.
          </li>
          <li>
            <strong>Graphs:</strong> Nodes (vertices) connected by edges. Used
            in networks, paths, etc.
          </li>
        </ul>

        <h2>Common Algorithms in JavaScript</h2>
        <ul>
          <li>
            <strong>Event Delegation Algorithm:</strong> Efficiently handle
            events on multiple child elements using a single parent listener.
          </li>
          <li>
            <strong>Sorting Algorithms:</strong> Arrange items in order (e.g.,
            bubble sort, quicksort, mergesort).
          </li>
          <li>
            <strong>Searching Algorithms:</strong> Find items in data (e.g.,
            linear search, binary search).
          </li>
          <li>
            <strong>Big-O Analysis:</strong> Measure efficiency of algorithms
            (time & space complexity).
          </li>
        </ul>

        <h2>Why DS & Algo Matter in JavaScript</h2>
        <ul>
          <li>Helps write faster and efficient code</li>
          <li>Reduces memory usage and computation time</li>
          <li>Improves problem-solving skills</li>
          <li>Essential for interviews and large-scale applications</li>
        </ul>

        <h2>Basic Example – Stack Using Array</h2>
        <pre>
          {`const stack = [];
stack.push(1); // add to top
stack.push(2);
console.log(stack.pop()); // removes 2, returns 2
console.log(stack); // [1]`}
        </pre>

        <h2>Basic Example – Event Delegation</h2>
        <pre>
          {`document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the difference
            between a stack and a queue?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Stack is LIFO (last
            in, first out) and queue is FIFO (first in, first out).
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> When would you use a
            linked list instead of an array?
            <br />
            <strong style={{ color: "green" }}>A:</strong> When you need fast
            insertions/deletions in the middle of the list and don’t need random
            access.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is a hash table?
            <br />
            <strong style={{ color: "green" }}>A:</strong> A key-value storage
            structure that uses a hash function for fast data access.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is Big-O
            notation?
            <br />
            <strong style={{ color: "green" }}>A:</strong> A way to describe the
            performance or complexity of an algorithm in terms of time and
            space.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the advantage
            of using event delegation?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It allows handling
            events for multiple child elements efficiently with a single parent
            listener, reducing memory usage and improving performance.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Data Structures organize data efficiently</li>
          <li>Algorithms solve problems using data structures</li>
          <li>JS offers arrays, objects, maps, sets, trees, and graphs</li>
          <li>Sorting & searching algorithms are common and essential</li>
          <li>Big-O analysis helps understand performance and optimization</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 138,
    title: "Advanced Browser APIs",
    path: "/frontend/advanced-browser-apis",
    explanation: (
      <>
        <p>
          <strong>Browser APIs</strong> are built-in tools provided by browsers
          that let web developers do more than just HTML, CSS, and JavaScript.
          Advanced APIs allow you to handle network requests, background tasks,
          storage, real-time communication, animations, and performance
          tracking.
        </p>

        <h2>Key Advanced Browser APIs</h2>
        <ul>
          <li>
            <strong>Fetch API:</strong> Makes network requests and handles
            responses. Works with <strong>Promises</strong> for async
            operations.
          </li>
          <li>
            <strong>Web Workers:</strong> Run JavaScript in background threads
            to prevent blocking the main UI thread.
          </li>
          <li>
            <strong>Service Workers:</strong> Background scripts for offline
            support, caching, and push notifications.
          </li>
          <li>
            <strong>Web Sockets:</strong> Real-time two-way communication
            between client and server.
          </li>
          <li>
            <strong>IndexedDB:</strong> Browser database for storing large
            amounts of structured data locally.
          </li>
          <li>
            <strong>History API:</strong> Manage session history (pushState,
            replaceState) for SPAs without reload.
          </li>
          <li>
            <strong>Web Storage:</strong> <strong>localStorage</strong>{" "}
            (persistent) and <strong>sessionStorage</strong> (cleared on tab
            close) for small key-value data.
          </li>
          <li>
            <strong>File System API:</strong> Access and manipulate files on
            user’s device (with permission).
          </li>
          <li>
            <strong>WebRTC:</strong> Peer-to-peer audio, video, and data sharing
            between browsers.
          </li>
          <li>
            <strong>Web Animations API:</strong> Create and control animations
            programmatically.
          </li>
          <li>
            <strong>Intersection Observer API:</strong> Detect element
            visibility for lazy loading.
          </li>
          <li>
            <strong>Performance API:</strong> Measure web page performance and
            optimize rendering.
          </li>
          <li>
            <strong>Mutation Observer API:</strong> Watch for DOM changes
            asynchronously.
          </li>
        </ul>

        <h2>Why Use Advanced Browser APIs?</h2>
        <ul>
          <li>Improve page performance and responsiveness</li>
          <li>Enable offline or background capabilities</li>
          <li>Handle real-time communication without refreshing</li>
          <li>Store data locally and work with large datasets</li>
          <li>Create rich interactive animations and effects</li>
        </ul>

        <h2>Basic Example – Fetch API</h2>
        <pre>
          {`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));`}
        </pre>

        <h2>Basic Example – Intersection Observer</h2>
        <pre>
          {`const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('Element is visible!');
    }
  });
});
observer.observe(document.querySelector('#myElement'));`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the difference
            between a Web Worker and the main thread?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Web Workers run in
            the background and don’t block the main UI thread, while the main
            thread handles rendering and UI interactions.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How does a Service
            Worker help in offline apps?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It can cache files
            and handle network requests so the app works even when offline.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the difference
            between localStorage and sessionStorage?
            <br />
            <strong style={{ color: "green" }}>A:</strong> localStorage persists
            data until explicitly deleted, while sessionStorage clears data when
            the tab closes.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How does Intersection
            Observer improve performance?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It lets you detect
            element visibility without constantly checking scroll position,
            reducing layout thrashing and improving performance.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> When would you use
            WebRTC?
            <br />
            <strong style={{ color: "green" }}>A:</strong> For real-time
            peer-to-peer communication like video calls, audio chats, or file
            sharing between browsers.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Advanced Browser APIs extend JS capabilities</li>
          <li>
            They allow background tasks, storage, real-time communication, and
            offline features
          </li>
          <li>
            Useful for performance optimization, animations, and responsive apps
          </li>
          <li>Learning them helps build modern, high-performance web apps</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 139,
    title: "Performance Optimization",
    path: "/frontend/performance-optimization",
    explanation: (
      <>
        <p>
          <strong>Performance Optimization</strong> in web development is about
          making web pages load faster, run smoothly, and respond quickly to
          user interactions. It includes techniques to reduce delays, improve
          rendering, and make efficient use of resources.
        </p>

        <h2>Key Performance Techniques</h2>
        <ul>
          <li>
            <strong>Debounce:</strong> Limits how often a function runs by
            waiting for a pause in events before executing.
          </li>
          <li>
            <strong>Throttle:</strong> Ensures a function runs at most once in a
            set period, useful for scroll or mousemove events.
          </li>
          <li>
            <strong>requestIdleCallback:</strong> Lets the browser run
            non-urgent tasks when the main thread is idle.
          </li>
          <li>
            <strong>Lazy Loading:</strong> Load resources only when needed or
            visible.
          </li>
          <li>
            <strong>Prefetch & Preload:</strong> Preload important resources
            early or prefetch likely needed resources.
          </li>
          <li>
            <strong>Code Splitting:</strong> Break JS into smaller chunks to
            load only necessary code initially.
          </li>
          <li>
            <strong>Minification:</strong> Remove unnecessary characters from
            code to reduce file size.
          </li>
          <li>
            <strong>Caching Strategies:</strong> Store frequently used
            data/resources in browser cache.
          </li>
          <li>
            <strong>Avoiding Layout Thrashing:</strong> Minimize frequent
            reads/writes to DOM layout properties.
          </li>
          <li>
            <strong>Long Task Detection:</strong> Identify JS tasks blocking the
            main thread too long and optimize them.
          </li>
          <li>
            <strong>Critical Rendering Path Optimization:</strong> Optimize
            load/render sequence for faster first paint.
          </li>
          <li>
            <strong>Tree Shaking:</strong> Remove unused code from final
            bundles.
          </li>
          <li>
            <strong>Bundle Size Reduction:</strong> Keep total JS and CSS small
            to improve load times.
          </li>
        </ul>

        <h2>Why Performance Optimization Matters</h2>
        <ul>
          <li>Faster page loads improve user experience</li>
          <li>Reduces CPU and memory usage</li>
          <li>Helps mobile and low-end devices run smoothly</li>
          <li>Improves SEO and engagement metrics</li>
        </ul>

        <h2>Basic Example – Debounce</h2>
        <pre>
          {`function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 300));`}
        </pre>

        <h2>Basic Example – Lazy Loading Images</h2>
        <pre>
          {`<img src="placeholder.jpg" data-src="actual-image.jpg" class="lazy-load" />

<script>
  const images = document.querySelectorAll('.lazy-load');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.src = entry.target.dataset.src;
      }
    });
  });
  images.forEach(img => observer.observe(img));
</script>`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is the difference
            between debouncing and throttling?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Debounce waits for a
            pause in events before executing once, while throttle executes a
            function at most once per set time interval.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How does lazy loading
            improve performance?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It delays loading
            images or components until they are visible, reducing initial load
            time and saving bandwidth.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> What is layout
            thrashing and how can it be avoided?
            <br />
            <strong style={{ color: "green" }}>A:</strong> Layout thrashing
            happens when JS frequently reads/writes DOM layout properties
            causing multiple reflows. It can be avoided by batching
            reads/writes.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> Why is code splitting
            important?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It breaks JS into
            smaller chunks, allowing faster initial load and downloading code
            only when needed.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Q:</strong> How does
            requestIdleCallback help performance?
            <br />
            <strong style={{ color: "green" }}>A:</strong> It schedules
            non-urgent tasks to run when the main thread is idle, preventing UI
            blocking.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Performance optimization makes web pages fast and smooth</li>
          <li>
            Techniques include debouncing, throttling, lazy loading, caching,
            and code splitting
          </li>
          <li>
            Minimizing bundle size and layout thrashing improves rendering speed
          </li>
          <li>Helps both user experience and resource efficiency</li>
        </ul>
      </>
    ),
    priority: "High",
  },

  {
    id: 140,
    title: "ES6+ Features",
    path: "/frontend/es6",
    explanation: (
      <>
        <p>
          ES6+ introduced powerful modern JavaScript features that significantly
          improve readability, maintainability, and developer speed. These
          features appear frequently in interviews and are essential in all
          real-world applications.
        </p>

        {/* let / const / var */}
        <h2>let / const / var</h2>
        <ul>
          <li>
            <strong>var</strong> – function-scoped, hoisted with
            <em> undefined</em>, allows redeclaration, and can leak out of
            blocks.
            <br />
            <em>Trick:</em> <code>var</code> ignores block scope.
            <pre>
              {`if (true) { var x = 10; }
console.log(x); // 10`}
            </pre>
          </li>

          <li>
            <strong>let</strong> – block-scoped, hoisted but kept in the
            <em> Temporal Dead Zone (TDZ)</em>, cannot redeclare in same block.
            <br />
            <em>Trick:</em> Accessing before declaration throws ReferenceError.
            <pre>
              {`console.log(a); // ❌ ReferenceError
let a = 5;`}
            </pre>
          </li>

          <li>
            <strong>const</strong> – block-scoped, must be initialized, cannot
            reassign, but object values can mutate.
            <br />
            <em>Trick:</em> Only reference is constant, not internal properties.
            <pre>
              {`const user = { name: "Aman" };
user.name = "Karan"; // ✔ allowed
user = {}; // ❌ TypeError`}
            </pre>
          </li>
        </ul>

        <h3>Quick Revision Table</h3>
        <pre>
          {`var  → function-scoped | hoisted undefined | redeclare allowed
let  → block-scoped    | TDZ              | no redeclare
const→ block-scoped    | TDZ              | no reassign`}
        </pre>

        {/* Destructuring */}
        <h2>Destructuring</h2>
        <p>
          Destructuring extracts values from arrays and objects in a clean,
          readable, declarative way.
        </p>

        <h3>Basic Examples</h3>
        <pre>
          {`const [a, b] = [1, 2];

const user = { name: "John", age: 25 };
const { name, age } = user;`}
        </pre>

        <h3>Useful Tricks</h3>
        <pre>
          {`// Default values
const [x = 10, y = 20] = [5]; // x=5, y=20

// Renaming keys
const { name: userName } = user;

// Skipping items
const [first, , third] = [10, 20, 30];

// Nested destructuring
const obj = { p: { q: 5 } };
const { p: { q } } = obj;`}
        </pre>

        {/* Rest & Spread */}
        <h2>Rest & Spread Operators</h2>
        <p>
          Spread <strong>(...)</strong> expands arrays/objects.
          <br />
          Rest <strong>(...)</strong> collects remaining elements into an array.
          <br />
          <em>Same syntax, opposite meaning → common interview question.</em>
        </p>

        <h3>Spread Examples</h3>
        <pre>
          {`const nums = [1, 2, 3];
const newNums = [...nums, 4]; // expand array

// Clone arrays
const copy = [...nums];

// Merge arrays
const merged = [...[1,2], ...[3,4]];

// Spread objects
const final = { ...{a:1}, ...{b:2} };`}
        </pre>

        <h3>Rest Examples</h3>
        <pre>
          {`function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// Collect remaining items
const [a, ...rest] = [1,2,3,4];
console.log(rest); // [2,3,4]`}
        </pre>

        {/* Classes */}
        <h2>Classes</h2>
        <p>
          ES6 Classes provide a cleaner, more familiar OOP syntax over
          prototypes.
        </p>
        <pre>
          {`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const p = new Person("Alex");
p.greet(); // Hello Alex`}
        </pre>

        {/* Arrow Functions */}
        <h2>Arrow Functions</h2>
        <p>
          Provide shorter syntax and lexical <strong>this</strong>. (They do NOT
          have their own <strong>this</strong>.)
        </p>
        <pre>
          {`const add = (a, b) => a + b;

const user = {
  name: "Aman",
  greet: () => console.log(this.name)
  // ❌ this does NOT refer to user
};`}
        </pre>

        {/* Template Literals */}
        <h2>Template Literals</h2>
        <pre>
          {`const name = "John";
console.log(\`Hello, \${name}!\`);`}
        </pre>

        {/* Default Parameters */}
        <h2>Default Parameters</h2>
        <pre>
          {`function multiply(a, b = 2) {
  return a * b;
}`}
        </pre>

        {/* Interview Tips */}
        <h2>Interview Tip</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between var, let, const?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            var = function scoped, can re-declare; let = block scoped, can
            update; const = block scoped, cannot update variable reference.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Rest vs Spread
            operator?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Rest collects multiple items into an array; Spread expands an
            array/object into individual elements.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Are classes in
            JS real or syntactic sugar?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Classes are
            syntactic sugar over prototype-based inheritance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do arrow
            functions handle "this"?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Arrow
            functions don’t have their own "this"; they inherit from the
            surrounding scope.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            destructuring?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Shortcut to
            extract values from arrays or objects into variables.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is TDZ
            (Temporal Dead Zone)?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Accessing
            let/const before declaration causes a runtime error; common
            interview trap.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does const
            freeze objects?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, const
            prevents reassignment of the variable reference but object
            properties can still change.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 141,
    title: "DOM Manipulation & Events",
    path: "/frontend/dom-events",
    explanation: (
      <>
        <p>
          The <strong>DOM (Document Object Model)</strong> is a tree-like
          representation of your HTML page. JavaScript can use this tree to
          dynamically update elements, styles, attributes, and structure. Events
          allow your application to respond to user actions such as clicks,
          keypresses, mouse movements, form submissions, and more.
        </p>

        <h2>Why DOM Manipulation & Events Matter?</h2>
        <ul>
          <li>Enable dynamic UI updates without page reloads.</li>
          <li>Essential for building interactive and responsive web apps.</li>
          <li>
            Forms the foundation of how modern frameworks work internally.
          </li>
          <li>
            Helps in understanding virtual DOM and reactivity concepts better.
          </li>
        </ul>

        <h2>Core DOM Manipulation Tricks</h2>
        <ul>
          <li>
            <strong>document.querySelector()</strong> is more powerful than
            <code> getElementById </code> because it supports CSS selectors.
          </li>
          <li>
            Use <strong>textContent</strong> for safer text updates (prevents
            XSS).
          </li>
          <li>
            <strong>innerHTML</strong> re-parses HTML → slower and riskier.
          </li>
          <li>
            <strong>classList</strong> is the best way to add/remove/toggle
            classes.
          </li>
          <li>
            Direct style updates are fine for single changes—use classes for
            multiple style updates.
          </li>
        </ul>

        <pre>
          {`const box = document.querySelector(".box");
box.textContent = "Updated!";
box.classList.add("highlight");`}
        </pre>

        <h2>Event Flow (Important Interview Topic)</h2>
        <ul>
          <li>
            <strong>Capturing:</strong> Event travels from the root (window →
            document → parent) down to the target element.
          </li>
          <li>
            <strong>Bubbling:</strong> Event travels from the target back up
            through its parent elements.
          </li>
        </ul>

        <p>
          You can choose the phase using the third parameter in{" "}
          <code>addEventListener()</code>.
        </p>

        <pre>
          {`element.addEventListener("click", handler, true);   // capturing
element.addEventListener("click", handler, false);  // bubbling (default)`}
        </pre>

        <h2>Event Delegation</h2>
        <p>
          Instead of adding event listeners to multiple child elements, attach a
          single listener to a parent element. Use <strong>event.target</strong>{" "}
          to detect which child triggered the event.
        </p>

        <pre>
          {`document.getElementById("list").addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});`}
        </pre>

        <h2>Advantages of Event Delegation</h2>
        <ul>
          <li>Reduces number of event listeners → better performance.</li>
          <li>Automatically supports dynamically added elements.</li>
          <li>Keeps code cleaner and more maintainable.</li>
        </ul>

        <h2>Common Event Tricks</h2>
        <ul>
          <li>
            <strong>e.stopPropagation()</strong> stops the event from bubbling.
          </li>
          <li>
            <strong>e.preventDefault()</strong> stops default browser actions
            (forms, links).
          </li>
          <li>
            <strong>Passive listeners</strong> improve scroll performance:
            <pre>{`window.addEventListener("scroll", handler, { passive: true });`}</pre>
          </li>
          <li>
            <strong>Keyboard events:</strong> use <code>e.key</code> instead of
            keyCode (deprecated).
          </li>
        </ul>

        <h2>Interview Tip</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            bubbling vs capturing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Capturing = event goes top → target; Bubbling = target → top.
            Default is bubbling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is event
            delegation and why use it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Attach a single handler to a parent element; handles child events.
            Efficient for dynamic lists, fewer listeners = better performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between stopPropagation() and preventDefault()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            stopPropagation() stops event from moving further; preventDefault()
            stops default browser action (e.g., link navigation, form submit).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to access
            event target and type?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use <code>event.target</code> for element, <code>event.type</code>{" "}
            for event type.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between inline, DOM0, and DOM2 event handling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Inline = in HTML; DOM0 = element.onclick = fn; DOM2 =
            addEventListener(), supports multiple listeners and
            capturing/bubbling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between HTMLCollection and NodeList?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            HTMLCollection = live collection of elements; NodeList = static or
            live, can include text/comment nodes.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            manipulate classes on elements?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use <code>element.classList.add/remove/toggle/contains</code> for
            class manipulation.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to create,
            append, and remove elements dynamically?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>document.createElement()</code>,{" "}
            <code>parent.appendChild()</code>, <code>parent.removeChild()</code>
            .
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            get/set element attributes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use <code>getAttribute()</code>, <code>setAttribute()</code>,{" "}
            <code>removeAttribute()</code>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 142,
    title: "Testing in Depth",
    path: "/frontend/testing-in-depth",
    explanation: (
      <>
        <p>
          <strong>Testing</strong> in web development ensures that an
          application works correctly, behaves as expected, and remains stable
          as new features are added. It helps catch bugs early and improves code
          quality and confidence.
        </p>

        <h2>Types of Testing</h2>
        <ul>
          <li>
            <strong>Unit Testing:</strong> Tests individual functions or
            components in isolation.
          </li>
          <li>
            <strong>Integration Testing:</strong> Tests how multiple units work
            together.
          </li>
          <li>
            <strong>End-to-End (E2E) Testing:</strong> Tests the complete user
            flow from start to finish.
          </li>
        </ul>

        <h2>Testing Tools & Concepts</h2>
        <ul>
          <li>
            <strong>Mocks:</strong> Fake implementations used to isolate parts
            of code during testing.
          </li>
          <li>
            <strong>Spies:</strong> Track function calls and arguments without
            changing behavior.
          </li>
          <li>
            <strong>Test Runners:</strong> Tools that execute test files and
            report results.
          </li>
          <li>
            <strong>Jest Internals:</strong> Assertion library, mocking system,
            and test execution flow.
          </li>
          <li>
            <strong>DOM Testing Library:</strong> Tests UI by interacting with
            elements like a real user.
          </li>
          <li>
            <strong>Snapshot Testing:</strong> Compares current UI output with
            stored snapshots.
          </li>
          <li>
            <strong>Coverage Analysis:</strong> Measures how much of the
            codebase is tested.
          </li>
        </ul>

        <h2>Testing Methodologies</h2>
        <ul>
          <li>
            <strong>Test-Driven Development (TDD):</strong> Write tests before
            writing the actual code.
          </li>
          <li>
            <strong>Behavior-Driven Development (BDD):</strong> Focus on
            application behavior using readable test cases.
          </li>
        </ul>

        <h2>Basic Example – Unit Test (Jest)</h2>
        <pre>
          {`function sum(a, b) {
  return a + b;
}

test('adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});`}
        </pre>

        <h2>Basic Example – Component Testing</h2>
        <pre>
          {`render(<Button />);
expect(screen.getByText('Submit')).toBeInTheDocument();`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between unit and integration testing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Unit testing
            tests individual units in isolation, while integration testing
            checks how multiple units work together.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is E2E
            testing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It tests the
            complete application flow as a real user would interact with it.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are mocks
            used in testing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Mocks isolate
            dependencies and make tests faster and more predictable.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            snapshot testing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It compares
            current UI output with a stored snapshot to detect unexpected
            changes.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Testing ensures application correctness and reliability</li>
          <li>Includes unit, integration, and end-to-end testing</li>
          <li>Tools like Jest and Testing Library are commonly used</li>
          <li>Improves maintainability and confidence in code changes</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
];
