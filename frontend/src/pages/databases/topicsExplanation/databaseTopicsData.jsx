// databaseTopicsData.js

  const colors = {
    primary: "#2B6CB0",
    secondary: "#D69E2E",
    success: "#38A169",
    info: "#805AD5",
    danger: "#D53F8C",
  };

  export const databaseTopics = [
    {
      id: 1,
      title: "Database Basics",
      path: "/database/basics",
      explanation: (
        <>
          <p>
            A <strong>database</strong> is a place to store data in an organized
            way so you can easily find, change, or use it. Almost all apps,
            websites, and systems use databases to store information safely.
          </p>

          <h2>Why Do We Need Databases?</h2>
          <ul>
            <li>Store lots of information without losing it.</li>
            <li>Prevent repeated or wrong data.</li>
            <li>Search, filter, and sort information quickly.</li>
            <li>Keep data consistent for everyone using it.</li>
            <li>Protect data with passwords and permissions.</li>
          </ul>

          <h2>Simple Diagram of a Database</h2>
          <pre>
            {`Users Table
  +----+--------+-------------------+
  | ID | Name   | Email             |
  +----+--------+-------------------+
  | 1  | Alice  | alice@mail.com    |
  | 2  | Bob    | bob@mail.com      |
  +----+--------+-------------------+

  Orders Table
  +----+---------+--------+
  | ID | UserID  | Amount |
  +----+---------+--------+
  | 1  | 1       | 250    |
  | 2  | 2       | 300    |
  +----+---------+--------+

  Relationship: Users.ID = Orders.UserID`}
          </pre>

          <h2>Types of Databases</h2>
          <ul>
            <li>
              <strong>Relational (SQL)</strong> – Use tables with rows and
              columns. Good for structured data and relationships. Example: MySQL,
              PostgreSQL.
            </li>
            <li>
              <strong>NoSQL</strong> – Use flexible formats like documents or
              key-value. Good for big or unstructured data. Example: MongoDB,
              Redis.
            </li>
          </ul>

          <h2>When to Use SQL vs NoSQL?</h2>
          <ul>
            <li>
              <strong>SQL:</strong> Data is structured, relationships matter.
              Example: Banking, e-commerce.
            </li>
            <li>
              <strong>NoSQL:</strong> Data is huge, flexible, or unstructured.
              Example: Social media feeds, IoT devices.
            </li>
          </ul>

          <h2>Benefits</h2>
          <ul>
            <li>Quick searching and updating of data.</li>
            <li>Handle millions of users efficiently.</li>
            <li>Keep data safe with security controls.</li>
            <li>Recover data using backups and replication.</li>
          </ul>

          <h2>Simple Example of SQL vs NoSQL</h2>
          <pre>
            {`-- SQL (Table)
  Users Table:
  ID | Name  | Email
  1  | Alice | alice@mail.com

  -- NoSQL (Document)
  {
    "name": "Alice",
    "email": "alice@mail.com",
    "orders": [
      {"id": 1, "amount": 250},
      {"id": 2, "amount": 300}
    ]
  }`}
          </pre>

          <h2>Common Interview Questions</h2>
          <ul>
            <li>
              <strong style={{ color: colors.primary }}>Q:</strong> SQL vs NoSQL —
              which one and why?
              <br />
              <strong style={{ color: colors.success }}>A:</strong> SQL for
              structured, consistent data; NoSQL for flexible, scalable,
              unstructured data.
            </li>
            <ul>
              <li>
                <strong style={{ color: colors.primary }}>Q:</strong> What is ACID
                and why is it important?
                <br />
                <strong style={{ color: colors.success }}>A:</strong> ACID ensures
                reliable transactions and data integrity ( data is correct and
                unaltered except through authorized operations.) :
                <ul style={{ marginTop: "5px" }}>
                  <li>
                    <strong>Atomicity:</strong> All or nothing — a transaction
                    fully completes or fully fails.
                  </li>
                  <li>
                    <strong>Consistency:</strong> Moves the DB from one valid
                    state to another; rules and constraints are preserved.
                  </li>
                  <li>
                    <strong>Isolation:</strong> Transactions don’t interfere with
                    each other; partial changes aren’t visible until committed.
                  </li>
                  <li>
                    <strong>Durability:</strong> Once committed, a transaction is
                    permanent even if the system crashes.
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <strong style={{ color: colors.primary }}>Q:</strong> What is a
              transaction?
              <br />
              <strong style={{ color: colors.success }}>A:</strong> A set of DB
              operations executed as a single unit; all succeed or all fail.
            </li>
            <li>
              <strong style={{ color: colors.primary }}>Q:</strong> Primary key vs
              Unique key — difference?
              <br />
              <strong style={{ color: colors.success }}>A:</strong> Primary key:
              unique, not null, 1 per table; Unique key: unique, can be null,
              multiple allowed.
            </li>
            <li>
              <strong style={{ color: colors.primary }}>Q:</strong> Why do
              companies still use SQL databases?
              <br />
              <strong style={{ color: colors.success }}>A:</strong> Mature,
              ACID-compliant, powerful queries — ideal for structured,
              transactional systems.
            </li>
          </ul>

          <h2>Summary</h2>
          <ul>
            <li>
              Database = store data safely, access it fast, and keep it correct.
            </li>
            <li>
              SQL = structured data with relationships. NoSQL = flexible and
              scalable.
            </li>
          </ul>
        </>
      ),
    },
  {
    id: 2,
    title: "Database Design & ERD",
    path: "/database/design",
    explanation: (
      <>
        <p>
          <strong>Database Design</strong> means organizing your data into
          tables in a smart way. This helps in storing, finding, and managing
          data easily. An
          <strong> ERD (Entity-Relationship Diagram)</strong> is a picture that
          shows tables (entities), their columns (attributes), and how they are
          connected (relationships).
        </p>

        <h2>Why Database Design is Important?</h2>
        <ul>
          <li>Stop duplicate data and mistakes.</li>
          <li>Make queries faster and predictable.</li>
          <li>Reduce complicated code in apps.</li>
          <li>Helps the database grow with more users and features.</li>
          <li>Shows clear purpose for each table.</li>
        </ul>

        <h2>ERD Basics (Interview Perspective)</h2>
        <ul>
          <li>
            <strong>Entity</strong> → Something real-world like User, Product,
            or Order.
          </li>
          <li>
            <strong>Attributes</strong> → Details of entity (name, email,
            price).
          </li>
          <li>
            <strong>Relationships</strong> → How tables connect (1-1, 1-many,
            many-many).
          </li>
          <li>
            <strong>Constraints</strong> → Rules like Primary Key, Foreign Key,
            Unique, Not Null.
          </li>
        </ul>

        <h2>Simple ERD Diagram</h2>
        <pre>
          {`Users Table
+----+-------+----------------+
| ID | Name  | Email          |
+----+-------+----------------+
| 1  | Alice | alice@mail.com |
| 2  | Bob   | bob@mail.com   |
+----+-------+----------------+

Orders Table
+----+--------+--------+------+
| ID | UserID | Amount | Date |
+----+--------+--------+------+
| 1  | 1      | 250    | ...  |
| 2  | 2      | 300    | ...  |
+----+--------+--------+------+

Relationship:
Users.ID → Orders.UserID (1:N)`}
        </pre>

        <h2>Key Concepts (Interview Focus)</h2>
        <ul>
          <li>
            <strong>Primary Key</strong> – Uniquely identifies a row.
          </li>
          <li>
            <strong>Foreign Key</strong> – Connects one table to another.
          </li>
          <li>
            <strong>Normalization</strong> – Remove duplicate data (1NF → 3NF).
          </li>
          <li>
            <strong>Denormalization</strong> – Combine tables to make reading
            data faster.
          </li>
          <li>
            <strong>Cardinality</strong> – Type of relationship (1:1, 1:N, N:M).
          </li>
        </ul>

        <h2>When to Use What?</h2>
        <ul>
          <li>
            <strong>Normalized Design</strong> → Banking, transactions (accuracy
            is top priority).
          </li>
          <li>
            <strong>Denormalized Design</strong> → Analytics, dashboards, social
            media (speed is top priority).
          </li>
        </ul>

        <h2>Benefits of Good Design</h2>
        <ul>
          <li>Fast queries because of clear relationships.</li>
          <li>Better performance using proper indexing.</li>
          <li>Easy to scale (more users, more data).</li>
          <li>Clean backend code since DB handles logic well.</li>
          <li>Less duplicate data = less storage cost.</li>
        </ul>

        <h2>Example ERD (Simple)</h2>
        <ul>
          <li>
            <strong>Users</strong> (id PK, name, email)
          </li>
          <li>
            <strong>Orders</strong> (id PK, user_id FK, amount, date)
          </li>
          <li>1 User → Many Orders (1:N)</li>
        </ul>

        <h2>Common Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is normalization? Explain 1NF, 2NF, 3NF.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong> Normalization means organizing data to avoid duplicates and keep it clean:  
    <ul style={{ marginTop: '5px' }}>
      <li><strong>1NF:</strong> Each column has only one value; no repeating data.</li>
      <li><strong>2NF:</strong> 1NF + all info depends fully on the main key.</li>
      <li><strong>3NF:</strong> 2NF + info doesn’t depend on other non-key columns.</li>
    </ul>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Primary Key vs Unique Key?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong> Primary key: unique, cannot be empty, only one per table.  
    Unique key: unique, can be empty, multiple allowed.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Why use foreign keys?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong> To connect tables and make sure related data stays correct.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How to handle many-to-many relationships?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong> Create a separate table (junction table) that links the two tables together.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Draw an ERD for e-commerce.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong> Main tables: Users, Products, Orders, OrderItems, Payments.  
    Relationships: Users → Orders, Orders → OrderItems, Products → OrderItems, Orders → Payments.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When to choose denormalization?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong> When you need **faster reading of data** and don’t mind some duplication, e.g., reports or analytics.
  </li>
</ul>



        <h2>Short Summary</h2>
        <ul>
          <li>ERD = blueprint of your database.</li>
          <li>Good design = fast queries + clean structure + fewer bugs.</li>
          <li>Normalization = accuracy; Denormalization = faster reading.</li>
        </ul>
      </>
    ),
  },
  {
  id: 3,
  title: "SQL Basics",
  path: "/database/sql-basics",
  explanation: (
    <>
      <p>
        <strong>SQL (Structured Query Language)</strong> is used to interact
        with relational databases. It allows you to <strong>query</strong>,
        <strong>insert</strong>, <strong>update</strong>, and
        <strong>delete</strong> data efficiently. SQL is a core skill for
        backend, full-stack, and data roles — and is often asked in
        interviews.
      </p>

      <h2>SQL Operations Examples</h2>
      <h3>1️⃣ SELECT</h3>
      <pre>
        {`-- Get all users
SELECT * FROM Users;

-- Get only names and emails
SELECT Name, Email FROM Users;`}
      </pre>

      <h3>2️⃣ INSERT</h3>
      <pre>
        {`-- Add a new user
INSERT INTO Users (Name, Email) 
VALUES ('Charlie', 'charlie@mail.com');`}
      </pre>

      <h3>3️⃣ UPDATE</h3>
      <pre>
        {`-- Change Bob's email
UPDATE Users
SET Email = 'bob123@mail.com'
WHERE Name = 'Bob';`}
      </pre>

      <h3>4️⃣ DELETE</h3>
      <pre>
        {`-- Remove user Alice
DELETE FROM Users
WHERE Name = 'Alice';`}
      </pre>

      <h2>JOIN Example</h2>
      <pre>
        {`-- Users and their Orders (1:N relationship)
SELECT Users.Name, Orders.Amount, Orders.Date
FROM Users
INNER JOIN Orders
ON Users.ID = Orders.UserID;`}
      </pre>

      <h2>GROUP BY Example</h2>
      <pre>
        {`-- Total sales per user
SELECT Users.Name, SUM(Orders.Amount) AS TotalSales
FROM Users
INNER JOIN Orders
ON Users.ID = Orders.UserID
GROUP BY Users.Name;`}
      </pre>

      <h2>Aggregate Functions Examples</h2>
      <pre>
        {`-- Count total users
SELECT COUNT(*) AS TotalUsers FROM Users;

-- Maximum order amount
SELECT MAX(Amount) AS MaxOrder FROM Orders;

-- Minimum order amount
SELECT MIN(Amount) AS MinOrder FROM Orders;

-- Average order amount
SELECT AVG(Amount) AS AvgOrder FROM Orders;

-- Total order amount
SELECT SUM(Amount) AS TotalSales FROM Orders;`}
      </pre>

      <h2>Benefits of Aggregate Functions</h2>
      <ul>
        <li>Summarize data quickly for reports or dashboards.</li>
        <li>Count, sum, and find min/max values easily.</li>
        <li>Used in combination with GROUP BY to analyze grouped data.</li>
        <li>
          Interviewers often ask these queries for problem-solving skills.
        </li>
      </ul>

      <h2>SQL Interview Questions</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between SQL and NoSQL?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> SQL is structured and relational, supports ACID transactions.  
          NoSQL is schema-less, scalable, and good for unstructured or big data.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a primary key and why is it important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A primary key uniquely identifies each row and ensures no duplicates.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a foreign key?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A foreign key links tables and ensures referential integrity between related records.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a transaction in SQL?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A transaction is a group of SQL statements executed as a single unit. Either all succeed or all fail.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are JOINs and name types?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> JOINs combine data from multiple tables. Types: INNER, LEFT, RIGHT, FULL OUTER.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is normalization?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Organizing data to reduce duplicates: 1NF (atomic), 2NF (full dependency), 3NF (no transitive dependency).
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> When would you use denormalization?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To improve read/query performance, e.g., in reporting or analytics, even if some redundancy is added.
        </li>
      </ul>

      <h2>Short Summary</h2>
      <ul>
        <li>SQL is essential for managing structured data.</li>
        <li>Practice writing queries using SELECT, INSERT, UPDATE, DELETE.</li>
        <li>Learn JOINs, GROUP BY, and aggregate functions to summarize data efficiently.</li>
        <li>Prepare for common interview questions like keys, transactions, normalization, and SQL vs NoSQL.</li>
      </ul>
    </>
  ),
},
  {
    id: 4,
    title: "Joins & Relationships",
    path: "/database/joins",
    explanation: (
      <>
        <p>
          In relational databases, <strong>joins</strong> and{" "}
          <strong>relationships</strong> help combine data from multiple tables
          using a common field. They ensure data is{" "}
          <em>normalized, connected, and efficiently queried</em> — a core skill
          for backend & frontend system design interviews.
        </p>

        {/* WHY WE NEED JOINS */}
        <h2>Why Do We Need Joins?</h2>
        <ul>
          <li>To fetch related data from multiple tables (users + orders)</li>
          <li>To avoid duplicating information across tables</li>
          <li>To maintain normalization (clean, structured DB design)</li>
          <li>To improve performance with connected datasets</li>
          <li>To reduce storage by splitting data logically</li>
        </ul>

        {/* REAL USAGE */}
        <h2>Where Are Joins Used in Real Projects?</h2>
        <ul>
          <li>E-commerce → user + order + product mapping</li>
          <li>Social media → posts + comments + likes</li>
          <li>Banking → account + transactions</li>
          <li>Education → students + courses + enrollment</li>
        </ul>

        {/* JOINS EXPLAINED */}
        <h2>Types of SQL Joins (With Meaning)</h2>
        <ul>
          <li>
            <strong>INNER JOIN</strong> – returns only matching records from
            both tables.
            <br />
            <em>Interview Tip: Most commonly used join.</em>
          </li>

          <li>
            <strong>LEFT JOIN</strong> – returns all records from the left table
            and matching ones from the right.
            <br />
            <em>Useful when primary table should not lose rows.</em>
          </li>

          <li>
            <strong>RIGHT JOIN</strong> – opposite of LEFT JOIN.
          </li>

          <li>
            <strong>FULL OUTER JOIN</strong> – returns all records when there is
            a match in either table.
            <br />
            <em>Not supported in all DBs (MySQL lacks it directly).</em>
          </li>

          <li>
            <strong>CROSS JOIN</strong> – cartesian product (every row combined
            with every row).
          </li>
        </ul>

        {/* RELATIONSHIPS */}
        <h2>Database Relationships (Interview Perspective)</h2>
        <ul>
          <li>
            <strong>One-to-One (1:1)</strong> – example: user ↔ user_profile
            <br />
            <em>
              Used to move sensitive or optional data to a separate table.
            </em>
          </li>

          <li>
            <strong>One-to-Many (1:N)</strong> – example: user → orders
            <br />
            <em>Most common relationship.</em>
          </li>

          <li>
            <strong>Many-to-Many (M:N)</strong> – example: students ↔ courses
            <br />
            <em>Requires a join table like student_courses.</em>
          </li>
        </ul>

        {/* DIAGRAMS */}
        <h2>Example: One-to-Many (Users → Orders)</h2>
        <pre>
          {`Users Table
+----+-------+----------------+
| ID | Name  | Email          |
+----+-------+----------------+
| 1  | Alice | alice@mail.com |
| 2  | Bob   | bob@mail.com   |
+----+-------+----------------+

Orders Table
+----+--------+--------+------+
| ID | UserID | Amount | Date |
+----+--------+--------+------+
| 1  | 1      | 250    | ...  |
| 2  | 2      | 300    | ...  |
+----+--------+--------+------+

Relationship:
Users.ID → Orders.UserID (1:N)`}
        </pre>

        <h2>Example: Many-to-Many (Students ↔ Courses)</h2>
        <pre>
          {`Students Table
+----+-------+
| ID | Name  |
+----+-------+
| 1  | Alice |
| 2  | Bob   |
+----+-------+

Courses Table
+----+------------+
| ID | CourseName |
+----+------------+
| 1  | Math       |
| 2  | Physics    |
+----+------------+

Student_Courses Table (Join Table)
+----------+----------+
| StudentID| CourseID |
+----------+----------+
| 1        | 1        |
| 1        | 2        |
| 2        | 1        |
+----------+----------+

Relationships:
Students.ID → Student_Courses.StudentID (1:N)
Courses.ID → Student_Courses.CourseID (1:N)
Overall: Many-to-Many`}
        </pre>

        {/* BENEFITS */}
        <h2>Benefits of Using Joins & Relationships</h2>
        <ul>
          <li>Cleaner database structure (removes duplication)</li>
          <li>Better data integrity with foreign keys</li>
          <li>Faster queries with proper indexing</li>
          <li>Easier to scale & maintain</li>
          <li>Ensures accurate & consistent data</li>
        </ul>

        {/* INTERVIEW Qs */}
        <h2>Common Interview Questions</h2> 
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q: Difference between INNER JOIN and LEFT JOIN?  </strong>
    <br />
    <strong style={{ color: colors.success }}>A:
    INNER JOIN returns only matching rows from both tables.  </strong>  
    LEFT JOIN returns all rows from the left table and matching rows from the right table (NULL if no match).
  </li>
            <br />
  <li>
    <strong style={{ color: colors.primary }}>Q:How would you design users & orders relationship? </strong> 
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    One user can have many orders → One-to-Many relationship.  
    Tables: Users (UserID primary key), Orders (OrderID primary key, UserID foreign key referencing Users).
  </li>
<br />
  <li>
    <strong style={{ color: colors.primary }}>Q: Explain many-to-many with an example table diagram. </strong> 
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Many-to-many means multiple records in one table relate to multiple records in another.  
    Example: Students & Courses → use a junction table StudentCourses with StudentID & CourseID.
    <br />
    <pre>
      {`Students        Courses        StudentCourses
ID | Name       ID | Name      StudentID | CourseID
1  | Alice     1  | Math      1         | 1
2  | Bob       2  | English   1         | 2
3  | Charlie   3  | Science   2         | 1`}
    </pre>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q: What is a foreign key and why is it used? </strong> 
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A foreign key links a column in one table to the primary key of another.  
    It ensures related data stays consistent and maintains referential integrity (ensuring that relationships between tables remain consistent.).
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q: What happens if referential integrity is broken?</strong> 
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Data becomes inconsistent. For example, an order might reference a user that no longer exists.  
    SQL will usually prevent such actions or throw an error unless constraints are disabled.
  </li>
</ul>


        {/* SHORT SUMMARY */}
        <h2>Short Summary</h2>
        <ul>
          <li>Joins help connect multiple tables using relationships.</li>
          <li>
            They improve data quality, reduce duplication, and speed up queries.
          </li>
          <li>
            Understanding joins is essential for SQL, backend, and system design
            interviews.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Indexes",
    path: "/database/indexes",
    explanation: (
      <>
        <p>
          In databases, an <strong>index</strong> is a data structure that helps
          find rows faster, similar to a book index that lets you locate topics
          without reading every page. It speeds up <strong>SELECT</strong>{" "}
          queries but adds some extra storage and slows down writes.
        </p>

        <h2>Why Do We Need Indexes?</h2>
        <ul>
          <li>Speed up query execution (SELECT, WHERE, ORDER BY)</li>
          <li>Reduce full table scans for large datasets</li>
          <li>Support efficient JOINs and aggregation</li>
          <li>Enforce uniqueness with unique indexes</li>
        </ul>

        <h2>Types of Indexes</h2>
        <ul>
          <li>
            <strong>Clustered Index</strong> – Table rows are physically sorted
            according to the index.
            <em>Usually only one per table (e.g., primary key).</em>
          </li>
          <li>
            <strong>Non-Clustered Index</strong> – Separate structure pointing
            to table rows.
            <em>Can have multiple per table.</em>
          </li>
          <li>
            <strong>B-Tree Index</strong> – Balanced tree; good for range
            queries.
            <em>Default in most RDBMS.</em>
          </li>
          <li>
            <strong>Hash Index</strong> – Uses a hash table; very fast for exact
            matches.
            <em>Not suitable for ranges.</em>
          </li>
          <li>
            <strong>Covering Index</strong> – Contains all columns needed for a
            query.
            <em>Query can be satisfied entirely from the index.</em>
          </li>
        </ul>

        <h2>Example Table</h2>
        <pre>
          {`Users Table
+----+-------+----------------+
| ID | Name  | Email          |
+----+-------+----------------+
| 1  | Alice | alice@mail.com |
| 2  | Bob   | bob@mail.com   |
| 3  | Carol | carol@mail.com |
+----+-------+----------------+

Query: SELECT * FROM Users WHERE Name='Alice';
Without index → scans all rows
With index on Name → directly goes to Alice's row`}
        </pre>

        <h2>Diagram: How Index Works</h2>
        <pre>
          {`B-Tree Index Example on Name
         [Bob]
        /     \
     [Alice]  [Carol]

Searching 'Alice' → follow left pointer → found row faster`}
        </pre>

        <h2>When to Use Indexes?</h2>
        <ul>
          <li>Columns in WHERE, JOIN, ORDER BY, GROUP BY</li>
          <li>Foreign key columns for faster joins</li>
          <li>Columns with uniqueness constraints</li>
          <li>Large tables where scanning is expensive</li>
        </ul>

        <h2>Benefits of Indexes</h2>
        <ul>
          <li>Faster SELECT queries</li>
          <li>Efficient sorting & retrieval</li>
          <li>Supports uniqueness & constraints</li>
          <li>Optimizes JOINs and aggregation functions</li>
        </ul>

        <h2>Trade-offs</h2>
        <ul>
          <li>Consumes extra storage</li>
          <li>Slows down INSERT, UPDATE, DELETE (index must be updated)</li>
          <li>Too many indexes → performance overhead</li>
        </ul>

        <h2>Common Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between clustered and non-clustered index?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Clustered index: Data rows are stored **in the order of the index** (one per table).  
    - Non-clustered index: Separate structure points to data rows; table order is independent (multiple allowed).
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When would you avoid creating an index?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    You should avoid an index when it won’t help performance:  
    <ul style={{ marginTop: '5px' }}>
      <li><strong>Few unique values:</strong> If the column has almost the same value for most rows (e.g., Gender: Male/Female), the index won’t help.</li>
      <li><strong>Lots of changes:</strong> If the table is updated, inserted, or deleted very often, indexes slow down writes.</li>
      <li><strong>Rarely used:</strong> If queries hardly ever search or sort by that column, an index is wasted.</li>
    </ul>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain covering index with an example.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - A covering index **includes all columns needed by a query**, so the DB can answer without reading the table.  
    - Example:  
      <pre>
        {`-- Table: Orders (OrderID, UserID, Amount, Date)
-- Query: SELECT UserID, Amount FROM Orders WHERE Date='2025-12-04';
-- Covering index: (Date, UserID, Amount)`}
      </pre>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do indexes improve JOIN performance?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Indexes allow the database to **quickly find matching rows** instead of scanning the entire table, speeding up JOIN queries.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What are B-Tree and Hash indexes?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **B-Tree index:** Balanced tree, good for range queries, sorted data, and equality.  
    - **Hash index:** Uses hash tables, very fast for exact matches but not for range queries.
  </li>
</ul>

        <h2>Short Summary</h2>
        <ul>
          <li>
            Indexes = speed up data retrieval and reduce full table scans.
          </li>
          <li>
            Clustered vs non-clustered: one sorts table physically, one points
            to rows.
          </li>
          <li>Use wisely: too many indexes can slow writes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Normalization & Denormalization",
    path: "/database/normalization",
    explanation: (
      <>
        <p>
          <strong>Normalization</strong> organizes database tables to reduce
          repeated data and ensure data is correct, consistent, and reliable.
          <strong>Denormalization</strong> merges tables or duplicates data to
          make reading/querying faster, at the cost of some redundancy.
        </p>

        <h2>Why Do We Normalize?</h2>
        <ul>
          <li>Avoid storing the same data in multiple places</li>
          <li>Ensure data correctness and consistency</li>
          <li>Make updates, inserts, and deletes easier</li>
          <li>Use storage efficiently</li>
        </ul>

        <h2>Normalization Forms (1NF → BCNF)</h2>
        <ul>
          <li>
            <strong>1NF (First Normal Form)</strong> – No repeating groups; each
            column holds one value.
            <em>Example: Split multiple phone numbers into separate rows.</em>
          </li>
          <li>
            <strong>2NF (Second Normal Form)</strong> – Meet 1NF and remove
            partial dependencies; every non-key column depends on the whole
            primary key.
            <em>
              Example: Store course names in a separate table rather than
              repeating per student.
            </em>
          </li>
          <li>
            <strong>3NF (Third Normal Form)</strong> – Meet 2NF and remove
            transitive dependencies; non-key columns depend only on the primary
            key.
            <em>
              Example: Store city/state in a separate table instead of repeating
              for every customer.
            </em>
          </li>
          <li>
            <strong>BCNF</strong> – Stricter version of 3NF; handles edge cases
            to remove anomalies.
          </li>
        </ul>

        <h2>Denormalization</h2>
        <ul>
          <li>
            Combine tables or duplicate data to improve read/query performance
          </li>
          <li>Used in reports, analytics, dashboards</li>
          <li>Trade-off: more storage and possible data inconsistencies</li>
        </ul>

        <h2>When to Use What?</h2>
        <ul>
          <li>
            <strong>Normalization</strong> → Transactional systems (OLTP) where
            data accuracy matters
          </li>
          <li>
            <strong>Denormalization</strong> → Reporting/analytics (OLAP),
            read-heavy systems
          </li>
        </ul>

        <h2>Example Tables & Diagram</h2>
        <pre>
          {`Before Normalization:
+----+-------+----------+------------+
| ID | Name  | Course   | Instructor |
+----+-------+----------+------------+
| 1  | Alice | Math     | Mr. A      |
| 2  | Bob   | Math     | Mr. A      |
| 3  | Alice | Physics  | Mr. B      |
+----+-------+----------+------------+

After 3NF Normalization:

Students Table
+----+-------+
| ID | Name  |
+----+-------+
| 1  | Alice |
| 2  | Bob   |
+----+-------+

Courses Table
+----+--------+
| ID | Name   |
+----+--------+
| 1  | Math   |
| 2  | Physics|
+----+--------+

Enrollments Table
+----------+-----------+
| StudentID| CourseID  |
+----------+-----------+
| 1        | 1         |
| 2        | 1         |
| 1        | 2         |
+----------+-----------+`}
        </pre>

        <h2>Benefits</h2>
        <ul>
          <li>Normalized → correct, consistent, avoids duplicates</li>
          <li>
            Denormalized → faster reads, fewer JOINs, optimized for analytics
          </li>
        </ul>

        <h2>Trade-offs</h2>
        <ul>
          <li>Normalization → can slow down read-heavy queries</li>
          <li>
            Denormalization → can introduce redundancy and more complex updates
          </li>
        </ul>

        <h2>Common Interview Questions</h2>
       <ul>
  {/* 1NF, 2NF, 3NF, BCNF */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain 1NF, 2NF, 3NF, BCNF with examples?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>

    <p><strong>1NF (First Normal Form):</strong> No repeating groups. Every column has atomic (single) values.</p>
    <pre>
{`❌ Bad:
Student: John
Phone: 9877, 8876   (multiple values)

✅ 1NF:
Student | Phone
John    | 9877
John    | 8876`}
    </pre>

    <p><strong>2NF (Second Normal Form):</strong> No partial dependency (applies to composite primary keys).</p>
    <pre>
{`❌ Bad:
Order(ProductID, UserID, ProductName)
ProductName depends only on ProductID → partial dependency.

✅ 2NF:
Products(ProductID, ProductName)
Orders(ProductID, UserID)`}
    </pre>

    <p><strong>3NF (Third Normal Form):</strong> No transitive dependency.</p>
    <pre>
{`❌ Bad:
Employees(EmpID, DeptID, DeptName)
DeptName depends on DeptID → transitive dependency.

✅ 3NF:
Employees(EmpID, DeptID)
Departments(DeptID, DeptName)`}
    </pre>

    <p><strong>BCNF (Boyce-Codd Normal Form):</strong> Every determinant must be a candidate key.</p>
    <pre>
{`❌ Bad:
Course | Teacher | Room
One teacher always teaches one room → Teacher → Room
But Teacher is not a key.

✅ BCNF:
Teachers(Teacher, Room)
Courses(Course, Teacher)`}
    </pre>
  </li>

  {/* Normalization vs Denormalization */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between normalization and denormalization?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    <ul style={{ marginTop: "5px" }}>
      <li><strong>Normalization:</strong> Break tables to remove redundancy → saves space + ensures consistency.</li>
      <li><strong>Denormalization:</strong> Combine data or duplicate it to get faster reads → improves performance.</li>
    </ul>
  </li>

  {/* When to Denormalize */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When would you denormalize a database?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    When you need:
    <ul style={{ marginTop: "5px" }}>
      <li>Faster read queries (analytics, dashboards).</li>
      <li>To reduce JOINs in heavy traffic systems.</li>
      <li>Precomputed or cached data (e.g., total cart price).</li>
    </ul>
  </li>

  {/* Normalization + Indexing */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do normalization and indexing work together?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    - Normalization keeps the data clean and avoids duplicates. <br />
    - Indexing makes searching that clean data fast. <br />
    - Together: **Less data + faster access = best performance**.
  </li>

  {/* Denormalization Impact */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Impact of denormalization on data integrity?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    Denormalization makes reads fast but:
    <ul style={{ marginTop: "5px" }}>
      <li>Data may get duplicated.</li>
      <li>Updates become harder (must update in many places).</li>
      <li>Risk of inconsistent values increases.</li>
    </ul>
    <strong>Trade-off:</strong> Speed ↑ but data integrity ↓
  </li>
</ul>

        <h2>Short Summary</h2>
        <ul>
          <li>Normalization = reduce repeated data, ensure accuracy.</li>
          <li>
            Denormalization = improve read performance, may add redundancy.
          </li>
          <li>
            Choose based on system type: OLTP → normalize, OLAP → denormalize.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Transactions & ACID",
    path: "/database/transactions",
    explanation: (
      <>
        <p>
          A <strong>transaction</strong> is a group of operations treated as one
          single unit. Either all operations succeed, or none do. Transactions
          keep data reliable (data doesn’t get lost or broken) and correct (data
          follows rules).
        </p>

        <h2>Why Are Transactions Important?</h2>
        <ul>
          <li>
            Keep data{" "}
            <strong>
              correct and consistent ( always follows the rules and makes sense.
              )
            </strong>{" "}
            across multiple operations
          </li>
          <li>Prevent partial updates that could corrupt the database</li>
          <li>
            Allow multiple users to safely work with the database at the same
            time
          </li>
        </ul>

        <h2>ACID Properties</h2>
        <ul>
          <li>
            <strong>Atomicity</strong> – All or nothing.
            <em>
              Example: Money transfer between accounts either completes fully or
              fails completely.
            </em>
          </li>
          <li>
            <strong>Consistency</strong> – Database rules are always met.
            <em>
              Example: Account balances never go negative if rules prevent it.
            </em>
          </li>
          <li>
            <strong>Isolation</strong> – Transactions don’t interfere with each
            other.
            <em>
              Example: Two users updating the same record at the same time won’t
              cause wrong data.
            </em>
          </li>
          <li>
            <strong>Durability</strong> – Once committed, changes are permanent,
            even if the system crashes.
            <em>Example: A confirmed order is never lost.</em>
          </li>
        </ul>

        <h2>Transaction Control Commands</h2>
        <ul>
          <li>
            <strong>COMMIT</strong> – Makes changes permanent
          </li>
          <li>
            <strong>ROLLBACK</strong> – Cancels changes and goes back to
            previous state
          </li>
          <li>
            <strong>SAVEPOINT</strong> – Sets a checkpoint to undo partial
            changes without affecting earlier work
          </li>
        </ul>

        <h2>Isolation Levels (Diagram Example)</h2>
        <pre>
          {`+-------------------+------------------------+
| Isolation Level    | Behavior               |
+-------------------+------------------------+
| Read Uncommitted   | Can read uncommitted   |
|                   | changes (dirty reads) |
| Read Committed     | Only reads committed   |
|                   | changes               |
| Repeatable Read    | Prevents non-repeatable|
|                   | reads                 |
| Serializable       | Highest isolation;    |
|                   | appears sequential    |
+-------------------+------------------------+`}
        </pre>

        <h2>Benefits</h2>
        <ul>
          <li>
            Data stays correct and consistent (always follows the rules and
            makes sense.)
          </li>
          <li>Safe for many users working simultaneously</li>
          <li>Mistakes can be undone easily with rollback or savepoints</li>
        </ul>

        <h2>Common Interview Questions</h2>
        <ul>
  {/* ACID Properties */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain ACID properties with examples.
    <br />
    <strong style={{ color: colors.success }}>A:</strong>

    <p><strong>A — Atomicity:</strong> A transaction must complete fully or not at all.</p>
    <pre>
{`Example:
UPDATE balance SET amount = amount - 500 WHERE user=1;
UPDATE balance SET amount = amount + 500 WHERE user=2;

If second update fails → first update is rolled back.`}
    </pre>

    <p><strong>C — Consistency:</strong> Database moves from one valid state to another.</p>
    <pre>
{`Example:
Balance should never go negative.
If a transaction violates rule → DB rejects it.`}
    </pre>

    <p><strong>I — Isolation:</strong> Multiple transactions should not affect each other’s results.</p>
    <pre>
{`Example:
Two users buying the same product → each sees correct stock.`}
    </pre>

    <p><strong>D — Durability:</strong> Once committed, data stays even if system crashes.</p>
    <pre>
{`Example:
After COMMIT, order remains saved even after power failure.`}
    </pre>
  </li>

  {/* COMMIT vs ROLLBACK */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between COMMIT and ROLLBACK?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    <ul style={{ marginTop: "5px" }}>
      <li><strong>COMMIT:</strong> Saves all changes permanently.</li>
      <li><strong>ROLLBACK:</strong> Undo all changes since the last COMMIT.</li>
    </ul>
    <pre>
{`BEGIN;
UPDATE users SET age=25 WHERE id=1;
ROLLBACK;  -- change undone

BEGIN;
UPDATE users SET age=30 WHERE id=1;
COMMIT;    -- change saved`}
    </pre>
  </li>

  {/* Isolation Levels */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain isolation levels and their use cases.
    <br />
    <strong style={{ color: colors.success }}>A:</strong>

    <p><strong>1. Read Uncommitted:</strong> Can read uncommitted data (dirty reads).  
    <br />Use when highest speed is needed, and consistency does not matter.</p>

    <p><strong>2. Read Committed:</strong> Cannot read uncommitted data.  
    <br />Default in most DBs. Prevents dirty reads.</p>

    <p><strong>3. Repeatable Read:</strong> Same row reads always give same result.  
    <br />Prevents non-repeatable reads.</p>

    <p><strong>4. Serializable:</strong> Highest isolation; transactions run one-by-one.  
    <br />Use for banking, inventory accuracy.</p>
  </li>

  {/* Multi-user Consistency */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do transactions maintain consistency with multiple users?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    Databases use:
    <ul style={{ marginTop: "5px" }}>
      <li><strong>Locks:</strong> Prevent two users from editing same row at the same time.</li>
      <li><strong>Isolation levels:</strong> Ensure each user sees correct data.</li>
      <li><strong>Rollback logs:</strong> Restore correct state if something fails.</li>
    </ul>
    <p>Result: data remains correct even when many users update at once.</p>
  </li>
</ul>
        <h2>Short Summary</h2>
        <ul>
          <li>Transactions = a logical unit of work</li>
          <li>ACID ensures safe, consistent, reliable DB operations</li>
          <li>
            COMMIT, ROLLBACK, and isolation levels control transaction behavior
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    title: "Stored Procedures & Functions",
    path: "/database/stored-procedures",
    explanation: (
      <>
        <p>
          <strong>Stored Procedures (SPs)</strong> are pre-written SQL commands
          saved in the database. You can run them anytime without rewriting the
          query.
          <strong>Functions</strong> are similar but usually return a value
          (like a calculation or result).
        </p>

        <h2>Why Use Stored Procedures / Functions?</h2>
        <ul>
          <li>Reusability – write once, use many times</li>
          <li>Faster execution – runs directly on the database server</li>
          <li>Security – can restrict access to the underlying tables</li>
          <li>Maintainability – easier to change logic in one place</li>
        </ul>

        <h2>When to Use What?</h2>
        <ul>
          <li>
            <strong>Use SPs</strong> – for insert, update, delete, or complex
            workflows
          </li>
          <li>
            <strong>Use Functions</strong> – when you need a value calculation
            or data transformation
          </li>
        </ul>

        <h2>Simple Diagram / Example</h2>
        <pre>
          {`+---------------------------+
| Stored Procedure: AddUser |
+---------------------------+
| Input: username, email     |
| SQL: INSERT INTO users ... |
+---------------------------+
| Returns: Success / Error   |
+---------------------------+

Execution:
CALL AddUser('Alice', 'alice@mail.com');`}
        </pre>

        <h2>Example Function</h2>
        <pre>
          {`CREATE FUNCTION GetUserCount()
RETURNS INT
BEGIN
   DECLARE count INT;
   SELECT COUNT(*) INTO count FROM users;
   RETURN count;
END;

Execution:
SELECT GetUserCount();`}
        </pre>

        <h2>Benefits (Simple)</h2>
        <ul>
          <li>Less repeated code</li>
          <li>Better performance</li>
          <li>Centralized logic</li>
          <li>Helps control security</li>
        </ul>

        <h2>Common Interview Questions</h2>
      <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between SP and Function?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Stored Procedure (SP):** Can return multiple values, can modify data (INSERT/UPDATE/DELETE).  
    - **Function:** Must return a single value, cannot modify data (only read/compute).
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Why use parameterized queries?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    They:  
    <ul style={{ marginTop: '5px' }}>
      <li>Prevent **SQL injection**.</li>
      <li>Ensure **safe & clean input**.</li>
      <li>Improve performance by **reusing execution plans**.</li>
    </ul>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do SPs improve performance and security?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - SPs are **precompiled**, so they run faster.  
    - They **hide SQL logic** and restrict direct table access → safer.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do you execute a stored procedure and a function?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    <pre>
{`-- Stored Procedure
EXEC ProcName;

-- Function
SELECT dbo.FuncName();`}
    </pre>
  </li>
</ul>



      </>
    ),
  },
  {
    id: 9,
    title: "Views & Triggers",
    path: "/database/views-triggers",
    explanation: (
      <>
        <p>
          <strong>Views</strong> are virtual tables created from one or more
          real tables. They do not store data themselves but provide a way to
          see data from tables.
          <strong>Triggers</strong> are automatic actions that happen when
          certain events occur in the database (like INSERT, UPDATE, DELETE).
        </p>

        <h2>Why Use Views?</h2>
        <ul>
          <li>Simplify complex queries for users</li>
          <li>Provide customized representation of data</li>
          <li>Enhance security by showing only specific columns or rows</li>
          <li>Centralize query logic for easier maintenance</li>
        </ul>

        <h2>Why Use Triggers?</h2>
        <ul>
          <li>Automatically enforce business rules</li>
          <li>Maintain audit logs (who changed what and when)</li>
          <li>Prevent invalid data from being inserted or updated</li>
          <li>
            Perform cascading actions automatically (like updating totals)
          </li>
        </ul>

        <h2>Simple Diagram / Example</h2>
        <pre>
          {`-- View Example
CREATE VIEW ActiveUsers AS
SELECT id, name, email
FROM users
WHERE status = 'active';

-- Usage
SELECT * FROM ActiveUsers;

-- Trigger Example
CREATE TRIGGER LogUserUpdate
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
  INSERT INTO user_log(user_id, action, updated_at)
  VALUES (OLD.id, 'update', NOW());
END;

-- Trigger runs automatically after a user is updated.`}
        </pre>

        <h2>Diagram-style Explanation</h2>
        <pre>
          {`Users Table
+----+-------+--------+--------+
| ID | Name  | Email  | Status |
+----+-------+--------+--------+
| 1  | Alice | ...    | active |
| 2  | Bob   | ...    | inactive|
+----+-------+--------+--------+

View: ActiveUsers
+----+-------+--------+
| ID | Name  | Email  |
+----+-------+--------+
| 1  | Alice | ...    |
+----+-------+--------+

Trigger: LogUserUpdate
Users Table UPDATE → Trigger fires → Inserts log in user_log table`}
        </pre>

        <h2>Benefits (Simple)</h2>
        <ul>
          <li>Views: easier access, better security, reusable queries</li>
          <li>
            Triggers: automatic enforcement of rules, maintain data integrity,
            logging changes
          </li>
        </ul>

        <h2>Common Interview Questions</h2>
        <ul>
  {/* View vs Table */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between a view and a table?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Table:** Physically stores data.  
    - **View:** Virtual table; shows data from queries, doesn’t store data (except materialized views).
  </li>

  {/* BEFORE vs AFTER triggers */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between BEFORE and AFTER triggers?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **BEFORE Trigger:** Fires *before* insert/update/delete → useful for validation.  
    - **AFTER Trigger:** Fires *after* the operation → useful for logging or audit.
  </li>

  {/* Trigger performance impact */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Can triggers affect performance?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Yes. Triggers add extra work on every write (INSERT/UPDATE/DELETE), which can slow down high-traffic tables.
  </li>

  {/* Views + security */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How can views improve security?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Views allow exposing **only selected columns/rows**, hiding sensitive data while restricting direct table access.
  </li>

  {/* When to use trigger */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When would you use a trigger over application logic?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    When a rule must run **automatically at the database level**, such as:  
    <ul style={{ marginTop: '5px' }}>
      <li>Auditing (log every change)</li>
      <li>Enforcing mandatory business rules</li>
      <li>Maintaining derived values (e.g., auto-update totals)</li>
    </ul>
  </li>
</ul>

      </>
    ),
  },
  {
    id: 10,
    title: "Query Optimization",
    path: "/database/query-optimization",
    explanation: (
      <>
        <p>
          <strong>Query Optimization</strong> is the process of improving the
          performance of SQL queries so they run faster and use fewer resources.
          Optimized queries reduce database load and improve application
          responsiveness.
        </p>

        <h2>Why Query Optimization Matters</h2>
        <ul>
          <li>Faster data retrieval for users</li>
          <li>Reduces server load and memory usage</li>
          <li>Prevents slow reports and API endpoints</li>
          <li>Essential for large datasets and production systems</li>
        </ul>

        <h2>Key Techniques</h2>
        <ul>
          <li>
            <strong>EXPLAIN Plan</strong> – Shows how the database executes a
            query, which indexes are used, and where bottlenecks occur.
            <br />
            <em>Example:</em>{" "}
            <code>EXPLAIN SELECT * FROM orders WHERE user_id = 1;</code>
          </li>
          <li>
            <strong>Indexing Strategies</strong> – Use indexes on columns in
            WHERE, JOIN, ORDER BY, and GROUP BY to speed up queries.
          </li>
          <li>
            <strong>Avoid Full Table Scans</strong> – Ensure queries use indexes
            instead of scanning the entire table.
          </li>
          <li>
            <strong>Caching Queries</strong> – Store frequently accessed query
            results in memory (Redis, Memcached) to avoid repeated DB hits.
          </li>
        </ul>

        <h2>Example: Index vs No Index</h2>
        <pre>
          {`-- Without Index (full table scan)
SELECT * FROM orders WHERE user_id = 1000;

-- With Index (fast lookup)
CREATE INDEX idx_user_id ON orders(user_id);
SELECT * FROM orders WHERE user_id = 1000;`}
        </pre>

        <h2>Diagram-style Explanation</h2>
        <pre>
          {`Orders Table
+----+--------+--------+
| ID | UserID | Amount |
+----+--------+--------+
| 1  | 1000   | 250    |
| 2  | 1001   | 300    |
+----+--------+--------+

Query: SELECT * FROM orders WHERE user_id = 1000;

-- Full Table Scan
DB checks every row → slower

-- Indexed
DB uses idx_user_id → jumps directly to matching rows → faster`}
        </pre>

        <h2>Benefits</h2>
        <ul>
          <li>Faster SELECT queries and reports</li>
          <li>Reduces CPU and memory usage</li>
          <li>Improves user experience in applications</li>
          <li>Critical for scaling large databases</li>
        </ul>

        <h2>Common Interview Questions</h2>
       <ul>
  {/* EXPLAIN plan */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain EXPLAIN plan with an example.
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    EXPLAIN shows how the database will execute a query (indexes used, scan type, cost).
    <pre>
{`EXPLAIN SELECT * FROM Users WHERE email='a@b.com';`}
    </pre>
    Output tells if it used an index or did a full table scan.
  </li>

  {/* When to create index */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When and why would you create an index?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    Create an index when queries frequently search, filter, sort, or JOIN on a column; it makes lookups much faster.
  </li>

  {/* Avoid full table scans */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do you avoid full table scans?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    - Create proper indexes  
    - Use selective WHERE clauses  
    - Avoid functions on indexed columns  
    - Use LIMIT where possible  
    - Analyze slow queries
  </li>

  {/* Caching queries */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain caching queries and its pros/cons.
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    Caching stores the result of frequent queries to return them faster.
    <ul style={{ marginTop: '5px' }}>
      <li><strong>Pros:</strong> Faster reads, reduced DB load.</li>
      <li><strong>Cons:</strong> Cache can become stale; extra invalidation logic needed.</li>
    </ul>
  </li>

  {/* Clustered vs non-clustered in performance */}
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between clustered and non-clustered index in query performance?
    <br />
    <strong style={{ color: colors.success }}>A:</strong>
    - <strong>Clustered index:</strong> Data stored physically in index order → fastest for ranges.  
    - <strong>Non-clustered index:</strong> Separate structure pointing to data → great for lookups but may require extra hops.
  </li>
</ul>


        <h2>Short Summary</h2>
        <ul>
          <li>Query optimization = faster, efficient queries.</li>
          <li>Use EXPLAIN, indexes, and caching to improve performance.</li>
          <li>Helps applications scale and reduces DB load.</li>
        </ul>
      </>
    ),
  },
  {
    id: 11,
    title: "NoSQL Databases Overview",
    path: "/database/nosql",
    explanation: (
      <>
        <p>
          <strong>NoSQL databases</strong> are non-relational databases designed
          to handle large volumes of unstructured or semi-structured data,
          providing high scalability and flexibility compared to traditional
          relational databases.
        </p>

        <h2>Why NoSQL?</h2>
        <ul>
          <li>Flexible schema for dynamic data</li>
          <li>High scalability (horizontal scaling)</li>
          <li>
            Optimized for specific use-cases like caching, analytics, or graph
            relationships
          </li>
          <li>Supports distributed systems efficiently</li>
        </ul>

        <h2>Types of NoSQL Databases</h2>
        <ul>
          <li>
            <strong>Document Databases</strong> – Store data as JSON-like
            documents.
            <em>Example: MongoDB</em>
            <pre>
              {`// MongoDB Example
db.users.insertOne({
  _id: 1,
  name: "Alice",
  email: "alice@mail.com",
  orders: [
    { orderId: 101, amount: 250 },
    { orderId: 102, amount: 300 }
  ]
});`}
            </pre>
          </li>

          <li>
            <strong>Key-Value Databases</strong> – Store data as key-value
            pairs, like a dictionary.
            <em>Example: Redis</em>
            <pre>
              {`// Redis Example
SET user:1:name "Alice"
SET user:1:email "alice@mail.com"
GET user:1:name → "Alice"`}
            </pre>
          </li>

          <li>
            <strong>Column-Family Databases</strong> – Store data in columns
            rather than rows; good for analytics and large-scale data.
            <em>Example: Cassandra</em>
            <pre>
              {`// Cassandra Example
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  orders MAP<TEXT, INT>
);`}
            </pre>
          </li>

          <li>
            <strong>Graph Databases</strong> – Store data as nodes and edges to
            represent relationships.
            <em>Example: Neo4j</em>
            <pre>
              {`// Neo4j Example
CREATE (alice:User {name:'Alice'})
CREATE (bob:User {name:'Bob'})
CREATE (alice)-[:FRIENDS_WITH]->(bob);`}
            </pre>
          </li>
        </ul>

        <h2>Pros of NoSQL</h2>
        <ul>
          <li>Flexible schema → easy to evolve data model</li>
          <li>High performance for specific queries</li>
          <li>Horizontal scalability → handle huge datasets</li>
          <li>Great for caching, analytics, real-time apps</li>
        </ul>

        <h2>Cons of NoSQL</h2>
        <ul>
          <li>Lacks strict ACID compliance in some databases</li>
          <li>Complex queries like joins are harder</li>
          <li>Requires careful schema design for performance</li>
          <li>May need multiple NoSQL types for different use-cases</li>
        </ul>

        <h2>Common Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between SQL and NoSQL?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    SQL: Relational, structured tables, supports ACID, uses JOINs.  
    NoSQL: Non-relational, flexible schema (document/key-value/graph), scales horizontally.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When would you choose MongoDB over MySQL?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Use MongoDB when data is semi-structured, schema changes frequently, requires horizontal scaling, or needs high write throughput.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain Redis and its common use-cases.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Redis is an in-memory key-value store for fast reads/writes. Common use-cases: caching, session storage, real-time analytics, message queues.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do graph databases represent relationships?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Graph databases use **nodes** for entities and **edges** for relationships, making queries about connections fast and intuitive.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Trade-offs of using NoSQL vs SQL?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    NoSQL: Highly scalable, flexible schema, fast writes; may lack ACID, complex joins.  
    SQL: Strong consistency, complex queries; harder to scale horizontally.
  </li>
</ul>


        <h2>Short Summary</h2>
        <ul>
          <li>
            NoSQL = non-relational, schema-flexible databases for scalable apps.
          </li>
          <li>
            Document, Key-Value, Column, Graph = main types with distinct
            use-cases.
          </li>
          <li>
            Pros: scalable, fast, flexible. Cons: less strict consistency,
            complex queries.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 12,
    title: "MongoDB Basics",
    path: "/database/mongodb-basics",
    explanation: (
      <>
        <p>
          <strong>MongoDB</strong> is a popular NoSQL document database that
          stores data in flexible, JSON-like documents instead of rigid tables.
          It is highly scalable, schema-less, and ideal for modern applications
          that deal with dynamic or unstructured data.
        </p>

        <br />

        <h2>Why MongoDB?</h2>
        <ul>
          <li>
            Flexible schema – documents can store varied fields without
            migrations
          </li>
          <li>High scalability using horizontal sharding</li>
          <li>
            Great for semi-structured or nested data (e.g., users, posts,
            comments)
          </li>
          <li>Fast read/write operations for large datasets</li>
          <li>JSON-like data model improves developer productivity</li>
        </ul>

        <br />

        <h2>Core Concepts</h2>
        <ul>
          <li>
            <strong>Collections</strong> – Similar to SQL tables but store
            JSON-like documents.
          </li>
          <li>
            <strong>Documents</strong> – Individual records stored as BSON
            (Binary JSON).
          </li>
          <li>
            <strong>BSON</strong> – Efficient binary format used internally to
            store JSON data.
          </li>
          <li>
            <strong>CRUD Operations</strong> – Create, Read, Update, Delete
            actions on documents.
          </li>
          <li>
            <strong>Aggregation Pipeline</strong> – A sequence of stages for
            data processing and analytics.
          </li>
        </ul>

        <br />

        <h2>CRUD Operations (Examples)</h2>

        <h3>Create</h3>
        <pre>
          {`// Insert a new user
db.users.insertOne({
  name: "Aman",
  age: 23,
  skills: ["Node.js", "React"]
});`}
        </pre>

        <h3>Read</h3>
        <pre>
          {`// Find users older than 20
db.users.find({ age: { $gt: 20 } });`}
        </pre>

        <h3>Update</h3>
        <pre>
          {`// Update age
db.users.updateOne(
  { name: "Aman" },
  { $set: { age: 24 } }
);`}
        </pre>

        <h3>Delete</h3>
        <pre>
          {`// Delete a user
db.users.deleteOne({ name: "Aman" });`}
        </pre>

        <br />

        <h2>Queries (Examples)</h2>
        <ul>
          <li>
            <strong>Filtering:</strong>
            <pre>{`db.products.find({ price: { $lt: 500 } });`}</pre>
          </li>

          <li>
            <strong>Sorting:</strong>
            <pre>{`db.users.find().sort({ age: -1 });`}</pre>
          </li>

          <li>
            <strong>Projection:</strong>
            <pre>{`db.users.find({}, { name: 1, age: 1 });`}</pre>
          </li>
        </ul>

        <br />

        <h2>Aggregation Pipeline</h2>
        <p>The pipeline processes documents through multiple stages:</p>

        <ul>
          <li>
            <strong>$match</strong> – Filter documents
          </li>
          <li>
            <strong>$group</strong> – Group data and compute totals
          </li>
          <li>
            <strong>$sort</strong> – Sort the output
          </li>
          <li>
            <strong>$project</strong> – Shape the final result
          </li>
        </ul>

        <pre>
          {`db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } }},
  { $sort: { total: -1 }},
  { $project: { customerId: "$_id", total: 1, _id: 0 }}
]);`}
        </pre>

        <br />

        <h2>Example Documents</h2>

        <h3>Simple Document</h3>
        <pre>
          {`{
  "name": "Aman",
  "age": 23,
  "skills": ["Node.js", "React"]
}`}
        </pre>

        <h3>Nested Document</h3>
        <pre>
          {`{
  "name": "Riya",
  "address": {
    "city": "Delhi",
    "pincode": 110001
  }
}`}
        </pre>

        <br />

        <h2>Pros of MongoDB</h2>
        <ul>
          <li>Schema flexibility – easy to evolve the data model</li>
          <li>High scalability using sharding</li>
          <li>Fast read/write operations</li>
          <li>Perfect for nested, hierarchical, or dynamic data</li>
          <li>Document data model maps naturally to JSON</li>
        </ul>

        <br />

        <h2>Cons of MongoDB</h2>
        <ul>
          <li>No ACID transactions across collections (limited)</li>
          <li>Joins are harder (though $lookup exists)</li>
          <li>Requires careful indexing for performance</li>
          <li>May not suit complex relational queries</li>
        </ul>

        <br />

        <h2>Common Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between MongoDB and SQL?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    SQL: Relational, fixed schema, uses tables and JOINs, ACID-compliant.  
    MongoDB: Document-based, flexible schema, stores JSON-like documents, scales horizontally.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is BSON and why does MongoDB use it?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    BSON (Binary JSON) is a binary format for storing documents.  
    MongoDB uses it for **fast parsing, efficient storage, and supporting more data types** than JSON.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain Aggregation Pipeline with an example.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Aggregation Pipeline processes data in stages (filter, group, sort, project).  
    Example:
    <pre>
{`db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
])`}
    </pre>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is sharding in MongoDB?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Sharding splits data across multiple servers to **handle large datasets and high traffic**, ensuring horizontal scalability.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When should you NOT use MongoDB?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Avoid MongoDB when you need **complex transactions, strong ACID compliance across multiple tables**, or when the schema is highly relational.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>MongoDB = document-based, schema-flexible NoSQL database.</li>
          <li>Stores data as BSON documents in collections.</li>
          <li>
            Great for scalable apps, real-time systems, and JSON-heavy APIs.
          </li>
          <li>Supports CRUD, indexing, queries, and aggregation pipeline.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 13,
    title: "MongoDB Indexing & Aggregation",
    path: "/database/mongodb-aggregation",
    explanation: (
      <>
        <p>
          <strong>MongoDB Indexing</strong> helps make your searches faster.
          <br />
          <strong>MongoDB Aggregation</strong> helps you process data
          step-by-step, like filtering, grouping, and sorting results.
        </p>

        <br />

        <h2>Why Indexes?</h2>
        <ul>
          <li>Indexes make find() queries run much faster.</li>
          <li>Makes searching large collections efficient.</li>
          <li>Prevents full collection scanning (slow).</li>
          <li>Works like an index in a book → directly jumps to the page.</li>
        </ul>

        <br />

        <h2>Types of Indexes</h2>

        <h3>1. Single-Field Index</h3>
        <p>
          Index on one field like <em>name</em> or <em>email</em>.
        </p>
        <pre>
          {`// Create index on "name"
db.users.createIndex({ name: 1 });`}
        </pre>

        <br />

        <h3>2. Compound Index</h3>
        <p>Index on more than one field, e.g., name + age.</p>
        <pre>
          {`// Compound index
db.users.createIndex({ name: 1, age: -1 });`}
        </pre>

        <br />

        <h3>3. Text Index</h3>
        <p>Used for searching text inside fields.</p>
        <pre>
          {`// Text index
db.posts.createIndex({ title: "text", description: "text" });

// Search text
db.posts.find({ $text: { $search: "mongodb" } });`}
        </pre>

        <br />

        <h2>When to Use Indexes?</h2>
        <ul>
          <li>Searching by name, email, phone, etc.</li>
          <li>Sorting on fields repeatedly.</li>
          <li>Filtering large data collections.</li>
          <li>Improving slow queries.</li>
        </ul>

        <br />

        <h2>Limitations of Indexes</h2>
        <ul>
          <li>Indexes take extra storage space.</li>
          <li>Too many indexes may slow down writes.</li>
          <li>Create only when needed.</li>
        </ul>

        <br />

        <h2>What is Aggregation?</h2>
        <p>
          Aggregation helps you process and transform data in steps. Think of it
          like a pipeline where each stage does one task.
        </p>

        <br />

        <h2>Common Aggregation Stages</h2>
        <ul>
          <li>
            <strong>$match</strong> – Filter documents
            <pre>{`{ $match: { status: "active" } }`}</pre>
          </li>

          <li>
            <strong>$group</strong> – Group documents and calculate totals
            <pre>{`{ $group: { _id: "$city", count: { $sum: 1 } } }`}</pre>
          </li>

          <li>
            <strong>$sort</strong> – Sort the results
            <pre>{`{ $sort: { count: -1 } }`}</pre>
          </li>

          <li>
            <strong>$project</strong> – Show/hide fields
            <pre>{`{ $project: { name: 1, age: 1 } }`}</pre>
          </li>

          <li>
            <strong>$lookup</strong> – Join two collections
            <pre>
              {`{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "userOrders"
  }
}`}
            </pre>
          </li>
        </ul>

        <br />

        <h2>Simple Aggregation Example</h2>
        <p>Count how many users are in each city:</p>

        <pre>
          {`db.users.aggregate([
  { $match: { active: true } },
  { $group: { _id: "$city", totalUsers: { $sum: 1 } } },
  { $sort: { totalUsers: -1 } }
]);`}
        </pre>

        <br />

        <h2>Beginner-Friendly Diagram Idea</h2>
        <p>Aggregation Pipeline Flow:</p>
        <pre>
          {`
Input Data → $match → $group → $sort → Final Output
`}
        </pre>

        <br />

        <h2>Interview Questions</h2>
       <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is an index in MongoDB?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    An index is a data structure that **speeds up query performance** by allowing MongoDB to quickly locate documents without scanning the entire collection.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between single-field and compound index?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Single-field: Index on **one field**. Fast for queries on that field.  
    - Compound: Index on **multiple fields**. Useful for queries filtering/sorting on multiple fields.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is an aggregation pipeline?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A pipeline processes documents in **stages** like `$match`, `$group`, `$sort`, `$project` to transform and aggregate data efficiently.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain $lookup with an example.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    `$lookup` performs a **left join** with another collection.  
    Example:
    <pre>
{`db.orders.aggregate([
  { $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user_info"
  }}
])`}
    </pre>
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When should you NOT use too many indexes?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Too many indexes **slow down writes** (insert/update/delete) and **consume extra storage**, so use them only on frequently queried fields.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Indexes = make searching faster.</li>
          <li>Aggregation = process data step-by-step.</li>
          <li>$match, $group, $sort, $lookup = most common stages.</li>
          <li>Use indexes wisely to improve performance.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 14,
    title: "MongoDB Replication & Sharding",
    path: "/database/mongodb-replication",
    explanation: (
      <>
        <p>
          <strong>Replication</strong> keeps multiple copies of your data for
          safety.
          <br />
          <strong>Sharding</strong> splits your data across many servers so your
          app can handle more users and more data.
        </p>

        <br />

        <h2>Why Replication?</h2>
        <ul>
          <li>Keeps your application running even if one server fails.</li>
          <li>Protects against data loss.</li>
          <li>Allows read operations from secondary nodes → improves speed.</li>
        </ul>

        <br />

        <h2>How Replication Works</h2>
        <p>
          A <strong>Replica Set</strong> has:
        </p>
        <ul>
          <li>
            <strong>Primary</strong> – Handles all writes.
          </li>
          <li>
            <strong>Secondary</strong> – Copies data from primary.
          </li>
          <li>
            <strong>Automatic Failover</strong> – If primary crashes, a new one
            is chosen.
          </li>
        </ul>

        <pre>
          {`Primary  →  Secondary
   ↑            ↑
   └──── Replication ────┘`}
        </pre>

        <br />

        <h2>Simple Replication Example</h2>
        <pre>
          {`// Check the replica set status
rs.status();

// Add a secondary server
rs.add("mongodb2:27017");`}
        </pre>

        <br />

        <h2>Why Sharding?</h2>
        <ul>
          <li>Helps when data becomes too large for a single server.</li>
          <li>Distributes load across multiple machines.</li>
          <li>Improves write performance massively.</li>
        </ul>

        <br />

        <h2>How Sharding Works</h2>
        <p>Sharding has three main parts:</p>

        <ul>
          <li>
            <strong>Shard</strong> – Holds actual pieces of data.
          </li>
          <li>
            <strong>Config Servers</strong> – Store metadata about data
            distribution.
          </li>
          <li>
            <strong>Mongos Router</strong> – Sends queries to the correct shard.
          </li>
        </ul>

        <pre>{`Client → Mongos Router → Shards → Data`}</pre>

        <br />

        <h2>Simple Sharding Example</h2>
        <pre>
          {`// Enable sharding for database
sh.enableSharding("shopDB");

// Shard a collection using userId
sh.shardCollection("shopDB.users", { userId: 1 });`}
        </pre>

        <br />

        <h2>Beginner-Friendly Diagram</h2>
        <pre>
          {`
Replication (High Availability):
Primary → Secondary → Secondary

Sharding (Scalability):
Shard 1 | Shard 2 | Shard 3
`}
        </pre>

        <br />

        <h2>When to Use What?</h2>
        <ul>
          <li>
            <strong>Use Replication</strong> → When you need uptime, safety,
            backups.
          </li>
          <li>
            <strong>Use Sharding</strong> → When your data or traffic becomes
            too large.
          </li>
          <li>
            <strong>Use BOTH</strong> for large production systems.
          </li>
        </ul>

        <br />

        <h2>Interview Questions</h2>
       <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a replica set?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A replica set is a group of MongoDB servers that **maintain the same data**, providing high availability and redundancy.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How does automatic failover work?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    If the primary node fails, the replica set **automatically elects a new primary**, ensuring continuous write operations.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between replication and sharding?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Replication: **Copies data** across servers for redundancy and high availability.  
    - Sharding: **Splits data** across servers for horizontal scaling and handling large datasets.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is Mongos?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Mongos is a **query router** in a sharded MongoDB cluster. It directs operations to the correct shard transparently.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When should you enable sharding?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Enable sharding when a collection **grows very large**, queries need **horizontal scaling**, or write/read load is too high for a single server.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Replication = safety + high availability.</li>
          <li>Sharding = horizontal scaling for big data.</li>
          <li>Together, they power large, fast, reliable applications.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 15,
    title: "Partitioning & Sharding",
    path: "/database/partitioning",
    explanation: (
      <>
        <p>
          <strong>Partitioning</strong> means splitting your data into smaller
          parts so the database becomes faster and easier to scale.
          <br />
          <strong>Sharding</strong> is a type of partitioning done across
          multiple servers.
        </p>

        <br />

        <h2>Why Partition Databases?</h2>
        <ul>
          <li>Improves performance for large tables.</li>
          <li>Makes queries faster by scanning smaller chunks.</li>
          <li>Helps scale databases when one machine becomes too small.</li>
          <li>Reduces read/write load on a single server.</li>
        </ul>

        <br />

        <h2>Types of Partitioning</h2>

        <h3>1. Horizontal Partitioning (Sharding)</h3>
        <p>
          Splits <strong>rows</strong> into smaller tables. Think of dividing
          users by region: India → one server, USA → another.
        </p>

        <pre>
          {`
Users Table
 ├─ Shard 1 → users from Asia
 ├─ Shard 2 → users from Europe
 └─ Shard 3 → users from America
`}
        </pre>

        <br />

        <h3>2. Vertical Partitioning</h3>
        <p>
          Splits <strong>columns</strong> into different tables. Good when a
          table has heavy or rarely used fields.
        </p>

        <pre>
          {`
users_basic: id, name, email
users_details: id, address, preferences
`}
        </pre>

        <br />

        <h3>3. Functional Partitioning</h3>
        <p>
          Split data based on features/modules. Example: Orders DB, Users DB,
          Payments DB — each separate.
        </p>

        <br />

        <h2>What is Sharding?</h2>
        <p>
          Sharding spreads your data across multiple machines so the database
          can handle more users, more load, and more data.
        </p>

        <ul>
          <li>Each shard holds part of the data.</li>
          <li>No single server handles everything.</li>
          <li>Helps massive apps scale (e.g., social media, e-commerce).</li>
        </ul>

        <br />

        <h2>Common Sharding Strategies</h2>

        <h3>1. Range-Based Sharding</h3>
        <p>Data split by ranges like age 0–18, 19–40, 41–60.</p>
        <pre>
          {`Shard 1: userId 1–5000
Shard 2: userId 5001–10000`}
        </pre>

        <br />

        <h3>2. Hash-Based Sharding</h3>
        <p>Uses a hash function to decide which shard a row goes to.</p>
        <pre>{`shard = hash(userId) % 3;`}</pre>

        <p>Provides even distribution but makes range queries harder.</p>

        <br />

        <h3>3. Geo-Sharding (Location Based)</h3>
        <p>Users placed in shards based on country or region.</p>
        <pre>
          {`
India → Shard A
Europe → Shard B
USA → Shard C
`}
        </pre>

        <br />

        <h2>When to Use Partitioning & Sharding?</h2>
        <ul>
          <li>Your database is too large for one machine.</li>
          <li>Queries are slowing down due to huge tables.</li>
          <li>You have users from many countries.</li>
          <li>You need faster read/write performance.</li>
        </ul>

        <br />

        <h2>Beginner-Friendly Diagram</h2>
        <pre>
          {`
Partitioning:
Big Table → Smaller Pieces

Sharding:
Shard 1 | Shard 2 | Shard 3
(Each on different servers)
`}
        </pre>

        <br />

        <h2>Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between horizontal and vertical partitioning?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Horizontal: Split **rows** across tables or servers.  
    - Vertical: Split **columns** into separate tables for better performance.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is sharding?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Sharding is **splitting data across multiple servers** to scale horizontally and handle large datasets.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When should you shard a database?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Shard when a table grows **too large for one server**, queries/writes are slow, or horizontal scaling is required.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Range vs hash sharding — differences?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Range: Data distributed based on **key ranges**; good for range queries, may cause hotspots.  
    - Hash: Data distributed using **hash of key**; balanced, avoids hotspots, but range queries are harder.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What happens when a shard becomes full?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    New shards are added, and **data is migrated automatically** to balance storage across shards.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Partitioning = breaking data into smaller chunks.</li>
          <li>Horizontal = rows split. Vertical = columns split.</li>
          <li>Sharding = horizontal partitioning across many servers.</li>
          <li>Essential for big, high-traffic applications.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 16,
    title: "Cloud Databases & Scaling",
    path: "/database/cloud",
    explanation: (
      <>
        <p>
          A <strong>cloud database</strong> is a database that runs on cloud
          platforms like AWS instead of your own server. You don't worry about
          hardware, backups, or upgrades — the cloud handles all of it.
        </p>

        <br />

        <h2>Why Cloud Databases?</h2>
        <ul>
          <li>No need to manage physical servers.</li>
          <li>Backups, updates, and monitoring are automatic.</li>
          <li>Easy to increase or decrease power based on traffic.</li>
          <li>Very reliable — low downtime.</li>
        </ul>

        <br />

        <h2>Popular Cloud Databases</h2>

        <h3>1. AWS RDS (SQL Database)</h3>
        <p>
          RDS is a managed SQL database. It supports MySQL, PostgreSQL, MariaDB,
          SQL Server, and Oracle. Ideal for normal app databases.
        </p>

        <h3>2. Amazon Aurora</h3>
        <p>
          Aurora is a faster version of MySQL/PostgreSQL made for the cloud.
          Better performance + auto-scaling storage.
        </p>

        <h3>3. DynamoDB (NoSQL)</h3>
        <p>
          DynamoDB is a key-value NoSQL database. Super fast, used in apps with
          very high traffic (gaming, chats, IoT).
        </p>

        <br />

        <h2>Scaling in Cloud</h2>
        <p>Cloud makes scaling simple. There are two main types:</p>

        <h3>1. Vertical Scaling (Scale Up)</h3>
        <p>
          Give the same server more power: more CPU, more RAM. Simple but has a
          limit.
        </p>

        <pre>
          {`
Small Server → Medium Server → Large Server
`}
        </pre>

        <br />

        <h3>2. Horizontal Scaling (Scale Out)</h3>
        <p>Add more servers to share the load.</p>

        <pre>
          {`
Server 1 + Server 2 + Server 3 = More Capacity
`}
        </pre>

        <p>Used by large apps like e-commerce or social networks.</p>

        <br />

        <h2>What Are Read Replicas?</h2>
        <p>
          A read replica is a copy of your main database. It helps by handling
          <strong>read-only</strong> queries.
        </p>

        <pre>
          {`
Main DB (writes)
    ↓
Replica 1 (reads)
Replica 2 (reads)
`}
        </pre>

        <p>This makes your app faster during heavy traffic.</p>

        <br />

        <h2>When to Use Cloud Databases?</h2>
        <ul>
          <li>Your app traffic is growing.</li>
          <li>You need auto-scaling.</li>
          <li>You want automatic backups and monitoring.</li>
          <li>You don't want to maintain servers yourself.</li>
        </ul>

        <br />

        <h2>Beginner Diagram</h2>
        <pre>
          {`
Cloud DB:
Your App → Cloud Database (managed by AWS)

Scaling:
Vertical → Bigger machine
Horizontal → More machines
`}
        </pre>

        <br />

        <h2>Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a cloud database?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A cloud database is a **database hosted on cloud servers**, providing scalability, high availability, and managed maintenance.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between RDS and DynamoDB?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - RDS: Relational, supports SQL, structured schema, ACID.  
    - DynamoDB: NoSQL, key-value/document, flexible schema, high throughput and horizontal scaling.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is horizontal scaling?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Horizontal scaling means **adding more servers** to handle load instead of upgrading a single machine.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What are read replicas?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Read replicas are **copies of the database** used to **offload read traffic** and improve performance.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> When should you use Aurora?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Use Aurora when you need **high availability, auto-scaling, fast reads/writes**, and full compatibility with MySQL/PostgreSQL.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Cloud databases run on AWS so you don’t manage servers.</li>
          <li>RDS = SQL, DynamoDB = NoSQL.</li>
          <li>
            Scaling is easy: vertical (bigger) or horizontal (more servers).
          </li>
          <li>Read replicas improve performance under heavy load.</li>
        </ul>
      </>
    ),
  },
  {
    id: 17,
    title: "ORM & Database Abstraction",
    path: "/database/orm",
    explanation: (
      <>
        <p>
          An <strong>ORM</strong> (Object Relational Mapping) helps you interact
          with the database using simple functions instead of writing long SQL
          queries manually.
          <br />
          Example ORMs: Sequelize (SQL), Mongoose (MongoDB), Prisma (SQL).
        </p>

        <br />

        <h2>Why Use an ORM?</h2>
        <ul>
          <li>Write less code — no need to write SQL every time.</li>
          <li>Makes code clean and easy to understand.</li>
          <li>Helps avoid SQL injection problems.</li>
          <li>Easy to switch between databases.</li>
        </ul>

        <br />

        <h2>How ORM Works (Simple Words)</h2>
        <p>
          You create <strong>models</strong> in code (like User, Product). ORM
          turns these into database tables and handles all queries for you.
        </p>

        <pre>
          {`
Model: User {
  name: string,
  age: number
}

ORM → Creates "users" table in DB
`}
        </pre>

        <br />

        <h2>Popular ORMs</h2>
        <ul>
          <li>
            <strong>Sequelize</strong> → For SQL Databases
          </li>
          <li>
            <strong>Mongoose</strong> → For MongoDB
          </li>
          <li>
            <strong>Prisma</strong> → Modern ORM with schema-first approach
          </li>
        </ul>

        <br />

        <h2>Benefits</h2>
        <ul>
          <li>Fast development.</li>
          <li>Less chance of mistakes in SQL.</li>
          <li>Easy relationships (1-1, 1-many, many-many).</li>
          <li>Code looks clean and readable.</li>
        </ul>

        <br />

        <h2>Drawbacks</h2>
        <ul>
          <li>Might be slower than raw SQL in huge systems.</li>
          <li>Hard to write very custom queries.</li>
          <li>You must learn ORM rules in addition to database rules.</li>
        </ul>

        <br />

        <h2>Lazy Loading vs Eager Loading</h2>

        <h3>Lazy Loading</h3>
        <p>
          Related data is loaded <strong>only when needed</strong>. Example: You
          load a User first, then later load User.posts.
        </p>

        <pre>
          {`
User → loaded
User.posts → loaded only when asked
`}
        </pre>

        <h3>Eager Loading</h3>
        <p>
          Related data is loaded <strong>together</strong> in one go. Good when
          you know you will need the related data.
        </p>

        <pre>
          {`
Load User + posts + profile in one query
`}
        </pre>

        <br />

        <h2>The N+1 Problem (Very Simple Example)</h2>
        <p>This happens when you make too many database calls by mistake.</p>

        <pre>
          {`
// N+1 Example
Load 1 list of users
Then load posts for each user separately (N queries)

Total = 1 + N queries → slow
`}
        </pre>

        <p>Solution: Use eager loading — load all data in one query.</p>

        <br />

        <h2>Simple Diagram</h2>
        <pre>
          {`
Your Code → ORM → Database
(ORM converts functions into SQL/Mongo queries)
`}
        </pre>

        <br />

        <h2>When to Use ORM?</h2>
        <ul>
          <li>You want to build apps faster.</li>
          <li>You don’t want to write SQL everywhere.</li>
          <li>You want easy models and relationships.</li>
          <li>You want safer queries (less risk).</li>
        </ul>

        <br />

        <h2>Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is an ORM?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    ORM (Object-Relational Mapping) lets you **interact with relational databases using objects** instead of writing raw SQL.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Lazy loading vs eager loading?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Lazy loading: Data is **fetched only when needed**. Saves memory but may trigger extra queries.  
    - Eager loading: Data is **fetched upfront** with the main query. Reduces queries, uses more memory.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is the N+1 problem?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Occurs when ORM executes **one query for parent + N queries for each child**, causing performance issues.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> ORM vs raw SQL — when to choose what?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - ORM: Faster development, maintainable, safer.  
    - Raw SQL: Complex queries, optimized performance, more control.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is Prisma/Sequelize/Mongoose used for?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Libraries for **mapping code objects to databases**: Prisma & Sequelize for SQL, Mongoose for MongoDB.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between ORM and ODM?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - ORM: Maps **objects to relational database tables** (SQL).  
    - ODM: Maps **objects to document-based databases** (NoSQL, e.g., MongoDB).
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>ORM helps you work with DB using simple code.</li>
          <li>Less SQL → faster development.</li>
          <li>Beware of N+1 queries.</li>
          <li>Use eager loading to reduce extra DB hits.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 18,
    title: "Replication & Backup",
    path: "/database/replication",
    explanation: (
      <>
        <p>
          <strong>Replication</strong> means keeping the same data on multiple
          database servers. If one server fails, others still work.
          <br />
          <strong>Backup</strong> means storing a safe copy of your data so you
          can restore it later if something goes wrong.
        </p>

        <br />

        <h2>Why Replication?</h2>
        <ul>
          <li>If one server goes down, another takes over.</li>
          <li>Faster reads because multiple servers can share the load.</li>
          <li>Better reliability — data lives in many places.</li>
        </ul>

        <br />

        <h2>Types of Replication</h2>

        <h3>1. Master–Slave (Primary–Secondary)</h3>
        <p>
          One server is the <strong>primary</strong> (writes happen here). Other
          servers are <strong>secondary</strong> (they copy data and answer
          reads).
        </p>

        <pre>
          {`
Primary (writes)
   ↓
Secondary (reads)
Secondary (reads)
`}
        </pre>

        <ul>
          <li>Good for high read traffic.</li>
          <li>Only the primary can write.</li>
        </ul>

        <br />

        <h3>2. Multi-Master Replication</h3>
        <p>
          Here, <strong>multiple servers</strong> can handle both reads and
          writes.
        </p>

        <pre>
          {`
Master ↔ Master ↔ Master
(All can write & sync with each other)
`}
        </pre>

        <ul>
          <li>Good for globally distributed apps.</li>
          <li>Harder to manage conflicts.</li>
        </ul>

        <br />

        <h2>What Is a Backup?</h2>
        <p>
          A backup is a copy of the database stored somewhere safe — cloud,
          disk, or another server.
        </p>

        <ul>
          <li>Used when data is deleted by mistake.</li>
          <li>Used when a server crashes.</li>
          <li>Used during hacking or corruption issues.</li>
        </ul>

        <br />

        <h2>Common Backup Types</h2>

        <h3>1. Full Backup</h3>
        <p>Complete copy of the whole database.</p>

        <h3>2. Incremental Backup</h3>
        <p>
          Only saves what changed since the last backup — faster and smaller.
        </p>

        <h3>3. Differential Backup</h3>
        <p>
          Saves changes since the last <strong>full</strong> backup. Bigger than
          incremental but easier to restore.
        </p>

        <br />

        <h2>Point-in-Time Recovery (PITR)</h2>
        <p>
          PITR lets you restore the database to an exact moment, like rolling
          back time.
        </p>

        <pre>
          {`
Example:
Restore DB to 10:37 AM before accidental deletion at 10:38 AM
`}
        </pre>

        <br />

        <h2>Simple Diagram</h2>
        <pre>
          {`
Replication:
Server A → Server B → Server C

Backup:
Database → Safe Storage (Daily/Hourly)
`}
        </pre>

        <br />

        <h2>When Do You Need Replication?</h2>
        <ul>
          <li>You expect heavy read traffic.</li>
          <li>You want zero downtime.</li>
          <li>You want the system to stay alive even if a server fails.</li>
        </ul>

        <br />

        <h2>When Do You Need Backups?</h2>
        <ul>
          <li>Accidental delete/overwrite.</li>
          <li>Database corruption.</li>
          <li>Ransomware or hacking.</li>
          <li>Migrations or server crashes.</li>
        </ul>

        <br />

        <h2>Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is replication?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Replication is **copying data from one database to another** to ensure high availability and redundancy.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Primary vs Secondary?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Primary: **Handles writes**, main source of truth.  
    - Secondary: **Read-only replicas** that sync from primary, used for read scaling or failover.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is multi-master replication?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Multiple nodes can **accept writes simultaneously**, syncing data across all nodes.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a full backup?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A complete copy of **all database data**, used to restore the system fully.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Incremental vs differential backup?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - Incremental: **Only changes since last backup**. Fast, smaller storage.  
    - Differential: **Changes since last full backup**. Larger than incremental, easier restore.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is point-in-time recovery?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Restoring a database to a **specific moment in time**, useful after accidental deletes or corruption.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Replication = many servers with same data.</li>
          <li>Primary → writes, Secondary → reads.</li>
          <li>Multi-master = all can write.</li>
          <li>Backup = safety copy of data.</li>
          <li>PITR = restore DB to exact time.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 19,
    title: "Concurrency & Locking",
    path: "/database/concurrency",
    explanation: (
      <>
        <p>
          <strong>Concurrency</strong> means many users or requests accessing
          the database at the same time.
          <br />
          <strong>Locking</strong> means controlling who can read or write data
          so nothing breaks or overlaps.
        </p>

        <br />

        <h2>Why Do We Need Concurrency Control?</h2>
        <ul>
          <li>Prevents wrong or mixed-up data.</li>
          <li>Stops two people from updating the same row at the same time.</li>
          <li>Makes sure data is safe even with heavy traffic.</li>
        </ul>

        <br />

        <h2>Common Problems (Simple Explanation)</h2>

        <h3>1. Race Condition</h3>
        <p>
          When two users try to update the same data at the same time, and the
          final result becomes wrong.
        </p>

        <pre>
          {`
User A: balance = 100 → add 50
User B: balance = 100 → add 20

Final result could be wrong if both write together.
`}
        </pre>

        <br />

        <h3>2. Deadlock</h3>
        <p>When two transactions wait for each other forever.</p>

        <pre>
          {`
T1 locks Row A and wants Row B
T2 locks Row B and wants Row A
Both wait → deadlock
`}
        </pre>

        <br />

        <h2>Optimistic vs Pessimistic Locking</h2>

        <h3>⭐ Optimistic Locking (Hope for the best)</h3>
        <p>
          The system assumes no conflict will happen. No lock is applied at the
          start.
        </p>

        <ul>
          <li>Fast for read-heavy apps.</li>
          <li>Error only if two people update at the same time.</li>
        </ul>

        <pre>
          {`
Step 1: Read data
Step 2: Modify in memory
Step 3: Save only if data is unchanged
Else → retry
`}
        </pre>

        <br />

        <h3>🔒 Pessimistic Locking (Be safe)</h3>
        <p>
          The system puts a lock immediately on the row so no one else can write
          until the first user finishes.
        </p>

        <ul>
          <li>Safer for write-heavy operations.</li>
          <li>But slower because it blocks others.</li>
        </ul>

        <pre>
          {`
User A locks row
User B must wait
A writes & unlocks
B can now write
`}
        </pre>

        <br />

        <h2>Isolation Levels (Simple Explanation)</h2>
        <p>Defines how much one transaction can "see" from another.</p>

        <h3>1. Read Uncommitted</h3>
        <p>Can see uncommitted (dirty) data → unsafe.</p>

        <h3>2. Read Committed</h3>
        <p>Can only see committed data.</p>

        <h3>3. Repeatable Read</h3>
        <p>Same row gives the same result during the whole transaction.</p>

        <h3>4. Serializable (Most Strict)</h3>
        <p>Highest safety. No two transactions overlap. Slowest but safest.</p>

        <br />

        <h2>Real-World Example</h2>
        <pre>
          {`
Two users buying the last ticket:
- Without locking → both may get the ticket (wrong)
- With locking → only one gets it (correct)
`}
        </pre>

        <br />

        <h2>Interview Questions</h2>
       <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a race condition?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A **race condition** occurs when multiple processes access and modify shared data **simultaneously**, leading to unpredictable results.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a deadlock?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A **deadlock** happens when two or more processes **wait indefinitely** for each other’s resources, blocking progress.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Optimistic vs pessimistic locking?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Optimistic locking:** Assumes conflicts are rare; checks before commit.  
    - **Pessimistic locking:** Locks resources immediately to prevent conflicts.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is an isolation level?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **Isolation level** defines how transaction operations are **visible to other transactions**, controlling concurrency effects.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Which isolation level is safest?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **Serializable** — highest safety, prevents dirty, non-repeatable, and phantom reads.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Which one is fastest?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **Read uncommitted** — fastest, but allows dirty reads, less safe.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Concurrency = many users working at the same time.</li>
          <li>Locking prevents conflicts.</li>
          <li>Optimistic → no lock until write.</li>
          <li>Pessimistic → lock immediately.</li>
          <li>Isolation levels protect data from conflicts.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 20,
    title: "Database Security",
    path: "/database/security",
    explanation: (
      <>
        <p>
          <strong>Database Security</strong> means keeping your data safe from
          unauthorized access or attacks.
          <br />
          It includes checking who can access the data, what they can do, and
          protecting the data itself.
        </p>

        <br />

        <h2>Why Database Security?</h2>
        <ul>
          <li>Prevent data theft or leakage.</li>
          <li>
            Protect sensitive information like passwords, emails, payments.
          </li>
          <li>Ensure only authorized users can make changes.</li>
          <li>Avoid attacks that can crash or corrupt the database.</li>
        </ul>

        <br />

        <h2>Key Concepts</h2>

        <h3>1. Authentication</h3>
        <p>
          Making sure the user is who they say they are. Example: username +
          password, API keys, tokens.
        </p>

        <h3>2. Authorization</h3>
        <p>
          Decide what an authenticated user can do. Example: Admin can delete,
          User can only read.
        </p>

        <h3>3. Roles & Permissions</h3>
        <p>
          Assign users to roles (Admin, User, Guest) and give permissions to
          each role. Easier to manage than giving permissions individually.
        </p>

        <pre>
          {`
Role: Admin → can read/write/delete
Role: User → can read/write only
Role: Guest → can read only
`}
        </pre>

        <br />

        <h3>4. Encryption</h3>
        <p>
          Protects data by converting it into unreadable code. Only authorized
          systems can decrypt and read it.
        </p>

        <ul>
          <li>At rest → encrypt stored data.</li>
          <li>In transit → encrypt data while sending over network.</li>
        </ul>

        <br />

        <h3>5. SQL Injection Prevention</h3>
        <p>
          SQL injection is when attackers try to run malicious queries in your
          database.
        </p>

        <pre>
          {`// BAD: Vulnerable to SQL injection
"SELECT * FROM users WHERE name = '" + userInput + "'"

// GOOD: Use parameterized queries / ORM
db.users.find({ name: userInput })`}
        </pre>

        <ul>
          <li>Always validate user input.</li>
          <li>Use prepared statements or ORM.</li>
          <li>Never trust data from users directly.</li>
        </ul>

        <br />

        <h2>Simple Diagram</h2>
        <pre>
          {`
User → Authentication → Authorization → Database Access
Data → Encryption (at rest & in transit)
`}
        </pre>

        <br />

        <h2>When to Implement Database Security?</h2>
        <ul>
          <li>Always — even for small apps.</li>
          <li>Before going live.</li>
          <li>When sensitive data is stored.</li>
          <li>To comply with laws like GDPR, HIPAA.</li>
        </ul>

        <br />

        <h2>Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between authentication and authorization?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Authentication:** Verifies **who the user is** (login, password, token).  
    - **Authorization:** Determines **what the user can access** (roles, permissions).
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What are roles and permissions?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Roles:** Group of privileges assigned to users (e.g., admin, editor).  
    - **Permissions:** Specific actions allowed (e.g., read, write, delete).
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> How do you prevent SQL injection?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    Use **parameterized queries, prepared statements, and ORM safely** to avoid direct user input in SQL.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Why is encryption important?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **Encryption protects sensitive data** from unauthorized access, both at rest and in transit.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between encryption at rest vs in transit?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **At rest:** Data stored on disk is encrypted.  
    - **In transit:** Data being sent over network is encrypted.
  </li>
</ul>


        <br />

        <h2>Short Summary</h2>
        <ul>
          <li>Database Security = keep data safe from unauthorized access.</li>
          <li>Authentication = who you are.</li>
          <li>Authorization = what you can do.</li>
          <li>Roles & Permissions = manage user access easily.</li>
          <li>Encryption = protect data from being read by others.</li>
          <li>Prevent SQL injection = never trust user input directly.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 21,
    title: "Data Warehousing & ETL",
    path: "/database/etl",
    explanation: (
      <>
        <p>
          <strong style={{ color: "#2B6CB0" }}>Data Warehousing</strong> is
          storing large amounts of data from different sources in one place for
          analysis.
          <br />
          <strong style={{ color: "#D69E2E" }}>ETL</strong> means
          <span style={{ color: "#D53F8C" }}> Extract</span> →
          <span style={{ color: "#38A169" }}> Transform</span> →
          <span style={{ color: "#805AD5" }}> Load</span> — moving and preparing
          data for the warehouse.
        </p>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Why Data Warehousing?</h2>
        <ul>
          <li>Combine data from multiple sources.</li>
          <li>Faster analytics and reporting.</li>
          <li>Store historical data for trends.</li>
          <li>Supports business decisions with data.</li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Data Models</h2>

        <h3 style={{ color: "#D69E2E" }}>1. Star Schema</h3>
        <p>
          Central <strong style={{ color: "#D53F8C" }}>fact table</strong>{" "}
          connected to{" "}
          <strong style={{ color: "#38A169" }}>dimension tables</strong>. Easy
          to understand and query.
        </p>

        <pre>
          {`
Fact_Sales
 ├─ Dim_Customer
 ├─ Dim_Product
 └─ Dim_Time
`}
        </pre>

        <br />

        <h3 style={{ color: "#D69E2E" }}>2. Snowflake Schema</h3>
        <p>
          Dimension tables are normalized into smaller tables. Saves space but
          more complex queries.
        </p>

        <pre>
          {`
Fact_Sales
 ├─ Dim_Customer → Dim_Address
 ├─ Dim_Product → Dim_Category
 └─ Dim_Time
`}
        </pre>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>OLAP vs OLTP</h2>
        <ul>
          <li>
            <span style={{ color: "#D69E2E" }}>OLTP</span> – Online
            Transactional Processing: fast inserts, updates, everyday
            operations.
          </li>
          <li>
            <span style={{ color: "#38A169" }}>OLAP</span> – Online Analytical
            Processing: analyze large data, reports, trends.
          </li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>ETL Process</h2>
        <ul>
          <li>
            <span style={{ color: "#D53F8C" }}>Extract</span> – Pull data from
            sources.
          </li>
          <li>
            <span style={{ color: "#38A169" }}>Transform</span> – Clean,
            combine, calculate new fields.
          </li>
          <li>
            <span style={{ color: "#805AD5" }}>Load</span> – Save data into
            warehouse.
          </li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Batch vs Streaming ETL</h2>
        <ul>
          <li>
            <span style={{ color: "#D69E2E" }}>Batch ETL</span> – Runs at
            intervals (daily/hourly), good for large data sets.
          </li>
          <li>
            <span style={{ color: "#38A169" }}>Streaming ETL</span> – Processes
            data in real-time as it arrives.
          </li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Simple Diagram Idea</h2>
        <pre>
          {`
Data Sources → Extract → Transform → Load → Data Warehouse → Reports/Analytics
`}
        </pre>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Interview Questions</h2>
       <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a data warehouse?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A **data warehouse** is a centralized system that stores **historical and structured data** from multiple sources for reporting and analytics.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain ETL process.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **ETL (Extract, Transform, Load):**  
    - **Extract:** Get data from sources.  
    - **Transform:** Clean, normalize, and structure data.  
    - **Load:** Store into a data warehouse for analysis.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between star and snowflake schema?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Star schema:** Central fact table with **denormalized dimension tables**. Simple and fast.  
    - **Snowflake schema:** Dimension tables **normalized into multiple tables**. Saves space, slightly slower queries.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> OLAP vs OLTP?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **OLAP (Online Analytical Processing):** For **analytics, reporting, data mining**. Large read queries.  
    - **OLTP (Online Transaction Processing):** For **daily transactions**. Fast reads/writes, small operations.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Batch vs streaming ETL?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Batch ETL:** Processes data in **periodic batches**. Efficient but not real-time.  
    - **Streaming ETL:** Processes **data continuously** as it arrives. Real-time insights, more complex.
  </li>
</ul>


        <br />

        <h2 style={{ color: "#2B6CB0" }}>Short Summary</h2>
        <ul>
          <li>Data warehouse = central place to store data for analysis.</li>
          <li>ETL = Extract → Transform → Load data into warehouse.</li>
          <li>Star schema = simple; Snowflake = normalized.</li>
          <li>OLTP = transactions; OLAP = analytics.</li>
          <li>Batch = periodic; Streaming = real-time.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 22,
    title: "Big Data & Analytics",
    path: "/database/bigdata",
    explanation: (
      <>
        <p>
          <strong style={{ color: "#2B6CB0" }}>Big Data</strong> means working
          with huge amounts of data that cannot fit in a normal database.
          <br />
          <strong style={{ color: "#D69E2E" }}>Analytics</strong> is studying
          this data to find useful information and patterns.
        </p>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Why Big Data?</h2>
        <ul>
          <li>Handle massive data from users, devices, and apps.</li>
          <li>Discover trends and make business decisions.</li>
          <li>Improve recommendations, predictions, and analytics.</li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Key Technologies</h2>

        <h3 style={{ color: "#D69E2E" }}>1. Hadoop</h3>
        <p>
          A system to store and process big data across multiple servers.
          <span style={{ color: "#38A169" }}>HDFS</span> stores data and
          <span style={{ color: "#805AD5" }}> MapReduce</span> processes it.
        </p>

        <h3 style={{ color: "#D69E2E" }}>2. Spark</h3>
        <p>
          Faster than Hadoop for processing large datasets. Can do batch and
          real-time processing.
        </p>

        <h3 style={{ color: "#D69E2E" }}>3. Distributed Databases</h3>
        <p>
          Data is spread across many machines to handle huge size and traffic.
          Example: Cassandra, MongoDB sharding, HBase.
        </p>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Indexing & Querying Large Data</h2>
        <ul>
          <li>Indexing = like a book index → find data quickly.</li>
          <li>Querying = search and filter data efficiently.</li>
          <li>
            Use distributed search systems like Elasticsearch for analytics.
          </li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Batch vs Real-Time Analytics</h2>
        <ul>
          <li>
            <span style={{ color: "#D69E2E" }}>Batch Analytics</span> –
            Processes large data sets at intervals (daily/hourly).
          </li>
          <li>
            <span style={{ color: "#38A169" }}>Real-Time Analytics</span> –
            Process data as it comes for instant insights.
          </li>
        </ul>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Simple Diagram Idea</h2>
        <pre>
          {`
Data Sources → Hadoop/Spark → Distributed Storage → Indexing → Analytics/Reports
`}
        </pre>

        <br />

        <h2 style={{ color: "#2B6CB0" }}>Interview Questions</h2>
        <ul>
  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is Big Data?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **Big Data** refers to extremely large and complex datasets that cannot be handled by traditional databases, often analyzed for insights and decision-making.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Difference between Hadoop and Spark?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Hadoop:** Batch processing framework, stores data in HDFS, slower for real-time tasks.  
    - **Spark:** In-memory processing, supports batch and real-time analytics, faster than Hadoop.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> What is a distributed database?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    A **distributed database** stores data across multiple servers/nodes, providing scalability, high availability, and fault tolerance.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Explain batch vs real-time analytics.  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    - **Batch analytics:** Processes **large data sets periodically**.  
    - **Real-time analytics:** Processes **data as it arrives** for instant insights.
  </li>

  <li>
    <strong style={{ color: colors.primary }}>Q:</strong> Why is indexing important in Big Data?  
    <br />
    <strong style={{ color: colors.success }}>A:</strong>  
    **Indexing** speeds up queries by allowing fast data retrieval without scanning the entire dataset, essential for performance in large-scale data systems.
  </li>
</ul>


        <br />

        <h2 style={{ color: "#2B6CB0" }}>Short Summary</h2>
        <ul>
          <li>Big Data = huge data too large for normal DBs.</li>
          <li>Analytics = find patterns & insights.</li>
          <li>Hadoop = storage + MapReduce; Spark = fast processing.</li>
          <li>Distributed DBs = spread data across servers.</li>
          <li>Indexing & querying = quick access and search.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 23,
    title: "Common Interview Questions",
    path: "/database/interview-q",
    explanation: (
      <>
        <p>
          This section covers common database interview questions that help you
          prepare for technical rounds.
          <br />
          Focus on <strong style={{ color: "#2B6CB0" }}>normalization</strong>,
          <strong style={{ color: "#D69E2E" }}> SQL vs NoSQL</strong>, and{" "}
          <strong style={{ color: "#38A169" }}>indexing</strong>,
          <strong style={{ color: "#38A169" }}>Keys & Constraints</strong>.

        </p>

        <br />

       <h2 style={{ color: "#2B6CB0" }}>1. Normalization</h2>
<p>Organize data to reduce redundancy and improve consistency (1NF, 2NF, 3NF, BCNF).</p>

<h2 style={{ color: "#2B6CB0" }}>2. SQL vs NoSQL</h2>
<p>SQL = structured, ACID, complex queries. NoSQL = flexible, scalable, unstructured data.</p>

<h2 style={{ color: "#2B6CB0" }}>3. Indexing</h2>
<p>Speeds up queries. Clustered vs Non-clustered, single vs compound, covering index avoids table scan.</p>

<h2 style={{ color: "#2B6CB0" }}>4. Keys & Constraints</h2>
<ul>
  <li><strong>Primary Key:</strong> A column that uniquely identifies each row. Example: StudentID.</li>
  <li><strong>Foreign Key:</strong> A column that links to a primary key in another table. Example: StudentID in Grades table.</li>
  <li><strong>Unique Key:</strong> Ensures no duplicate values in a column. Example: Email column.</li>
  <li><strong>Composite Key:</strong> Two or more columns together that make a row unique. Example: (OrderID + ProductID).</li>
  <li><strong>Candidate Key:</strong> Any column(s) that could be a primary key. Example: StudentID or Email.</li>
</ul>



<h2 style={{ color: "#2B6CB0" }}>5. ACID & Transactions</h2>
<p>Atomicity, Consistency, Isolation, Durability. COMMIT saves, ROLLBACK undoes, locks prevent conflicts.</p>

<h2 style={{ color: "#2B6CB0" }}>6. SPs, Functions & Triggers</h2>
<p>SP = multiple outputs; Function = single output. Parameterized queries prevent SQL injection. Triggers automate actions.</p>

<h2 style={{ color: "#2B6CB0" }}>7. Replication & Sharding</h2>
<p>Replication = Primary → Secondary. Sharding = horizontal partitioning; split when data grows.</p>

<h2 style={{ color: "#2B6CB0" }}>8. Backup & Recovery</h2>
<p>Full, Incremental, Differential. Point-in-time recovery restores DB to specific state.</p>

<h2 style={{ color: "#2B6CB0" }}>9. Concurrency & Isolation</h2>
<p>Race conditions, deadlocks. Optimistic vs Pessimistic locks. Serializable = safest, Read Uncommitted = fastest.</p>

<h2 style={{ color: "#2B6CB0" }}>10. Security</h2>
<p>Authentication vs Authorization, Roles & permissions, Encrypt at rest/in transit, prevent SQL injection.</p>

<h2 style={{ color: "#2B6CB0" }}>11. Data Warehouse & ETL</h2>
<p>Central storage for analytics. ETL = Extract, Transform, Load. Star vs Snowflake schema. OLAP vs OLTP.</p>

<h2 style={{ color: "#2B6CB0" }}>12. Big Data & Distributed DB</h2>
<p>Big Data = volume, velocity, variety. Hadoop = batch, Spark = batch + real-time. Distributed DB = data across nodes.</p>

<h2 style={{ color: "#2B6CB0" }}>Short Summary</h2>
<ul>
  <li>Normalization = clean data.</li>
  <li>SQL = structured; NoSQL = flexible.</li>
  <li>Index = fast queries.</li>
  <li>ACID + transactions + locks = consistency.</li>
  <li>Replication, Sharding, Backup = reliability.</li>
  <li>SPs, Functions, Triggers, Parameterized Queries = security & performance.</li>
  <li>ETL, OLAP/OLTP, Big Data = analytics.</li>
</ul>


        <br />
      </>
    ),
  },
];
