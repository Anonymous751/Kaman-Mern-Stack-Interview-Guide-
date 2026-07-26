export const notesData = [
  // ========================= FRONTEND =========================
  {
    category: "Frontend (Interview Focused)",
    topics: [
      {
        id: "html_basics",
        title: "HTML Basics",
        explanation:
          "HTML = structure of web pages. Uses tags like <html>, <head>, <body> to organize content.",
        priority: "Compulsory",
      },
      {
        id: "html_semantics",
        title: "HTML Semantics",
        explanation:
          "Use meaningful tags like <header>, <nav>, <section>, <article> to improve accessibility and SEO.",
        priority: "High",
      },
      {
        id: "html_headings",
        title: "Headings & Paragraphs",
        explanation:
          "Use <h1>–<h6> for headings, <p> for paragraphs. Headings define content hierarchy.",
        priority: "High",
      },
      {
        id: "html_links",
        title: "Links & Anchors",
        explanation:
          "Use <a href='URL'> for links. Can open in new tab with target='_blank'.",
        priority: "Medium",
      },
      {
        id: "html_images",
        title: "Images",
        explanation:
          "Use <img src='url' alt='text'> to display images. Alt improves accessibility.",
        priority: "Medium",
      },
      {
        id: "html_lists",
        title: "Lists",
        explanation:
          "<ul> = unordered list, <ol> = ordered list, <li> = list item.",
        priority: "Low",
      },
      {
        id: "html_tables",
        title: "Tables",
        explanation:
          "Use <table> to display data; <tr> = row, <td> = cell, <th> = header cell.",
        priority: "Medium",
      },
      {
        id: "html_forms",
        title: "Forms",
        explanation:
          "<form> holds input fields. Use <input>, <textarea>, <select>, <button> to collect user data.",
        priority: "High",
      },
      {
        id: "html_input_types",
        title: "Input Types",
        explanation:
          "Common types: text, password, email, number, checkbox, radio, submit for different user input.",
        priority: "High",
      },
      {
        id: "html_labels",
        title: "Labels",
        explanation:
          "Use <label for='id'> to associate text with input fields. Improves accessibility.",
        priority: "High",
      },
      {
        id: "html_buttons",
        title: "Buttons",
        explanation:
          "<button> or <input type='button|submit|reset'> trigger actions in forms or scripts.",
        priority: "Medium",
      },
      {
        id: "html_block_inline",
        title: "Block vs Inline Elements",
        explanation:
          "Block = starts on new line (div, p, h1). Inline = flows within line (span, a, img).",
        priority: "Medium",
      },
      {
        id: "html_meta",
        title: "Meta Tags",
        explanation:
          "<meta> provides info about page, like charset, viewport, or SEO description.",
        priority: "Medium",
      },
      {
        id: "html_iframe",
        title: "Iframe",
        explanation: "<iframe> embeds another page or video inside your page.",
        priority: "Low",
      },
      {
        id: "fe_css1",
        title: "CSS Flexbox vs Grid",
        explanation:
          "Flexbox is for 1D layouts (row/column). Grid is for 2D layouts with rows and columns, giving more control over placement.",
        priority: "High",
      },
      {
        id: "fe_css2",
        title: "Responsive Design",
        explanation:
          "Make designs work on all screens. Use flexible units (%/vw/rem) and media queries for layout adjustments.",
        priority: "High",
      },
      {
        id: "fe_css_units",
        title: "CSS Units",
        explanation:
          "Units like px, %, em, rem, vw, vh control size. Use relative units for responsive design.",
        priority: "Medium",
      },
      {
        id: "fe_css_boxmodel",
        title: "Box Model",
        explanation:
          "Every element has content, padding, border, and margin. Understand spacing and sizing correctly.",
        priority: "Compulsory",
      },
      {
        id: "fe_css_position",
        title: "Position Property",
        explanation:
          "Static, relative, absolute, fixed, sticky control element placement on the page.",
        priority: "High",
      },
      {
        id: "fe_css_zindex",
        title: "Z-index",
        explanation:
          "Controls stacking order. Higher z-index appears above lower ones for positioned elements.",
        priority: "Medium",
      },
      {
        id: "fe_css_display",
        title: "Display Property",
        explanation:
          "Controls element type: block, inline, inline-block, none, flex, grid.",
        priority: "Medium",
      },
      {
        id: "fe_css_images",
        title: "Images & Backgrounds",
        explanation:
          "Use <img> or CSS background. Control size, repeat, position, and cover/contain.",
        priority: "Low",
      },
      {
        id: "fe_css_border",
        title: "Borders & Radius",
        explanation:
          "Add border width, color, style. Use border-radius for rounded corners.",
        priority: "Low",
      },
      {
        id: "fe_css_animation",
        title: "Animations",
        explanation:
          "Use @keyframes and animation properties to move or transform elements over time.",
        priority: "Low",
      },
      {
        id: "fe_css_transition",
        title: "Transitions",
        explanation:
          "Smoothly change CSS properties on events like hover using transition-duration and timing-function.",
        priority: "Medium",
      },
      {
        id: "fe_css_overflow",
        title: "Overflow & Visibility",
        explanation:
          "Control content outside box using visible, hidden, scroll, or auto.",
        priority: "Medium",
      },
      {
        id: "fe_css_float_clear",
        title: "Float & Clear",
        explanation:
          "Float elements left/right. Clear prevents elements from wrapping around floated elements.",
        priority: "Low",
      },
      {
        id: "js_exec",
        title: "Execution Context & Call Stack",
        explanation:
          "JS code runs in memory setup then execution. Explains why 'undefined' shows and how function calls are handled step by step.",
        priority: "Compulsory",
      },
      {
        id: "js_hoist",
        title: "Hoisting",
        explanation:
          "Functions are moved to top; var = undefined until assigned. let/const cannot be used before declaration (TDZ).",
        priority: "Compulsory",
      },
      {
        id: "js_closure",
        title: "Closures",
        explanation:
          "Inner functions remember variables from outer functions. Useful for private data, callbacks, and maintaining state.",
        priority: "Compulsory",
      },
      {
        id: "js_this",
        title: "'this' Keyword",
        explanation:
          "'this' changes depending on how a function is called. Arrow functions inherit 'this' from parent scope.",
        priority: "Compulsory",
      },
      {
        id: "js_async",
        title: "Promises & Async/Await",
        explanation:
          "Used to handle async tasks. Promises chain using .then/.catch; async/await makes code look synchronous.",
        priority: "Compulsory",
      },
      {
        id: "js_eventloop",
        title: "Event Loop",
        explanation:
          "JS executes code in order. Microtasks run before macrotasks, explaining timing of async operations.",
        priority: "High",
      },
      {
        id: "js_proto",
        title: "Prototype & Inheritance",
        explanation:
          "Objects can inherit properties and methods from another object. Helps code reuse and memory efficiency.",
        priority: "High",
      },
      {
        id: "js_methods",
        title: "Important JS Methods",
        explanation:
          "Use array methods like map, filter, reduce, forEach, find, some, every to manipulate data efficiently.",
        priority: "High",
      },
      {
        id: "js_error",
        title: "Error Handling",
        explanation:
          "Try/catch handles synchronous errors. Async code requires await or .catch() to prevent crashes.",
        priority: "High",
      },
      {
        id: "re_render",
        title: "React Rendering",
        explanation:
          "React updates the UI whenever state or props change. Only the affected components re-render for efficiency.",
        priority: "Compulsory",
      },
      {
        id: "re_jsx",
        title: "JSX & Virtual DOM",
        explanation:
          "JSX converts HTML-like code into JS. Virtual DOM updates only changed parts of the UI for better performance.",
        priority: "Compulsory",
      },
      {
        id: "re_stateprops",
        title: "State vs Props",
        explanation:
          "State holds component data and can change. Props are read-only values passed from parent components.",
        priority: "Compulsory",
      },
      {
        id: "re_core",
        title: "JS Core Concepts",
        explanation:
          "Review closures, hoisting, 'this', promises, and event loop to understand JS fundamentals in React.",
        priority: "High",
      },
      {
        id: "re_components",
        title: "React Components & Props",
        explanation:
          "Functional components accept props. State lifting allows child data to be shared with parent.",
        priority: "High",
      },
      {
        id: "re_hooks",
        title: "useState & useEffect",
        explanation:
          "useState stores local state. useEffect handles side effects like API calls; dependency array controls updates.",
        priority: "High",
      },
      {
        id: "re_router",
        title: "React Router",
        explanation:
          "Allows client-side routing. Supports nested routes, dynamic parameters, and page navigation without reloads.",
        priority: "High",
      },
      {
        id: "re_memo",
        title: "Memoization",
        explanation:
          "Cache component outputs or values to prevent unnecessary re-renders and improve performance.",
        priority: "Medium",
      },
      {
        id: "re_context",
        title: "Context API",
        explanation:
          "Provide global state to avoid passing props deeply. Use carefully to prevent unwanted re-renders.",
        priority: "Medium",
      },
      {
        id: "re_hooks_custom",
        title: "Custom Hooks",
        explanation:
          "Reusable functions starting with 'use'. Share logic across components while following hooks rules.",
        priority: "Medium",
      },
      {
        id: "re_forms",
        title: "Forms in React",
        explanation:
          "Controlled forms bind input to state. Validation ensures correct user input and prevents errors.",
        priority: "High",
      },
      {
        id: "re_perf",
        title: "React Performance Optimization",
        explanation:
          "Use lazy loading, memo, avoid inline functions, and optimize rendering to speed up React apps.",
        priority: "Medium",
      },
      {
        id: "re_api",
        title: "REST API in React",
        explanation:
          "Fetch or axios calls are done inside useEffect. Always handle loading and errors properly.",
        priority: "High",
      },
      {
        id: "re_auth",
        title: "Authentication",
        explanation:
          "Use JWT tokens to identify users. Store them securely in memory or cookies.",
        priority: "High",
      },
      {
        id: "re_build",
        title: "React Build Process",
        explanation:
          "Bundling, minification, and tree-shaking reduce app size and make it faster to load.",
        priority: "Medium",
      },
      {
        id: "re_errorbound",
        title: "Error Boundaries",
        explanation:
          "Catch render-time errors in React components. Hooks cannot be used inside error boundaries.",
        priority: "Medium",
      },
    ],
  },
  // ========================= GIT & GITHUB =========================
  {
    category: "Git & GitHub (Interview Focused)",
    topics: [
      {
        id: "git_intro",
        title: "Git Basics",
        explanation:
          "Git is a version control system to track code changes. Use commits to save snapshots and branches to work on features independently.",
        priority: "Compulsory",
      },
      {
        id: "git_branch",
        title: "Branches & Workflow",
        explanation:
          "Branches isolate features or fixes. Use Git Flow or feature-branch workflow to organize development and avoid conflicts.",
        priority: "High",
      },
      {
        id: "git_merge_rebase",
        title: "Merge vs Rebase",
        explanation:
          "Merge combines branches preserving history; rebase rewrites commits to create a linear history. Both help integrate changes safely.",
        priority: "High",
      },
      {
        id: "git_remote",
        title: "Remote Repositories",
        explanation:
          "Connect local repo to remote on GitHub. Use push to upload changes, pull/fetch to sync updates from team members.",
        priority: "Compulsory",
      },
      {
        id: "git_conflict",
        title: "Conflict Resolution",
        explanation:
          "Conflicts happen when multiple changes clash. Manually edit files and commit resolved versions to continue workflow.",
        priority: "High",
      },
      {
        id: "github_pr",
        title: "Pull Requests (PRs)",
        explanation:
          "PRs propose changes to a repository. Team members review, comment, and approve before merging to main branch.",
        priority: "Medium",
      },
      {
        id: "github_actions",
        title: "GitHub Actions Overview",
        explanation:
          "Automate workflows like build, test, and deployment using YAML files. Trigger actions on push, pull request, or schedule.",
        priority: "Medium",
      },
      {
        id: "git_tag_release",
        title: "Tags & Releases",
        explanation:
          "Use tags to mark important points in history. Releases package software versions for deployment or distribution.",
        priority: "Low",
      },
      {
        id: "git_stash",
        title: "Stashing Changes",
        explanation:
          "Temporarily save uncommitted changes with stash. Pop or apply stash later to continue working without committing incomplete work.",
        priority: "Low",
      },
    ],
  },

  // ========================= BACKEND =========================
  {
    category: "Backend (Interview Focused)",
    topics: [
      {
        id: "be_express",
        title: "Express Basics",
        explanation:
          "Express handles routing, middleware, and HTTP requests/responses easily.",
        priority: "Compulsory",
      },
      {
        id: "be_mvc",
        title: "MVC Pattern",
        explanation:
          "Separate code: Model = DB, View = UI, Controller = logic. Helps organize and maintain code.",
        priority: "High",
      },
      {
        id: "be_middleware",
        title: "Middleware",
        explanation:
          "Functions like logger, auth, error handler. next() passes control to the next middleware.",
        priority: "High",
      },
      {
        id: "be_mongo",
        title: "MongoDB + Mongoose",
        explanation:
          "Define schemas, hooks, references. Embed for small related data; reference for complex relations.",
        priority: "Compulsory",
      },
      {
        id: "be_queries",
        title: "Mongoose Query APIs",
        explanation:
          "Use find, findOne, update, delete, and aggregation to query and manipulate data.",
        priority: "High",
      },
      {
        id: "be_jwt",
        title: "JWT Authentication",
        explanation:
          "Generate tokens for authentication. Store access/refresh tokens securely.",
        priority: "Compulsory",
      },
      {
        id: "be_file",
        title: "File Uploads",
        explanation:
          "Multer handles single or multiple files. Choose memory or disk storage depending on use case.",
        priority: "Medium",
      },
      {
        id: "be_error",
        title: "Error Handling",
        explanation:
          "Global middleware catches errors. Async wrappers prevent crashes in async routes.",
        priority: "High",
      },
    ],
  },

  // ========================= DATABASES =========================
  {
    category: "Databases (Interview Focused)",
    topics: [
      {
        id: "db_sqlvsnosql",
        title: "SQL vs NoSQL",
        explanation:
          "SQL uses structured tables; NoSQL is flexible and scales easily for big data.",
        priority: "Compulsory",
      },
      {
        id: "db_acid",
        title: "ACID Properties",
        explanation:
          "Atomicity, Consistency, Isolation, Durability make database transactions reliable.",
        priority: "High",
      },
      {
        id: "db_txn",
        title: "Transactions",
        explanation:
          "Group multiple database operations and execute as a single unit to ensure correctness.",
        priority: "High",
      },
      {
        id: "db_index",
        title: "Indexes",
        explanation:
          "Indexes speed up reads but can slow down writes. Use on frequently queried fields.",
        priority: "Medium",
      },
      {
        id: "db_atlas",
        title: "MongoDB Atlas",
        explanation:
          "Managed cloud MongoDB with auto-scaling, monitoring, backups, and easy deployment.",
        priority: "Medium",
      },
      {
        id: "db_schema",
        title: "MongoDB Schema Design",
        explanation:
          "Embed for few items; use references for many-to-many or large datasets.",
        priority: "Compulsory",
      },
      {
        id: "db_agg",
        title: "Aggregation Pipeline",
        explanation:
          "Process and transform data step by step: match → group → sort → limit → lookup.",
        priority: "High",
      },
    ],
  },

  // ========================= SECURITY =========================
  {
    category: "Web Security (Interview Focused)",
    topics: [
      {
        id: "sec_xss",
        title: "XSS",
        explanation:
          "Attackers inject JS into websites. Prevent by escaping inputs and sanitizing data.",
        priority: "Compulsory",
      },
      {
        id: "sec_csrf",
        title: "CSRF",
        explanation:
          "Malicious requests perform actions without consent. Prevent using CSRF tokens and SameSite cookies.",
        priority: "High",
      },
      {
        id: "sec_cors",
        title: "CORS",
        explanation:
          "Controls which websites can access your API. Preflight requests check permissions before sending data.",
        priority: "Medium",
      },
      {
        id: "sec_authn_authz",
        title: "AuthN vs AuthZ",
        explanation:
          "AuthN verifies identity (who you are). AuthZ checks access rights (what you can do).",
        priority: "Compulsory",
      },
      {
        id: "sec_owasp",
        title: "OWASP Top 10",
        explanation:
          "Most common security risks and best practices to prevent them.",
        priority: "High",
      },
    ],
  },

  // ========================= DEVOPS =========================
  {
    category: "DevOps & CI/CD (Interview Focused)",
    topics: [
      {
        id: "dev_cicd",
        title: "CI/CD Overview",
        explanation:
          "CI = build and test on every commit. CD = automatically deploy code to servers for faster delivery.",
        priority: "Compulsory",
      },
      {
        id: "dev_pipeline",
        title: "CI/CD Pipelines",
        explanation:
          "Automated workflow: build → test → deploy. Ensures consistent, repeatable releases.",
        priority: "High",
      },
      {
        id: "dev_build_test",
        title: "Build & Test Automation",
        explanation:
          "Automate compiling code and running tests to catch bugs early and maintain quality.",
        priority: "High",
      },
      {
        id: "dev_deploy",
        title: "Deployment Strategies",
        explanation:
          "Rolling, blue/green, and canary deployments reduce downtime and minimize risk.",
        priority: "Medium",
      },
      {
        id: "dev_env",
        title: "Environment Variables & Secrets",
        explanation:
          "Store sensitive info securely. Use separate configs for dev, staging, and production.",
        priority: "Compulsory",
      },
      {
        id: "dev_monitoring",
        title: "Monitoring & Alerts",
        explanation:
          "Track application performance with logs and metrics; set alerts for failures or issues.",
        priority: "High",
      },
      {
        id: "dev_rollback",
        title: "Rollback Strategies",
        explanation:
          "Quickly revert to a stable version if a deployment causes problems.",
        priority: "Medium",
      },
      {
        id: "dev_scaling",
        title: "Scaling Applications",
        explanation:
          "Handle increasing load by vertical (bigger machines) or horizontal (more instances) scaling.",
        priority: "Medium",
      },
      {
        id: "dev_automation_tools",
        title: "Automation Tools",
        explanation:
          "Tools like Jenkins, CircleCI, or Travis CI help automate builds, tests, and deployments.",
        priority: "High",
      },
    ],
  },

  // ========================= DOCKER =========================
  {
    category: "Docker (Interview Focused)",
    topics: [
      {
        id: "dock_basics",
        title: "Docker Basics",
        explanation:
          "Containers package app + dependencies to run anywhere consistently.",
        priority: "Compulsory",
      },
      {
        id: "dock_compose",
        title: "Docker Compose",
        explanation:
          "Easily run multiple containers together with one command.",
        priority: "High",
      },
      {
        id: "dock_layers",
        title: "Images, Layers, Caching",
        explanation:
          "Docker images are built in layers. Cache speeds builds; order affects efficiency.",
        priority: "Medium",
      },
      {
        id: "dock_prod",
        title: "Production Usage",
        explanation:
          "Use Docker for deploying microservices, scaling apps, and keeping containers stateless.",
        priority: "High",
      },
    ],
  },

  // ========================= CLOUD (AWS) =========================
  {
    category: "Cloud (AWS Interview Focused)",
    topics: [
      {
        id: "aws_iam",
        title: "IAM (Identity and Access Management)",
        explanation:
          "Manage users, roles, and permissions. Apply least privilege principle for security.",
        priority: "Compulsory",
      },
      {
        id: "aws_ec2",
        title: "EC2 (Elastic Compute Cloud)",
        explanation:
          "Virtual machines in AWS. Configure instances, security groups, and connect via SSH.",
        priority: "Compulsory",
      },
      {
        id: "aws_s3",
        title: "S3 (Simple Storage Service)",
        explanation:
          "Object storage in buckets. Supports versioning and presigned URLs for secure access.",
        priority: "High",
      },
      {
        id: "aws_ebs",
        title: "EBS (Elastic Block Store)",
        explanation:
          "Persistent storage for EC2 instances. Supports snapshots and volume resizing.",
        priority: "Medium",
      },
      {
        id: "aws_snap",
        title: "Snapshots",
        explanation:
          "Back up volumes incrementally. Easy to restore if needed.",
        priority: "Medium",
      },
      {
        id: "aws_vpc",
        title: "VPC (Virtual Private Cloud)",
        explanation:
          "Private network with subnets, NAT, and routing for secure cloud infrastructure.",
        priority: "High",
      },
      {
        id: "aws_lb",
        title: "Load Balancers",
        explanation:
          "Distribute traffic across multiple instances. Monitor health to ensure uptime.",
        priority: "High",
      },
      {
        id: "aws_as",
        title: "Auto Scaling",
        explanation:
          "Automatically increase or decrease instances based on demand.",
        priority: "High",
      },
      {
        id: "aws_cw",
        title: "CloudWatch",
        explanation: "Monitor logs, metrics, and set alarms for applications.",
        priority: "Medium",
      },
      {
        id: "aws_cf",
        title: "CloudFront (Content Delivery Network)",
        explanation: "Global caching layer to deliver content faster to users.",
        priority: "Medium",
      },
      {
        id: "aws_route53",
        title: "Route53 (DNS Service)",
        explanation:
          "AWS DNS service. Manage domain names and routing policies.",
        priority: "Medium",
      },
      {
        id: "aws_rds",
        title: "RDS (Relational Database Service)",
        explanation:
          "Managed SQL database. Provides backups, read replicas, and maintenance.",
        priority: "High",
      },
    ],
  },

  // ========================= DEPLOYMENT =========================
  {
    category: "Deployment (Interview Focused)",
    topics: [
      {
        id: "dep_fe",
        title: "Frontend Deployment",
        explanation:
          "Deploy React apps to S3, CloudFront, Vercel, or Netlify. Handles static files and caching.",
        priority: "High",
      },
      {
        id: "dep_be",
        title: "Backend Deployment",
        explanation:
          "Deploy Node/Express apps using EC2, Docker, and PM2 for process management.",
        priority: "High",
      },
      {
        id: "dep_cicd",
        title: "CI/CD Deployment",
        explanation:
          "Code push triggers automated deployment using GitHub Actions.",
        priority: "Compulsory",
      },
    ],
  },

  // ========================= SYSTEM DESIGN =========================
  {
    category: "System Design (Frontend + Backend)",
    topics: [
      {
        id: "sd_api",
        title: "API Design",
        explanation:
          "Design REST APIs with versioning, clear resource naming, and pagination for large datasets.",
        priority: "Compulsory",
      },
      {
        id: "sd_lb",
        title: "Load Balancing",
        explanation:
          "Distribute incoming traffic evenly. Helps scale horizontally and avoid overload.",
        priority: "High",
      },
      {
        id: "sd_cache",
        title: "Caching",
        explanation:
          "Store frequently used data in Redis or CDN to reduce latency and improve speed.",
        priority: "High",
      },
      {
        id: "sd_dbscale",
        title: "Database Scaling",
        explanation:
          "Use sharding, indexing, and read replicas to handle large databases efficiently.",
        priority: "High",
      },
      {
        id: "sd_micro",
        title: "Microservices vs Monolith",
        explanation:
          "Monolith = single app, simple to manage. Microservices = multiple services, more scalable but complex.",
        priority: "Medium",
      },
    ],
  },
];
