export const databaseSections = [
  {
    sectionTitle: "Database Fundamentals",
    topics: [
      { 
        id: 1, 
        title: "Database Basics", 
        path: "/database/basics", 
        explanation: "What is a database, types: RDBMS vs NoSQL, key interview Q: differences, pros/cons.",
        priority: "Compulsory" 
      },
      { 
        id: 2, 
        title: "Database Design & ERD", 
        path: "/database/design", 
        explanation: "Entity-Relationship modeling, primary keys, foreign keys, cardinality, constraints.",
        priority: "High" 
      }
    ]
  },
  {
    sectionTitle: "SQL / RDBMS",
    topics: [
      { 
        id: 3, 
        title: "SQL Basics", 
        path: "/database/sql-basics", 
        explanation: "SELECT, INSERT, UPDATE, DELETE, WHERE clause, joins, aggregate functions.",
        priority: "Compulsory"
      },
      { 
        id: 4, 
        title: "Joins & Relationships", 
        path: "/database/joins", 
        explanation: "INNER, LEFT, RIGHT, FULL OUTER JOINs, one-to-one, one-to-many, many-to-many.",
        priority: "High"
      },
      { 
        id: 5, 
        title: "Indexes", 
        path: "/database/indexes", 
        explanation: "Clustered vs non-clustered, B-Tree, Hash index, covering index, how they improve query performance.",
        priority: "High"
      },
      { 
        id: 6, 
        title: "Normalization & Denormalization", 
        path: "/database/normalization", 
        explanation: "1NF, 2NF, 3NF, BCNF, advantages & trade-offs of denormalization.",
        priority: "Medium"
      },
      { 
        id: 7, 
        title: "Transactions & ACID", 
        path: "/database/transactions", 
        explanation: "Atomicity, Consistency, Isolation, Durability, isolation levels, commit & rollback.",
        priority: "Compulsory"
      },
      { 
        id: 8, 
        title: "Stored Procedures & Functions", 
        path: "/database/stored-procedures", 
        explanation: "When to use SPs, pros/cons, parameterized queries.",
        priority: "Medium"
      },
      { 
        id: 9, 
        title: "Views & Triggers", 
        path: "/database/views-triggers", 
        explanation: "Views for abstraction, triggers for automated actions, performance considerations.",
        priority: "Low"
      },
      { 
        id: 10, 
        title: "Query Optimization", 
        path: "/database/query-optimization", 
        explanation: "EXPLAIN plan, indexing strategies, avoiding full table scans, caching queries.",
        priority: "High"
      }
    ]
  },
  {
    sectionTitle: "NoSQL / MongoDB",
    topics: [
      { 
        id: 11, 
        title: "NoSQL Databases Overview", 
        path: "/database/nosql", 
        explanation: "Types: Document (MongoDB), Key-Value (Redis), Column (Cassandra), Graph (Neo4j). Pros/cons.",
        priority: "High"
      },
      { 
        id: 12, 
        title: "MongoDB Basics", 
        path: "/database/mongodb-basics", 
        explanation: "Collections, documents, BSON, CRUD operations, queries, aggregation pipeline.",
        priority: "Compulsory"
      },
      { 
        id: 13, 
        title: "MongoDB Indexing & Aggregation", 
        path: "/database/mongodb-aggregation", 
        explanation: "Single-field, compound, text indexes, aggregation stages, $match, $group, $lookup.",
        priority: "High"
      },
      { 
        id: 14, 
        title: "MongoDB Replication & Sharding", 
        path: "/database/mongodb-replication", 
        explanation: "Replica sets, primary/secondary nodes, sharding for horizontal scaling.",
        priority: "Medium"
      }
    ]
  },
  {
    sectionTitle: "Performance, Scaling & Cloud",
    topics: [
      { 
        id: 15, 
        title: "Partitioning & Sharding", 
        path: "/database/partitioning", 
        explanation: "Horizontal vs vertical partitioning, sharding strategies, scaling databases.",
        priority: "Medium"
      },
      { 
        id: 16, 
        title: "Cloud Databases & Scaling", 
        path: "/database/cloud", 
        explanation: "AWS RDS, Aurora, DynamoDB, read replicas, horizontal vs vertical scaling.",
        priority: "Low"
      },
      { 
        id: 17, 
        title: "ORM & Database Abstraction", 
        path: "/database/orm", 
        explanation: "Using ORM (e.g., Sequelize, Mongoose, prisma), pros/cons, N+1 problem, lazy vs eager loading.",
        priority: "Medium"
      }
    ]
  },
  {
    sectionTitle: "Security, Backup & Concurrency",
    topics: [
      { 
        id: 18, 
        title: "Replication & Backup", 
        path: "/database/replication", 
        explanation: "Master-slave replication, multi-master, backup strategies, point-in-time recovery.",
        priority: "Low"
      },
      { 
        id: 19, 
        title: "Concurrency & Locking", 
        path: "/database/concurrency", 
        explanation: "Optimistic vs pessimistic locking, deadlocks, race conditions, isolation levels.",
        priority: "Medium"
      },
      { 
        id: 20, 
        title: "Database Security", 
        path: "/database/security", 
        explanation: "Authentication, authorization, encryption, SQL injection prevention, roles & permissions.",
        priority: "Compulsory"
      }
    ]
  },
  {
    sectionTitle: "Data Warehousing / Big Data / ETL",
    topics: [
      { 
        id: 21, 
        title: "Data Warehousing & ETL", 
        path: "/database/etl", 
        explanation: "Star vs snowflake schema, OLAP vs OLTP, ETL process, batch vs streaming.",
        priority: "Low"
      },
      { 
        id: 22, 
        title: "Big Data & Analytics", 
        path: "/database/bigdata", 
        explanation: "Hadoop, Spark, distributed databases, indexing & querying large datasets.",
        priority: "Low"
      }
    ]
  },
  {
    sectionTitle: "Common Interview Questions",
    topics: [
      { 
        id: 23, 
        title: "Common Interview Questions", 
        path: "/database/interview-q", 
        explanation: "Explain normalization with example, difference between SQL and NoSQL, indexing use cases.",
        priority: "High"
      }
    ]
  }
];
