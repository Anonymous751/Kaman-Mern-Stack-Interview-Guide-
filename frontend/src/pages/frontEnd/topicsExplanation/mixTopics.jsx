
const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};


export const mixTopics = [
  {
    id: 172,
    title: "Version Control (Git)",
    path: "/frontend/git",
    explanation: (
      <>
        <p>
          <strong>Git</strong> is a distributed version control system that
          helps you track code changes, collaborate with teams, and manage
          project history efficiently. Every developer MUST know Git to work
          professionally.
        </p>

        <h2>Why Git is Important?</h2>
        <ul>
          <li>Tracks every code change over time.</li>
          <li>Allows reverting back if something breaks.</li>
          <li>Supports collaboration using branches.</li>
          <li>Prevents overwriting each other’s work.</li>
        </ul>

        <h2>Basic Git Commands</h2>
        <pre>
          {`git init           # start a repository
git status          # check changes
git add .           # stage changes
git commit -m "msg" # save a version
git log             # view commit history`}
        </pre>

        <h2>Branching</h2>
        <p>
          Branches allow parallel development without affecting the main code.
        </p>
        <pre>
          {`git branch feature-login
git checkout feature-login
git checkout -b feature-auth`}
        </pre>

        <h2>Merging</h2>
        <p>
          Merge combines your branch code into another branch (usually{" "}
          <strong>main</strong>).
        </p>
        <pre>
          {`git checkout main
git merge feature-login`}
        </pre>

        <h2>Rebase (Cleaner history)</h2>
        <p>Rebasing moves your commits on top of latest main branch commits.</p>
        <pre>
          {`git checkout feature-login
git rebase main`}
        </pre>

        <h2>Git Workflow Used in Companies</h2>
        <ul>
          <li>
            Clone repo → create branch → write code → commit → push branch
          </li>
          <li>Create Pull Request (PR) → get code reviewed → merge to main</li>
          <li>
            Avoid pushing directly to <strong>main</strong>
          </li>
        </ul>

        <h2>Common Interview Questions</h2>
        <ul>
          <li>
            <strong>Q:</strong> What is Git?
            <br />
            <strong>A:</strong> A distributed version control system that tracks
            code changes.
          </li>

          <li>
            <strong>Q:</strong> Git merge vs Git rebase?
            <br />
            <strong>A:</strong> Merge keeps history as-is. Rebase creates a
            cleaner linear history.
          </li>

          <li>
            <strong>Q:</strong> What is a Pull Request?
            <br />
            <strong>A:</strong> A request to merge your branch into main after
            code review.
          </li>

          <li>
            <strong>Q:</strong> What is the use of `.gitignore`?
            <br />
            <strong>A:</strong> Prevents unwanted files (node_modules, envs)
            from being committed.
          </li>

          <li>
            <strong>Q:</strong> What is HEAD in Git?
            <br />
            <strong>A:</strong> Pointer to your current branch and commit.
          </li>

          <li>
            <strong>Q:</strong> How to undo a commit?
            <br />
            <strong>A:</strong>
            <>
              <code>git reset --soft HEAD~1</code> <br />
              <code> git revert &lt;commit-id&gt;</code> (safe for production)
            </>
          </li>
        </ul>

        <h2>Golden Rules of Git</h2>
        <ul>
          <li>Commit often, with clear messages.</li>
          <li>NEVER commit secrets (.env).</li>
          <li>Pull before you push.</li>
          <li>Use branches for each feature or bug fix.</li>
        </ul>
      </>
    ),
  },

  {
    id: 173,
    title: "TypeScript Basics",
    path: "/frontend/typescript",
    explanation: (
      <>
        <p>
          <strong>TypeScript (TS)</strong> is a superset of JavaScript that adds
          static typing, making code safer, more predictable, and easier to
          debug. TS is widely used in modern frontend frameworks like React,
          Angular, and Next.js.
        </p>

        <h2>Why TypeScript?</h2>
        <ul>
          <li>Catches errors during development (before runtime).</li>
          <li>Better IntelliSense and autocomplete.</li>
          <li>Improves code readability and maintainability.</li>
          <li>Makes large-scale applications easier to manage.</li>
          <li>
            Supports OOP concepts (classes, interfaces, access modifiers).
          </li>
        </ul>

        <h2>Basic Types</h2>
        <pre>
          {`let age: number = 20;
let name: string = "Kaman";
let isDev: boolean = true;
let skills: string[] = ["JS", "TS", "React"];`}
        </pre>

        <h2>Union Types</h2>
        <p>Variable can store multiple types.</p>
        <pre>
          {`let id: number | string;
id = 101;
id = "A123";`}
        </pre>

        <h2>Type Aliases</h2>
        <pre>
          {`type UserID = number | string;

let userId: UserID = 101;`}
        </pre>

        <h2>Interfaces</h2>
        <pre>
          {`interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
}

const u1: User = {
  id: 1,
  name: "Lexi"
};`}
        </pre>

        <h2>Functions with Types</h2>
        <pre>
          {`function sum(a: number, b: number): number {
  return a + b;
}`}
        </pre>

        <h2>Generics (Powerful Feature)</h2>
        <pre>
          {`function wrap<T>(value: T): T {
  return value;
}

wrap("Hello");
wrap(123);`}
        </pre>

        <h2>TypeScript in React</h2>
        <pre>
          {`interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};`}
        </pre>

        <h2>Common Interview Questions</h2>
        <ul>
          <li>
            <strong>Q:</strong> What is TypeScript?
            <br />
            <strong>A:</strong> A typed superset of JavaScript that compiles to
            JS.
          </li>

          <li>
            <strong>Q:</strong> Why choose TS over JS?
            <br />
            <strong>A:</strong> Early error detection, strong typing, better
            tooling.
          </li>

          <li>
            <strong>Q:</strong> What are interfaces?
            <br />
            <strong>A:</strong> Structures defining object shapes.
          </li>

          <li>
            <strong>Q:</strong> What are generics?
            <br />
            <strong>A:</strong> Reusable components that work with multiple
            types.
          </li>

          <li>
            <strong>Q:</strong> What is the difference between type and
            interface?
            <br />
            <strong>A:</strong> Types are more flexible; interfaces support
            extension. Both often overlap.
          </li>
        </ul>

        <h2>Tips for Using TS as a Frontend Developer</h2>
        <ul>
          <li>Always define types for props and API responses.</li>
          <li>Use interfaces for objects; use types for unions.</li>
          <li>Prefer generics for reusable functions.</li>
          <li>
            Avoid using <code>any</code> unless necessary.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },

  {
    id: 174,
    title: "Next.js Fundamentals",
    path: "/frontend/nextjs",
    explanation: (
      <>
        <p>
          <strong>Next.js</strong> is a React framework that improves
          performance, SEO, routing, and server-side capabilities. It supports
          <strong> SSR </strong> (Server-Side Rendering),
          <strong> SSG </strong> (Static Site Generation),
          <strong> ISR </strong> (Incremental Static Regeneration), and{" "}
          <strong> API Routes </strong>.
        </p>

        <h2>Why Next.js?</h2>
        <ul>
          <li>Fast server-side rendering improves SEO.</li>
          <li>Built-in file-based routing.</li>
          <li>API routes → Backend without Express.</li>
          <li>Optimized images using next/image.</li>
          <li>Better performance with automatic code splitting.</li>
        </ul>

        <h2>File-Based Routing</h2>
        <pre>
          {`// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}`}
        </pre>

        <h2>Dynamic Routes</h2>
        <pre>
          {`// pages/blog/[id].js
export default function Blog({ params }) {
  return <h1>Blog ID: {params.id}</h1>;
}`}
        </pre>

        <h2>SSR (Server-Side Rendering)</h2>
        <pre>
          {`export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() }
  };
}`}
        </pre>

        <h2>Static Generation (SSG)</h2>
        <pre>
          {`export async function getStaticProps() {
  const data = await fetch(...);
  return { props: { data } };
}`}
        </pre>

        <h2>API Routes</h2>
        <pre>
          {`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ msg: "Hello from API" });
}`}
        </pre>

        <h2>Common Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is Next.js and why is it used?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A React
            framework that adds SSR, routing, optimization, and great
            performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Difference between SSR and SSG?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            SSR renders pages on every request; SSG builds pages at build time.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is ISR (Incremental Static Regeneration)?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Allows static pages to update without full rebuild using a
            revalidate time.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How routing works in Next.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            File-based routing: each file inside <code>pages/</code> becomes a
            route.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are API routes?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Built-in serverless endpoints inside <code>pages/api</code>.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Difference between app router and pages router?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            App router uses React Server Components and layouts; pages router
            uses older file-based SSR system.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is next/image?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            An optimized image component for faster loading and automatic
            resizing.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is getStaticProps vs getServerSideProps?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            <code>getStaticProps</code> → build-time
            <br />
            <code>getServerSideProps</code> → request-time
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is code splitting in Next.js?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Automatically splits bundles to load only needed code per page.
          </li>
        </ul>

        <h2>Next.js Advantages</h2>
        <ul>
          <li>Fast SEO performance.</li>
          <li>Automatic optimization features.</li>
          <li>Hybrid rendering (SSR + SSG + ISR).</li>
          <li>Integrated backend with API routes.</li>
          <li>File-based routing and layouts.</li>
        </ul>
      </>
    ),
  },

  {
    id: 175,
    title: "Authentication & Authorization",
    path: "/frontend/auth",
    explanation: (
      <>
        <p>
          <strong>Authentication</strong> verifies <em>who</em> the user is,
          while <strong>Authorization</strong> defines <em>what</em> the user is
          allowed to do. Modern web apps commonly use <strong>JWT</strong>,{" "}
          <strong>refresh tokens</strong>, and <strong>secure cookies</strong>{" "}
          for managing login sessions safely.
        </p>

        <h2>Authentication Flow (Frontend)</h2>
        <ul>
          <li>User submits email + password.</li>
          <li>
            Server validates and returns an <strong>access token</strong>.
          </li>
          <li>
            Token is stored in <strong>httpOnly cookie</strong> (recommended).
          </li>
          <li>
            Frontend sends token with every request automatically (cookies).
          </li>
        </ul>

        <h2>JWT Access Token Example</h2>
        <pre>
          {`{
  "userId": "12345",
  "role": "admin",
  "iat": 1712340000,
  "exp": 1712343600
}`}
        </pre>

        <h2>Refresh Token Flow</h2>
        <p>
          Access tokens expire quickly (10–15 mins). A{" "}
          <strong>refresh token</strong> is used to get a new access token
          without logging in again.
        </p>

        <pre>
          {`POST /auth/refresh
{
  "refreshToken": "xxxx.yyyy.zzzz"
}`}
        </pre>

        <ul>
          <li>Refresh tokens should be stored in httpOnly cookies.</li>
          <li>Longer expiry (7–30 days).</li>
          <li>
            If refresh token is stolen → attacker can generate new access
            tokens.
          </li>
        </ul>

        <h2>Authorization (Role-Based)</h2>
        <pre>
          {`// Example roles:
Admin → full access
Editor → write + read
User → read only`}
        </pre>

        <h2>Protecting Routes (Frontend Example)</h2>
        <pre>
          {`function PrivateRoute({ children }) {
  const token = getCookie("accessToken");
  return token ? children : <Navigate to="/login" />;
}`}
        </pre>

        <h2>Storing Tokens: Best Practices</h2>
        <ul>
          <li>
            <strong>httpOnly cookies</strong> → safest, prevents XSS.
          </li>
          <li>Never store JWT in localStorage (vulnerable to XSS).</li>
          <li>
            Use <strong>CSRF protection</strong> when using cookies.
          </li>
        </ul>

        <h2>Common Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between authentication and authorization?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Auth<strong>entication</strong> → verifies identity.
            <br />
            Auth<strong>orization</strong> → defines permissions.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is JWT and why is it used?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A compact,
            stateless token used to authenticate users without storing sessions
            on the server.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why do we need refresh tokens?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Access tokens expire fast; refresh tokens issue new access tokens
            without relogin.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Where should JWT be stored?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            httpOnly cookies — secure against XSS and auto-sent with requests.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between cookie-based and token-based auth?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Cookies auto-send credentials; tokens require manual header passing,
            unless stored in cookies.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why are httpOnly cookies recommended over localStorage?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            They prevent JavaScript from accessing tokens → stops XSS token
            theft.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is CSRF and how do you prevent it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use SameSite cookies, CSRF tokens, and double-submit cookie
            strategy.
          </li>
        </ul>

        <h2>Advantages</h2>
        <ul>
          <li>Stateless authentication using JWT.</li>
          <li>Secure token handling with httpOnly cookies.</li>
          <li>Scalable across microservices.</li>
          <li>Easy to integrate in frontend frameworks.</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 176,
    title: "Security (XSS, CSRF, CORS)",
    path: "/frontend/security",
    explanation: (
      <>
        <p>
          Web security protects your application from malicious actions.
          Important concepts include <strong>XSS</strong>, <strong>CSRF</strong>
          , <strong>CORS</strong>, <strong>input sanitization</strong>, and{" "}
          <strong>OWASP recommendations</strong>. A frontend developer must
          understand these threats and how to avoid them.
        </p>

        <h2>1. XSS (Cross-Site Scripting)</h2>
        <p>
          XSS happens when untrusted input is displayed on the page without
          sanitization. Attackers can attempt to inject harmful scripts.
          Prevention focuses on <strong>escaping</strong>,{" "}
          <strong>sanitizing</strong>, and{" "}
          <strong>avoiding unsafe rendering</strong>.
        </p>

        <h3>How to Prevent XSS</h3>
        <ul>
          <li>
            Never use <code>dangerouslySetInnerHTML</code> unless required.
          </li>
          <li>Escape & sanitize user input before displaying.</li>
          <li>Validate backend output as well.</li>
          <li>Use Content Security Policy (CSP).</li>
        </ul>

        <h2>2. CSRF (Cross-Site Request Forgery)</h2>
        <p>
          CSRF tricks a logged-in user into performing unintended actions.
          Modern defenses rely on <strong>SameSite cookies</strong>,{" "}
          <strong>CSRF tokens</strong>, and ensuring sensitive actions are
          protected.
        </p>

        <h3>Common Prevention</h3>
        <ul>
          <li>
            Use <strong>SameSite=Lax</strong> or{" "}
            <strong>SameSite=Strict</strong> cookies.
          </li>
          <li>Use CSRF tokens in forms or APIs.</li>
          <li>Check referrer/origin headers on backend.</li>
        </ul>

        <h2>3. CORS (Cross-Origin Resource Sharing)</h2>
        <p>
          CORS is a browser security feature. It prevents requests from domains
          that the server does not trust. With proper headers, servers grant
          access to specific frontends.
        </p>

        <pre>
          {`Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Credentials: true`}
        </pre>

        <ul>
          <li>Frontend cannot “fix” CORS — server decides permission.</li>
          <li>
            Avoid using <code>*</code> when cookies are involved.
          </li>
        </ul>

        <h2>4. OWASP Top Recommendations</h2>
        <ul>
          <li>Validate all inputs.</li>
          <li>Escape dynamic content.</li>
          <li>Use HTTPS everywhere.</li>
          <li>Never expose sensitive data in frontend code.</li>
          <li>Rotate tokens & keys regularly.</li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is XSS and how do you prevent it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            XSS occurs when unsafe input gets rendered on the UI. Prevent by
            sanitizing inputs, avoiding unsafe rendering, and using CSP.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is CSRF?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            CSRF tricks users into performing unintended actions. Prevent with
            SameSite cookies, CSRF tokens, and origin checks.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Who controls CORS: frontend or backend?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Only the backend controls CORS by setting headers that define
            allowed origins.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is <code>dangerouslySetInnerHTML</code> risky?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It renders raw HTML directly and can expose your app to XSS if
            misused.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is CSP and why use it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            CSP blocks scripts from unknown sources and reduces XSS risk.
          </li>
        </ul>

        <h2>Advantages of Proper Security</h2>
        <ul>
          <li>Protects user data.</li>
          <li>Builds trust and reliability.</li>
          <li>Prevents attacks without manual monitoring.</li>
          <li>Required for enterprise-level applications.</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 177,
    title: "Accessibility (A11y)",
    path: "/frontend/a11y",
    explanation: (
      <>
        <p>
          Accessibility (A11y) ensures that websites and applications can be
          used by everyone — including people with disabilities. It focuses on{" "}
          <strong>keyboard navigation</strong>,<strong>semantic HTML</strong>,{" "}
          <strong>ARIA roles</strong>,<strong>color contrast</strong>, and{" "}
          <strong>screen reader compatibility</strong>.
        </p>

        <h2>1. Semantic HTML</h2>
        <p>
          Using meaningful HTML tags helps browsers, assistive tools, and search
          engines understand your content structure.
        </p>
        <ul>
          <li>
            Use <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>,{" "}
            <code>&lt;footer&gt;</code>.
          </li>
          <li>
            Use <code>&lt;button&gt;</code> instead of clickable{" "}
            <code>&lt;div&gt;</code>.
          </li>
          <li>
            Use <code>&lt;label&gt;</code> properly with form inputs.
          </li>
        </ul>

        <h2>2. Keyboard Navigation</h2>
        <p>
          Users should be able to navigate your website entirely using the
          keyboard (Tab, Enter, Space, Arrow keys).
        </p>
        <ul>
          <li>
            Avoid removing outline unless you replace it with a custom focus
            style.
          </li>
          <li>Ensure modals and dropdowns trap focus correctly.</li>
          <li>
            Use <code>tabIndex</code> wisely — avoid positive tabIndex.
          </li>
        </ul>

        <h2>3. ARIA Roles (When Needed)</h2>
        <p>
          ARIA (Accessible Rich Internet Applications) enhances accessibility
          when semantic HTML is not enough.
        </p>
        <ul>
          <li>
            Use <code>role="button"</code> only when not using a proper button
            tag.
          </li>
          <li>
            Use <code>aria-label</code> for non-text icons (like menu or close
            icons).
          </li>
          <li>
            Avoid using ARIA if semantic HTML already conveys the meaning.
          </li>
        </ul>

        <h2>4. Color Contrast</h2>
        <p>
          Text must be readable for users with low vision or color blindness.
        </p>
        <ul>
          <li>
            Minimum contrast ratio: <strong>4.5:1</strong> for normal text.
          </li>
          <li>
            Avoid using color alone to convey meaning (e.g., “red means error”).
          </li>
          <li>Use accessible color palettes & contrast-checking tools.</li>
        </ul>

        <h2>5. Screen Reader Support</h2>
        <p>Support assistive technologies like VoiceOver and NVDA.</p>
        <ul>
          <li>
            Use <code>alt</code> text for images.
          </li>
          <li>
            Use <code>aria-live</code> regions for dynamic updates.
          </li>
          <li>
            Hide decorative icons with <code>aria-hidden="true"</code>.
          </li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is accessibility (A11y)?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Accessibility ensures that all users, including people with
            disabilities, can use your website through proper structure,
            semantics, and keyboard support.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is semantic HTML important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Semantic HTML improves screen reader interpretation, SEO, and
            overall usability.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is tabIndex?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It controls the tab order for keyboard navigation. Use 0 or -1,
            never positive values.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            When should you use ARIA?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use ARIA only when semantic HTML cannot describe the element’s
            purpose.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is color contrast important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It ensures users with visual impairments can read text and interpret
            UI elements.
          </li>
        </ul>

        <h2>Benefits of Accessibility</h2>
        <ul>
          <li>Makes your app usable by everyone.</li>
          <li>Improves SEO (Google prefers accessible websites).</li>
          <li>Enhances UI/UX quality.</li>
          <li>Required for legal compliance in many countries.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 178,
    title: "Web Performance & Core Web Vitals",
    path: "/frontend/web-vitals",
    explanation: (
      <>
        <p>
          Web Performance focuses on making your website fast, responsive, and
          smooth. Core Web Vitals measure real-world user experience including
          load speed, interactivity, and visual stability. Improving these
          metrics leads to better SEO, higher user satisfaction, and reduced
          bounce rates.
        </p>

        <h2>1. LCP (Largest Contentful Paint)</h2>
        <p>
          LCP measures how long it takes for the main content of the page to
          become visible. Good LCP is <strong>under 2.5 seconds</strong>.
        </p>

        <h3>How to Improve LCP</h3>
        <ul>
          <li>Use optimized and compressed images (WebP, AVIF).</li>
          <li>Lazy-load below-the-fold images.</li>
          <li>Use a fast hosting/CDN (Cloudflare, Netlify, Vercel).</li>
          <li>Remove render-blocking CSS & JS.</li>
          <li>Use caching (browser cache, service workers).</li>
        </ul>

        <h2>2. CLS (Cumulative Layout Shift)</h2>
        <p>
          CLS measures unexpected layout shifts (e.g., images pushing content
          down). Good CLS should be <strong>less than 0.1</strong>.
        </p>

        <h3>How to Improve CLS</h3>
        <ul>
          <li>Always set width and height for images.</li>
          <li>Reserve space for ads, banners, and dynamic content.</li>
          <li>Avoid injecting DOM elements above existing content.</li>
          <li>Use CSS aspect-ratio to prevent jumps.</li>
        </ul>

        <h2>3. INP (Interaction to Next Paint)</h2>
        <p>
          INP (replacing FID) measures how quickly the page responds to user
          interactions like clicks or taps. Good INP is{" "}
          <strong>under 200ms</strong>.
        </p>

        <h3>How to Improve INP</h3>
        <ul>
          <li>Reduce heavy JavaScript bundles.</li>
          <li>Use code splitting (React.lazy / dynamic imports).</li>
          <li>Avoid long-running tasks on main thread.</li>
          <li>Use web workers for heavy calculations.</li>
        </ul>

        <h2>4. General Web Performance Tips</h2>
        <ul>
          <li>Use CSS instead of heavy JS animations.</li>
          <li>Minify CSS & JS.</li>
          <li>Preload critical resources (fonts, hero images).</li>
          <li>Use HTTP/2 or HTTP/3 for faster transfer.</li>
          <li>Remove unused libraries and dependencies.</li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is LCP?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            LCP measures how fast the main content loads. Good LCP is under
            2.5s.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What causes CLS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Layout shifts from images without dimensions, ads loading late, or
            DOM injected at the top.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is INP?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            INP measures responsiveness to user interactions. Good INP is under
            200ms.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you reduce JavaScript bundle size?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use tree-shaking, code splitting, dynamic imports, and remove unused
            libraries.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does a CDN improve performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            CDNs deliver assets from servers near the user, reducing latency.
          </li>
        </ul>

        <h2>Benefits of Good Web Performance</h2>
        <ul>
          <li>Higher SEO rankings (Google prioritizes fast sites).</li>
          <li>Better user experience.</li>
          <li>Lowers bounce rate.</li>
          <li>Improves conversions and engagement.</li>
        </ul>
      </>
    ),
    priority: "High",
  },

  {
    id: 179,
    title: "State Management Libraries",
    path: "/frontend/state-management",
    explanation: (
      <>
        <p>
          State management helps control and share data across your application.
          In larger React apps, tools like <strong>Redux Toolkit</strong> and
          <strong>Zustand</strong> make state predictable, scalable, and easy to
          debug.
        </p>

        <h2>1. Redux Toolkit (RTK)</h2>
        <p>
          Redux Toolkit is the recommended way to write Redux code. It
          simplifies reducers, actions, store setup, and avoids boilerplate. RTK
          is great for enterprise-level applications.
        </p>

        <h3>Why Use Redux Toolkit?</h3>
        <ul>
          <li>Less boilerplate than classic Redux.</li>
          <li>
            Built-in <code>createSlice</code> and <code>createAsyncThunk</code>.
          </li>
          <li>Immutable updates handled automatically with Immer.</li>
          <li>Great developer tools (Redux DevTools).</li>
          <li>Perfect for large applications with complex data flow.</li>
        </ul>

        <h3>Common Redux Toolkit Concepts</h3>
        <ul>
          <li>
            <strong>Slice:</strong> Manages a piece of state.
          </li>
          <li>
            <strong>Dispatch:</strong> Triggers state updates.
          </li>
          <li>
            <strong>Selector:</strong> Reads state from store.
          </li>
          <li>
            <strong>Thunk:</strong> Handles async logic.
          </li>
        </ul>

        <h2>2. Zustand</h2>
        <p>
          Zustand is a lightweight, simple, and highly efficient state
          management library for React. It uses minimal boilerplate and has a
          very easy API.
        </p>

        <h3>Why Use Zustand?</h3>
        <ul>
          <li>Very small bundle size.</li>
          <li>No providers, actions, or reducers required.</li>
          <li>Central store with simple syntax using hooks.</li>
          <li>Great for small to medium apps.</li>
          <li>Supports persistence & async state.</li>
        </ul>

        <h3>Common Zustand Concepts</h3>
        <ul>
          <li>
            <strong>Store:</strong> Central state container.
          </li>
          <li>
            <strong>Selectors:</strong> Read parts of the store.
          </li>
          <li>
            <strong>Set function:</strong> Update state easily.
          </li>
        </ul>

        <h2>Choosing Between Redux Toolkit & Zustand</h2>
        <ul>
          <li>
            <strong>RTK is better for:</strong> Large-scale applications, strict
            state structure, heavy async logic, and enterprise teams.
          </li>
          <li>
            <strong>Zustand is better for:</strong> Fast development, smaller
            apps, component-level store sharing, or when Redux feels overkill.
          </li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What problem does state management solve?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It helps manage shared data across components in a predictable way.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is Redux Toolkit preferred over classic Redux?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It reduces boilerplate, simplifies logic, and has better developer
            tools.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            When should you choose Zustand?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            When you want lightweight, fast state management without too much
            structure.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is a slice in Redux Toolkit?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A slice
            contains reducer logic, actions, and a piece of the store state.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Does Zustand require reducers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            No, Zustand uses direct set functions instead of reducers.
          </li>
        </ul>

        <h2>Benefits of Proper State Management</h2>
        <ul>
          <li>More predictable behavior.</li>
          <li>Less debugging time.</li>
          <li>Better performance (memoization, selectors).</li>
          <li>Cleaner and scalable codebase.</li>
        </ul>
      </>
    ),
    priority: "High",
  },

  {
    id: 180,
    title: "Networking & Browser Internals",
    path: "/frontend/browser-internals",
    explanation: (
      <>
        <p>
          Understanding browser internals and networking fundamentals helps
          frontend developers build faster, more optimized applications. Key
          concepts include
          <strong> HTTP/2</strong>, <strong>caching</strong>,{" "}
          <strong>DNS lookup</strong>,<strong> TCP handshake</strong>,{" "}
          <strong>rendering pipelines</strong>, and
          <strong> critical rendering path</strong>.
        </p>

        <h2>1. HTTP/1.1 vs HTTP/2 vs HTTP/3</h2>
        <p>
          Modern websites rely heavily on network performance. Knowing how
          different protocol versions behave is essential.
        </p>

        <h3>HTTP/1.1</h3>
        <ul>
          <li>Limited to one request per connection (causes blocking).</li>
          <li>Requires multiple TCP connections.</li>
          <li>Slow for asset-heavy websites.</li>
        </ul>

        <h3>HTTP/2</h3>
        <ul>
          <li>
            Supports multiplexing — multiple requests in **one connection**.
          </li>
          <li>Header compression for efficiency.</li>
          <li>Server Push (deprecated now but used earlier).</li>
          <li>Much faster for modern sites.</li>
        </ul>

        <h3>HTTP/3</h3>
        <ul>
          <li>Uses QUIC protocol (UDP-based).</li>
          <li>Zero head-of-line blocking.</li>
          <li>Faster in poor network conditions.</li>
          <li>Increasingly adopted by CDNs.</li>
        </ul>

        <h2>2. DNS Lookup</h2>
        <p>
          DNS (Domain Name System) converts human-readable domain names into IP
          addresses.
        </p>

        <h3>DNS Lookup Steps</h3>
        <ul>
          <li>Browser checks local DNS cache.</li>
          <li>Asks OS resolver if not found.</li>
          <li>Resolver queries DNS servers (Recursive lookup).</li>
          <li>Returns IP address to the browser.</li>
        </ul>

        <h3>How to Optimize DNS Time</h3>
        <ul>
          <li>
            Use <code>dns-prefetch</code> for third-party resources.
          </li>
          <li>Use CDN with globally distributed DNS.</li>
          <li>Use fewer external domains.</li>
        </ul>

        <h2>3. Browser Caching</h2>
        <p>
          Caching reduces load times by avoiding repeated downloads of the same
          files.
        </p>

        <h3>Types of Browser Cache</h3>
        <ul>
          <li>
            <strong>Memory Cache:</strong> Fast, stored in RAM.
          </li>
          <li>
            <strong>Disk Cache:</strong> Larger, persistent.
          </li>
          <li>
            <strong>Service Worker Cache:</strong> Programmable offline cache.
          </li>
        </ul>

        <h3>Common Caching Headers</h3>
        <pre>
          {`Cache-Control: max-age=31536000
ETag: "file-version"
Last-Modified: Wed, 12 Oct 2024 12:00:00 GMT`}
        </pre>

        <ul>
          <li>
            <strong>Cache-Control:</strong> Defines how long resources stay
            cached.
          </li>
          <li>
            <strong>ETag:</strong> Helps validate cache freshness.
          </li>
          <li>
            <strong>Last-Modified:</strong> Used for conditional requests.
          </li>
        </ul>

        <h2>4. Browser Rendering Pipeline</h2>
        <p>
          The browser turns HTML/CSS/JS into pixels on screen through multiple
          steps:
        </p>

        <ul>
          <li>HTML → DOM</li>
          <li>CSS → CSSOM</li>
          <li>DOM + CSSOM → Render Tree</li>
          <li>Layout → actual sizes & positions</li>
          <li>Painting → pixels drawn</li>
          <li>Compositing → layers merged</li>
        </ul>

        <h3>How to Optimize Rendering</h3>
        <ul>
          <li>Avoid forced reflows.</li>
          <li>Use CSS animations instead of JS-heavy animations.</li>
          <li>Minimize DOM size.</li>
          <li>
            Use <code>transform</code> and <code>opacity</code> for animations.
          </li>
        </ul>

        <h2>5. Critical Rendering Path</h2>
        <p>
          The critical rendering path includes all resources required to render
          the initial view.
        </p>

        <ul>
          <li>Optimize CSS (critical CSS, minify).</li>
          <li>Defer non-critical JS.</li>
          <li>Use lazy loading for images.</li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between HTTP/1.1 and HTTP/2?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            HTTP/2 supports multiplexing, header compression, and is much
            faster.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is DNS lookup?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A process that
            resolves a domain name into an IP address.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are caching headers?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Headers like Cache-Control, ETag, Last-Modified that control browser
            caching.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the rendering pipeline?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Steps the browser uses to convert code into pixels: DOM → CSSOM →
            Render Tree → Layout → Paint → Composite.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you optimize DNS lookup time?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use dns-prefetch, fewer domains, and global CDNs.
          </li>
        </ul>

        <h2>Benefits of Understanding Browser Internals</h2>
        <ul>
          <li>Improves performance optimization.</li>
          <li>Helps debug network-related issues.</li>
          <li>Leads to faster loading websites.</li>
          <li>Better frontend architecture decisions.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 181,
    title: "Error Tracking & Monitoring",
    path: "/frontend/monitoring",
    explanation: (
      <>
        <p>
          Error tracking and monitoring helps developers understand runtime
          errors, performance bottlenecks, user session issues, and unexpected
          behaviors in production. Tools like <strong>Sentry</strong> and{" "}
          <strong>LogRocket</strong>
          provide real-time insights, making debugging much easier.
        </p>

        <h2>1. Sentry</h2>
        <p>
          Sentry is a popular error tracking platform that helps capture, log,
          and analyze JavaScript and React errors in real time.
        </p>

        <h3>Why Use Sentry?</h3>
        <ul>
          <li>Captures unhandled exceptions & API errors.</li>
          <li>Shows stack traces with exact error location.</li>
          <li>Integrates easily with React, Next.js, Node.js.</li>
          <li>User context & breadcrumbs before the error.</li>
          <li>Alerts for new or recurring errors.</li>
        </ul>

        <h3>Common Sentry Features</h3>
        <ul>
          <li>
            <strong>Release Tracking:</strong> See which version introduced a
            bug.
          </li>
          <li>
            <strong>Session Replay:</strong> Watch what the user did before the
            error.
          </li>
          <li>
            <strong>Performance Monitoring:</strong> Slow API, long tasks, FPS
            drops.
          </li>
          <li>
            <strong>Environment Filters:</strong> dev/prod error separation.
          </li>
        </ul>

        <h2>2. LogRocket</h2>
        <p>
          LogRocket is a session replay and performance monitoring tool focused
          on understanding user behavior and UI issues.
        </p>

        <h3>Why Use LogRocket?</h3>
        <ul>
          <li>Records real user sessions like a video.</li>
          <li>Shows Redux state changes, network logs, console logs.</li>
          <li>
            Performance insights: slow renders, layout shifts, CPU blocks.
          </li>
          <li>Helps reproduce UI bugs that are hard to debug.</li>
        </ul>

        <h3>Common LogRocket Features</h3>
        <ul>
          <li>
            <strong>Session Replay:</strong> See user clicks, scrolls, UI
            interactions.
          </li>
          <li>
            <strong>Network Monitoring:</strong> Tracks failed API calls.
          </li>
          <li>
            <strong>Redux Debugger:</strong> Time-travel state debugging.
          </li>
          <li>
            <strong>User Tracking:</strong> Identify which user faced the issue.
          </li>
        </ul>

        <h2>3. Why Monitoring Matters</h2>
        <p>
          Monitoring ensures your app stays healthy, performant, and
          user-friendly even after deployment.
        </p>

        <ul>
          <li>Detects issues before users report them.</li>
          <li>Helps identify crashes & bottlenecks.</li>
          <li>Improves user experience with faster debugging.</li>
          <li>Reduces support ticket load.</li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is Sentry used for?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Capturing and tracking frontend errors with stack trace, metadata,
            and alerts.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How is LogRocket different from Sentry?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            LogRocket focuses on session replay and UI behavior, while Sentry
            focuses on error tracking and debugging.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is session replay?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A feature that
            records user interactions so developers can watch what happened
            before an error.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is monitoring important in production?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It helps detect issues early, improve performance, and ensure a
            stable user experience.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are breadcrumbs in Sentry?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Breadcrumbs show events leading up to an error — clicks, navigation,
            logs, etc.
          </li>
        </ul>

        <h2>Benefits of Error Monitoring</h2>
        <ul>
          <li>Fix issues faster with accurate debugging data.</li>
          <li>Understand real user behavior.</li>
          <li>Increase reliability of your app.</li>
          <li>Improve performance with actionable metrics.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 182,
    title: "API Architecture Knowledge",
    path: "/frontend/api-architecture",
    explanation: (
      <>
        <p>
          Understanding API architecture is crucial for building scalable and
          maintainable applications. It includes designing <strong>REST</strong>{" "}
          APIs, using <strong>GraphQL</strong>
          for flexible queries, and implementing <strong>
            rate limiting
          </strong>{" "}
          to prevent abuse.
        </p>

        <h2>1. REST APIs</h2>
        <p>
          REST (Representational State Transfer) is an architectural style for
          building APIs. It uses standard HTTP methods and predictable
          endpoints.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li>
            Use <code>GET</code>, <code>POST</code>, <code>PUT</code>,{" "}
            <code>DELETE</code> appropriately.
          </li>
          <li>Stateless: Each request contains all necessary info.</li>
          <li>
            Resource-based URLs: e.g., <code>/users/123</code>.
          </li>
          <li>Supports caching for performance.</li>
          <li>Use proper HTTP status codes.</li>
        </ul>

        <h2>2. GraphQL</h2>
        <p>
          GraphQL is a query language for APIs that allows clients to request
          exactly the data they need. It reduces over-fetching and
          under-fetching of data.
        </p>

        <h3>Why Use GraphQL?</h3>
        <ul>
          <li>Single endpoint for all queries and mutations.</li>
          <li>Clients can select exactly what fields they need.</li>
          <li>Strongly typed schema ensures consistency.</li>
          <li>Supports real-time updates via subscriptions.</li>
          <li>Good for complex applications with multiple clients.</li>
        </ul>

        <h2>3. Rate Limiting</h2>
        <p>
          Rate limiting protects your API from excessive or malicious requests.
        </p>

        <h3>Common Strategies</h3>
        <ul>
          <li>Fixed window or sliding window algorithms.</li>
          <li>Token bucket or leaky bucket techniques.</li>
          <li>
            Return <code>429 Too Many Requests</code> when limits exceeded.
          </li>
          <li>Helps prevent server overload and abuse.</li>
        </ul>

        <h2>Interview Questions</h2>

        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is REST?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            REST is an architectural style using HTTP methods for stateless,
            resource-based APIs.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How is GraphQL different from REST?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            GraphQL allows clients to request only the data they need from a
            single endpoint, unlike REST which may over-fetch or under-fetch.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why use rate limiting?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            To prevent abuse, reduce server load, and maintain API reliability.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What HTTP methods are commonly used in REST?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            GET, POST, PUT, PATCH, DELETE.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can GraphQL replace REST completely?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It can in many scenarios, but REST may still be simpler for small
            APIs or static resources.
          </li>
        </ul>

        <h2>Benefits of Good API Architecture</h2>
        <ul>
          <li>Improves scalability and maintainability.</li>
          <li>Reduces network overhead.</li>
          <li>Makes client-server communication predictable.</li>
          <li>Helps enforce security and performance standards.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 183,
    title: "File Uploads & Image Optimization",
    path: "/frontend/file-upload",
    explanation: (
      <>
        <p>
          Efficient file uploads and optimized images are crucial for
          fast-loading websites and good user experience. Techniques include{" "}
          <strong>compression</strong>,<strong>lazy loading</strong>, and proper
          file formats.
        </p>

        <h2>1. File Uploads</h2>
        <p>
          Handling file uploads involves sending files from client to server
          safely and efficiently.
        </p>

        <h3>Best Practices</h3>
        <ul>
          <li>Validate file type and size before uploading.</li>
          <li>Use multipart/form-data for file transfers.</li>
          <li>
            Store files in cloud storage (S3, Firebase Storage) for scalability.
          </li>
          <li>Provide progress indicators for better UX.</li>
          <li>Handle errors and retries gracefully.</li>
        </ul>

        <h2>2. Image Optimization</h2>
        <p>
          Optimized images improve load times, reduce bandwidth, and improve
          Core Web Vitals.
        </p>

        <h3>Techniques</h3>
        <ul>
          <li>Compress images using tools like TinyPNG or ImageMagick.</li>
          <li>Use modern formats (WebP, AVIF) for smaller sizes.</li>
          <li>
            Lazy-load offscreen images using <code>loading="lazy"</code>.
          </li>
          <li>
            Serve responsive images using <code>srcset</code>.
          </li>
          <li>Use CDNs to deliver images faster globally.</li>
        </ul>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you handle large file uploads in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use multipart/form-data, validate files, show progress, and upload
            to cloud storage if needed.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is lazy loading for images?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Loading images only when they enter the viewport to save bandwidth
            and improve performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Which image formats are preferred for web performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            WebP, AVIF, and optimized JPEG/PNG.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is image compression important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Reduces file size, improves load speed, and enhances user
            experience.
          </li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Faster page load times.</li>
          <li>Reduced server bandwidth and storage.</li>
          <li>Improved SEO and Core Web Vitals.</li>
          <li>Better user experience on mobile and slow networks.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 184,
    title: "WebSockets & Real-time Updates",
    path: "/frontend/websockets",
    explanation: (
      <>
        <p>
          WebSockets allow real-time, bidirectional communication between client
          and server. They are essential for applications like live chat,
          dashboards, notifications, collaborative tools, and multiplayer games.
        </p>

        <h2>1. What are WebSockets?</h2>
        <p>
          WebSockets establish a persistent TCP connection between client and
          server, enabling continuous two-way data flow. Unlike HTTP, WebSockets
          do not require repeated requests for updates, reducing latency and
          network overhead.
        </p>

        <h3>Key Advantages</h3>
        <ul>
          <li>
            Full-duplex communication: data can be sent and received
            simultaneously.
          </li>
          <li>Lower latency compared to traditional polling.</li>
          <li>Reduces unnecessary HTTP requests and overhead.</li>
          <li>
            Ideal for real-time applications that require instant updates.
          </li>
        </ul>

        <h2>2. Socket.io</h2>
        <p>
          Socket.io is a popular JavaScript library for implementing WebSockets
          in Node.js and browser environments. It simplifies real-time
          communication with additional features.
        </p>

        <h3>Features of Socket.io</h3>
        <ul>
          <li>Automatic reconnection if the connection drops.</li>
          <li>Event-based communication with custom events.</li>
          <li>
            Supports rooms and namespaces to manage multiple users and channels.
          </li>
          <li>
            Fallback to HTTP long-polling when WebSockets are not supported.
          </li>
          <li>Binary data support for file transfers.</li>
        </ul>

        <h2>3. Real-time Updates</h2>
        <p>
          Real-time updates enable the user interface to reflect changes
          immediately without refreshing the page. This is critical for modern
          interactive applications.
        </p>

        <h3>Use Cases</h3>
        <ul>
          <li>Live chat and messaging platforms.</li>
          <li>Stock market or cryptocurrency dashboards.</li>
          <li>Collaborative document editing (like Google Docs).</li>
          <li>Live notifications for events, messages, or alerts.</li>
          <li>Real-time gaming updates in multiplayer games.</li>
        </ul>

        <h2>4. Implementation Tips</h2>
        <ul>
          <li>Always handle connection drops and reconnections gracefully.</li>
          <li>Use authentication for secure WebSocket connections.</li>
          <li>Limit the size of messages to optimize performance.</li>
          <li>
            Use rooms/namespaces to segment traffic and manage resources
            efficiently.
          </li>
          <li>Monitor server load to handle high concurrency.</li>
        </ul>

        <h2>5. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is a WebSocket?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A WebSocket is
            a persistent connection that allows bidirectional, real-time
            communication between client and server.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does WebSocket differ from HTTP?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            HTTP is stateless and request-response based, while WebSockets
            maintain a persistent connection and allow continuous two-way data
            transfer.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why use Socket.io over plain WebSockets?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Socket.io provides automatic reconnections, event-based
            communication, fallbacks, and additional features like rooms and
            namespaces.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Name some real-time applications that use WebSockets.
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Live chat, notifications, dashboards, multiplayer games, and
            collaborative editors.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the benefit of using rooms or namespaces in Socket.io?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Rooms and namespaces help segment users and events efficiently,
            reducing unnecessary message broadcasting.
          </li>
        </ul>

        <h2>Benefits of WebSockets & Real-time Updates</h2>
        <ul>
          <li>Instant feedback improves user experience.</li>
          <li>Reduces server load compared to frequent polling.</li>
          <li>Supports highly interactive, collaborative applications.</li>
          <li>Enables scalable real-time features in modern web apps.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 185,
    title: "Service Workers & PWAs",
    path: "/frontend/pwa",
    explanation: (
      <>
        <p>
          Service Workers are scripts that run in the background, separate from
          the main browser thread. They enable Progressive Web Apps (PWAs) to
          provide offline support, caching, push notifications, and background
          sync, creating a native app-like experience in the browser.
        </p>

        <h2>1. What is a Service Worker?</h2>
        <p>
          A Service Worker is a JavaScript file that the browser runs in the
          background. It intercepts network requests, manages caching, and
          enables offline functionality.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Runs independently of the web page.</li>
          <li>Intercepts network requests to provide cached responses.</li>
          <li>Enables push notifications and background sync.</li>
          <li>Supports offline-first applications.</li>
        </ul>

        <h2>2. Progressive Web Apps (PWAs)</h2>
        <p>
          PWAs are web applications that use modern web capabilities to deliver
          an app-like experience. They are installable, reliable, and
          responsive.
        </p>

        <h3>PWA Features</h3>
        <ul>
          <li>Offline support via Service Workers.</li>
          <li>Add to home screen / installable.</li>
          <li>Responsive and mobile-friendly design.</li>
          <li>Fast load times and smooth performance.</li>
          <li>Push notifications for user engagement.</li>
        </ul>

        <h2>3. Caching Strategies</h2>
        <p>
          Proper caching is crucial for offline support and performance
          optimization.
        </p>

        <h3>Common Strategies</h3>
        <ul>
          <li>
            <strong>Cache First:</strong> Serve cached content first, fallback
            to network if unavailable.
          </li>
          <li>
            <strong>Network First:</strong> Fetch fresh content from network,
            fallback to cache if offline.
          </li>
          <li>
            <strong>Stale While Revalidate:</strong> Serve cached content and
            update cache in the background.
          </li>
          <li>Use versioned caches to manage updates efficiently.</li>
        </ul>

        <h2>4. Service Worker Lifecycle</h2>
        <ul>
          <li>
            <strong>Install:</strong> Service Worker is installed and caches
            initial assets.
          </li>
          <li>
            <strong>Activate:</strong> Old caches are cleaned up and new version
            takes control.
          </li>
          <li>
            <strong>Fetch:</strong> Intercepts requests to serve cached or
            network responses.
          </li>
          <li>
            <strong>Update:</strong> Checks for new Service Worker versions and
            updates automatically.
          </li>
        </ul>

        <h2>5. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is a Service Worker?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A background
            script that intercepts network requests, manages caching, and
            enables offline functionality.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does a PWA differ from a normal web app?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A PWA is
            installable, works offline, uses Service Workers, and provides an
            app-like experience.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the “Cache First” strategy?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Serve content from cache first, and fetch from network only if it’s
            not available.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can Service Workers run without a PWA?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Yes, they can be used to enhance caching, push notifications, or
            background sync in normal web apps.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do Service Workers handle updates?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            The browser downloads the new Service Worker, waits for the old one
            to finish, and then activates the new version.
          </li>
        </ul>

        <h2>Benefits of Service Workers & PWAs</h2>
        <ul>
          <li>Offline functionality improves user experience.</li>
          <li>Faster load times via caching strategies.</li>
          <li>Push notifications increase engagement.</li>
          <li>App-like experience without app store installation.</li>
          <li>Better SEO and mobile performance.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 186,
    title: "Microfrontends",
    path: "/frontend/microfrontends",
    explanation: (
      <>
        <p>
          Microfrontends is an architectural approach that extends the
          microservices concept to the frontend. It allows large applications to
          be split into smaller, independently deployable modules, improving
          scalability, maintainability, and team collaboration.
        </p>

        <h2>1. What are Microfrontends?</h2>
        <p>
          Microfrontends break a monolithic frontend into multiple smaller,
          self-contained applications or components. Each team can develop,
          test, and deploy its own module independently.
        </p>

        <h3>Key Principles</h3>
        <ul>
          <li>Independent deployment for each frontend module.</li>
          <li>Teams own the full stack of their module (UI + logic).</li>
          <li>Modules integrate seamlessly at runtime.</li>
          <li>
            Shared frameworks and libraries should be minimal to reduce
            conflicts.
          </li>
        </ul>

        <h2>2. Module Federation</h2>
        <p>
          Module Federation is a Webpack 5 feature that enables multiple builds
          to work together at runtime. It is commonly used to implement
          microfrontends by dynamically loading modules from other applications.
        </p>

        <h3>Benefits of Module Federation</h3>
        <ul>
          <li>
            Allows sharing of code and dependencies between apps without
            bundling everything together.
          </li>
          <li>Enables independent deployment of each frontend module.</li>
          <li>Reduces duplicate dependencies across apps.</li>
          <li>
            Supports runtime integration for scalable frontend architectures.
          </li>
        </ul>

        <h2>3. Implementation Approaches</h2>
        <ul>
          <li>
            <strong>Build-time Integration:</strong> Integrate modules during
            build; simpler but less flexible.
          </li>
          <li>
            <strong>Runtime Integration:</strong> Load modules dynamically at
            runtime using Module Federation; more flexible for independent
            deployment.
          </li>
          <li>
            <strong>iFrame-based Microfrontends:</strong> Simple isolation using
            iFrames; less control over shared state.
          </li>
          <li>
            <strong>Web Components:</strong> Encapsulate each microfrontend as a
            web component for framework-agnostic integration.
          </li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is a microfrontend?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A microfrontend
            is a small, independently deployable frontend module that can be
            integrated with other modules to form a larger application.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does Module Federation help in microfrontends?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Module Federation allows multiple builds to share code and load
            modules dynamically at runtime, enabling independent deployment.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are some integration approaches for microfrontends?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Build-time integration, runtime integration, iFrame-based modules,
            and web components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are the benefits of microfrontends?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Independent deployments, smaller codebases, team autonomy, easier
            scaling, and reduced coupling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can microfrontends share dependencies?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Yes, but sharing should be minimal to avoid version conflicts;
            Module Federation can manage shared dependencies efficiently.
          </li>
        </ul>

        <h2>Benefits of Microfrontends</h2>
        <ul>
          <li>Improved scalability for large applications.</li>
          <li>Faster development with smaller, independent teams.</li>
          <li>
            Independent deployment reduces risk of breaking the entire app.
          </li>
          <li>Technology-agnostic modules allow flexibility in tech stacks.</li>
          <li>Better maintainability and code ownership.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 187,
    title: "Design Systems & Component Libraries",
    path: "/frontend/design-systems",
    explanation: (
      <>
        <p>
          Design Systems and Component Libraries help maintain consistency,
          scalability, and reusability in large frontend applications. They
          provide a standardized set of UI components, design tokens, and
          guidelines for building interfaces efficiently.
        </p>

        <h2>1. What is a Design System?</h2>
        <p>
          A design system is a collection of reusable components, patterns, and
          guidelines that ensures visual and functional consistency across an
          application or brand.
        </p>

        <h3>Key Elements</h3>
        <ul>
          <li>
            Color palettes, typography, spacing, and icons (design tokens).
          </li>
          <li>Reusable UI components with consistent styling.</li>
          <li>Accessibility guidelines for all components.</li>
          <li>Documentation for designers and developers.</li>
          <li>Versioning to track updates and changes.</li>
        </ul>

        <h2>2. Component Libraries</h2>
        <p>
          Component libraries are collections of pre-built, reusable UI
          components that implement the design system. Examples include
          Storybook, Material-UI, and Ant Design.
        </p>

        <h3>Benefits of Component Libraries</h3>
        <ul>
          <li>Faster development with ready-to-use components.</li>
          <li>Ensures UI consistency across pages and projects.</li>
          <li>Reduces bugs by reusing tested components.</li>
          <li>Improves collaboration between designers and developers.</li>
          <li>Supports scalability for large applications.</li>
        </ul>

        <h2>3. Storybook</h2>
        <p>
          Storybook is a popular tool for developing, testing, and documenting
          UI components in isolation. It helps teams visualize components and
          their states without running the full app.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Interactive component explorer.</li>
          <li>Supports multiple frameworks (React, Vue, Angular, etc.).</li>
          <li>Document components with stories for different states.</li>
          <li>Integrates with testing tools (Jest, Chromatic).</li>
          <li>Helps maintain design consistency.</li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is a design system?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>A design system
            is a set of reusable components, design tokens, and guidelines to
            ensure consistency and scalability.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why use component libraries?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Component libraries speed up development, maintain consistency,
            reduce bugs, and improve collaboration.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is Storybook used for?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Storybook is used to develop, test, and document UI components in
            isolation.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do design systems improve scalability?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            By providing reusable components and consistent patterns, they make
            it easier to scale large applications without UI inconsistencies.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are design tokens?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Design tokens are the basic design values such as colors, fonts,
            spacing, and shadows that define the visual identity.
          </li>
        </ul>

        <h2>Benefits of Design Systems & Component Libraries</h2>
        <ul>
          <li>Consistency in UI/UX across the application.</li>
          <li>Faster development with reusable components.</li>
          <li>Better collaboration between design and development teams.</li>
          <li>Reduced maintenance cost and fewer bugs.</li>
          <li>Scalable architecture for growing applications.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 188,
    title: "Animations Libraries",
    path: "/frontend/animation-libraries",
    explanation: (
      <>
        <p>
          Animation libraries help developers create smooth, interactive, and
          visually appealing UI effects. Popular libraries like{" "}
          <strong>GSAP</strong> and <strong>Framer Motion</strong> provide
          powerful tools for creating complex animations without reinventing the
          wheel.
        </p>

        <h2>1. GSAP (GreenSock Animation Platform)</h2>
        <p>
          GSAP is a high-performance JavaScript library for creating advanced
          animations for web applications. It supports timelines, sequences, and
          complex easing functions.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Animates DOM, SVG, canvas, and WebGL elements.</li>
          <li>Supports timelines for sequencing animations.</li>
          <li>High performance and smooth animations across browsers.</li>
          <li>Advanced easing and physics-based animations.</li>
          <li>Plugins for scroll-triggered animations and morphing.</li>
        </ul>

        <h2>2. Framer Motion</h2>
        <p>
          Framer Motion is a React-specific animation library that allows
          declarative, component-based animations. It integrates seamlessly with
          React components.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            Declarative animations using props like <code>animate</code>,{" "}
            <code>initial</code>, and <code>exit</code>.
          </li>
          <li>
            Variants for coordinating complex animations across multiple
            components.
          </li>
          <li>Drag, hover, and gesture-based animations.</li>
          <li>Layout animations for smooth transitions between states.</li>
          <li>Integration with React Router for page transitions.</li>
        </ul>

        <h2>3. When to Use Animation Libraries</h2>
        <ul>
          <li>Enhancing user experience with micro-interactions.</li>
          <li>Creating attention-grabbing UI elements.</li>
          <li>Animating SVG graphics and icons.</li>
          <li>Building interactive dashboards or data visualizations.</li>
          <li>Page transitions and onboarding animations.</li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is GSAP and why use it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            GSAP is a JavaScript animation library for creating smooth,
            performant, and complex animations across web platforms.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What makes Framer Motion suitable for React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Framer Motion uses a declarative approach and integrates directly
            with React components for easy animations.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Difference between GSAP and Framer Motion?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            GSAP is framework-agnostic and highly performant for complex
            animations, while Framer Motion is React-specific and declarative.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are animation variants in Framer Motion?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Variants allow you to define reusable animation states and apply
            them across multiple components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why use animation libraries instead of CSS animations?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Libraries provide better performance, advanced sequencing, easing,
            and control over complex animations.
          </li>
        </ul>

        <h2>Benefits of Using Animation Libraries</h2>
        <ul>
          <li>Enhances user experience with engaging animations.</li>
          <li>Simplifies complex animation workflows.</li>
          <li>
            Provides cross-browser compatibility and performance optimizations.
          </li>
          <li>Reduces development time with reusable animation tools.</li>
          <li>Improves UI polish and professionalism of the app.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 189,
    title: "Internationalization (i18n)",
    path: "/frontend/i18n",
    explanation: (
      <>
        <p>
          Internationalization (i18n) is the process of designing and building
          applications so that they can easily adapt to different languages,
          regions, and cultural formats. This allows applications to reach a
          global audience.
        </p>

        <h2>1. What is Internationalization?</h2>
        <p>
          Internationalization is the technical process of preparing your
          application to support multiple languages and locales. It separates
          the content (text, dates, numbers) from the application logic.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li>
            <strong>Locale:</strong> Language and regional settings (e.g.,
            "en-US", "fr-FR").
          </li>
          <li>
            <strong>Translation files:</strong> JSON, YAML, or similar files
            that store text for each locale.
          </li>
          <li>
            <strong>RTL (Right-to-Left) support:</strong> Necessary for
            languages like Arabic and Hebrew.
          </li>
          <li>
            <strong>Date, time, number formatting:</strong> Adjusted per locale.
          </li>
          <li>Dynamic content translation without changing code.</li>
        </ul>

        <h2>2. Implementing i18n in Web Apps</h2>
        <p>
          Popular libraries for React include <strong>react-i18next</strong>,{" "}
          <strong>next-i18next</strong>, and <strong>FormatJS</strong>. These
          libraries handle translations, pluralization, and locale switching.
        </p>

        <h3>Implementation Tips</h3>
        <ul>
          <li>Keep all strings in translation files.</li>
          <li>Use context or hooks to switch locales dynamically.</li>
          <li>Ensure text direction (LTR/RTL) is correctly applied.</li>
          <li>Localize dates, currencies, and numbers based on the locale.</li>
          <li>
            Test the UI for overflow, alignment, and responsiveness in all
            languages.
          </li>
        </ul>

        <h2>3. RTL (Right-to-Left) Support</h2>
        <p>
          Some languages are read from right to left. Supporting RTL requires
          mirroring the layout and adjusting CSS properties like{" "}
          <code>text-align</code> and <code>flex-direction</code>.
        </p>

        <h3>Best Practices</h3>
        <ul>
          <li>
            Use CSS logical properties (e.g., <code>margin-inline-start</code>)
            for easier RTL support.
          </li>
          <li>Ensure images, icons, and animations adapt correctly for RTL.</li>
          <li>Test components thoroughly in both LTR and RTL modes.</li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is internationalization (i18n)?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It is the process of preparing an application to support multiple
            languages and regional formats.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between i18n and L10n?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            i18n is designing the app for multiple languages, while L10n
            (localization) is the process of translating content for a specific
            locale.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you implement locale switching in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use libraries like react-i18next with hooks or context to change the
            active locale dynamically.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is RTL support and why is it important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            RTL support mirrors the layout for languages read right-to-left,
            ensuring proper UX and readability.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you handle date, number, and currency formatting in i18n?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use locale-aware functions or libraries like Intl.DateTimeFormat and
            Intl.NumberFormat to format values according to the active locale.
          </li>
        </ul>

        <h2>Benefits of Internationalization</h2>
        <ul>
          <li>Reaches a wider global audience.</li>
          <li>Improves user experience for non-English speakers.</li>
          <li>Makes your app scalable and ready for localization.</li>
          <li>Supports accessibility and cultural adaptation.</li>
          <li>Reduces effort for future translations and locale expansion.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 190,
    title: "CSS Architecture",
    path: "/frontend/css-architecture",
    explanation: (
      <>
        <p>
          CSS Architecture refers to organizing and structuring CSS in a way
          that ensures maintainability, scalability, and readability in large
          projects. Proper architecture prevents style conflicts, reduces
          technical debt, and improves developer productivity.
        </p>

        <h2>1. BEM (Block Element Modifier)</h2>
        <p>
          BEM is a popular naming convention for CSS classes that improves
          readability and prevents style conflicts.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li>
            <strong>Block:</strong> The main component or module (e.g.,{" "}
            <code>button</code>).
          </li>
          <li>
            <strong>Element:</strong> A child or part of the block (e.g.,{" "}
            <code>button__icon</code>).
          </li>
          <li>
            <strong>Modifier:</strong> A variation of the block or element
            (e.g., <code>button--primary</code>).
          </li>
        </ul>

        <h3>Benefits of BEM</h3>
        <ul>
          <li>Prevents style conflicts in large projects.</li>
          <li>Encourages reusable components.</li>
          <li>Improves code readability and maintainability.</li>
          <li>Works well with CSS preprocessors like SCSS.</li>
        </ul>

        <h2>2. Utility-First CSS</h2>
        <p>
          Utility-first CSS is an approach where you use small, single-purpose
          classes to style elements. Tailwind CSS is a popular library following
          this methodology.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li>
            Use atomic classes like <code>text-center</code>, <code>mt-4</code>,{" "}
            <code>bg-blue-500</code>.
          </li>
          <li>Compose components using combinations of utilities.</li>
          <li>Minimal custom CSS; focus on reusing utility classes.</li>
          <li>
            Responsive and state variants (hover, focus, etc.) via classes.
          </li>
        </ul>

        <h3>Benefits of Utility-First CSS</h3>
        <ul>
          <li>Reduces the need for writing custom CSS.</li>
          <li>Ensures consistent spacing, colors, and typography.</li>
          <li>Speeds up development and prototyping.</li>
          <li>Makes refactoring easier since classes are isolated.</li>
        </ul>

        <h2>3. Other CSS Architecture Approaches</h2>
        <ul>
          <li>
            <strong>SMACSS:</strong> Categorizes styles into base, layout,
            module, state, and theme.
          </li>
          <li>
            <strong>OOCSS:</strong> Separates structure and skin, encourages
            reusable classes.
          </li>
          <li>
            <strong>Atomic CSS:</strong> Similar to utility-first, emphasizes
            small, composable classes.
          </li>
          <li>
            <strong>Component-based CSS:</strong> Encapsulates styles per
            component, commonly used in React, Vue, Angular.
          </li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is BEM and why use it?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            BEM is a naming convention that organizes CSS classes as Block,
            Element, Modifier to improve readability and avoid conflicts.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is utility-first CSS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            An approach using small, single-purpose classes to style elements,
            like in Tailwind CSS.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Difference between BEM and utility-first CSS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            BEM focuses on structured class naming for components, while
            utility-first uses atomic classes for rapid styling.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is OOCSS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Object-Oriented CSS separates structure and skin to create reusable
            styles.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is CSS architecture important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It ensures maintainability, scalability, avoids conflicts, and
            improves developer efficiency in large projects.
          </li>
        </ul>

        <h2>Benefits of CSS Architecture</h2>
        <ul>
          <li>Maintains consistent design across the project.</li>
          <li>Prevents style conflicts and overrides.</li>
          <li>Improves maintainability for large codebases.</li>
          <li>Speeds up development and reduces technical debt.</li>
          <li>Encourages reusable and modular CSS components.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 191,
    title: "Package Managers (npm/yarn/pnpm)",
    path: "/frontend/package-managers",
    explanation: (
      <>
        <p>
          Package managers are tools that help developers manage project
          dependencies, install libraries, and maintain consistent versions
          across environments. Popular JavaScript package managers include{" "}
          <strong>npm</strong>, <strong>Yarn</strong>, and <strong>pnpm</strong>
          .
        </p>

        <h2>1. npm (Node Package Manager)</h2>
        <p>
          npm is the default package manager for Node.js. It manages packages,
          dependencies, and scripts for JavaScript projects.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            Install, update, and remove packages using <code>npm install</code>{" "}
            commands.
          </li>
          <li>
            Manages project dependencies via <code>package.json</code>.
          </li>
          <li>
            Generates <code>package-lock.json</code> to lock versions.
          </li>
          <li>Supports scripts for build, test, and deployment workflows.</li>
          <li>
            Access to the npm registry with thousands of open-source packages.
          </li>
        </ul>

        <h2>2. Yarn</h2>
        <p>
          Yarn is an alternative to npm that emphasizes speed, reliability, and
          deterministic installs.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            Uses <code>yarn.lock</code> to lock dependency versions.
          </li>
          <li>Faster installs with caching and parallel downloads.</li>
          <li>Workspaces support for monorepos.</li>
          <li>Better offline support than npm.</li>
        </ul>

        <h2>3. pnpm</h2>
        <p>
          pnpm is a fast, disk space-efficient package manager. It uses a unique
          approach to store dependencies in a global content-addressable store.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Stores a single copy of each package version on the disk.</li>
          <li>Faster installations for large projects.</li>
          <li>Supports monorepos with workspaces.</li>
          <li>
            Strict dependency isolation, avoiding accidental dependency access.
          </li>
        </ul>

        <h2>4. Best Practices</h2>
        <ul>
          <li>
            Use lockfiles (<code>package-lock.json</code>,{" "}
            <code>yarn.lock</code>, <code>pnpm-lock.yaml</code>) to ensure
            consistent installs across environments.
          </li>
          <li>Regularly update dependencies and check for vulnerabilities.</li>
          <li>
            Use scripts in <code>package.json</code> for repeatable tasks.
          </li>
          <li>
            Prefer peer dependencies for shared libraries in reusable
            components.
          </li>
          <li>Clean node_modules periodically to avoid bloat or conflicts.</li>
        </ul>

        <h2>5. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between npm, Yarn, and pnpm?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            npm is the default Node.js package manager; Yarn focuses on speed
            and reliability; pnpm is fast, disk-efficient, and isolates
            dependencies strictly.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why use lockfiles?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Lockfiles ensure consistent dependency versions across different
            environments and prevent breaking changes.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are workspaces?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Workspaces allow managing multiple packages within a single
            repository (monorepo) efficiently.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does pnpm save disk space?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            pnpm stores a single copy of each package version globally and links
            it to projects, reducing duplication.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How can you check for outdated packages?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use commands like <code>npm outdated</code>,{" "}
            <code>yarn outdated</code>, or <code>pnpm outdated</code> to see
            updates.
          </li>
        </ul>

        <h2>Benefits of Using Package Managers</h2>
        <ul>
          <li>Simplifies dependency management and installation.</li>
          <li>Ensures consistent builds across environments.</li>
          <li>Speeds up development with caching and workspaces.</li>
          <li>Reduces risk of version conflicts and bugs.</li>
          <li>Provides access to a vast ecosystem of open-source packages.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 192,
    title: "Frontend Deployment & CI/CD",
    path: "/frontend/deployment",
    explanation: (
      <>
        <p>
          Frontend Deployment and CI/CD (Continuous Integration / Continuous
          Deployment) are processes to automatically build, test, and deploy
          frontend applications to production environments. Tools like{" "}
          <strong>Vercel</strong>, <strong>Netlify</strong>, and{" "}
          <strong>Docker</strong> simplify deployment and enable rapid
          iteration.
        </p>

        <h2>1. Vercel</h2>
        <p>
          Vercel is a cloud platform for deploying frontend frameworks and
          static sites with ease, optimized for React, Next.js, and other modern
          frontend technologies.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Automatic deployments from GitHub, GitLab, or Bitbucket.</li>
          <li>Preview URLs for pull requests to test changes.</li>
          <li>Serverless functions for backend logic.</li>
          <li>Optimized performance with edge caching.</li>
          <li>Easy rollback and environment management.</li>
        </ul>

        <h2>2. Netlify</h2>
        <p>
          Netlify is a popular platform for deploying static sites and frontend
          apps, offering CI/CD pipelines and built-in tools for automation.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Continuous deployment from Git repositories.</li>
          <li>Instant rollbacks to previous deploys.</li>
          <li>Functions for serverless backend logic.</li>
          <li>Edge caching and global CDN delivery.</li>
          <li>Form handling and analytics.</li>
        </ul>

        <h2>3. Docker</h2>
        <p>
          Docker allows you to containerize frontend applications, ensuring
          consistent environments across development, testing, and production.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Package applications and dependencies in a container.</li>
          <li>Run anywhere: local, staging, production.</li>
          <li>Version control for environments using Docker images.</li>
          <li>Integrates with CI/CD pipelines for automated deployment.</li>
        </ul>

        <h2>4. CI/CD Pipelines</h2>
        <p>
          CI/CD pipelines automate building, testing, and deploying your
          frontend applications. Common tools include GitHub Actions, GitLab CI,
          and CircleCI.
        </p>

        <h3>Best Practices</h3>
        <ul>
          <li>Automate linting and unit tests before deployment.</li>
          <li>Use preview environments for pull requests.</li>
          <li>Deploy to staging first, then production.</li>
          <li>Monitor deployments and setup rollback strategies.</li>
          <li>Keep secrets (API keys, environment variables) secure.</li>
        </ul>

        <h2>5. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between Vercel and Netlify?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Both are frontend hosting platforms; Vercel is optimized for Next.js
            and serverless edge functions, while Netlify is versatile for static
            sites and JAMstack apps.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why use Docker for frontend deployment?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Docker ensures consistent environments across development, testing,
            and production.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is CI/CD and why is it important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            CI/CD automates building, testing, and deploying code, reducing
            errors and speeding up delivery.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do preview URLs help in deployment?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            They allow testing changes in an isolated environment before merging
            into production.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are best practices for frontend CI/CD?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Automate tests, use preview environments, deploy to staging first,
            monitor deployments, and manage secrets securely.
          </li>
        </ul>

        <h2>Benefits of Frontend Deployment & CI/CD</h2>
        <ul>
          <li>Faster, more reliable deployments.</li>
          <li>Reduces manual errors during deployment.</li>
          <li>Ensures consistent environments across teams.</li>
          <li>Improves collaboration with automated previews.</li>
          <li>Enables continuous delivery and rapid iteration.</li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 193,
    title: "Browser Storage & Cookies",
    path: "/frontend/browser-storage",
    explanation: (
      <>
        <p>
          Browser storage and cookies are mechanisms to store data on the
          client-side. They help persist user preferences, authentication
          tokens, and application state. Common options include{" "}
          <strong>localStorage</strong>, <strong>sessionStorage</strong>,{" "}
          <strong>IndexedDB</strong>, and <strong>cookies</strong>.
        </p>

        <h2>1. Cookies</h2>
        <p>
          Cookies are small pieces of data stored by the browser, sent with
          every HTTP request. They are commonly used for authentication and
          session management.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Size limit ~4KB per cookie.</li>
          <li>
            Can be set with <code>HttpOnly</code>, <code>Secure</code>, and{" "}
            <code>SameSite</code> flags.
          </li>
          <li>Sent automatically with HTTP requests to the server.</li>
          <li>Expires after a set date or when the browser closes.</li>
        </ul>

        <h2>2. localStorage</h2>
        <p>
          localStorage allows storing key-value data on the client side. It
          persists even after the browser closes.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Size limit ~5-10MB per origin.</li>
          <li>Data persists across sessions.</li>
          <li>Accessible only via JavaScript.</li>
          <li>Not automatically sent to the server.</li>
          <li>
            Useful for saving preferences, themes, or client-side caching.
          </li>
        </ul>

        <h2>3. sessionStorage</h2>
        <p>
          sessionStorage is similar to localStorage, but data is cleared when
          the tab or browser closes.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Size limit similar to localStorage.</li>
          <li>Scoped to the browser tab.</li>
          <li>
            Good for temporary data like form state or one-time session tokens.
          </li>
        </ul>

        <h2>4. IndexedDB</h2>
        <p>
          IndexedDB is a low-level database API for storing large amounts of
          structured data. It allows offline storage and more complex querying
          than localStorage.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Supports large amounts of data (hundreds of MB).</li>
          <li>Stores key-value pairs, objects, and even files/blobs.</li>
          <li>Supports transactions and indexing for faster queries.</li>
          <li>
            Useful for offline-first applications or caching large datasets.
          </li>
        </ul>

        <h2>5. Best Practices</h2>
        <ul>
          <li>
            Use cookies for authentication and server-side session management.
          </li>
          <li>
            Use localStorage for client-side persistent preferences or settings.
          </li>
          <li>Use sessionStorage for temporary or tab-specific data.</li>
          <li>
            Use IndexedDB for large or structured data, offline storage, and
            caching.
          </li>
          <li>
            Never store sensitive information like passwords in localStorage or
            cookies without encryption.
          </li>
        </ul>

        <h2>6. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between localStorage and sessionStorage?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            localStorage persists across browser sessions, while sessionStorage
            is cleared when the tab or browser closes.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do cookies differ from localStorage?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Cookies are sent automatically with HTTP requests and have smaller
            size limits, whereas localStorage is client-side only and not sent
            with requests.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            When would you use IndexedDB instead of localStorage?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            When storing large amounts of structured data, offline content, or
            performing complex queries.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are secure cookie flags you should use?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            HttpOnly, Secure, and SameSite to enhance security and prevent
            XSS/CSRF attacks.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can localStorage be accessed by other domains?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            No, localStorage is scoped to the origin (domain + protocol + port).
          </li>
        </ul>

        <h2>Benefits of Browser Storage & Cookies</h2>
        <ul>
          <li>
            Improves user experience with persistent preferences and state.
          </li>
          <li>Enables offline capabilities for modern web apps.</li>
          <li>Supports session management and authentication.</li>
          <li>Reduces server load by storing data client-side.</li>
          <li>Allows advanced caching and faster page load times.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 194,
    title: "Lazy Loading & Code Splitting",
    path: "/frontend/lazy-loading",
    explanation: (
      <>
        <p>
          Lazy loading and code splitting are performance optimization
          techniques that help reduce the initial bundle size of a web
          application. They allow parts of the application to load only when
          needed, improving page load times and user experience.
        </p>

        <h2>1. Lazy Loading</h2>
        <p>
          Lazy loading delays the loading of components or resources until they
          are actually required. In React, this is typically done using{" "}
          <strong>React.lazy</strong> and <strong>Suspense</strong>.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Load components asynchronously when rendered.</li>
          <li>Reduces initial bundle size and speeds up first render.</li>
          <li>
            Improves perceived performance, especially for large applications.
          </li>
          <li>
            Works for images, components, routes, or any dynamic resource.
          </li>
        </ul>

        <h3>Example in React</h3>
        <pre>
          {`const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
        </pre>

        <h2>2. Code Splitting</h2>
        <p>
          Code splitting breaks your bundle into smaller chunks, which can be
          loaded on demand. Tools like <strong>Webpack</strong> and{" "}
          <strong>Vite</strong> automatically support code splitting.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Splits the application into smaller bundles (chunks).</li>
          <li>Loads only what is necessary for the current view.</li>
          <li>Reduces initial load time for large applications.</li>
          <li>Can be applied at component, route, or library level.</li>
        </ul>

        <h3>Benefits</h3>
        <ul>
          <li>Improves initial page load performance.</li>
          <li>Reduces unused code download for users.</li>
          <li>Enhances scalability for large projects.</li>
          <li>Works well with caching, as unchanged chunks are reused.</li>
        </ul>

        <h2>3. Best Practices</h2>
        <ul>
          <li>Lazy load components that are not visible on initial render.</li>
          <li>Use Suspense fallback UI to improve user experience.</li>
          <li>Split code by routes to optimize page load.</li>
          <li>Avoid over-splitting, which can increase network requests.</li>
          <li>
            Monitor bundle size and loading performance with tools like Webpack
            Bundle Analyzer.
          </li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is lazy loading in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Lazy loading delays loading components or resources until they are
            needed, improving initial load performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does code splitting improve performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            By splitting the application into smaller chunks, only necessary
            code is loaded, reducing initial bundle size.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the role of React.Suspense in lazy loading?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Suspense provides a fallback UI while the lazy-loaded component is
            being fetched.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can images be lazy-loaded too?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Yes, using the <code>loading="lazy"</code> attribute or intersection
            observers in JavaScript.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What are potential pitfalls of overusing code splitting?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Too many small chunks can increase HTTP requests and may impact
            performance negatively.
          </li>
        </ul>

        <h2>Benefits of Lazy Loading & Code Splitting</h2>
        <ul>
          <li>Faster initial load and improved user experience.</li>
          <li>Reduced unused code download for users.</li>
          <li>Better scalability and maintainability for large apps.</li>
          <li>Optimized network and caching performance.</li>
          <li>
            Supports modern frontend frameworks like React, Vue, and Angular
            efficiently.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 195,
    title: "Web Accessibility Testing Tools",
    path: "/frontend/a11y-tools",
    explanation: (
      <>
        <p>
          Web accessibility testing tools help developers ensure their websites
          are accessible to users with disabilities. These tools analyze pages
          for compliance with standards like WCAG and provide actionable
          feedback to improve accessibility.
        </p>

        <h2>1. Lighthouse</h2>
        <p>
          Lighthouse is an open-source tool from Google that audits web pages
          for performance, SEO, best practices, and accessibility.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Automated accessibility audits with scores.</li>
          <li>
            Identifies missing ARIA roles, color contrast issues, and semantic
            errors.
          </li>
          <li>Integrates with Chrome DevTools or CI pipelines.</li>
          <li>Provides recommendations for improvement.</li>
        </ul>

        <h2>2. axe</h2>
        <p>
          axe is an accessibility testing library and browser extension. It
          helps identify accessibility violations in real-time.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            Detects color contrast, focus order, and ARIA attribute issues.
          </li>
          <li>Provides detailed error messages and guidance to fix them.</li>
          <li>
            Integrates with Jest, Cypress, and other testing frameworks for
            automated checks.
          </li>
          <li>Browser extension allows quick manual testing.</li>
        </ul>

        <h2>3. Best Practices</h2>
        <ul>
          <li>Use semantic HTML elements whenever possible.</li>
          <li>Test keyboard navigation and focus order.</li>
          <li>Ensure sufficient color contrast and text readability.</li>
          <li>
            Provide descriptive alt text for images and labels for form
            controls.
          </li>
          <li>
            Run automated accessibility tests regularly in CI/CD pipelines.
          </li>
        </ul>

        <h2>4. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is Lighthouse used for?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Lighthouse audits web pages for performance, SEO, best practices,
            and accessibility.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is axe and how does it work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            axe is a tool/library that identifies accessibility violations in
            real-time and provides recommendations to fix them.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Why is accessibility testing important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It ensures websites are usable for all users, including those with
            disabilities, and improves legal compliance and user experience.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can accessibility tests be automated?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Yes, tools like axe can integrate with testing frameworks for
            automated accessibility checks.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is WCAG?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Web Content Accessibility Guidelines — a set of standards for making
            web content accessible.
          </li>
        </ul>

        <h2>Benefits of Using Accessibility Testing Tools</h2>
        <ul>
          <li>Ensures your website is accessible to a wider audience.</li>
          <li>Reduces legal risks related to accessibility compliance.</li>
          <li>Improves usability and user experience for all users.</li>
          <li>Helps developers catch issues early in development.</li>
          <li>Supports inclusive and responsible web development.</li>
        </ul>
      </>
    ),
    priority: "Low",
  },
  {
    id: 196,
    title: "Client-side Caching Strategies",
    path: "/frontend/caching",
    explanation: (
      <>
        <p>
          Client-side caching strategies improve application performance by
          storing data locally in the browser or in memory. This reduces
          repeated network requests, enhances responsiveness, and provides a
          smoother user experience. Common approaches include libraries like{" "}
          <strong>SWR</strong> and patterns like{" "}
          <strong>stale-while-revalidate</strong>.
        </p>

        <h2>1. SWR (Stale-While-Revalidate)</h2>
        <p>
          SWR is a React library for data fetching that implements the
          stale-while-revalidate caching strategy. It returns cached data first
          and then revalidates it in the background.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Fast initial render using cached (stale) data.</li>
          <li>Automatic background revalidation for fresh data.</li>
          <li>Built-in caching and deduplication of requests.</li>
          <li>Supports pagination and infinite loading patterns.</li>
          <li>Works seamlessly with React hooks.</li>
        </ul>

        <h3>Example in React</h3>
        <pre>
          {`import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return <div>Hello, {data.name}</div>;
}`}
        </pre>

        <h2>2. Stale-While-Revalidate Strategy</h2>
        <p>
          This strategy serves cached data immediately (stale), while
          simultaneously fetching fresh data from the network in the background
          (revalidate).
        </p>

        <h3>Benefits</h3>
        <ul>
          <li>Reduces perceived load time for users.</li>
          <li>Ensures the data is eventually up-to-date.</li>
          <li>Prevents unnecessary network requests if data hasn’t changed.</li>
          <li>Can be applied to APIs, images, and other resources.</li>
        </ul>

        <h2>3. Other Client-side Caching Options</h2>
        <ul>
          <li>
            <strong>localStorage / sessionStorage:</strong> Store data across
            sessions or tabs.
          </li>
          <li>
            <strong>IndexedDB:</strong> For large datasets or structured offline
            storage.
          </li>
          <li>
            <strong>React Query / TanStack Query:</strong> Advanced caching,
            prefetching, and synchronization.
          </li>
          <li>
            <strong>Service Workers:</strong> Cache API responses and static
            assets for offline-first apps.
          </li>
        </ul>

        <h2>4. Best Practices</h2>
        <ul>
          <li>Cache frequently used data to reduce server load.</li>
          <li>Use revalidation to ensure data stays fresh.</li>
          <li>Set appropriate cache expiration and stale time.</li>
          <li>
            Combine multiple caching strategies depending on data criticality.
          </li>
          <li>Monitor cache hit/miss rates to optimize performance.</li>
        </ul>

        <h2>5. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the stale-while-revalidate strategy?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It serves cached data immediately while fetching updated data in the
            background to ensure freshness.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How does SWR improve frontend performance?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            By caching data, deduplicating requests, and updating data
            asynchronously, reducing load times and network calls.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            When should you use localStorage vs IndexedDB for caching?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use localStorage for small key-value data, IndexedDB for large or
            structured datasets.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            Can caching cause stale data issues?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Yes, if not revalidated, users may see outdated information. Always
            combine caching with update strategies.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What role do Service Workers play in client-side caching?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Service Workers cache API responses and static assets, enabling
            offline access and faster reloads.
          </li>
        </ul>

        <h2>Benefits of Client-side Caching</h2>
        <ul>
          <li>Faster page loads and improved user experience.</li>
          <li>Reduced server requests and network traffic.</li>
          <li>Supports offline-first applications.</li>
          <li>Ensures data consistency with revalidation strategies.</li>
          <li>Enhances scalability of frontend applications.</li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 197,
    title: "Interview System Design for Frontend",
    path: "/frontend/frontend-system-design",
    explanation: (
      <>
        <p>
          Frontend system design focuses on building scalable, maintainable, and
          performant web applications. Understanding architecture patterns,
          folder structures, component organization, and state management is
          crucial for technical interviews and real-world projects.
        </p>

        <h2>1. Scalable Frontend Architecture</h2>
        <p>
          A scalable architecture ensures that the application can grow without
          becoming unmanageable. Key considerations include modular design,
          separation of concerns, and maintainable state management.
        </p>

        <h3>Key Principles</h3>
        <ul>
          <li>Component-based design for reusability.</li>
          <li>Separation of presentation, logic, and data layers.</li>
          <li>
            Use of state management libraries (Redux, Zustand, React Query).
          </li>
          <li>Lazy loading and code splitting to improve performance.</li>
          <li>
            Consistent styling with CSS-in-JS, Tailwind, or design systems.
          </li>
        </ul>

        <h2>2. Folder Structure & Organization</h2>
        <p>
          A clear and consistent folder structure helps developers navigate and
          scale the application efficiently.
        </p>

        <h3>Recommended Structure</h3>
        <pre>
          {`src/
├─ components/      # Reusable UI components
├─ pages/           # Route-based components
├─ hooks/           # Custom hooks
├─ services/        # API calls and data fetching
├─ store/           # State management
├─ utils/           # Utility functions
├─ assets/          # Images, fonts, icons
├─ styles/          # Global styles or theme
└─ App.js           # Root component`}
        </pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Keep components small and focused on a single responsibility.</li>
          <li>Organize features into modules when the app grows.</li>
          <li>Separate business logic from UI logic.</li>
          <li>Follow naming conventions and consistent code style.</li>
        </ul>

        <h2>3. State Management & Data Flow</h2>
        <p>
          Efficient state management ensures predictable UI behavior and
          maintainable code.
        </p>

        <h3>Approaches</h3>
        <ul>
          <li>
            Local state using <code>useState</code> and <code>useReducer</code>.
          </li>
          <li>Global state using Redux, Zustand, or React Query.</li>
          <li>Context API for lightweight global state sharing.</li>
          <li>Use of caching and optimistic updates for API data.</li>
        </ul>

        <h2>4. Performance & Optimization</h2>
        <ul>
          <li>Code splitting and lazy loading to reduce bundle size.</li>
          <li>
            Memoization with <code>React.memo</code> and <code>useMemo</code>.
          </li>
          <li>Virtualized lists for large data sets.</li>
          <li>Efficient image loading with compression and lazy loading.</li>
          <li>Client-side caching strategies (SWR, stale-while-revalidate).</li>
        </ul>

        <h2>5. Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you structure a large React application?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use modular folders, separate components, hooks, services, and state
            management while following a consistent naming convention.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the difference between local state and global state?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Local state is managed within a component, while global state is
            shared across multiple components.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you optimize a large frontend application?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use lazy loading, code splitting, memoization, client-side caching,
            and optimize images/assets.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            What is the benefit of a component-based architecture?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            It promotes reusability, maintainability, and separation of
            concerns.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong>
            How do you manage API data efficiently in frontend?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>
            Use caching, state management libraries, pagination, and error
            handling to ensure predictable data flow.
          </li>
        </ul>

        <h2>Benefits of Scalable Frontend System Design</h2>
        <ul>
          <li>Improves code maintainability and readability.</li>
          <li>Enhances collaboration among developers.</li>
          <li>Ensures predictable UI and efficient data flow.</li>
          <li>Reduces technical debt and improves scalability.</li>
          <li>Prepares the app for growth and new features.</li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
]
