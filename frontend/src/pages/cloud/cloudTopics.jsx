export const cloudSections = [
  // ---------------------------------------------------------
  // 1. Cloud Database – MongoDB Atlas
  // ---------------------------------------------------------
  {
    sectionTitle: "Cloud Database – MongoDB Atlas",
    topics: [
      {
        id: 1,
        title: "MongoDB Atlas – Setup & Cluster Creation",
        path: "/cloud/mongodb-atlas-setup",
        explanation:
          "Create cluster, shared vs dedicated, network access, whitelisting, database user creation.",
        priority: "High"
      },
      {
        id: 2,
        title: "MongoDB Atlas – Connecting from Node.js",
        path: "/cloud/mongodb-atlas-connect",
        explanation:
          "Connection strings, SRV issues, timeouts, environment variables, connection pooling.",
        priority: "High"
      },
      {
        id: 3,
        title: "MongoDB Atlas – Security Best Practices",
        path: "/cloud/mongodb-atlas-security",
        explanation:
          "IP whitelisting, strong passwords, access control, role-based permissions, private peering.",
        priority: "Medium"
      }
    ]
  },

  // ---------------------------------------------------------
  // 2. Docker & Containerization
  // ---------------------------------------------------------
  {
    sectionTitle: "Docker & Containerization",
    topics: [
      {
        id: 4,
        title: "Docker Basics",
        path: "/cloud/docker-basics",
        explanation:
          "Images vs containers, Dockerfile basics, volumes, networks, exposing ports.",
        priority: "High"
      },
      {
        id: 5,
        title: "Dockerizing MERN App",
        path: "/cloud/docker-mern",
        explanation:
          "Dockerfile for Node.js, Dockerfile for React, multi-stage builds, production optimization.",
        priority: "Medium"
      },
      {
        id: 6,
        title: "Docker Compose – Multi-Service Setup",
        path: "/cloud/docker-compose",
        explanation:
          "Running backend + frontend + MongoDB together, defining services, networks, volumes.",
        priority: "Medium"
      },
      {
        id: 7,
        title: "Publishing Images to Docker Hub",
        path: "/cloud/docker-hub",
        explanation:
          "Tagging images, pushing to registry, using images in CI/CD & Kubernetes.",
        priority: "Low"
      }
    ]
  },

  // ---------------------------------------------------------
  // 3. GitHub Actions – CI/CD Pipelines
  // ---------------------------------------------------------
  {
    sectionTitle: "CI/CD – GitHub Actions",
    topics: [
      {
        id: 8,
        title: "GitHub Actions – CI Pipeline",
        path: "/cloud/github-actions-ci",
        explanation:
          "Workflow files, build steps, testing, caching, environment variables.",
        priority: "High"
      },
      {
        id: 9,
        title: "GitHub Actions – CD to EC2",
        path: "/cloud/github-actions-ec2",
        explanation:
          "SSH into EC2, pulling latest code, auto restart with PM2, secret management.",
        priority: "Medium"
      },
      {
        id: 10,
        title: "GitHub Actions – Deploy to S3 + CloudFront",
        path: "/cloud/github-actions-s3-cloudfront",
        explanation:
          "Upload React build to S3, CloudFront cache invalidation, IAM role permissions.",
        priority: "Medium"
      },
      {
        id: 11,
        title: "GitHub Actions – Docker Workflow",
        path: "/cloud/github-actions-docker",
        explanation:
          "Building Docker images, pushing to Docker Hub or AWS ECR, automated container deployment.",
        priority: "Low"
      }
    ]
  },

  // ---------------------------------------------------------
  // 4. AWS – Complete Cloud Deployment
  // ---------------------------------------------------------
  {
    sectionTitle: "AWS – Complete Cloud Deployment",
    topics: [
      // -------- Compute --------
      {
        id: 12,
        title: "EC2 – Deploying Node.js/React",
        path: "/cloud/aws-ec2",
        explanation:
          "Launching EC2, connecting via SSH, installing Node, Nginx reverse proxy, PM2, firewall rules.",
        priority: "High"
      },
      {
        id: 13,
        title: "Elastic Beanstalk – One-Click Deploy",
        path: "/cloud/aws-elastic-beanstalk",
        explanation:
          "Automatic environment creation, scaling, logs, rolling updates.",
        priority: "Medium"
      },

      // -------- Storage --------
      {
        id: 14,
        title: "S3 – Static Hosting & Storage",
        path: "/cloud/aws-s3",
        explanation:
          "Hosting React builds, folder structure, public access, S3 permissions.",
        priority: "High"
      },
      {
        id: 15,
        title: "EBS – Elastic Block Storage",
        path: "/cloud/aws-ebs",
        explanation:
          "Volume types, attaching/detaching, resizing, performance tuning.",
        priority: "Medium"
      },
      {
        id: 16,
        title: "EBS Snapshots – Backup & Recovery",
        path: "/cloud/aws-ebs-snapshots",
        explanation:
          "Taking snapshots, restoring volumes, AMIs, disaster recovery strategy.",
        priority: "Low"
      },

      // -------- CDN & DNS --------
      {
        id: 17,
        title: "CloudFront – Global CDN",
        path: "/cloud/aws-cloudfront",
        explanation:
          "CDN caching, linking with S3, custom domain, SSL, invalidations.",
        priority: "Medium"
      },
      {
        id: 18,
        title: "Route 53 – Domains & DNS",
        path: "/cloud/aws-route53",
        explanation:
          "A/AAAA records, subdomains, alias records for CloudFront & EC2.",
        priority: "Medium"
      },

      // -------- Databases --------
      {
        id: 19,
        title: "RDS – PostgreSQL/MySQL",
        path: "/cloud/aws-rds",
        explanation:
          "Instance creation, security groups, backups, multi-AZ, connecting Node.js.",
        priority: "High"
      },
      {
        id: 20,
        title: "DynamoDB – NoSQL on AWS",
        path: "/cloud/aws-dynamodb",
        explanation:
          "Tables, partitions, read/write capacity, connecting via AWS SDK.",
        priority: "Medium"
      },

      // -------- Security --------
      {
        id: 21,
        title: "IAM – Users, Roles, Policies",
        path: "/cloud/aws-iam",
        explanation:
          "Access management, policies JSON, MFA, least privilege permissions.",
        priority: "High"
      },
      {
        id: 22,
        title: "VPC, Subnets & Networking",
        path: "/cloud/aws-vpc",
        explanation:
          "Private vs public subnets, route tables, NAT, internet gateway.",
        priority: "Medium"
      },
      {
        id: 23,
        title: "Security Groups & Firewalls",
        path: "/cloud/aws-security-groups",
        explanation:
          "Port configuration, restricting server access, inbound/outbound rules.",
        priority: "High"
      },
      {
        id: 24,
        title: "AWS WAF & Shield",
        path: "/cloud/aws-waf",
        explanation:
          "DDoS protection, rate limiting, blocking malicious requests.",
        priority: "Low"
      },

      // -------- Containers --------
      {
        id: 25,
        title: "ECR – Docker Registry",
        path: "/cloud/aws-ecr",
        explanation:
          "Storing private Docker images, pushing/pulling via CLI, auth tokens.",
        priority: "Medium"
      },
      {
        id: 26,
        title: "ECS – Running Docker Containers",
        path: "/cloud/aws-ecs",
        explanation:
          "Fargate vs EC2 launch type, tasks, services, scaling containers.",
        priority: "Medium"
      },

      // -------- Serverless --------
      {
        id: 27,
        title: "Lambda – Serverless Functions",
        path: "/cloud/aws-lambda",
        explanation:
          "Event-based execution, cold starts, deploying Node.js functions.",
        priority: "Medium"
      },
      {
        id: 28,
        title: "API Gateway – Serverless APIs",
        path: "/cloud/aws-api-gateway",
        explanation:
          "REST APIs, routes, CORS, connecting Lambda to API Gateway.",
        priority: "Medium"
      },

      // -------- Monitoring --------
      {
        id: 29,
        title: "CloudWatch – Logs & Monitoring",
        path: "/cloud/aws-cloudwatch",
        explanation:
          "Metrics, alarms, log groups, monitoring EC2 & Lambda performance.",
        priority: "High"
      },
      {
        id: 30,
        title: "CloudTrail – Activity Tracking",
        path: "/cloud/aws-cloudtrail",
        explanation:
          "Track AWS API calls, auditing actions, security monitoring.",
        priority: "High"
      },

      // -------- Cost Optimization --------
      {
        id: 31,
        title: "AWS Cost Optimization",
        path: "/cloud/aws-cost-optimization",
        explanation:
          "Choosing right instance types, storage classes, budget alerts, avoiding unexpected bills.",
        priority: "Medium"
      }
    ]
  }
];
