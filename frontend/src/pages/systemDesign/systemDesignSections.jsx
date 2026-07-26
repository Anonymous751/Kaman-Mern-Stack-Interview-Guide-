// systemDesignTopicsData.js

export const systemDesignSections = [
  // ========================================================
  // 1️⃣ HIGH-LEVEL DESIGN (HLD)
  // ========================================================
  {
    sectionTitle: "High-Level Design (HLD)",
    topics: [
      {
        id: 1,
        title: "Scalability Fundamentals",
        path: "/system-design/hld/scalability",
        explanation:
          "Horizontal vs vertical scaling, stateless services, replication, high availability, elasticity.",
        priority: "Compulsory",
      },
      {
        id: 2,
        title: "System Components Overview",
        path: "/system-design/hld/system-components",
        explanation:
          "API Gateway, Reverse Proxy, Load Balancer, CDN, Cache, Databases, Queues, Object storage.",
        priority: "High",
      },
      {
        id: 3,
        title: "Load Balancing",
        path: "/system-design/hld/load-balancing",
        explanation:
          "L4 vs L7 load balancers, reverse proxy, round robin, least connections, IP hash, failover.",
        priority: "High",
      },
      {
        id: 4,
        title: "Caching Strategies",
        path: "/system-design/hld/caching",
        explanation:
          "Redis, CDN caching, client-side cache, write-through/write-back, TTL, cache invalidation.",
        priority: "Medium",
      },
      {
        id: 5,
        title: "CDN (Content Delivery Network)",
        path: "/system-design/hld/cdn",
        explanation:
          "Edge nodes, request routing, caching static assets, DDoS protection.",
        priority: "Medium",
      },
      {
        id: 6,
        title: "API Gateways & Reverse Proxies",
        path: "/system-design/hld/api-gateway",
        explanation:
          "Kong, Nginx, rate limiting, request routing, auth, SSL termination.",
        priority: "Medium",
      },
      {
        id: 7,
        title: "Message Queues & Streaming",
        path: "/system-design/hld/message-queues",
        explanation:
          "Kafka, RabbitMQ, SQS, asynchronous processing, event-driven architecture.",
        priority: "High",
      },
      {
        id: 8,
        title: "Data Partitioning & Replication",
        path: "/system-design/hld/partitioning",
        explanation:
          "Sharding, replication, leader-follower, quorum, read replicas.",
        priority: "High",
      },
      {
        id: 9,
        title: "Consistency & CAP Theorem",
        path: "/system-design/hld/cap-theorem",
        explanation:
          "Consistency vs availability vs partition tolerance, strong vs eventual consistency.",
        priority: "Compulsory",
      },
      {
        id: 10,
        title: "Distributed Systems Basics",
        path: "/system-design/hld/distributed-systems",
        explanation:
          "Fault tolerance, consensus, leader election, heartbeats, replication.",
        priority: "High",
      },
    ],
  },

  // ========================================================
  // 2️⃣ LOW-LEVEL DESIGN (LLD)
  // ========================================================
  {
    sectionTitle: "Low-Level Design (LLD)",
    topics: [
      {
        id: 11,
        title: "Class Diagrams & UML",
        path: "/system-design/lld/class-diagrams",
        explanation:
          "UML class diagrams, relationships, composition, association, aggregation, inheritance.",
        priority: "Medium",
      },
      {
        id: 12,
        title: "Design Principles (SOLID, DRY, KISS)",
        path: "/system-design/lld/design-principles",
        explanation:
          "SOLID principles, DRY, KISS, YAGNI, clean code approaches in LLD.",
        priority: "High",
      },
      {
        id: 13,
        title: "Design Patterns",
        path: "/system-design/lld/design-patterns",
        explanation:
          "Creational, structural, behavioral patterns: Singleton, Factory, Observer, Adapter, Strategy.",
        priority: "High",
      },
      {
        id: 14,
        title: "Concurrency & Threading",
        path: "/system-design/lld/concurrency",
        explanation:
          "Race conditions, deadlocks, locking, thread pools, optimistic vs pessimistic locking.",
        priority: "High",
      },
      {
        id: 15,
        title: "LLD Case Studies",
        path: "/system-design/lld/examples",
        explanation:
          "Parking Lot, Elevator System, Library Management, Amazon Locker, ATM workflow.",
        priority: "Medium",
      },
    ],
  },

  // ========================================================
  // 3️⃣ SUBSYSTEMS & COMPONENTS (INTERVIEW CRITICAL)
  // ========================================================
  {
    sectionTitle: "System Components & Subsystems",
    topics: [
      {
        id: 16,
        title: "Authentication & Authorization",
        path: "/system-design/components/auth",
        explanation:
          "OAuth2, JWT, session-based auth, SSO, refresh tokens, access control.",
        priority: "Compulsory",
      },
      {
        id: 17,
        title: "Distributed Caching Systems",
        path: "/system-design/components/distributed-cache",
        explanation:
          "Redis cluster, cache invalidation, cache-aside, read-through/write-through caching.",
        priority: "High",
      },
      {
        id: 18,
        title: "Database Scaling",
        path: "/system-design/components/db-scaling",
        explanation:
          "Indexes, query optimization, sharding, replication, partitioning.",
        priority: "High",
      },
      {
        id: 19,
        title: "Monitoring & Logging",
        path: "/system-design/components/observability",
        explanation:
          "Prometheus, Grafana, ELK, tracing, metrics, logs, alerts.",
        priority: "Medium",
      },
      {
        id: 20,
        title: "Rate Limiting & Throttling",
        path: "/system-design/components/rate-limiting",
        explanation:
          "Token bucket, leaky bucket, sliding window counters for API rate control.",
        priority: "Medium",
      },
    ],
  },

  // ========================================================
  // 4️⃣ END-TO-END SYSTEM DESIGN INTERVIEW CASES
  // ========================================================
  {
    sectionTitle: "System Design Interview Topics",
    topics: [
      {
        id: 21,
        title: "Design URL Shortener",
        path: "/system-design/topics/url-shortener",
        explanation:
          "Hashing strategies, base62 IDs, database schema, cache, redirect flow.",
        priority: "High",
      },
      {
        id: 22,
        title: "Design Instagram",
        path: "/system-design/topics/instagram",
        explanation:
          "Feed ranking, media storage, CDN, caching, sharding, fan-out on write/read.",
        priority: "High",
      },
      {
        id: 23,
        title: "Design Uber",
        path: "/system-design/topics/uber",
        explanation:
          "Real-time GPS, matching drivers, geohashing, load balancing, event queues.",
        priority: "High",
      },
      {
        id: 24,
        title: "Design WhatsApp",
        path: "/system-design/topics/whatsapp",
        explanation:
          "Real-time messaging, delivery acknowledgments, encryption, message queues.",
        priority: "Medium",
      },
      {
        id: 25,
        title: "Design YouTube",
        path: "/system-design/topics/youtube",
        explanation:
          "Video encoding pipeline, CDN, recommendations, metadata storage.",
        priority: "Medium",
      },
      {
        id: 26,
        title: "Design Netflix",
        path: "/system-design/topics/netflix",
        explanation:
          "Video streaming, edge caching, distributed services, chaos engineering.",
        priority: "Medium",
      },
      {
        id: 27,
        title: "Design Amazon",
        path: "/system-design/topics/amazon",
        explanation:
          "Product catalog, order management, payment processing, inventory tracking, logistics, distributed architecture.",
        priority: "High",
      },
      {
        id: 28,
        title: "Design Facebook",
        path: "/system-design/topics/facebook",
        explanation:
          "News feed ranking, media storage, CDN, messaging system, notifications, event-driven architecture.",
        priority: "Medium",
      },
      {
        id: 29,
        title: "Design Flipkart",
        path: "/system-design/topics/flipkart",
        explanation:
          "Product catalog, inventory management, order processing, payment gateway, recommendations, caching, distributed services.",
        priority: "Medium",
      },
      {
        id: 30,
        title: "Design Swiggy",
        path: "/system-design/topics/swiggy",
        explanation:
          "Real-time restaurant tracking, delivery assignment, geolocation, order queue, push notifications, caching, scaling for peak hours.",
        priority: "Medium",
      },
      {
        id: 31,
        title: "Design Banking System",
        path: "/system-design/topics/banking",
        explanation:
          "Account management, transaction processing, fraud detection, ledger replication, security, high availability, distributed databases.",
        priority: "Compulsory",
      },
      {
        id: 32,
        title: "Design TV Streaming Platform",
        path: "/system-design/topics/tv-streaming",
        explanation:
          "Video encoding, content delivery network (CDN), user subscriptions, recommendations, edge caching, adaptive bitrate streaming, distributed services.",
        priority: "Medium",
      },
      {
        id: 33,
        title: "Design Google Services",
        path: "/system-design/topics/google",
        explanation:
          "Search engine indexing, ranking algorithms, distributed crawling, caching, high availability, load balancing, real-time analytics.",
        priority: "Compulsory",
      },
    ],
  },
];
