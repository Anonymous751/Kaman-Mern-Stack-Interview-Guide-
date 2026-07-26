// src/pages/backend/backendTopicsData.js

export const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};

export const backendTopics = [
  {
    id: 1,
    title: "Node.js — Complete Interview Guide",
    path: "/backend/nodeBasics",
    explanation: (
      <>
        <p>
          <strong>Node.js</strong> is a high-performance, event-driven,
          non-blocking JavaScript runtime built on Chrome's V8 engine. It is
          widely used for scalable APIs, real-time apps, microservices,
          streaming, DevOps automation, and backend systems. Interviews focus on
          understanding the event loop, async patterns, performance,
          architecture, modules, security, and API design.
        </p>

        {/* ------------------------------------------------- */}
        {/* 1. Core Concepts */}
        {/* ------------------------------------------------- */}
        <h2>1. Core Node.js Concepts</h2>
        <ul>
          <li>
            <strong>Event Loop:</strong> Handles async operations in phases
            (timers, I/O callbacks, idle, poll, check, close). Enables Node.js
            to manage thousands of concurrent connections.
            <em>Why:</em> Foundation of Node’s async behavior.
            <em>Benefit:</em> High scalability with low overhead.
          </li>

          <li>
            <strong>Non-blocking I/O:</strong> Operations do not block the main
            thread. Uses callbacks, Promises, async/await.
            <em>Why:</em> Avoids slowdowns caused by I/O.
            <em>Benefit:</em> Faster API response under load.
          </li>

          <li>
            <strong>Single Threaded + Libuv:</strong> JS runs on one thread;
            heavy operations handled by thread pool.
            <em>Why:</em> Simpler concurrency model.
            <em>Benefit:</em> Efficient for I/O-heavy apps.
          </li>

          <li>
            <strong>Modules:</strong> CommonJS (`require`) and ES Modules
            (`import`).
            <em>Why:</em> Organized, reusable code.
          </li>

          <li>
            <strong>Streams:</strong> Handle data chunk-by-chunk (e.g., large
            files).
            <em>Why:</em> Memory efficient.
            <em>Benefit:</em> Best for video, audio, logs.
          </li>

          <li>
            <strong>Buffers:</strong> Handle binary data for streams and file
            operations.
          </li>

          <li>
            <strong>Process Object:</strong> Gives access to environment
            variables, arguments, memory usage, PID.
          </li>

          <li>
            <strong>Event Emitter:</strong> Publish/subscribe pattern inside
            apps.
          </li>

          <li>
            <strong>Middleware:</strong> Function executed before request
            response cycle.
            <em>Used in:</em> Express, NestJS.
          </li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 2. Architecture & Scaling */}
        {/* ------------------------------------------------- */}
        <h2>2. Architecture & Scaling</h2>

        <ul>
          <li>
            <strong>Cluster Module:</strong> Creates multiple Node.js processes
            to use all CPU cores.
            <em>Benefit:</em> Better performance under heavy load.
          </li>

          <li>
            <strong>Worker Threads:</strong> Used for heavy CPU tasks (hashing,
            compression).
            <em>Benefit:</em> Prevents blocking the event loop.
          </li>

          <li>
            <strong>Load Balancing:</strong> Use Nginx, PM2, AWS ELB.
          </li>

          <li>
            <strong>Microservices:</strong> Node excellent for distributed,
            decoupled services.
          </li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 3. Node.js APIs & Patterns */}
        {/* ------------------------------------------------- */}
        <h2>3. API Development Concepts</h2>
        <ul>
          <li>
            <strong>REST APIs:</strong> CRUD, validation, routing, controllers.
          </li>

          <li>
            <strong>Middleware:</strong> Logging, CORS, rate limiting.
          </li>

          <li>
            <strong>Error Handling:</strong> Centralized middleware handles
            exceptions.
          </li>

          <li>
            <strong>Authentication:</strong> JWT, OAuth, Sessions, Cookies.
          </li>

          <li>
            <strong>Validation:</strong> joi, zod, express-validator.
          </li>

          <li>
            <strong>Request Lifecycle:</strong> req → middleware → controller →
            service → response.
          </li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 4. Performance Optimization */}
        {/* ------------------------------------------------- */}
        <h2>4. Performance Optimization</h2>
        <ul>
          <li>Use clustering to distribute CPU load.</li>
          <li>Implement caching using Redis.</li>
          <li>Enable Gzip/Brotli compression.</li>
          <li>Use streaming instead of loading entire files.</li>
          <li>Optimize N+1 queries with joins/aggregate.</li>
          <li>Use connection pooling for databases.</li>
          <li>Break monolith into microservices when needed.</li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 5. Security */}
        {/* ------------------------------------------------- */}
        <h2>5. Security in Node.js</h2>
        <ul>
          <li>
            <strong>Helmet:</strong> Secures headers.
          </li>
          <li>
            <strong>Rate Limiting:</strong> Prevent brute force attacks.
          </li>
          <li>
            <strong>Sanitization:</strong> Prevent XSS, SQL injection.
          </li>
          <li>
            <strong>HTTPS:</strong> Always use TLS.
          </li>
          <li>Store env variables using dotenv.</li>
          <li>Hash passwords using bcrypt or argon2.</li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 6. File System & Streams */}
        {/* ------------------------------------------------- */}
        <h2>6. File System, Streams & Buffers</h2>
        <ul>
          <li>Streaming large files using fs.createReadStream.</li>
          <li>
            Piping streams (<code>readStream.pipe(writeStream)</code>).
          </li>
          <li>Using buffers for binary data.</li>
          <li>Asynchronous file read/write.</li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 7. Tooling (Very Common in Interviews) */}
        {/* ------------------------------------------------- */}
        <h2>7. Tooling & Deployment</h2>
        <ul>
          <li>
            <strong>PM2:</strong> Process manager with logging, auto-restart,
            clustering.
          </li>
          <li>
            <strong>Nodemon:</strong> Auto restart during development.
          </li>
          <li>
            <strong>Docker:</strong> Containerize Node.js apps.
          </li>
          <li>
            <strong>CI/CD:</strong> GitHub Actions, Jenkins.
          </li>
          <li>
            <strong>Cloud:</strong> AWS EC2, Lambda, S3.
          </li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 8. Interview Questions */}
        {/* ------------------------------------------------- */}
        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong>Q:</strong> What is the Node.js event loop?
            <br />
            <strong>A:</strong> A mechanism that handles asynchronous operations
            in phases (timers, poll, check, close). It allows Node.js to run
            non-blocking operations on a single thread.
          </li>

          <li>
            <strong>Q:</strong> Difference between process.nextTick() and
            setImmediate()?
            <br />
            <strong>A:</strong> nextTick executes before the next event loop
            cycle. setImmediate executes during the check phase.
          </li>

          <li>
            <strong>Q:</strong> What are streams? Types?
            <br />
            <strong>A:</strong> Streams handle data chunk-by-chunk. Types:
            Readable, Writable, Duplex, Transform.
          </li>

          <li>
            <strong>Q:</strong> When do you use Worker Threads?
            <br />
            <strong>A:</strong> For CPU-heavy tasks (hashing, encryption,
            compression) to avoid blocking the event loop.
          </li>

          <li>
            <strong>Q:</strong> What is middleware in Node.js?
            <br />
            <strong>A:</strong> A function executed before final request
            handling. Used for auth, logging, validation.
          </li>

          <li>
            <strong>Q:</strong> How do you secure a Node.js application?
            <br />
            <strong>A:</strong> Helmet, rate limiting, sanitization, JWT best
            practices, hashing passwords, avoiding eval().
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between synchronous and asynchronous code?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Synchronous code executes **one operation at a time**, blocking
            further execution until the current task completes. Asynchronous
            code allows operations (like I/O, database, timers) to run **in the
            background**, so the main thread is free to continue running other
            code. In Node.js, async patterns use callbacks, Promises, or
            async/await, enabling non-blocking behavior and better performance.
          </li>
        </ul>

        {/* ------------------------------------------------- */}
        {/* 9. Summary */}
        {/* ------------------------------------------------- */}
        <h2>Summary</h2>
        <ul>
          <li>Node.js is fast, scalable, and event-driven.</li>
          <li>Uses non-blocking I/O for high concurrency.</li>
          <li>Event loop + Libuv = heart of performance.</li>
          <li>Streams & buffers help with large data handling.</li>
          <li>
            Security & performance optimization are crucial in interviews.
          </li>
          <li>Strong ecosystem: npm, PM2, Docker, Express, NestJS.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Node.js Core Modules",
    path: "/backend/nodeCore",
    explanation: (
      <>
        <p>
          Node.js comes with built-in <strong>core modules</strong> that
          simplify backend development. These modules provide ready-to-use
          functionalities without installing extra packages.
        </p>

        <ul>
          <li>
            <strong>fs (File System):</strong> Read/write files, directories.
            <em>How:</em> <code>fs.readFile</code>, <code>fs.writeFile</code>.
            <em>Why:</em> Handle data storage.
            <em>Benefit:</em> Efficient file operations asynchronously or
            synchronously.
          </li>
          <li>
            <strong>path:</strong> Work with file and directory paths.
            <em>How:</em> <code>path.join</code>, <code>path.resolve</code>.
            <em>Why:</em> Normalize paths across OS.
            <em>Benefit:</em> Avoids path errors in cross-platform apps.
          </li>
          <li>
            <strong>http:</strong> Create web servers.
            <em>How:</em> <code>http.createServer()</code>.<em>Why:</em> Serve
            requests and responses.
            <em>Benefit:</em> Lightweight server without frameworks.
          </li>
          <li>
            <strong>os:</strong> Get system info (CPU, memory, platform).
            <em>How:</em> <code>os.cpus()</code>, <code>os.totalmem()</code>.
            <em>Why:</em> Optimize app based on host system.
            <em>Benefit:</em> Efficient resource management.
          </li>
          <li>
            <strong>events:</strong> Event-driven programming.
            <em>How:</em> <code>EventEmitter</code>, <code>on/emit</code>.
            <em>Why:</em> Decouple logic and respond to async events.
            <em>Benefit:</em> Cleaner, scalable, maintainable code.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            Node.js core modules?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Built-in
            modules that provide essential functionalities like file handling,
            HTTP, paths, OS info, and events without external libraries.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            read a file asynchronously using fs module?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>fs.readFile('path', 'utf-8', callback)</code>. Node.js reads
            file in the background and executes callback when done.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use path
            module instead of concatenating strings?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Path module
            ensures cross-platform compatibility, normalizes paths, and avoids
            errors with slashes.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Benefits of
            events module?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Decouples
            code, allows async event handling, simplifies building scalable
            applications.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between synchronous and asynchronous fs methods?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Synchronous
            methods block the main thread until completed; asynchronous methods
            run in background and invoke a callback, keeping Node.js responsive.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Node.js core modules provide essential backend functionality
            out-of-the-box.
          </li>
          <li>
            They help in file handling, server creation, path management, OS
            info, and events.
          </li>
          <li>
            Using them correctly improves performance, scalability, and
            maintainability.
          </li>
          <li>
            Essential for interview questions on “how Node.js works” and “why
            use modules”.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Node.js Streams & Buffers",
    path: "/backend/nodeStreams",
    explanation: (
      <>
        <p>
          Node.js <strong>Streams</strong> and <strong>Buffers</strong> allow
          efficient handling of data, especially large files and continuous data
          flows. Streams process data in chunks, not all at once — making
          Node.js ideal for performance-heavy tasks.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Readable Streams:</strong> Streams you can read data from.
            <em>Examples:</em> <code>fs.createReadStream()</code>.
            <em>Benefit:</em> Handles large file reading without loading full
            file in memory.
          </li>

          <li>
            <strong>Writable Streams:</strong> Streams you can write data to.
            <em>Examples:</em> <code>fs.createWriteStream()</code>.
            <em>Benefit:</em> Write massive data chunks without memory overload.
          </li>

          <li>
            <strong>Duplex Streams:</strong> Both readable + writable
            <em>Examples:</em> <code>net.Socket</code>
            <em>Benefit:</em> Used in network communication and sockets.
          </li>

          <li>
            <strong>Transform Streams:</strong> Duplex streams that modify data
            <em>Examples:</em> <code>zlib.createGzip()</code>
            <em>Benefit:</em> Compression, encryption, and data manipulation
            pipelines.
          </li>

          <li>
            <strong>Buffers:</strong> Store raw binary data.
            <em>How:</em> <code>Buffer.from("Hello")</code>.<em>Why:</em> Handle
            binary files, images, streams.
            <em>Benefit:</em> Works directly with memory for high-performance
            tasks.
          </li>

          <li>
            <strong>Piping:</strong> Connect one stream to another.
            <em>Example:</em> <code>readStream.pipe(writeStream)</code>.
            <em>Benefit:</em> Zero-cost data transfer, avoids manual read/write
            loops.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            streams in Node.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Streams allow
            data to be processed in chunks, enabling efficient handling of large
            files and continuous data flow without loading everything into
            memory.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between Readable and Writable streams?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Readable
            streams output data (reading files), while writable streams receive
            data (writing files).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            Buffer in Node.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A Buffer is a
            temporary memory container that holds binary data. It enables
            interaction with raw bytes — crucial for file systems, network
            packets, and streams.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            streaming instead of reading full files?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Streaming
            avoids loading the entire file into memory, improving performance
            and reducing RAM usage especially for GB-sized files.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>pipe()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It connects
            the output of one stream to another, creating a data pipeline with
            zero manual handling.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Streams process data chunk-by-chunk for high performance.</li>
          <li>Buffers store raw binary data for efficient data handling.</li>
          <li>Piping allows automatic flow between streams.</li>
          <li>
            Ideal for large files, network operations, media, and real-time
            processing.
          </li>
          <li>
            Crucial for interview topics like performance optimization & Node.js
            internals.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Node.js Events & EventEmitter",
    path: "/backend/nodeEvents",
    explanation: (
      <>
        <p>
          Node.js is built on an <strong>event-driven architecture</strong>. The{" "}
          <strong>EventEmitter</strong> class allows you to create, emit, and
          listen to custom events, enabling clean asynchronous programming.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>EventEmitter Class:</strong>
            <em>How:</em> <code>const EventEmitter = require('events');</code>
            <em>Why:</em> Provides the core mechanism to manage events in
            Node.js.
            <em>Benefit:</em> Forms the base of async patterns used across Node
            internals.
          </li>

          <li>
            <strong>Listening to Events (on):</strong>
            <em>How:</em> <code>emitter.on('start', callback)</code>
            <em>Why:</em> Execute logic every time an event occurs.
            <em>Benefit:</em> Clean structure for repeated async actions.
          </li>

          <li>
            <strong>Emitting Events (emit):</strong>
            <em>How:</em> <code>emitter.emit('start', data)</code>
            <em>Why:</em> Trigger custom events programmatically.
            <em>Benefit:</em> Decouples logic — event producers don’t need to
            know listeners.
          </li>

          <li>
            <strong>once() Listener:</strong>
            <em>How:</em> <code>emitter.once('init', cb)</code>
            <em>Why:</em> Run logic only once, for one-time setups.
            <em>Benefit:</em> Prevents unnecessary repeated execution.
          </li>

          <li>
            <strong>Removing Listeners:</strong>
            <em>How:</em> <code>emitter.removeListener()</code> or{" "}
            <code>off()</code>
            <em>Why:</em> Avoid memory leaks in long-running apps.
            <em>Benefit:</em> Ensures performance remains stable.
          </li>

          <li>
            <strong>Real Use Cases:</strong>
            <ul>
              <li>
                Why: Handle async lifecycle events (server start, request end)
              </li>
              <li>How: Emit custom events tied to operations</li>
              <li>Benefit: Makes applications modular & testable</li>
            </ul>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            EventEmitter?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A Node.js
            class that lets you create, emit, and listen to events. It powers
            Node's async, event-driven architecture.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use events
            in Node.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Events enable
            non-blocking async operations and help decouple logic, improving
            scalability and code clarity.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between on() and once()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>on()</code> runs every time the event fires;
            <code>once()</code> runs only the first time.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can we send
            data while emitting events?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes.
            <code>emit('event', data)</code> passes data to all listeners.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Where is
            EventEmitter used internally?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Streams, HTTP server (<code>request</code>), file system events,
            process events (<code>exit</code>, <code>uncaughtException</code>).
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            EventEmitter enables event-driven async operations in Node.js.
          </li>
          <li>on(), once(), and emit() are core to building modular logic.</li>
          <li>Used in streams, servers, and internal async operations.</li>
          <li>
            Essential for interviews on Node internals and async architecture.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Asynchronous Patterns in Node.js",
    path: "/backend/asyncPatterns",
    explanation: (
      <>
        <p>
          Node.js is <strong>asynchronous and non-blocking</strong> by design.
          Understanding how Node handles async tasks is essential for writing
          fast, scalable backend applications. These patterns help manage
          operations like database queries, API calls, file reading, timers, and
          background tasks.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Callbacks:</strong>
            <em>What:</em> Functions passed as arguments to be executed later.
            <em>How:</em> <code>fs.readFile(path, (err, data) =&gt; {})</code>
            <em>Why:</em> Foundation of async programming in Node.
            <em>Benefit:</em> Simple but can lead to “callback hell.”
          </li>

          <li>
            <strong>Promises:</strong>
            <em>What:</em> Objects representing future completion/failure of an
            async operation.
            <em>How:</em> <code>doTask().then().catch()</code>
            <em>Why:</em> Avoids nested callbacks.
            <em>Benefit:</em> Clean chaining & clearer error handling.
          </li>

          <li>
            <strong>Async/Await:</strong>
            <em>What:</em> Syntactic sugar over promises.
            <em>How:</em> <code>const result = await asyncTask();</code>
            <em>Why:</em> Makes async code look synchronous.
            <em>Benefit:</em> Highly readable & easy to maintain.
          </li>

          <li>
            <strong>Error Handling:</strong>
            <em>Callback:</em> <code>if (err) return;</code>
            <em>Promise:</em> <code>.catch()</code>
            <em>Async/Await:</em> <code>try/catch</code>
            <em>Why:</em> Prevent silent crashes & ensure reliability.
          </li>

          <li>
            <strong>Avoiding Callback Hell:</strong>
            <em>How:</em>
            <ul>
              <li>Use promises instead of deep-nested callbacks</li>
              <li>Break functions into smaller modules</li>
              <li>Use async/await for linear readable flow</li>
            </ul>
            <em>Benefit:</em> Cleaner, maintainable code structure.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is Node.js
            asynchronous?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To keep the
            single-threaded event loop non-blocking, allowing high performance
            for I/O-heavy tasks.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Callback vs
            Promise?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Callbacks can
            become deeply nested; Promises allow cleaner chaining and built-in
            error handling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What problem
            does async/await solve?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It simplifies
            asynchronous code, making it look synchronous and easier to debug
            and maintain.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            handle errors in async/await?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Wrap code
            inside
            <code>try/catch</code> blocks to catch promise rejections.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            callback hell?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A situation
            where multiple nested callbacks make code unreadable. Solutions
            include promises, async/await, and modular functions.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Node uses async patterns to keep execution fast and non-blocking.
          </li>
          <li>Callbacks → Promises → Async/Await is the evolution path.</li>
          <li>
            Async/Await is the cleanest and most commonly used modern approach.
          </li>
          <li>Error handling is critical for reliability and stability.</li>
          <li>
            Avoid callback hell by using promises, async/await, and modular
            code.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Node.js Process & Cluster",
    path: "/backend/nodeProcess",
    explanation: (
      <>
        <p>
          The <strong>process</strong> object gives information about the
          running Node.js program. The <strong>cluster</strong> module helps
          utilize all CPU cores by running multiple Node processes for better
          performance and scalability.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>process Object</strong>
            <br />
            <em>What:</em> Global object representing the current Node.js
            process.
            <br />
            <em>Why:</em> Access environment data, runtime info, arguments.
            <br />
            <em>How:</em> <code>process.pid</code>, <code>process.env</code>,{" "}
            <code>process.argv</code>
            <br />
            <em>Benefit:</em> Essential for configs, logs, deployment, and
            handling exits.
          </li>

          <li>
            <strong>Environment Variables (process.env)</strong>
            <br />
            <em>Why:</em> Store secrets, config values.
            <br />
            <em>How:</em> <code>process.env.PORT</code>
            <br />
            <em>Benefit:</em> Secure, flexible deployments.
          </li>

          <li>
            <strong>process.exit()</strong>
            <br />
            <em>Why:</em> Close app manually or on errors.
            <br />
            <em>Benefit:</em> Proper shutdown.
          </li>

          <li>
            <strong>Cluster Module</strong>
            <br />
            <em>What:</em> Allows running multiple Node.js processes.
            <br />
            <em>Why:</em> Node is single-threaded → cluster uses all CPU cores.
            <br />
            <em>How:</em>
            <code>cluster.fork()</code> creates worker processes.
            <br />
            <em>Benefit:</em> Improves performance & handles high traffic.
          </li>

          <li>
            <strong>Master & Worker Processes</strong>
            <br />
            <em>Master:</em> Creates workers.
            <br />
            <em>Workers:</em> Handle requests independently.
            <br />
            <em>Benefit:</em> Full CPU utilization + crash isolation.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            process object?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A global
            object giving information and control over the current Node.js
            runtime.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            environment variables in Node.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To store
            config and secrets securely without hardcoding.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use the
            cluster module?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Node is
            single-threaded; cluster enables multi-core performance by running
            multiple worker processes.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            cluster improve scalability?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It spreads
            incoming requests across multiple workers, increasing throughput.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            process gives runtime data, environment variables, and exit control.
          </li>
          <li>
            cluster helps utilize all CPU cores using multiple worker processes.
          </li>
          <li>Essential for scalable, production-ready Node.js apps.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Express Basics",
    path: "/backend/expressBasics",
    explanation: (
      <>
        <p>
          Express is a fast, minimalist <strong>Node.js web framework</strong>{" "}
          used to build APIs and server-side applications. It simplifies
          routing, middleware handling, and request–response management.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>What is Express?</strong>A lightweight framework built on
            top of Node's HTTP module.
            <em>Why:</em> Node’s native HTTP module is low-level.
            <em>How:</em> <code>const express = require('express')</code>
            <em>Benefit:</em> Faster development with built-in routing &
            middleware.
          </li>

          <li>
            <strong>Middleware:</strong>
            Functions that run before your final request handler.
            <em>How:</em> <code>app.use((req, res, next) =&gt; next())</code>
            <em>Why:</em> Logging, authentication, parsing, validation.
            <em>Benefit:</em> Clean, modular request pipelines.
          </li>

          <li>
            <strong>Routing:</strong>
            Defines how your app responds to different URLs.
            <em>How:</em> <code>app.get('/users', handler)</code>
            <em>Why:</em> Organizes endpoints by method & path.
            <em>Benefit:</em> Clear API architecture.
          </li>

          <li>
            <strong>app.use vs app.get</strong>
            <ul>
              <li>
                <strong>app.use:</strong> Runs for all HTTP methods (GET, POST,
                etc).
                <em>Example:</em> <code>app.use('/api', middleware)</code>
                <em>Use:</em> middleware, global handlers.
              </li>
              <li>
                <strong>app.get:</strong> Handles only GET requests.
                <em>Example:</em> <code>app.get('/users', handler)</code>
                <em>Use:</em> fetching data.
              </li>
            </ul>
          </li>

          <li>
            <strong>req & res Objects:</strong>
            <em>req:</em> Incoming request data (headers, body, params).
            <em>res:</em> Used to send response back to client.
            <em>How:</em> <code>res.send()</code>, <code>res.json()</code>,{" "}
            <code>res.status()</code>
            <em>Benefit:</em> Full control of API responses.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Express.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A minimal
            Node.js framework used to build servers and APIs with clean routing
            and middleware support.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            middleware in Express?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Middleware are
            functions that execute before route handlers, used for parsing,
            authentication, logging, and more.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between <code>app.use</code> and <code>app.get</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>app.use</code> applies middleware for all HTTP methods, while
            <code>app.get</code> handles only GET requests.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are req
            and res objects?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>req</code> represents the client request,
            <code>res</code> represents the server response.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            Express over Node's core HTTP module?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Express
            provides built-in routing, middleware, cleaner API design, and
            faster development.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Express simplifies server creation using middleware and routing.
          </li>
          <li>
            <code>app.use</code> is for middleware; <code>app.get</code> is for
            GET routes.
          </li>
          <li>
            req & res are essential for handling requests and sending responses.
          </li>
          <li>Lightweight, fast, and the most popular Node.js framework.</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    title: "Backend Folder Structure (MVC)",
    path: "/backend/folderStructure",
    explanation: (
      <>
        <p>
          A clean backend folder structure is crucial for building scalable,
          maintainable, and production-ready applications. Using
          <strong>MVC (Model–View–Controller)</strong> along with services,
          middlewares, and utils helps separate responsibilities clearly.
        </p>

        <h2>Why Folder Structure Matters?</h2>
        <ul>
          <li>
            <strong>Maintainability:</strong> Code is easy to navigate and
            update.
          </li>
          <li>
            <strong>Scalability:</strong> New features can be added without
            breaking existing ones.
          </li>
          <li>
            <strong>Team Friendly:</strong> Developers instantly understand
            where logic belongs.
          </li>
          <li>
            <strong>Testing:</strong> Each layer can be tested independently.
          </li>
          <li>
            <strong>Production Readiness:</strong> Clean separation avoids bugs
            & duplication.
          </li>
        </ul>

        <h2>Production-Ready Folder Structure</h2>

        <pre>
          {`
project/
│
├── src/
│   ├── config/            # env, DB configs
│   ├── controllers/       # Handle req/res, no business logic
│   ├── services/          # Business logic (heavy work happens here)
│   ├── models/            # Database schemas (Mongo, SQL)
│   ├── routes/            # Route definitions (mapping URL → controller)
│   ├── middlewares/       # Auth, validation, logging
│   ├── utils/             # Helper functions
│   ├── validators/        # Joi / Zod validation schemas
│   ├── constants/         # App constants & enums
│   ├── jobs/              # Cron jobs, background workers
│   ├── libs/              # Third-party integrations (email, S3, JWT)
│   ├── app.js             # Express app initialization
│   └── server.js          # App entry point
│
├── tests/                 # Unit & integration tests
├── .env                   # Environment variables
├── package.json
└── README.md
`}
        </pre>

        <h2>How Each Layer Works</h2>
        <ul>
          <li>
            <strong>Controllers (How?):</strong>
            Receive requests → validate input → call services → send response.
            <em>Why?</em> Keep express logic clean — no business logic.
          </li>

          <li>
            <strong>Services (How?):</strong>
            Perform business logic (DB queries, calculations).
            <em>Why?</em> Reusable across controllers; testable.
          </li>

          <li>
            <strong>Models (How?):</strong>
            Define schemas → map collections/tables.
            <em>Why?</em> Centralized DB structure.
          </li>

          <li>
            <strong>Routes (How?):</strong>
            Map endpoints to controllers.
            <em>Why?</em> Cleaner URL structure, separation from logic.
          </li>

          <li>
            <strong>Middlewares:</strong>
            Auth, rate limiting, validation.
            <em>Why?</em> Reusable logic between request and controller.
          </li>

          <li>
            <strong>Config:</strong>
            DB connection, environment setup.
            <em>Why?</em> Keep credentials & settings isolated.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use an MVC
            architecture?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It separates
            data (Model), UI/API layer (View/Response), and logic (Controller),
            making the code modular, testable, and scalable.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What goes
            inside controllers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Only request
            handling: validation, calling services, sending response. No
            business logic.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why do we use
            services?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To isolate
            business logic from express routes & controllers, improve
            reusability, and make testing easier.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Should routes
            contain business code?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> No. Routes
            only map endpoints to controllers for clean separation.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why separate
            config, utils, and middlewares?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It keeps code
            organized and prevents duplication in large apps.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>MVC improves code clarity and scalability.</li>
          <li>
            Production-ready structure includes controllers, services, models,
            routes, config, utils, and middlewares.
          </li>
          <li>
            Clean folder organization makes backend apps easier to maintain.
          </li>
          <li>Widely asked topic in backend & Express.js interviews.</li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    title: "Middleware (Custom & Built-in)",
    path: "/backend/middleware",
    explanation: (
      <>
        <p>
          Express middleware are functions that run{" "}
          <strong>between the request and the response</strong>. They can modify{" "}
          <code>req</code>, <code>res</code>, run validation, log data,
          authorize users, or handle errors. Everything in Express flows through
          middleware → making it the core of Express apps.
        </p>

        <h2>Why Middleware?</h2>
        <ul>
          <li>
            <strong>Reusability:</strong> Write once, apply everywhere (auth,
            logging, validation).
          </li>
          <li>
            <strong>Clean Architecture:</strong> Separation of concerns → no
            messy route handlers.
          </li>
          <li>
            <strong>Pipeline Control:</strong> Controls request flow using{" "}
            <code>next()</code>.
          </li>
          <li>
            <strong>Centralized Error Handling:</strong> One place to catch all
            errors.
          </li>
        </ul>

        <h2>How Middleware Works?</h2>
        <ul>
          <li>
            Middleware receives:
            <code>(req, res, next)</code>
          </li>
          <li>
            Call <code>next()</code> → move to next function in pipeline.
          </li>
          <li>
            Do not call <code>next()</code> → request stops here (useful for
            auth failures).
          </li>
        </ul>

        <h2>Levels / Types of Middleware</h2>
        <ul>
          <li>
            <strong>1. Application-level Middleware (Global)</strong>
            <br />
            <em>How:</em> <code>app.use()</code>
            <br />
            <em>Why:</em> Apply to every route (logging, CORS, parsing, rate
            limiting).
          </li>

          <li>
            <strong>2. Router-level Middleware</strong>
            <br />
            <em>How:</em> <code>router.use()</code>
            <br />
            <em>Why:</em> Use inside a route group (user routes only, admin
            routes only).
          </li>

          <li>
            <strong>3. Built-in Middleware</strong>
            <br />
            <em>Examples:</em>
            <ul>
              <li>
                <code>express.json()</code> – parse JSON body
              </li>
              <li>
                <code>express.urlencoded()</code> – parse form data
              </li>
              <li>
                <code>express.static()</code> – serve static files
              </li>
            </ul>
          </li>

          <li>
            <strong>4. Third-party Middleware</strong>
            <br />
            <em>Examples:</em>
            <ul>
              <li>
                <code>cors</code> – handle cross-origin requests
              </li>
              <li>
                <code>helmet</code> – security headers
              </li>
              <li>
                <code>morgan</code> – logging
              </li>
              <li>
                <code>express-rate-limit</code> – protect from brute-force
              </li>
            </ul>
          </li>

          <li>
            <strong>5. Custom Middleware</strong>
            <br />
            <em>How:</em>
            <code>(req, res, next) = </code>
            <br />
            <em>Why:</em> Custom logic → validate input, check auth token, etc.
          </li>

          <li>
            <strong>6. Error-Handling Middleware</strong>
            <br />
            <em>How:</em> Must have <code>4 parameters</code>:
            <code>(err, req, res, next)</code>
            <br />
            <em>Why:</em> Capture errors globally → no try/catch everywhere.
          </li>

          <li>
            <strong>7. Asynchronous Middleware (Promise-based)</strong>
            <br />
            Useful for DB operations, external API calls.
            <br />
            <em>How:</em>
            <code>async (req, res, next) = </code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            middleware in Express?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A function
            that runs between request and response, modifying them or
            controlling the flow.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>next()</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It forwards
            the request to the next middleware. Without <code>next()</code>, the
            request stops.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between application-level and router-level middleware?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <em>Application middleware</em> applies everywhere.
            <em>Router middleware</em> applies only on specific route groups.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            error-handling middleware special?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It has 4
            params (<code>err, req, res, next</code>), and Express uses it to
            catch errors.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            common third-party middleware?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>cors</code>,<code>helmet</code>, <code>morgan</code>,{" "}
            <code>rate-limit</code>.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Middleware controls request → response flow in Express.</li>
          <li>
            Types: App-level, Router-level, Built-in, Custom, Third-party,
            Error-handling.
          </li>
          <li>
            <code>next()</code> is essential for moving to next step in
            pipeline.
          </li>
          <li>Middleware makes code modular, scalable, secure, and clean.</li>
        </ul>
      </>
    ),
  },
  {
    id: 10,
    title: "Database Basics (SQL & NoSQL)",
    path: "/backend/databaseBasics",
    explanation: (
      <>
        <p>
          Databases are the backbone of backend systems. They store, retrieve,
          and manage application data. They are primarily divided into
          <strong> SQL (Relational)</strong> and
          <strong> NoSQL (Non-Relational)</strong> depending on structure and
          scalability approach.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>SQL (Relational Databases):</strong>
            <em>Examples:</em> MySQL, PostgreSQL, SQL Server
            <em>Why:</em> Strong consistency, structured schemas
            <em>How:</em> Uses tables, rows, columns, relationships
          </li>

          <li>
            <strong>NoSQL (Non-Relational Databases):</strong>
            <em>Examples:</em> MongoDB, Cassandra, DynamoDB
            <em>Why:</em> High scalability, flexible schemas
            <em>How:</em> Uses documents, key-value pairs, wide-columns, graphs
          </li>

          <li>
            <strong>ACID:</strong> Ensures reliability in SQL
            <em>Atomicity, Consistency, Isolation, Durability</em>
            <em>Why:</em> Safe financial/critical data operations
          </li>

          <li>
            <strong>BASE:</strong> Eventual consistency in NoSQL
            <em>Basically Available, Soft state, Eventually consistent</em>
            <em>Why:</em> Scales horizontally with high availability
          </li>

          <li>
            <strong>Normalization:</strong>
            <em>Why:</em> Reduce duplicates, improve consistency
            <em>How:</em> Applying 1NF, 2NF, 3NF rules
          </li>

          <li>
            <strong>Denormalization:</strong>
            <em>Why:</em> Improve reading speed
            <em>How:</em> Duplicate or combine data strategically
          </li>

          <li>
            <strong>Indexes:</strong>
            <em>Why:</em> Fast query performance
            <em>How:</em> B-Tree, Hash indexes
          </li>

          <li>
            <strong>Joins (SQL):</strong>
            <em>INNER, LEFT, RIGHT, FULL joins</em>
            <em>Why:</em> Retrieve related data from multiple tables
          </li>

          <li>
            <strong>Aggregations:</strong>
            <em>Why:</em> Summaries and analytics
            <em>How:</em> SQL: <code>GROUP BY</code>, <code>SUM()</code>
            NoSQL: <code>aggregate()</code> pipelines in MongoDB
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between SQL and NoSQL?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> SQL is
            relational, structured, and ACID compliant. NoSQL is non-relational,
            flexible, and BASE oriented for large-scale distributed systems.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is ACID
            and why is it important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> ACID ensures
            safe, consistent, and reliable database transactions — essential for
            banking, payments, and sensitive data systems.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When to choose
            NoSQL over SQL?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you need
            high horizontal scalability, flexible schema, or handle massive
            unstructured data (e.g., social media, IoT).
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            database indexes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Indexes speed
            up searches by avoiding full table scans — similar to a book index.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            normalization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Organizing
            tables to reduce redundancy and improve consistency.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>SQL = structured, ACID, relational. Best for consistency.</li>
          <li>
            NoSQL = flexible, scalable, BASE. Best for large distributed
            systems.
          </li>
          <li>
            Indexes, joins, normalization help optimize relational databases.
          </li>
          <li>Aggregations enable analytics and insights.</li>
          <li>
            Choosing SQL vs NoSQL depends on data structure and scaling needs.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 11,
    title: "MongoDB & Mongoose",
    path: "/backend/mongoDB",
    explanation: (
      <>
        <p>
          MongoDB is a <strong>NoSQL document database</strong> that stores data
          as JSON-like documents. Mongoose is an{" "}
          <strong>ODM (Object Data Modeling)</strong> library that provides
          schemas, validation, and structured data modeling for MongoDB.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Schemas:</strong>
            <em>What:</em> Blueprint that defines structure of documents.
            <em>Why:</em> Keeps data consistent.
            <em>How:</em> <code>{`new mongoose.Schema({ name: String })`}</code>
          </li>

          <li>
            <strong>Models:</strong>
            <em>What:</em> A schema wrapped into a model to interact with a
            collection.
            <em>How:</em> <code>mongoose.model("User", userSchema)</code>
            <em>Benefit:</em> CRUD operations become easy.
          </li>

          <li>
            <strong>Validation:</strong>
            <em>What:</em> Built-in & custom rules (required, min, match).
            <em>Why:</em> Prevents invalid data storage at DB level.
            <code>{`{ email: { type: String, required: true } }`}</code>
          </li>

          <li>
            <strong>Timestamps:</strong>
            <em>What:</em> Adds <code>createdAt</code> & <code>updatedAt</code>{" "}
            automatically.
            <code>{`{ timestamps: true }`}</code>
          </li>

          <li>
            <strong>Populate():</strong>
            <em>What:</em> Joins data across collections.
            <em>How:</em> <code>User.find().populate("posts")</code>
            <em>Benefit:</em> Replaces referenced IDs with actual documents.
          </li>

          <li>
            <strong>References (ObjectId):</strong>
            <em>What:</em> Creates relationships in NoSQL.
            <code>{`{ user: { type: ObjectId, ref: "User" } }`}</code>
          </li>

          <li>
            <strong>Aggregation Pipeline:</strong>
            <em>What:</em> Advanced data processing (grouping, filtering,
            lookups).
            <code>{`[{ $match: {} }, { $group: {} }]`}</code>
            <em>Benefit:</em> Faster & complex analytics directly in DB.
          </li>

          <li>
            <strong>Indexes:</strong>
            <em>What:</em> Improves read/query speed.
            <em>How:</em> <code>{`userSchema.index({ email: 1 });`}</code>
            <em>Benefit:</em> Faster search, but slower writes — trade-off.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            Mongoose?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A MongoDB ODM
            that provides schemas, validation, and structured models for
            managing data.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between Schema and Model?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Schema defines
            structure; Model interacts with the collection using that structure.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is
            populate()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A Mongoose
            feature that performs reference-based joins between collections.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When do you
            use Aggregation Pipeline?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> For advanced
            operations like grouping, lookup, sorting, and analytics inside the
            database.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            indexes and why are they used?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Indexes speed
            up queries but slow down inserts/updates — used for query
            performance optimization.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>MongoDB stores flexible JSON-like documents.</li>
          <li>Mongoose gives structure with schemas & models.</li>
          <li>Validation ensures data safety.</li>
          <li>populate() handles relationships between collections.</li>
          <li>Aggregation & indexes boost querying & analytics.</li>
        </ul>
      </>
    ),
  },
  {
    id: 12,
    title: "Mongoose Query Methods",
    path: "/backend/queryMethods",
    explanation: (
      <>
        <p>
          Mongoose provides various <strong>query methods</strong> to interact
          with MongoDB collections. These methods allow you to read, update, and
          delete documents efficiently.
        </p>

        <h2>Common Methods & How to Use</h2>
        <ul>
          <li>
            <strong>find:</strong> Retrieve multiple documents.
            <em>How:</em> <code>{`Model.find({ age: { $gt: 18 } })`}</code>
          </li>

          <li>
            <strong>findOne:</strong> Retrieve a single document.
            <em>How:</em>{" "}
            <code>{`Model.findOne({ email: "test@example.com" })`}</code>
          </li>

          <li>
            <strong>findById:</strong> Find a document by its `_id`.
            <em>How:</em>{" "}
            <code>{`Model.findById("64a12345abc6789def012345")`}</code>
          </li>

          <li>
            <strong>updateOne:</strong> Update a single document.
            <em>How:</em>{" "}
            <code>{`Model.updateOne({ name: "John" }, { $set: { age: 30 } })`}</code>
          </li>

          <li>
            <strong>deleteOne:</strong> Delete a single document.
            <em>How:</em> <code>{`Model.deleteOne({ name: "John" })`}</code>
          </li>

          <li>
            <strong>aggregate:</strong> Perform aggregation operations.
            <em>How:</em>{" "}
            <code>{`Model.aggregate([{ $match: {} }, { $group: { _id: "$field", count: { $sum: 1 } } }])`}</code>
          </li>

          <li>
            <strong>lean():</strong> Returns plain JS objects instead of
            Mongoose documents.
            <em>How:</em> <code>{`Model.find().lean()`}</code>
            <em>Why:</em> Faster for read-only queries and reduces memory
            overhead.
          </li>

          <li>
            <strong>exec():</strong> Executes a query and returns a promise.
            <em>How:</em> <code>{`Model.find().exec()`}</code>
            <em>Why:</em> Allows async/await usage for cleaner asynchronous
            code.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between find() and findOne()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>find()</code> returns an array of documents,{" "}
            <code>findOne()</code> returns a single document.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            lean()?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Returns plain
            JS objects, faster, lower memory usage, ideal for read-only
            operations.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does
            exec() do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Executes a
            query and returns a promise, allowing async/await syntax.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Mongoose query methods provide flexible ways to read, update, and
            delete documents.
          </li>
          <li>
            Use find, findOne, findById for fetching; updateOne, deleteOne for
            modifying data.
          </li>
          <li>Use lean() for performance optimization, exec() for promises.</li>
          <li>
            Understanding these methods is essential for production-ready
            Node.js apps and interviews.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 13,
    title: "SQL Queries & Optimization",
    path: "/backend/sqlQueries",
    explanation: (
      <>
        <p>
          SQL queries are used to interact with relational databases (RDBMS).
          Optimizing queries ensures better performance, lower latency (
          Latency: Time taken for a single request to get a response.
          Concurrency: Ability to handle multiple tasks at the same time. ), and
          efficient use of indexes.
        </p>

        <h2>Common SQL Queries & How to Use</h2>
        <ul>
          <li>
            <strong>Select:</strong> Retrieve data from tables.
            <em>How:</em> <code>{`SELECT * FROM users;`}</code>
          </li>

          <li>
            <strong>Joins:</strong> Combine data from multiple tables.
            <em>How:</em>{" "}
            <code>{`SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;`}</code>
          </li>

          <li>
            <strong>Group By:</strong> Aggregate data based on a column.
            <em>How:</em>{" "}
            <code>{`SELECT department, COUNT(*) FROM employees GROUP BY department;`}</code>
          </li>

          <li>
            <strong>Subqueries:</strong> Nested queries within another query.
            <em>How:</em>{" "}
            <code>{`SELECT name FROM users WHERE id IN (SELECT user_id FROM orders);`}</code>
          </li>

          <li>
            <strong>Indexes:</strong> Speed up data retrieval.
            <em>How:</em>{" "}
            <code>{`CREATE INDEX idx_user_email ON users(email);`}</code>
          </li>

          <li>
            <strong>Transactions:</strong> Execute multiple queries atomically.
            <em>How:</em>{" "}
            <code>{`BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT;`}</code>
          </li>
        </ul>

        <h2>Query Optimization Tips</h2>
        <ul>
          <li>Use indexes for frequently searched columns.</li>
          <li>Avoid SELECT *; fetch only required columns.</li>
          <li>Use JOINs wisely to prevent unnecessary data scanning.</li>
          <li>
            Analyze query execution plan (`EXPLAIN`) to detect bottlenecks.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between INNER JOIN and LEFT JOIN?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> INNER JOIN
            returns matching rows only; LEFT JOIN returns all rows from left
            table plus matching rows from right table.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            transactions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Ensures
            multiple queries execute atomically; prevents partial updates in
            case of failure.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can
            indexes improve performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Indexes allow
            faster data retrieval by avoiding full table scans.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>SQL queries allow structured access to relational databases.</li>
          <li>Joins, group by, subqueries enable complex data manipulation.</li>
          <li>
            Indexes and transactions improve performance and data integrity.
          </li>
          <li>
            Optimizing queries is critical for scalable and efficient
            applications.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 14,
    title: "Caching & Performance",
    path: "/backend/caching",
    explanation: (
      <>
        <p>
          Caching improves application performance by storing frequently
          accessed data in fast storage (memory) to reduce database or API
          calls.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Why caching:</strong> Reduce DB load, speed up response
            time, improve user experience.
          </li>

          <li>
            <strong>Redis basics:</strong> In-memory key-value store for
            caching.
            <em>How:</em> <code>{`SET user:1 '{"name":"John"}'`}</code>,{" "}
            <code>{`GET user:1`}</code>
          </li>

          <li>
            <strong>In-memory vs Persistent Caching:</strong>
            <ul>
              <li>
                In-memory: Fast, but data lost on server restart (e.g., Redis,
                Node memory).
              </li>
              <li>
                Persistent: Stored on disk, survives restart (e.g., Redis with
                AOF/RDB, Memcached with persistence). <br />
                Redis RDB: Periodic snapshots to disk; fast but may lose recent
                data. Redis AOF: Logs every write; more durable, slower than
                RDB. Memcached: In-memory cache; normally no persistence.
                <br />
                RDB (Redis Database snapshots): Saves periodic snapshots of
                Redis data to disk; fast but may lose changes made between
                snapshots.
                <br />
                AOF (Append-Only File): Logs every write operation to disk; more
                durable than RDB, recovers data by replaying the log.
              </li>
            </ul>
          </li>

          <li>
            <strong>Cache Invalidation:</strong> Ensures cached data is fresh.
            <em>How:</em> <code>{`DEL key`}</code> or set TTL:{" "}
            <code>{`SET key value EX 60`}</code>
          </li>

          <li>
            <strong>Reducing DB load:</strong> Cache frequent queries, API
            responses, or computed results to avoid repeated DB hits.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            caching?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To reduce
            latency, decrease DB load, and improve performance.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between in-memory and persistent cache?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> In-memory is
            faster but volatile; persistent survives restarts but slightly
            slower.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is cache
            invalidation?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The process of
            removing or updating stale cache data to keep it fresh.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Caching boosts performance and reduces DB/API load.</li>
          <li>Redis is a common in-memory caching solution.</li>
          <li>
            Use TTL and invalidation strategies to maintain cache freshness.
          </li>
          <li>
            Essential for scalable, high-performance backend applications.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 15,
    title: "Authentication & Authorization",
    path: "/backend/authAuthz",
    explanation: (
      <>
        <p>
          Authentication and authorization are key for securing backend
          applications.
          <strong>Authentication</strong> verifies who the user is, and
          <strong>Authorization</strong> determines what the user can access.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>JWT (JSON Web Tokens):</strong> Token-based authentication.
            <em>How:</em>{" "}
            <code>{`jwt.sign(payload, secret, { expiresIn: '1h' })`}</code>
            <em>Why:</em> Stateless, scalable, easy to use for APIs.
          </li>

          <li>
            <strong>Access vs Refresh Tokens:</strong>
            <em>Access:</em> Short-lived, used for API requests.
            <em>Refresh:</em> Long-lived, used to get new access tokens without
            re-login.
          </li>

          <li>
            <strong>Session-based Auth:</strong> Stores user session on server.
            <em>How:</em> <code>{`req.session.user = { id: userId }`}</code>
            <em>Why:</em> Simple, works for server-rendered apps, but less
            scalable.
          </li>

          <li>
            <strong>RBAC (Role-Based Access Control):</strong> Assign roles with
            specific permissions.
            <em>How:</em>{" "}
            <code>{`if(user.role === 'admin'){ /* allow */ }`}</code>
          </li>

          <li>
            <strong>Permissions:</strong> Fine-grained control per resource or
            action.
            <em>Why:</em> Ensures only authorized users can access/modify
            resources.
          </li>

          <li>
            <strong>Secure Storage:</strong> Store secrets safely (env
            variables, encrypted DB).
            <em>Why:</em> Prevent token leaks, data breaches, and security
            risks.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between authentication and authorization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Authentication
            verifies identity; Authorization controls access to resources.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use JWT
            over sessions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Stateless,
            scalable, ideal for APIs and microservices.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            access and refresh tokens?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Access token
            is short-lived for requests; Refresh token is long-lived to renew
            access token without re-login.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Authentication verifies user identity; authorization controls
            access.
          </li>
          <li>JWT and token strategies are ideal for modern APIs.</li>
          <li>RBAC and permissions enforce fine-grained access control.</li>
          <li>
            Secure storage of secrets and tokens is critical for backend
            security.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 16,
    title: "File Upload & Storage",
    path: "/backend/fileUpload",
    explanation: (
      <>
        <p>
          File uploads are common in backend applications for images, documents,
          or media. Node.js uses libraries like <strong>Multer</strong> for
          handling multipart/form-data.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Multer:</strong> Middleware to handle file uploads.
            <em>How:</em>{" "}
            <code>{`const upload = multer({ dest: 'uploads/' })`}</code>
          </li>

          <li>
            <strong>Single vs Multiple Uploads:</strong>
            <em>Single:</em> <code>{`upload.single('file')`}</code> — one file
            per request.
            <em>Multiple:</em> <code>{`upload.array('files', 5)`}</code> —
            multiple files, max 5.
          </li>

          <li>
            <strong>Storage Engines:</strong> Control where and how files are
            saved.
            <em>How:</em>{" "}
            <code>{`multer.diskStorage({ destination, filename })`}</code>
          </li>

          <li>
            <strong>Cloud Upload:</strong> Store files on cloud services like
            Cloudinary or AWS S3.
            <em>Why:</em> Offloads storage from server, scalable and secure.
          </li>

          <li>
            <strong>GridFS:</strong> Store large files ({">16MB"}) in MongoDB.
            <em>How:</em>{" "}
            <code>{`const bucket = new mongodb.GridFSBucket(db);`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between single and multiple file uploads?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Single handles
            one file per request; multiple handles many files with limit.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use cloud
            storage for uploads?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Scalable,
            reduces server load, secure, accessible from anywhere.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When to use
            GridFS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> For storing
            large files in MongoDB that exceed 16MB.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Multer simplifies handling of file uploads in Node.js.</li>
          <li>
            Use single/multiple uploads and storage engines based on
            requirements.
          </li>
          <li>
            Cloud storage and GridFS provide scalable solutions for large files.
          </li>
          <li>
            Understanding file upload strategies is key for backend scalability
            and reliability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 17,
    title: "Error Handling",
    path: "/backend/errorHandling",
    explanation: (
      <>
        <p>
          Proper error handling ensures applications are robust, maintainable,
          and provide meaningful feedback to clients.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Global Error Handler:</strong> Central place to catch and
            respond to all errors.
            <em>How:</em>{" "}
            <code>{`app.use((err, req, res, next) => { res.status(err.status || 500).json({ message: err.message }); });`}</code>
          </li>

          <li>
            <strong>Try/Catch with Async/Await:</strong> Catch errors in
            asynchronous code.
            <em>How:</em>{" "}
            <code>{`try { await asyncFunc(); } catch (err) { next(err); }`}</code>
          </li>

          <li>
            <strong>Error Middleware:</strong> Middleware specifically for
            handling errors in Express.
            <em>How:</em>{" "}
            <code>{`function errorHandler(err, req, res, next) { res.status(err.status || 500).send(err.message); }`}</code>
          </li>

          <li>
            <strong>HTTP Status Codes:</strong> Communicate type of error to
            client.
            <em>Examples:</em>{" "}
            <code>
              <ul>
                <li>
                  <code>{`200 OK`}</code> – The request was successful and the
                  server returned the requested data.
                </li>
                <li>
                  <code>{`201 Created`}</code> – The request was successful and
                  a new resource was created.
                </li>
                <li>
                  <code>{`400 Bad Request`}</code> – The server could not
                  understand the request due to invalid syntax.
                </li>
                <li>
                  <code>{`401 Unauthorized`}</code> – Authentication is required
                  and has failed or not yet been provided.
                </li>
                <li>
                  <code>{`403 Forbidden`}</code> – The client does not have
                  permission to access this resource.
                </li>
                <li>
                  <code>{`404 Not Found`}</code> – The requested resource could
                  not be found on the server.
                </li>
                <li>
                  <code>{`408 Request Timeout`}</code> – The server timed out
                  waiting for the request.
                </li>
                <li>
                  <code>{`409 Conflict`}</code> – Request could not be completed
                  due to a conflict with the current state of the resource.
                </li>
                <li>
                  <code>{`422 Unprocessable Entity`}</code> – The request was
                  well-formed but contains semantic errors.
                </li>
                <li>
                  <code>{`500 Internal Server Error`}</code> – A generic server
                  error; something went wrong on the server.
                </li>
                <li>
                  <code>{`502 Bad Gateway`}</code> – Server received an invalid
                  response from the upstream server.
                </li>
                <li>
                  <code>{`503 Service Unavailable`}</code> – Server is
                  temporarily unavailable, usually due to overload or
                  maintenance.
                </li>
                <li>
                  <code>{`504 Gateway Timeout`}</code> – The upstream server
                  failed to send a request in time.
                </li>
              </ul>
            </code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to handle
            async errors in Express?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use try/catch
            blocks in async functions and call next(err) to pass errors to error
            middleware.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use a
            global error handler?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Centralizes
            error handling, reduces code duplication, and ensures consistent
            responses.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between 4xx and 5xx status codes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> 4xx indicates
            client errors; 5xx indicates server errors.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Use try/catch with async/await to handle asynchronous errors.</li>
          <li>Centralize error responses with global error middleware.</li>
          <li>
            Return appropriate HTTP status codes for clear client communication.
          </li>
          <li>
            Proper error handling improves app reliability, debugging, and user
            experience.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 18,
    title: "Security (Web Security)",
    path: "/backend/security",
    explanation: (
      <>
        <p>
          Web security is crucial to protect applications and users from attacks
          and data breaches.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>CORS (Cross-Origin Resource Sharing):</strong> Controls
            which domains can access your API.
            <em>How:</em>{" "}
            <code>{`app.use(cors({ origin: 'https://example.com' }))`}</code>
          </li>

          <li>
            <strong>XSS (Cross-Site Scripting):</strong> Prevent injection of
            malicious scripts.
            <em>How:</em> Sanitize user inputs, use libraries like{" "}
            <code>{`DOMPurify`}</code>.
          </li>

          <li>
            <strong>CSRF (Cross-Site Request Forgery):</strong> Prevent
            unauthorized actions from other sites.
            <em>How:</em> Use CSRF tokens: <code>{`csurf()`}</code>.
          </li>

          <li>
            <strong>Input Sanitization:</strong> Clean and validate user inputs
            to prevent attacks.
            <em>How:</em> Use <code>{`express-validator`}</code> or custom
            validation functions.
          </li>

          <li>
            <strong>Rate Limiting:</strong> Prevent abuse by limiting requests
            per IP.
            <em>How:</em>{" "}
            <code>{`express-rate-limit({ windowMs: 15*60*1000, max: 100 })`}</code>
          </li>

          <li>
            <strong>Password Hashing:</strong> Store passwords securely.
            <em>How:</em> <code>{`bcrypt.hash(password, saltRounds)`}</code>
          </li>

          <li>
            <strong>HTTPS Basics:</strong> Encrypts communication between client
            and server.
            <em>Why:</em> Protects sensitive data from eavesdropping and
            man-in-the-middle attacks.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is CORS
            and why is it important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> CORS controls
            which domains can access your API, preventing unauthorized
            cross-origin requests.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between XSS and CSRF?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> XSS injects
            malicious scripts; CSRF tricks users into performing unwanted
            actions.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why hash
            passwords instead of storing plain text?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To prevent
            password theft if the database is compromised.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Apply CORS, input validation, and sanitization to protect APIs.
          </li>
          <li>
            Prevent attacks like XSS and CSRF with proper middleware and tokens.
          </li>
          <li>Hash passwords and use HTTPS for secure communication.</li>
          <li>
            Rate limiting helps prevent abuse and ensures application stability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 19,
    title: "API Design Best Practices",
    path: "/backend/apiDesign",
    explanation: (
      <>
        <p>
          Designing APIs correctly ensures maintainable, scalable, and
          user-friendly backend services.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>REST Naming Conventions:</strong> Use nouns for resources,
            plural form.
            <em>How / Example:</em>{" "}
            <code>{`GET /users  // get all users`}</code>,{" "}
            <code>{`POST /orders  // create a new order`}</code>
          </li>

          <li>
            <strong>Versioning:</strong> Manage changes without breaking
            clients.
            <em>Example:</em> <code>{`/api/v1/users`}</code> (v1),{" "}
            <code>{`/api/v2/users`}</code> (v2 with new fields)
          </li>

          <li>
            <strong>DTOs (Data Transfer Objects):</strong> Define what data is
            sent to clients.
            <em>Example:</em> Sending user info:{" "}
            <code>{`{ id: 1, name: 'John' }`}</code> instead of full DB model
            with password, roles, timestamps.
          </li>

          <li>
            <strong>Status Codes:</strong> Communicate request outcome.
            <em>Examples:</em>
            <code>{`200 OK  // successful GET request`}</code>,
            <code>{`201 Created  // new resource created`}</code>,
            <code>{`400 Bad Request  // invalid input`}</code>,
            <code>{`404 Not Found  // resource not found`}</code>
          </li>

          <li>
            <strong>Pagination & Filtering:</strong> Handle large datasets
            efficiently.
            <em>Example:</em>{" "}
            <code>{`GET /users?page=2&limit=10&role=admin`}</code>→ Returns page
            2 of users, 10 per page, filtered by role = admin.
          </li>

          <li>
            <strong>Query Optimization:</strong> Reduce database load and
            improve response time.
            <em>Example:</em>- Use index:{" "}
            <code>{`db.users.createIndex({ email: 1 })`}</code>- Select only
            needed fields:{" "}
            <code>{`db.users.find({}, { name: 1, email: 1 })`}</code>- Limit
            results: <code>{`db.users.find().limit(10)`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use API
            versioning?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Allows changes
            to API without breaking existing clients. Example: `/api/v1/users`
            vs `/api/v2/users`.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a DTO
            and why is it useful?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> DTOs define
            what data is sent externally; prevents sensitive info leak. Example:{" "}
            <code>{`{ id, name }`}</code> instead of{" "}
            <code>{`{ id, name, password, role }`}</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            pagination and filtering help?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reduces
            response size, DB load, and improves client performance. Example: `
            <code>GET /users?page=2&limit=10&role=admin</code>`.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use REST conventions and versioning for scalable, maintainable APIs.
          </li>
          <li>DTOs improve security and consistency of API responses.</li>
          <li>
            Pagination, filtering, and optimized queries improve performance.
          </li>
          <li>
            Correct status codes communicate request results clearly to clients.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 20,
    title: "Background Jobs & Queues",
    path: "/backend/jobsQueues",
    explanation: (
      <>
        <p>
          Background jobs and queues help handle tasks asynchronously, improving
          performance and responsiveness of applications.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Why Use Background Jobs:</strong> Offload long-running or
            repeated tasks so API responses remain fast.
            <em>Examples:</em> Sending emails, push notifications, generating
            reports, image/video processing.
          </li>

          <li>
            <strong>Bull (Redis-based queue):</strong> Job queue for Node.js
            with retries, scheduling, and concurrency.
            <em>How:</em>{" "}
            <code>{`const Queue = require('bull'); const emailQueue = new Queue('emails');`}</code>
          </li>

          <li>
            <strong>RabbitMQ:</strong> Message broker for distributed systems;
            reliable for scaling tasks across multiple servers.
            <em>How:</em>{" "}
            <code>{`channel.sendToQueue('task_queue', Buffer.from('Hello World'))`}</code>
          </li>

          <li>
            <strong>Queue Examples:</strong>
            <em>Emails:</em>{" "}
            <code>{`emailQueue.add({ to: 'user@example.com', subject: 'Welcome' })`}</code>
            <em>Notifications:</em>{" "}
            <code>{`notificationQueue.add({ userId: 1, message: 'New alert' })`}</code>
            <em>Long-running tasks:</em>{" "}
            <code>{`reportQueue.add({ reportId: 123 })`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            background jobs instead of processing tasks immediately?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To keep API
            responses fast and avoid blocking the main thread.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between Bull and RabbitMQ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Bull is
            Redis-based, simple for Node.js apps; RabbitMQ is a full message
            broker, better for distributed systems.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Give an
            example of a background job.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Sending a
            welcome email after user registration using a job queue.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use background jobs to offload long-running tasks and improve API
            performance.
          </li>
          <li>
            Bull and RabbitMQ are popular tools for queue management in Node.js.
          </li>
          <li>
            Queues are ideal for emails, notifications, report generation, or
            any async tasks.
          </li>
          <li>
            Understanding queues is important for building scalable and
            responsive backend systems.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 21,
    title: "Testing Backend APIs",
    path: "/backend/testing",
    explanation: (
      <>
        <p>
          Testing ensures backend APIs work correctly, handle edge cases, and
          remain reliable as the codebase grows.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Unit Tests:</strong> Test individual functions or modules in
            isolation.
            <em>How:</em> <code>{`expect(add(2,3)).toBe(5)`}</code>
          </li>

          <li>
            <strong>Integration Tests:</strong> Test multiple components
            together, like API endpoints with database interactions.
            <em>How:</em>{" "}
            <code>{`request(app).get('/users').expect(200)`}</code> (using
            Supertest)
          </li>

          <li>
            <strong>Jest:</strong> JavaScript testing framework for unit and
            integration tests.
            <em>Example:</em> <code>{`jest.fn()`}</code> for mocking functions.
          </li>

          <li>
            <strong>Supertest:</strong> Test HTTP endpoints of your
            Node.js/Express app.
            <em>How:</em>{" "}
            <code>{`await request(app).post('/login').send({ email, password }).expect(200)`}</code>
          </li>

          <li>
            <strong>Mocking Database:</strong> Avoid hitting real DB during
            tests; use mocks or in-memory DB.
            <em>Example:</em> <code>{`jest.mock('../models/User')`}</code>
          </li>

          <li>
            <strong>Testing Authentication & Errors:</strong> Ensure protected
            routes and error responses work as expected.
            <em>How:</em>{" "}
            <code>{`await request(app).get('/profile').set('Authorization', 'Bearer token')`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between unit and integration tests?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Unit tests
            check a single function/module; integration tests check multiple
            components working together.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            test API endpoints?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use Supertest
            to send HTTP requests and assert responses.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why mock the
            database during tests?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To isolate
            tests, speed them up, and avoid affecting real data.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use unit tests for functions/modules and integration tests for API
            flows.
          </li>
          <li>
            Jest and Supertest are standard tools for Node.js backend testing.
          </li>
          <li>
            Mock DB and authentication to make tests reliable and isolated.
          </li>
          <li>
            Proper testing ensures backend reliability, stability, and
            maintainability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 22,
    title: "Deployment & Environment",
    path: "/backend/deployment",
    explanation: (
      <>
        <p>
          Proper deployment and environment management ensures your backend app
          runs securely, efficiently, and reliably in production.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Environment Variables:</strong> Store config and secrets
            outside code.
            <em>How:</em> <code>{`process.env.DB_URL`}</code> or use a{" "}
            <code>.env</code> file.
          </li>

          <li>
            <strong>Deployment Basics:</strong> Deploy apps to cloud platforms.
            <em>Examples:</em>- Heroku: <code>{`git push heroku main`}</code>-
            Vercel: <code>{`vercel deploy`}</code>- AWS: Use EC2, Lambda, or
            Elastic Beanstalk.
          </li>

          <li>
            <strong>Logging:</strong> Track application activity and errors.
            <em>How:</em> Use <code>{`console.log()`}</code> in dev, or
            Winston/Log4js in production.
          </li>

          <li>
            <strong>Monitoring:</strong> Detect performance issues and errors in
            production.
            <em>How:</em> Tools like New Relic, Datadog, or Prometheus.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            environment variables?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To keep
            sensitive data like DB URLs and API keys out of source code.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            deploy a Node.js app to Heroku?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Initialize
            Git, commit code, and run <code>{`git push heroku main`}</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between logging and monitoring?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Logging
            records events/errors; monitoring tracks performance, uptime, and
            health.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use environment variables to store sensitive config outside code.
          </li>
          <li>
            Deploy apps using cloud platforms like Heroku, Vercel, or AWS.
          </li>
          <li>
            Implement logging for debugging and monitoring for performance
            tracking.
          </li>
          <li>
            Good deployment practices ensure reliability, scalability, and
            maintainability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 23,
    title: "WebSockets & Real-time Communication",
    path: "/backend/websockets",
    explanation: (
      <>
        <p>
          WebSockets enable full-duplex, real-time communication between client
          and server, allowing instant data updates.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Socket.io Basics:</strong> Simplifies WebSocket
            implementation in Node.js.
            <em>How:</em>{" "}
            <code>{`const io = require('socket.io')(server);`}</code>
          </li>

          <li>
            <strong>Events:</strong> Communication is done via events emitted
            and listened on both client and server.
            <em>Example:</em>{" "}
            <code>{`io.on('connection', socket => { socket.on('chat', msg => { io.emit('chat', msg) }) })`}</code>
          </li>

          <li>
            <strong>Broadcasting:</strong> Send messages to multiple clients
            except the sender.
            <em>Example:</em>{" "}
            <code>{`socket.broadcast.emit('message', 'Hello everyone')`}</code>
          </li>

          <li>
            <strong>Rooms:</strong> Group clients for targeted messages.
            <em>Example:</em>{" "}
            <code>{`socket.join('room1'); io.to('room1').emit('message', 'Hello Room1')`}</code>
          </li>

          <li>
            <strong>Scaling Real-time Apps:</strong> Use Redis adapter or
            message brokers to scale across multiple servers.
            <em>Example:</em>{" "}
            <code>{`io.adapter(redisAdapter({ host: 'localhost', port: 6379 }))`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between WebSockets and HTTP?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> WebSockets
            provide full-duplex, persistent connection; HTTP is request-response
            only.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            “room” in Socket.io?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A room is a
            group of sockets to broadcast events to specific clients.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How to scale
            real-time apps with Socket.io?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use Redis
            adapter or message brokers to sync events across multiple servers.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            WebSockets enable instant, two-way communication between client and
            server.
          </li>
          <li>
            Socket.io simplifies events, broadcasting, and room management.
          </li>
          <li>Scaling requires adapters like Redis for multi-server setups.</li>
          <li>
            Essential for chat apps, live notifications, gaming, or any
            real-time feature.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 24,
    title: "Performance & Scalability",
    path: "/backend/performance",
    explanation: (
      <>
        <p>
          Performance and scalability strategies ensure your backend can handle
          growing traffic and data efficiently.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Clustering:</strong> Utilize multiple CPU cores for Node.js
            apps to handle more requests.
            <em>How:</em>{" "}
            <code>{`const cluster = require('cluster'); if(cluster.isMaster){ cluster.fork(); }`}</code>
          </li>

          <li>
            <strong>Load Balancing:</strong> Distribute traffic across multiple
            servers to prevent overload.
            <em>Example:</em> Use Nginx or AWS ELB to balance requests between
            Node.js instances.
          </li>

          <li>
            <strong>Horizontal vs Vertical Scaling:</strong>
            <em>Vertical:</em> Add more resources (CPU/RAM) to a single server.
            <em>Horizontal:</em> Add more servers to handle traffic.
          </li>

          <li>
            <strong>Database Replication:</strong> Copy data across multiple DB
            servers for redundancy and read scaling.
            <em>Example:</em> MongoDB replica sets:{" "}
            <code>{`primary + secondary nodes`}</code>
          </li>

          <li>
            <strong>Database Sharding:</strong> Split data across multiple
            servers to scale writes and storage.
            <em>Example:</em> MongoDB sharded cluster:{" "}
            <code>{`shard1: users_0_1000, shard2: users_1001_2000`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between horizontal and vertical scaling?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Vertical adds
            resources to one server; horizontal adds more servers.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            clustering in Node.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Node.js is
            single-threaded; clustering allows multiple cores to handle more
            requests.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between replication and sharding?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Replication
            copies the same data for redundancy; sharding splits data across
            servers for scalability.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use clustering and load balancing to improve backend performance.
          </li>
          <li>
            Horizontal scaling and database sharding handle growing traffic and
            data.
          </li>
          <li>Replication improves availability and read performance.</li>
          <li>
            Understanding these concepts is crucial for building scalable,
            high-performance systems.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 25,
    title: "Logging & Monitoring",
    path: "/backend/logging",
    explanation: (
      <>
        <p>
          Logging and monitoring help track application behavior, detect errors,
          and ensure system reliability in production.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Winston:</strong> Flexible logging library for Node.js.
            <em>How:</em>{" "}
            <code>{`const logger = require('winston'); logger.info('Server started');`}</code>
          </li>

          <li>
            <strong>Morgan:</strong> HTTP request logger middleware for Express.
            <em>How:</em>{" "}
            <code>{`app.use(require('morgan')('combined'))`}</code>
          </li>

          <li>
            <strong>ELK Stack Basics:</strong> Elasticsearch + Logstash + Kibana
            for centralized logging and visualization.
            <em>Example:</em> Collect logs with Logstash → store in
            Elasticsearch → visualize in Kibana.
          </li>

          <li>
            <strong>Monitoring Tools:</strong> Track performance, uptime, and
            system health.
            <em>Examples:</em> New Relic, Datadog, Prometheus, Grafana.
          </li>

          <li>
            <strong>Error Tracking & Alerting:</strong> Detect runtime errors
            and notify teams.
            <em>How:</em> Tools like Sentry or Rollbar:{" "}
            <code>{`Sentry.captureException(err)`}</code>
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between Winston and Morgan?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Winston logs
            application events/errors; Morgan logs HTTP requests.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            centralized logging like ELK?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Aggregates
            logs from multiple sources, easier to search, analyze, and
            visualize.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            monitoring tools help in production?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Track uptime,
            performance, errors, and send alerts for anomalies.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use Winston and Morgan for logging application events and requests.
          </li>
          <li>
            Centralized logging (ELK) simplifies monitoring across multiple
            servers.
          </li>
          <li>Monitoring tools track performance and health in real-time.</li>
          <li>
            Error tracking and alerting help resolve issues quickly and maintain
            reliability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 26,
    title: "Microservices & Architecture",
    path: "/backend/microservices",
    explanation: (
      <>
        <p>
          Microservices architecture breaks a monolithic application into
          smaller, independent services that communicate over APIs, improving
          scalability, maintainability, and deployment flexibility.
        </p>

        <h2>Key Concepts & Examples</h2>
        <ul>
          <li>
            <strong>Monolith vs Microservices:</strong>
            <em>Monolith:</em> Single codebase, tightly coupled.
            <em>Microservices:</em> Multiple services, independently deployable.
            <em>Example:</em> E-commerce monolith vs separate services for
            orders, payments, inventory.
          </li>

          <li>
            <strong>REST vs gRPC:</strong> Communication protocols between
            services.
            <em>REST:</em> HTTP + JSON, human-readable.
            <em>gRPC:</em> HTTP/2 + Protobuf, faster and strongly typed.
            <em>Example:</em> Use gRPC for internal microservice communication.
          </li>

          <li>
            <strong>API Gateway:</strong> Single entry point for client
            requests, routes to appropriate service.
            <em>Example:</em> <code>{`/api/users`}</code> routed to User
            Service, <code>{`/api/orders`}</code> routed to Order Service.
          </li>

          <li>
            <strong>Service Discovery:</strong> Dynamically locate services in
            distributed systems.
            <em>Example:</em> Eureka, Consul, or Kubernetes service discovery.
          </li>

          <li>
            <strong>Inter-service Communication:</strong> Services communicate
            via synchronous (REST/gRPC) or asynchronous (message queues)
            methods.
            <em>Example:</em> Order Service sends message to Inventory Service
            via RabbitMQ.
          </li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between monolith and microservices?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Monolith is a
            single codebase; microservices are independent services that can
            scale and deploy separately.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use an API
            Gateway?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Central entry
            point, routes requests, handles authentication, rate limiting, and
            aggregation.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do
            services communicate?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Synchronously
            via REST/gRPC or asynchronously via message queues.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Microservices improve scalability, maintainability, and deployment
            flexibility.
          </li>
          <li>
            Use API Gateway to route requests and handle cross-cutting concerns.
          </li>
          <li>
            Choose REST or gRPC depending on performance and typing needs.
          </li>
          <li>
            Service discovery and inter-service communication are key for
            distributed systems.
          </li>
        </ul>
      </>
    ),
  },
];
