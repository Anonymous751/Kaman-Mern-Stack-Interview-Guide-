// deploymentTopics.js

export const deploymentSections = [
  // -------------------- 1. Beginner Level --------------------
  {
    sectionTitle: "Beginner Level – Fundamentals of Deployment",
    topics: [
      {
        id: 1,
        title: "What is Deployment?",
        path: "/deployment/what-is-deployment",
        explanation:
          "Meaning of deployment, why code must be hosted on servers, difference between development vs production, common deployment platforms.",
        priority: "Compulsory" // Must know for interviews
      },
      {
        id: 2,
        title: "Client vs Server Deployment",
        path: "/deployment/client-vs-server",
        explanation:
          "How frontend (React) and backend (Node.js) are deployed separately, build process for React, why Node backend requires runtime.",
        priority: "Compulsory" // Very likely asked
      },
      {
        id: 3,
        title: "Environment Variables Basics",
        path: "/deployment/env-basics",
        explanation:
          "Using .env in development vs production, securing secrets, REACT_APP_ prefix, dotenv for Node.js.",
        priority: "High" // Important but not always core
      },
      {
        id: 4,
        title: "Build Process of React App",
        path: "/deployment/react-build",
        explanation:
          "What happens when running `npm run build`, minification, bundling, optimization, static file output.",
        priority: "Medium" // Nice to know
      }
    ]
  },

  // -------------------- 2. Intermediate --------------------
  {
    sectionTitle: "Intermediate – MERN Deployment Essentials",
    topics: [
      {
        id: 5,
        title: "Deploying React App (Frontend Hosting Options)",
        path: "/deployment/react-hosting",
        explanation:
          "Platforms: Netlify, Vercel, GitHub Pages, AWS S3. Differences, how CDN works, routing issues, SPA redirects.",
        priority: "High" // Frequently asked
      },
      {
        id: 6,
        title: "Deploying Node.js/Express API",
        path: "/deployment/node-hosting",
        explanation:
          "Hosting platforms: Render, Railway, Vercel Serverless, AWS EC2. Setting port, reverse proxy, PM2 basics.",
        priority: "High"
      },
      {
        id: 7,
        title: "Connecting Frontend with Backend After Deployment",
        path: "/deployment/frontend-backend-connection",
        explanation:
          "Handling CORS, correct baseURL setup, using environment variables, absolute URLs.",
        priority: "Medium"
      },
      {
        id: 8,
        title: "MongoDB Atlas Deployment",
        path: "/deployment/mongodb-atlas",
        explanation:
          "Creating cluster, setting network access, database users, connection strings, whitelisting IPs.",
        priority: "High" // Important for MERN stack
      },
      {
        id: 9,
        title: "HTTP vs HTTPS",
        path: "/deployment/http-https",
        explanation:
          "Why HTTPS is mandatory in production, SSL certificates, Let's Encrypt, CDN-level encryption.",
        priority: "Compulsory"
      }
    ]
  },

  // -------------------- 3. Advanced --------------------
  {
    sectionTitle: "Advanced – Production-Level Deployment",
    topics: [
      {
        id: 10,
        title: "Reverse Proxy (Nginx & Apache)",
        path: "/deployment/reverse-proxy",
        explanation:
          "Why Node should run behind Nginx, routing API + frontend, caching layers, load balancing basics.",
        priority: "High"
      },
      {
        id: 11,
        title: "PM2 Process Manager",
        path: "/deployment/pm2",
        explanation:
          "Daemonizing Node apps, auto-restart, load balancing via PM2 cluster mode, logs, ecosystem.config.js.",
        priority: "High"
      },
      {
        id: 12,
        title: "Dockers for MERN Deployment",
        path: "/deployment/docker-mern",
        explanation:
          "Docker images, containers, Dockerfile, docker-compose for full MERN stack, portability, CI/CD advantages.",
        priority: "Medium"
      },
      {
        id: 13,
        title: "CI/CD Pipelines (GitHub Actions)",
        path: "/deployment/ci-cd",
        explanation:
          "Automating deployment, build → test → deploy workflow, zero-downtime deployments, environment secrets.",
        priority: "High" // Worth knowing for interviews
      },
      {
        id: 14,
        title: "Scaling Node.js Apps",
        path: "/deployment/scaling-node",
        explanation:
          "Horizontal vs vertical scaling, load balancers, clustering, scaling on AWS/Render/Heroku.",
        priority: "Medium"
      }
    ]
  },

  // -------------------- 4. Expert Level --------------------
  {
    sectionTitle: "Expert Level – Cloud, Security & Architecture",
    topics: [
      {
        id: 15,
        title: "AWS Deployment (EC2, S3, CloudFront, Route 53)",
        path: "/deployment/aws-complete",
        explanation:
          "Deploying full MERN app on AWS, EC2 server setup, S3 static hosting, CloudFront CDN, domain management with Route 53.",
        priority: "High"
      },
      {
        id: 16,
        title: "Serverless Deployment (AWS Lambda, Vercel Functions)",
        path: "/deployment/serverless",
        explanation:
          "Cold starts, scaling, no servers to manage, how Node APIs run serverlessly, pros/cons for MERN.",
        priority: "Medium"
      },
      {
        id: 17,
        title: "Production Security Best Practices",
        path: "/deployment/security",
        explanation:
          "Rate limiting, helmet, sanitization, JWT security, HTTPS enforcement, secret handling, database firewall rules.",
        priority: "Compulsory"
      },
      {
        id: 18,
        title: "Monitoring & Logging",
        path: "/deployment/monitoring",
        explanation:
          "Tools: PM2 logs, AWS CloudWatch, LogDNA, Sentry, uptime monitoring, tracking API failures & error insights.",
        priority: "Medium"
      },
      {
        id: 19,
        title: "Microservices Deployment (Advanced)",
        path: "/deployment/microservices",
        explanation:
          "Container orchestration, Kubernetes basics, service discovery, API gateway, horizontal pod autoscaling.",
        priority: "High"
      }
    ]
  }
];
