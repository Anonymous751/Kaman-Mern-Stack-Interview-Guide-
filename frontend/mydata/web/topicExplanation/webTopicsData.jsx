// src/pages/web/webTopicsData.jsx

const colors = {
  primary: "#2B6CB0",
  success: "#38A169",
  danger: "#D53F8C",
  info: "#805AD5",
  warn: "#D69E2E",
};

export const webTopics = [
{
  id: 1,
  title: "How the Web Works",
  path: "/web/how-web-works",
  explanation: (
    <>
      <p>
        The <strong>Web</strong> (World Wide Web) works through communication between a{" "}
        <strong>client</strong> (browser or app) and a <strong>server</strong>.
        The client requests something, and the server responds with data like
        HTML (HyperText Markup Language), CSS (Cascading Style Sheets), JavaScript,
        or JSON (JavaScript Object Notation).
      </p>

      <h2>Why This Matters</h2>
      <p>
        Understanding how the web works helps you debug issues, optimize
        performance, secure your applications, and answer interview questions
        confidently. Every frontend/backend developer must understand this flow.
        Companies expect you to know this right from junior level.
      </p>

      <h2>Basic Flow of the Web</h2>
      <pre>
{`Client (Browser/App) → Sends Request → Server
Server → Processes & Sends Response → Browser
Browser → Renders the Page`}
      </pre>

      <h2>Step-by-Step Explanation</h2>
      <ul>
        <li>
          <strong>1. User enters a URL</strong> — The browser prepares an HTTP
          (HyperText Transfer Protocol) request.
        </li>

        <li>
          <strong>2. DNS Lookup</strong> — DNS (Domain Name System) converts a domain name
          like google.com into an IP (Internet Protocol) address like 142.250.194.110.
        </li>

        <li>
          <strong>3. Browser connects to the server</strong> — This happens through
          <br/>• TCP (Transmission Control Protocol) handshake
          <br/>• TLS (Transport Layer Security) handshake → only for HTTPS
          This establishes a secure and reliable communication tunnel.
        </li>

        <li>
          <strong>4. Browser sends HTTP request</strong> — GET, POST, PUT, DELETE, etc.
          including headers, cookies, and sometimes body.
        </li>

        <li>
          <strong>5. Server processes it</strong> — Runs backend code (Node.js, Django, PHP),
          accesses DB (database), applies business logic, prepares the response.
        </li>

        <li>
          <strong>6. Server returns HTTP response</strong> — Includes:
          <br/>• Status code (200, 404, 500)
          <br/>• Headers
          <br/>• Body (HTML, CSS, JS, JSON, images, etc.)
        </li>

        <li>
          <strong>7. Browser renders the page</strong> — Parses HTML, applies CSS, executes JS,
          builds the DOM (Document Object Model) and CSSOM, then paints UI.
        </li>
      </ul>

      <h2>Important Concepts</h2>
      <ul>
        <li>
          <strong>HTTP & HTTPS</strong> —
          HTTP = HyperText Transfer Protocol
          HTTPS = HyperText Transfer Protocol Secure
          HTTPS uses TLS (Transport Layer Security) → protects data from attackers.
        </li>

        <li>
          <strong>DNS (Domain Name System)</strong> —
          Converts domain name → IP address.
          Works like an internet phonebook.
        </li>

        <li>
          <strong>Servers & Hosting</strong> —
          Servers are computers that store your website's files and run backend code.
          Hosting = service that provides space for your website (AWS, Netlify, Vercel, etc.).
        </li>

        <li>
          <strong>CDN (Content Delivery Network)</strong> —
          A network of distributed servers that deliver assets (images, videos, CSS/JS files)
          from the nearest location to the user. Improves loading speed & reduces server load.
        </li>

        <li>
          <strong>Caching</strong> —
          Storing data temporarily so it can be reused quickly.
          Types: Browser cache, CDN cache, Server cache (Redis), Database caching.
        </li>
      </ul>

      <h2>Benefits of Understanding This</h2>
      <ul>
        <li>Helps build faster, more efficient web apps.</li>
        <li>Improves debugging skills across frontend, backend, and network layers.</li>
        <li>Makes you confident in system design & real-world architecture.</li>
        <li>Strengthens security: understanding TLS, cookies, headers, CORS, CSRF etc.</li>
        <li>Interviewers ALWAYS ask these concepts for frontend/backend roles.</li>
        <li>You understand how browsers, servers, DNS, caching, HTTPS, and CDNs work together.</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is DNS?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> DNS (Domain Name System)
          converts a domain name like <em>google.com</em> into an IP (Internet Protocol)
          address that computers understand. Works like the phonebook of the internet.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What happens
          when you type a URL and press Enter?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> DNS lookup → TCP/TLS handshake
          → HTTP request → server processes it → sends response → browser renders the page.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is HTTP vs HTTPS?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> HTTPS = HTTP + TLS encryption.
          Protects data from attackers and ensures privacy and integrity.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a CDN and why do we use it?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> CDN (Content Delivery Network)
          delivers content from servers geographically closer to the user.
          Reduces latency, speeds up loading, and reduces traffic on the main server.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is caching?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Caching stores frequently-used
          data temporarily so the browser or server does not fetch it repeatedly.
          Improves performance and reduces load.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>The web works through client-server communication.</li>
        <li>DNS (Domain Name System) translates domain names into IP addresses.</li>
        <li>
          HTTP/HTTPS protocols transfer data between client and server.
        </li>
        <li>
          CDNs and caching make websites load faster and reduce server load.
        </li>
        <li>
          Knowing this is essential for frontend, backend, and full-stack developers.
        </li>
        <li>
          These topics are commonly asked in interviews to test core understanding.
        </li>
      </ul>
    </>
  ),
},

  {
  id: 2,
  title: "HTTP & HTTPS",
  path: "/web/http-https",
  explanation: (
    <>
      <p>
        <strong>HTTP</strong> (HyperText Transfer Protocol) is the foundation
        of communication on the web. It defines **how clients (browsers/apps) and servers communicate**.
        Every time you open a website, your browser is using HTTP or HTTPS to send and receive data.
      </p>

      <h2>Why HTTP Exists</h2>
      <p>
        Computers do not understand human language. HTTP provides a **standard set of rules** so that:
        <br />• Clients can request resources
        <br />• Servers can respond with data
        <br />• Both follow the same predictable structure
        <br /><br />
        Without HTTP, browsers and servers wouldn’t know how to talk to each other.
      </p>

      <h2>How HTTP Works (Simple)</h2>
      <pre>
{`Browser → HTTP Request → Server
Server → HTTP Response → Browser`}
      </pre>
      <p>
        HTTP requests contain: method, headers, URL, and sometimes body.
        HTTP responses contain: status code, headers, and response body/data.
      </p>

      <h2>HTTP Methods</h2>
      <p>These represent the type of action you want to perform:</p>
      <ul>
        <li>
          <strong>GET</strong> – Read data
          (example: fetch user list, open a webpage)
        </li>
        <li>
          <strong>POST</strong> – Create data
          (example: register user, submit form)
        </li>
        <li>
          <strong>PUT</strong> – Update/replace data
          (example: edit profile fully)
        </li>
        <li>
          <strong>DELETE</strong> – Remove data
          (example: delete account)
        </li>
      </ul>

      <h2>Additional Important HTTP Methods</h2>
      <ul>
        <li>
          <strong>PATCH</strong> – Partially updates data
          (example: update only email)
        </li>
        <li>
          <strong>HEAD</strong> – Same as GET but without body (used for checking)
        </li>
        <li>
          <strong>OPTIONS</strong> – Shows allowed operations
          (used heavily in CORS = Cross-Origin Resource Sharing)
        </li>
      </ul>

      <h2>Status Codes</h2>
      <ul>
        <li>
          <strong>200 – OK</strong>
          Request succeeded.
        </li>
        <li>
          <strong>201 – Created</strong>
          New record created successfully (mostly for POST).
        </li>
        <li>
          <strong>400 – Bad Request</strong>
          Something wrong in the request (missing data, wrong format).
        </li>
        <li>
          <strong>401 – Unauthorized</strong>
          User not logged in or missing token.
        </li>
        <li>
          <strong>404 – Not Found</strong>
          URL or resource doesn’t exist.
        </li>
        <li>
          <strong>500 – Server Error</strong>
          Problem in server code, logic, or DB failure.
        </li>
      </ul>

      <h2>Why HTTP Is Important</h2>
      <ul>
        <li>Defines how browsers and servers communicate.</li>
        <li>Every API you build uses HTTP methods & status codes.</li>
        <li>Backend debugging relies on reading request/response details.</li>
        <li>Frontend developers need to understand API calls.</li>
        <li>It is one of the most asked interview topics.</li>
      </ul>

      <h2>HTTP vs HTTPS (Very Important)</h2>
      <p>
        <strong>HTTPS</strong> = HTTP + TLS (Transport Layer Security)
        Meaning: encrypted, secure, protects user data.
      </p>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is HTTP?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> HTTP (HyperText Transfer Protocol) is a communication protocol
          that defines how clients and servers exchange data on the web.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between PUT and PATCH?
          <br />
          <strong  style={{ color: colors.success }}>A:</strong> PUT updates the entire resource, PATCH updates only specific fields.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are status code categories?
          <br />
          <strong style={{ color: colors.success }}>A:</strong>
          • 1xx – Informational
          • 2xx – Success
          • 3xx – Redirection
          • 4xx – Client errors
          • 5xx – Server errors
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is HTTPS and why is it important?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> HTTPS encrypts data using TLS for security. Protects from hackers.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is an HTTP header?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A metadata piece in the request/response (token, content-type, cookies).
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>HTTP is the main communication protocol of the web.</li>
        <li>Browsers send HTTP requests; servers send HTTP responses.</li>
        <li>Methods like GET/POST/PUT/DELETE define the action type.</li>
        <li>Status codes tell if the request succeeded or failed.</li>
        <li>HTTPS adds encryption using TLS.</li>
        <li>Understanding HTTP is mandatory for all web developers and interviews.</li>
      </ul>
    </>
  ),
},
{
  id: 3,
  name: "DNS & Domain Names",
  title: "DNS & Domain Names",
  path: "/web/dns-domain",
  explanation: (
    <>
      <p>
        <strong>DNS</strong> (Domain Name System) is the system that converts
        human-readable domain names like <em>google.com</em> into machine-understandable
        <strong> IP addresses</strong> such as <em>142.250.194.110</em>.
        Without DNS, you would need to remember numbers instead of names.
      </p>

      <h2>Why This Exists</h2>
      <p>
        Humans remember names, but computers communicate using numbers (IP addresses).
        DNS acts like the **phonebook of the internet**, making browsing easy and fast.
      </p>

      <h2>How DNS Works (Step-by-Step)</h2>
      <pre>
{`1. User types a URL (e.g., youtube.com)
2. Browser checks cache (browser cache, OS cache)
3. If not found → query goes to DNS Resolver
4. Resolver asks the Root DNS Server
5. Root sends Top Level Domain (TLD) info (.com, .org)
6. Resolver asks TLD Server
7. TLD gives the Authoritative DNS server for that domain
8. Authoritative server returns the actual IP address
9. Browser connects to server using this IP
10. Website loads`}
      </pre>

      <h2>Important Concepts</h2>
      <ul>
        <li>
          <strong>Domain Name</strong> — Website name (example: facebook.com)
        </li>
        <li>
          <strong>TLD (Top Level Domain)</strong> — .com, .net, .org, .in, .dev
        </li>
        <li>
          <strong>IP Address (Internet Protocol Address)</strong> — Unique numeric address of a server
        </li>
        <li>
          <strong>DNS Resolver</strong> — Looks up the domain (usually your ISP or Google DNS)
        </li>
        <li>
          <strong>Authoritative DNS Server</strong> — Holds actual domain → IP mapping
        </li>
        <li>
          <strong>Subdomains</strong> — blog.example.com, api.example.com
        </li>
        <li>
          <strong>TTL (Time To Live)</strong> — How long DNS info is cached before refresh
        </li>
      </ul>

      <h2>Types of DNS Records</h2>
      <ul>
        <li><strong>A Record</strong> — Domain → IPv4 address</li>
        <li><strong>AAAA Record</strong> — Domain → IPv6 address</li>
        <li><strong>CNAME</strong> — Alias to another domain name</li>
        <li><strong>MX Record</strong> — Mail server mapping for email</li>
        <li><strong>NS Record</strong> — Specifies DNS servers for the domain</li>
        <li><strong>TXT Record</strong> — Used for verification (Google, SPF, DKIM)</li>
      </ul>

      <h2>Why DNS Matters</h2>
      <ul>
        <li>You can host websites on human-friendly names instead of IP addresses.</li>
        <li>Enables routing of web traffic globally.</li>
        <li>Critical for email, APIs, and cloud infrastructure.</li>
        <li>Understanding DNS helps in debugging networking issues.</li>
        <li>Highly asked in frontend + backend interviews.</li>
      </ul>

      <h2>Benefits of Understanding DNS</h2>
      <ul>
        <li>Better control over custom domains for your projects.</li>
        <li>Helps with deployment, hosting, and DNS configuration.</li>
        <li>Improves ability to fix “server not found” errors.</li>
        <li>Builds strong networking fundamentals for system design.</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is DNS?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> DNS (Domain Name System) converts domain names into IP addresses
          so browsers know where to send requests.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is TTL?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> TTL (Time To Live) defines how long a DNS record can be cached
          before refreshing from the server.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between A and CNAME record?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A Record maps to an IP address.
          CNAME maps to another domain name.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Who gives the final IP address?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> The Authoritative DNS Server for that domain.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a subdomain?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A separate section of a domain like api.example.com.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>DNS converts domain names to IP addresses.</li>
        <li>It uses multiple servers: Resolver → Root → TLD → Authoritative.</li>
        <li>Records like A, CNAME, MX help map domains to services.</li>
        <li>TTL controls DNS caching for faster performance.</li>
        <li>Core topic for web dev, networking, and interviews.</li>
      </ul>
    </>
  ),
  priority: "High",
},
{
  id: 4,
  name: "Browser Rendering",
  title: "Browser Rendering",
  path: "/web/browser-rendering",
  explanation: (
    <>
      <p>
        <strong>Browser Rendering</strong> is the complete process through which a
        browser takes <strong>HTML, CSS, and JavaScript</strong> and converts them
        into the final pixels that appear on the screen.
        This entire pipeline is called the <strong>Critical Rendering Path (CRP)</strong>.
      </p>

      <h2>Why Browser Rendering Matters</h2>
      <p>
        Understanding browser rendering helps developers build faster, smoother,
        and more optimized web applications.
        Slow layout, expensive paint operations, and unnecessary reflows can make
        your site lag — especially on low-end devices.
      </p>

      <h2>Browser Rendering Pipeline (Step-by-Step)</h2>
      <pre>
{`1. Browser gets HTML, CSS, JavaScript files
2. HTML is parsed → DOM (Document Object Model)
3. CSS is parsed → CSSOM (CSS Object Model)
4. DOM + CSSOM combine → Render Tree
5. Layout / Reflow → Calculates size & position of elements
6. Paint → Fills in pixels (colors, text, borders, shadows)
7. Compositing → GPU combines layers into final image
8. Screen displays the final rendered page`}
      </pre>

      <h2>Core Concepts</h2>
      <ul>
        <li>
          <strong>DOM (Document Object Model)</strong> — Structured representation of HTML.
        </li>
        <li>
          <strong>CSSOM (CSS Object Model)</strong> — Tree structure of all applied styles.
        </li>
        <li>
          <strong>Render Tree</strong> — Combination of DOM + CSSOM filtered for visible elements.
        </li>
        <li>
          <strong>Layout / Reflow</strong> — Calculates element sizes & positions.
        </li>
        <li>
          <strong>Paint</strong> — Drawing shapes, colors, borders, text, shadows.
        </li>
        <li>
          <strong>Compositing</strong> — GPU assembles painted layers into final image.
        </li>
      </ul>

      <h2>What Triggers Reflow (Layout)?</h2>
      <ul>
        <li>Changing element size (width, height)</li>
        <li>Adding/removing elements from DOM</li>
        <li>Changing fonts</li>
        <li>Changing layout properties (margin, padding, position)</li>
        <li>Resizing the browser window</li>
      </ul>

      <h2>What Triggers Repaint?</h2>
      <ul>
        <li>Changing colors</li>
        <li>Changing text color</li>
        <li>Changing background</li>
        <li>Changing border color</li>
        <li>Changing box-shadow</li>
      </ul>

      <h2>Browser Optimization Techniques</h2>
      <ul>
        <li>Use <strong>transform</strong> & <strong>opacity</strong> (GPU accelerated)</li>
        <li>Avoid layout thrashing (multiple forced reflows)</li>
        <li>Use <strong>will-change</strong> carefully</li>
        <li>Minimize heavy CSS like shadows, large images</li>
        <li>Debounce resize & scroll handlers</li>
      </ul>

      <h2>Modern Browser Architecture</h2>
      <ul>
        <li><strong>Multi-process</strong> browsers (Chrome, Edge)</li>
        <li>Separate processes for tab, GPU, memory, scripts</li>
        <li>Improves performance, security, and crash isolation</li>
      </ul>

      <h2>Critical Rendering Path (CRP)</h2>
      <ul>
        <li>DOM creation</li>
        <li>CSSOM creation</li>
        <li>Render tree construction</li>
        <li>Layout</li>
        <li>Paint</li>
        <li>Composite layers</li>
      </ul>

      <h2>Why This Matters for Developers</h2>
      <ul>
        <li>Helps optimize performance</li>
        <li>Prevents layout shifts (CLS issues)</li>
        <li>Improves animation smoothness</li>
        <li>Makes apps faster even on low-end devices</li>
        <li>Frequently asked in frontend interviews</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the DOM?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> DOM (Document Object Model) is the browser's tree
          representation of HTML.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is Reflow?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Reflow (Layout) recalculates the size and position of
          elements.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What causes Repaint?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Visual changes like color, background, borders.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the Critical Rendering Path?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> The sequence of steps the browser performs to convert HTML/CSS
          into pixels.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why are transforms faster for animations?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They are GPU-accelerated and skip layout/paint steps.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Browser rendering converts HTML/CSS/JS into final pixels.</li>
        <li>DOM + CSSOM = Render Tree.</li>
        <li>Layout → Paint → Composite.</li>
        <li>Reflow is expensive; avoid unnecessary layout changes.</li>
        <li>Transforms and opacity animations are the fastest.</li>
        <li>Core knowledge for frontend performance & interviews.</li>
      </ul>
    </>
  ),
  priority: "High",
},
{
  id: 5,
  name: "Web Security Basics",
  title: "Web Security Basics",
  path: "/web/web-security",
  explanation: (
    <>
      <p>
        <strong>Web Security Basics</strong> refers to the essential techniques
        and rules used to protect websites from attacks.
        These attacks target user data, cookies, sessions, and server resources.
        As a web developer, you must understand these concepts because they are
        asked in interviews and required for building safe applications.
      </p>

      <h2>Why Web Security Matters</h2>
      <ul>
        <li>Protects users from data theft and harmful scripts.</li>
        <li>Prevents attackers from taking control of accounts or sessions.</li>
        <li>Keeps backend APIs secure from unauthorized access.</li>
        <li>Improves trust in your application and prevents hacking.</li>
        <li>Highly asked in frontend + backend + full-stack interviews.</li>
      </ul>

      <h2>Core Web Security Concepts</h2>

      <h3>1. CORS (Cross-Origin Resource Sharing)</h3>
      <p>
        <strong>CORS</strong> controls which domains are allowed to access your server.
        Browsers block requests from other domains by default for safety.
      </p>
      <ul>
        <li>Prevents unauthorized websites from accessing your APIs.</li>
        <li>Uses HTTP headers like <strong>Access-Control-Allow-Origin</strong>.</li>
        <li>Common in frontend-backend communication.</li>
      </ul>

      <h3>2. CSP (Content Security Policy)</h3>
      <p>
        <strong>CSP</strong> (Content Security Policy) prevents malicious scripts
        from executing on your website.
        It tells the browser which sources of scripts, images, and styles
        are allowed.
      </p>
      <ul>
        <li>Stops Cross-Site Scripting (XSS) attacks.</li>
        <li>Prevents loading harmful scripts from unknown domains.</li>
        <li>
          Example: Allow scripts only from your domain →
          <code>script-src 'self'</code>.
        </li>
      </ul>

      <h3>3. SSL/TLS (Secure Sockets Layer / Transport Layer Security)</h3>
      <p>
        <strong>SSL/TLS</strong> encrypts data between the browser and server.
        When a site uses HTTPS, it is protected by TLS encryption.
      </p>
      <ul>
        <li>Makes communication secure.</li>
        <li>Prevents data from being intercepted.</li>
        <li>Essential for login, signup, payments, and APIs.</li>
      </ul>

      <h3>4. XSS (Cross-Site Scripting)</h3>
      <p>
        <strong>XSS</strong> is when attackers inject malicious JavaScript
        into your website.
        It runs in the victim’s browser and can steal cookies or modify pages.
      </p>
      <ul>
        <li>Prevent by sanitizing input.</li>
        <li>Avoid <code>dangerouslySetInnerHTML</code> in React.</li>
        <li>Use CSP to block unknown scripts.</li>
      </ul>

      <h3>5. CSRF (Cross-Site Request Forgery)</h3>
      <p>
        <strong>CSRF</strong> forces a logged-in user to perform an action
        they didn’t intend (like changing password).
      </p>
      <ul>
        <li>Prevent with anti-CSRF tokens.</li>
        <li>Use SameSite cookies.</li>
        <li>Avoid unsafe GET requests for sensitive actions.</li>
      </ul>

      <h3>6. Cookies & Security Flags</h3>
      <p>
        Cookies store session IDs. If they are not secured, attackers can steal them.
      </p>
      <ul>
        <li><strong>HttpOnly</strong> — JavaScript cannot read the cookie.</li>
        <li><strong>Secure</strong> — Cookie sent only over HTTPS.</li>
        <li><strong>SameSite</strong> — Prevents cross-site cookie sending (helps avoid CSRF).</li>
      </ul>

      <h3>7. Authentication vs Authorization</h3>
      <ul>
        <li><strong>Authentication</strong> → Verifies who the user is (login).</li>
        <li><strong>Authorization</strong> → Checks what the user is allowed to do.</li>
      </ul>

      <h3>8. Rate Limiting</h3>
      <p>
        Restricts the number of requests a user can make in a given time.
        Protects APIs from bot attacks and brute-force login attempts.
      </p>

      <h3>9. Hashing & Encryption</h3>
      <ul>
        <li><strong>Hashing</strong> — One-way conversion (e.g., password hashing).</li>
        <li><strong>Encryption</strong> — Two-way conversion for securing data.</li>
      </ul>

      <h2>Why This Matters for Developers</h2>
      <ul>
        <li>Prevents major vulnerabilities (XSS, CSRF, injection attacks).</li>
        <li>Protects user accounts and payments.</li>
        <li>Ensures APIs are not misused.</li>
        <li>Critical knowledge for frontend + backend interviews.</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is CORS?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> CORS (Cross-Origin Resource Sharing) controls which
          external domains can access your server resources using specific headers.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between SSL and TLS?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> TLS is the modern, secure version of SSL and is used by HTTPS.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is XSS?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> XSS injects malicious scripts that run in the user’s browser.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you prevent CSRF?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use CSRF tokens and SameSite cookies.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are HttpOnly cookies?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Cookies that cannot be accessed using JavaScript,
          used for securing sessions.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is Content Security Policy?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A security layer that restricts what resources (scripts, images, styles)
          the browser can load.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>CORS controls external access to your APIs.</li>
        <li>CSP protects from script attacks.</li>
        <li>SSL/TLS encrypts browser ↔ server communication.</li>
        <li>XSS injects scripts; CSRF forces unwanted actions.</li>
        <li>Security cookies protect sessions.</li>
        <li>Authentication ≠ Authorization.</li>
        <li>Essential for frontend, backend, and system design interviews.</li>
      </ul>
    </>
  ),
  priority: "Compulsory",
},
{
  id: 6,
  name: "Web Performance",
  title: "Web Performance",
  path: "/web/web-performance",
  explanation: (
    <>
      <p>
        <strong>Web Performance</strong> refers to how fast a website loads,
        renders, and responds to user interactions.
        Faster websites improve user experience, SEO rankings, conversion rates,
        and overall application quality.
      </p>

      <h2>Why Web Performance Matters</h2>
      <ul>
        <li>Slow websites lose users within seconds.</li>
        <li>Google ranks fast websites higher (Core Web Vitals).</li>
        <li>Low-end mobile devices need optimized pages.</li>
        <li>Improves user engagement and business revenue.</li>
        <li>Critical topic for frontend, backend & system design interviews.</li>
      </ul>

      <h2>Key Web Performance Concepts</h2>

      <h3>1. Latency</h3>
      <p>
        <strong>Latency</strong> is the time taken for a request to travel from
        the browser to the server and back.
        Lower latency = faster website.
      </p>
      <ul>
        <li>Affected by distance between user & server.</li>
        <li>CDNs help reduce latency.</li>
        <li>HTTP requests add latency each time.</li>
      </ul>

      <h3>2. Caching</h3>
      <p>
        <strong>Caching</strong> stores web assets so they load faster next time.
        Browsers, CDNs, and servers all use caching.
      </p>
      <ul>
        <li><strong>Browser Cache</strong> — static files saved on device.</li>
        <li><strong>Service Worker Cache</strong> — PWA offline support.</li>
        <li><strong>CDN Cache</strong> — global edge servers speed up delivery.</li>
        <li>
          Headers: <code>Cache-Control</code>, <code>ETag</code>, <code>Expires</code>.
        </li>
      </ul>

      <h3>3. CDN (Content Delivery Network)</h3>
      <p>
        A <strong>CDN</strong> is a network of global servers that deliver
        images, scripts, videos, and static files from locations close to the user.
      </p>
      <ul>
        <li>Reduces latency.</li>
        <li>Improves load times.</li>
        <li>Reduces load on your backend server.</li>
      </ul>

      <h3>4. Resource Optimization</h3>
      <p>Reducing the size and number of downloaded resources.</p>
      <ul>
        <li>Minify HTML/CSS/JS.</li>
        <li>Compress images (WebP, AVIF).</li>
        <li>Tree-shake unused JavaScript.</li>
        <li>Use responsive images (<code>srcset</code>).</li>
        <li>Compress responses using Gzip/Brotli.</li>
      </ul>

      <h3>5. HTTP/2 & HTTP/3</h3>
      <h4>HTTP/2</h4>
      <ul>
        <li>Multiplexing — multiple requests in one connection.</li>
        <li>Header compression.</li>
        <li>Server push (deprecated now).</li>
      </ul>

      <h4>HTTP/3</h4>
      <ul>
        <li>Faster connections using QUIC protocol.</li>
        <li>Better performance on unstable networks.</li>
        <li>Lower latency for mobile devices.</li>
      </ul>

      <h3>6. Lazy Loading</h3>
      <p>
        <strong>Lazy Loading</strong> delays loading images, components, or scripts
        until they are actually needed.
      </p>
      <ul>
        <li>Improves initial page load time.</li>
        <li>Saves data on mobile devices.</li>
        <li>
          Use <code>loading="lazy"</code> for images.
        </li>
      </ul>

      <h3>7. Critical Rendering Path Optimization</h3>
      <ul>
        <li>Load critical CSS first (<code>&lt;link rel="preload"&gt;</code>).</li>
        <li>Defer non-critical JS using <code>defer</code> or <code>async</code>.</li>
        <li>Reduce render-blocking resources.</li>
      </ul>

      <h3>8. Core Web Vitals</h3>
      <ul>
        <li><strong>LCP</strong> (Largest Contentful Paint) — load speed.</li>
        <li><strong>FID</strong> (First Input Delay) — interaction delay.</li>
        <li><strong>CLS</strong> (Cumulative Layout Shift) — layout stability.</li>
      </ul>

      <h2>Performance Optimization Techniques</h2>
      <ul>
        <li>Use a CDN for static assets.</li>
        <li>Enable caching at browser, CDN, and server levels.</li>
        <li>Minimize JavaScript bundle size.</li>
        <li>Prefetch important resources.</li>
        <li>Use HTTP/2 or HTTP/3 for better performance.</li>
        <li>Optimize images using modern formats.</li>
        <li>Split code into smaller chunks (code splitting).</li>
        <li>Use web workers for heavy computations.</li>
      </ul>

      <h2>Why This Matters for Developers</h2>
      <ul>
        <li>Improves user retention and satisfaction.</li>
        <li>Better SEO ranking.</li>
        <li>Faster loading = higher conversion rates.</li>
        <li>Key topic for frontend system design interviews.</li>
        <li>Helps build modern, scalable web apps.</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is latency?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Latency is the time delay between sending a request
          and receiving a response.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a CDN and why is it used?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A CDN (Content Delivery Network) delivers content
          from servers close to the user to reduce load time.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is lazy loading?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Loading images/components only when needed to
          improve performance.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between HTTP/1.1 and HTTP/2?
          <br />
          <strong> style={{ color: colors.success }}A:</strong> HTTP/2 supports multiplexing, header compression,
          and faster parallel requests.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are Core Web Vitals?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> LCP, FID, and CLS — metrics to measure website performance.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Web performance focuses on speed, latency, caching, and optimization.</li>
        <li>CDNs and caching improve global delivery.</li>
        <li>Lazy loading and resource optimization reduce load time.</li>
        <li>HTTP/2 and HTTP/3 offer better network performance.</li>
        <li>Core Web Vitals are crucial for SEO.</li>
        <li>Essential topic for frontend performance & interviews.</li>
      </ul>
    </>
  ),
  priority: "High",
},
{
  id: 7,
  name: "Accessibility (A11y)",
  title: "Accessibility (A11y)",
  path: "/web/accessibility",
  explanation: (
    <>
      <p>
        <strong>Accessibility (A11y)</strong> refers to designing and building
        websites so that <strong>everyone</strong> — including people who have vision problems, hearing problems, movement difficulties, or learning/thinking difficulties. — can use the website
        effectively.
        <br />
        <br />
        A11y ensures that your UI works with screen readers, keyboards,
        assistive technologies, and supports proper color contrast and content
        structure. Accessibility is not optional — it's a key part of modern
        web development and is required by standards like
        <strong>WCAG</strong> (Web Content Accessibility Guidelines).
      </p>

      <h2>Why Accessibility Matters</h2>
      <ul>
        <li>Makes the web inclusive for people with disabilities.</li>
        <li>Required by many government and enterprise companies.</li>
        <li>Improves usability for everyone (not just disabled users).</li>
        <li>Better SEO — search engines read pages like screen readers.</li>
        <li>Reduces legal risks (ADA, WCAG compliance).</li>
        <li>Important topic in frontend and UI developer interviews.</li>
      </ul>

      <h2>Key Accessibility Concepts</h2>

      <h3>1. Screen Readers</h3>
      <p>
        Screen readers (e.g., NVDA, JAWS, VoiceOver) read the page aloud for
        visually impaired users.
        They rely on correct <strong>semantic HTML</strong>, ARIA roles,
        and keyboard navigation.
      </p>
      <ul>
        <li>Use semantic elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>.</li>
        <li>Use proper headings (<code>h1</code> → <code>h6</code>).</li>
        <li>Provide text alternatives for images.</li>
      </ul>

      <h3>2. ARIA (Accessible Rich Internet Applications)</h3>
      <p>
        <strong>ARIA</strong> provides extra information to assistive
        technologies when semantic HTML alone is not enough.
      </p>
      <ul>
        <li><strong>role</strong> — defines the purpose of an element.</li>
        <li><strong>aria-label</strong> — gives an accessible name to an element.</li>
        <li><strong>aria-hidden</strong> — hides elements from screen readers.</li>
        <li>
          <strong>aria-live</strong> — announces dynamic content changes.
        </li>
      </ul>

      <h3>3. Keyboard Navigation</h3>
      <p>Users should be able to navigate the entire site using only a keyboard.</p>
      <ul>
        <li>Use <code>Tab</code> to move focus.</li>
        <li><code>Shift + Tab</code> to go backward.</li>
        <li><code>Enter</code> or <code>Space</code> to activate buttons.</li>
        <li>
          Use <code>outline</code> for focus rings (never remove without replacement).
        </li>
        <li>All interactive elements must be focusable.</li>
      </ul>

      <h3>4. Color Contrast</h3>
      <p>
        Text must have enough contrast with the background to be readable,
        especially for users with low vision or color blindness.
      </p>
      <ul>
        <li>Recommended contrast ratio: <strong>4.5:1</strong> for normal text.</li>
        <li>Large text: <strong>3:1</strong>.</li>
        <li>Avoid using color alone to show meaning.</li>
        <li>Use tools like “Contrast Checker”.</li>
      </ul>

      <h3>5. Alt Text for Images</h3>
      <p>
        Every meaningful image must include <strong>alt text</strong> that
        describes its purpose.
      </p>
      <ul>
        <li><code>alt="User profile photo"</code> – descriptive alt text.</li>
        <li>
          Decorative images should have <code>alt=""</code> so screen readers
          skip them.
        </li>
      </ul>

      <h3>6. Semantic HTML</h3>
      <p>
        Using elements that clearly describe their meaning improves accessibility.
      </p>
      <ul>
        <li><code>&lt;nav&gt;</code> — navigation menu</li>
        <li><code>&lt;main&gt;</code> — main content</li>
        <li><code>&lt;button&gt;</code> — use for buttons, not div/span</li>
        <li><code>&lt;footer&gt;</code> — page footer</li>
        <li>Correct heading order (never skip levels)</li>
      </ul>

      <h3>7. Forms Accessibility</h3>
      <ul>
        <li>Each input must have a <code>&lt;label&gt;</code>.</li>
        <li>Use <code>aria-required</code> for required fields.</li>
        <li>Describe errors using <code>aria-live</code>.</li>
        <li>Group related fields using <code>&lt;fieldset&gt;</code>.</li>
      </ul>

      <h2>Accessibility Standards</h2>
      <ul>
        <li><strong>WCAG</strong> — Web Content Accessibility Guidelines.</li>
        <li><strong>POUR Principles</strong> — Perceivable, Operable, Understandable, Robust.</li>
        <li><strong>ADA Compliance</strong> — legal accessibility requirement (US).</li>
      </ul>

      <h2>Common Accessibility Mistakes</h2>
      <ul>
        <li>Removing focus outlines.</li>
        <li>Using divs/spans instead of buttons/links.</li>
        <li>Missing alt text for images.</li>
        <li>Poor color contrast.</li>
        <li>Misusing ARIA roles.</li>
        <li>Incorrect heading hierarchy.</li>
      </ul>

      <h2>Why Accessibility Helps Everyone</h2>
      <ul>
        <li>Better SEO (search engines behave like screen readers).</li>
        <li>Better UX for keyboard users.</li>
        <li>Improved clarity and structure.</li>
        <li>More usable for elderly or low-vision users.</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is A11y?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A11y stands for Accessibility — making the web usable
          for people with disabilities.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is ARIA used for?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> ARIA adds extra accessibility information to
          elements for assistive technologies.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do screen readers work?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They read out semantic HTML, labels, roles, and
          structure to visually impaired users.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the recommended color contrast ratio?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> 4.5:1 for normal text, 3:1 for large text.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why is semantic HTML important?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> It gives meaning to content, improves SEO,
          readability, and accessibility.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>A11y ensures websites work for disabled users.</li>
        <li>Use semantic HTML, proper labels, alt text, and ARIA roles.</li>
        <li>Keyboard navigation must work everywhere.</li>
        <li>Color contrast is essential for readability.</li>
        <li>Accessibility improves SEO and user experience.</li>
        <li>Mandatory knowledge for frontend developers & interviews.</li>
      </ul>
    </>
  ),
  priority: "Compulsory",
},
{
  id: 8,
  name: "Web Standards & Protocols",
  title: "Web Standards & Protocols",
  path: "/web/web-standards",
  explanation: (
    <>
      <p>
        <strong>Web Standards & Protocols</strong> ensure that websites work the
        same way across all browsers (Chrome, Firefox, Edge, Safari).
        These standards are created and maintained by organizations like{" "}
        <strong>W3C</strong> (World Wide Web Consortium) and{" "}
        <strong>WHATWG</strong> (Web Hypertext Application Technology Working Group).
      </p>

      <h2>Why Web Standards Matter?</h2>
      <ul>
        <li>Same website works on all browsers</li>
        <li>No weird layout issues</li>
        <li>Better performance</li>
        <li>Better accessibility</li>
        <li>Cleaner and future-proof code</li>
      </ul>

      <h2>Main Web Standards</h2>
      <ul>
        <li>
          <strong>HTML5 Specification</strong> – rules for how HTML tags behave
        </li>
        <li>
          <strong>DOM</strong> (Document Object Model) – browser’s structure of
          your page as objects
        </li>
        <li>
          <strong>CSSOM</strong> (CSS Object Model) – how browsers understand and
          apply CSS rules
        </li>
        <li>
          <strong>ECMAScript</strong> – rules for JavaScript
        </li>
        <li>
          <strong>URL Standard</strong> – how browser reads and processes URLs
        </li>
      </ul>

      <h2>Who Defines These Standards?</h2>
      <ul>
        <li>
          <strong>W3C (World Wide Web Consortium):</strong> HTML, CSS, ARIA
        </li>
        <li>
          <strong>WHATWG (Web Hypertext Application Technology Working Group):</strong>{" "}
          HTML Living Standard, DOM, Fetch API
        </li>
      </ul>

      <h2>Cross-Browser Compatibility</h2>
      <p>
        This means making sure your website works the same on all browsers.
        Developers use:
      </p>
      <ul>
        <li><strong>Autoprefixer</strong> – adds missing CSS prefixes</li>
        <li><strong>Can I Use</strong> – to check browser support</li>
        <li><strong>Polyfills</strong> – extra JS code to support old browsers</li>
        <li><strong>Transpilers</strong> (like Babel) – convert modern JS to older JS</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is W3C?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> World Wide Web
          Consortium — it creates web standards.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is WHATWG?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A group that
          maintains the HTML Living Standard and modern browser APIs.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the DOM?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Document Object
          Model — the browser’s representation of your webpage.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is CSSOM?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> CSS Object Model —
          how the browser understands CSS rules.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you handle
          cross-browser issues?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using Can I
          Use, polyfills, Babel, and CSS autoprefixer.
        </li>
      </ul>
    </>
  ),
  priority: "High",
},
{
  id: 9,
  name: "Progressive Web Apps (PWA)",
  title: "Progressive Web Apps (PWA)",
  path: "/web/pwa",
  explanation: (
    <>
      <p>
  <strong>Progressive Web Apps (PWA)</strong> are websites that feel like apps
  you install on your phone or computer. You can open them without internet
  (offline), get notifications, and add them to your home screen, just like
  a normal app.
</p>

      <h2>Why PWAs Matter</h2>
      <ul>
        <li>Users can access the app even without internet (offline support)</li>
        <li>Can be installed on the home screen without app stores</li>
        <li>Faster and smoother experience than regular websites</li>
        <li>Push notifications help engage users</li>
        <li>Good topic for frontend and full-stack interviews</li>
      </ul>

      <h2>Key Concepts</h2>

      <h3>1. Service Workers</h3>
      <p>
        A <strong>Service Worker</strong> is a background script that runs in
        the browser. It intercepts network requests, handles caching, and allows
        offline usage.
      </p>
      <ul>
        <li>Runs separately from web page</li>
        <li>Caches files for offline use</li>
        <li>Manages background sync and push notifications</li>
      </ul>

      <h3>2. App Manifest</h3>
      <p>
        <strong>Web App Manifest</strong> is a JSON file that tells the browser
        how your PWA should behave when installed on a device.
      </p>
      <ul>
        <li>App name, short name, icons</li>
        <li>Theme color, background color</li>
        <li>Start URL and display mode (fullscreen, standalone)</li>
      </ul>

      <h3>3. Offline Capabilities</h3>
      <ul>
        <li>Caches static files (HTML, CSS, JS)</li>
        <li>Can serve content when network is unavailable</li>
        <li>Improves user experience in poor network areas</li>
      </ul>

      <h3>4. Push Notifications</h3>
      <p>
        Allows the PWA to send messages to the user even when the app is not
        open.
      </p>
      <ul>
        <li>Requires user permission</li>
        <li>Used for updates, alerts, or reminders</li>
        <li>Helps improve user engagement</li>
      </ul>

      <h2>Benefits of PWAs</h2>
      <ul>
        <li>Works offline and on low-quality networks</li>
        <li>No need to publish in app stores</li>
        <li>Lightweight and fast</li>
        <li>Improves user retention and engagement</li>
        <li>Cross-platform support (mobile, tablet, desktop)</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a PWA?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Progressive Web App is a website that behaves like a native app with offline support and push notifications.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a Service Worker?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A background script that manages caching, offline support, and background tasks.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the Web App Manifest?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A JSON file that defines how the PWA should appear and behave when installed on a device.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do PWAs work offline?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Service workers cache files and data so the app can run without internet.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why are push notifications useful in PWAs?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They allow apps to send updates and engage users even when the app is closed.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>PWAs provide app-like experience on the web.</li>
        <li>Service Workers enable offline support and caching.</li>
        <li>Manifest file controls app installation and appearance.</li>
        <li>Push notifications help maintain user engagement.</li>
        <li>Essential for modern frontend and full-stack web development interviews.</li>
      </ul>
    </>
  ),
  priority: "Medium",
},
{
  id: 10,
  name: "Web APIs",
  title: "Web APIs",
  path: "/web/web-apis",
  explanation: (
    <>
      <p>
        <strong>Web APIs</strong> (Application Programming Interfaces) are tools that browsers provide
        so websites can do cool things without needing extra software.
        They let you use things like <strong>fetching data</strong>, <strong>storing data</strong>,
        <strong>geolocation</strong>, and more, just with simple code.
      </p>

      <h2>Why Web APIs Matter</h2>
      <ul>
        <li>They make websites interactive and powerful.</li>
        <li>You can access device features like location or camera safely.</li>
        <li>Helps developers build modern web apps faster.</li>
        <li>Important for frontend interviews and practical development.</li>
      </ul>

      <h2>Common Browser Web APIs</h2>
      <ul>
        <li>
          <strong>Fetch API</strong> — Request and get data from a server (like calling a mini web service).
        </li>
        <li>
          <strong>Local Storage / Session Storage</strong> — Save small amounts of data in the browser.
        </li>
        <li>
          <strong>Geolocation API</strong> — Get user’s location (with permission) for maps or services.
        </li>
        <li>
          <strong>Notification API</strong> — Send push notifications to users.
        </li>
        <li>
          <strong>Canvas API</strong> — Draw graphics or animations on a webpage.
        </li>
        <li>
          <strong>Web Audio API</strong> — Play or process audio in the browser.
        </li>
      </ul>

      <h2>Benefits of Using Web APIs</h2>
      <ul>
        <li>Add interactive features without installing extra software.</li>
        <li>Access device features safely and easily.</li>
        <li>Improve user experience with offline support, notifications, or dynamic content.</li>
        <li>Speeds up development and reduces extra libraries.</li>
      </ul>

      <h2>Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a Web API?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A tool provided by browsers to let websites access features like storage, location, and network requests.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the Fetch API used for?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To send requests and get data from servers asynchronously.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does localStorage differ from sessionStorage?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> localStorage keeps data even after closing the browser, sessionStorage clears data when the tab closes.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Can Web APIs access device features?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Yes, with user permission, APIs like Geolocation, Camera, or Notifications can access certain features.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Web APIs let websites interact with the browser and device.</li>
        <li>Common APIs: Fetch, Storage, Geolocation, Notifications, Canvas.</li>
        <li>They improve user experience and make apps more powerful.</li>
        <li>Important topic for frontend interviews and real-world apps.</li>
      </ul>
    </>
  ),
  priority: "Medium",
},
];
