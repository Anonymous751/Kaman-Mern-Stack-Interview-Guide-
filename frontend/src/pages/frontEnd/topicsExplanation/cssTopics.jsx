
const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};

export const cssTopics = [
{
    id: 2,
    title: "CSS Basics, Flexbox & Grid",
    path: "/frontend/css-basics",
    explanation: (
      <>
        <p>
          CSS (Cascading Style Sheets) is used to style and visually design your
          HTML content. Flexbox and Grid are two modern layout systems that make
          arranging elements on a page much easier, cleaner, and more
          responsive.
        </p>

        {/* ---------------------- CSS BASICS ---------------------- */}
        <h2>What is CSS?</h2>
        <ul>
          <li>
            CSS controls colors, spacing, animations, layouts, fonts, and
            overall design.
          </li>
          <li>HTML gives structure, CSS gives beauty and layout.</li>
          <li>CSS makes websites look good on all screen sizes.</li>
        </ul>

        <h2>Why Do We Use CSS?</h2>
        <ul>
          <li>To separate design from structure (cleaner code).</li>
          <li>To style websites efficiently (colors, spacing, fonts).</li>
          <li>To create responsive layouts for mobile, tablet, desktop.</li>
          <li>To add animations, transitions, modern UI design.</li>
        </ul>

        <h2>Usage of CSS</h2>
        <ul>
          <li>Change text color, font, size.</li>
          <li>Add backgrounds, borders, spacing.</li>
          <li>Create layouts using Flexbox or Grid.</li>
          <li>Make responsive websites using media queries.</li>
        </ul>

        <h2>Benefits of CSS</h2>
        <ul>
          <li>Cleaner HTML (no inline styling everywhere).</li>
          <li>Reusable code via classes and external CSS files.</li>
          <li>Faster development with frameworks (Tailwind, Bootstrap).</li>
          <li>Better performance and readability.</li>
        </ul>

        {/* ---------------------- FLEXBOX ---------------------- */}
        <h2>Flexbox (One-Dimensional Layout)</h2>
        <p>
          Flexbox is used for arranging items in a{" "}
          <strong>single direction</strong> — either a row or a column.
        </p>

        <h3>Why Use Flexbox?</h3>
        <ul>
          <li>Easily aligns items horizontally or vertically.</li>
          <li>Automatically adjusts spacing between items.</li>
          <li>Great for navbars, cards in a row, footers, buttons.</li>
          <li>No need for floats or complex positioning.</li>
        </ul>

        <h3>Usage of Flexbox</h3>
        <ul>
          <li>
            Setting layout direction using <code>flex-direction</code>.
          </li>
          <li>
            Aligning items using <code>justify-content</code> and{" "}
            <code>align-items</code>.
          </li>
          <li>
            Making items grow or shrink using <code>flex-grow</code>.
          </li>
        </ul>

        <h3>Benefits of Flexbox</h3>
        <ul>
          <li>Simple and fast layout control.</li>
          <li>Great for responsive design.</li>
          <li>Automatically handles spacing and alignment.</li>
          <li>No more using float or inline-block hacks.</li>
        </ul>

        <h3>Example (Flexbox Row)</h3>
        <pre>
          {`<div style="display: flex; justify-content: space-between;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
        </pre>

        {/* ---------------------- GRID ---------------------- */}
        <h2>Grid (Two-Dimensional Layout)</h2>
        <p>
          CSS Grid is used for creating layouts in{" "}
          <strong>both rows and columns</strong>. It is perfect for complex page
          structures.
        </p>

        <h3>Why Use Grid?</h3>
        <ul>
          <li>
            Best for full-page layouts (header / sidebar / main / footer).
          </li>
          <li>Gives full control over rows and columns.</li>
          <li>Clean and powerful layout system.</li>
          <li>Better than Flexbox when both directions matter.</li>
        </ul>

        <h3>Usage of Grid</h3>
        <ul>
          <li>
            Define columns using <code>grid-template-columns</code>.
          </li>
          <li>
            Define rows using <code>grid-template-rows</code>.
          </li>
          <li>
            Add spacing with <code>gap</code>.
          </li>
          <li>
            Use <code>grid-template-areas</code> for named sections.
          </li>
        </ul>

        <h3>Benefits of Grid</h3>
        <ul>
          <li>Best for 2D layouts.</li>
          <li>Very clean and organized structure.</li>
          <li>Reduces nested divs.</li>
          <li>Responsive layouts with fewer media queries.</li>
        </ul>

        <h3>Example (Grid)</h3>
        <pre>
          {`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
        </pre>

        {/* ---------------------- RESPONSIVE TIPS ---------------------- */}
        <h2>Responsive Design Tips</h2>
        <ul>
          <li>Use flexible units like %, rem, fr.</li>
          <li>Grid + Flexbox = perfect for modern UI.</li>
          <li>Use media queries to adjust layout on small screens.</li>
          <li>
            Use <code>auto-fit</code> and <code>auto-fill</code> in Grid for
            responsiveness.
          </li>
        </ul>

        {/* ---------------------- INTERVIEW QUESTIONS ---------------------- */}
        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between Flexbox and Grid?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Flexbox is 1D
            (row or column) for aligning items; Grid is 2D (rows + columns) for
            layout.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>flex-grow</code> do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Determines how
            much a flex item expands to fill available space.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            center a div using Flexbox?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use on Parent
            Div{" "}
            <code>
              display: flex; justify-content: center; align-items: center;
            </code>
            .
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When do you
            prefer Grid over Flexbox?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When building
            2D layouts with rows and columns; Flexbox is better for simpler 1D
            alignment.
          </li>
        </ul>

        {/* ---------------------- SUMMARY ---------------------- */}
        <h2>Summary</h2>
        <ul>
          <li>CSS styles and designs your webpage.</li>
          <li>Flexbox is for 1D layouts (row or column).</li>
          <li>Grid is for 2D layouts (rows + columns).</li>
          <li>Flexbox for simple alignment, Grid for complex pages.</li>
          <li>Both are essential for modern responsive web design.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Responsive Design & Media Queries",
    path: "/frontend/responsive-design",
    explanation: (
      <>
        <p>
          Responsive design ensures that your website looks great on all screen
          sizes — mobile, tablet, laptop, and desktop. Media queries help you
          apply different styles based on screen width, height, orientation, or
          device type.
        </p>

        {/* ---------------------- WHY RESPONSIVE? ---------------------- */}
        <h2>Why Responsive Design?</h2>
        <ul>
          <li>Most users browse from mobile devices.</li>
          <li>Improves user experience across devices.</li>
          <li>Google ranks mobile-friendly websites higher.</li>
          <li>Prevents layout breaking on small or large screens.</li>
          <li>Ensures accessibility and usability for everyone.</li>
        </ul>

        {/* ---------------------- USAGE ---------------------- */}
        <h2>Usage of Responsive Design</h2>
        <ul>
          <li>
            Create different layouts for mobile, tablet, desktop using
            breakpoints.
          </li>
          <li>Use flexible units like %, rem, vh, vw, fr to scale elements.</li>
          <li>Adjust font-size, padding, margin based on screen width.</li>
          <li>
            Hide/show or reorder elements using CSS at different breakpoints.
          </li>
          <li>Optimize images for smaller screens.</li>
        </ul>

        {/* ---------------------- BENEFITS ---------------------- */}
        <h2>Benefits</h2>
        <ul>
          <li>Better performance on mobile.</li>
          <li>Cleaner UI that adapts automatically.</li>
          <li>Less code duplication (one website for all screens).</li>
          <li>Higher SEO ranking due to mobile-first design.</li>
          <li>Future-proof layouts for new devices.</li>
        </ul>

        {/* ---------------------- KEY CONCEPTS ---------------------- */}
        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Mobile-first:</strong> Start designing for small screens and
            scale upward.
          </li>
          <li>
            <strong>Breakpoints:</strong> Specific screen widths where design
            changes.
          </li>
          <li>
            <strong>Fluid Layout:</strong> Uses percentages to grow/shrink with
            the screen.
          </li>
          <li>
            <strong>Responsive Layout:</strong> Changes at breakpoints using
            media queries.
          </li>
          <li>
            <strong>Adaptive Layout:</strong> Different fixed layouts per device
            type.
          </li>
        </ul>

        {/* ---------------------- MEDIA QUERY ---------------------- */}
        <h2>What Are Media Queries?</h2>
        <p>
          Media queries allow you to apply CSS only when certain conditions
          (like screen width) are true.
        </p>

        <h3>Why Media Queries?</h3>
        <ul>
          <li>Change layout at different screen sizes.</li>
          <li>Adjust fonts, spacing, images based on device width.</li>
          <li>Create mobile-first to desktop experiences.</li>
        </ul>

        <h3>Usage</h3>
        <ul>
          <li>
            <code>@media (min-width: ...)</code> = Apply styles on larger
            screens.
          </li>
          <li>
            <code>@media (max-width: ...)</code> = Apply styles on smaller
            screens.
          </li>
          <li>Common breakpoints: 480px, 768px, 1024px, 1280px.</li>
        </ul>

        <h2>Media Query Example</h2>
        <pre>
          {`/* Mobile first default styles */
body {
  font-size: 16px;
  padding: 10px;
}

/* Tablet and above */
@media (min-width: 768px) {
  body {
    font-size: 18px;
    padding: 20px;
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
    padding: 30px;
  }
}`}
        </pre>

        {/* ---------------------- FLUID VS RESPONSIVE VS ADAPTIVE ---------------------- */}
        <h2>Fluid vs Responsive vs Adaptive</h2>
        <ul>
          <li>
            <strong>Fluid:</strong> Uses flexible units (% / vw) and scales
            continuously.
          </li>
          <li>
            <strong>Responsive:</strong> Layout changes at breakpoints (media
            queries).
          </li>
          <li>
            <strong>Adaptive:</strong> Predefined fixed layouts for specific
            devices.
          </li>
        </ul>

        {/* ---------------------- INTERVIEW QUESTIONS ---------------------- */}
        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Explain the
            concept of mobile-first design.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Design starts
            for small screens first, then scales up for larger devices; ensures
            better usability on mobiles.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between min-width and max-width?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>min-width</code> applies styles when screen ≥ value;{" "}
            <code>max-width</code> applies when screen ≤ value.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            breakpoints and why are they important?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Specific
            screen widths where layout changes; ensure design looks good on all
            devices.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Difference
            between responsive and adaptive design?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Responsive
            uses fluid layouts that adjust continuously; adaptive uses fixed
            layouts for specific screen sizes.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do vw/vh
            units help in responsiveness?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> They scale
            elements relative to viewport width/height, making layouts flexible
            across screen sizes.
          </li>
        </ul>

        {/* ---------------------- SUMMARY ---------------------- */}
        <h2>Summary</h2>
        <ul>
          <li>Responsive design adjusts layout across all devices.</li>
          <li>Media queries help apply CSS based on screen width.</li>
          <li>Mobile-first (min-width) is the modern best practice.</li>
          <li>Use flexible units + breakpoints for smooth layout behavior.</li>
          <li>
            Responsive design improves performance, SEO, and user experience.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "CSS Animations & Transitions",
    path: "/frontend/css-animations",
    explanation: (
      <>
        <p>
          CSS <strong>transitions</strong> and <strong>animations</strong> allow
          elements to smoothly change styles over time. They improve user
          experience, make interfaces interactive, and bring life to the UI.
        </p>

        {/* ---------------------- WHY? ---------------------- */}
        <h2>Why CSS Animations & Transitions?</h2>
        <ul>
          <li>Improve user experience with smooth visual feedback.</li>
          <li>Create more intuitive UI interactions.</li>
          <li>Guide user attention to important areas.</li>
          <li>Make interfaces feel modern and polished.</li>
          <li>Reduce dependency on JavaScript for simple animations.</li>
        </ul>

        {/* ---------------------- USAGE ---------------------- */}
        <h2>Usage</h2>
        <ul>
          <li>Hover effects for buttons, cards, links.</li>
          <li>Page transitions and fade-ins.</li>
          <li>Loading animations (spinners, pulsing).*</li>
          <li>Sliding menus, modals, tooltips.</li>
          <li>Attention-grabbing animations (shake, bounce).</li>
        </ul>

        {/* ---------------------- BENEFITS ---------------------- */}
        <h2>Benefits</h2>
        <ul>
          <li>No JavaScript needed for simple interactions.</li>
          <li>Smoother performance due to CSS GPU optimization.</li>
          <li>Cleaner code — animations are declared, not manually updated.</li>
          <li>Easier to maintain and reuse.</li>
          <li>Consistent behavior across browsers.</li>
        </ul>

        {/* ---------------------- TRANSITIONS ---------------------- */}
        <h2>Transitions</h2>
        <p>
          Transitions allow property values to change smoothly
          <strong>when a state changes</strong> (hover, focus, active, etc.).
        </p>

        <h3>Why Use Transitions?</h3>
        <ul>
          <li>Make hover effects smooth, not sudden.</li>
          <li>Add natural feel to UI interactions (buttons, cards).</li>
          <li>Require minimal code (1 line).</li>
        </ul>

        <h3>Common Transition Properties</h3>
        <ul>
          <li>
            <strong>transition-property</strong>: which CSS property to animate
          </li>
          <li>
            <strong>transition-duration</strong>: how long
          </li>
          <li>
            <strong>transition-timing-function</strong>: easing (ease, linear,
            ease-in-out)
          </li>
          <li>
            <strong>transition-delay</strong>: wait before animation starts
          </li>
        </ul>

        <h3>Example — Simple Hover Transition</h3>
        <pre>
          {`button {
  background-color: blue;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: green;
}`}
        </pre>

        {/* ---------------------- ANIMATIONS ---------------------- */}
        <h2>Keyframes & Animations</h2>
        <p>
          Animations use <strong>@keyframes</strong> to define multi-step
          transitions. They run automatically without requiring user
          interaction.
        </p>

        <h3>Why Use Animations?</h3>
        <ul>
          <li>Allow complex, multi-step effects.</li>
          <li>Run automatically (no events needed).</li>
          <li>Support infinite loops for loaders or waves.</li>
          <li>Can animate multiple properties together.</li>
        </ul>

        <h3>Animation Properties</h3>
        <ul>
          <li>
            <strong>animation-name</strong>: keyframe name
          </li>
          <li>
            <strong>animation-duration</strong>: total time
          </li>
          <li>
            <strong>animation-timing-function</strong>
          </li>
          <li>
            <strong>animation-delay</strong>
          </li>
          <li>
            <strong>animation-iteration-count</strong>: 1, infinite
          </li>
          <li>
            <strong>animation-direction</strong>: normal, reverse, alternate
          </li>
          <li>
            <strong>animation-fill-mode</strong>: forwards, backwards, both
          </li>
        </ul>

        <h3>Example — Slide In Animation</h3>
        <pre>
          {`@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.box {
  animation: slideIn 1s ease forwards;
}`}
        </pre>

        {/* ---------------------- PERFORMANCE ---------------------- */}
        <h2>Performance Tips</h2>
        <ul>
          <li>
            Animate <strong>transform</strong> and <strong>opacity</strong> for
            GPU-accelerated performance.
          </li>
          <li>
            Avoid animating <strong>top</strong>, <strong>left</strong>,{" "}
            <strong>width</strong>,<strong>height</strong> because they trigger
            layout recalculations (reflow).
          </li>
          <li>Keep animation duration small for better UX (0.2s – 0.5s).</li>
        </ul>

        {/* ---------------------- INTERVIEW ---------------------- */}
        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Explain the
            difference between transitions and animations.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Transitions
            animate between two states on a trigger; animations can have
            multiple keyframes, run automatically, and loop.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            "transform" preferred over "top/left"?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Transforms use
            GPU, avoid layout recalculation, so they are smoother and better for
            performance.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are
            different easing functions?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> ease = default
            smooth, ease-in = slow start, ease-out = slow end, ease-in-out =
            slow start & end.
          </li>

          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Explain reflow
            and repaint performance issues.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reflow
            recalculates layout, repaint redraws pixels; both are costly if
            overused—use transforms and opacity for smoother animations.
          </li>
        </ul>

        {/* ---------------------- SUMMARY ---------------------- */}
        <h2>Summary</h2>
        <ul>
          <li>Use transitions for single-state changes like hover.</li>
          <li>Use animations for multi-step or auto-running effects.</li>
          <li>Transform + opacity = smoother + more performant.</li>
          <li>Animations enhance UX and make UI feel more alive.</li>
        </ul>
      </>
    ),
  },


{
    id: 202,
    title: "CSS Box Model",
    path: "/frontend/css-box-model",
    explanation: (
      <>
        <p>
          <strong>CSS Box Model</strong> is the way every HTML element is
          represented as a rectangular box in the browser. Understanding it is
          key to controlling layout, spacing, and sizing.
        </p>

        <h2>1️⃣ Box Model Parts</h2>
        <ul>
          <li>
            <strong>Content:</strong> The actual content of the element (text,
            image, etc.).
          </li>
          <li>
            <strong>Padding:</strong> Space between content and border. It
            increases the element’s visible size.
          </li>
          <li>
            <strong>Border:</strong> The line surrounding padding (and content).
          </li>
          <li>
            <strong>Margin:</strong> Space outside the border. Separates the
            element from other elements.
          </li>
        </ul>

        <h2>2️⃣ Box Sizing</h2>
        <ul>
          <li>
            <strong>content-box:</strong> Width/height applies only to content.
            Padding and border are added outside.
          </li>
          <li>
            <strong>border-box:</strong> Width/height includes content + padding
            + border. Easier to manage layouts.
          </li>
        </ul>

        <h2>3️⃣ Width & Height Calculation</h2>
        <ul>
          <li>
            In <code>content-box</code>, total width = content + padding +
            border + margin
          </li>
          <li>
            In <code>border-box</code>, total width = specified width + margin
          </li>
        </ul>

        <h2>4️⃣ Reflow & Repaint Impact</h2>
        <ul>
          <li>
            Changing content, padding, border, or margin can trigger{" "}
            <strong>reflow</strong> (layout recalculation).
          </li>
          <li>
            Reflow is expensive because it affects element positions and sizes.
          </li>
          <li>
            <strong>Repaint</strong> happens when visual properties (like color)
            change without affecting layout.
          </li>
        </ul>

        <h2>Basic Example – Box Model</h2>
        <pre>
          {`div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
  box-sizing: content-box; /* or border-box */
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What are the
            four parts of the CSS box model?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Content,
            padding, border, and margin.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between content-box and border-box?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> content-box
            width/height is only for content, while border-box includes content,
            padding, and border.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do padding
            and margin affect element size?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Padding
            increases element’s inner size; margin adds space outside the
            element.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is reflow
            and repaint?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Reflow
            recalculates layout when size/position changes; repaint redraws
            elements when visual properties change.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Why is
            border-box easier for layout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Because the
            specified width includes padding and border, making total element
            size predictable.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Every HTML element is a rectangular box with content, padding,
            border, and margin.
          </li>
          <li>box-sizing controls how width and height are calculated.</li>
          <li>Understanding the box model helps avoid layout issues.</li>
          <li>
            Reflow and repaint can affect performance if many elements change
            frequently.
          </li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 203,
    title: "CSS Positioning",
    path: "/frontend/css-positioning",
    explanation: (
      <>
        <p>
          <strong>CSS Positioning</strong> lets you control where elements
          appear on the page. Understanding positioning is key for layout,
          overlays, and stacking elements.
        </p>

        <h2>1️⃣ Position Types</h2>
        <ul>
          <li>
            <strong>static:</strong> Default position; elements flow normally in
            the page. Top, left, etc. have no effect.
          </li>
          <li>
            <strong>relative:</strong> Positioned relative to its normal spot.
            Moves using top, left, right, bottom without affecting other
            elements.
          </li>
          <li>
            <strong>absolute:</strong> Positioned relative to the nearest
            positioned ancestor (not static). Removed from normal flow.
          </li>
          <li>
            <strong>fixed:</strong> Positioned relative to the viewport. Stays
            in place even when scrolling.
          </li>
          <li>
            <strong>sticky:</strong> Acts like relative until a scroll
            threshold, then behaves like fixed.
          </li>
        </ul>

        <h2>2️⃣ z-index & Stacking Context</h2>
        <ul>
          <li>
            <strong>z-index:</strong> Controls which element appears on top.
            Higher value = in front.
          </li>
          <li>
            <strong>Stacking Context:</strong> A hierarchy created by certain
            CSS properties (position + z-index, opacity, transform, etc.) that
            affects which elements are on top.
          </li>
        </ul>

        <h2>Basic Example – Absolute & Relative</h2>
        <pre>
          {`div.parent {
  position: relative;
  width: 300px;
  height: 200px;
  background: lightblue;
}

div.child {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 100px;
  height: 50px;
  background: coral;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            default CSS position for elements?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> static.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            relative positioning work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Moves the
            element relative to its normal position without affecting other
            elements.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use absolute positioning?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you want
            to place an element precisely inside a positioned ancestor.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is sticky
            positioning?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It behaves
            like relative until a scroll point, then sticks like fixed.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            z-index affect stacking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Higher z-index
            elements appear in front of lower z-index elements within the same
            stacking context.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>CSS positioning controls how elements appear on the page.</li>
          <li>
            Static, relative, absolute, fixed, and sticky are the main position
            types.
          </li>
          <li>
            z-index and stacking context determine which elements appear on top.
          </li>
          <li>
            Understanding positioning is key for layouts, modals, tooltips, and
            overlapping elements.
          </li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 203,
    title: "CSS Positioning",
    path: "/frontend/css-positioning",
    explanation: (
      <>
        <p>
          <strong>CSS Positioning</strong> lets you control where elements
          appear on the page. Understanding positioning is key for layout,
          overlays, and stacking elements.
        </p>

        <h2>1️⃣ Position Types</h2>
        <ul>
          <li>
            <strong>static:</strong> Default position; elements flow normally in
            the page. Top, left, etc. have no effect.
          </li>
          <li>
            <strong>relative:</strong> Positioned relative to its normal spot.
            Moves using top, left, right, bottom without affecting other
            elements.
          </li>
          <li>
            <strong>absolute:</strong> Positioned relative to the nearest
            positioned ancestor (not static). Removed from normal flow.
          </li>
          <li>
            <strong>fixed:</strong> Positioned relative to the viewport. Stays
            in place even when scrolling.
          </li>
          <li>
            <strong>sticky:</strong> Acts like relative until a scroll
            threshold, then behaves like fixed.
          </li>
        </ul>

        <h2>2️⃣ z-index & Stacking Context</h2>
        <ul>
          <li>
            <strong>z-index:</strong> Controls which element appears on top.
            Higher value = in front.
          </li>
          <li>
            <strong>Stacking Context:</strong> A hierarchy created by certain
            CSS properties (position + z-index, opacity, transform, etc.) that
            affects which elements are on top.
          </li>
        </ul>

        <h2>Basic Example – Absolute & Relative</h2>
        <pre>
          {`div.parent {
  position: relative;
  width: 300px;
  height: 200px;
  background: lightblue;
}

div.child {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 100px;
  height: 50px;
  background: coral;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            default CSS position for elements?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> static.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            relative positioning work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Moves the
            element relative to its normal position without affecting other
            elements.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use absolute positioning?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> When you want
            to place an element precisely inside a positioned ancestor.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is sticky
            positioning?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It behaves
            like relative until a scroll point, then sticks like fixed.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            z-index affect stacking?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Higher z-index
            elements appear in front of lower z-index elements within the same
            stacking context.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>CSS positioning controls how elements appear on the page.</li>
          <li>
            Static, relative, absolute, fixed, and sticky are the main position
            types.
          </li>
          <li>
            z-index and stacking context determine which elements appear on top.
          </li>
          <li>
            Understanding positioning is key for layouts, modals, tooltips, and
            overlapping elements.
          </li>
        </ul>
      </>
    ),
    priority: "Compulsory",
  },
  {
    id: 204,
    title: "CSS Typography",
    path: "/frontend/css-typography",
    explanation: (
      <>
        <p>
          <strong>CSS Typography</strong> controls how text looks on a web page.
          It helps improve readability, visual hierarchy, and overall design.
        </p>

        <h2>1️⃣ Key Typography Properties</h2>
        <ul>
          <li>
            <strong>font-family:</strong> Sets the typeface (e.g., Arial, Times
            New Roman, sans-serif).
          </li>
          <li>
            <strong>font-size:</strong> Controls text size (px, em, rem, %).
          </li>
          <li>
            <strong>line-height:</strong> Space between lines of text for
            readability.
          </li>
          <li>
            <strong>letter-spacing:</strong> Space between characters.
          </li>
          <li>
            <strong>word-spacing:</strong> Space between words.
          </li>
          <li>
            <strong>text-align:</strong> Align text (left, right, center,
            justify).
          </li>
          <li>
            <strong>text-transform:</strong> Change text case (uppercase,
            lowercase, capitalize).
          </li>
          <li>
            <strong>font-weight:</strong> Thickness of text (normal, bold,
            100–900).
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`p {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  text-align: justify;
  text-transform: capitalize;
  font-weight: 500;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does the{" "}
            <code>line-height</code> property do?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It sets the
            space between lines of text to improve readability.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            make all text uppercase using CSS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>text-transform: uppercase;</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between <code>letter-spacing</code> and{" "}
            <code>word-spacing</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Letter-spacing
            adjusts space between characters; word-spacing adjusts space between
            words.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you set
            a fallback font in CSS?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> List multiple
            fonts in <code>font-family</code>, e.g.,{" "}
            <code>font-family: 'Roboto', Arial, sans-serif;</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does{" "}
            <code>font-weight: 700;</code> mean?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It sets the
            text to bold (700 is the numeric value for bold).
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>CSS typography controls the appearance and spacing of text.</li>
          <li>
            Key properties include font-family, font-size, line-height, spacing,
            alignment, and weight.
          </li>
          <li>
            Proper typography improves readability, design consistency, and user
            experience.
          </li>
          <li>
            Combine different properties to create visually appealing text
            layouts.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 205,
    title: "CSS Colors & Backgrounds",
    path: "/frontend/css-colors-backgrounds",
    explanation: (
      <>
        <p>
          <strong>CSS Colors & Backgrounds</strong> help make your web pages
          visually appealing by controlling text colors, element backgrounds,
          gradients, and images.
        </p>

        <h2>1️⃣ Key Concepts</h2>
        <ul>
          <li>
            <strong>Color Formats:</strong> <code>hex (#ff0000)</code>,{" "}
            <code>rgb(255,0,0)</code>, <code>rgba(255,0,0,0.5)</code>,{" "}
            <code>hsl(0, 100%, 50%)</code>,{" "}
            <code>named colors (red, blue)</code>.
          </li>
          <li>
            <strong>Background Color:</strong> Sets the background color of an
            element using <code>background-color</code>.
          </li>
          <li>
            <strong>Background Image:</strong> Adds an image using{" "}
            <code>background-image: url('image.jpg');</code>.
          </li>
          <li>
            <strong>Background Repeat:</strong> Controls repetition:{" "}
            <code>repeat</code>, <code>no-repeat</code>, <code>repeat-x</code>,{" "}
            <code>repeat-y</code>.
          </li>
          <li>
            <strong>Background Position:</strong> Sets position of the
            background image: <code>top, center, bottom, 50% 50%</code>.
          </li>
          <li>
            <strong>Background Size:</strong> Adjust image size:{" "}
            <code>cover</code>, <code>contain</code>, or exact dimensions like{" "}
            <code>100px 200px</code>.
          </li>
          <li>
            <strong>Gradients:</strong> Smooth color transitions:{" "}
            <code>linear-gradient()</code> or <code>radial-gradient()</code>.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`div {
  background-color: #f0f0f0;
  background-image: linear-gradient(to right, red, yellow);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between <code>cover</code> and <code>contain</code> in
            background-size?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>cover</code> scales the image to fill the element, possibly
            cropping it. <code>contain</code> scales to fit inside without
            cropping, possibly leaving empty space.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            make a background image not repeat?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>background-repeat: no-repeat;</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Name 3 ways to
            define colors in CSS.
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Hex, RGB(A),
            HSL, and named colors.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is a
            linear gradient?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> A smooth
            transition between two or more colors along a straight line.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            position a background image in the center?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>background-position: center;</code>.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>CSS colors and backgrounds make pages visually appealing.</li>
          <li>Use various color formats, gradients, and background images.</li>
          <li>
            Control image repetition, position, and size for best results.
          </li>
          <li>
            Combining these properties improves UI design and user experience.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 206,
    title: "CSS Pseudo-classes & Pseudo-elements",
    path: "/frontend/css-pseudo",
    explanation: (
      <>
        <p>
          <strong>CSS Pseudo-classes & Pseudo-elements</strong> let you style
          elements based on their state or create extra content without adding
          HTML elements.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Pseudo-classes:</strong> Style elements based on state or
            position:
            <ul>
              <li>
                <code>:hover</code> → when the user hovers over an element
              </li>
              <li>
                <code>:focus</code> → when an element (like input) is focused
              </li>
              <li>
                <code>:active</code> → when an element is being clicked
              </li>
              <li>
                <code>:nth-child(n)</code> → select elements based on their
                position
              </li>
              <li>
                <code>:first-child, :last-child</code> → select first or last
                element
              </li>
            </ul>
          </li>
          <li>
            <strong>Pseudo-elements:</strong> Create or style parts of elements:
            <ul>
              <li>
                <code>::before</code> → insert content before an element
              </li>
              <li>
                <code>::after</code> → insert content after an element
              </li>
              <li>
                <code>::first-letter</code>, <code>::first-line</code> → style
                first letter or line
              </li>
            </ul>
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`button:hover {
  background-color: blue;
  color: white;
}

p::before {
  content: "★ ";
  color: gold;
}

li:nth-child(odd) {
  background-color: #f0f0f0;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between a pseudo-class and a pseudo-element?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Pseudo-classes
            style elements based on state or position (like :hover, :nth-child),
            while pseudo-elements style part of an element or insert extra
            content (::before, ::after).
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How do you
            insert content before an element without modifying HTML?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>::before</code> with the <code>content</code> property in CSS.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How can you
            style every even or odd element in a list?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>:nth-child(even)</code> or <code>:nth-child(odd)</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When would you
            use :focus?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> To style an
            element when it is active or selected, like input fields or links
            for accessibility.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> Can
            pseudo-elements accept normal CSS properties like color, font,
            margin?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Yes, they
            accept most visual CSS properties to style the generated content or
            element parts.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>Pseudo-classes style elements based on state or position.</li>
          <li>
            Pseudo-elements allow you to style parts of elements or insert
            content without HTML changes.
          </li>
          <li>They help reduce extra HTML and make styling more flexible.</li>
          <li>
            Common examples include :hover, :focus, ::before, ::after, and
            :nth-child.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 207,
    title: "CSS Specificity & Inheritance",
    path: "/frontend/css-specificity-inheritance",
    explanation: (
      <>
        <p>
          <strong>CSS Specificity & Inheritance</strong> help decide which
          styles are applied when multiple rules target the same element.
          Specificity gives weight to selectors, while inheritance allows child
          elements to get certain styles from their parents.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Specificity:</strong> Determines which CSS rule wins when
            multiple rules apply.
            <ul>
              <li>Inline styles (style="") → highest priority</li>
              <li>ID selectors (#id) → higher than class</li>
              <li>
                Class, attribute, pseudo-class selectors (.class, [attr],
                :hover) → medium priority
              </li>
              <li>
                Element and pseudo-element selectors (div, p, ::before) → lowest
                priority
              </li>
            </ul>
          </li>
          <li>
            <strong>Inheritance:</strong> Certain CSS properties (like color,
            font-family) are passed from parent to child elements automatically.
          </li>
          <li>
            <strong>!important:</strong> Overrides normal specificity rules, but
            should be used sparingly.
          </li>
          <li>
            <strong>Conflict resolution:</strong> When rules have equal
            specificity, the last one in CSS takes precedence.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`p {
  color: blue; /* inherited by default */
}

.text {
  color: green; /* class selector */
}

#mainText {
  color: red; /* ID selector has higher specificity */
}

<p id="mainText" class="text">Hello World</p>
<!-- This text will be red because ID selector wins -->`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is CSS
            specificity?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Specificity is
            a weight system that determines which CSS rule applies when multiple
            rules target the same element.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How is
            specificity calculated?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Inline styles
            &gt; ID selectors &gt; class/attribute/pseudo-class selectors &gt;
            element/pseudo-element selectors.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What
            properties are inherited by default?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Properties
            like color, font-family, font-size, line-height are inherited
            automatically by child elements.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does
            !important work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It forces a
            style to override other rules, regardless of normal specificity, but
            should be used carefully.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if two selectors have the same specificity?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> The last
            defined rule in the CSS file takes precedence.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Specificity decides which CSS rule applies when multiple rules
            target the same element.
          </li>
          <li>
            Inheritance allows child elements to automatically get certain
            styles from their parent.
          </li>
          <li>
            !important can override normal specificity rules but should be
            avoided if possible.
          </li>
          <li>
            Understanding these concepts helps write predictable and
            maintainable CSS.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },
  {
    id: 208,
    title: "CSS Units & Measurements",
    path: "/frontend/css-units",
    explanation: (
      <>
        <p>
          <strong>CSS Units</strong> define the size of elements, text, spacing,
          and layout in your web page. There are different types of units:
          absolute and relative.
        </p>

        <h2>Common CSS Units</h2>
        <ul>
          <li>
            <strong>px (pixels):</strong> Fixed size. One pixel on the screen.
            Always the same regardless of parent.
          </li>
          <li>
            <strong>em:</strong> Relative to the{" "}
            <em>font-size of the parent</em>. Useful for scalable text.
          </li>
          <li>
            <strong>rem:</strong> Relative to the <em>root (html) font-size</em>
            . Consistent across the page.
          </li>
          <li>
            <strong>%:</strong> Relative to the parent element's size. Often
            used for width, height, or spacing.
          </li>
          <li>
            <strong>vh / vw:</strong> Relative to <em>viewport height</em> /{" "}
            <em>viewport width</em>. 1vh = 1% of viewport height.
          </li>
          <li>
            <strong>ch:</strong> Relative to the width of the "0" (zero)
            character in current font.
          </li>
          <li>
            <strong>ex:</strong> Relative to the height of "x" character in
            current font.
          </li>
          <li>
            <strong>fr:</strong> Fractional unit used in <code>CSS Grid</code>{" "}
            to divide space proportionally.
          </li>
        </ul>

        <h2>Relative vs Absolute Sizing</h2>
        <ul>
          <li>
            <strong>Absolute units:</strong> px – fixed, don’t scale with parent
            or viewport.
          </li>
          <li>
            <strong>Relative units:</strong> em, rem, %, vh, vw, ch, ex, fr –
            scale depending on parent, root, or viewport.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`/* Absolute unit */
div { width: 200px; }

/* Relative units */
p { font-size: 1.2em; }  /* 1.2 times parent font size */
h1 { font-size: 2rem; }  /* 2 times root font size */
.container { width: 80%; }  /* 80% of parent width */
section { height: 50vh; }  /* 50% of viewport height */`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between px, em, and rem?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> px is fixed,
            em is relative to parent font-size, rem is relative to root
            font-size.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use relative units over absolute units?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use relative
            units to make layouts and text scalable and responsive across
            devices.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What does 1vw
            and 1vh mean?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> 1vw is 1% of
            the viewport width, and 1vh is 1% of the viewport height.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does the
            fr unit work in CSS Grid?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It divides
            available space proportionally; e.g., 1fr + 2fr = total space split
            in 1:2 ratio.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What happens
            if you mix absolute and relative units in a layout?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Absolute units
            stay fixed while relative units scale; mixing requires careful
            planning to avoid inconsistencies.
          </li>
        </ul>

        <h2>Summary / Why It Matters</h2>
        <ul>
          <li>Relative units make your site responsive and scalable.</li>
          <li>
            Absolute units give precise control but may break on different
            devices.
          </li>
          <li>
            Choosing the right unit improves readability, layout, and design
            flexibility.
          </li>
        </ul>
      </>
    ),
    priority: "Medium",
  },
  {
    id: 209,
    title: "CSS Overflow, Visibility & Display",
    path: "/frontend/css-overflow-visibility-display",
    explanation: (
      <>
        <p>
          <strong>CSS Display, Visibility, and Overflow</strong> control how
          elements appear, hide, or handle extra content in your web page.
        </p>

        <h2>Display Types</h2>
        <ul>
          <li>
            <strong>block:</strong> Element starts on a new line and takes full
            width. Example: <code>div, p</code>.
          </li>
          <li>
            <strong>inline:</strong> Element flows with text and only takes as
            much width as its content. Example: <code>span, a</code>.
          </li>
          <li>
            <strong>inline-block:</strong> Inline flow but you can set width and
            height.
          </li>
          <li>
            <strong>none:</strong> Hides the element completely (no space taken,
            not visible).
          </li>
        </ul>

        <h2>Visibility</h2>
        <ul>
          <li>
            <strong>visible:</strong> Default. Element is shown.
          </li>
          <li>
            <strong>hidden:</strong> Element is invisible but still takes up
            space in the layout.
          </li>
        </ul>

        <h2>Overflow</h2>
        <ul>
          <li>
            <strong>visible:</strong> Content spills out of the container
            (default).
          </li>
          <li>
            <strong>hidden:</strong> Extra content is clipped and not visible.
          </li>
          <li>
            <strong>scroll:</strong> Adds scrollbars to access extra content.
          </li>
          <li>
            <strong>auto:</strong> Adds scrollbars only if content overflows.
          </li>
        </ul>

        <h2>Text Overflow & Clipping</h2>
        <ul>
          <li>
            <strong>text-overflow: ellipsis;</strong> Shows "…" when text
            overflows its container. Works with{" "}
            <code>white-space: nowrap;</code> and <code>overflow: hidden;</code>
            .
          </li>
          <li>
            <strong>clip:</strong> Hides content outside the container without
            scrollbars or ellipsis.
          </li>
        </ul>

        <h2>Basic Example</h2>
        <pre>
          {`/* Display */
div { display: block; }
span { display: inline; }
button { display: inline-block; }
.hidden-element { display: none; }

/* Visibility */
p.invisible { visibility: hidden; }

/* Overflow */
.container { width: 200px; height: 50px; overflow: auto; }

/* Text Overflow */
p.ellipsis {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`}
        </pre>

        <h2>Interview Questions</h2>
        <ul>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What is the
            difference between <code>display: none</code> and{" "}
            <code>visibility: hidden</code>?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>display: none</code> removes the element from the layout,
            while <code>visibility: hidden</code> keeps the space but hides the
            content.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> When should
            you use <code>overflow: auto</code> vs <code>overflow: scroll</code>
            ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> Use{" "}
            <code>auto</code> to show scrollbars only when content overflows,
            and <code>scroll</code> to always show scrollbars.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> How does{" "}
            <code>text-overflow: ellipsis</code> work?
            <br />
            <strong style={{ color: colors.success }}>A:</strong> It displays
            "…" for overflowing text, but only works with{" "}
            <code>white-space: nowrap</code> and <code>overflow: hidden</code>.
          </li>
          <li>
            <strong style={{ color: colors.primary }}>Q:</strong> What’s the
            difference between <code>inline</code> and <code>inline-block</code>
            ?
            <br />
            <strong style={{ color: colors.success }}>A:</strong>{" "}
            <code>inline</code> flows with text and ignores width/height, while{" "}
            <code>inline-block</code> flows inline but respects width and
            height.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>
            Use <code>display</code> to control layout behavior of elements.
          </li>
          <li>
            <code>visibility</code> hides elements without removing space.
          </li>
          <li>
            <code>overflow</code> controls how extra content behaves and
            scrolls.
          </li>
          <li>
            Text overflow and clipping improve readability in fixed-size
            containers.
          </li>
        </ul>
      </>
    ),
    priority: "High",
  },

];
