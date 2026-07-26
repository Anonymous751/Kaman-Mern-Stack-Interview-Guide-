const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};

export const htmlTopics = [
  {
    id: 1,
    title: "HTML Basics & Semantics",
    path: "/frontend/html-basics",
    topicExplanation: (
      <>
        <p>
          Semantic HTML means using tags that have a clear meaning. These tags
          tell the browser, search engines, and screen readers what type of
          content they contain. This makes your website more readable,
          accessible, and structured.
        </p>

        <h2>What Are Semantic Tags?</h2>
        <ul>
          <li>Tags that clearly describe the purpose of the content.</li>
          <li>
            Example: &lt;header&gt;, &lt;footer&gt;, &lt;main&gt;, &lt;nav&gt;,
            etc.
          </li>
          <li>They replace meaningless &lt;div&gt; everywhere.</li>
        </ul>

        <h2>Why Should We Use Semantic Tags?</h2>
        <ul>
          <li>
            <strong>Better Accessibility</strong> – Screen readers understand
            the structure easily.
          </li>
          <li>
            <strong>Better SEO</strong> – Google understands your page layout
            and ranks better.
          </li>
          <li>
            <strong>Cleaner Code</strong> – Easy for developers to read and
            maintain.
          </li>
          <li>
            <strong>Browser Optimization</strong> – Browsers render some
            semantic tags with built-in styling/behavior.
          </li>
          <li>
            <strong>Helps Teams</strong> – Other developers immediately know
            what a section represents.
          </li>
        </ul>

        <h2>Where Do We Use Semantic Tags?</h2>
        <ul>
          <li>Header at the top of your website.</li>
          <li>Navigation menus.</li>
          <li>Main content area.</li>
          <li>Articles, blogs, posts.</li>
          <li>Sidebars or extra info.</li>
          <li>Footer at bottom with contact info or copyright.</li>
        </ul>

        <h2>Common Semantic Tags and Their Purpose</h2>
        <ul>
          <li>
            <strong>&lt;header&gt;</strong> – Top section: logo, title,
            navigation.
          </li>
          <li>
            <strong>&lt;footer&gt;</strong> – Bottom section: copyright, links.
          </li>
          <li>
            <strong>&lt;main&gt;</strong> – Main content of the page.
          </li>
          <li>
            <strong>&lt;section&gt;</strong> – A group of related content.
          </li>
          <li>
            <strong>&lt;article&gt;</strong> – Self-contained content like a
            blog post.
          </li>
          <li>
            <strong>&lt;nav&gt;</strong> – Contains navigation links.
          </li>
          <li>
            <strong>&lt;aside&gt;</strong> – Sidebar or extra information.
          </li>
        </ul>

        <h2>Benefits of Semantic HTML</h2>
        <ul>
          <li>
            <strong>Improves SEO</strong> – Search engines understand your
            content better.
          </li>
          <li>
            <strong>Friendly for Screen Readers</strong> – Helpful for visually
            impaired users.
          </li>
          <li>
            <strong>Improves Page Structure</strong> – Code is easy to scan and
            edit.
          </li>
          <li>
            <strong>Reduces Excessive &lt;div&gt;</strong> (“div soup”).
          </li>
          <li>
            <strong>Better Built-in Browser Rendering</strong>.
          </li>
        </ul>

        <h2>Example of Semantic Structure</h2>
        <pre>
          {`<header>
  <h1>Website Title</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>This is the blog content...</p>
  </article>

  <section>
    <h3>Related Posts</h3>
    <p>More articles...</p>
  </section>
</main>

<aside>
  <p>Sidebar content / ads / links</p>
</aside>

<footer>
  <p>© 2025 All Rights Reserved</p>
</footer>`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why not use
            only &lt;div&gt; tags?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Semantic tags
            give meaning, improve SEO, enhance accessibility, and make code
            easier to read and maintain.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if you use only divs?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Creates “div
            soup,” messy code that’s hard to understand and maintain.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            &lt;header&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Defines the
            top section of a page or section; usually contains navigation, logo,
            or headings.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            &lt;footer&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Represents the
            bottom section of a page or section; often includes copyright,
            links, or contact info.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            &lt;nav&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Used for
            navigation menus, grouping links to main sections of a site.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            &lt;main&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Represents the
            main content of a page; there should be only one per page.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            &lt;section&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Groups related
            content together; usually has a heading.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            &lt;article&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Represents
            self-contained content like blog posts, news articles, or comments.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is an
            &lt;aside&gt; tag?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Represents
            side content, like a sidebar or related links, not part of main
            flow.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            &lt;figure&gt; and &lt;figcaption&gt;?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> &lt;figure&gt;
            groups media (images, videos), &lt;figcaption&gt; gives a caption
            for it.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Semantic tags = meaningful structure.</li>
          <li>Better for SEO, accessibility, and developers.</li>
          <li>Use them when the content has a definite purpose.</li>
          <li>Use &lt;div&gt; only for layout, NOT for structure.</li>
        </ul>
      </>
    ),
  },
  {
    id: 198,
    title: "HTML Forms",
    path: "/frontend/html-forms",
    explanation: (
      <>
        <p>
          <strong>HTML Forms</strong> let users send data to a website or web
          application. Forms are made of different input elements like text
          fields, checkboxes, radio buttons, dropdowns, and buttons.
        </p>

        <h2>1️⃣ Common Form Elements</h2>
        <ul>
          <li>
            <strong>&lt;input&gt;:</strong> Text, password, email, number, date,
            file, etc.
          </li>
          <li>
            <strong>&lt;textarea&gt;:</strong> Multi-line text input.
          </li>
          <li>
            <strong>&lt;select&gt;:</strong> Dropdown lists with &lt;option&gt;
            elements.
          </li>
          <li>
            <strong>Radio Buttons:</strong> &lt;input type="radio"&gt; for
            selecting one option among many.
          </li>
          <li>
            <strong>Checkboxes:</strong> &lt;input type="checkbox"&gt; for
            multiple selections.
          </li>
          <li>
            <strong>Buttons:</strong> &lt;button&gt; or &lt;input
            type="submit"&gt;, &lt;input type="reset"&gt;.
          </li>
        </ul>

        <h2>2️⃣ Form Attributes</h2>
        <ul>
          <li>
            <strong>action:</strong> URL where form data is sent.
          </li>
          <li>
            <strong>method:</strong> GET (append data to URL) or POST (send data
            in request body).
          </li>
          <li>
            <strong>name:</strong> Identifier for input fields.
          </li>
          <li>
            <strong>required:</strong> Makes a field mandatory.
          </li>
          <li>
            <strong>autocomplete:</strong> Suggests previously entered values.
          </li>
          <li>
            <strong>novalidate:</strong> Disables browser validation.
          </li>
        </ul>

        <h2>3️⃣ Form Submission Lifecycle</h2>
        <ul>
          <li>User fills in input fields.</li>
          <li>User clicks submit button.</li>
          <li>
            Browser validates fields (if required/HTML5 validation present).
          </li>
          <li>
            Form data is sent to server via action URL using specified method.
          </li>
          <li>
            Page reloads or JavaScript intercepts submission for SPA behavior.
          </li>
        </ul>

        <h2>Basic Example – Simple Form</h2>
        <pre>
          {`<form action="/submit" method="POST">
  <label>
    Name: <input type="text" name="username" required />
  </label>
  <label>
    Email: <input type="email" name="email" required />
  </label>
  <label>
    Gender:
    <input type="radio" name="gender" value="male" /> Male
    <input type="radio" name="gender" value="female" /> Female
  </label>
  <label>
    Hobbies:
    <input type="checkbox" name="hobbies" value="reading" /> Reading
    <input type="checkbox" name="hobbies" value="gaming" /> Gaming
  </label>
  <label>
    Country:
    <select name="country">
      <option value="india">India</option>
      <option value="usa">USA</option>
    </select>
  </label>
  <button type="submit">Submit</button>
</form>`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            main types of input elements in HTML forms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Text,
            password, email, number, date, file, checkbox, radio, and
            submit/reset buttons.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between GET and POST in forms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> GET appends
            data to the URL (visible), POST sends data in the request body
            (hidden and secure for sensitive info).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            make a form field mandatory?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By adding the{" "}
            <code>required</code> attribute to the input element.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            purpose of the <code>name</code> attribute in inputs?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It identifies
            the field when submitting data to the server.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can
            JavaScript prevent the default form submission?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By using{" "}
            <code>event.preventDefault()</code> inside a submit event listener.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>HTML forms let users input and send data to the server.</li>
          <li>
            Common elements: input, textarea, select, radio, checkbox, buttons.
          </li>
          <li>
            Form attributes like action, method, and required control behavior.
          </li>
          <li>
            Understanding submission lifecycle is key for validations and
            handling data in JS.
          </li>
          <li>
            Essential knowledge for frontend development and interview
            questions.
          </li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 199,
    title: "HTML Form Internals",
    path: "/frontend/html-forms-internals",
    explanation: (
      <>
        <p>
          <strong>HTML Form Internals</strong> explain how forms work behind the
          scenes in the browser. This includes how data is managed, validated,
          submitted, and how accessibility is handled.
        </p>

        <h2>1️⃣ Controlled vs Uncontrolled Forms</h2>
        <ul>
          <li>
            <strong>Controlled Forms:</strong> The form data is managed by
            JavaScript (usually React state). Input values are bound to state
            variables.
          </li>
          <li>
            <strong>Uncontrolled Forms:</strong> The form data is handled by the
            DOM itself. JavaScript reads values only when needed (e.g., on
            submit using <code>ref</code>).
          </li>
          <li>
            Controlled forms give more control over validation, dynamic updates,
            and UI changes.
          </li>
        </ul>

        <h2>2️⃣ Browser Validation</h2>
        <ul>
          <li>
            Modern browsers automatically validate fields with attributes like{" "}
            <code>required</code>, <code>type="email"</code>,{" "}
            <code>minlength</code>, etc.
          </li>
          <li>Validation happens before the submit event is triggered.</li>
          <li>
            Custom validation can be added with JavaScript using{" "}
            <code>setCustomValidity()</code>.
          </li>
        </ul>

        <h2>3️⃣ Submit Event Flow</h2>
        <ul>
          <li>User clicks the submit button or presses Enter.</li>
          <li>Browser checks validation rules.</li>
          <li>If valid, a submit event is triggered on the form element.</li>
          <li>
            JavaScript can intercept this event with{" "}
            <code>event.preventDefault()</code> to handle submission manually.
          </li>
          <li>
            Form data is then sent to the server via the <code>action</code> URL
            using the specified <code>method</code>.
          </li>
        </ul>

        <h2>4️⃣ Accessibility Considerations</h2>
        <ul>
          <li>
            Use <code>&lt;label&gt;</code> for every input for screen readers.
          </li>
          <li>
            Use <code>aria-required="true"</code> for required fields.
          </li>
          <li>
            Group related inputs (like radio buttons) with{" "}
            <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.
          </li>
          <li>
            Provide meaningful error messages and focus management for invalid
            inputs.
          </li>
        </ul>

        <h2>Basic Example – Controlled vs Uncontrolled Input (React)</h2>
        <pre>
          {`// Controlled Input
function ControlledInput() {
  const [value, setValue] = React.useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled Input
function UncontrolledInput() {
  const inputRef = React.useRef();
  const handleSubmit = () => console.log(inputRef.current.value);
  return <input ref={inputRef} />;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between controlled and uncontrolled forms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Controlled
            forms store input values in state (JS manages), uncontrolled forms
            rely on the DOM (read values via ref or on submit).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            browser validation work in forms?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Browser
            automatically validates fields with attributes like required, type,
            min/max before triggering submit events.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can
            JavaScript intercept a form submission?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Using{" "}
            <code>event.preventDefault()</code> inside a submit event listener.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Name some
            accessibility practices for forms.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use labels,
            aria attributes, fieldsets, legends, and meaningful error messages.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why are
            controlled forms preferred in React?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They allow
            dynamic validation, easier state management, and more predictable UI
            updates.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Forms can be controlled (state-managed) or uncontrolled
            (DOM-managed).
          </li>
          <li>
            Browser validates inputs automatically, but JS can add custom
            validation.
          </li>
          <li>
            Submit event can be intercepted to prevent default behavior and
            handle data manually.
          </li>
          <li>Accessibility ensures forms are usable for everyone.</li>
          <li>
            Understanding internals helps build robust and user-friendly forms.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 200,
    title: "HTML Tables",
    path: "/frontend/html-tables",
    explanation: (
      <>
        <p>
          <strong>HTML Tables</strong> are used to display data in rows and
          columns. They are made of several elements that help organize and
          present data clearly and accessibly.
        </p>

        <h2>1️⃣ Table Structure</h2>
        <ul>
          <li>
            <strong>&lt;table&gt;:</strong> The main container for table data.
          </li>
          <li>
            <strong>&lt;thead&gt;:</strong> Groups the header row(s) of a table.
          </li>
          <li>
            <strong>&lt;tbody&gt;:</strong> Groups the main body rows.
          </li>
          <li>
            <strong>&lt;tfoot&gt;:</strong> Groups footer rows, often used for
            totals or summary.
          </li>
          <li>
            <strong>&lt;tr&gt;:</strong> Table row.
          </li>
          <li>
            <strong>&lt;th&gt;:</strong> Table header cell, usually bold and
            centered.
          </li>
          <li>
            <strong>&lt;td&gt;:</strong> Table data cell, contains the actual
            data.
          </li>
        </ul>

        <h2>2️⃣ Semantic and Accessibility Best Practices</h2>
        <ul>
          <li>
            Use <code>&lt;th&gt;</code> for headers, not <code>&lt;td&gt;</code>
            , so screen readers can identify columns.
          </li>
          <li>
            Use <code>scope="col"</code> or <code>scope="row"</code> for headers
            to indicate which cells they apply to.
          </li>
          <li>
            Group rows with <code>&lt;thead&gt;</code>,{" "}
            <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> for
            semantic clarity.
          </li>
          <li>
            Always provide a caption using <code>&lt;caption&gt;</code> to
            describe table content.
          </li>
          <li>
            Avoid using tables for layout purposes; they are only for tabular
            data.
          </li>
        </ul>

        <h2>Basic Example – HTML Table</h2>
        <pre>
          {`<table>
  <caption>Student Scores</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Math</th>
      <th scope="col">Science</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>90</td>
      <td>85</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>95</td>
      <td>80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>185</td>
      <td>165</td>
    </tr>
  </tfoot>
</table>`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt;?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> &lt;thead&gt;
            is for header rows, &lt;tbody&gt; is for main data rows, and
            &lt;tfoot&gt; is for footer/summary rows.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            make tables accessible?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use &lt;th&gt;
            for headers, provide scope attributes, use captions, and avoid
            tables for layout.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            purpose of &lt;caption&gt;?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It provides a
            description of the table’s content, helping screen readers and
            improving semantics.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you not use tables in HTML?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Tables should
            not be used for page layout; they are only for displaying tabular
            data.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between &lt;td&gt; and &lt;th&gt;?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> &lt;td&gt;
            holds regular data cells, &lt;th&gt; holds header cells which are
            semantically important for accessibility.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Tables organize data into rows and columns using &lt;table&gt;,
            &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;.
          </li>
          <li>
            Use semantic tags like &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;,
            and &lt;caption&gt; for clarity and accessibility.
          </li>
          <li>
            Always follow accessibility best practices for headers and captions.
          </li>
          <li>
            Avoid using tables for layout; they are meant for tabular data only.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 201,
    title: "HTML Media Elements",
    path: "/frontend/html-media",
    explanation: (
      <>
        <p>
          <strong>HTML Media Elements</strong> let you add audio, video, and
          responsive images to your web pages. They help make your website
          interactive and visually rich.
        </p>

        <h2>1️⃣ Common Media Elements</h2>
        <ul>
          <li>
            <strong>&lt;audio&gt;:</strong> Embeds audio content like music or
            sounds. Can include multiple <code>&lt;source&gt;</code> elements
            for different formats.
          </li>
          <li>
            <strong>&lt;video&gt;:</strong> Embeds video content. Supports
            controls, autoplay, loop, and multiple <code>&lt;source&gt;</code>{" "}
            elements.
          </li>
          <li>
            <strong>&lt;picture&gt;:</strong> Provides responsive images using{" "}
            <code>&lt;source&gt;</code> for different screen sizes and
            resolutions.
          </li>
          <li>
            <strong>&lt;img&gt;:</strong> Displays images. Attributes like{" "}
            <code>alt</code>, <code>width</code>, <code>height</code>, and{" "}
            <code>loading</code> improve accessibility and performance.
          </li>
          <li>
            <strong>&lt;source&gt;:</strong> Used inside{" "}
            <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, or{" "}
            <code>&lt;picture&gt;</code> to specify media files with different
            formats.
          </li>
        </ul>

        <h2>2️⃣ Key Attributes</h2>
        <ul>
          <li>
            <strong>controls:</strong> Displays default browser controls for
            audio/video (play, pause, volume).
          </li>
          <li>
            <strong>autoplay:</strong> Starts playing media automatically (often
            blocked in browsers until user interaction).
          </li>
          <li>
            <strong>loop:</strong> Repeats the media indefinitely.
          </li>
          <li>
            <strong>muted:</strong> Starts the media muted.
          </li>
          <li>
            <strong>preload:</strong> Defines if media should load immediately,
            metadata only, or none (<code>auto</code>, <code>metadata</code>,{" "}
            <code>none</code>).
          </li>
          <li>
            <strong>poster:</strong> For videos, shows an image before playback
            starts.
          </li>
          <li>
            <strong>src:</strong> URL of the media file (used in{" "}
            <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>, or{" "}
            <code>&lt;video&gt;</code>).
          </li>
          <li>
            <strong>alt:</strong> Alternative text for images (important for
            accessibility).
          </li>
        </ul>

        <h2>Basic Example – Audio</h2>
        <pre>
          {`<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`}
        </pre>

        <h2>Basic Example – Video</h2>
        <pre>
          {`<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`}
        </pre>

        <h2>Basic Example – Picture</h2>
        <pre>
          {`<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(max-width: 1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Responsive image">
</picture>`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between &lt;audio&gt; and &lt;video&gt; elements?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> &lt;audio&gt;
            is for sound only, while &lt;video&gt; is for video with optional
            audio and display on screen.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why use
            multiple &lt;source&gt; elements in audio/video?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To provide
            different file formats so all browsers can play the media correctly.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            purpose of the &lt;picture&gt; element?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It allows
            responsive images by serving different images based on screen size
            or resolution.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does the
            'controls' attribute do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It shows the
            browser’s default play/pause, volume, and seek controls for audio or
            video.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            improve accessibility for images?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> By using the{" "}
            <code>alt</code> attribute to describe the image for screen readers.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            HTML media elements let you embed audio, video, and responsive
            images on web pages.
          </li>
          <li>
            Use &lt;audio&gt; for sounds, &lt;video&gt; for videos, and
            &lt;picture&gt; for responsive images.
          </li>
          <li>
            Include multiple &lt;source&gt; elements for browser compatibility.
          </li>
          <li>
            Use attributes like controls, autoplay, loop, and alt for better UX
            and accessibility.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
];








// jsx


