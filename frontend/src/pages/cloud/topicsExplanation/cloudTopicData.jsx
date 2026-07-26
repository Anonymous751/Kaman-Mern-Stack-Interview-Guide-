
const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};

export const cloudTopics = [
  {
  id: 1,
  title: "MongoDB Atlas – Setup & Cluster Creation",
  path: "/cloud/mongodb-atlas-setup",
  explanation: (
    <>
      <p>
        <strong>MongoDB Atlas</strong> is a fully managed, cloud-hosted MongoDB
        service. Instead of installing MongoDB on a server manually, Atlas
        manages everything like scaling, backups, security, monitoring, and
        cluster setup. You only focus on using the database in your
        application—Atlas handles the infrastructure.
      </p>

      <h2>Why Use MongoDB Atlas?</h2>
      <ul>
        <li>
          No need to install or maintain MongoDB on your own servers.
        </li>
        <li>
          Automatic backups, monitoring, and updates.
        </li>
        <li>
          Highly scalable—from free cluster to enterprise-level cluster.
        </li>
        <li>
          Secure access control (IP whitelisting, roles, secrets, and
          encryption).
        </li>
        <li>
          Connect easily with Node.js, Python, Java, mobile apps, or backend
          frameworks.
        </li>
      </ul>

      <h2>When Should You Prefer MongoDB Atlas?</h2>
      <ul>
        <li>
          When you don’t want to manage servers or security manually.
        </li>
        <li>
          When your application needs fast scaling (ecommerce, SaaS, etc.).
        </li>
        <li>
          When your team wants cloud availability (99.99% uptime SLA).
        </li>
        <li>
          When you want a global app with multi-region support.
        </li>
      </ul>

      <h2>Steps to Create a Cluster</h2>
      <ol>
        <li>Go to MongoDB Atlas and create an account or log in.</li>
        <li>Create a new <strong>Project</strong> (logical workspace).</li>
        <li>
          Click <strong>“Build a Cluster”</strong>.
        </li>
        <li>
          Choose a cloud provider: <strong>AWS, Google Cloud, or Azure</strong>.
        </li>
        <li>
          Pick the cluster tier:
          <ul style={{ marginTop: "5px" }}>
            <li>
              <strong>Shared Tier (M0–M5)</strong> – Free or low-cost, good for
              learning & small apps.
            </li>
            <li>
              <strong>Dedicated Tier</strong> – High performance, scalable,
              production-ready.
            </li>
          </ul>
        </li>
        <li>Choose server region (closer to your users = faster).</li>
        <li>Click <strong>Create Cluster</strong>.</li>
        <li>Wait 2–3 minutes for the provisioning to finish.</li>
      </ol>

      <h2>Network Access & Security</h2>
      <ul>
        <li>Add your IP address to the whitelist (e.g., <code>0.0.0.0/0</code> for open access, but not recommended for production).</li>
        <li>
          Create a <strong>Database User</strong> with username & password.
        </li>
        <li>
          Assign roles (readWrite, admin, or custom roles).
        </li>
        <li>
          Save the connection string to use in your backend code.
        </li>
      </ul>

      <h2>Cluster Overview</h2>
      <p>
        After the cluster is created, Atlas provides:
      </p>
      <ul>
        <li>Real-time performance metrics.</li>
        <li>Slow query analysis.</li>
        <li>Backup snapshots.</li>
        <li>Connection strings for your app.</li>
        <li>
          Options to scale CPU, RAM, storage instantly without downtime.
        </li>
      </ul>

      <h2>Benefits of MongoDB Atlas</h2>
      <ul>
        <li>
          <strong>Automatic Scaling:</strong> No manual configuration needed.
        </li>
        <li>
          <strong>Global Clusters:</strong> Deploy clusters in multiple regions.
        </li>
        <li>
          <strong>High Security:</strong> Encryption, network isolation, role-based access.
        </li>
        <li>
          <strong>Backup & Restore:</strong> Point-in-time recovery for production apps.
        </li>
        <li>
          <strong>Cost Control:</strong> Pay only for what you use.
        </li>
      </ul>

      <h2>Real-World Use Cases</h2>
      <ul>
        <li>Ecommerce inventory management</li>
        <li>Chat apps with real-time data</li>
        <li>SaaS dashboards and analytics</li>
        <li>Mobile apps using MongoDB Realm</li>
      </ul>

      <h2>Interview-Focused Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why choose
          MongoDB Atlas instead of self-hosted MongoDB?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Atlas manages
          security, scaling, backups, monitoring, and performance automatically.
          It reduces DevOps overhead and provides high availability with minimal
          setup.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Shared vs
          Dedicated cluster — main difference?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Shared clusters
          are free/low-cost with limited compute, ideal for learning. Dedicated
          clusters scale vertically/horizontally and support high-traffic
          production workloads.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you connect your app to MongoDB Atlas?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Copy the
          connection string from Atlas → replace &lt;username&gt; and
          &lt;password&gt; → use it inside Mongoose, Node.js MongoDB client,
          Python, Java, etc.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why do we need IP whitelisting?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To ensure only
          trusted devices/servers can connect; improves security by blocking
          unknown traffic.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the purpose of database users in Atlas?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They control
          permissions like read, write, and admin access. Better security through
          role-based access.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>
          MongoDB Atlas is a fully managed cloud database with no server setup.
        </li>
        <li>
          You can create a cluster in minutes with built-in scaling and
          security.
        </li>
        <li>
          Network access and database user creation are mandatory steps.
        </li>
        <li>
          Shared clusters are for learning; Dedicated clusters are for
          production.
        </li>
        <li>
          Atlas is widely used in interviews—knowing setup, benefits, and
          connection process is important.
        </li>
      </ul>
    </>
  ),
},
{
  id: 2,
  title: "MongoDB Atlas – Connecting from Node.js",
  path: "/cloud/mongodb-atlas-connect",
  explanation: (
    <>
      <p>
        Connecting a Node.js application to <strong>MongoDB Atlas</strong> is a
        common and essential skill for backend developers. Atlas provides a
        secure connection string (URI) that your application uses to connect to
        the cloud database. Proper connection handling ensures stability,
        performance, and security in production systems.
      </p>

      <h2>Why This Topic Matters?</h2>
      <ul>
        <li>Every Node.js + MongoDB project requires a DB connection.</li>
        <li>
          Atlas uses SRV connection strings which require proper drivers and
          DNS support.
        </li>
        <li>
          You must secure credentials using environment variables, not plain
          code.
        </li>
        <li>
          Production applications depend heavily on optimized connection pooling,
          retry logic, and timeouts.
        </li>
      </ul>

      <h2>Getting the Connection String</h2>
      <ol>
        <li>Go to MongoDB Atlas Dashboard.</li>
        <li>Select your cluster → Click <strong>"Connect"</strong>.</li>
        <li>Choose <strong>“Connect your application”</strong>.</li>
        <li>
          Copy the string that looks like:
          <pre style={{ marginTop: "10px" }}>
            {`mongodb+srv://<username>:<password>@cluster0.abcd.mongodb.net/?retryWrites=true&w=majority`}
          </pre>
        </li>
      </ol>

      <h2>⚠ Replace These Before Using:</h2>
      <ul>
        <li>
          <code>&lt;username&gt;</code> → your DB user
        </li>
        <li>
          <code>&lt;password&gt;</code> → your DB password
        </li>
        <li>
          Add <code>/yourDbName</code> at the end
        </li>
      </ul>

      <h2>Connecting Using Node.js (Mongoose)</h2>
      <pre>
        {`import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error:", err));`}
      </pre>

      <h2>Using Environment Variables (.env)</h2>
      <pre>
        {`MONGO_URI=mongodb+srv://user:password@cluster0.mongodb.net/mydb`}
      </pre>

      <p>
        This prevents exposing secrets in GitHub/public code — a common 
        interview topic.
      </p>

      <h2>Common Issues & Fixes</h2>

      <h3>1. SRV Record Issues</h3>
      <p>
        Atlas uses <code>mongodb+srv://</code> which depends on DNS lookups.
        Problems occur when:
      </p>
      <ul>
        <li>Your network blocks DNS SRV queries.</li>
        <li>Older MongoDB drivers are being used.</li>
        <li>Firewall blocks ports 27017 / 443.</li>
      </ul>

      <p>
        <strong>Fix:</strong> Update MongoDB Node.js driver to the latest
        version.
      </p>

      <h3>2. IP Not Whitelisted</h3>
      <p>Most common error:</p>
      <pre>{`"connection <monitor> to ... closed"`}</pre>
      <p>
        <strong>Fix:</strong> Add your IP address in Atlas → Network Access.
      </p>

      <h3>3. Timeout Errors</h3>
      <p>Happens due to unstable internet or DNS delay.</p>

      <pre>
        {`mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })`}
      </pre>

      <h3>4. Wrong Username/Password</h3>
      <p>
        Atlas database users are different from your Atlas account login.
      </p>

      <h3>5. Connection Pooling Issues</h3>
      <p>Used to manage efficient connections on high-traffic apps.</p>

      <pre>
        {`mongoose.connect(MONGO_URI, {
  maxPoolSize: 10, // default is 5
});`}
      </pre>

      <h2>Best Practices for Production</h2>
      <ul>
        <li>Always keep DB credentials in <code>.env</code>.</li>
        <li>Use connection pooling for high-traffic apps.</li>
        <li>Enable retryWrites and timeouts for resilience.</li>
        <li>Monitor slow queries on Atlas Performance tab.</li>
      </ul>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is an SRV
          connection string?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> SRV
          (<code>mongodb+srv://</code>) uses DNS records to auto-discover
          cluster nodes. It simplifies failover and load balancing.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you
          secure MongoDB credentials in a Node.js project?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using{" "}
          <code>.env</code> files + environment variables. Never commit secrets
          to GitHub.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why are IP
          addresses whitelisted in Atlas?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To ensure only
          approved devices/servers can access the database, enhancing security.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is
          connection pooling in Mongoose?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A mechanism that
          reuses existing DB connections instead of opening new ones. Improves
          performance and avoids connection overload.
        </li>

        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why does Atlas
          use <code>mongodb+srv://</code> instead of regular
          <code>mongodb://</code>?
          <br />
          <strong style={{ color: colors.success }}>A:</strong> SRV provides
          automatic node discovery, better load balancing, and simpler cluster
          connection handling.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>
          Connecting Node.js to MongoDB Atlas requires a connection string, IP
          whitelisting, and a database user.
        </li>
        <li>
          Use environment variables to secure credentials.
        </li>
        <li>
          SRV connection strings simplify communication with MongoDB clusters.
        </li>
        <li>
          Common issues include SRV errors, timeouts, and whitelist problems.
        </li>
        <li>
          Mastering Atlas connection setup is important for both development and
          interviews.
        </li>
      </ul>
    </>
  ),
},
{
  id: 3,
  title: "MongoDB Atlas – Security Best Practices",
  path: "/cloud/mongodb-atlas-security",
  explanation: (
    <>
      <p>
        <strong>MongoDB Atlas Security</strong> ensures that your cloud database is safe
        from unauthorized access, attacks, data leaks, and misuse.
        Atlas provides strong built-in security features like IP whitelisting,
        authentication, encryption, and role-based access control.
      </p>

      <h2>1. IP Whitelisting (Network Access Control)</h2>
      <p>
        You explicitly allow which IP addresses can connect to your database.
        Any IP not whitelisted is automatically blocked.
      </p>
      <h3>Why?</h3>
      <ul>
        <li>Protects your database from unwanted external access.</li>
        <li>Even if someone gets your connection string, they cannot connect.</li>
        <li>Reduces the attack surface drastically.</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li>Simple and powerful protection.</li>
        <li>Works great for teams—add only required IPs.</li>
        <li>Prevents brute-force and bot attacks at the network layer.</li>
      </ul>

      <h2>2. Strong Passwords & User Authentication</h2>
      <p>
        Atlas uses database-level users. You must create users with secure, strong
        passwords to access collections.
      </p>
      <h3>Why?</h3>
      <ul>
        <li>Prevents unauthorized login attempts.</li>
        <li>Keeps your connection string safe even if shared accidentally.</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li>Protects against credential stuffing and brute-force attacks.</li>
        <li>Works with environment variables to keep secrets hidden.</li>
      </ul>

      <h2>3. Role-Based Access Control (RBAC)</h2>
      <p>
        Instead of giving full access to every user, you assign roles like
        <strong> read </strong>, <strong>readWrite</strong>, <strong>dbAdmin</strong>, etc.
      </p>
      <h3>Why?</h3>
      <ul>
        <li>Follows the “least privilege” principle.</li>
        <li>Limits damage if a credential is compromised.</li>
        <li>Prevents accidental data deletion by developers.</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li>Better team management.</li>
        <li>Reduced internal risks.</li>
        <li>More control over who can do what.</li>
      </ul>

      <h2>4. Private Peering / VPC Peering</h2>
      <p>
        Private peering connects your application servers and Atlas cluster
        internally using a private network instead of the public internet.
      </p>
      <h3>Why?</h3>
      <ul>
        <li>Blocks public internet access completely.</li>
        <li>Prevents man-in-the-middle attacks.</li>
        <li>Makes your cloud architecture more secure and enterprise-grade.</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li>Zero exposure to public traffic.</li>
        <li>Lower latency & faster communication.</li>
        <li>Highly recommended for production-level deployments.</li>
      </ul>

      <h2>Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is IP whitelisting in MongoDB Atlas?
          <br />
          <strong>A:</strong> It is a network security feature where only approved
          IP addresses are allowed to connect. All other IPs are blocked by default.
        </li>

        <li>
          <strong>Q:</strong> Why do we use role-based access control in MongoDB?
          <br />
          <strong>A:</strong> RBAC limits user permissions based on their role,
          protects data from accidental misuse, and follows the principle
          of least privilege.
        </li>

        <li>
          <strong>Q:</strong> What is private peering in Atlas?
          <br />
          <strong>A:</strong> It connects your app servers and Atlas cluster using a
          private internal network instead of exposing the DB to the public internet.
        </li>

        <li>
          <strong>Q:</strong> How does Atlas ensure account security?
          <br />
          <strong>A:</strong> Through IP whitelisting, strong passwords, RBAC,
          encryption, and private networking options.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Whitelist only required IPs to control network-level access.</li>
        <li>Use strong passwords and environment variables for DB users.</li>
        <li>Assign roles carefully—never give full access to everyone.</li>
        <li>Use private peering for secure production deployments.</li>
        <li>Atlas provides enterprise-level security with minimal setup.</li>
      </ul>
    </>
  ),
},
{
  id: 4,
  title: "Docker Basics",
  path: "/cloud/docker-basics",
  explanation: (
    <>
      <p>
        <strong>Docker</strong> is a platform used to package applications and their
        dependencies into lightweight, portable containers. It ensures that your app
        runs the same way everywhere — development, staging, and production.
      </p>

      <h2>1. Images vs Containers</h2>
      <p>
        A <strong>Docker Image</strong> is a blueprint (like a template) that contains
        your application code, runtime, libraries, and dependencies.
      </p>
      <p>
        A <strong>Container</strong> is a running instance of that image.
      </p>

      <h3>Why?</h3>
      <ul>
        <li>Ensures consistency across environments.</li>
        <li>No “works on my machine” problems.</li>
        <li>Fast deployment because everything is pre-packaged.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Portable across any OS/server that supports Docker.</li>
        <li>Lightweight compared to VMs.</li>
        <li>Scales easily with orchestration tools like Kubernetes.</li>
      </ul>

      <h2>2. Dockerfile Basics</h2>
      <p>
        A <strong>Dockerfile</strong> defines instructions to build an image.
      </p>
      <p>Common instructions:</p>
      <ul>
        <li>
          <strong>FROM</strong> — base image
        </li>
        <li>
          <strong>COPY</strong> — copy code
        </li>
        <li>
          <strong>RUN</strong> — install packages
        </li>
        <li>
          <strong>CMD</strong> — command to run the app
        </li>
        <li>
          <strong>EXPOSE</strong> — expose ports
        </li>
      </ul>

      <h3>Why?</h3>
      <ul>
        <li>Automates building of consistent environments.</li>
        <li>Makes deployments reproducible.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Faster builds.</li>
        <li>Reusable image definitions.</li>
        <li>Easy versioning of environment setup.</li>
      </ul>

      <h2>3. Volumes</h2>
      <p>
        Volumes store data outside containers so data isn't lost when containers stop.
      </p>

      <h3>Why?</h3>
      <ul>
        <li>Containers are temporary — volumes preserve data.</li>
        <li>Share data between containers.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Proper storage of logs, DB data, etc.</li>
        <li>Better persistence and backup options.</li>
      </ul>

      <h2>4. Networks</h2>
      <p>
        Docker Networks allow containers to communicate with each other securely.
      </p>

      <h3>Why?</h3>
      <ul>
        <li>Required for multi-container systems (e.g., Node.js + MongoDB).</li>
        <li>Provides service isolation and security.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Clean separation of services.</li>
        <li>No need to expose internal services to the internet.</li>
      </ul>

      <h2>5. Exposing Ports</h2>
      <p>
        Exposing ports maps internal container ports to the host machine, enabling
        external access.
      </p>

      <h3>Why?</h3>
      <ul>
        <li>Allows accessing the app running inside the container.</li>
        <li>Required for web servers, APIs, databases, etc.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Flexible control of networking.</li>
        <li>Makes containerized apps reachable from browsers or other services.</li>
      </ul>

      <h2>Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is the difference between a Docker image and a container?
          <br />
          <strong>A:</strong> An image is the blueprint (template), while a container
          is the running instance of that image.
        </li>

        <li>
          <strong>Q:</strong> Why are Docker containers lightweight?
          <br />
          <strong>A:</strong> They share the host OS kernel instead of running a full OS
          like virtual machines.
        </li>

        <li>
          <strong>Q:</strong> What is a Dockerfile?
          <br />
          <strong>A:</strong> A script containing instructions to build a Docker image.
        </li>

        <li>
          <strong>Q:</strong> What problem do volumes solve?
          <br />
          <strong>A:</strong> They allow data persistence even if a container is destroyed.
        </li>

        <li>
          <strong>Q:</strong> Why do we expose ports in Docker?
          <br />
          <strong>A:</strong> To allow external access to containerized apps.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Docker uses images as templates and containers as runnable instances.</li>
        <li>Dockerfiles automate environment setup.</li>
        <li>Volumes store persistent data.</li>
        <li>Networks enable container-to-container communication.</li>
        <li>Port mapping makes apps accessible from outside the container.</li>
        <li>Docker is essential for scalable and consistent deployments.</li>
      </ul>
    </>
  ),
},
{
  id: 5,
  title: "Dockerizing MERN App",
  path: "/cloud/docker-mern",
  explanation: (
    <>
      <p>
        <strong>Dockerizing a MERN (MongoDB, Express.js, React, Node.js) app</strong>
        means packaging the backend and frontend into containers so the
        application runs consistently across machines, servers, and production
        environments.
      </p>

      <h2>Why Dockerize a MERN App?</h2>
      <ul>
        <li>Removes “works on my machine” issues.</li>
        <li>Makes deployment predictable and repeatable.</li>
        <li>Ensures backend + frontend use the same environment everywhere.</li>
        <li>Allows horizontal scaling using container orchestration (Kubernetes).</li>
      </ul>

      <h2>1. Dockerfile for Node.js Backend (Express API)</h2>
      <p>
        The backend Dockerfile installs dependencies, copies the source, and
        runs the Node.js server.
      </p>

      <pre>
{`# Backend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]`}
      </pre>

      <h3>Why?</h3>
      <ul>
        <li>Ensures Node.js version is consistent everywhere.</li>
        <li>Keeps dependencies isolated inside the container.</li>
        <li>Exposes backend port for communication.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Clean and reproducible environment for API.</li>
        <li>No dependency issues with host machine.</li>
      </ul>

      <h2>2. Dockerfile for React Frontend</h2>
      <p>
        The frontend needs a multi-stage build for production optimization.
      </p>

      <pre>
{`# Frontend Dockerfile (Multi-stage)
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
      </pre>

      <h3>Why Multi-Stage Build?</h3>
      <ul>
        <li>Reduces image size by using Nginx only for serving static files.</li>
        <li>Removes Node.js runtime from production image.</li>
        <li>Improves performance and security.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Small final Docker image.</li>
        <li>High-performance static serving via Nginx.</li>
        <li>Better caching and load balancing in production.</li>
      </ul>

      <h2>3. Docker Compose for MERN</h2>
      <p>
        <strong>Docker Compose</strong> allows you to run backend + frontend +
        MongoDB together with one command.
      </p>

      <pre>
{`version: "3"
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mongo
    environment:
      - MONGO_URI=mongodb://mongo:27017/mern-db

  frontend:
    build: ./frontend
    ports:
      - "3000:80"

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:`}
      </pre>

      <h3>Why Use Docker Compose?</h3>
      <ul>
        <li>Starts all services with one command: <code>docker-compose up</code></li>
        <li>Automatically wires backend → MongoDB communication.</li>
        <li>Avoids installing MongoDB locally.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Full MERN stack runs in isolation.</li>
        <li>Makes onboarding faster for new developers.</li>
        <li>Easy for production deployments with scaling.</li>
      </ul>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong>Q:</strong> Why use multi-stage builds for React?
          <br />
          <strong>A:</strong> It reduces image size by removing unnecessary dev
          dependencies and uses Nginx for optimized static hosting.
        </li>

        <li>
          <strong>Q:</strong> How does Docker Compose help in MERN?
          <br />
          <strong>A:</strong> It joins frontend, backend, and MongoDB into a
          single orchestration file, enabling them to run with one command.
        </li>

        <li>
          <strong>Q:</strong> Why do we expose ports in Docker?
          <br />
          <strong>A:</strong> To map internal container ports to the host so the
          app is accessible via browser or API calls.
        </li>

        <li>
          <strong>Q:</strong> What issue happens if backend uses <code>localhost</code> for MongoDB?
          <br />
          <strong>A:</strong> It fails because each service runs in its own
          container; you must use the service name like <code>mongo</code>.
        </li>

        <li>
          <strong>Q:</strong> Why keep backend and frontend Dockerfiles separate?
          <br />
          <strong>A:</strong> They have different build processes and run using
          different servers (Node.js vs Nginx).
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Backend container runs via Node.js image.</li>
        <li>Frontend uses multi-stage build + Nginx for optimized production builds.</li>
        <li>MongoDB runs in its own container with persistent volume.</li>
        <li>Docker Compose wires all services together.</li>
        <li>Ideal for deployment, CI/CD, and scaling environments.</li>
      </ul>
    </>
  ),
},
{
  id: 6,
  title: "Docker Compose – Multi-Service Setup",
  path: "/cloud/docker-compose",
  explanation: (
    <>
      <p>
        <strong>Docker Compose</strong> is a tool that allows you to run
        multiple containers (backend, frontend, database, cache, etc.) together
        using a single configuration file: <code>docker-compose.yml</code>.
        It is essential for running multi-service applications like MERN,
        microservices, or distributed systems.
      </p>

      <h2>Why Docker Compose?</h2>
      <ul>
        <li>Runs multiple containers with one command: <code>docker-compose up</code></li>
        <li>No need to manually start containers in correct order.</li>
        <li>Automatically creates networks for inter-container communication.</li>
        <li>Simplifies local development and production orchestration.</li>
        <li>Allows persistent storage using volumes.</li>
      </ul>

      <h2>1. Multi-Service Setup Example</h2>
      <p>This setup includes:</p>
      <ul>
        <li><strong>Backend</strong> (Node.js)</li>
        <li><strong>Frontend</strong> (React served by Nginx)</li>
        <li><strong>MongoDB</strong> (database)</li>
      </ul>

      <pre>
{`version: "3.9"
services:
  backend:
    build: ./backend
    container_name: mern-backend
    ports:
      - "5000:5000"
    depends_on:
      - mongo
    environment:
      - MONGO_URI=mongodb://mongo:27017/mern-db
    networks:
      - mern-network

  frontend:
    build: ./frontend
    container_name: mern-frontend
    ports:
      - "3000:80"
    networks:
      - mern-network

  mongo:
    image: mongo:6
    container_name: mongo-db
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - mern-network

volumes:
  mongo-data:

networks:
  mern-network:`}
      </pre>

      <h2>2. How Services Communicate?</h2>
      <p>
        Docker Compose automatically creates a virtual network.  
        Each service can talk to other services using **service names**, not IPs.
      </p>

      <pre>
{`MONGO_URI = "mongodb://mongo:27017/mern-db"`}
      </pre>

      <ul>
        <li><strong>mongo</strong> is the container name / service name.</li>
        <li>No need for localhost or IP addresses.</li>
      </ul>

      <h2>3. Why Use Networks?</h2>
      <ul>
        <li>Keeps internal communication secure (not exposed to the public).</li>
        <li>Isolates containers from unrelated services.</li>
        <li>Provides DNS-based service discovery.</li>
      </ul>

      <h2>4. Why Use Volumes?</h2>
      <ul>
        <li>Store persistent data even if containers restart.</li>
        <li>Prevents data loss for MongoDB.</li>
        <li>Helps in backup and long-term storage.</li>
      </ul>

      <h2>5. Useful Commands</h2>
      <pre>
{`docker-compose up -d     # Start all services
docker-compose down        # Stop and remove containers + network
docker-compose logs        # View logs of all services
docker-compose ps          # List running services`}
      </pre>

      <h2>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is Docker Compose?
          <br />
          <strong>A:</strong> A tool to define and run multi-container Docker
          applications using a YAML configuration file.
        </li>

        <li>
          <strong>Q:</strong> How do containers communicate in Docker Compose?
          <br />
          <strong>A:</strong> Through an automatically created bridge network,
          where service names act as hostnames.
        </li>

        <li>
          <strong>Q:</strong> Why use <code>depends_on</code>?
          <br />
          <strong>A:</strong> It ensures dependent containers (like backend →
          MongoDB) start in the correct order.
        </li>

        <li>
          <strong>Q:</strong> Why are volumes important?
          <br />
          <strong>A:</strong> Volumes persist data, preventing data loss when
          containers restart.
        </li>

        <li>
          <strong>Q:</strong> Difference between Dockerfile and Docker Compose?
          <br />
          <strong>A:</strong> Dockerfile builds **one** container; Docker
          Compose runs **multiple** containers together.
        </li>

        <li>
          <strong>Q:</strong> Can Docker Compose be used in production?
          <br />
          <strong>A:</strong> Yes, for small/medium apps. For large-scale,
          Kubernetes is recommended.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Docker Compose helps run multi-container applications easily.</li>
        <li>Uses YAML to define backend, frontend, DB, and other services.</li>
        <li>Automatically sets up networks, volumes, and dependency chains.</li>
        <li>Service discovery works using service names, not IPs.</li>
        <li>Ideal for MERN, microservices, and local development setups.</li>
      </ul>
    </>
  ),
},
{
  id: 7,
  title: "Publishing Images to Docker Hub",
  path: "/cloud/docker-hub",
  explanation: (
    <>
      <p>
        <strong>Docker Hub</strong> is the official cloud registry where you can
        store and share Docker images. It allows developers, teams, and CI/CD
        pipelines to pull images from anywhere in the world.
      </p>

      <h2>Why Publish Images to Docker Hub?</h2>
      <ul>
        <li>Share your images publicly or privately.</li>
        <li>Deploy apps easily on any server or cloud provider.</li>
        <li>Use images in CI/CD pipelines like GitHub Actions or Jenkins.</li>
        <li>Allow Kubernetes to pull images directly using <code>imagePullPolicy</code>.</li>
        <li>Serve as versioned backups of your production images.</li>
      </ul>

      <h2>1. Login to Docker Hub</h2>
      <p>First, login to your Docker Hub account from terminal:</p>
      <pre>
{`docker login`}
      </pre>
      <p>Enter your username and password.</p>

      <h2>2. Tag Your Local Image</h2>
      <p>
        Docker Hub requires images to be tagged using the format:  
        <code>username/repository:version</code>
      </p>

      <pre>
{`docker tag my-backend myusername/backend-app:v1`}
      </pre>

      <ul>
        <li><strong>my-backend</strong> → your local image</li>
        <li><strong>myusername</strong> → your Docker Hub username</li>
        <li><strong>backend-app</strong> → repository name</li>
        <li><strong>v1</strong> → version tag</li>
      </ul>

      <h2>3. Push the Image to Docker Hub</h2>
      <pre>
{`docker push myusername/backend-app:v1`}
      </pre>
      <p>This uploads your image layers to Docker Hub.</p>

      <h2>4. Pull Image from Anywhere</h2>
      <p>Now anyone (or your server/CI/CD/Kubernetes) can pull it:</p>
      <pre>
{`docker pull myusername/backend-app:v1`}
      </pre>

      <h2>5. Using Images in CI/CD</h2>
      <p>Docker Hub integrates smoothly with CI/CD tools like:</p>
      <ul>
        <li>GitHub Actions</li>
        <li>GitLab CI</li>
        <li>Jenkins</li>
        <li>CircleCI</li>
      </ul>

      <p>Example GitHub Actions step:</p>
      <pre>
{`- name: Push Docker image
  run: docker push myusername/backend-app:v1`}
      </pre>

      <h2>6. Using Images in Kubernetes</h2>
      <p>
        Kubernetes can pull images directly using your Docker Hub repo:
      </p>

      <pre>
{`containers:
  - name: backend
    image: myusername/backend-app:v1
    ports:
      - containerPort: 5000`}
      </pre>

      <h2>7. Public vs Private Repositories</h2>
      <ul>
        <li><strong>Public</strong> → Anyone can pull (most common for open-source).</li>
        <li><strong>Private</strong> → Needs credentials (good for internal apps).</li>
      </ul>

      <h2>8. Versioning Best Practices</h2>
      <ul>
        <li><strong>latest</strong> → Dev environments</li>
        <li><strong>v1, v2, v3</strong> → Production releases</li>
        <li><strong>v1.0.1</strong> → Patch updates</li>
      </ul>

      <h2>9. Common Useful Commands</h2>
      <pre>
{`docker images               # List images
docker tag old new           # Rename / retag
docker push repo:tag         # Upload to Docker Hub
docker pull repo:tag         # Download from Docker Hub
docker rmi repo:tag          # Remove image`}
      </pre>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong>Q:</strong> What is Docker Hub?
          <br />
          <strong>A:</strong> A cloud-based registry used to store, distribute,
          and manage Docker images.
        </li>

        <li>
          <strong>Q:</strong> Why do we tag images before pushing?
          <br />
          <strong>A:</strong> To match Docker Hub’s required format and enable
          versioning.
        </li>

        <li>
          <strong>Q:</strong> What are public and private repositories?
          <br />
          <strong>A:</strong> Public can be accessed by anyone; private requires
          authentication.
        </li>

        <li>
          <strong>Q:</strong> How do CI/CD pipelines use Docker Hub?
          <br />
          <strong>A:</strong> They push new images on each release and pull
          images during deployment.
        </li>

        <li>
          <strong>Q:</strong> Can Kubernetes pull images from Docker Hub?
          <br />
          <strong>A:</strong> Yes, using <code>imagePullPolicy</code> and image name.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Docker Hub stores and shares your Docker images.</li>
        <li>Tag images before pushing (<code>username/repo:tag</code>).</li>
        <li>Pushing and pulling is simple and works globally.</li>
        <li>Used heavily in Kubernetes & CI/CD pipelines.</li>
        <li>Supports public and private repositories.</li>
      </ul>
    </>
  ),
},
{
  id: 8,
  title: "GitHub Actions – CI Pipeline",
  path: "/cloud/github-actions-ci",
  explanation: (
    <>
      <p>
        <strong>GitHub Actions</strong> is a built-in automation tool that lets you
        run CI/CD pipelines directly inside GitHub. It helps automate building,
        testing, linting, and deploying your application every time you push or
        create a pull request.
      </p>

      <h2>Why GitHub Actions?</h2>
      <ul>
        <li>No external CI tool needed — fully integrated with GitHub.</li>
        <li>Automates build, testing, formatting, linting, and deployments.</li>
        <li>Supports all programming languages (Node.js, Python, Java, etc.).</li>
        <li>Uses YAML workflows stored in your repo — version-controlled.</li>
        <li>Easy caching → faster builds.</li>
        <li>Free minutes for private & public repos.</li>
      </ul>

      <h2>1. Basic CI Workflow Example</h2>
      <p>Create this file:</p>
      <pre>
{`.github/workflows/ci.yml`}
      </pre>

      <pre>
{`name: CI Pipeline

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Build App
        run: npm run build`}
      </pre>

      <h2>2. Understanding the Steps</h2>
      <ul>
        <li><strong>on:</strong> triggers workflow on push/PR.</li>
        <li><strong>runs-on:</strong> VM environment (Ubuntu, Windows, macOS).</li>
        <li><strong>checkout:</strong> pulls repo code to VM.</li>
        <li><strong>setup-node:</strong> installs correct Node.js version.</li>
        <li><strong>npm install/test/build:</strong> runs your build process.</li>
      </ul>

      <h2>3. Caching Dependencies (Faster CI)</h2>
      <pre>
{`- name: Cache Dependencies
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.os }}-npm-\${{ hashFiles('package-lock.json') }}`}
      </pre>

      <p>Speeds up CI by skipping repeated dependency installs.</p>

      <h2>4. Environment Variables</h2>
      <pre>
{`env:
  NODE_ENV: production
  API_URL: \${{ secrets.API_URL }}`}
      </pre>
      <ul>
        <li><strong>env:</strong> Public environment variables.</li>
        <li><strong>secrets:</strong> Encrypted values for production keys.</li>
      </ul>

      <h2>5. Matrix Builds</h2>
      <p>Useful when testing multiple Node versions:</p>

      <pre>
{`strategy:
  matrix:
    node-version: [16, 18, 20]`}
      </pre>

      <p>Runs tests on all versions in parallel.</p>

      <h2>6. GitHub Actions for Backend & Frontend</h2>
      <p>Backend example:</p>
      <ul>
        <li>Install dependencies</li>
        <li>Run tests</li>
        <li>Run ESLint</li>
        <li>Build Docker image</li>
      </ul>

      <p>Frontend example:</p>
      <ul>
        <li>Install Node.js</li>
        <li>Install React dependencies</li>
        <li>Run tests (Jest)</li>
        <li>Build production bundle</li>
      </ul>

      <h2>7. Deployment Integration</h2>
      <p>GitHub Actions can deploy to:</p>
      <ul>
        <li>AWS (S3, ECS, Lambda)</li>
        <li>DigitalOcean</li>
        <li>Render</li>
        <li>Netlify / Vercel</li>
        <li>Kubernetes clusters</li>
      </ul>

      <h2>8. Useful GitHub Actions Commands</h2>
      <pre>
{`npm install        # Install dependencies
npm test            # Run test suite
npm run build       # Build app
docker build        # Build Docker image
docker push         # Push to registry`}
      </pre>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong>Q:</strong> What is GitHub Actions?
          <br />
          <strong>A:</strong> A CI/CD automation platform built into GitHub that
          runs workflows based on triggers like pushes and PRs.
        </li>

        <li>
          <strong>Q:</strong> What is a workflow file?
          <br />
          <strong>A:</strong> A YAML file stored in
          <code>.github/workflows</code> that defines jobs and steps.
        </li>

        <li>
          <strong>Q:</strong> What is a job in GitHub Actions?
          <br />
          <strong>A:</strong> A set of steps executed in a virtual machine.
        </li>

        <li>
          <strong>Q:</strong> Why use caching in CI?
          <br />
          <strong>A:</strong> To speed up builds by reusing previously installed dependencies.
        </li>

        <li>
          <strong>Q:</strong> Difference between secrets and env?
          <br />
          <strong>A:</strong> <strong>env</strong> is visible; <strong>secrets</strong> are encrypted and secure.
        </li>

        <li>
          <strong>Q:</strong> What are matrix builds?
          <br />
          <strong>A:</strong> They run the same job on multiple environments (Node 16, 18, 20).
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>GitHub Actions automates building, testing, and deploying code.</li>
        <li>Uses YAML workflows stored in the repository.</li>
        <li>Supports caching, environment variables, and parallel jobs.</li>
        <li>Works seamlessly with Docker, Kubernetes, and cloud platforms.</li>
        <li>Essential tool for modern CI/CD pipelines.</li>
      </ul>
    </>
  ),
},
{
  id: 9,
  title: "GitHub Actions – CD to EC2",
  path: "/cloud/github-actions-ec2",
  explanation: (
    <>
      <p>
        <strong>GitHub Actions CD (Continuous Deployment)</strong> to an 
        <strong> AWS EC2 (Elastic Compute Cloud)</strong> instance allows your 
        application to automatically deploy updates every time you push to a 
        specific branch (usually <code>main</code> or <code>production</code>).  
        This eliminates manual deployment steps and ensures fast, consistent 
        delivery.
      </p>

      <h2>Why CD to EC2?</h2>
      <ul>
        <li>Fully automated deployment pipeline → no manual SSH steps.</li>
        <li>Faster, reliable production updates supported by GitHub Actions.</li>
        <li>Works for Node.js, Python, Java, MERN, and any Docker-based app.</li>
        <li>Easy rollback by pushing back previous commits.</li>
        <li>Perfect starting point before moving to Kubernetes / ECS.</li>
      </ul>

      <h2>1. Deployment Steps (Overview)</h2>
      <ol>
        <li>Create an EC2 (Elastic Compute Cloud) instance on AWS.</li>
        <li>Install Node.js, Git, and PM2 (Process Manager 2) inside EC2.</li>
        <li>Store EC2 private key in GitHub Secrets.</li>
        <li>Create a GitHub Actions workflow file.</li>
        <li>Use SSH (Secure Shell) inside the workflow to connect to EC2.</li>
        <li>Pull latest code, install dependencies, restart server with PM2.</li>
      </ol>

      <h2>2. Example GitHub Actions Workflow</h2>

      <pre>
{`name: CD to EC2

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup SSH Agent
        uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: \${{ secrets.EC2_SSH_KEY }}

      - name: Copy Files to EC2 using SCP (Secure Copy Protocol)
        run: |
          scp -o StrictHostKeyChecking=no -r . ubuntu@\${{ secrets.EC2_PUBLIC_IP }}:/home/ubuntu/app

      - name: Deploy on EC2 via SSH
        run: |
          ssh -o StrictHostKeyChecking=no ubuntu@\${{ secrets.EC2_PUBLIC_IP }} "
            cd /home/ubuntu/app &&
            npm install &&
            pm2 restart all || pm2 start server.js
          "
`}
      </pre>

      <h2>3. Why PM2 (Process Manager 2)?</h2>
      <ul>
        <li>Keeps Node.js app alive even after system crashes.</li>
        <li>Supports log management and auto-restart.</li>
        <li>Handles load balancing for multi-core CPUs.</li>
      </ul>

      <pre>
{`pm2 start server.js
pm2 restart all
pm2 logs`}
      </pre>

      <h2>4. Why SSH (Secure Shell)?</h2>
      <p>SSH allows GitHub Actions to securely log into your EC2 instance and run deployment commands.</p>
      <ul>
        <li>Encrypted communication.</li>
        <li>Secure authentication using key pairs.</li>
        <li>Avoids risky password-based login.</li>
      </ul>

      <h2>5. Secret Management</h2>
      <p>Store sensitive data in GitHub Secrets:</p>
      <ul>
        <li><strong>EC2_SSH_KEY</strong> – private key for EC2 authentication.</li>
        <li><strong>EC2_PUBLIC_IP</strong></li>
        <li><strong>PRODUCTION_DB_URL</strong> (optional)</li>
        <li><strong>JWT_SECRET</strong> (optional)</li>
      </ul>

      <h2>6. Common Errors & Fixes</h2>
      <ul>
        <li>
          <strong>Error:</strong> Permission denied (publickey)
          <br />
          <strong>Fix:</strong> Wrong SSH key → upload correct private key in GitHub Secrets.
        </li>

        <li>
          <strong>Error:</strong> PM2 command not found
          <br />
          <strong>Fix:</strong> Install PM2 globally → <code>npm install -g pm2</code>.
        </li>

        <li>
          <strong>Error:</strong> App not restarting
          <br />
          <strong>Fix:</strong> Ensure workflow runs in correct directory on EC2.
        </li>
      </ul>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong>Q:</strong> What is CD (Continuous Deployment)?
          <br />
          <strong>A:</strong> A process where code changes are automatically 
          deployed to production without manual steps.
        </li>

        <li>
          <strong>Q:</strong> What is EC2 (Elastic Compute Cloud)?
          <br />
          <strong>A:</strong> A virtual cloud server provided by AWS to host 
          applications.
        </li>

        <li>
          <strong>Q:</strong> Why do we use SSH (Secure Shell) for deployment?
          <br />
          <strong>A:</strong> SSH provides encrypted, secure access for running
          deployment commands on EC2.
        </li>

        <li>
          <strong>Q:</strong> Why use PM2 (Process Manager 2)?
          <br />
          <strong>A:</strong> PM2 keeps Node.js apps always running and supports 
          restarts, logs, and load balancing.
        </li>

        <li>
          <strong>Q:</strong> How do you store sensitive keys in GitHub Actions?
          <br />
          <strong>A:</strong> All sensitive values must be stored in 
          <strong>GitHub Secrets</strong>.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>GitHub Actions automates deployments directly to AWS EC2.</li>
        <li>Uses SSH + PM2 for secure and stable production deployment.</li>
        <li>Secrets store all sensitive credentials.</li>
        <li>Updates go live automatically on every push to main.</li>
        <li>Ideal for MERN, Node.js, Express, Django, and basic cloud setups.</li>
      </ul>
    </>
  ),
},
{
  id: 10,
  title: "GitHub Actions – Deploy to S3 + CloudFront",
  path: "/cloud/github-actions-s3-cloudfront",
  explanation: (
    <>
      <p>
        <strong>GitHub Actions CD (Continuous Deployment)</strong> to 
        <strong> AWS S3 (Simple Storage Service)</strong> and 
        <strong> AWS CloudFront (Content Delivery Network)</strong> is used for 
        deploying static websites such as React, Next.js static builds, or any 
        frontend assets.  
        This setup ensures fast, global delivery using CloudFront caching.
      </p>

      <h2>Why Deploy to S3 + CloudFront?</h2>
      <ul>
        <li>Ideal for frontend apps (React, Vue, Angular, Next.js static).</li>
        <li>CloudFront provides global CDN speed + caching.</li>
        <li>No server required → fully serverless hosting.</li>
        <li>Highly scalable and extremely cheap.</li>
        <li>Automatic cache invalidation ensures users see new updates instantly.</li>
      </ul>

      <h2>1. Deployment Steps (Overview)</h2>
      <ol>
        <li>Create an S3 bucket and enable static website hosting.</li>
        <li>Create a CloudFront distribution linked to the S3 bucket.</li>
        <li>Generate an IAM (Identity & Access Management) user with S3 + CloudFront permissions.</li>
        <li>Add IAM credentials to GitHub Secrets.</li>
        <li>Create a GitHub Actions workflow to upload files to S3.</li>
        <li>Trigger CloudFront cache invalidation after upload.</li>
      </ol>

      <h2>2. Example GitHub Actions Workflow</h2>

      <pre>
{`name: Deploy to S3 and CloudFront

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Build Production Files
        run: npm run build

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_KEY }}
          aws-region: ap-south-1

      - name: Upload to S3 (Simple Storage Service)
        run: aws s3 sync ./build s3://\${{ secrets.S3_BUCKET }} --delete

      - name: CloudFront Cache Invalidation
        run: |
          aws cloudfront create-invalidation --distribution-id \${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"`
}
      </pre>

      <h2>3. IAM (Identity & Access Management) Permissions Required</h2>
      <ul>
        <li><code>s3:PutObject</code></li>
        <li><code>s3:DeleteObject</code></li>
        <li><code>s3:ListBucket</code></li>
        <li><code>cloudfront:CreateInvalidation</code></li>
      </ul>

      <h2>4. Secret Management</h2>
      <p>Store the following in GitHub Secrets:</p>
      <ul>
        <li><strong>AWS_ACCESS_KEY</strong></li>
        <li><strong>AWS_SECRET_KEY</strong></li>
        <li><strong>S3_BUCKET</strong></li>
        <li><strong>CLOUDFRONT_DISTRIBUTION_ID</strong></li>
      </ul>

      <h2>5. Common Errors & Fixes</h2>
      <ul>
        <li>
          <strong>Error:</strong> Access Denied (403)  
          <br />
          <strong>Fix:</strong> Check IAM user permissions for S3 bucket.
        </li>

        <li>
          <strong>Error:</strong> Cache not updating  
          <br />
          <strong>Fix:</strong> Ensure CloudFront invalidation step is added.
        </li>

        <li>
          <strong>Error:</strong> Bucket not found  
          <br />
          <strong>Fix:</strong> Make sure bucket name is correct in secrets.
        </li>
      </ul>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong>Q:</strong> What is S3 (Simple Storage Service)?  
          <br />
          <strong>A:</strong> A scalable AWS storage service used to host static files, including frontend websites.
        </li>

        <li>
          <strong>Q:</strong> What is CloudFront?  
          <br />
          <strong>A:</strong> A global CDN (Content Delivery Network) that speeds up content delivery using caching.
        </li>

        <li>
          <strong>Q:</strong> Why do we use CloudFront invalidation?  
          <br />
          <strong>A:</strong> To remove old cached files so users see the latest updates instantly.
        </li>

        <li>
          <strong>Q:</strong> Why use GitHub Actions for S3 deployment?  
          <br />
          <strong>A:</strong> It automates deployment on every push, reducing manual steps.
        </li>

        <li>
          <strong>Q:</strong> What permissions are required for S3 deployment?  
          <br />
          <strong>A:</strong> S3 object permissions + CloudFront invalidation permissions.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>GitHub Actions automates deployment to AWS S3 + CloudFront.</li>
        <li>Perfect for React, Vue, Angular, and static Next.js apps.</li>
        <li>CloudFront makes your site extremely fast globally.</li>
        <li>Cache invalidation ensures instant updates.</li>
        <li>Very cheap + highly scalable → great for production apps.</li>
      </ul>
    </>
  ),
},
{
  id: 11,
  title: "GitHub Actions – Docker Workflow",
  path: "/cloud/github-actions-docker",
  explanation: (
    <>
      <p>
        <strong>GitHub Actions Docker Workflow</strong> allows you to 
        automatically build Docker images, tag them, push them to a container 
        registry like <strong>Docker Hub</strong> or 
        <strong> AWS ECR (Elastic Container Registry)</strong>, and even deploy 
        them to servers or Kubernetes.  
        This is a key part of CI/CD for microservices and container-based apps.
      </p>

      <h2>Why Use Docker Workflows?</h2>
      <ul>
        <li>Same environment everywhere → no “works on my machine” issues.</li>
        <li>Automated image creation on every push.</li>
        <li>Supports production deployments via registries.</li>
        <li>Used heavily in microservices, Kubernetes, and DevOps pipelines.</li>
      </ul>

      <h2>1. Docker Workflow Steps (Overview)</h2>
      <ol>
        <li>Write a Dockerfile for your application.</li>
        <li>Login to Docker Hub or AWS ECR inside GitHub Actions.</li>
        <li>Build a Docker image using the GitHub Actions runner.</li>
        <li>Tag the image (latest / version / commit hash).</li>
        <li>Push the image to Docker Hub or ECR.</li>
        <li>(Optional) Deploy container automatically to EC2 / ECS / Kubernetes.</li>
      </ol>

      <h2>2. Example GitHub Actions Workflow (Docker Hub)</h2>

      <pre>
{`name: Docker CI Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  docker-build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build Docker Image
        run: docker build -t myapp:latest .

      - name: Tag Image
        run: docker tag myapp:latest \${{ secrets.DOCKERHUB_USERNAME }}/myapp:latest

      - name: Push to Docker Hub
        run: docker push \${{ secrets.DOCKERHUB_USERNAME }}/myapp:latest`}
      </pre>

      <h2>3. Example Workflow (AWS ECR – Elastic Container Registry)</h2>

      <pre>
{`name: Docker Push to ECR

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_KEY }}
          aws-region: ap-south-1

      - name: Login to ECR
        run: |
          aws ecr get-login-password --region ap-south-1 | docker login \
            --username AWS \
            --password-stdin \${{ secrets.ECR_URL }}

      - name: Build Docker Image
        run: docker build -t myapp .

      - name: Tag Image
        run: docker tag myapp:latest \${{ secrets.ECR_URL }}/myapp:latest

      - name: Push Image to ECR
        run: docker push \${{ secrets.ECR_URL }}/myapp:latest`}
      </pre>

      <h2>4. Secret Management</h2>
      <p>Add these to GitHub Secrets:</p>
      <ul>
        <li><strong>DOCKERHUB_USERNAME</strong></li>
        <li><strong>DOCKERHUB_TOKEN</strong></li>
        <li><strong>AWS_ACCESS_KEY</strong></li>
        <li><strong>AWS_SECRET_KEY</strong></li>
        <li><strong>ECR_URL</strong></li>
      </ul>

      <h2>5. Common Errors & Fixes</h2>
      <ul>
        <li>
          <strong>Error:</strong> Authentication failed  
          <br />
          <strong>Fix:</strong> Use a Docker Hub PAT (Personal Access Token).
        </li>

        <li>
          <strong>Error:</strong> "Repository does not exist"  
          <br />
          <strong>Fix:</strong> Create repo on Docker Hub / ECR before pushing.
        </li>

        <li>
          <strong>Error:</strong> Docker build fails  
          <br />
          <strong>Fix:</strong> Check Dockerfile paths and dependency installation.
        </li>
      </ul>

      <h2>Interview Questions & Answers</h2>

      <ul>
        <li>
          <strong>Q:</strong> What is a Docker image?  
          <br />
          <strong>A:</strong> A packaged snapshot of your app containing code + runtime + dependencies.
        </li>

        <li>
          <strong>Q:</strong> What is Docker Hub?  
          <br />
          <strong>A:</strong> A public container registry to store Docker images.
        </li>

        <li>
          <strong>Q:</strong> What is ECR (Elastic Container Registry)?  
          <br />
          <strong>A:</strong> AWS-managed private registry for storing Docker images.
        </li>

        <li>
          <strong>Q:</strong> Why automate Docker builds using GitHub Actions?  
          <br />
          <strong>A:</strong> Ensures consistent image creation and faster deployments.
        </li>

        <li>
          <strong>Q:</strong> What is tagging in Docker?  
          <br />
          <strong>A:</strong> Assigning a version or label (e.g., latest, v1.0) to an image.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Automatically builds Docker images inside GitHub Actions.</li>
        <li>Supports pushing to Docker Hub or AWS ECR.</li>
        <li>Makes container-based deployments fast and consistent.</li>
        <li>Essential for microservices and Kubernetes pipelines.</li>
        <li>Fully automated → no manual Docker build or push required.</li>
      </ul>
    </>
  ),
},
{
  id: 12,
  title: "EC2 – Deploying Node.js/React",
  path: "/cloud/aws-ec2",
  explanation: (
    <>
      <p>
        <strong>AWS EC2 (Elastic Compute Cloud)</strong> is a virtual server in the 
        cloud where you can deploy applications such as <strong>Node.js</strong> 
        backends or <strong>React</strong> frontends.  
        This guide covers launching an EC2 instance, connecting via SSH, installing 
        necessary tools, and configuring a production-ready setup.
      </p>

      <h2>Why Deploy on EC2?</h2>
      <ul>
        <li>Full control over server configuration.</li>
        <li>Run backend (Node.js, Express) and frontend (React) apps on one instance.</li>
        <li>Supports production setups with Nginx reverse proxy and PM2 (Process Manager 2).</li>
        <li>Scalable: you can upgrade instance type as traffic grows.</li>
        <li>Allows firewall (security group) rules to control access.</li>
      </ul>

      <h2>1. Launch EC2 Instance</h2>
      <ol>
        <li>Go to AWS EC2 console → Launch Instance.</li>
        <li>Choose Amazon Linux 2 / Ubuntu AMI.</li>
        <li>Select instance type (t2.micro for free tier).</li>
        <li>Configure network and security groups (allow ports 22, 80, 443).</li>
        <li>Attach or create a key pair for SSH access.</li>
      </ol>

      <h2>2. Connect via SSH (Secure Shell)</h2>
      <pre>
{`ssh -i "your-key.pem" ec2-user@<EC2_PUBLIC_IP>`}
      </pre>
      <ul>
        <li>Ensure your key file has correct permissions: <code>chmod 400 your-key.pem</code></li>
        <li>Use public IP or Elastic IP of the EC2 instance.</li>
      </ul>

      <h2>3. Install Node.js & Nginx</h2>
      <pre>
{`# Update system
sudo yum update -y

# Install Node.js (example: Node 18)
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Install Nginx
sudo amazon-linux-extras install nginx1 -y
sudo systemctl start nginx
sudo systemctl enable nginx`}
      </pre>

      <h2>4. Setup React & Backend</h2>
      <ul>
        <li>Upload React build to EC2 or serve via Nginx.</li>
        <li>Deploy Node.js backend using PM2.</li>
        <li>Configure Nginx as reverse proxy for backend API:</li>
      </ul>

      <pre>
{`server {
    listen 80;

    server_name your-domain.com;

    location / {
        root /home/ec2-user/react-app/build;
        index index.html index.htm;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`}
      </pre>

      <h2>5. Use PM2 (Process Manager 2)</h2>
      <ul>
        <li>Install PM2 globally: <code>npm install -g pm2</code></li>
        <li>Start backend: <code>pm2 start server.js</code></li>
        <li>Enable auto-start on reboot: <code>pm2 startup</code></li>
        <li>Save process list: <code>pm2 save</code></li>
      </ul>

      <h2>6. Firewall & Security Groups</h2>
      <ul>
        <li>Open ports: 22 (SSH), 80 (HTTP), 443 (HTTPS).</li>
        <li>Restrict SSH access to your IP.</li>
        <li>Use HTTPS with SSL certificates for production.</li>
      </ul>

      <h2>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is EC2 (Elastic Compute Cloud)?  
          <br />
          <strong>A:</strong> Virtual server in AWS cloud to host apps with full control over OS and configuration.
        </li>
        <li>
          <strong>Q:</strong> Why use PM2 for Node.js?  
          <br />
          <strong>A:</strong> Keeps app alive, auto-restarts on crashes, and enables logging & monitoring.
        </li>
        <li>
          <strong>Q:</strong> Why use Nginx with Node.js?  
          <br />
          <strong>A:</strong> Reverse proxy, static file serving (React), load balancing, SSL termination.
        </li>
        <li>
          <strong>Q:</strong> How do you secure EC2 instance?  
          <br />
          <strong>A:</strong> Use SSH key pairs, security groups, open only necessary ports, enable HTTPS.
        </li>
        <li>
          <strong>Q:</strong> How to deploy React frontend?  
          <br />
          <strong>A:</strong> Build static files and serve via Nginx or S3 + CloudFront.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>EC2 lets you deploy Node.js and React apps with full control.</li>
        <li>PM2 ensures backend runs reliably; Nginx serves frontend & acts as reverse proxy.</li>
        <li>Security groups and SSH key pairs protect your server.</li>
        <li>Supports production-ready deployment with scaling potential.</li>
        <li>Great starting point before moving to ECS, Kubernetes, or serverless.</li>
      </ul>
    </>
  ),
},
{
  id: 13,
  title: "Elastic Beanstalk – One-Click Deploy",
  path: "/cloud/aws-elastic-beanstalk",
  explanation: (
    <>
      <p>
        <strong>AWS Elastic Beanstalk</strong> is a Platform-as-a-Service (PaaS) 
        that allows you to deploy applications quickly without managing the 
        underlying infrastructure. You can deploy <strong>Node.js</strong>, 
        <strong>React</strong>, Python, Java, or Docker apps with minimal setup.  
        Elastic Beanstalk handles environment provisioning, scaling, monitoring, 
        and rolling updates automatically.
      </p>

      <h2>Why Use Elastic Beanstalk?</h2>
      <ul>
        <li>One-click deployment → no need to manually configure EC2, load balancers, or networking.</li>
        <li>Automatic scaling based on traffic.</li>
        <li>Built-in monitoring and log management.</li>
        <li>Supports rolling updates with zero downtime.</li>
        <li>Integrates with GitHub Actions for CI/CD.</li>
      </ul>

      <h2>1. Deployment Steps (Overview)</h2>
      <ol>
        <li>Login to AWS Management Console → Elastic Beanstalk → Create Application.</li>
        <li>Choose application platform (Node.js, Docker, etc.) and platform version.</li>
        <li>Upload your source code (ZIP or WAR) or connect via GitHub repository.</li>
        <li>Elastic Beanstalk creates an environment with EC2, load balancer, and security groups.</li>
        <li>Monitor deployment progress via dashboard.</li>
        <li>Access your application via auto-generated domain.</li>
      </ol>

      <h2>2. Environment & Scaling</h2>
      <ul>
        <li>Elastic Beanstalk automatically provisions EC2 instances and load balancer.</li>
        <li>Auto Scaling adjusts the number of instances based on traffic.</li>
        <li>Health checks ensure instances are running properly; unhealthy instances are replaced.</li>
      </ul>

      <h2>3. Logs & Monitoring</h2>
      <ul>
        <li>View application logs directly in the console.</li>
        <li>Set up CloudWatch alarms for CPU, memory, or other metrics.</li>
        <li>Use enhanced health reporting for detailed diagnostics.</li>
      </ul>

      <h2>4. Rolling Updates & Version Management</h2>
      <ul>
        <li>Deploy new versions without downtime using rolling updates.</li>
        <li>Rollback to previous versions if the deployment fails.</li>
        <li>Elastic Beanstalk maintains application version history automatically.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS Elastic Beanstalk?  
          <br />
          <strong>A:</strong> A PaaS service for deploying applications with minimal infrastructure management.
        </li>
        <li>
          <strong>Q:</strong> How does Elastic Beanstalk handle scaling?  
          <br />
          <strong>A:</strong> Uses Auto Scaling to automatically increase or decrease EC2 instances based on traffic.
        </li>
        <li>
          <strong>Q:</strong> What are rolling updates?  
          <br />
          <strong>A:</strong> Deploys new versions gradually to avoid downtime and allows rollback if needed.
        </li>
        <li>
          <strong>Q:</strong> Can Elastic Beanstalk integrate with CI/CD pipelines?  
          <br />
          <strong>A:</strong> Yes, it can integrate with GitHub Actions, CodePipeline, or other CI/CD tools.
        </li>
        <li>
          <strong>Q:</strong> Does Elastic Beanstalk require manual server setup?  
          <br />
          <strong>A:</strong> No, it automatically provisions servers, load balancers, and security groups.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Elastic Beanstalk simplifies deployment with minimal manual configuration.</li>
        <li>Automatically handles scaling, monitoring, and version management.</li>
        <li>Supports zero-downtime rolling updates and easy rollback.</li>
        <li>Integrates seamlessly with CI/CD pipelines like GitHub Actions.</li>
        <li>Ideal for developers who want fast deployment without managing infrastructure.</li>
      </ul>
    </>
  ),
},
{
  id: 14,
  title: "S3 – Static Hosting & Storage",
  path: "/cloud/aws-s3",
  explanation: (
    <>
      <p>
        <strong>AWS S3 (Simple Storage Service)</strong> is an object storage service 
        that allows you to store files, images, videos, and host static websites like 
        <strong> React builds</strong>. S3 provides durable, scalable, and secure storage 
        with fine-grained access control.
      </p>

      <h2>Why Use S3 for Hosting?</h2>
      <ul>
        <li>Host static frontends (React, Angular, Vue) with high availability.</li>
        <li>Durable storage for application assets, images, or backups.</li>
        <li>Scalable without worrying about servers or infrastructure.</li>
        <li>Integrates easily with CloudFront for CDN distribution and caching.</li>
        <li>Cost-effective pay-as-you-go model.</li>
      </ul>

      <h2>1. Uploading React Build to S3</h2>
      <ol>
        <li>Build React app using <code>npm run build</code>.</li>
        <li>Create an S3 bucket → choose a unique name.</li>
        <li>Enable static website hosting in bucket properties.</li>
        <li>Upload contents of <code>build/</code> folder to S3.</li>
        <li>Set bucket policy for public read access (or use CloudFront for restricted access).</li>
      </ol>

      <h2>2. Folder Structure & Best Practices</h2>
      <ul>
        <li>Organize assets inside folders like <code>css/</code>, <code>js/</code>, <code>images/</code>.</li>
        <li>Keep <code>index.html</code> in the root for static hosting.</li>
        <li>Use versioned folders for builds to simplify rollback.</li>
      </ul>

      <h2>3. Public Access & Permissions</h2>
      <ul>
        <li>Set <strong>Bucket Policy</strong> or <strong>Object ACLs</strong> to allow public access if hosting a website.</li>
        <li>For secure storage, restrict access via IAM roles and signed URLs.</li>
        <li>Enable <strong>Block Public Access</strong> settings carefully based on requirements.</li>
      </ul>

      <h2>4. Integrating with CloudFront (CDN)</h2>
      <ul>
        <li>Distribute S3 content via CloudFront to reduce latency globally.</li>
        <li>Supports caching, HTTPS, custom domains, and invalidation for updates.</li>
        <li>Connect S3 bucket as CloudFront origin.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS S3 used for?  
          <br />
          <strong>A:</strong> Object storage for files, images, videos, static websites, and backups.
        </li>
        <li>
          <strong>Q:</strong> How do you host a React app on S3?  
          <br />
          <strong>A:</strong> Build the app → upload <code>build/</code> folder contents → enable static website hosting → configure bucket policy or CloudFront.
        </li>
        <li>
          <strong>Q:</strong> How to make S3 objects public?  
          <br />
          <strong>A:</strong> Set proper bucket policy or object ACLs; alternatively, use CloudFront signed URLs for restricted access.
        </li>
        <li>
          <strong>Q:</strong> Why use CloudFront with S3?  
          <br />
          <strong>A:</strong> CDN for global content delivery, caching, HTTPS, and performance optimization.
        </li>
        <li>
          <strong>Q:</strong> Can S3 serve dynamic content?  
          <br />
          <strong>A:</strong> No, S3 is for static content; dynamic backend APIs require EC2, Lambda, or other compute services.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>AWS S3 provides highly durable and scalable object storage.</li>
        <li>Ideal for hosting static React, Angular, or Vue apps.</li>
        <li>Folder structure, permissions, and bucket policies are crucial for security and accessibility.</li>
        <li>Integrate with CloudFront to improve performance and global reach.</li>
        <li>Use versioning and caching strategies for efficient updates and rollback.</li>
      </ul>
    </>
  ),
},
{
  id: 15,
  title: "EBS – Elastic Block Storage",
  path: "/cloud/aws-ebs",
  explanation: (
    <>
      <p>
        <strong>AWS EBS (Elastic Block Store)</strong> provides persistent block-level storage volumes 
        for use with EC2 instances. Unlike S3 (object storage), EBS behaves like a virtual hard drive 
        attached to your instance, suitable for databases, applications, and system files.
      </p>

      <h2>Why Use EBS?</h2>
      <ul>
        <li>Persistent storage: data remains even if the EC2 instance is stopped.</li>
        <li>High-performance block storage for databases, applications, and OS files.</li>
        <li>Supports snapshots for backups and disaster recovery.</li>
        <li>Flexible resizing and volume type selection based on workload needs.</li>
        <li>Secure with encryption at rest and in transit.</li>
      </ul>

      <h2>1. Volume Types</h2>
      <ul>
        <li><strong>General Purpose SSD (gp3/gp2)</strong>: Balanced performance, good for most workloads.</li>
        <li><strong>Provisioned IOPS SSD (io2/io1)</strong>: High-performance for critical databases.</li>
        <li><strong>Throughput Optimized HDD (st1)</strong>: Big data and sequential workloads.</li>
        <li><strong>Cold HDD (sc1)</strong>: Low-cost storage for infrequently accessed data.</li>
      </ul>

      <h2>2. Attaching & Detaching Volumes</h2>
      <ol>
        <li>Create an EBS volume in the desired availability zone.</li>
        <li>Attach volume to a running EC2 instance.</li>
        <li>Format and mount the volume inside the OS (Linux or Windows).</li>
        <li>To detach, unmount first and then detach from EC2.</li>
      </ol>

      <h2>3. Resizing & Performance Tuning</h2>
      <ul>
        <li>Volumes can be resized without stopping the EC2 instance.</li>
        <li>Use <code>growpart</code> and <code>resize2fs</code> (Linux) to expand filesystem.</li>
        <li>Choose IOPS or throughput optimized volume type based on workload.</li>
        <li>Monitor performance metrics using CloudWatch.</li>
      </ul>

      <h2>4. Snapshots & Backup</h2>
      <ul>
        <li>Take point-in-time snapshots of EBS volumes for backup.</li>
        <li>Snapshots are incremental → only changed blocks are saved.</li>
        <li>Restore snapshots to create new volumes in any AZ.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is EBS (Elastic Block Store)?  
          <br />
          <strong>A:</strong> Persistent block storage for EC2 instances, behaves like a virtual hard drive.
        </li>
        <li>
          <strong>Q:</strong> Difference between EBS and S3?  
          <br />
          <strong>A:</strong> EBS is block storage for EC2; S3 is object storage for files, media, or static websites.
        </li>
        <li>
          <strong>Q:</strong> How do you resize an EBS volume?  
          <br />
          <strong>A:</strong> Modify the volume in AWS Console or CLI → expand filesystem on the instance.
        </li>
        <li>
          <strong>Q:</strong> What are the EBS volume types?  
          <br />
          <strong>A:</strong> General Purpose SSD (gp2/gp3), Provisioned IOPS SSD (io1/io2), Throughput HDD (st1), Cold HDD (sc1).
        </li>
        <li>
          <strong>Q:</strong> How do snapshots work?  
          <br />
          <strong>A:</strong> Incremental backups of EBS volumes that can be restored to new volumes.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>EBS provides reliable, high-performance block storage for EC2 instances.</li>
        <li>Supports multiple volume types for different workloads.</li>
        <li>Volumes can be attached/detached, resized, and backed up via snapshots.</li>
        <li>Secure and persistent storage ideal for databases, system files, and applications.</li>
        <li>Monitoring, tuning, and correct volume selection ensure optimal performance.</li>
      </ul>
    </>
  ),
},
{
  id: 16,
  title: "EBS Snapshots – Backup & Recovery",
  path: "/cloud/aws-ebs-snapshots",
  explanation: (
    <>
      <p>
        <strong>AWS EBS Snapshots</strong> are point-in-time backups of your EBS (Elastic Block Store) 
        volumes. Snapshots are stored in Amazon S3 and provide a reliable way to backup, restore, 
        and recover data for EC2 instances and applications.
      </p>

      <h2>Why Use EBS Snapshots?</h2>
      <ul>
        <li>Protect against data loss due to accidental deletion or corruption.</li>
        <li>Enable disaster recovery by restoring volumes quickly.</li>
        <li>Snapshots are incremental → save storage costs by only recording changed blocks.</li>
        <li>Can create Amazon Machine Images (AMIs) for launching identical EC2 instances.</li>
        <li>Support automation and scheduling for regular backups.</li>
      </ul>

      <h2>1. Taking Snapshots</h2>
      <ol>
        <li>Go to the AWS Console → EBS → Volumes.</li>
        <li>Select the volume → click <strong>Create Snapshot</strong>.</li>
        <li>Provide a descriptive name and tags for identification.</li>
        <li>Optionally, automate snapshots using AWS Backup or Lambda scripts.</li>
      </ol>

      <h2>2. Restoring Volumes from Snapshots</h2>
      <ol>
        <li>Go to AWS Console → Snapshots → select the snapshot.</li>
        <li>Click <strong>Create Volume</strong> → select AZ and volume type.</li>
        <li>Attach the new volume to an EC2 instance.</li>
        <li>Mount and format if needed, then verify data integrity.</li>
      </ol>

      <h2>3. Creating AMIs from Snapshots</h2>
      <ul>
        <li>Snapshots can be used to create an AMI (Amazon Machine Image).</li>
        <li>AMIs allow launching multiple EC2 instances with the same configuration.</li>
        <li>Useful for scaling or replicating environments quickly.</li>
      </ul>

      <h2>4. Disaster Recovery Strategy</h2>
      <ul>
        <li>Schedule regular snapshots to reduce data loss risk.</li>
        <li>Use cross-region snapshots for redundancy.</li>
        <li>Combine snapshots with automated AMI deployment for fast recovery.</li>
        <li>Test recovery procedures periodically to ensure reliability.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is an EBS snapshot?  
          <br />
          <strong>A:</strong> A point-in-time backup of an EBS volume stored in S3 for recovery or replication.
        </li>
        <li>
          <strong>Q:</strong> Are EBS snapshots full backups?  
          <br />
          <strong>A:</strong> No, snapshots are incremental. Only changed blocks since the last snapshot are stored.
        </li>
        <li>
          <strong>Q:</strong> How do you restore an EBS volume from a snapshot?  
          <br />
          <strong>A:</strong> Create a new volume from the snapshot and attach it to the EC2 instance.
        </li>
        <li>
          <strong>Q:</strong> Can snapshots be copied across regions?  
          <br />
          <strong>A:</strong> Yes, for disaster recovery and cross-region redundancy.
        </li>
        <li>
          <strong>Q:</strong> How are AMIs related to snapshots?  
          <br />
          <strong>A:</strong> AMIs use snapshots of root volumes to launch identical EC2 instances.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>EBS snapshots provide reliable backups for EC2 volumes.</li>
        <li>Incremental storage saves costs and enables efficient recovery.</li>
        <li>Use snapshots to create AMIs for replicating instances.</li>
        <li>Key part of disaster recovery strategy with cross-region replication.</li>
        <li>Regular snapshots and recovery testing ensure business continuity.</li>
      </ul>
    </>
  ),
},
{
  id: 17,
  title: "CloudFront – Global CDN",
  path: "/cloud/aws-cloudfront",
  explanation: (
    <>
      <p>
        <strong>AWS CloudFront</strong> is a global <strong>Content Delivery Network (CDN) </strong> 
        that caches and delivers content (websites, images, videos, APIs) from edge locations 
        closest to your users. It works seamlessly with S3, EC2, and other AWS services to 
        reduce latency and improve performance.
      </p>

      <h2>Why Use CloudFront?</h2>
      <ul>
        <li>Reduces latency by serving content from edge locations near users.</li>
        <li>Improves website speed and user experience globally.</li>
        <li>Supports HTTPS/SSL for secure content delivery.</li>
        <li>Offloads traffic from origin servers like S3 or EC2.</li>
        <li>Provides caching, versioning, and invalidation control for content updates.</li>
      </ul>

      <h2>1. Linking CloudFront with S3</h2>
      <ol>
        <li>Create an S3 bucket and upload your website or app files.</li>
        <li>Set proper bucket permissions (public access or signed URLs).</li>
        <li>Create a CloudFront distribution and select the S3 bucket as the origin.</li>
        <li>Configure caching behavior and TTL (time-to-live) settings.</li>
        <li>Deploy the distribution → get a CloudFront domain (e.g., d123.cloudfront.net).</li>
      </ol>

      <h2>2. Custom Domain & SSL</h2>
      <ul>
        <li>Use Route 53 or any DNS provider to point your domain to the CloudFront distribution.</li>
        <li>Enable HTTPS using AWS Certificate Manager (ACM) to issue SSL certificates.</li>
        <li>Force HTTPS redirect to ensure secure connections for all users.</li>
      </ul>

      <h2>3. Cache Invalidation</h2>
      <p>
        When you update content in S3, CloudFront caches may still serve old versions. 
        Use invalidation to refresh cached files:
      </p>
      <ul>
        <li>Create invalidation paths (e.g., <code>/index.html</code>, <code>/static/*</code>).</li>
        <li>Invalidations propagate globally across edge locations.</li>
        <li>Helps deliver latest content instantly without changing the CloudFront domain.</li>
      </ul>

      <h2>4. Performance & Cost Optimization</h2>
      <ul>
        <li>Enable caching for static assets (JS, CSS, images) to reduce origin hits.</li>
        <li>Use gzip or Brotli compression for faster transfer.</li>
        <li>Monitor usage with CloudFront metrics in CloudWatch.</li>
        <li>Use regional edge caches to optimize delivery further and reduce costs.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is CloudFront?  
          <br />
          <strong>A:</strong> AWS CloudFront is a global CDN that caches content at edge locations for faster delivery.
        </li>
        <li>
          <strong>Q:</strong> How does CloudFront improve performance?  
          <br />
          <strong>A:</strong> By serving content from the nearest edge location, reducing latency.
        </li>
        <li>
          <strong>Q:</strong> How do you connect CloudFront to an S3 bucket?  
          <br />
          <strong>A:</strong> Set S3 as the origin in a CloudFront distribution and configure permissions.
        </li>
        <li>
          <strong>Q:</strong> What is cache invalidation in CloudFront?  
          <br />
          <strong>A:</strong> Process of removing outdated cached content from edge locations to serve updated files.
        </li>
        <li>
          <strong>Q:</strong> How do you enable HTTPS with CloudFront?  
          <br />
          <strong>A:</strong> Attach an SSL certificate from AWS Certificate Manager (ACM) and configure HTTPS on the distribution.
        </li>
        <li>
          <strong>Q:</strong> Can CloudFront be used with custom domains?  
          <br />
          <strong>A:</strong> Yes, using Route 53 or other DNS providers to point your domain to the CloudFront distribution.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>CloudFront is a global CDN for fast, secure content delivery.</li>
        <li>Reduces latency by caching content at edge locations.</li>
        <li>Works with S3, EC2, and custom domains.</li>
        <li>Supports HTTPS/SSL, cache invalidation, and performance optimization.</li>
        <li>Essential for modern web apps, static websites, and global applications.</li>
      </ul>
    </>
  ),
},
{
  id: 18,
  title: "Route 53 – Domains & DNS",
  path: "/cloud/aws-route53",
  explanation: (
    <>
      <p>
        <strong>AWS Route 53</strong> is a highly available and scalable <strong>Domain Name System (DNS) </strong> 
        web service. It translates domain names like <code>example.com</code> into IP addresses and routes 
        users to AWS services like CloudFront, EC2, S3, or any other endpoint reliably.
      </p>

      <h2>Why Use Route 53?</h2>
      <ul>
        <li>Manage domain registration, DNS routing, and health checks in one service.</li>
        <li>Highly reliable global DNS with low latency resolution.</li>
        <li>Integrates easily with CloudFront, S3, EC2, ELB, and other AWS services.</li>
        <li>Supports failover routing, geolocation routing, and latency-based routing.</li>
        <li>Scalable for millions of queries per second without performance degradation.</li>
      </ul>

      <h2>1. Domain & Hosted Zone Setup</h2>
      <ol>
        <li>Register a new domain in Route 53 or use an existing one.</li>
        <li>Create a <strong>Hosted Zone</strong> for the domain.</li>
        <li>Add DNS records (A, AAAA, CNAME, MX, TXT) as required.</li>
        <li>Configure TTL (Time to Live) to control caching of DNS responses.</li>
      </ol>

      <h2>2. Connecting Route 53 to AWS Services</h2>
      <ul>
        <li>
          <strong>CloudFront:</strong> Use <strong>Alias Records</strong> to point your domain to the CloudFront distribution.
        </li>
        <li>
          <strong>EC2:</strong> Create A (IPv4) or AAAA (IPv6) records pointing to Elastic IPs.
        </li>
        <li>
          <strong>S3 Static Website:</strong> Use alias records to map your domain directly to the S3 bucket endpoint.
        </li>
      </ul>

      <h2>3. Subdomains & Routing</h2>
      <ul>
        <li>Create subdomains like <code>app.example.com</code> or <code>blog.example.com</code>.</li>
        <li>Use different routing policies for subdomains: simple, failover, geolocation, weighted, or latency-based.</li>
        <li>Supports multi-region deployments with traffic distribution.</li>
      </ul>

      <h2>4. Health Checks & Failover</h2>
      <ul>
        <li>Monitor endpoints for availability.</li>
        <li>Automatically failover to healthy endpoints if the primary fails.</li>
        <li>Helps maintain high availability for critical applications.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is Route 53?  
          <br />
          <strong>A:</strong> AWS Route 53 is a scalable DNS and domain registration service.
        </li>

        <li>
          <strong>Q:</strong> What is an Alias Record?  
          <br />
          <strong>A:</strong> Alias Records allow pointing a domain or subdomain directly to AWS resources like CloudFront, S3, or ELB without using IP addresses.
        </li>

        <li>
          <strong>Q:</strong> Difference between A and AAAA records?  
          <br />
          <strong>A:</strong> A record maps to an IPv4 address; AAAA record maps to an IPv6 address.
        </li>

        <li>
          <strong>Q:</strong> How can you implement failover in Route 53?  
          <br />
          <strong>A:</strong> By using health checks and routing policies (failover routing) to switch traffic to healthy endpoints.
        </li>

        <li>
          <strong>Q:</strong> Can Route 53 manage subdomains?  
          <br />
          <strong>A:</strong> Yes, you can create subdomains and apply routing rules for them independently.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Route 53 manages domain registration, DNS routing, and health checks.</li>
        <li>Supports A/AAAA records, CNAME, and Alias for AWS services.</li>
        <li>Enables high availability with failover and health checks.</li>
        <li>Subdomains, geolocation, weighted, and latency-based routing supported.</li>
        <li>Essential for globally distributed applications and secure cloud setups.</li>
      </ul>
    </>
  ),
},
{
  id: 19,
  title: "RDS – PostgreSQL/MySQL",
  path: "/cloud/aws-rds",
  explanation: (
    <>
      <p>
        <strong>AWS RDS (Relational Database Service)</strong> allows you to run managed relational databases like <strong>PostgreSQL</strong> or <strong>MySQL</strong> in the cloud without worrying about hardware, patching, or backups. It provides high availability, security, and easy scalability for your applications.
      </p>

      <h2>Why Use RDS?</h2>
      <ul>
        <li>Fully managed → no need to handle OS or database maintenance.</li>
        <li>Automatic backups and snapshots for disaster recovery.</li>
        <li>Multi-AZ (Availability Zone) deployment ensures high availability.</li>
        <li>Secure access using VPC, security groups, and IAM roles.</li>
        <li>Scalable compute and storage to match your application needs.</li>
      </ul>

      <h2>1. Creating an RDS Instance</h2>
      <ol>
        <li>Go to AWS RDS console → click “Create database”.</li>
        <li>Select database engine: <strong>PostgreSQL</strong> or <strong>MySQL</strong>.</li>
        <li>Choose deployment type: Single-AZ (development) or Multi-AZ (production).</li>
        <li>Specify instance size (CPU, RAM) and storage type (general purpose or provisioned IOPS).</li>
        <li>Set master username and password.</li>
        <li>Enable automatic backups and optional monitoring.</li>
      </ol>

      <h2>2. Security Groups & Network</h2>
      <ul>
        <li>Attach a security group allowing inbound traffic only from your app servers (EC2 or Lambda).</li>
        <li>Use VPC subnets for network isolation.</li>
        <li>Optional: Enable SSL for encrypted connections.</li>
      </ul>

      <h2>3. Backups & Snapshots</h2>
      <ul>
        <li>Automatic backups are stored in S3 for point-in-time recovery.</li>
        <li>Manual snapshots can be taken anytime for extra safety.</li>
        <li>Useful for disaster recovery and migrating databases across regions.</li>
      </ul>

      <h2>4. Multi-AZ & High Availability</h2>
      <ul>
        <li>Multi-AZ deployments create a synchronous standby replica in another AZ.</li>
        <li>Automatic failover occurs if the primary instance fails.</li>
        <li>Ensures minimal downtime for critical applications.</li>
      </ul>

      <h2>5. Connecting Node.js to RDS</h2>
      <p>Use database client libraries like <code>pg</code> for PostgreSQL or <code>mysql2</code> for MySQL:</p>
      <pre>
{`// PostgreSQL example
const { Pool } = require('pg');
const pool = new Pool({
  host: 'your-rds-endpoint',
  user: 'master-username',
  password: 'your-password',
  database: 'dbname',
  port: 5432,
});
pool.query('SELECT NOW()', (err, res) => console.log(err, res.rows));`}
      </pre>

      <h2>6. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS RDS?  
          <br />
          <strong>A:</strong> Managed relational database service for PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server.
        </li>

        <li>
          <strong>Q:</strong> What is Multi-AZ in RDS?  
          <br />
          <strong>A:</strong> Deployment across two Availability Zones for automatic failover and high availability.
        </li>

        <li>
          <strong>Q:</strong> How do you secure RDS?  
          <br />
          <strong>A:</strong> Use VPC, security groups, IAM roles, SSL connections, and limit inbound traffic to application servers.
        </li>

        <li>
          <strong>Q:</strong> Difference between snapshots and automated backups?  
          <br />
          <strong>A:</strong> Automated backups are scheduled and support point-in-time recovery; snapshots are manual and stored until deleted.
        </li>

        <li>
          <strong>Q:</strong> How do you connect Node.js to RDS?  
          <br />
          <strong>A:</strong> Use a database client library (pg/mysql2) with host, user, password, database, and port.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>RDS provides fully managed PostgreSQL/MySQL databases in AWS.</li>
        <li>Supports automated backups, Multi-AZ high availability, and secure networking.</li>
        <li>Easy to connect from Node.js, Python, or any app using standard drivers.</li>
        <li>Reduces maintenance overhead while ensuring reliability, security, and scalability.</li>
        <li>Ideal for production-ready cloud applications requiring relational databases.</li>
      </ul>
    </>
  ),
},
{
  id: 20,
  title: "DynamoDB – NoSQL on AWS",
  path: "/cloud/aws-dynamodb",
  explanation: (
    <>
      <p>
        <strong>AWS DynamoDB</strong> is a fully managed <strong>NoSQL database</strong> service. 
        It provides fast, predictable performance with seamless scalability, ideal for applications 
        requiring low-latency data access at any scale.
      </p>

      <h2>Why Use DynamoDB?</h2>
      <ul>
        <li>Fully managed → no server management, automatic scaling.</li>
        <li>Single-digit millisecond latency for reads/writes.</li>
        <li>Supports key-value and document data models.</li>
        <li>Integrated with other AWS services like Lambda, API Gateway, and IAM.</li>
        <li>Automatic backups, point-in-time recovery, and high availability.</li>
      </ul>

      <h2>1. DynamoDB Tables & Partitions</h2>
      <ul>
        <li><strong>Tables:</strong> Store items (records) similar to rows in relational databases.</li>
        <li><strong>Partitions:</strong> Data is split across partitions for scalability; each partition has a maximum size limit.</li>
        <li><strong>Primary Key:</strong> Unique identifier for each item. Can be a <strong>Partition Key</strong> or <strong>Partition Key + Sort Key</strong> combination.</li>
      </ul>

      <h2>2. Read/Write Capacity Modes</h2>
      <ul>
        <li><strong>Provisioned Capacity:</strong> Specify the number of reads/writes per second; suitable for predictable workloads.</li>
        <li><strong>On-Demand Capacity:</strong> Automatically scales with traffic; pay per request; ideal for unpredictable workloads.</li>
        <li>Monitor throttling events to adjust capacity as needed.</li>
      </ul>

      <h2>3. Connecting via AWS SDK (Node.js Example)</h2>
      <pre>
{`// Install AWS SDK v3
npm install @aws-sdk/client-dynamodb

// Example code
const { DynamoDBClient, PutItemCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });

// Put an item
const putParams = {
  TableName: "Users",
  Item: {
    "UserID": { S: "123" },
    "Name": { S: "Alice" },
    "Email": { S: "alice@example.com" }
  }
};
await client.send(new PutItemCommand(putParams));

// Get an item
const getParams = {
  TableName: "Users",
  Key: { "UserID": { S: "123" } }
};
const result = await client.send(new GetItemCommand(getParams));
console.log(result.Item);`}
      </pre>

      <h2>4. Best Practices & Benefits</h2>
      <ul>
        <li>Use <strong>Partition Key</strong> wisely to avoid hot partitions.</li>
        <li>Enable <strong>Auto Scaling</strong> for dynamic workloads.</li>
        <li>Use Global Secondary Indexes (GSI) for flexible queries.</li>
        <li>Highly available and durable by default across multiple AZs.</li>
        <li>Pay only for what you use → cost-effective for varying workloads.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is DynamoDB?  
          <br />
          <strong>A:</strong> Fully managed NoSQL database service by AWS with low-latency, scalable, and serverless architecture.
        </li>

        <li>
          <strong>Q:</strong> Difference between DynamoDB and RDS?  
          <br />
          <strong>A:</strong> RDS is relational SQL DB; DynamoDB is NoSQL key-value/document DB, scalable horizontally with flexible schema.
        </li>

        <li>
          <strong>Q:</strong> What are Partition Keys and Sort Keys?  
          <br />
          <strong>A:</strong> Partition Key uniquely identifies data partition; Sort Key allows multiple items per partition with ordered queries.
        </li>

        <li>
          <strong>Q:</strong> What are read/write capacity modes?  
          <br />
          <strong>A:</strong> Provisioned (fixed throughput) vs On-Demand (scales automatically based on usage).
        </li>

        <li>
          <strong>Q:</strong> How do you connect Node.js to DynamoDB?  
          <br />
          <strong>A:</strong> Using AWS SDK for JavaScript (v2 or v3) with credentials, region, and DynamoDB client commands.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>DynamoDB is ideal for fast, scalable NoSQL workloads in AWS.</li>
        <li>Supports key-value and document data models.</li>
        <li>Fully managed, highly available, and integrates with other AWS services.</li>
        <li>Use partition keys and indexes for efficient querying.</li>
        <li>On-Demand and Provisioned capacity allow cost optimization for different workloads.</li>
      </ul>
    </>
  ),
},
{
  id: 21,
  title: "IAM – Users, Roles, Policies",
  path: "/cloud/aws-iam",
  explanation: (
    <>
      <p>
        <strong>AWS IAM (Identity and Access Management)</strong> allows you to securely control access to AWS services and resources. 
        You can create <strong>users</strong>, <strong>roles</strong>, and <strong>policies</strong> to implement fine-grained access management, enforce security best practices, and enable multi-factor authentication (MFA).
      </p>

      <h2>Why IAM?</h2>
      <ul>
        <li>Securely manage access to AWS resources without sharing root credentials.</li>
        <li>Grant least-privilege permissions → users can only perform necessary actions.</li>
        <li>Enable temporary access with roles → ideal for applications, EC2, Lambda.</li>
        <li>MFA (Multi-Factor Authentication) adds an extra layer of security.</li>
        <li>Audit and monitor permissions using AWS CloudTrail.</li>
      </ul>

      <h2>1. Users</h2>
      <ul>
        <li>Represents a person or application that needs access to AWS.</li>
        <li>Can have console access (login) or programmatic access (access keys).</li>
        <li>Attach policies to users for permission management.</li>
      </ul>

      <h2>2. Roles</h2>
      <ul>
        <li>Temporary access for AWS services or external accounts.</li>
        <li>EC2, Lambda, or ECS can assume roles to access resources securely.</li>
        <li>No long-term credentials are needed; automatically rotates credentials.</li>
      </ul>

      <h2>3. Policies</h2>
      <ul>
        <li>JSON documents that define permissions for users, groups, or roles.</li>
        <li>Can allow or deny specific actions on specific resources.</li>
        <li>Use AWS managed policies or create custom policies.</li>
      </ul>

      <h2>4. Multi-Factor Authentication (MFA)</h2>
      <ul>
        <li>Adds extra security by requiring a time-based one-time password (TOTP) in addition to password.</li>
        <li>Recommended for all IAM users with console access.</li>
        <li>Helps protect critical accounts from unauthorized access.</li>
      </ul>

      <h2>5. Least Privilege Principle</h2>
      <ul>
        <li>Grant only the permissions required for a task.</li>
        <li>Regularly review and remove unnecessary permissions.</li>
        <li>Reduces risk of accidental or malicious actions.</li>
      </ul>

      <h2>6. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS IAM?  
          <br />
          <strong>A:</strong> Identity and Access Management service to securely control access to AWS resources.
        </li>

        <li>
          <strong>Q:</strong> Difference between IAM User and Role?  
          <br />
          <strong>A:</strong> User represents a person/app with permanent credentials; Role provides temporary credentials assumed by users/services.
        </li>

        <li>
          <strong>Q:</strong> What is a Policy in IAM?  
          <br />
          <strong>A:</strong> JSON document defining allowed or denied actions on AWS resources.
        </li>

        <li>
          <strong>Q:</strong> What is MFA and why use it?  
          <br />
          <strong>A:</strong> Multi-Factor Authentication adds an extra security layer using a temporary code along with a password.
        </li>

        <li>
          <strong>Q:</strong> What is the principle of least privilege?  
          <br />
          <strong>A:</strong> Grant only the minimum required permissions to reduce security risks.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>AWS IAM secures access to resources using users, roles, and policies.</li>
        <li>Temporary roles and MFA enhance security and reduce risk.</li>
        <li>Use least privilege principle to avoid over-permissioning.</li>
        <li>Essential for managing both human and application access in AWS.</li>
      </ul>
    </>
  ),
},
{
  id: 22,
  title: "VPC, Subnets & Networking",
  path: "/cloud/aws-vpc",
  explanation: (
    <>
      <p>
        <strong>AWS VPC (Virtual Private Cloud)</strong> allows you to launch AWS resources in a logically isolated network that you define. 
        You can control subnets, route tables, gateways, and security rules to design a secure and scalable cloud network.
      </p>

      <h2>Why VPC?</h2>
      <ul>
        <li>Isolates resources in a private network for better security.</li>
        <li>Allows custom IP address ranges, subnets, and routing.</li>
        <li>Supports hybrid architecture with VPN/Direct Connect.</li>
        <li>Integrates with security groups, NACLs, and IAM policies for controlled access.</li>
        <li>Essential for production-ready AWS deployments.</li>
      </ul>

      <h2>1. Subnets</h2>
      <ul>
        <li><strong>Public Subnet:</strong> Resources have direct access to the internet via an Internet Gateway (IGW).</li>
        <li><strong>Private Subnet:</strong> Resources cannot access the internet directly; often used for databases or backend services.</li>
        <li>Subnet CIDR ranges must be within the VPC’s CIDR block.</li>
      </ul>

      <h2>2. Route Tables</h2>
      <ul>
        <li>Defines how traffic flows within VPC subnets and to the internet.</li>
        <li>Public subnet route table → includes route to Internet Gateway.</li>
        <li>Private subnet route table → may include route to NAT Gateway for outbound internet.</li>
      </ul>

      <h2>3. NAT (Network Address Translation)</h2>
      <ul>
        <li>Allows private subnet resources to access the internet for updates or downloads without exposing them publicly.</li>
        <li>Provides security while maintaining outbound connectivity.</li>
      </ul>

      <h2>4. Internet Gateway (IGW)</h2>
      <ul>
        <li>Enables communication between the VPC and the internet.</li>
        <li>Attach IGW to the VPC and update route tables for public subnet traffic.</li>
      </ul>

      <h2>5. Best Practices</h2>
      <ul>
        <li>Separate public and private subnets for security.</li>
        <li>Use multiple Availability Zones (AZs) for high availability.</li>
        <li>Use security groups for fine-grained access control.</li>
        <li>Monitor traffic using VPC Flow Logs.</li>
      </ul>

      <h2>6. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is a VPC?  
          <br />
          <strong>A:</strong> Virtual Private Cloud is an isolated network in AWS where you can launch resources with full control over networking.
        </li>

        <li>
          <strong>Q:</strong> Difference between public and private subnets?  
          <br />
          <strong>A:</strong> Public subnets have internet access via IGW; private subnets do not and typically use NAT for outbound traffic.
        </li>

        <li>
          <strong>Q:</strong> What is a NAT Gateway?  
          <br />
          <strong>A:</strong> Provides internet access for private subnet resources without exposing them publicly.
        </li>

        <li>
          <strong>Q:</strong> What is an Internet Gateway (IGW)?  
          <br />
          <strong>A:</strong> Enables VPC resources to communicate with the internet.
        </li>

        <li>
          <strong>Q:</strong> How do route tables work in VPC?  
          <br />
          <strong>A:</strong> They define where network traffic from subnets should be directed, e.g., IGW for public, NAT for private.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>VPC is the foundation for AWS networking, providing isolation and security.</li>
        <li>Subnets split resources into public/private zones for controlled access.</li>
        <li>Route tables, NAT, and IGW manage traffic flow efficiently and securely.</li>
        <li>Follow best practices for high availability, monitoring, and security.</li>
      </ul>
    </>
  ),
},
{
  id: 23,
  title: "Security Groups & Firewalls",
  path: "/cloud/aws-security-groups",
  explanation: (
    <>
      <p>
        <strong>AWS Security Groups</strong> act as virtual firewalls for your EC2 instances, controlling inbound and outbound traffic at the instance level. 
        They help you restrict access to servers, databases, and other resources based on IP addresses and ports.
      </p>

      <h2>Why Security Groups?</h2>
      <ul>
        <li>Protect EC2 instances and other resources from unauthorized access.</li>
        <li>Control traffic at the network level without modifying OS-level firewall.</li>
        <li>Works as a stateful firewall → return traffic is automatically allowed.</li>
        <li>Supports dynamic updates without restarting instances.</li>
        <li>Essential for securing public-facing services and private networks.</li>
      </ul>

      <h2>1. Inbound Rules</h2>
      <ul>
        <li>Define which incoming traffic is allowed to reach your instance.</li>
        <li>Specify protocol (TCP/UDP/ICMP), port range, and source IP/CIDR.</li>
        <li>Example: Allow HTTP traffic → TCP port 80 from 0.0.0.0/0.</li>
        <li>Example: Allow SSH → TCP port 22 only from your office IP for security.</li>
      </ul>

      <h2>2. Outbound Rules</h2>
      <ul>
        <li>Define which outgoing traffic is allowed from your instance.</li>
        <li>By default, all outbound traffic is allowed, but you can restrict it.</li>
        <li>Useful for limiting internet access from private subnets.</li>
      </ul>

      <h2>3. Best Practices</h2>
      <ul>
        <li>Always use least privilege → only open necessary ports.</li>
        <li>Restrict SSH/RDP access to known IPs instead of 0.0.0.0/0.</li>
        <li>Use separate security groups for different tiers (web, app, database).</li>
        <li>Combine with Network ACLs (NACLs) for additional subnet-level security.</li>
        <li>Regularly review and remove unused rules.</li>
      </ul>

      <h2>4. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is a Security Group in AWS?  
          <br />
          <strong>A:</strong> A virtual firewall that controls inbound and outbound traffic for AWS resources like EC2.
        </li>

        <li>
          <strong>Q:</strong> Difference between Security Groups and NACLs?  
          <br />
          <strong>A:</strong> Security Groups are instance-level, stateful; NACLs are subnet-level, stateless.
        </li>

        <li>
          <strong>Q:</strong> What does stateful mean in Security Groups?  
          <br />
          <strong>A:</strong> If you allow inbound traffic, the response traffic is automatically allowed, no separate rule needed.
        </li>

        <li>
          <strong>Q:</strong> How do you restrict SSH access securely?  
          <br />
          <strong>A:</strong> Allow TCP port 22 only from specific IP addresses, not 0.0.0.0/0.
        </li>

        <li>
          <strong>Q:</strong> Can Security Groups be updated without restarting instances?  
          <br />
          <strong>A:</strong> Yes, changes take effect immediately without any downtime.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Security Groups are essential for controlling network access at the instance level.</li>
        <li>Define inbound and outbound rules carefully following the least privilege principle.</li>
        <li>Combine with NACLs, IAM policies, and VPC architecture for robust security.</li>
        <li>Always restrict sensitive ports like SSH, RDP to trusted IPs.</li>
        <li>Regularly audit security group rules to avoid misconfigurations.</li>
      </ul>
    </>
  ),
},
{
  id: 24,
  title: "AWS WAF & Shield",
  path: "/cloud/aws-waf",
  explanation: (
    <>
      <p>
        <strong>AWS WAF (Web Application Firewall)</strong> and <strong>AWS Shield</strong> are security services designed to protect your web applications from malicious traffic and DDoS (Distributed Denial of Service) attacks. WAF allows you to filter and block unwanted requests, while Shield provides advanced protection against network and application layer attacks.
      </p>

      <h2>Why Use WAF & Shield?</h2>
      <ul>
        <li>Protect web applications from common attacks like SQL injection, XSS (Cross-Site Scripting), and bot traffic.</li>
        <li>Prevent downtime and service disruptions due to DDoS attacks.</li>
        <li>Control access with customizable rules and rate limiting.</li>
        <li>Integrates with CloudFront, Application Load Balancer (ALB), and API Gateway.</li>
        <li>Shield Advanced provides real-time attack detection and mitigation.</li>
      </ul>

      <h2>1. Key Features of AWS WAF</h2>
      <ul>
        <li>Custom rules: Block, allow, or count requests based on IP, headers, query strings, or body content.</li>
        <li>Managed rule sets: Predefined rules for common threats (SQLi, XSS).</li>
        <li>Rate-based rules: Limit the number of requests per IP to prevent abuse.</li>
        <li>Integration: Works with CloudFront, ALB, and API Gateway for edge or regional protection.</li>
      </ul>

      <h2>2. AWS Shield Overview</h2>
      <ul>
        <li><strong>Shield Standard:</strong> Automatically enabled, provides basic DDoS protection at no extra cost.</li>
        <li><strong>Shield Advanced:</strong> Paid service, provides enhanced DDoS protection, real-time alerts, and 24/7 AWS DDoS response team (DRT) support.</li>
      </ul>

      <h2>3. How to Set Up WAF & Shield</h2>
      <ol>
        <li>Create a Web ACL (Access Control List) in AWS WAF.</li>
        <li>Add rules: IP allow/block, rate limiting, managed rule groups.</li>
        <li>Associate Web ACL with CloudFront distribution or ALB.</li>
        <li>Enable AWS Shield (Standard is automatic, Advanced can be subscribed).</li>
        <li>Monitor requests and adjust rules based on traffic patterns.</li>
      </ol>

      <h2>4. Common Use Cases</h2>
      <ul>
        <li>Protect public APIs from bots and malicious requests.</li>
        <li>Prevent web scraping of sensitive content.</li>
        <li>Mitigate DDoS attacks targeting application or network layers.</li>
        <li>Enforce rate limits for high-traffic endpoints.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS WAF?  
          <br />
          <strong>A:</strong> A Web Application Firewall that filters and monitors HTTP/HTTPS requests to protect applications from attacks like SQL injection and XSS.
        </li>

        <li>
          <strong>Q:</strong> Difference between AWS WAF and Shield?  
          <br />
          <strong>A:</strong> WAF filters malicious requests; Shield provides DDoS protection at network and application layers.
        </li>

        <li>
          <strong>Q:</strong> What is a Web ACL in WAF?  
          <br />
          <strong>A:</strong> A Web Access Control List that contains rules to allow, block, or count web requests.
        </li>

        <li>
          <strong>Q:</strong> How does rate limiting work in WAF?  
          <br />
          <strong>A:</strong> Limits requests per IP over a defined time window, preventing abuse or bot attacks.
        </li>

        <li>
          <strong>Q:</strong> When would you use Shield Advanced?  
          <br />
          <strong>A:</strong> For production applications at risk of large DDoS attacks requiring real-time mitigation and AWS support.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>AWS WAF and Shield protect applications from malicious traffic and DDoS attacks.</li>
        <li>WAF provides customizable rules for filtering requests; Shield provides automatic DDoS protection.</li>
        <li>Integration with CloudFront, ALB, and API Gateway ensures comprehensive coverage.</li>
        <li>Rate limiting, managed rules, and real-time monitoring enhance security posture.</li>
        <li>Essential for production applications exposed to the internet.</li>
      </ul>
    </>
  ),
},
{
    id: 25,
    title: "ECR – Docker Registry",
    path: "/cloud/aws-ecr",
    explanation: (
      <>
        <p>
          <strong>AWS ECR (Elastic Container Registry)</strong> is a fully-managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. It integrates seamlessly with AWS services like ECS, EKS, and CodePipeline.
        </p>

        <h2>Why Use ECR?</h2>
        <ul>
          <li>Securely store private Docker images in the cloud.</li>
          <li>Integrated with AWS IAM for fine-grained access control.</li>
          <li>Supports high availability and regional replication.</li>
          <li>Works seamlessly with ECS, EKS, and CI/CD pipelines.</li>
          <li>Automates image versioning and lifecycle management.</li>
        </ul>

        <h2>1. Pushing Images to ECR</h2>
        <ol>
          <li>Create a repository in AWS ECR.</li>
          <li>Authenticate Docker CLI to ECR:  
           <code> {`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com`}</code>
          </li>
          <li>Tag your local Docker image:  
            <code>{`docker tag my-app:latest &lt;account-id>.dkr.ecr.us-east-1.amazonaws.com/my-app:latest`}</code>
          </li>
          <li>Push image to ECR:  
            <code>{`docker push &lt;account-id>.dkr.ecr.us-east-1.amazonaws.com/my-app:latest`}</code>
          </li>
        </ol>

        <h2>2. Pulling Images from ECR</h2>
        <p>To deploy an image from ECR:</p>
        <pre>
{`docker pull <account-id>.dkr.ecr.us-east-1.amazonaws.com/my-app:latest`}
        </pre>

        <h2>3. Authentication & Tokens</h2>
        <ul>
          <li>Docker login uses temporary authentication tokens from AWS CLI.</li>
          <li>Tokens expire after 12 hours; re-authenticate as needed.</li>
          <li>Use IAM roles for automated pipelines instead of storing credentials locally.</li>
        </ul>

        <h2>4. Integration with CI/CD</h2>
        <ul>
          <li>Use GitHub Actions, CodeBuild, or Jenkins to build Docker images.</li>
          <li>Push automatically to ECR after tests pass.</li>
          <li>Deploy images to ECS or EKS from ECR seamlessly.</li>
        </ul>

        <h2>5. Common Interview Q&A</h2>
        <ul>
          <li>
            <strong>Q:</strong> What is AWS ECR?  
            <br />
            <strong>A:</strong> A fully-managed Docker container registry for storing, managing, and deploying Docker images securely.
          </li>

          <li>
            <strong>Q:</strong> How do you authenticate Docker CLI to ECR?  
            <br />
            <strong>A:</strong> Use AWS CLI command `aws ecr get-login-password` piped into `docker login`.
          </li>

          <li>
            <strong>Q:</strong> Can ECR host public images?  
            <br />
            <strong>A:</strong> Yes, AWS offers both public and private repositories.
          </li>

          <li>
            <strong>Q:</strong> How is ECR integrated into CI/CD pipelines?  
            <br />
            <strong>A:</strong> Build images in the pipeline, push to ECR, then deploy to ECS/EKS automatically.
          </li>

          <li>
            <strong>Q:</strong> Why use IAM roles instead of storing credentials?  
            <br />
            <strong>A:</strong> Roles are more secure; they avoid hardcoding credentials and allow automatic authentication in AWS services.
          </li>
        </ul>

        <h2>Summary</h2>
        <ul>
          <li>AWS ECR is a secure, managed Docker registry integrated with AWS services.</li>
          <li>Supports private and public repositories for container images.</li>
          <li>Authentication via AWS CLI and IAM roles ensures security.</li>
          <li>Seamlessly integrates with CI/CD pipelines for automated deployments.</li>
          <li>Essential for Docker-based applications in AWS production environments.</li>
        </ul>
      </>
    ),
  },
  {
  id: 26,
  title: "ECS – Running Docker Containers",
  path: "/cloud/aws-ecs",
  explanation: (
    <>
      <p>
        <strong>AWS ECS (Elastic Container Service)</strong> allows you to run
        Docker containers in the cloud, either on <strong>Fargate</strong> (serverless) or <strong>EC2</strong> (self-managed) instances. ECS manages scaling, scheduling, and networking for your containers.
      </p>

      <h2>Why Use ECS?</h2>
      <ul>
        <li>Run containerized apps without managing infrastructure (Fargate).</li>
        <li>Automated container scheduling and scaling.</li>
        <li>Integrates with AWS services like ALB, CloudWatch, IAM, and VPC.</li>
        <li>Supports both serverless (Fargate) and EC2-managed containers.</li>
        <li>Good for microservices, batch jobs, and CI/CD deployments.</li>
      </ul>

      <h2>1. Launch Types</h2>
      <ul>
        <li>
          <strong>Fargate:</strong> Serverless, no EC2 management, pay per running container.
        </li>
        <li>
          <strong>EC2:</strong> You manage the EC2 instances; more control, potentially cheaper for large workloads.
        </li>
      </ul>

      <h2>2. Tasks & Services</h2>
      <ul>
        <li><strong>Task:</strong> Definition of a container (image, CPU, memory, environment variables).</li>
        <li><strong>Service:</strong> Runs and maintains desired number of tasks, supports scaling and load balancing.</li>
      </ul>

      <h2>3. Running a Container (Example)</h2>
      <pre>
{`# Create a task definition JSON file
aws ecs register-task-definition --cli-input-json file://task-definition.json

# Create a cluster
aws ecs create-cluster --cluster-name my-ecs-cluster

# Run a service (Fargate example)
aws ecs create-service \
  --cluster my-ecs-cluster \
  --service-name my-service \
  --task-definition my-task \
  --launch-type FARGATE \
  --desired-count 2 \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxxxxx],securityGroups=[sg-xxxxxx],assignPublicIp=ENABLED}"`
}
      </pre>

      <h2>4. Scaling & Load Balancing</h2>
      <ul>
        <li>Use ECS Service Auto Scaling to adjust task count based on CPU, memory, or custom metrics.</li>
        <li>Integrate with Application Load Balancer (ALB) to distribute traffic across tasks.</li>
      </ul>

      <h2>5. Monitoring & Logs</h2>
      <ul>
        <li>CloudWatch Logs for container output.</li>
        <li>CloudWatch Metrics for CPU, memory, and network usage.</li>
        <li>Event notifications for service or task failures.</li>
      </ul>

      <h2>6. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> Difference between ECS Fargate and EC2 launch type?  
          <br />
          <strong>A:</strong> Fargate is serverless (AWS manages instances); EC2 you manage the instances.
        </li>

        <li>
          <strong>Q:</strong> What is a task in ECS?  
          <br />
          <strong>A:</strong> A task is a running container with configuration defined in a task definition.
        </li>

        <li>
          <strong>Q:</strong> What is a service in ECS?  
          <br />
          <strong>A:</strong> A service maintains the desired number of running tasks, supports scaling and load balancing.
        </li>

        <li>
          <strong>Q:</strong> How do ECS tasks communicate with each other?  
          <br />
          <strong>A:</strong> Via VPC networking and assigned security groups; use service discovery if needed.
        </li>

        <li>
          <strong>Q:</strong> Can ECS integrate with CI/CD?  
          <br />
          <strong>A:</strong> Yes, with GitHub Actions, CodePipeline, or Jenkins for automated container deployments.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>ECS allows running Docker containers in the cloud with Fargate or EC2.</li>
        <li>Tasks define container settings; services manage running tasks.</li>
        <li>Supports auto-scaling, load balancing, and monitoring with CloudWatch.</li>
        <li>Good for production-grade containerized apps and microservices.</li>
        <li>Integrates with AWS networking, IAM, and CI/CD pipelines.</li>
      </ul>
    </>
  ),
},
{
  id: 27,
  title: "Lambda – Serverless Functions",
  path: "/cloud/aws-lambda",
  explanation: (
    <>
      <p>
        <strong>AWS Lambda</strong> is a serverless compute service that lets you run code without provisioning or managing servers. You only pay for the compute time consumed. Lambda functions are event-driven and automatically scale with demand.
      </p>

      <h2>Why Use Lambda?</h2>
      <ul>
        <li>No need to manage servers or OS updates.</li>
        <li>Automatic scaling based on the number of events.</li>
        <li>Pay only for actual compute time (per 100ms).</li>
        <li>Integrates with AWS services like S3, API Gateway, DynamoDB, CloudWatch, and more.</li>
        <li>Ideal for microservices, cron jobs, API backends, and event-driven workflows.</li>
      </ul>

      <h2>1. How Lambda Works</h2>
      <ol>
        <li>You write a function (Node.js, Python, Java, etc.) and upload it to Lambda.</li>
        <li>Configure triggers: S3 upload, API Gateway request, DynamoDB stream, CloudWatch event, etc.</li>
        <li>Lambda executes your function whenever the event occurs.</li>
        <li>Execution environment is ephemeral; storage is limited to /tmp (512 MB).</li>
      </ol>

      <h2>2. Key Concepts</h2>
      <ul>
        <li><strong>Handler:</strong> Entry point of the Lambda function (e.g., `index.handler`).</li>
        <li><strong>Event:</strong> The input triggering the Lambda function.</li>
        <li><strong>Context:</strong> Provides runtime information (memory, timeout, request ID).</li>
        <li><strong>Cold Start:</strong> Initial startup delay when Lambda spins up a new container.</li>
        <li><strong>Layers:</strong> Reusable code libraries shared across multiple functions.</li>
      </ul>

      <h2>3. Deploying a Node.js Lambda Function</h2>
      <pre>
{`// index.js
exports.handler = async (event) => {
    console.log("Event received:", event);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda!" })
    };
};

// Deploy using AWS CLI
# Zip the code
zip function.zip index.js

# Create Lambda function
aws lambda create-function \
  --function-name MyLambdaFunction \
  --runtime nodejs18.x \
  --role arn:aws:iam::<account-id>:role/<lambda-role> \
  --handler index.handler \
  --zip-file fileb://function.zip`}
      </pre>

      <h2>4. Triggers & Event Sources</h2>
      <ul>
        <li><strong>S3:</strong> Run Lambda on file upload or deletion.</li>
        <li><strong>API Gateway:</strong> Handle HTTP requests.</li>
        <li><strong>DynamoDB Streams:</strong> Trigger on table changes.</li>
        <li><strong>CloudWatch Events:</strong> Scheduled tasks (cron jobs).</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS Lambda?  
          <br />
          <strong>A:</strong> A serverless service that executes code in response to events without managing servers.
        </li>

        <li>
          <strong>Q:</strong> What is a cold start?  
          <br />
          <strong>A:</strong> Initial delay when a Lambda container is created to execute a function for the first time.
        </li>

        <li>
          <strong>Q:</strong> How do you trigger a Lambda function?  
          <br />
          <strong>A:</strong> Using AWS services like S3, API Gateway, DynamoDB Streams, or CloudWatch Events.
        </li>

        <li>
          <strong>Q:</strong> Can Lambda maintain state between executions?  
          <br />
          <strong>A:</strong> No, Lambda is stateless. Use external storage like S3, DynamoDB, or RDS for state persistence.
        </li>

        <li>
          <strong>Q:</strong> How do you monitor Lambda performance?  
          <br />
          <strong>A:</strong> CloudWatch Metrics and Logs provide invocations, duration, errors, and throttling statistics.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>AWS Lambda is serverless, event-driven, and auto-scales with traffic.</li>
        <li>Supports multiple languages; you only pay for compute time used.</li>
        <li>Triggers include S3, API Gateway, DynamoDB, and CloudWatch events.</li>
        <li>Cold starts can impact initial performance; keep functions lightweight.</li>
        <li>Ideal for APIs, microservices, scheduled tasks, and event-driven workflows.</li>
      </ul>
    </>
  ),
},
{
  id: 28,
  title: "API Gateway – Serverless APIs",
  path: "/cloud/aws-api-gateway",
  explanation: (
    <>
      <p>
        <strong>AWS API Gateway</strong> is a fully managed service that allows you to create, deploy, and manage RESTful and WebSocket APIs. It acts as a front door for applications to access data, business logic, or functionality from backend services like AWS Lambda, EC2, or other HTTP endpoints.
      </p>

      <h2>Why Use API Gateway?</h2>
      <ul>
        <li>Create serverless APIs without managing servers.</li>
        <li>Connect easily with Lambda functions for backend logic.</li>
        <li>Handle thousands of concurrent API calls automatically.</li>
        <li>Enable security features like authentication, throttling, and rate limiting.</li>
        <li>Supports REST and WebSocket APIs for different application needs.</li>
      </ul>

      <h2>1. Key Features</h2>
      <ul>
        <li>Define API routes (endpoints) and methods (GET, POST, PUT, DELETE).</li>
        <li>Configure CORS (Cross-Origin Resource Sharing) to allow requests from web apps.</li>
        <li>Enable request validation, throttling, caching, and custom authorizers.</li>
        <li>Deploy multiple stages (dev, test, prod) with different configurations.</li>
        <li>Monitor APIs via CloudWatch metrics and logs.</li>
      </ul>

      <h2>2. Connecting Lambda with API Gateway</h2>
      <ol>
        <li>Create a Lambda function that handles your API logic.</li>
        <li>Create a REST API in API Gateway.</li>
        <li>Define resources (e.g., `/users`, `/orders`) and HTTP methods.</li>
        <li>Set Lambda as the integration backend for each method.</li>
        <li>Enable CORS if the API will be accessed from browsers.</li>
        <li>Deploy the API to a stage (dev, prod).</li>
      </ol>

      <h2>3. Example Lambda Integration</h2>
      <pre>
{`// Lambda function
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from API Gateway!" })
    };
};

// API Gateway method integration points to this Lambda`}
      </pre>

      <h2>4. Common Use Cases</h2>
      <ul>
        <li>Expose serverless backends (Lambda) as REST APIs.</li>
        <li>Create microservices with separate endpoints and Lambda functions.</li>
        <li>Serve mobile or web applications with scalable APIs.</li>
        <li>Implement rate limiting, request validation, and authentication.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS API Gateway?  
          <br />
          <strong>A:</strong> A managed service to create, deploy, and manage RESTful or WebSocket APIs, often integrated with Lambda.
        </li>

        <li>
          <strong>Q:</strong> How do you connect API Gateway to Lambda?  
          <br />
          <strong>A:</strong> Set Lambda as the integration backend for a method on a resource in API Gateway.
        </li>

        <li>
          <strong>Q:</strong> What is CORS and why is it needed?  
          <br />
          <strong>A:</strong> Cross-Origin Resource Sharing allows web browsers to call APIs hosted on different domains securely.
        </li>

        <li>
          <strong>Q:</strong> What is a stage in API Gateway?  
          <br />
          <strong>A:</strong> A deployment environment (like dev, test, prod) for your API with independent configurations.
        </li>

        <li>
          <strong>Q:</strong> Can API Gateway handle authentication?  
          <br />
          <strong>A:</strong> Yes, via IAM roles, Cognito, or custom authorizers.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>AWS API Gateway allows creation and management of serverless APIs.</li>
        <li>Connects easily with Lambda for backend logic.</li>
        <li>Supports REST and WebSocket APIs with CORS, throttling, and authentication.</li>
        <li>Enables multiple stages for deployment and testing.</li>
        <li>Ideal for serverless microservices, web apps, and mobile app backends.</li>
      </ul>
    </>
  ),
},
{
  id: 29,
  title: "CloudWatch – Logs & Monitoring",
  path: "/cloud/aws-cloudwatch",
  explanation: (
    <>
      <p>
        <strong>AWS CloudWatch</strong> is a monitoring and observability service for AWS resources and applications. It collects metrics, logs, and events to help you monitor performance, detect issues, and respond to changes in real-time.
      </p>

      <h2>Why Use CloudWatch?</h2>
      <ul>
        <li>Monitor EC2, Lambda, RDS, and other AWS services in real-time.</li>
        <li>Set alarms to automatically notify or trigger actions on thresholds.</li>
        <li>Centralize logs and metrics for easier troubleshooting and analysis.</li>
        <li>Gain insights into application performance, utilization, and costs.</li>
      </ul>

      <h2>1. Key Features</h2>
      <ul>
        <li><strong>Metrics:</strong> Measure CPU, memory, disk I/O, network traffic, and custom application metrics.</li>
        <li><strong>Logs:</strong> Collect, search, and analyze log data from AWS services or custom applications.</li>
        <li><strong>Alarms:</strong> Trigger notifications or actions (like auto-scaling) when metrics exceed thresholds.</li>
        <li><strong>Dashboards:</strong> Visualize metrics and logs in customizable dashboards.</li>
        <li><strong>Events:</strong> Respond to state changes or schedule automated actions using CloudWatch Events (EventBridge).</li>
      </ul>

      <h2>2. Example: Monitoring an EC2 Instance</h2>
      <ol>
        <li>Go to the CloudWatch console and select “Metrics”.</li>
        <li>Choose EC2 metrics: CPUUtilization, DiskReadOps, NetworkIn/Out.</li>
        <li>Create an alarm for CPUUtilization &gt; 80% to notify via SNS (Simple Notification Service).</li>
        <li>Set up dashboards to visualize instance performance over time.</li>
      </ol>

      <h2>3. Example: Monitoring Lambda Functions</h2>
      <ul>
        <li>View invocation count, duration, error count, and throttles.</li>
        <li>Set alarms for high error rates or latency.</li>
        <li>Use log groups to debug function execution.</li>
      </ul>

      <h2>4. Common Use Cases</h2>
      <ul>
        <li>Detect performance bottlenecks in applications.</li>
        <li>Track operational health of EC2, Lambda, RDS, ECS, and other services.</li>
        <li>Automate scaling actions based on metrics.</li>
        <li>Centralize application and system logs for debugging.</li>
      </ul>

      <h2>5. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS CloudWatch?  
          <br />
          <strong>A:</strong> A monitoring service for AWS resources and applications that collects metrics, logs, and events for observability and alerting.
        </li>

        <li>
          <strong>Q:</strong> How do you monitor Lambda functions with CloudWatch?  
          <br />
          <strong>A:</strong> View metrics such as invocations, duration, errors, throttles; set alarms; analyze log groups for debugging.
        </li>

        <li>
          <strong>Q:</strong> What is a CloudWatch Alarm?  
          <br />
          <strong>A:</strong> A notification mechanism that triggers actions when a metric exceeds a defined threshold.
        </li>

        <li>
          <strong>Q:</strong> What are CloudWatch Logs?  
          <br />
          <strong>A:</strong> A centralized repository for collecting, storing, and analyzing logs from AWS services or custom applications.
        </li>

        <li>
          <strong>Q:</strong> Can CloudWatch automate actions?  
          <br />
          <strong>A:</strong> Yes, using alarms, events, and EventBridge rules to trigger actions like scaling, Lambda invocations, or SNS notifications.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>CloudWatch helps monitor AWS resources and applications in real-time.</li>
        <li>Collects metrics, logs, and events for observability and troubleshooting.</li>
        <li>Supports alarms, dashboards, and automated actions for operational efficiency.</li>
        <li>Essential for performance monitoring, incident detection, and cost optimization.</li>
      </ul>
    </>
  ),
},
{
  id: 30,
  title: "CloudTrail – Activity Tracking",
  path: "/cloud/aws-cloudtrail",
  explanation: (
    <>
      <p>
        <strong>AWS CloudTrail</strong> is a tool that keeps a record of everything happening in your AWS account. It records AWS API calls and activities, allowing you to track who did what, when, and from where.
      </p>

      <h2>Why Use CloudTrail?</h2>
      <ul>
        <li>Track all API calls and user activities across your AWS account.</li>
        <li>Detect unusual or unauthorized activities for security monitoring.</li>
        <li>Maintain audit trails for compliance and regulatory requirements.</li>
        <li>Integrate with CloudWatch for alerts on suspicious events.</li>
      </ul>

      <h2>1. Key Features</h2>
      <ul>
        <li>Records AWS Management Console actions, CLI commands, and SDK/API calls.</li>
        <li>Stores logs in S3 buckets for long-term retention and auditing.</li>
        <li>Supports log file encryption and integrity validation.</li>
        <li>Integration with CloudWatch Logs for monitoring and alarms.</li>
        <li>Tracks global services (e.g., IAM) across regions.</li>
      </ul>

      <h2>2. Example Use Case</h2>
      <ol>
        <li>Create a CloudTrail trail in your AWS account.</li>
        <li>Enable logging for all regions to capture global events.</li>
        <li>Specify an S3 bucket to store log files.</li>
        <li>Enable CloudWatch integration to trigger alerts on specific API calls or unusual activities.</li>
      </ol>

      <h2>3. Common Security Monitoring Scenarios</h2>
      <ul>
        <li>Detect unauthorized IAM user actions or credential misuse.</li>
        <li>Track changes to security groups or network configurations.</li>
        <li>Audit deletion of S3 buckets, EC2 instances, or RDS snapshots.</li>
        <li>Monitor sensitive data access across AWS services.</li>
      </ul>

      <h2>4. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS CloudTrail?  
          <br />
          <strong>A:</strong> A service that records AWS API calls and user activities to help with auditing, compliance, and security monitoring.
        </li>

        <li>
          <strong>Q:</strong> What can you track with CloudTrail?  
          <br />
          <strong>A:</strong> Management console actions, CLI/API calls, SDK usage, IAM changes, and resource modifications.
        </li>

        <li>
          <strong>Q:</strong> How is CloudTrail different from CloudWatch?  
          <br />
          <strong>A:</strong> CloudTrail records API call history for auditing; CloudWatch monitors metrics, logs, and alarms for operational and performance monitoring.
        </li>

        <li>
          <strong>Q:</strong> How do you store CloudTrail logs securely?  
          <br />
          <strong>A:</strong> Store in S3 with encryption (SSE), enable log file integrity validation, and use IAM policies for controlled access.
        </li>

        <li>
          <strong>Q:</strong> Can CloudTrail trigger alerts?  
          <br />
          <strong>A:</strong> Yes, by integrating with CloudWatch Logs or EventBridge to notify on suspicious or specific API calls.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>CloudTrail tracks all API calls and user activities in AWS.</li>
        <li>Helps with auditing, compliance, and security monitoring.</li>
        <li>Logs are stored securely in S3 and can be integrated with CloudWatch for alerts.</li>
        <li>Essential for detecting unauthorized activities and maintaining operational oversight.</li>
      </ul>
    </>
  ),
},
{
  id: 31,
  title: "AWS Cost Optimization",
  path: "/cloud/aws-cost-optimization",
  explanation: (
    <>
      <p>
        <strong>AWS Cost Optimization</strong> refers to strategies and best practices to manage and reduce your AWS spending while maintaining performance, reliability, and security. This is essential for controlling cloud expenses and avoiding unexpected bills.
      </p>

      <h2>Why Optimize AWS Costs?</h2>
      <ul>
        <li>Reduce monthly cloud expenses without sacrificing performance.</li>
        <li>Avoid over-provisioning resources like EC2 instances or storage.</li>
        <li>Gain better visibility into resource usage and trends.</li>
        <li>Ensure budget compliance and prevent unexpected charges.</li>
        <li>Improve ROI from cloud investments.</li>
      </ul>

      <h2>1. Key Cost Optimization Strategies</h2>
      <ul>
        <li>Choose the right instance type and size based on workload requirements.</li>
        <li>Use <strong>Reserved Instances (RI)</strong> or <strong>Savings Plans</strong> for predictable workloads.</li>
        <li>Leverage <strong>Auto Scaling</strong> to scale resources dynamically.</li>
        <li>Move infrequently accessed data to cheaper storage classes (e.g., S3 Glacier).</li>
        <li>Enable <strong>Budget Alerts</strong> in AWS to monitor spending thresholds.</li>
        <li>Delete unused or idle resources like EC2 instances, EBS volumes, or Elastic IPs.</li>
      </ul>

      <h2>2. Monitoring & Reporting</h2>
      <ul>
        <li>Use <strong>AWS Cost Explorer</strong> to visualize spending patterns.</li>
        <li>Enable detailed billing reports and tag resources for cost allocation.</li>
        <li>Set up <strong>CloudWatch Alarms</strong> to get notified about unusual spending.</li>
        <li>Regularly review Reserved Instance utilization and Savings Plans coverage.</li>
      </ul>

      <h2>3. Common Use Cases</h2>
      <ul>
        <li>Startups optimizing their cloud infrastructure to save money.</li>
        <li>Enterprises identifying underutilized resources and eliminating waste.</li>
        <li>Migrated workloads looking to balance performance vs cost.</li>
      </ul>

      <h2>4. Common Interview Q&A</h2>
      <ul>
        <li>
          <strong>Q:</strong> What is AWS Cost Optimization?  
          <br />
          <strong>A:</strong> A set of strategies and practices to reduce AWS expenses while maintaining performance, reliability, and security.
        </li>

        <li>
          <strong>Q:</strong> How can Reserved Instances (RI) help reduce costs?  
          <br />
          <strong>A:</strong> RI allows you to commit to a specific instance type and region for 1-3 years at a discounted rate compared to on-demand pricing.
        </li>

        <li>
          <strong>Q:</strong> What are Savings Plans?  
          <br />
          <strong>A:</strong> Flexible pricing plans that provide discounts in exchange for a commitment to a consistent amount of usage (measured in $/hour) across EC2, Lambda, or Fargate.
        </li>

        <li>
          <strong>Q:</strong> How do Auto Scaling and right-sizing help reduce costs?  
          <br />
          <strong>A:</strong> Auto Scaling adjusts resources based on demand; right-sizing ensures instances are neither over-provisioned nor under-utilized.
        </li>

        <li>
          <strong>Q:</strong> How to avoid unexpected AWS bills?  
          <br />
          <strong>A:</strong> Set up budget alerts, monitor usage regularly, delete unused resources, and choose appropriate storage classes.
        </li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>Cost optimization ensures you get maximum value from AWS without overspending.</li>
        <li>Use the right instances, storage classes, Reserved Instances, and Auto Scaling.</li>
        <li>Regularly monitor usage with Cost Explorer, budgets, and CloudWatch alerts.</li>
        <li>Identify idle or unused resources and clean them up.</li>
        <li>Critical for startups, SMEs, and enterprises to maintain predictable cloud spending.</li>
      </ul>
    </>
  ),
},

];
