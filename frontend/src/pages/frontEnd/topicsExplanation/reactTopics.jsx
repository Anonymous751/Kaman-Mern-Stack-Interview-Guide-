


const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};


export  const reactTopics = [

  {
    id: 143,
    title: "React Rendering System (Core)",
    path: "/frontend/react-rendering-system",
    explanation: (
      <>
        <p>
          <strong>React Rendering System</strong> is the process React uses to
          decide
          <strong>what to show on the screen</strong> and{" "}
          <strong>when to update it</strong>. React is smart — it does not
          redraw the whole page every time something changes.
        </p>

        <h2>1. Virtual DOM (Simple Meaning)</h2>
        <p>
          The <strong>Virtual DOM</strong> is a <strong>fake copy</strong> of
          the real web page kept in JavaScript memory.
        </p>
        <ul>
          <li>React first builds a Virtual DOM</li>
          <li>It is faster than working directly with the real browser DOM</li>
          <li>React changes this copy instead of the real page</li>
        </ul>

        <h2>2. When Does React Re-render?</h2>
        <p>React updates the screen only when something changes:</p>
        <ul>
          <li>
            State changes (<code>useState</code>)
          </li>
          <li>Props change</li>
          <li>Parent component re-renders</li>
        </ul>

        <h2>3. Reconciliation (Easy Explanation)</h2>
        <p>
          <strong>Reconciliation</strong> means{" "}
          <strong>finding what changed</strong>.
        </p>
        <ul>
          <li>React creates a new Virtual DOM</li>
          <li>It compares it with the old Virtual DOM</li>
          <li>It finds the differences only</li>
        </ul>

        <h2>4. Diffing Algorithm (In Simple Words)</h2>
        <p>
          The <strong>diffing algorithm</strong> is React’s comparison method.
        </p>
        <ul>
          <li>React checks elements level by level</li>
          <li>If an element type changes, React replaces it</li>
          <li>If keys are same in lists, React updates only that item</li>
        </ul>

        <h2>5. How React Compares Trees</h2>
        <p>
          React sees the UI as a <strong>tree structure</strong> (parent → child
          components).
        </p>
        <ul>
          <li>If parent changes, children are checked</li>
          <li>If nothing changed, React skips updating them</li>
          <li>This saves time and improves performance</li>
        </ul>

        <h2>6. Batching Updates (Very Simple)</h2>
        <p>
          <strong>Batching</strong> means React groups many updates together.
        </p>
        <ul>
          <li>Multiple state updates are combined</li>
          <li>React updates the UI once instead of many times</li>
          <li>This makes apps faster</li>
        </ul>

        <h2>7. Commit Phase (Final Step)</h2>
        <p>
          After React knows what changed, it updates the{" "}
          <strong>real browser DOM</strong>.
        </p>
        <ul>
          <li>Only changed parts are updated</li>
          <li>The screen updates smoothly</li>
        </ul>

        <h2>Simple Flow (Easy to Remember)</h2>
        <pre>
          {`State/Props Change
      ↓
New Virtual DOM
      ↓
Compare with Old Virtual DOM
      ↓
Find Differences
      ↓
Update Real DOM`}
        </pre>

        <h2>Interview Questions (Beginner Level)</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Virtual DOM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A lightweight
            copy of the real DOM that React uses to update the UI faster.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            React re-render?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When state or
            props change.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is React
            fast?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because it
            updates only the parts that change, not the whole page.
          </li>
        </ul>

        <h2>Summary (One Look)</h2>
        <ul>
          <li>React uses a Virtual DOM to work fast</li>
          <li>It compares old and new UI</li>
          <li>Only changed parts are updated</li>
          <li>This makes React apps smooth and efficient</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 144,
    title: "React Fiber Architecture",
    path: "/frontend/react-fiber",
    explanation: (
      <>
        <p>
          <strong>React Fiber</strong> is the <strong>internal engine</strong>{" "}
          of React. It decides <strong>how and when</strong> React updates the
          screen. Fiber was introduced to make React apps{" "}
          <strong>smoother, faster, and interruptible</strong>.
        </p>

        <h2>Why React Fiber Was Needed</h2>
        <p>
          Old React used to do all UI updates in one go. If the update was
          heavy, the app could freeze.
        </p>
        <ul>
          <li>UI could feel slow</li>
          <li>Animations could lag</li>
          <li>User interactions were blocked</li>
        </ul>

        <h2>What Is a Fiber? (Very Simple)</h2>
        <p>
          A <strong>Fiber</strong> is a small unit of work.
        </p>
        <ul>
          <li>Each component becomes a Fiber</li>
          <li>Each DOM element has a Fiber</li>
          <li>React works on one Fiber at a time</li>
        </ul>

        <h2>Fiber Node Structure (Easy Idea)</h2>
        <p>Each Fiber stores information about a component.</p>
        <ul>
          <li>What type of component it is</li>
          <li>Its state and props</li>
          <li>Its parent and child components</li>
          <li>What needs to be updated</li>
        </ul>

        <h2>Render Phase vs Commit Phase</h2>

        <h3>1. Render Phase (Planning)</h3>
        <ul>
          <li>React builds and updates the Fiber tree</li>
          <li>Figures out what changed</li>
          <li>Can be paused or stopped</li>
          <li>Does NOT update the real DOM</li>
        </ul>

        <h3>2. Commit Phase (Applying Changes)</h3>
        <ul>
          <li>React updates the real DOM</li>
          <li>
            Runs effects like <code>useEffect</code>
          </li>
          <li>Cannot be interrupted</li>
        </ul>

        <h2>Splitting Work Into Small Tasks</h2>
        <p>
          React breaks big updates into <strong>small pieces</strong>.
        </p>
        <ul>
          <li>Works on one Fiber</li>
          <li>Stops if the browser needs control</li>
          <li>Continues later</li>
        </ul>

        <h2>Handling Long Tasks</h2>
        <p>Long tasks can block the UI. Fiber prevents this.</p>
        <ul>
          <li>React pauses rendering</li>
          <li>Browser handles clicks, scrolls, animations</li>
          <li>React resumes work later</li>
        </ul>

        <h2>Priority Levels (Simple)</h2>
        <p>Not all updates are equally important.</p>
        <ul>
          <li>User typing → High priority</li>
          <li>Button click → High priority</li>
          <li>Background data update → Low priority</li>
        </ul>

        <h2>Cooperative Scheduling (Easy Meaning)</h2>
        <p>
          React <strong>cooperates</strong> with the browser.
        </p>
        <ul>
          <li>React does not block the browser</li>
          <li>Browser stays responsive</li>
          <li>Animations remain smooth</li>
        </ul>

        <h2>How Fiber Improves User Experience</h2>
        <ul>
          <li>No UI freezing</li>
          <li>Smooth scrolling and animations</li>
          <li>Faster response to user actions</li>
        </ul>

        <h2>Simple Flow (Easy to Remember)</h2>
        <pre>
          {`Update Happens
     ↓
Create/Update Fiber Tree
     ↓
Split Work Into Small Tasks
     ↓
Pause If Needed
     ↓
Commit Changes to DOM`}
        </pre>

        <h2>Interview Questions (Beginner Friendly)</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            Fiber?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React Fiber is
            the internal system that controls how React updates the UI smoothly.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is Fiber
            important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It prevents UI
            freezing by breaking work into small tasks.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can React stop
            rendering in the middle?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, during
            the render phase, React can pause and resume work.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Fiber is React’s internal engine</li>
          <li>It splits work into small pieces</li>
          <li>It allows pausing and prioritizing updates</li>
          <li>Makes React apps smooth and responsive</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 145,
    title: "React Scheduler",
    path: "/frontend/react-scheduler",
    explanation: (
      <>
        <p>
          <strong>React Scheduler</strong> is the system that decides{" "}
          <strong>when</strong> React should do its work. It helps React update
          the UI <strong>without freezing the screen</strong>.
        </p>

        <p>
          The Scheduler works closely with <strong>React Fiber</strong> to keep
          apps smooth and responsive.
        </p>

        <h2>Why React Scheduler Is Needed</h2>
        <p>
          Some updates are heavy and can block the browser. Scheduler prevents
          this by managing time and priorities.
        </p>
        <ul>
          <li>Prevents UI freezing</li>
          <li>Keeps scrolling and typing smooth</li>
          <li>Handles updates smartly</li>
        </ul>

        <h2>Cooperative Scheduling (Simple Meaning)</h2>
        <p>
          React <strong>cooperates</strong> with the browser.
        </p>
        <ul>
          <li>React works for a short time</li>
          <li>Gives control back to the browser</li>
          <li>Continues later</li>
        </ul>

        <h2>Time Slicing (Easy Explanation)</h2>
        <p>
          Big tasks are split into <strong>small time slices</strong>.
        </p>
        <ul>
          <li>React works on a small piece</li>
          <li>Pauses if time is up</li>
          <li>Resumes later</li>
        </ul>

        <h2>Yielding Back to the Browser</h2>
        <p>
          Yielding means <strong>letting the browser do its job</strong>.
        </p>
        <ul>
          <li>Handle clicks</li>
          <li>Handle scrolling</li>
          <li>Run animations</li>
        </ul>

        <h2>Idle Callbacks (Beginner Friendly)</h2>
        <p>
          When the browser is free, React uses that time to do low-priority
          work.
        </p>
        <ul>
          <li>Background updates</li>
          <li>Pre-rendering content</li>
          <li>Non-urgent calculations</li>
        </ul>

        <h2>Avoiding UI Blocking</h2>
        <p>Scheduler ensures long tasks do not block the UI.</p>
        <ul>
          <li>No frozen screens</li>
          <li>No delayed clicks</li>
          <li>Better user experience</li>
        </ul>

        <h2>Update Priorities (Very Simple)</h2>
        <ul>
          <li>
            <strong>High Priority:</strong> Typing, clicking, scrolling
          </li>
          <li>
            <strong>Medium Priority:</strong> Showing fetched data
          </li>
          <li>
            <strong>Low Priority:</strong> Background updates
          </li>
        </ul>

        <h2>Simple Flow</h2>
        <pre>
          {`Update Happens
     ↓
Scheduler Assigns Priority
     ↓
React Works in Small Chunks
     ↓
Browser Gets Control
     ↓
React Continues Work`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            Scheduler?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React
            Scheduler decides when and how React updates the UI without blocking
            the browser.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does time
            slicing mean?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Breaking large
            tasks into small pieces so the UI stays responsive.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            yielding important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows the
            browser to handle user interactions and animations smoothly.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Scheduler avoid UI blocking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By pausing
            work and giving control back to the browser when needed.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Scheduler controls when React does its work</li>
          <li>Uses time slicing and priorities</li>
          <li>Prevents UI freezing</li>
          <li>Works together with React Fiber</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 146,
    title: "React Concurrent Features",
    path: "/frontend/react-concurrent",
    explanation: (
      <>
        <p>
          <strong>React Concurrent Features</strong> help React keep the UI
          <strong>smooth and responsive</strong> even when the app is doing
          heavy work.
        </p>

        <p>
          Introduced fully in <strong>React 18+</strong>, these features allow
          React to work on multiple tasks at the same time{" "}
          <strong>without freezing the screen</strong>.
        </p>

        <h2>What Problem Does Concurrent React Solve?</h2>
        <p>In large apps, updating the UI can take time and cause:</p>
        <ul>
          <li>Laggy typing</li>
          <li>Frozen screens</li>
          <li>Slow navigation</li>
        </ul>

        <p>
          Concurrent React fixes this by making updates{" "}
          <strong>interruptible</strong>.
        </p>

        <h2>Concurrent Rendering (Simple Meaning)</h2>
        <p>
          React can start rendering an update, pause it, and continue later.
        </p>
        <ul>
          <li>Important updates run first</li>
          <li>Less important updates wait</li>
          <li>User experience stays smooth</li>
        </ul>

        <h2>startTransition() (Beginner Friendly)</h2>
        <p>
          <strong>startTransition()</strong> tells React:
          <em>"This update is not urgent"</em>.
        </p>

        <pre>
          {`startTransition(() => {
  setSearchResults(data);
});`}
        </pre>

        <ul>
          <li>Typing stays smooth</li>
          <li>Heavy rendering happens in background</li>
          <li>No UI freezing</li>
        </ul>

        <h2>Suspense Integration</h2>
        <p>
          <strong>Suspense</strong> lets React wait for data or components
          before showing UI.
        </p>
        <ul>
          <li>Show loading states</li>
          <li>Avoid blank screens</li>
          <li>Smooth data loading</li>
        </ul>

        <h2>Lazy Loading (Simple)</h2>
        <p>
          Load components <strong>only when needed</strong>.
        </p>
        <ul>
          <li>Faster initial load</li>
          <li>Less JavaScript upfront</li>
          <li>Better performance</li>
        </ul>

        <h2>Automatic Batching</h2>
        <p>
          React groups multiple state updates into one render automatically.
        </p>
        <ul>
          <li>Fewer re-renders</li>
          <li>Better performance</li>
          <li>Works inside promises, timeouts, and events</li>
        </ul>

        <h2>Preventing UI Freezing</h2>
        <ul>
          <li>Long tasks are split</li>
          <li>High priority updates run first</li>
          <li>Browser stays responsive</li>
        </ul>

        <h2>Simple Flow</h2>
        <pre>
          {`User Action
     ↓
React Checks Priority
     ↓
Urgent Updates First
     ↓
Non-Urgent Updates Later
     ↓
Smooth UI`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Concurrent React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows
            React to pause, resume, and prioritize rendering work to keep the UI
            smooth.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            startTransition() do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It marks
            updates as non-urgent so React can keep the UI responsive.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Suspense work with concurrent features?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows
            React to wait for data or components while showing fallback UI.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            automatic batching?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React groups
            multiple state updates into a single render for better performance.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Concurrent features keep the UI responsive</li>
          <li>React can pause and prioritize rendering work</li>
          <li>startTransition marks non-urgent updates</li>
          <li>Suspense and lazy loading improve loading experience</li>
          <li>Automatic batching reduces unnecessary re-renders</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 147,
    title: "React Hooks Internals",
    path: "/frontend/react-hooks-internals",
    explanation: (
      <>
        <p>
          <strong>React Hooks Internals</strong> explain how hooks like
          <code> useState</code>, <code>useEffect</code>, and others work
          <strong>behind the scenes</strong>.
        </p>

        <p>
          Understanding this helps you know{" "}
          <strong>why hooks have rules</strong>
          and how React remembers state between renders.
        </p>

        <h2>Why Hooks Have Rules</h2>
        <p>
          React does <strong>not</strong> identify hooks by name. It identifies
          them by <strong>order</strong>.
        </p>

        <h3>Hook Call Order Rule (Very Important)</h3>
        <ul>
          <li>Hooks must be called in the same order every render</li>
          <li>React links hook data using position, not name</li>
          <li>Changing order breaks React’s tracking</li>
        </ul>

        <h3>Why Hooks Cannot Be Inside Loops or Conditions</h3>
        <p>Because loops or conditions can change the order of hook calls.</p>

        <pre>
          {`// ❌ Wrong
if (isLoggedIn) {
  useState(0);
}`}

          {`// ✅ Correct
useState(0);`}
        </pre>

        <h2>How useState Works Internally</h2>
        <p>
          <strong>useState</strong> stores its value inside React’s internal
          structure called a <strong>Fiber node</strong>.
        </p>

        <ul>
          <li>Initial state is saved on first render</li>
          <li>Setter function updates the stored value</li>
          <li>React schedules a re-render</li>
        </ul>

        <h2>useEffect Internals (Simple)</h2>
        <p>
          <strong>useEffect</strong> runs code <strong>after rendering</strong>.
        </p>

        <h3>Phases of useEffect</h3>
        <ul>
          <li>
            <strong>Run Effect:</strong> After component renders
          </li>
          <li>
            <strong>Cleanup:</strong> Before next effect or unmount
          </li>
        </ul>

        <pre>
          {`useEffect(() => {
  console.log("Effect runs");

  return () => {
    console.log("Cleanup runs");
  };
}, []);`}
        </pre>

        <h2>useRef Internals</h2>
        <p>
          <strong>useRef</strong> stores a value that does NOT cause re-render.
        </p>

        <ul>
          <li>Stored inside Fiber</li>
          <li>Value persists between renders</li>
          <li>Changing it does not update UI</li>
        </ul>

        <h2>useMemo & useCallback (Caching Logic)</h2>
        <p>
          These hooks help React <strong>remember values or functions</strong>.
        </p>

        <ul>
          <li>
            <strong>useMemo:</strong> Caches calculated values
          </li>
          <li>
            <strong>useCallback:</strong> Caches function references
          </li>
          <li>Recomputed only when dependencies change</li>
        </ul>

        <h2>Where Hook Data Is Stored</h2>
        <p>
          All hook data is stored inside the <strong>Fiber node</strong> of a
          component.
        </p>

        <ul>
          <li>Each hook gets a slot</li>
          <li>Order must stay the same</li>
          <li>Fiber remembers hook state across renders</li>
        </ul>

        <h2>Simple Internal Flow</h2>
        <pre>
          {`Component Render
     ↓
Hooks Called in Order
     ↓
State Stored in Fiber
     ↓
State Update
     ↓
Re-render`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why can’t
            hooks be used inside loops or conditions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because React
            relies on hook call order to track state, and loops or conditions
            can change that order.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does React
            remember hook state?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React stores
            hook data inside the component’s Fiber node in a fixed order.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            useEffect run?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> After the
            component renders, and cleanup runs before the next effect or
            unmount.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why doesn’t
            useRef cause re-renders?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because
            updating a ref does not notify React to re-render the component.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between useMemo and useCallback?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> useMemo caches
            values, while useCallback caches function references.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Hooks are tracked by order, not name</li>
          <li>Hook state is stored inside Fiber nodes</li>
          <li>useState triggers re-render, useRef does not</li>
          <li>useEffect runs after render with cleanup support</li>
          <li>useMemo and useCallback improve performance</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 148,
    title: "React DOM Internals",
    path: "/frontend/react-dom-internals",
    explanation: (
      <>
        <p>
          <strong>React DOM Internals</strong> explain how React talks to the
          <strong>real browser DOM</strong>.
        </p>

        <p>
          React itself does not change the browser directly.
          <strong>ReactDOM</strong> is the bridge between React and the browser.
        </p>

        <h2>What is ReactDOM?</h2>
        <p>
          <strong>ReactDOM</strong> is the package that takes React elements and
          updates the <strong>actual HTML DOM</strong>.
        </p>

        <ul>
          <li>React creates a Virtual DOM</li>
          <li>ReactDOM applies changes to the real DOM</li>
          <li>Browser finally updates the UI</li>
        </ul>

        <h2>How React Updates the DOM</h2>
        <p>
          React does <strong>not</strong> re-render the entire page. It only
          updates what changed.
        </p>

        <h3>Step-by-step Flow</h3>
        <pre>
          {`State / Props Change
      ↓
Virtual DOM Updated
      ↓
React Finds Differences
      ↓
ReactDOM Updates Real DOM`}
        </pre>

        <h2>Synthetic Events (Simple Meaning)</h2>
        <p>
          React does not use browser events directly. It uses{" "}
          <strong>Synthetic Events</strong>.
        </p>

        <ul>
          <li>Wrapper around native browser events</li>
          <li>Same behavior across all browsers</li>
          <li>Better performance and consistency</li>
        </ul>

        <pre>{`<button onClick={handleClick}>Click</button>`}</pre>

        <p>
          Even though this looks like a normal click, React is handling it
          internally.
        </p>

        <h2>Event Delegation in React</h2>
        <p>
          React does <strong>not</strong> attach events to every element.
        </p>

        <ul>
          <li>All events are attached to the root element</li>
          <li>
            Usually <code>document</code> or root container
          </li>
          <li>Events bubble up and React handles them</li>
        </ul>

        <h3>Why This Is Good</h3>
        <ul>
          <li>Fewer event listeners</li>
          <li>Better performance</li>
          <li>Works well with dynamic elements</li>
        </ul>

        <h2>Event Bubbling & Capturing</h2>
        <p>
          React supports both <strong>bubbling</strong> and
          <strong>capturing</strong>.
        </p>

        <ul>
          <li>
            <strong>Bubbling:</strong> Event goes from child to parent
          </li>
          <li>
            <strong>Capturing:</strong> Event goes from parent to child
          </li>
        </ul>

        <pre>
          {`// Bubbling (default)
onClick={handleClick}

// Capturing
onClickCapture={handleClick}`}
        </pre>

        <h2>Event Pooling (Removed)</h2>
        <p>
          Older versions of React reused event objects. This was called{" "}
          <strong>event pooling</strong>.
        </p>

        <ul>
          <li>Event object was cleared after use</li>
          <li>Caused confusion in async code</li>
        </ul>

        <p>
          ✅ From React 17+, <strong>event pooling is removed</strong>. You can
          safely use events asynchronously now.
        </p>

        <h2>How ReactDOM Commits Changes</h2>
        <p>
          After React finishes calculating updates, ReactDOM applies them in the{" "}
          <strong>commit phase</strong>.
        </p>

        <ul>
          <li>Updates text</li>
          <li>Adds or removes elements</li>
          <li>Updates attributes</li>
          <li>Attaches event listeners</li>
        </ul>

        <h2>Simple Mental Model</h2>
        <pre>
          {`React → Thinks
ReactDOM → Touches Browser
Browser → Renders UI`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            role of ReactDOM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> ReactDOM
            connects React with the browser and updates the real DOM.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            synthetic events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Synthetic
            events are React’s wrapper around native browser events for
            consistency and performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does event
            delegation work in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React attaches
            events at the root and handles them as they bubble up.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does React
            update the entire DOM?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, React
            updates only the parts that changed.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happened
            to event pooling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Event pooling
            was removed in React 17+, making events safe for async usage.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>ReactDOM is the bridge between React and browser DOM</li>
          <li>React updates only changed parts of the DOM</li>
          <li>Synthetic events provide consistency</li>
          <li>Event delegation improves performance</li>
          <li>Event pooling is no longer used</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 149,
    title: "React Reconciliation Algorithm",
    path: "/frontend/react-reconciliation",
    explanation: (
      <>
        <p>
          <strong>React Reconciliation</strong> is the process React uses to
          decide
          <strong>what exactly needs to change</strong> in the UI when state or
          props change.
        </p>

        <p>
          Instead of updating everything, React compares the
          <strong>old Virtual DOM</strong> with the
          <strong>new Virtual DOM</strong> and updates only the differences.
        </p>

        <h2>Why Reconciliation Is Needed</h2>
        <ul>
          <li>Updating the real DOM is slow</li>
          <li>React wants to change as little as possible</li>
          <li>So React first compares Virtual DOM trees</li>
        </ul>

        <h2>Simple Meaning</h2>
        <pre>
          {`Old Virtual DOM
        vs
New Virtual DOM
        ↓
Find what changed
        ↓
Update only those parts`}
        </pre>

        <h2>How React Compares Elements</h2>
        <p>React compares elements in a very simple way:</p>

        <ul>
          <li>
            If element <strong>type is same</strong> → reuse the node
          </li>
          <li>
            If element <strong>type is different</strong> → remove old, create
            new
          </li>
        </ul>

        <pre>
          {`<div> → <div>   ✅ reuse
<div> → <span> ❌ recreate`}
        </pre>

        <h2>Child Reconciliation (Lists)</h2>
        <p>
          When React compares lists (like arrays of elements), it checks them{" "}
          <strong>one by one</strong>.
        </p>

        <ul>
          <li>Compares children from top to bottom</li>
          <li>Assumes items stay in same order</li>
          <li>
            Uses <strong>keys</strong> to track items
          </li>
        </ul>

        <h2>Role of Keys (Very Important)</h2>
        <p>
          <strong>Keys</strong> help React identify which item changed, was
          added, or was removed.
        </p>

        <pre>
          {`items.map(item =>
  <li key={item.id}>{item.name}</li>
)`}
        </pre>

        <h3>Without Keys</h3>
        <ul>
          <li>React may recreate wrong elements</li>
          <li>Input values can reset</li>
          <li>Performance becomes worse</li>
        </ul>

        <h3>With Keys</h3>
        <ul>
          <li>React reuses correct elements</li>
          <li>Better performance</li>
          <li>Stable UI behavior</li>
        </ul>

        <h2>Tree Diffing (Big Picture)</h2>
        <p>
          React treats the UI as a <strong>tree</strong>.
        </p>

        <ul>
          <li>Compares parent first</li>
          <li>Then compares children</li>
          <li>If parent changes → children are checked again</li>
        </ul>

        <h2>What React Can Do With a Node</h2>
        <ul>
          <li>
            <strong>Reuse:</strong> Same element, only update props
          </li>
          <li>
            <strong>Recreate:</strong> Different element type
          </li>
          <li>
            <strong>Delete:</strong> Element removed from UI
          </li>
        </ul>

        <h2>Important Rules React Follows</h2>
        <ul>
          <li>Same type → reuse</li>
          <li>Different type → destroy & rebuild</li>
          <li>Keys guide list comparison</li>
          <li>Comparison is fast, not perfect</li>
        </ul>

        <h2>Why React Diffing Is Fast</h2>
        <ul>
          <li>O(n) comparison instead of expensive deep checks</li>
          <li>Makes assumptions to stay fast</li>
          <li>Trades perfection for speed</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            reconciliation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It is the
            process React uses to compare old and new Virtual DOM trees and
            update only the changed parts.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are keys
            important in React lists?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Keys help
            React identify list items correctly so it can reuse, update, or
            remove them efficiently.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if keys are not used?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React may
            update wrong elements, causing performance issues and UI bugs.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does React do
            deep comparison?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, React uses
            simple rules and assumptions to keep reconciliation fast.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            React recreate a DOM node?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When the
            element type changes, React removes the old node and creates a new
            one.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Reconciliation compares old vs new Virtual DOM</li>
          <li>Only changed parts are updated</li>
          <li>Keys are critical for list updates</li>
          <li>Same type → reuse, different type → recreate</li>
          <li>This process makes React fast and efficient</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 150,
    title: "React Internal Lifecycle (Render → Commit)",
    path: "/frontend/react-internal-lifecycle",
    explanation: (
      <>
        <p>
          <strong>React Internal Lifecycle</strong> describes the steps React
          follows
          <strong>internally</strong> when your UI updates — from thinking about
          changes to actually updating the screen.
        </p>

        <p>
          Whenever <strong>state</strong> or <strong>props</strong> change,
          React goes through two main phases:
          <strong>Render Phase</strong> and <strong>Commit Phase</strong>.
        </p>

        <h2>Big Picture (Simple Flow)</h2>
        <pre>
          {`State / Props change
        ↓
Render Phase (thinking)
        ↓
Commit Phase (doing)
        ↓
Effects run`}
        </pre>

        <h2>1️⃣ Render Phase (Thinking Phase)</h2>
        <p>
          In the <strong>Render Phase</strong>, React decides
          <strong>what should change</strong>.
        </p>

        <ul>
          <li>Calls your function components</li>
          <li>Calculates new Virtual DOM</li>
          <li>Compares old vs new (reconciliation)</li>
          <li>Figures out what needs updating</li>
        </ul>

        <p>
          🚫 <strong>No real DOM changes happen here</strong>
        </p>

        <h3>Important Things About Render Phase</h3>
        <ul>
          <li>Can be paused or restarted (Fiber)</li>
          <li>Must be pure (no DOM changes)</li>
          <li>Runs multiple times if needed</li>
        </ul>

        <h2>2️⃣ Pre-Commit Phase</h2>
        <p>This is a very short step between render and commit.</p>

        <ul>
          <li>React prepares to update the DOM</li>
          <li>Reads layout info if needed</li>
          <li>Rarely visible to developers</li>
        </ul>

        <h2>3️⃣ Commit Phase (Doing Phase)</h2>
        <p>
          In the <strong>Commit Phase</strong>, React
          <strong>updates the real DOM</strong>.
        </p>

        <ul>
          <li>Applies DOM changes</li>
          <li>Adds, updates, or removes elements</li>
          <li>Updates refs</li>
        </ul>

        <p>
          ✅ This phase is <strong>fast</strong> and
          <strong>cannot be paused</strong>.
        </p>

        <h2>Layout Effects (useLayoutEffect)</h2>
        <p>
          After DOM updates but <strong>before the browser paints</strong>,
          React runs <strong>layout effects</strong>.
        </p>

        <ul>
          <li>
            Runs <code>useLayoutEffect</code>
          </li>
          <li>Used for DOM measurements</li>
          <li>Blocks browser painting</li>
        </ul>

        <pre>
          {`useLayoutEffect(() => {
  // read or change layout
}, []);`}
        </pre>

        <h2>Passive Effects (useEffect)</h2>
        <p>
          After the screen is painted, React runs{" "}
          <strong>passive effects</strong>.
        </p>

        <ul>
          <li>
            Runs <code>useEffect</code>
          </li>
          <li>Does not block UI</li>
          <li>Best for data fetching, logging</li>
        </ul>

        <pre>
          {`useEffect(() => {
  // side effects
}, []);`}
        </pre>

        <h2>Effect Cleanup Timing</h2>
        <p>Cleanup functions run:</p>

        <ul>
          <li>Before the effect runs again</li>
          <li>When component unmounts</li>
        </ul>

        <pre>
          {`useEffect(() => {
  return () => {
    // cleanup
  };
}, []);`}
        </pre>

        <h2>Easy Comparison Table</h2>
        <ul>
          <li>
            <strong>Render Phase:</strong> Decide changes
          </li>
          <li>
            <strong>Commit Phase:</strong> Apply changes
          </li>
          <li>
            <strong>useLayoutEffect:</strong> Before paint
          </li>
          <li>
            <strong>useEffect:</strong> After paint
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            in React render phase?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React
            calculates the new Virtual DOM and decides what needs to change,
            without touching the real DOM.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            commit phase?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The phase
            where React updates the real DOM and applies changes to the screen.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can render
            phase be paused?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, React
            Fiber can pause, resume, or restart the render phase.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between useEffect and useLayoutEffect?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            useLayoutEffect runs before paint and blocks UI, while useEffect
            runs after paint without blocking.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            effect cleanup run?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Before the
            effect re-runs and when the component unmounts.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>React updates UI in render → commit steps</li>
          <li>Render phase decides what to change</li>
          <li>Commit phase updates the real DOM</li>
          <li>useLayoutEffect runs before paint</li>
          <li>useEffect runs after paint</li>
          <li>This lifecycle keeps React fast and smooth</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 151,
    title: "React State Update Mechanics",
    path: "/frontend/react-state-mechanics",
    explanation: (
      <>
        <p>
          <strong>React State Update Mechanics</strong> explains
          <strong>what really happens</strong> when you call
          <code> setState </code> or <code> setSomething </code> in React.
        </p>

        <p>
          It covers <strong>when React updates state</strong>,
          <strong>when it re-renders</strong>, and{" "}
          <strong>when it ignores updates</strong>.
        </p>

        <h2>Simple Idea First 🧠</h2>
        <p>
          When state changes, React does <strong>NOT</strong> immediately update
          the screen.
        </p>

        <p>React:</p>

        <ul>
          <li>Collects state updates</li>
          <li>Groups them (batching)</li>
          <li>Then updates UI efficiently</li>
        </ul>

        <h2>1️⃣ What Triggers a Re-render?</h2>
        <p>React re-renders a component when:</p>

        <ul>
          <li>State changes</li>
          <li>Props change</li>
          <li>Parent re-renders</li>
          <li>Context value changes</li>
        </ul>

        <pre>{`setCount(count + 1); // triggers re-render`}</pre>

        <h2>2️⃣ When React IGNORES State Updates</h2>
        <p>
          React skips re-render if the new state is
          <strong>same as old state</strong>.
        </p>

        <pre>
          {`setCount(0);
setCount(0); // ignored`}
        </pre>

        <ul>
          <li>Same value → no UI update</li>
          <li>Helps React stay fast</li>
        </ul>

        <h2>3️⃣ Batching (Very Important)</h2>
        <p>
          <strong>Batching</strong> means React groups multiple state updates
          into one re-render.
        </p>

        <pre>
          {`setCount(1);
setName("A");
setAge(20);
// only ONE re-render`}
        </pre>

        <p>React 18 batches updates:</p>

        <ul>
          <li>Inside events</li>
          <li>Inside promises</li>
          <li>Inside setTimeout</li>
          <li>Inside async code</li>
        </ul>

        <h2>4️⃣ Microtask vs Macrotask (Easy)</h2>
        <p>JavaScript has two main queues:</p>

        <ul>
          <li>
            <strong>Microtask:</strong> Promise, async/await
          </li>
          <li>
            <strong>Macrotask:</strong> setTimeout, setInterval
          </li>
        </ul>

        <p>
          React waits and batches state updates from both queues before
          re-rendering.
        </p>

        <pre>
          {`Promise.resolve().then(() => {
  setCount(1);
  setCount(2);
});
// batched → one render`}
        </pre>

        <h2>5️⃣ Async State Updates</h2>
        <p>
          State updates are <strong>asynchronous</strong>. This means the value
          does NOT change immediately.
        </p>

        <pre>
          {`setCount(count + 1);
console.log(count); // old value`}
        </pre>

        <p>To get correct value, use callback form:</p>

        <pre>{`setCount(prev => prev + 1);`}</pre>

        <h2>6️⃣ Update Priorities</h2>
        <p>
          React assigns <strong>priority</strong> to updates.
        </p>

        <ul>
          <li>
            <strong>High priority:</strong> clicks, typing
          </li>
          <li>
            <strong>Low priority:</strong> background updates
          </li>
        </ul>

        <pre>
          {`startTransition(() => {
  setSearchValue(value);
});`}
        </pre>

        <p>Low-priority updates can be paused if UI is busy.</p>

        <h2>7️⃣ Sync vs Concurrent Updates</h2>
        <ul>
          <li>
            <strong>Sync:</strong> blocks UI, immediate
          </li>
          <li>
            <strong>Concurrent:</strong> interruptible, smooth UI
          </li>
        </ul>

        <p>React 18 uses concurrent updates to prevent freezing.</p>

        <h2>Common Mistake ⚠️</h2>
        <pre>
          {`setCount(count + 1);
setCount(count + 1); // ❌ wrong`}
        </pre>

        <p>Correct way:</p>

        <pre>
          {`setCount(prev => prev + 1);
setCount(prev => prev + 1); // ✅`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is React
            state update async?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To batch
            multiple updates together and improve performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            batching in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Grouping
            multiple state updates into a single re-render.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When does
            React ignore state updates?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When the new
            state value is the same as the previous one.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between sync and concurrent updates?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Sync updates
            block UI, while concurrent updates can pause to keep UI responsive.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            functional state updates?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To always get
            the latest state value when updates are batched.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>State updates are async</li>
          <li>React batches updates for performance</li>
          <li>Same state value → no re-render</li>
          <li>Functional updates prevent bugs</li>
          <li>Concurrent updates keep UI smooth</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 152,
    title: "React Server Components (RSC)",
    path: "/frontend/react-server-components",
    explanation: (
      <>
        <p>
          <strong>React Server Components (RSC)</strong> are React components
          that run <strong>only on the server</strong>, not in the browser.
        </p>

        <p>
          Their main goal is to{" "}
          <strong>send less JavaScript to the browser</strong>
          and make apps <strong>faster</strong>.
        </p>

        <h2>Simple Idea First 🧠</h2>
        <p>Normal React components run in the browser and need JavaScript.</p>

        <p>
          <strong>Server Components:</strong>
        </p>

        <ul>
          <li>Run on the server</li>
          <li>Do not ship JavaScript to the browser</li>
          <li>Send ready UI output to the client</li>
        </ul>

        <h2>1️⃣ What Problem Do RSCs Solve?</h2>
        <ul>
          <li>Large JavaScript bundles</li>
          <li>Slow page load</li>
          <li>Too much work on the browser</li>
        </ul>

        <p>RSCs move heavy work to the server.</p>

        <h2>2️⃣ Zero Client Bundle (Important)</h2>
        <p>Server Components:</p>

        <ul>
          <li>Do NOT include JS in browser bundle</li>
          <li>No event handlers</li>
          <li>No useState or useEffect</li>
        </ul>

        <pre>
          {`// Server Component
export default function Page() {
  const data = fetchDataFromDB(); // server only
  return <h1>{data.title}</h1>;
}`}
        </pre>

        <p>Browser only receives rendered result, not logic.</p>

        <h2>3️⃣ Server vs Client Components</h2>
        <table>
          <tr>
            <th>Server Component</th>
            <th>Client Component</th>
          </tr>
          <tr>
            <td>Runs on server</td>
            <td>Runs in browser</td>
          </tr>
          <tr>
            <td>No JS sent</td>
            <td>JS sent</td>
          </tr>
          <tr>
            <td>Can access DB</td>
            <td>Cannot access DB</td>
          </tr>
          <tr>
            <td>No state or effects</td>
            <td>Can use hooks</td>
          </tr>
        </table>

        <h2>4️⃣ Streaming Server Rendering</h2>
        <p>
          React can send UI in <strong>small pieces (chunks)</strong>.
        </p>

        <ul>
          <li>Fast first paint</li>
          <li>Page loads gradually</li>
          <li>No waiting for everything</li>
        </ul>

        <h2>5️⃣ React Flight Protocol (Easy)</h2>
        <p>
          React uses a special format called
          <strong>Flight Protocol</strong>.
        </p>

        <p>It sends:</p>

        <ul>
          <li>Component structure</li>
          <li>Data references</li>
          <li>Instructions to rebuild UI on client</li>
        </ul>

        <p>This is how server and client stay in sync.</p>

        <h2>6️⃣ How Next.js Uses RSC</h2>
        <p>In Next.js (App Router):</p>

        <ul>
          <li>All components are Server Components by default</li>
          <li>
            Client Components need <code>"use client"</code>
          </li>
          <li>Server handles data fetching</li>
        </ul>

        <pre>
          {`"use client";
export default function Button() {
  return <button>Click</button>;
}`}
        </pre>

        <h2>7️⃣ Why RSCs Reduce Bundle Size</h2>
        <ul>
          <li>No server logic shipped to browser</li>
          <li>Smaller JS files</li>
          <li>Less parsing and execution</li>
        </ul>

        <p>Result → Faster load, better performance.</p>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are React
            Server Components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Components
            that run only on the server and send no JavaScript to the browser.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do RSCs
            reduce bundle size?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because server
            logic is never sent to the client as JavaScript.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can RSCs use
            hooks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, hooks like
            useState and useEffect work only in Client Components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            Flight Protocol?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A protocol
            React uses to send Server Component results to the client.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Next.js implement RSC?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By making
            Server Components default and using "use client" for client-side
            components.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>RSCs run only on server</li>
          <li>No JavaScript sent to browser</li>
          <li>Better performance and smaller bundles</li>
          <li>Next.js uses RSC by default</li>
          <li>Client Components handle interactions</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 153,
    title: "React Suspense Internals",
    path: "/frontend/react-suspense",
    explanation: (
      <>
        <p>
          <strong>React Suspense</strong> is a React feature that lets your app
          <strong>wait for something</strong> (like data or code) before showing
          the UI.
        </p>

        <p>
          While waiting, React shows a <strong>fallback UI</strong>
          (like a loader or spinner).
        </p>

        <h2>Simple Idea First 🧠</h2>
        <p>Imagine a page needs data from a server.</p>

        <ul>
          <li>Data is not ready yet</li>
          <li>Instead of freezing the UI</li>
          <li>React shows a loading screen</li>
        </ul>

        <p>
          This waiting system is called <strong>Suspense</strong>.
        </p>

        <h2>1️⃣ What Is a Suspense Boundary?</h2>
        <p>
          A <strong>Suspense boundary</strong> is an area of your UI where React
          is allowed to wait.
        </p>

        <pre>
          {`<Suspense fallback={<Loading />}>
  <UserProfile />
</Suspense>`}
        </pre>

        <ul>
          <li>
            If <code>UserProfile</code> is ready → show it
          </li>
          <li>
            If not ready → show <code>Loading</code>
          </li>
        </ul>

        <h2>2️⃣ Fallback UI (Very Important)</h2>
        <p>
          <strong>Fallback</strong> is what users see while React is waiting.
        </p>

        <ul>
          <li>Loader</li>
          <li>Spinner</li>
          <li>Skeleton UI</li>
        </ul>

        <p>React never blocks the screen — it always shows something.</p>

        <h2>3️⃣ How React Pauses Rendering</h2>
        <p>When a component needs async data:</p>

        <ul>
          <li>React stops rendering that component</li>
          <li>React jumps to nearest Suspense boundary</li>
          <li>Fallback UI is shown</li>
        </ul>

        <p>This pause is automatic — you don’t manage it manually.</p>

        <h2>4️⃣ Resuming Rendering</h2>
        <p>Once data or code is ready:</p>

        <ul>
          <li>React removes fallback</li>
          <li>Rendering continues</li>
          <li>Final UI appears</li>
        </ul>

        <p>No full re-render, only required parts update.</p>

        <h2>5️⃣ Async Data Handling (Easy)</h2>
        <p>Suspense works when a component:</p>

        <ul>
          <li>Is waiting for async data</li>
          <li>Is lazy loaded</li>
          <li>Throws a Promise internally</li>
        </ul>

        <p>React understands the Promise and waits.</p>

        <h2>6️⃣ Suspense with Lazy Loading</h2>
        <pre>
          {`const Dashboard = React.lazy(() => import('./Dashboard'));

<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>`}
        </pre>

        <ul>
          <li>JS file loads in background</li>
          <li>Fallback shown meanwhile</li>
          <li>UI appears when ready</li>
        </ul>

        <h2>7️⃣ Suspense with Server Components</h2>
        <p>
          With <strong>Server Components</strong>:
        </p>

        <ul>
          <li>Data fetching happens on server</li>
          <li>Suspense streams UI in parts</li>
          <li>Fast first paint</li>
        </ul>

        <p>This creates a smooth loading experience.</p>

        <h2>8️⃣ Why Suspense Is Powerful</h2>
        <ul>
          <li>No manual loading state</li>
          <li>Cleaner code</li>
          <li>Better UX</li>
          <li>Works with streaming & concurrent rendering</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            Suspense?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A React
            feature that lets components wait for async data or code and show a
            fallback UI meanwhile.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            Suspense boundary?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A wrapper
            where React can pause rendering and display fallback content.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            when data is not ready?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React pauses
            rendering and shows the fallback UI.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            rendering resume?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When data/code
            is ready, React removes fallback and continues rendering.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            Suspense work with Server Components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows
            streaming UI from the server while waiting for data.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Suspense lets React wait safely</li>
          <li>Fallback UI prevents blank screens</li>
          <li>Rendering pauses and resumes automatically</li>
          <li>Works with lazy loading and server components</li>
          <li>Improves performance and user experience</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 154,
    title: "React Performance System",
    path: "/frontend/react-performance-internals",
    explanation: (
      <>
        <p>
          <strong>React Performance System</strong> is about making React apps
          <strong>fast, smooth, and efficient</strong> — even when the app
          becomes large.
        </p>

        <p>
          React tries to update only what is needed, but developers must help
          React avoid unnecessary work.
        </p>

        <h2>Simple Idea First 🧠</h2>
        <ul>
          <li>More components = more rendering work</li>
          <li>More rendering = slower UI</li>
          <li>Performance tools help reduce extra renders</li>
        </ul>

        <p>
          React provides special tools to control rendering and keep apps fast.
        </p>

        <h2>1️⃣ Unnecessary Re-renders (Main Problem)</h2>
        <p>A component re-renders when:</p>

        <ul>
          <li>Its state changes</li>
          <li>Its props change</li>
          <li>Its parent re-renders</li>
        </ul>

        <p>
          Sometimes components re-render even when nothing actually changed.
          This wastes time and slows the app.
        </p>

        <h2>2️⃣ React.memo (Render Guard)</h2>
        <p>
          <strong>React.memo</strong> prevents re-rendering if props are the
          same.
        </p>

        <pre>
          {`const Button = React.memo(function Button({ label }) {
  return <button>{label}</button>;
});`}
        </pre>

        <ul>
          <li>
            If <code>label</code> is same → no re-render
          </li>
          <li>
            If <code>label</code> changes → re-render
          </li>
        </ul>

        <p>
          Think of <strong>React.memo</strong> as a "render lock".
        </p>

        <h2>3️⃣ Effect Optimization</h2>
        <p>
          Poorly written <code>useEffect</code> can cause:
        </p>

        <ul>
          <li>Extra API calls</li>
          <li>Infinite loops</li>
          <li>Unnecessary renders</li>
        </ul>

        <pre>
          {`useEffect(() => {
  fetchData();
}, []); // correct dependency`}
        </pre>

        <p>Always use correct dependency arrays.</p>

        <h2>4️⃣ useTransition (Smooth UI)</h2>
        <p>
          <strong>useTransition</strong> tells React: “This update is not
          urgent.”
        </p>

        <pre>
          {`const [isPending, startTransition] = useTransition();

startTransition(() => {
  setList(bigList);
});`}
        </pre>

        <ul>
          <li>Urgent updates run first</li>
          <li>Heavy updates run later</li>
          <li>UI stays responsive</li>
        </ul>

        <h2>5️⃣ useDeferredValue (Delay Heavy Work)</h2>
        <p>
          <strong>useDeferredValue</strong> delays updating expensive values.
        </p>

        <pre>{`const deferredSearch = useDeferredValue(searchText);`}</pre>

        <ul>
          <li>User typing stays fast</li>
          <li>Filtering happens later</li>
          <li>No UI freezing</li>
        </ul>

        <h2>6️⃣ React Profiler (Performance Inspector)</h2>
        <p>
          <strong>React Profiler</strong> helps you see:
        </p>

        <ul>
          <li>Which components re-render</li>
          <li>How long rendering takes</li>
          <li>What causes slow updates</li>
        </ul>

        <p>
          It is available in <strong>React DevTools</strong>.
        </p>

        <h2>7️⃣ Large Component Trees</h2>
        <p>Large trees cause:</p>

        <ul>
          <li>More reconciliation work</li>
          <li>Slower updates</li>
          <li>Higher memory usage</li>
        </ul>

        <p>Optimizations:</p>

        <ul>
          <li>Split components</li>
          <li>Use memoization</li>
          <li>Avoid deep prop drilling</li>
        </ul>

        <h2>8️⃣ How React Handles Performance Internally</h2>
        <ul>
          <li>Skips unchanged components</li>
          <li>Batches state updates</li>
          <li>Uses Fiber scheduling</li>
          <li>Defers low priority updates</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What causes
            unnecessary re-renders?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Parent
            re-renders, unchanged props, incorrect state updates, and bad
            useEffect usage.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            React.memo do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It prevents
            re-rendering if props have not changed.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between useTransition and useDeferredValue?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> useTransition
            marks updates as low priority, while useDeferredValue delays heavy
            value updates.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            Profiler?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A tool to
            measure component render time and find performance issues.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do large
            trees affect performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They increase
            reconciliation work and slow down rendering.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Performance is about avoiding unnecessary work</li>
          <li>React.memo prevents extra renders</li>
          <li>useTransition and useDeferredValue keep UI smooth</li>
          <li>Profiler helps detect slow components</li>
          <li>Optimized trees lead to fast React apps</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 155,
    title: "JSX Compilation Internals",
    path: "/frontend/react-jsx-internals",
    explanation: (
      <>
        <p>
          <strong>JSX Compilation Internals</strong> explain what actually
          happens when you write JSX in React.
        </p>

        <p>
          JSX may look like HTML, but browsers{" "}
          <strong>do not understand JSX</strong>. JSX must be converted into
          normal JavaScript before it can run.
        </p>

        <h2>Simple Idea First 🧠</h2>
        <ul>
          <li>JSX is NOT HTML</li>
          <li>JSX is NOT understood by browsers</li>
          <li>JSX is converted into JavaScript</li>
          <li>This conversion happens before runtime</li>
        </ul>

        <h2>1️⃣ What Is JSX?</h2>
        <p>
          JSX is a syntax that lets you write UI code that looks like HTML
          inside JavaScript.
        </p>

        <pre>{`const element = <h1>Hello World</h1>;`}</pre>

        <p>Even though it looks like HTML, it is just a syntax shortcut.</p>

        <h2>2️⃣ Who Converts JSX?</h2>
        <p>
          JSX is converted by <strong>Babel</strong>.
        </p>

        <ul>
          <li>Babel is a JavaScript compiler</li>
          <li>It runs during build time</li>
          <li>It converts JSX into normal JavaScript</li>
        </ul>

        <p>Browsers never see JSX — they only see compiled JavaScript.</p>

        <h2>3️⃣ JSX → React.createElement()</h2>
        <p>This JSX:</p>

        <pre>{`<h1>Hello</h1>`}</pre>

        <p>Is converted into:</p>

        <pre>{`React.createElement("h1", null, "Hello")`}</pre>

        <p>
          So JSX is just a friendly way to write{" "}
          <code>React.createElement</code>.
        </p>

        <h2>4️⃣ What Is React.createElement()?</h2>
        <p>
          <strong>React.createElement()</strong> creates a plain JavaScript
          object.
        </p>

        <pre>
          {`{
  type: "h1",
  props: {
    children: "Hello"
  }
}`}
        </pre>

        <ul>
          <li>This is NOT real DOM</li>
          <li>This is a virtual description</li>
          <li>This object becomes part of Virtual DOM</li>
        </ul>

        <h2>5️⃣ JSX with Props</h2>
        <pre>{`<Button text="Click me" />`}</pre>

        <p>Compiles to:</p>

        <pre>{`React.createElement(Button, { text: "Click me" })`}</pre>

        <p>
          JSX attributes become the <code>props</code> object.
        </p>

        <h2>6️⃣ JSX with Children</h2>
        <pre>
          {`<div>
  <h1>Hello</h1>
  <p>World</p>
</div>`}
        </pre>

        <p>Becomes nested JavaScript objects:</p>

        <ul>
          <li>Each JSX tag becomes a React element</li>
          <li>
            Children are stored inside <code>props.children</code>
          </li>
        </ul>

        <h2>7️⃣ JSX at Runtime</h2>
        <p>At runtime:</p>

        <ul>
          <li>React reads element objects</li>
          <li>Builds a Virtual DOM tree</li>
          <li>Compares old and new trees</li>
          <li>Updates real DOM efficiently</li>
        </ul>

        <p>
          JSX itself does nothing at runtime — only the compiled objects matter.
        </p>

        <h2>8️⃣ New JSX Transform (React 17+)</h2>
        <p>In newer React versions:</p>

        <ul>
          <li>You don’t need to import React</li>
          <li>Babel uses automatic JSX runtime</li>
          <li>Still compiles to element objects</li>
        </ul>

        <pre>
          {`// No need to import React
const App = () => <h1>Hello</h1>;`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is JSX HTML?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. JSX is
            JavaScript syntax that looks like HTML.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does the
            browser understand JSX?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. JSX is
            compiled to JavaScript before reaching the browser.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What converts
            JSX to JavaScript?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Babel converts
            JSX into React.createElement calls.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            React.createElement return?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A plain
            JavaScript object describing the UI.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Is JSX slower
            than normal JS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. JSX is
            compiled at build time, not runtime.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>JSX is syntax sugar for React.createElement</li>
          <li>Babel compiles JSX to JavaScript</li>
          <li>JSX becomes plain JS objects</li>
          <li>React uses these objects to build Virtual DOM</li>
          <li>JSX itself does nothing at runtime</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 156,
    title: "React Synthetic Event System",
    path: "/frontend/react-event-system",
    explanation: (
      <>
        <p>
          <strong>React Synthetic Event System</strong> is how React handles
          events in a consistent way across all browsers.
        </p>

        <h2>1️⃣ Why React Uses Synthetic Events?</h2>
        <ul>
          <li>Browsers handle events differently.</li>
          <li>React normalizes them so your code works the same everywhere.</li>
          <li>
            Instead of attaching many listeners to each element, React attaches
            one root listener for better performance.
          </li>
        </ul>

        <h2>2️⃣ One Root Listener</h2>
        <ul>
          <li>React attaches a single event listener to the root DOM node.</li>
          <li>All events bubble up to this listener.</li>
          <li>React then calls the corresponding handler you defined.</li>
        </ul>

        <h2>3️⃣ Synthetic Event Wrapper</h2>
        <ul>
          <li>
            React wraps the native browser event in a{" "}
            <strong>SyntheticEvent</strong> object.
          </li>
          <li>
            This wrapper has the same API across all browsers (e.g.,
            `preventDefault()`, `stopPropagation()`).
          </li>
          <li>It helps avoid browser inconsistencies.</li>
        </ul>

        <h2>4️⃣ Event Bubbling & Capturing</h2>
        <ul>
          <li>React supports both bubbling (default) and capturing phases.</li>
          <li>
            You can control event propagation just like native DOM events.
          </li>
        </ul>

        <h2>5️⃣ Event Pooling (Removed)</h2>
        <ul>
          <li>
            Older React versions reused event objects to improve performance
            (event pooling).
          </li>
          <li>
            Now, React removed pooling for simpler debugging and async code
            safety.
          </li>
        </ul>

        <h2>Basic Example – Click Event</h2>
        <pre>
          {`function handleClick(event) {
  event.preventDefault();
  console.log('Button clicked!', event.type);
}

<button onClick={handleClick}>Click Me</button>`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why does React
            use a synthetic event system?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To provide a
            consistent API across all browsers and improve performance by using
            one root listener.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            SyntheticEvent?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It’s a wrapper
            around the native browser event with a normalized API for React.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does React
            attach event listeners?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React attaches
            a single listener to the root node and delegates events to the
            appropriate handlers.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Does React
            support event capturing and bubbling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, React
            supports both, similar to native DOM events.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why was event
            pooling removed in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To simplify
            debugging and avoid issues in async code where events might be
            reused unexpectedly.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>React wraps native events in SyntheticEvent objects.</li>
          <li>One root listener handles all events for performance.</li>
          <li>SyntheticEvent normalizes browser differences.</li>
          <li>Supports capturing and bubbling phases.</li>
          <li>Event pooling was removed for safety and simplicity.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 157,
    title: "React Error Boundaries Internals",
    path: "/frontend/react-error-boundaries",
    explanation: (
      <>
        <p>
          <strong>React Error Boundaries</strong> are special components that
          catch JavaScript errors during rendering, in lifecycle methods, and in
          constructors of the whole tree below them.
        </p>

        <h2>1️⃣ Why Error Boundaries Exist</h2>
        <ul>
          <li>Normally, errors in a component break the entire React tree.</li>
          <li>
            Error boundaries let parts of your app fail gracefully without
            crashing everything.
          </li>
          <li>They help show fallback UI instead of a blank screen.</li>
        </ul>

        <h2>2️⃣ What Error Boundaries Can Catch</h2>
        <ul>
          <li>Errors during rendering of components</li>
          <li>Errors in constructors of class components</li>
          <li>
            Errors in lifecycle methods like componentDidMount or
            componentDidUpdate
          </li>
        </ul>

        <h2>3️⃣ What They Cannot Catch</h2>
        <ul>
          <li>Errors inside event handlers (use try/catch there)</li>
          <li>Errors in async code like setTimeout, Promises, or fetch</li>
          <li>
            Errors in the error boundary itself (it won’t catch its own errors)
          </li>
          <li>Errors in hooks like useEffect or useState</li>
        </ul>

        <h2>4️⃣ How React Recovers</h2>
        <ul>
          <li>
            React replaces the failed subtree with the fallback UI defined in
            the boundary.
          </li>
          <li>
            Other parts of the component tree remain intact and continue
            working.
          </li>
          <li>
            Internal propagation ensures the error moves up to the nearest
            boundary.
          </li>
        </ul>

        <h2>Basic Example – Error Boundary</h2>
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
    console.log('Error info:', info);
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

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are React
            Error Boundaries?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Components
            that catch render-time errors in their child tree and show fallback
            UI without crashing the whole app.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can hooks or
            event handlers catch errors with error boundaries?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. Hooks,
            effects, and event handlers need their own try/catch or error
            handling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            to the component tree when an error is caught?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The failed
            subtree is replaced with fallback UI, but the rest of the tree
            continues working.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Which
            lifecycle methods help catch errors?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            getDerivedStateFromError and componentDidCatch in class components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can an Error
            Boundary catch its own errors?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, it cannot
            catch errors inside itself.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            React Error Boundaries catch render-time errors in child components.
          </li>
          <li>
            They show fallback UI and prevent the entire app from crashing.
          </li>
          <li>
            Hooks, async code, and event handlers are not caught by error
            boundaries.
          </li>
          <li>
            React propagates errors to the nearest boundary for graceful
            recovery.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 158,
    title: "React Context API Internals",
    path: "/frontend/react-context-internals",
    explanation: (
      <>
        <p>
          <strong>React Context API</strong> allows passing data through the
          component tree without manually passing props at every level. It’s
          useful for global state like themes, auth info, or settings.
        </p>

        <h2>1️⃣ How Context Works Internally</h2>
        <ul>
          <li>
            The <strong>Provider</strong> stores the current context value.
          </li>
          <li>
            Any <strong>Consumer</strong> or <code>useContext</code> hook reads
            the nearest Provider above it in the tree.
          </li>
          <li>
            When the Provider value changes, React schedules updates for all
            components that consume that context.
          </li>
          <li>
            React checks which Consumers actually need to re-render to avoid
            unnecessary updates.
          </li>
        </ul>

        <h2>2️⃣ How Updates Trigger Re-renders</h2>
        <ul>
          <li>
            Changing the Provider value causes all direct Consumers to
            re-render.
          </li>
          <li>
            If the Consumer is deep in the tree, only the path to it is
            traversed.
          </li>
          <li>
            Using selectors or memoization can prevent components that don’t use
            certain values from re-rendering.
          </li>
          <li>
            Without selectors, changing context may cause the entire subtree to
            render.
          </li>
        </ul>

        <h2>Basic Example – Context Provider & Consumer</h2>
        <pre>
          {`const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme('dark')}>Switch Theme</button>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button>{theme} Mode</button>;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does React
            Context propagate values?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The Provider
            stores the value, and all Consumers or useContext hooks below it
            read from the nearest Provider.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What triggers
            a re-render when using Context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Updating the
            Provider value schedules re-renders for all Consumers that depend on
            it.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can context
            updates cause full tree re-renders?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, if
            components are not memoized or selectors aren’t used, the entire
            subtree consuming context may re-render.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            selectors help with Context performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They let
            components pick only the data they need from context, reducing
            unnecessary re-renders.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can useContext
            read from multiple Providers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, you can
            nest multiple Providers, and useContext reads from the nearest one
            in the tree.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            React Context passes data from Provider to Consumers without props.
          </li>
          <li>
            Updating Provider triggers re-renders for all dependent components.
          </li>
          <li>Selecting only needed values reduces unnecessary updates.</li>
          <li>
            Memoization and selectors are key for performance in large trees.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },

  {
    id: 159,
    title: "React Basics & Components",
    path: "/frontend/react-components",
    explanation: (
      <>
        <p>
          <strong>React</strong> is a JavaScript library used to build modern,
          fast, and interactive UIs. It breaks the UI into small, reusable
          <strong> components </strong> that manage their own logic and
          rendering. Components receive data via <strong>props</strong> and
          manage internal information using <strong>state</strong>.
        </p>

        <h2>Functional Components (Modern Standard)</h2>
        <p>
          React now recommends functional components because they are simpler
          and work with Hooks.
        </p>
        <pre>
          {`function Button({ label }) {
  return <button>{label}</button>;
}`}
        </pre>

        <h2>JSX</h2>
        <p>
          <strong>JSX</strong> is a syntax extension that lets you write
          HTML-like code inside JavaScript. Behind the scenes, JSX gets compiled
          to
          <code>React.createElement()</code>.
        </p>

        <pre>{`const element = <h1>Hello, React!</h1>;`}</pre>

        <h2>Key JSX Rules</h2>
        <ul>
          <li>
            Use <strong>className</strong> instead of class.
          </li>
          <li>
            Wrap multiple elements in a single parent or a React fragment.
          </li>
          <li>
            Use curly braces <code>{`{ }`}</code> to embed expressions.
          </li>
          <li>Components must start with capital letters.</li>
        </ul>

        <h2>Props</h2>
        <p>Props allow passing data from parent to child components.</p>
        <pre>
          {`function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

<Greeting name="Aman" />`}
        </pre>

        <h2>Why React uses Virtual DOM?</h2>
        <ul>
          <li>Minimizes costly real DOM updates.</li>
          <li>
            Uses an efficient diffing algorithm to update only what changes.
          </li>
          <li>Improves performance in large, frequently updated UIs.</li>
          <li>Allows React to batch updates for smoother UI rendering.</li>
        </ul>

        <h2>Component Reusability & Composition</h2>
        <p>
          React encourages building small, independent components and combining
          them.
        </p>
        <pre>
          {`function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

<Card title="Profile">
  <p>User details go here.</p>
</Card>`}
        </pre>

        <h2>Common Interview Tricks</h2>
        <ul>
          <li>
            React components must be <strong>pure functions</strong> of their
            props (same input → same UI).
          </li>
          <li>
            React re-renders a component when its <strong>state</strong> or{" "}
            <strong>props</strong> change.
          </li>
          <li>JSX is not HTML — it's converted to objects before rendering.</li>
          <li>
            Functional components re-render fully, but React optimizes using{" "}
            <code>memo</code>.
          </li>
          <li>
            Keys in lists help React identify changed items — always use a
            stable <strong>unique ID</strong>, not array index.
          </li>
        </ul>

        <h2>Advantages of React Components</h2>
        <ul>
          <li>Reusability: Write once → use anywhere.</li>
          <li>Maintainability: Clear separation of UI pieces.</li>
          <li>Predictability: UI depends only on state + props.</li>
          <li>Testability: Small components are easy to test.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Virtual DOM and why use it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Virtual DOM is an in-memory representation of the real DOM; React
            updates only the changed parts for better performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why JSX is
            used?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            JSX lets you write HTML-like syntax in JS, easier to read and
            transpiled to React.createElement calls.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Functional
            components vs class components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Functional: simpler, use Hooks, no `this`; Class: stateful,
            lifecycle methods, more verbose.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            Hooks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Functions like `useState`, `useEffect` to manage state and
            side-effects in functional components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> useState vs
            useReducer?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            useState: simple state; useReducer: complex state logic or multiple
            sub-values.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            useEffect and its common use-cases?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Runs side-effects like fetching API, subscriptions; can mimic
            componentDidMount/Update/Unmount.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is React
            Context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Provides global state to components without prop-drilling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does React
            handle events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Synthetic events wrap native events for cross-browser consistency;
            use camelCase handlers (onClick).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between controlled vs uncontrolled components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Controlled: React state drives input; Uncontrolled: DOM handles
            value (ref needed).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            memoization (React.memo, useMemo)?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Prevents unnecessary re-renders by caching results or components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            key prop and why is it important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Unique identifier for list items; helps React track and efficiently
            update elements.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            portals in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Render children into a DOM node outside the parent component
            hierarchy.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is error
            boundary?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Class component that catches JS errors in child components to
            prevent crashing the app.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            reconciliation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            React compares Virtual DOM with real DOM and updates only changed
            parts efficiently.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 160,
    title: "React Lifecycle & useEffect",
    path: "/frontend/react-lifecycle",
    explanation: (
      <>
        <p>
          React components go through a <strong>lifecycle</strong>. In
          functional components, lifecycle behavior is handled using the
          <strong> useEffect </strong> Hook. It is used for{" "}
          <strong>side effects</strong> like: fetching data, timers, event
          listeners, subscriptions, updating document title, or manual DOM
          manipulation.
        </p>

        <h2>useEffect Syntax</h2>
        <pre>
          {`useEffect(() => {
  // Side-effect code

  return () => {
    // Optional cleanup code
  };
}, [dependencies]);`}
        </pre>

        <h2>Lifecycle Breakdown</h2>
        <p>
          With <strong>useEffect</strong>, React lifecycle maps like this:
        </p>
        <ul>
          <li>
            <strong>Mount:</strong> This phase occurs when the component is
            rendered for the very first time. If <strong>useEffect</strong> has
            an empty dependency array <code>[]</code>, it runs only once here.
            Common tasks include fetching initial data, starting timers, or
            setting up subscriptions.
          </li>

          <li>
            <strong>Update:</strong> This phase happens whenever the component
            re-renders due to changes in <strong>state</strong> or{" "}
            <strong>props</strong>. A <code>useEffect</code> with dependencies
            will run each time any listed dependency changes. This is where you
            respond to updated values — like refetching data when an ID changes
            or updating the DOM after state updates.
          </li>

          <li>
            <strong>Unmount:</strong> This phase occurs right before the
            component is removed from the DOM. The cleanup function (returned
            inside <code>useEffect</code>) runs here. It’s used to clear
            intervals, remove event listeners, cancel API requests, or clean up
            subscriptions to prevent memory leaks.
          </li>
        </ul>

        <h2>Dependency Array (Most Important Part)</h2>
        <ul>
          <li>
            <strong>[] Empty array:</strong> Runs once (like{" "}
            <code>componentDidMount</code>).
          </li>
          <li>
            <strong>[deps]:</strong> Runs only when those dependencies change
            (like <code>componentDidUpdate</code>).
          </li>
          <li>
            <strong>No dependency array:</strong> Runs on{" "}
            <strong>every render</strong>.
          </li>
        </ul>

        <h2>Cleanup Function</h2>
        <p>
          Cleanup prevents memory leaks and removes old subscriptions or event
          listeners. React calls cleanup before running the effect again, and
          when the component unmounts.
        </p>

        <pre>
          {`useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize); // cleanup
  };
}, []);`}
        </pre>

        <h2>Common useEffect Use Cases</h2>
        <ul>
          <li>Fetching data from an API</li>
          <li>Adding or removing event listeners</li>
          <li>Updating document title</li>
          <li>Subscribing to services (WebSocket, Firebase, etc.)</li>
          <li>Setting up timers or intervals</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li>
            Forgetting dependencies → causes stale data or missing updates.
          </li>
          <li>
            Adding unnecessary dependencies → creates{" "}
            <strong>infinite re-renders</strong>.
          </li>
          <li>Doing DOM manipulation without cleanup → memory leaks.</li>
          <li>
            Using async directly inside useEffect callback → bad practice.
          </li>
        </ul>

        <h2>Correct way to use async in useEffect</h2>
        <pre>
          {`useEffect(() => {
  async function fetchData() {
    const res = await fetch("/api/users");
    console.log(await res.json());
  }
  fetchData();
}, []);`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            main phases of React lifecycle?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            1. <strong>Mounting:</strong> Component is created and inserted into
            DOM. <br />
            2. <strong>Updating:</strong> Component re-renders due to
            state/props changes. <br />
            3. <strong>Unmounting:</strong> Component is removed from the DOM.{" "}
            <br />
            4. <strong>Error Handling:</strong> Handles errors during rendering,
            lifecycle methods, or constructors.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Mounting phase
            methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>constructor()</code>,{" "}
            <code>static getDerivedStateFromProps()</code>,{" "}
            <code>render()</code>, <code>componentDidMount()</code>
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Updating phase
            methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>static getDerivedStateFromProps()</code>,{" "}
            <code>shouldComponentUpdate()</code>, <code>render()</code>,{" "}
            <code>getSnapshotBeforeUpdate()</code>,{" "}
            <code>componentDidUpdate()</code>
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Unmounting
            phase method?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>componentWillUnmount()</code>
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            useEffect replace lifecycle methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <ul style={{ marginTop: "5px" }}>
              <li>
                <strong>componentDidMount:</strong> useEffect with empty
                dependency array (<code>[]</code>).
              </li>
              <li>
                <strong>componentDidUpdate:</strong> useEffect with dependencies
                (<code>[dep]</code>).
              </li>
              <li>
                <strong>componentWillUnmount:</strong> useEffect cleanup
                function (<code>return () =&gt;</code>).
              </li>
            </ul>
            <strong>Note:</strong> Dependency array controls when effect runs;
            missing/wrong deps → infinite loops.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between Mounting & Updating?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Mounting
            happens once (first render), updating happens on props/state
            changes.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Error
            boundaries?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Components
            with <code>componentDidCatch(error, info)</code> handle rendering
            errors in children.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 161,
    title: "React State & useState",
    path: "/frontend/usestate",
    explanation: (
      <>
        <p>
          In React, <strong>state</strong> store the components data that can
          change over time. When state updates, React automatically re-renders
          the component to reflect the new values. The <strong>useState</strong>{" "}
          hook provides a simple way for functional components to manage state.
        </p>

        <h2>Why State Matters</h2>
        <ul>
          <li>
            Enables UI to update in real time when users click, type, toggle, or
            interact with the component.
          </li>
          <li>
            Encapsulates data within a component, making each component
            responsible for its own logic and behavior.
          </li>
          <li>
            Triggers a re-render whenever the state changes, allowing React to
            keep the UI consistent with the underlying data.
          </li>
        </ul>

        <h2>Basic Usage</h2>
        <pre>
          {`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment
</button>`}
        </pre>
        <p>
          Here, <code>count</code> holds the current value, and{" "}
          <code>setCount</code> is the function that updates it. Calling{" "}
          <code>setCount</code> causes React to schedule a re-render with the
          updated value.
        </p>

        <h2>Lifting State Up</h2>
        <p>
          If multiple components need the same data (e.g., a parent and child),
          the state should be moved to their nearest common parent. This
          prevents having multiple copies of the same data and keeps the UI
          consistent.
        </p>
        <p>
          Example: A parent holds input text state and passes it to two children
          instead of each child holding its own version.
        </p>

        <h2>State Batching & Async Updates</h2>
        <ul>
          <li>
            React batches multiple <code>setState</code> calls in the same event
            to improve performance, applying them together in one re-render.
          </li>
          <li>
            State updates are asynchronous. This means if you call:
            <pre>{`setCount(count + 1); console.log(count);`}</pre>
            The console will still show the old value, because the update hasn't
            been applied yet.
          </li>
          <li>
            To use the latest state when updating repeatedly, use the functional
            form:
            <pre>{`setCount(prev => prev + 1);`}</pre>
          </li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>
            Cleanly encapsulates data so each component manages only what it
            needs.
          </li>
          <li>
            Improves performance via automatic batching of multiple updates.
          </li>
          <li>
            Works perfectly with functional components and hooks, keeping code
            simpler than old class-based state.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is state
            in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> State is a
            component’s local data that determines its behavior and render
            output.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between state and props?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Props are
            read-only and passed from parent; state is mutable and managed
            within the component.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are state
            updates asynchronous?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> React batches
            updates for performance; state may not update immediately after
            calling <code>setState</code> or <code>setCount</code>.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            lifting state up?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Moving state
            to the closest common ancestor so multiple components can share and
            sync data.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            functional update in useState help?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>setCount(prev =&gt; prev + 1)</code> ensures correct state in
            loops or rapid consecutive updates by using the latest value.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can you
            directly modify state?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No, always use{" "}
            <code>setState</code> or <code>setCount</code> to ensure React
            re-renders correctly.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When to use
            state vs props?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use state for
            data that changes within the component; use props to pass data from
            parent to child.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can state be
            an object or array?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes; remember
            to update immutably using spread/rest operators or functional
            updates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 162,
    title: "React Forms & Validation",
    path: "/frontend/react-forms",
    explanation: (
      <>
        <p>
          Forms are essential for user input in web apps. React provides ways to
          handle form state, validate input, manage errors, and optimize
          performance. Understanding how React handles forms is crucial for
          building interactive and maintainable UI.
        </p>

        <h2>Controlled vs Uncontrolled Forms</h2>
        <ul>
          <li>
            <strong>Controlled:</strong> Input values are controlled by React
            state. Every keystroke triggers a re-render. This provides:
            <ul>
              <li>Tight control over input state</li>
              <li>Instant validation (e.g., live error messages)</li>
              <li>Conditional UI updates (disable button, show hints)</li>
              <li>Easier debugging since values live in state</li>
            </ul>
            <p>
              <strong>Use case:</strong> Login forms, signup forms, multi-step
              forms.
            </p>
          </li>

          <li>
            <strong>Uncontrolled:</strong> Input values are stored internally in
            the DOM. You read them using <code>ref</code>. No re-renders on
            typing.
            <ul>
              <li>Faster for huge forms</li>
              <li>Useful with non-React libraries</li>
              <li>No state management needed</li>
            </ul>
            <p>
              <strong>Use case:</strong> Simple forms, file uploads, integration
              with vanilla JS plugins.
            </p>
          </li>
        </ul>

        <h2>Example: Controlled Form</h2>
        <pre>
          {`const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`}
        </pre>

        <p>
          Here, <code>value</code> is always equal to React state. The input can
          never change without calling <code>setName()</code>. This ensures
          clean state-driven UI.
        </p>

        <h2>Form Validation</h2>
        <ul>
          <li>
            <strong>Required fields:</strong> Ensure data isn't empty.
          </li>
          <li>
            <strong>Email pattern:</strong> Use RegEx or HTML{" "}
            <code>type="email"</code>.
          </li>
          <li>
            <strong>Min/max length:</strong> Useful for usernames, password
            strength.
          </li>
          <li>
            <strong>Custom rules:</strong> Example:
            <ul>
              <li>Password must include uppercase, numbers, special chars.</li>
              <li>Confirm password should match password.</li>
              <li>Phone number must be 10 digits.</li>
            </ul>
          </li>
        </ul>

        <h2>Example: Simple Validation Logic</h2>
        <pre>
          {`if (name.trim() === "") {
  setError("Name is required");
}

if (!email.includes("@")) {
  setError("Invalid email");
}`}
        </pre>

        <h2>Advantages</h2>
        <ul>
          <li>
            <strong>Controlled forms:</strong> Provide powerful control over
            input, validation, UI behavior, and error handling.
          </li>
          <li>
            <strong>Reusability:</strong> You can extract validation logic into
            custom hooks (useForm, useInput).
          </li>
          <li>
            <strong>Error handling:</strong> Error messages show instantly as
            the user types.
          </li>
          <li>
            <strong>Predictable UI:</strong> The source of truth is always React
            state.
          </li>
        </ul>

        <h2>Performance Tips</h2>
        <ul>
          <li>
            Avoid re-renders by wrapping input handlers with{" "}
            <code>useCallback</code> for large forms.
          </li>
          <li>
            Use <code>React.memo</code> for isolating form fields that don't
            need to re-render.
          </li>
          <li>
            Use libraries like <strong>Formik</strong> or{" "}
            <strong>React Hook Form</strong> to handle large, complex forms
            efficiently.
          </li>
          <li>
            For huge forms, prefer <strong>uncontrolled components</strong> +
            <code>ref</code> to improve performance.
          </li>
        </ul>

        <h2>Additional Tips & Best Practices</h2>
        <ul>
          <li>Debounce expensive validations (e.g., API username check).</li>
          <li>Disable submit button until form is valid.</li>
          <li>Show inline error messages near each field.</li>
          <li>Use HTML validations for quick wins (required, minLength).</li>
          <li>
            Avoid validation on every keystroke for heavy logic → validate on
            blur.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            controlled component in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> An input
            element whose value is controlled by React state.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why prefer
            controlled components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Easier to
            manage form data, enforce validation, and sync with state.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            state-driven UI work in forms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Input value
            comes from state; any change updates state → UI re-renders with new
            value.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            handle validation in controlled inputs?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Validate input
            onChange or onBlur and update error state to show messages.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Performance
            optimizations for large forms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use
            debouncing, React.memo, splitting form into smaller components, or
            libraries like React Hook Form for minimal re-renders.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 163,
    title: "React Router & Navigation",
    path: "/frontend/react-router",
    explanation: (
      <>
        <p>
          <strong>React Router</strong> enables navigation in React apps without
          full page reloads, making your app a Single Page Application (SPA). It
          provides features like nested routes, dynamic route parameters,
          protected routes, and programmatic navigation, improving UX and
          maintainability.
        </p>

        <h2>Why React Router?</h2>
        <ul>
          <li>Allows multiple views without reloading the page.</li>
          <li>Keeps UI in sync with URL.</li>
          <li>Supports dynamic and nested routes for organized structure.</li>
          <li>Enables protected routes and authentication flows.</li>
        </ul>

        <h2>Usage & Examples</h2>

        <h3>Nested Routes</h3>
        <p>
          Nesting routes helps create a hierarchy of components and layouts.
          Child routes render inside the parent component.
        </p>
        <pre>
          {`<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
</Route>`}
        </pre>

        <h3>Route Parameters</h3>
        <p>
          Dynamic values in URLs (like user IDs) can be accessed inside
          components via <code>useParams</code>.
        </p>
        <pre>
          {`<Route path="/user/:id" element={<UserProfile />} />
const { id } = useParams(); // Access the dynamic parameter`}
        </pre>

        <h3>Protected Routes</h3>
        <p>
          Prevent users from accessing certain pages if they are not
          authenticated. The <code>Navigate</code> component redirects
          unauthorized users.
        </p>
        <pre>
          {`function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}`}
        </pre>

        <h3>Programmatic Navigation</h3>
        <p>
          Navigate via code instead of clicking links, useful after form
          submissions or conditional redirects.
        </p>
        <pre>
          {`const navigate = useNavigate();
navigate("/home"); // Redirect programmatically`}
        </pre>

        <h3>Query Parameters – useSearchParams</h3>
        <p>
          Query parameters allow you to pass additional data via the URL (like
          filters, search queries).
          <code>useSearchParams</code> helps read and update these query strings
          in a reactive way.
        </p>
        <pre>
          {`import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();

// Read query
const page = searchParams.get("page");

// Update query
setSearchParams({ page: 2, sort: "asc" });`}
        </pre>
        <ul>
          <li>
            <strong>Why:</strong> For pagination, search, and filter features in
            a SPA.
          </li>
          <li>
            <strong>Usage:</strong> Read or update query params without
            reloading the page.
          </li>
          <li>
            <strong>Benefits:</strong> Keeps UI state in the URL, bookmarkable
            and shareable, and syncs state between components.
          </li>
        </ul>

        <h3>Current Location – useLocation</h3>
        <p>
          The <code>useLocation</code> hook gives access to the current URL,
          pathname, search string, and hash. Useful for conditional rendering
          based on URL or detecting route changes.
        </p>
        <pre>
          {`import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname); // "/dashboard"
console.log(location.search);   // "?page=2"
console.log(location.hash);     // "#section1"`}
        </pre>
        <ul>
          <li>
            <strong>Why:</strong> Detect changes in URL or perform actions based
            on the current route.
          </li>
          <li>
            <strong>Usage:</strong> Conditional rendering, breadcrumbs,
            analytics, or triggering side-effects on route changes.
          </li>
          <li>
            <strong>Benefits:</strong> Makes your component aware of URL
            changes, enables dynamic behavior based on location, and works
            seamlessly with SPA navigation.
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>
            Seamless SPA navigation without page reloads improves user
            experience.
          </li>
          <li>
            Supports dynamic routing, route parameters, and nested layouts for
            clean structure.
          </li>
          <li>
            Enables protected routes and role-based access control easily.
          </li>
          <li>
            Programmatic navigation allows flexible, code-driven page
            transitions.
          </li>
          <li>
            Keeps UI state in sync with URL for bookmarking and sharing links.
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Keep nested routes organized to reflect component hierarchy.</li>
          <li>
            Use <code>useParams</code> and <code>useSearchParams</code> for
            dynamic and query data.
          </li>
          <li>
            Wrap authenticated routes in a <code>ProtectedRoute</code>{" "}
            component.
          </li>
          <li>
            Use <code>Outlet</code> in parent components to render child routes.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between nested and flat routes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Nested routes render child components inside parent layout; flat
            routes render separately. Nested helps maintain layout hierarchy.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does{" "}
            <code>useParams</code> work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Returns route
            parameters from the URL (e.g., /user/:id .
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does{" "}
            <code>useNavigate</code> work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Allows
            programmatic navigation (e.g., navigate('/home')).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does{" "}
            <code>useSearchParams</code> work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Access or
            update query parameters in the URL (e.g., ?page=2).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to
            implement protected/authenticated routes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Check auth
            status; redirect unauthenticated users; wrap protected routes with
            auth logic.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When is
            programmatic navigation needed?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> After form
            submission, button clicks, or conditionally redirecting users.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 164,
    title: "API Calls with Axios/Fetch",
    path: "/frontend/axios",
    explanation: (
      <>
        <p>
          Making API calls is crucial in React apps to fetch, send, or update
          data from a backend server or third-party service. You can use the
          built-in <strong>Fetch API</strong> or the popular library{" "}
          <strong>Axios</strong> to handle HTTP requests.
        </p>

        <h2>Why API Calls Matter</h2>
        <ul>
          <li>
            Retrieve dynamic data from backend servers (e.g., users, posts,
            products).
          </li>
          <li>
            Send user input to APIs to create, update, or delete data (CRUD
            operations).
          </li>
          <li>
            Integrate with third-party services like payment gateways (Stripe),
            authentication (Firebase), or external APIs.
          </li>
          <li>Enable reactive UI updates based on server data.</li>
        </ul>

        <h2>Fetch vs Axios</h2>
        <ul>
          <li>
            <strong>Fetch:</strong> Native to browsers, lightweight, but
            requires manual handling of JSON parsing, error checking, and
            headers.
          </li>
          <li>
            <strong>Axios:</strong> Popular library with features like
            interceptors, automatic JSON parsing, cancellation, and simpler
            syntax for error handling.
          </li>
        </ul>

        <h2>Basic Usage Examples</h2>
        <p>
          <strong>Using Fetch:</strong>
        </p>
        <pre>
          {`fetch("https://api.example.com/users")
  .then(res => res.json())      // Convert response to JSON
  .then(data => console.log(data))  // Use the data
  .catch(err => console.error(err));`}
        </pre>

        <p>
          <strong>Using Axios:</strong>
        </p>
        <pre>
          {`import axios from "axios";

axios.get("https://api.example.com/users")
  .then(res => console.log(res.data))  // Axios parses JSON automatically
  .catch(err => console.error(err));`}
        </pre>

        <h2>Advanced Features</h2>
        <ul>
          <li>
            <strong>Interceptors:</strong> Pre-process requests/responses, e.g.,
            attach auth tokens or log errors.
          </li>
          <li>
            <strong>Async/Await:</strong> Modern syntax for writing asynchronous
            code in a readable, synchronous-like style.
          </li>
          <li>
            <strong>Retry Strategies:</strong> Automatically retry failed
            requests, useful for network instability.
          </li>
          <li>
            <strong>Cancellation:</strong> Cancel ongoing requests, which
            prevents memory leaks in React components.
          </li>
        </ul>

        <h2>Why Use Axios?</h2>
        <ul>
          <li>Simplifies syntax with fewer lines of code.</li>
          <li>Automatically handles JSON conversion and HTTP errors.</li>
          <li>Supports interceptors for global request/response handling.</li>
          <li>
            Better suited for large-scale applications requiring advanced
            features.
          </li>
        </ul>

        <h2>Benefits of Fetch</h2>
        <ul>
          <li>No external dependency; built into the browser.</li>
          <li>Lightweight for small projects.</li>
          <li>Works well with modern async/await syntax.</li>
        </ul>

        <h2>Example: Async/Await with Axios</h2>
        <pre>
          {`async function getUsers() {
  try {
    const response = await axios.get("https://api.example.com/users");
    console.log(response.data);  // data is by default use to store the data in axios ** Always
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between Fetch and Axios?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Fetch is
            built-in, uses Promises, needs extra code for JSON/errors; Axios is
            a library, auto-parses JSON, supports interceptors, and cancel
            tokens.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to handle
            errors and cancellations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use try/catch
            with async/await; in Axios, use cancel tokens; in Fetch, use
            AbortController.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            async/await?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Makes
            asynchronous code easier to read and write compared to .then()
            chains.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are Axios
            interceptors used for?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Modify
            requests/responses globally, add headers, handle errors, or perform
            logging before request/response is handled.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 165,
    title: "React Context & State Management",
    path: "/frontend/react-context",
    explanation: (
      <>
        <p>
          <strong>React Context</strong> provides a way to share data across the
          component tree without passing props down manually at every level
          (prop drilling). It is ideal for global state such as themes,
          authentication status, or user information.
        </p>

        <h2>Why Context?</h2>
        <ul>
          <li>
            Avoids <strong>prop drilling</strong> — no need to pass props
            through multiple intermediate components.
          </li>
          <li>Centralizes global state for easier access and management.</li>
          <li>
            Useful when multiple components across different levels need the
            same data.
          </li>
          <li>
            Improves maintainability by keeping shared state in one place.
          </li>
        </ul>

        <h2>Usage Example</h2>
        <p>Step-by-step usage:</p>
        <pre>
          {`// 1. Create a context
const ThemeContext = React.createContext();

// 2. Provide context to component tree
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  <App />
</ThemeContext.Provider>

// 3. Consume context in child component
import { useContext } from 'react';
const { theme, toggleTheme } = useContext(ThemeContext);`}
        </pre>

        <h2>Benefits of Using Context</h2>
        <ul>
          <li>Reduces complexity of prop drilling.</li>
          <li>Provides centralized management of global state.</li>
          <li>Makes code more readable and maintainable.</li>
          <li>Easy access to shared data across many components.</li>
        </ul>

        <h2>Performance Considerations</h2>
        <ul>
          <li>
            Context updates will{" "}
            <strong>re-render all consuming components</strong>.
          </li>
          <li>
            Use <code>React.memo</code> or split context into smaller contexts
            to optimize performance.
          </li>
          <li>
            For frequent updates, consider libraries like Redux or Zustand for
            better control.
          </li>
        </ul>

        <h2>When NOT to Use Context</h2>
        <ul>
          <li>
            If state is local to a single component — no need for Context.
          </li>
          <li>
            If frequent updates occur and may cause unnecessary re-renders,
            Context might be inefficient.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is prop
            drilling and why is it a problem?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Passing props
            through many levels of components; makes code hard to maintain and
            reuse.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use React
            Context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Provides a way
            to share state across multiple components without prop drilling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Advantages of
            Context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Simplifies
            state sharing, improves readability, reduces boilerplate for global
            state.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Performance
            considerations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Context
            re-renders all consuming components on value change; may need
            memoization for heavy components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When to use
            libraries like Redux or Zustand instead of Context?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> For complex
            apps with large or deeply nested state, frequent updates, or
            advanced features like middleware, devtools, or persistence.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 166,
    title: "React Hooks & Custom Hooks",
    path: "/frontend/react-hooks",
    explanation: (
      <>
        <p>
          <strong>React Hooks</strong> allow you to use state, lifecycle
          methods, and other React features in functional components.{" "}
          <strong>Custom Hooks</strong> enable the reuse of logic across
          components without duplicating code.
        </p>

        <h2>Why Hooks?</h2>
        <ul>
          <li>
            Replace class components with cleaner, simpler functional
            components.
          </li>
          <li>
            Encapsulate state, side effects, and lifecycle logic in a
            declarative way.
          </li>
          <li>Improve code reuse and abstraction with custom hooks.</li>
          <li>
            Enhance readability and maintainability by separating concerns.
          </li>
        </ul>

        <h2>Common Built-in Hooks & Usage</h2>
        <ul>
          <li>
            <strong>useState:</strong> Manage component state dynamically.
            <pre>
              {`const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment</button>`}
            </pre>
          </li>
          <li>
            <strong>useEffect:</strong> Handle side effects like API calls,
            subscriptions, or timers.
            <pre>
              {`useEffect(() => {
  console.log("Component mounted or updated");
  return () => console.log("Cleanup on unmount");
}, [dependencies]);`}
            </pre>
          </li>
          <li>
            <strong>useRef:</strong> Access DOM elements or persist values
            across renders without causing re-renders.
            <pre>
              {`const inputRef = useRef();
<input ref={inputRef} />
inputRef.current.focus();`}
            </pre>
          </li>
          <li>
            <strong>useContext:</strong> Access context values without prop
            drilling.
            <pre>{`const { theme } = useContext(ThemeContext);`}</pre>
          </li>
        </ul>

        <h2>Custom Hooks</h2>
        <p>
          Create reusable logic that starts with "use". Great for API calls,
          form handling, or shared functionality.
        </p>
        <pre>
          {`function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);
  return data;
}

// Usage
const users = useFetch("https://api.example.com/users");`}
        </pre>

        <h2>Advantages</h2>
        <ul>
          <li>Promotes code reuse and abstraction of repetitive logic.</li>
          <li>Makes functional components cleaner and easier to maintain.</li>
          <li>
            Encapsulates side effects and shared behavior in a declarative way.
          </li>
          <li>
            Separates concerns and keeps components focused on UI rendering.
          </li>
        </ul>

        <h2>Rules of Hooks</h2>
        <ul>
          <li>
            Call hooks only at the top level of components or other hooks.
          </li>
          <li>
            Never call hooks inside loops, conditions, or nested functions.
          </li>
          <li>
            Name custom hooks with a <strong>use</strong> prefix to follow
            convention.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do hooks
            exist?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To use state
            and lifecycle features in functional components and avoid
            class-based complexity.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Rules of
            hooks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Only call
            hooks at the top level of a component or custom hook; only call from
            React functions (no loops, conditions, or nested functions).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            custom hooks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reusable
            functions that use built-in hooks to encapsulate logic like API
            calls, form handling, or shared state.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Advantages of
            custom hooks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Code reuse,
            cleaner components, easier testing, and separation of concerns.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Real-world
            example?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A `useFetch`
            hook that fetches data and manages loading/error state across
            multiple components.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 167,
    title: "Common Patterns & Best Practices",
    path: "/frontend/common-patterns",
    explanation: (
      <>
        <p>
          Writing clean, maintainable React code is essential for large
          applications. Common patterns and best practices help structure your
          components, improve reusability, and make code scalable.
        </p>

        <h2>Key Patterns</h2>
        <ul>
          <li>
            <strong>Container vs Presentational:</strong>
            <p>
              Presentational components: UI only, no business logic, receive
              data via props.
            </p>
            <p>
              Container components: Handle state, data fetching, and pass data
              to presentational components.
            </p>
          </li>
          <li>
            <strong>Smart vs Dumb Components:</strong>
            <p>
              Smart components handle logic; dumb components handle rendering.
              Similar to container/presentational pattern.
            </p>
          </li>
          <li>
            <strong>Reusable UI Components:</strong>
            <p>
              Create buttons, inputs, modals, cards once and reuse them
              everywhere.
            </p>
          </li>
          <li>
            <strong>Atomic Design:</strong>
            <p>
              Break UI into small "atoms" → combine into molecules → organisms →
              pages → templates.
            </p>
          </li>
        </ul>

        <h2>Why Needed</h2>
        <ul>
          <li>Code becomes maintainable and easy to read.</li>
          <li>Reduces duplicate code and improves consistency.</li>
          <li>Scales well for large teams and projects.</li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>Improved reusability of components.</li>
          <li>Separation of concerns: UI vs logic.</li>
          <li>Better collaboration between developers.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            Container/Presentational pattern?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Container
            (smart) components handle logic and data; Presentational (dumb)
            components focus on UI and props. Keeps components reusable and
            clean.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is Smart
            vs Dumb component?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Smart =
            manages state and side-effects; Dumb = receives props, displays UI,
            no state. Similar to container/presentational.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is Atomic
            Design?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Break UI into
            Atoms (buttons, inputs), Molecules (form groups), Organisms (header,
            footer), Templates, Pages. Promotes consistency and reusability.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why follow
            these patterns?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Makes code
            maintainable, reusable, scalable, and easier to test.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Example from
            projects?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            `UserListContainer` fetches API data; `UserList` displays it.
            `Button` atom used in multiple forms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 168,
    title: "Error Handling & Debugging",
    path: "/frontend/error-handling",
    explanation: (
      <>
        <p>
          Proper error handling ensures your app doesn’t crash unexpectedly, and
          good debugging practices help you identify and fix issues efficiently.
          These skills are crucial for building stable, maintainable React
          applications.
        </p>

        <h2>Key Concepts & Usage</h2>
        <ul>
          <li>
            <strong>Error Boundaries:</strong>
            <p>
              React components that catch JavaScript errors in their child
              component tree.
              <br />
              <strong>Usage:</strong> Wrap components that may throw errors.
            </p>
            <pre>
              {`class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  componentDidCatch(error, info) { console.error(error, info); }
  render() { return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; }
}`}
            </pre>
            <p>
              <strong>Benefit:</strong> Prevents entire app from crashing and
              provides graceful fallback UI.
            </p>
          </li>

          <li>
            <strong>Try/Catch:</strong>
            <p>
              Handle errors in synchronous or asynchronous code.
              <br />
              <strong>Usage:</strong> Wrap risky operations in{" "}
              <code>try/catch</code>.
            </p>
            <pre>
              {`try {
  riskyFunction();
} catch (error) {
  console.error("Error occurred:", error);
}

// Async example
async function fetchData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}`}
            </pre>
            <p>
              <strong>Benefit:</strong> Prevents app from crashing and allows
              proper error handling.
            </p>
          </li>

          <li>
            <strong>Console Debugging:</strong>
            <p>
              Use <code>console.log</code>, <code>console.error</code>,{" "}
              <code>console.warn</code> and browser DevTools breakpoints.
              <br />
              <strong>Usage:</strong> Inspect variables, track component
              renders, or debug event handlers.
            </p>
            <p>
              <strong>Benefit:</strong> Quickly identify issues without stopping
              app execution.
            </p>
          </li>

          <li>
            <strong>Memory Leak Detection:</strong>
            <p>
              Ensure cleanup of subscriptions, timers, and event listeners in{" "}
              <code>useEffect</code>.
              <br />
              <strong>Usage:</strong> Return a cleanup function inside{" "}
              <code>useEffect</code>.
            </p>
            <pre>
              {`useEffect(() => {
  const interval = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(interval); // cleanup to avoid memory leak
}, []);`}
            </pre>
            <p>
              <strong>Benefit:</strong> Prevents performance issues and memory
              leaks in long-running components.
            </p>
          </li>
        </ul>

        <h2>Why Error Handling & Debugging?</h2>
        <ul>
          <li>Improves user experience by preventing unexpected crashes.</li>
          <li>Ensures app stability in production.</li>
          <li>Makes debugging and maintenance faster and more reliable.</li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>
            Catch and handle errors locally without affecting the entire app.
          </li>
          <li>Identify and fix bugs efficiently during development.</li>
          <li>Prevent memory leaks and performance degradation.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are Error
            Boundaries?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Components
            that catch JavaScript errors in child components, log them, and
            display a fallback UI without crashing the app.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to handle
            errors in async operations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use try/catch
            with async/await or .catch() with Promises to handle API or
            asynchronous errors gracefully.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to prevent
            memory leaks?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Clean up
            subscriptions, timers, or event listeners in useEffect’s cleanup
            function or componentWillUnmount.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if a component throws an error?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Without error
            boundaries, the whole React tree can crash. With error boundaries,
            only that subtree fails and a fallback UI is shown.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            debug React components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use React
            DevTools, console logs, breakpoints, and inspect props/state to
            trace issues.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 169,
    title: "Performance Optimization",
    path: "/frontend/performance",
    explanation: (
      <>
        <p>
          Optimizing React apps ensures smooth user experience, faster load
          times, and efficient resource usage. React provides several techniques
          to improve performance and reduce unnecessary computations.
        </p>

        <h2>Key Techniques & Usage</h2>
        <ul>
          <li>
            <strong>React.memo:</strong>
            <p>
              Prevents functional components from re-rendering if props haven’t
              changed.
              <br />
              <strong>Usage:</strong> Wrap the component with{" "}
              <code>React.memo()</code>.
            </p>
            <pre>
              {`const MyComponent = React.memo(function({ data }) {
  console.log("Rendered");
  return <div>{data}</div>;
});`}
            </pre>
            <p>
              <strong>Benefit:</strong> Avoids unnecessary re-renders, improving
              performance for pure components.
            </p>
          </li>

          <li>
            <strong>useCallback:</strong>
            <p>
              Memoizes a function to prevent it from being recreated on every
              render.
              <br />
              <strong>Usage:</strong> Useful when passing functions to child
              components that rely on referential equality.
            </p>
            <pre>
              {`const memoizedFn = useCallback(() => {
  console.log("Clicked");
}, [dependency]);`}
            </pre>
            <p>
              <strong>Benefit:</strong> Prevents child components from
              re-rendering due to function prop changes.
            </p>
          </li>

          <li>
            <strong>useMemo:</strong>
            <p>
              Memoizes the result of an expensive calculation so it only
              recalculates when dependencies change.
              <br />
              <strong>Usage:</strong> Avoid costly computations on every render.
            </p>
            <pre>
              {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
            </pre>
            <p>
              <strong>Benefit:</strong> Saves CPU cycles and enhances
              performance.
            </p>
          </li>

          <li>
            <strong>Lazy Loading:</strong>
            <p>
              Load components or assets only when needed.
              <br />
              <strong>Usage:</strong> Use <code>React.lazy()</code> and{" "}
              <code>Suspense</code>.
            </p>
            <pre>
              {`const LazyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>`}
            </pre>
            <p>
              <strong>Benefit:</strong> Reduces initial bundle size, improves
              perceived load time.
            </p>
          </li>

          <li>
            <strong>Code-Splitting:</strong>
            <p>
              Split large JS bundles into smaller chunks to load only what's
              needed.
              <br />
              <strong>Usage:</strong> Combine with lazy loading or dynamic
              imports.
            </p>
            <pre>
              {`import("./Component").then(module => {
  const DynamicComponent = module.default;
});`}
            </pre>
            <p>
              <strong>Benefit:</strong> Improves initial load performance and
              reduces bandwidth usage.
            </p>
          </li>
        </ul>

        <h2>Why Needed</h2>
        <ul>
          <li>Reduce unnecessary re-renders and improve efficiency.</li>
          <li>
            Faster page load times for users, especially on mobile devices.
          </li>
          <li>Scales well for large React applications with complex UI.</li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>Optimized CPU and memory usage for better performance.</li>
          <li>Improved user experience with smooth interactions.</li>
          <li>Smaller initial bundle size leads to faster loading.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            prevent unnecessary re-renders?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>React.memo</code> to memoize components and prevent re-renders
            when props haven’t changed.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When to use
            useCallback vs useMemo?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <ul style={{ marginTop: "5px" }}>
              <li>
                <code>useCallback(fn, deps)</code> — memoizes a function to
                avoid recreating it on each render.
              </li>
              <li>
                <code>useMemo(valueFn, deps)</code> — memoizes a computed value
                to avoid expensive recalculation.
              </li>
            </ul>
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to
            optimize large lists or components?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use
            virtualization (e.g., react-window), lazy load components, and
            code-splitting with React.lazy and Suspense.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            common causes of slow React apps?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Unnecessary
            re-renders, heavy computations in render, large lists without
            virtualization, and passing new props/objects every render.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 170,
    title: "Testing React Components",
    path: "/frontend/testing",
    explanation: (
      <>
        <p>
          Testing ensures your React components behave as expected. It prevents
          bugs, improves code quality, and gives confidence that changes won’t
          break existing functionality.
        </p>

        <h2>Key Tools & Usage</h2>
        <ul>
          <li>
            <strong>Jest:</strong>
            <p>
              A JavaScript testing framework for running tests and assertions.
              <br />
              <strong>Usage:</strong> Write unit or integration tests, run via{" "}
              <code>jest</code> CLI.
            </p>
            <pre>
              {`// Example: simple Jest test
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});`}
            </pre>
            <p>
              <strong>Benefit:</strong> Fast, widely used, and integrates well
              with React projects.
            </p>
          </li>

          <li>
            <strong>React Testing Library (RTL):</strong>
            <p>
              Tests components like a user would — interacting with buttons,
              inputs, and rendering outputs.
              <br />
              <strong>Usage:</strong> Render component, simulate events, assert
              expected results.
            </p>
            <pre>
              {`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click triggers action', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}
            </pre>
            <p>
              <strong>Benefit:</strong> Tests are closer to real user
              interactions, making them more reliable.
            </p>
          </li>
        </ul>

        <h2>Common Testing Techniques</h2>
        <ul>
          <li>
            <strong>Unit Testing:</strong> Test individual components or
            functions in isolation.
            <br />
            <strong>Usage:</strong> Test a single button, function, or small
            component independently.
            <br />
            <strong>Benefit:</strong> Ensures each component works as intended
            and helps identify bugs early.
          </li>
          <li>
            <strong>Snapshot Testing:</strong> Capture the rendered output of a
            component and compare it during future tests.
            <br />
            <strong>Usage:</strong> Take a snapshot with Jest and check for
            unintended UI changes.
            <pre>
              {`import { render } from '@testing-library/react';
import Button from './Button';
test('renders correctly', () => {
  const { asFragment } = render(<Button label="Click Me" />);
  expect(asFragment()).toMatchSnapshot();
});`}
            </pre>
            <br />
            <strong>Benefit:</strong> Detects unexpected changes in the UI
            quickly.
          </li>
          <li>
            <strong>Mock Functions:</strong> Simulate API calls, props, or
            functions to isolate component behavior.
            <br />
            <strong>Usage:</strong> Use <code>jest.fn()</code> to mock callbacks
            or dependencies.
            <br />
            <strong>Benefit:</strong> Avoids relying on real services, making
            tests faster and more predictable.
          </li>
          <li>
            <strong>API Mocking:</strong> Use tools like <code>msw</code> or{" "}
            <code>jest.mock()</code> to mock network requests.
            <br />
            <strong>Usage:</strong> Mock API responses when testing components
            that fetch data.
            <br />
            <strong>Benefit:</strong> Test components without hitting real
            endpoints, ensuring consistent results.
          </li>
          <li>
            <strong>Integration Testing:</strong> Test multiple components
            together to ensure they work correctly as a group.
            <br />
            <strong>Usage:</strong> Test a form component with inputs,
            validation, and submission together.
            <br />
            <strong>Benefit:</strong> Confirms that components interact properly
            and workflows function as expected.
          </li>
          <li>
            <strong>Regression Testing:</strong> Ensure new code changes don’t
            break existing functionality.
            <br />
            <strong>Usage:</strong> Run a full suite of automated tests after
            every change or deployment.
            <br />
            <strong>Benefit:</strong> Protects existing features, prevents bugs
            from reappearing, and maintains stability.
          </li>
        </ul>

        <h2>Why Needed</h2>
        <ul>
          <li>Prevent bugs from reaching production.</li>
          <li>Make refactoring safer and predictable.</li>
          <li>Increase confidence in code for large, complex apps.</li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>Immediate feedback when something breaks.</li>
          <li>Acts as documentation showing expected behavior.</li>
          <li>Reduces fear of changing code in big projects.</li>
          <li>Helps maintain long-term code quality and stability.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are unit,
            integration, and snapshot tests?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <ul>
              <li>
                <strong>Unit test:</strong> Test a single component or function
                in isolation.
              </li>
              <li>
                <strong>Integration test:</strong> Test multiple components or
                modules working together.
              </li>
              <li>
                <strong>Snapshot test:</strong> Capture rendered output (DOM
                structure) and compare on future renders.
              </li>
            </ul>
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How would you
            test a button click that triggers an API call?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Mock the API using libraries like <code>jest.mock</code> or{" "}
            <code>msw</code>, simulate the click with <code>fireEvent</code> or{" "}
            <code>userEvent</code>, and assert the expected result or state
            change.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Tools commonly
            used for React testing?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Jest for
            testing framework, React Testing Library for component testing, and
            Enzyme (older) for shallow/mount testing.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 171,
    title: "Frontend Build Tools & Bundlers",
    path: "/frontend/build-tools",
    explanation: (
      <>
        <p>
          Build tools and bundlers are essential for preparing frontend code for
          production. They optimize performance, reduce bundle size, and improve
          maintainability.
        </p>

        <h2>Key Tools & Usage</h2>
        <ul>
          <li>
            <strong className="text-success">Webpack:</strong> Bundles
            JavaScript, CSS, images, and other assets into optimized files.
            <br />
            <strong className="text-danger">Usage:</strong> Configure entry
            points, loaders, and plugins to bundle a web application.
            <br />
            <strong className="text-info ">Benefit:</strong> Improves load time,
            supports modular coding, and enables advanced optimizations.
          </li>
          <br />
          <li>
            <strong>Vite:</strong> A fast development server and bundler
            optimized for modern frameworks like React, Vue, and Svelte.
            <br />
            <strong>Usage:</strong> Start dev server with near-instant hot
            reloads and build production bundles.
            <br />
            <strong>Benefit:</strong> Faster builds and better DX compared to
            traditional bundlers.
          </li>
          <br />
          <li>
            <strong>Parcel:</strong> Zero-config bundler that works
            out-of-the-box for most web apps.
            <br />
            <strong>Usage:</strong> Run `parcel index.html` to start development
            server and build production-ready bundles automatically.
            <br />
            <strong>Benefit:</strong> No configuration required, automatic
            handling of JS, CSS, images, and HMR for faster development.
          </li>
          <br />
          <li>
            <strong>Babel:</strong> Transpiles modern JavaScript (ES6+) to older
            versions for browser compatibility.
            <br />
            <strong>Usage:</strong> Convert modern JS features like arrow
            functions, classes, and modules to widely supported JS.
            <br />
            <strong>Benefit:</strong> Ensures code works in all browsers,
            enabling use of latest language features.
          </li>
        </ul>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Tree Shaking:</strong> Removes unused code from the final
            bundle.
            <br />
            <strong>Usage:</strong> Optimize production builds to include only
            code that is actually used.
            <br />
            <strong>Benefit:</strong> Reduces bundle size and improves
            performance.
          </li>
          <br />
          <li>
            <strong>Minification:</strong> Removes spaces, comments, and renames
            variables to reduce file size.
            <br />
            <strong>Usage:</strong> Applied during production build to compress
            JS/CSS files.
            <br />
            <strong>Benefit:</strong> Faster page loads due to smaller assets.
          </li>
          <br />
          <li>
            <strong>Hot Module Replacement (HMR):</strong> Updates modules in
            the browser without a full reload.
            <br />
            <strong>Usage:</strong> During development, edit a component and see
            changes immediately.
            <br />
            <strong>Benefit:</strong> Faster development cycle and better
            developer experience.
          </li>
        </ul>

        <h2>Why Needed</h2>
        <ul>
          <li>Reduce bundle size for faster page loading.</li>
          <li>Use modern JavaScript features safely across browsers.</li>
          <li>Improve developer experience with faster builds and HMR.</li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>Faster development with hot reload.</li>
          <li>Optimized production bundles improve user performance.</li>
          <li>Supports modular code structure and easy asset management.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            bundlers needed?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Combine
            modules, manage dependencies, optimize performance, and prepare code
            for production.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Vite vs
            Webpack — key differences?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Vite: fast dev server, native ES modules, instant HMR. Webpack:
            mature, feature-rich, slower rebuilds, supports complex
            configurations.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is tree
            shaking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Removes unused
            code from the final bundle to reduce size.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            minification?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Removes
            whitespace, comments, and shortens variable names to reduce file
            size.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is Hot
            Module Replacement (HMR)?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Updates
            modules in the browser instantly without a full page reload,
            improving dev experience.
          </li>
        </ul>
      </>
    ),
  },
]
