const colors = {
  primary: "#2B6CB0",
  secondary: "#D69E2E",
  success: "#38A169",
  info: "#805AD5",
  danger: "#D53F8C",
};

export const systemDesignTopics = [
  {
    id: 1,
    title: "Scalability Fundamentals",
    path: "/system-design/hld/scalability",
    explanation: (
      <>
        <p>
          <strong style={{ color: colors.primary }}>Scalability</strong> is the ability 
          of a system to handle more users, requests, or data without slowing down.  
          <br />
          It can be achieved by adding resources or designing smart architectures.
        </p>

        <br />

        <h2 style={{ color: colors.secondary }}>1. Horizontal vs Vertical Scaling</h2>
        <ul>
          <li>
            <strong style={{ color: colors.secondary }}>Vertical Scaling</strong> – Add more 
            power (CPU, RAM) to a single server.  
            Simple but limited by hardware.
          </li>
          <li>
            <strong style={{ color: colors.success }}>Horizontal Scaling</strong> – Add 
            more servers to share the load.  
            More flexible and handles massive traffic.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>2. Stateless Services</h2>
        <p>
          A <strong style={{ color: colors.info }}>stateless service</strong> does not 
          store user data between requests.  
          Each request is independent → easy to scale horizontally.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>3. Replication</h2>
        <p>
          Keep multiple copies of data or services so if one fails, others can handle 
          requests.  
          Ensures <strong style={{ color: colors.danger }}>high availability</strong>.
        </p>

        <pre>
{`
Server 1 → Primary
Server 2 → Replica
Server 3 → Replica
`}
        </pre>

        <br />

        <h2 style={{ color: colors.primary }}>4. High Availability (HA)</h2>
        <p>
          Design systems so they are always available.  
          Use replication, load balancers, and failover strategies.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>5. Elasticity</h2>
        <p>
          <strong style={{ color: colors.secondary }}>Elastic systems</strong> can automatically 
          adjust resources up or down depending on traffic.  
          Example: Cloud auto-scaling.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
        <pre>
{`
User Requests
      |
  Load Balancer
  /        \
Server 1   Server 2
   |          |
Replica 1  Replica 2
`}
        </pre>

        <br />

        <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
        <ul>
          <li>
            <strong>Q:</strong> Difference between horizontal and vertical scaling?  
            <br />
            <strong>A:</strong> Vertical = add resources to one server; Horizontal = add more servers to share load.
          </li>

          <li>
            <strong>Q:</strong> Why are stateless services easier to scale?  
            <br />
            <strong>A:</strong> Any server can handle any request since no session data is stored.
          </li>

          <li>
            <strong>Q:</strong> What is replication and why is it important?  
            <br />
            <strong>A:</strong> Making multiple copies of data/services for fault tolerance and high availability.
          </li>

          <li>
            <strong>Q:</strong> How does high availability work?  
            <br />
            <strong>A:</strong> Systems stay operational using replication, failover, and load balancing.
          </li>

          <li>
            <strong>Q:</strong> Explain elasticity in cloud systems.  
            <br />
            <strong>A:</strong> Automatic adjustment of resources based on traffic load.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Short Summary</h2>
        <ul>
          <li>Vertical = bigger server; Horizontal = more servers.</li>
          <li>Stateless services scale easily.</li>
          <li>Replication ensures HA.</li>
          <li>Elastic systems adjust resources automatically.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "System Components Overview",
    path: "/system-design/hld/system-components",
    explanation: (
      <>
        <p>
          <strong style={{ color: colors.primary }}>System Components</strong> are the building blocks 
          of scalable and reliable systems. Each plays a role in handling traffic, data, 
          or user requests efficiently.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>Key Components</h2>
        <ul>
          <li>
            <strong style={{ color: colors.secondary }}>API Gateway</strong> – Entry point for all client requests, 
            handles routing, authentication, and rate limiting.
          </li>
          <li>
            <strong style={{ color: colors.success }}>Reverse Proxy</strong> – Sits in front of servers 
            to forward requests, provide caching, and improve security.
          </li>
          <li>
            <strong style={{ color: colors.info }}>Load Balancer</strong> – Distributes traffic 
            across multiple servers for better performance and availability.
          </li>
          <li>
            <strong style={{ color: colors.danger }}>CDN (Content Delivery Network)</strong> – Delivers static content 
            like images or scripts from servers closer to users for speed.
          </li>
          <li>
            <strong style={{ color: colors.secondary }}>Cache</strong> – Stores frequently accessed data 
            temporarily to reduce latency and database load.
          </li>
          <li>
            <strong style={{ color: colors.success }}>Databases</strong> – Store persistent data; can be SQL or NoSQL.
          </li>
          <li>
            <strong style={{ color: colors.info }}>Queues</strong> – Manage asynchronous tasks or message passing.
          </li>
          <li>
            <strong style={{ color: colors.danger }}>Object Storage</strong> – Store large files like images, videos, and backups.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
        <pre>
{`
Client → API Gateway → Load Balancer → Servers → Database / Cache
             |
             → CDN / Object Storage
             |
             → Message Queue
`}
        </pre>

        <br />

        <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
        <ul>
          <li>
            <strong>Q:</strong> What is an API Gateway?  
            <br />
            <strong>A:</strong> Entry point that routes requests, handles auth, and throttling.
          </li>
          <li>
            <strong>Q:</strong> Difference between reverse proxy and load balancer?  
            <br />
            <strong>A:</strong> Reverse proxy forwards requests; load balancer distributes load across servers.
          </li>
          <li>
            <strong>Q:</strong> What is a CDN used for?  
            <br />
            <strong>A:</strong> Deliver static content quickly from servers near users.
          </li>
          <li>
            <strong>Q:</strong> Why use cache in a system?  
            <br />
            <strong>A:</strong> Reduce latency and database load by storing frequently used data.
          </li>
          <li>
            <strong>Q:</strong> What are queues for?  
            <br />
            <strong>A:</strong> Handle tasks asynchronously and decouple services.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Short Summary</h2>
        <ul>
          <li>API Gateway = entry point + routing + auth.</li>
          <li>Reverse Proxy = forwards requests; Load Balancer = distributes load.</li>
          <li>CDN = faster static content delivery; Cache = reduce DB load.</li>
          <li>Databases store data; Queues handle async tasks; Object storage stores large files.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Load Balancing",
    path: "/system-design/hld/load-balancing",
    explanation: (
      <>
        <p>
          <strong style={{ color: colors.primary }}>Load Balancing</strong> is a technique to 
          distribute incoming traffic across multiple servers to improve performance, 
          reliability, and availability.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>Types of Load Balancers</h2>
        <ul>
          <li>
            <strong style={{ color: colors.secondary }}>L4 Load Balancer</strong> – Works at the 
            transport layer (TCP/UDP). Routes traffic based on IP and port.  
            Faster but less flexible.
          </li>
          <li>
            <strong style={{ color: colors.success }}>L7 Load Balancer</strong> – Works at the 
            application layer (HTTP/HTTPS). Can route based on URLs, headers, cookies.  
            Flexible but slightly slower.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Common Load Balancing Algorithms</h2>
        <ul>
          <li>
            <strong style={{ color: colors.info }}>Round Robin</strong> – Requests go to servers in order.  
            Simple and easy.
          </li>
          <li>
            <strong style={{ color: colors.danger }}>Least Connections</strong> – Send request to server with fewest active connections.  
            Good for uneven load.
          </li>
          <li>
            <strong style={{ color: colors.secondary }}>IP Hash</strong> – Uses client IP to decide server.  
            Helps keep a user on the same server (sticky session).
          </li>
          <li>
            <strong style={{ color: colors.success }}>Failover</strong> – Automatically redirects traffic if a server fails.  
            Ensures high availability.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Role of Reverse Proxy</h2>
        <p>
          Acts as an intermediary between clients and servers.  
          Often combined with load balancers to improve security, caching, and request routing.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
        <pre>
{`
Client Requests
      |
  Load Balancer
  /      |      \
Server1  Server2  Server3
`}
        </pre>

        <br />

        <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
        <ul>
          <li>
            <strong>Q:</strong> Difference between L4 and L7 load balancer?  
            <br />
            <strong>A:</strong> L4 = TCP/UDP, faster; L7 = HTTP/HTTPS, can route based on content.
          </li>
          <li>
            <strong>Q:</strong> What is round robin load balancing?  
            <br />
            <strong>A:</strong> Sends requests sequentially to each server.
          </li>
          <li>
            <strong>Q:</strong> How does least connections work?  
            <br />
            <strong>A:</strong> Sends request to server with fewest active connections.
          </li>
          <li>
            <strong>Q:</strong> What is IP hash method?  
            <br />
            <strong>A:</strong> Uses client IP to assign server, good for sticky sessions.
          </li>
          <li>
            <strong>Q:</strong> How does failover help?  
            <br />
            <strong>A:</strong> Redirects traffic to healthy servers if one fails.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Short Summary</h2>
        <ul>
          <li>Load balancers distribute traffic to improve performance and availability.</li>
          <li>L4 = transport layer; L7 = application layer.</li>
          <li>Round Robin, Least Connections, IP Hash = main algorithms.</li>
          <li>Failover ensures traffic always reaches healthy servers.</li>
        </ul>

        <br />
      </>
    ),
  },
  {
    id: 4,
    title: "Caching Strategies",
    path: "/system-design/hld/caching",
    explanation: (
      <>
        <p>
          <strong style={{ color: colors.primary }}>Caching</strong> is the technique which stores data temporarily in a fast storage 
          layer so future requests are faster.  
          <br />
          Common caching tools: <strong style={{ color: colors.secondary }}>Redis</strong>, <strong style={{ color: colors.success }}>Memcached</strong>, 
          <strong style={{ color: colors.info }}>CDNs</strong>.
        </p>

        <br />

        <h2 style={{ color: colors.primary }}>Why Use Caching?</h2>
        <ul>
          <li>Speeds up data access by storing frequently used data closer to users.</li>
          <li>Reduces load on databases and backend services.</li>
          <li>Improves application response time and user experience.</li>
          <li>Helps scale applications under high traffic.</li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Common Caching Locations</h2>
        <ul>
          <li>
            <strong style={{ color: colors.secondary }}>Client-Side Cache</strong> – Stored in browser/local storage.  
            Speeds up repeat requests for the same user.
          </li>
          <li>
            <strong style={{ color: colors.success }}>CDN Cache</strong> – Content Delivery Network caches static assets close to users.  
            Reduces latency globally.
          </li>
          <li>
            <strong style={{ color: colors.info }}>Server-Side Cache</strong> – In-memory caches like Redis or Memcached.  
            Reduces database hits for frequently requested data.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Caching Strategies</h2>
        <ul>
          <li>
            <strong style={{ color: colors.danger }}>Write-Through</strong> – Write goes to cache and database at the same time.  
            Keeps cache always updated.
          </li>
          <li>
            <strong style={{ color: colors.secondary }}>Write-Back (Write-Behind)</strong> – Write goes to cache first, then database later.  
            Faster writes but risk of data loss if cache fails.
          </li>
          <li>
            <strong style={{ color: colors.success }}>TTL (Time To Live)</strong> – Cache expires after a set time.  
            Keeps data fresh automatically.
          </li>
          <li>
            <strong style={{ color: colors.info }}>Cache Invalidation</strong> – Manual or automatic removal of outdated cache entries.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Benefits of Caching</h2>
        <ul>
          <li>Faster response times → better user experience.</li>
          <li>Reduces database load → saves resources.</li>
          <li>Helps applications handle more traffic.</li>
          <li>Reduces latency for global users with CDNs.</li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
        <pre>
{`
User → Cache → Database
 |       |
CDN      DB
`}
        </pre>

        <br />

        <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
        <ul>
          <li>
            <strong>Q:</strong> Why use caching?  
            <br />
            <strong>A:</strong> To speed up access to frequently used data and reduce database load.
          </li>
          <li>
            <strong>Q:</strong> Difference between write-through and write-back?  
            <br />
            <strong>A:</strong> Write-through writes to cache + DB immediately; write-back writes to cache first and DB later.
          </li>
          <li>
            <strong>Q:</strong> What is TTL in caching?  
            <br />
            <strong>A:</strong> Time To Live; cached data expires automatically after set time.
          </li>
          <li>
            <strong>Q:</strong> What is cache invalidation?  
            <br />
            <strong>A:</strong> Removing stale or outdated data from cache to keep it fresh.
          </li>
          <li>
            <strong>Q:</strong> Where can caching be implemented?  
            <br />
            <strong>A:</strong> Client-side, server-side (Redis/Memcached), or CDN for global content.
          </li>
        </ul>

        <br />

        <h2 style={{ color: colors.primary }}>Short Summary</h2>
        <ul>
          <li>Caching = store frequently used data for faster access.</li>
          <li>Write-through = safe, write-back = faster.</li>
          <li>TTL & invalidation keep cache fresh.</li>
          <li>Client, server, CDN caching improve speed and scalability.</li>
        </ul>

        <br />
      </>
    ),
  },
{
  id: 5,
  title: "CDN (Content Delivery Network)",
  path: "/system-design/hld/cdn",
  explanation: (
    <>
      <p>
  <strong style={{ color: colors.primary }}>CDN (Content Delivery Network) </strong> 
  stores and delivers static content like images, CSS, JavaScript, and videos 
  from servers located closer to users. This reduces load times, improves performance, 
  and decreases latency for faster user experiences.
</p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Edge Nodes</strong> – Servers located geographically close to users for faster content delivery.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Request Routing</strong> – Directs user requests to the nearest or fastest edge node.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Caching Static Assets</strong> – Stores frequently requested files on edge nodes to reduce server load and latency.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>DDoS Protection</strong> – CDNs can absorb and mitigate traffic spikes caused by attacks.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User Request
     |
  CDN Edge Node
     |
Origin Server
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a CDN?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A network of servers that delivers content faster by being closer to users.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are edge nodes?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Servers located near users to reduce latency.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does a CDN improve performance?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By caching static assets on edge nodes and routing requests efficiently.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does CDN help with DDoS?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> It absorbs excess traffic and filters malicious requests.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>CDN = faster content delivery via edge nodes.</li>
        <li>Request routing directs users to nearest server.</li>
        <li>Caches static assets to reduce server load.</li>
        <li>Protects against DDoS attacks.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 6,
  title: "API Gateways & Reverse Proxies",
  path: "/system-design/hld/api-gateway",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>API Gateways & Reverse Proxies</strong> 
        act as intermediaries between clients and backend services. They manage 
        requests, security, and routing, helping systems scale efficiently and stay reliable.  
        <br />
        Common tools: <strong style={{ color: colors.secondary }}>Kong</strong>, <strong style={{ color: colors.success }}>Nginx</strong>.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>What is an API Gateway?</h2>
      <p>
        An <strong style={{ color: colors.secondary }}>API Gateway</strong> is a central entry point for all client requests. 
        It handles <strong style={{ color: colors.success }}>routing</strong>, <strong style={{ color: colors.info }}>authentication</strong>, 
        <strong style={{ color: colors.danger }}>rate limiting</strong>, SSL termination, and other cross-cutting concerns.  
        This simplifies client interactions with multiple backend services.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>What is a Reverse Proxy?</h2>
      <p>
        A <strong style={{ color: colors.success }}>Reverse Proxy</strong> sits between clients and backend servers. 
        It forwards client requests to the appropriate server, providing <strong style={{ color: colors.info }}>load balancing</strong>, 
        <strong style={{ color: colors.danger }}>caching</strong>, and enhanced security.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Centralized request routing to multiple microservices.</li>
        <li>Offloading SSL encryption and decryption from backend services.</li>
        <li>Protecting backend servers with rate limiting and firewall rules.</li>
        <li>Providing caching and compression to improve response time.</li>
        <li>Load balancing requests among multiple servers to ensure reliability.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why Use API Gateways & Reverse Proxies?</h2>
      <ul>
        <li>Reduce complexity for clients interacting with multiple services.</li>
        <li>Enhance security by centralizing authentication and SSL.</li>
        <li>Improve performance with caching and request optimization.</li>
        <li>Ensure high availability by distributing load and handling failures gracefully.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Centralized request management.</li>
        <li>Simplified client communication with backend services.</li>
        <li>Improved security and request validation.</li>
        <li>Better scalability and performance of the system.</li>
        <li>Easier monitoring and logging of requests.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Client Requests
      |
  API Gateway / Reverse Proxy
      |
   Backend Services
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is an API Gateway?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A central entry point that handles routing, authentication, rate limiting, and other common concerns for clients.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a reverse proxy?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A server that forwards requests to backend servers and provides caching, load balancing, and security.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use rate limiting?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To prevent overload and protect backend services from excessive requests.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is SSL termination?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Handling encryption/decryption at the gateway to offload backend servers.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are the benefits of using an API Gateway & Reverse Proxy?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Simplifies client communication, improves security, enhances performance, and provides scalability.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>API Gateway = central management for routing, auth, rate limiting.</li>
        <li>Reverse Proxy = forwards requests, provides caching & load balancing.</li>
        <li>Rate limiting protects services from overload.</li>
        <li>SSL termination offloads encryption from backend servers.</li>
        <li>Improves security, performance, and scalability of systems.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 7,
  title: "Message Queues & Streaming",
  path: "/system-design/hld/message-queues",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Message Queues & Streaming </strong> 
        are techniques to handle asynchronous communication between different parts of a system. 
        They help decouple services, improve scalability, and enable event-driven architectures.  
        <br />
        Common tools: <strong style={{ color: colors.secondary }}>Kafka</strong>, 
        <strong style={{ color: colors.success }}>RabbitMQ</strong>, 
        <strong style={{ color: colors.info }}>AWS SQS</strong>.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>What is a Message Queue?</h2>
      <p>
        A <strong style={{ color: colors.secondary }}>Message Queue</strong> is a buffer that stores messages between producers (senders) and consumers (receivers).  
        Messages are processed asynchronously, allowing systems to handle high loads without blocking operations.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>What is Streaming?</h2>
      <p>
        <strong style={{ color: colors.success }}>Streaming</strong> processes data continuously as it arrives, rather than in batches.  
        Useful for real-time analytics, monitoring, or processing large streams of events.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Decoupling microservices by communicating via messages instead of direct calls.</li>
        <li>Asynchronous processing of tasks (e.g., sending emails, generating reports).</li>
        <li>Event-driven architecture for real-time data processing.</li>
        <li>Handling spikes in traffic by buffering messages.</li>
        <li>Real-time analytics and log streaming using tools like Kafka Streams.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why Use Message Queues & Streaming?</h2>
      <ul>
        <li>Improves system reliability and fault tolerance.</li>
        <li>Allows asynchronous processing to avoid blocking requests.</li>
        <li>Enables scaling of consumers independently of producers.</li>
        <li>Supports real-time monitoring and analytics.</li>
        <li>Decouples system components for easier maintenance.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Reliable message delivery between services.</li>
        <li>Better scalability and performance under load.</li>
        <li>Flexible system design with decoupled services.</li>
        <li>Supports both real-time streaming and asynchronous processing.</li>
        <li>Improved fault tolerance and reduced system downtime.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Producer → Message Queue / Stream → Consumer
           ↑               ↓
        Buffer          Processing
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a message queue?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A buffer that stores messages between producers and consumers for asynchronous processing.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is streaming different from a message queue?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Streaming processes data continuously in real-time, while queues process messages asynchronously but may not require real-time processing.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use message queues?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To decouple services, handle high traffic, and allow asynchronous task processing.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Name some common message queue and streaming tools.  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Kafka, RabbitMQ, AWS SQS.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are the benefits of using queues & streaming?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Improved scalability, reliability, fault tolerance, and support for asynchronous and real-time processing.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Message Queues = async communication between services.</li>
        <li>Streaming = continuous real-time data processing.</li>
        <li>Decouples producers and consumers for better scalability.</li>
        <li>Supports fault tolerance and high traffic handling.</li>
        <li>Common tools: Kafka, RabbitMQ, AWS SQS.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 8,
  title: "Data Partitioning & Replication",
  path: "/system-design/hld/partitioning",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Data Partitioning & Replication </strong> 
        are key techniques to scale databases and ensure high availability.  
        <br />
        <strong style={{ color: colors.secondary }}>Partitioning (Sharding)</strong> splits data across multiple databases or tables to distribute load.  
        <strong style={{ color: colors.success }}>Replication</strong> creates multiple copies of data across servers for redundancy and fault tolerance.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Sharding</strong> – Dividing data into smaller, manageable pieces (shards) based on a key (e.g., user ID).  
          Helps scale horizontally.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Leader-Follower Replication</strong> – One server (leader) handles writes, followers replicate data for reads.  
          Improves read scalability.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Quorum</strong> – A technique to ensure consistency by requiring a majority of nodes to agree on updates.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Read Replicas</strong> – Copies of the primary database used to handle read-heavy workloads.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Distribute large datasets across multiple servers to handle traffic.</li>
        <li>Reduce latency by locating shards closer to users or regions.</li>
        <li>Improve fault tolerance via replication across multiple nodes.</li>
        <li>Handle read-heavy workloads using read replicas.</li>
        <li>Ensure data consistency using quorum-based writes and reads.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why Use Partitioning & Replication?</h2>
      <ul>
        <li>Supports horizontal scaling of databases.</li>
        <li>Improves system reliability and fault tolerance.</li>
        <li>Reduces database contention by separating reads and writes.</li>
        <li>Allows high availability in case of server failures.</li>
        <li>Optimizes performance for global applications.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Scalable database architecture.</li>
        <li>High availability and reduced downtime.</li>
        <li>Improved read and write performance.</li>
        <li>Better distribution of workloads across servers.</li>
        <li>Data redundancy ensures fault tolerance.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Shard 1 → Leader → Follower 1
Shard 2 → Leader → Follower 2
Shard 3 → Leader → Follower 3
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is data partitioning (sharding)?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Dividing a large database into smaller shards to distribute load and improve scalability.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is replication in databases?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Creating multiple copies of data across servers for redundancy and fault tolerance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Explain leader-follower replication.  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Leader handles writes; followers replicate data for read operations to improve scalability.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a read replica?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A copy of the primary database used to handle read-heavy workloads.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is quorum and why is it important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Quorum ensures consistency by requiring a majority of nodes to agree on writes or reads.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Partitioning (sharding) = split data to scale horizontally.</li>
        <li>Replication = multiple copies for redundancy and fault tolerance.</li>
        <li>Leader-follower replication separates reads and writes.</li>
        <li>Quorum ensures consistency across nodes.</li>
        <li>Read replicas improve performance for read-heavy systems.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 9,
  title: "Consistency & CAP Theorem",
  path: "/system-design/hld/cap-theorem",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>CAP Theorem</strong> states that a distributed system can achieve only **two out of three guarantees** at the same time:  
        <strong style={{ color: colors.secondary }}>Consistency</strong>, <strong style={{ color: colors.success }}>Availability</strong>, and <strong style={{ color: colors.info }}>Partition Tolerance</strong>.
        <br />
        Understanding CAP helps in designing systems that make the right trade-offs depending on requirements.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Consistency (C)</strong> – Every read receives the most recent write.  
          Ensures data is always correct across all nodes.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Availability (A)</strong> – Every request receives a response, even if some nodes fail.  
          Ensures the system is responsive.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Partition Tolerance (P)</strong> – The system continues to operate even if there is a network partition between nodes.  
          Critical in distributed systems.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Strong Consistency</strong> – Guarantees that all clients see the same data at the same time.  
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Eventual Consistency</strong> – Data may be temporarily inconsistent but will converge to a consistent state over time.  
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Designing distributed databases and storage systems (e.g., Cassandra, MongoDB, DynamoDB).</li>
        <li>Deciding between strong consistency vs high availability based on application needs.</li>
        <li>Handling network failures and partitions gracefully.</li>
        <li>Choosing appropriate replication and synchronization strategies.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Helps make trade-offs in system design: which guarantees are more critical.</li>
        <li>Prevents data corruption and stale reads in distributed systems.</li>
        <li>Guides architecture choices for availability, latency, and fault tolerance.</li>
        <li>Essential for large-scale applications with multiple regions and nodes.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Increased understanding of distributed system behavior under failures.</li>
        <li>Ability to choose between strong consistency or eventual consistency as needed.</li>
        <li>Improved resilience and reliability in distributed systems.</li>
        <li>Better planning for replication and partition handling strategies.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
       Partition Occurs
         |       |
     Node A     Node B
       |         |
     C+P       A+P
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the CAP Theorem?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A principle that a distributed system can guarantee only two of the following at the same time: Consistency, Availability, Partition Tolerance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between strong and eventual consistency?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Strong consistency ensures all nodes see the same data immediately; eventual consistency allows temporary differences but guarantees convergence.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is partition tolerance?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> The system continues functioning correctly even if network failures cause some nodes to be unreachable.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Can a system be consistent, available, and partition-tolerant at the same time?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> No, CAP theorem states that only two out of three can be guaranteed simultaneously.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Give an example of eventual consistency in real systems.  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Amazon S3 updates may take some time to propagate across all nodes, but eventually all nodes have the same data.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>CAP = Consistency, Availability, Partition Tolerance (pick any 2).</li>
        <li>Strong consistency = immediate data correctness; eventual consistency = temporary inconsistency allowed.</li>
        <li>Partition tolerance is critical in distributed systems.</li>
        <li>Understanding CAP helps make system design trade-offs.</li>
        <li>Use CAP principles to choose replication and consistency strategies.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 10,
  title: "Distributed Systems Basics",
  path: "/system-design/hld/distributed-systems",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Distributed Systems</strong> are systems where multiple independent nodes (computers/servers) work together to achieve a common goal.  
        They provide scalability, fault tolerance, and high availability by spreading workload across nodes.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Fault Tolerance</strong> – The system continues to operate correctly even if some nodes fail.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Consensus</strong> – A mechanism to ensure all nodes agree on a single state or value (e.g., Raft, Paxos).
        </li>
        <li>
          <strong style={{ color: colors.info }}>Leader Election</strong> – Selecting a leader node to coordinate actions or manage resources efficiently.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Heartbeats</strong> – Periodic signals sent between nodes to check if they are alive and functioning.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Replication</strong> – Keeping multiple copies of data or services to ensure high availability and durability.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Designing large-scale web applications with multiple servers.</li>
        <li>Database clusters like Cassandra, MongoDB, and MySQL clusters.</li>
        <li>Implementing fault-tolerant messaging systems like Kafka or RabbitMQ.</li>
        <li>Ensuring high availability for cloud services and microservices.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Prevents single points of failure.</li>
        <li>Ensures consistent and reliable system behavior across nodes.</li>
        <li>Supports scalability and load distribution.</li>
        <li>Enables high availability and disaster recovery.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Improved system reliability and uptime.</li>
        <li>Better handling of failures and network issues.</li>
        <li>Supports horizontal scaling for performance improvement.</li>
        <li>Allows geographically distributed deployment for faster user access.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
     +--------+
     | Client |
     +--------+
         |
    -------------
   |   Load      |
   | Balancer    |
    -------------
   /      |      \
Node1   Node2   Node3
  |       |       |
Replica Replica Replica
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a distributed system?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A system where multiple independent nodes work together to perform tasks, providing scalability, fault tolerance, and high availability.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is fault tolerance?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> The ability of a system to continue operating correctly even if some nodes fail.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is leader election?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> The process of selecting a coordinator node to manage tasks or resources efficiently.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are heartbeats in distributed systems?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Periodic signals sent by nodes to indicate they are alive and functioning.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why is replication important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> It ensures high availability and data durability by keeping multiple copies of data/services.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is consensus in distributed systems?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A method to ensure all nodes agree on a single state or value, preventing conflicts and inconsistencies.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Distributed systems = multiple nodes working together.</li>
        <li>Fault tolerance ensures the system continues despite failures.</li>
        <li>Leader election coordinates tasks; heartbeats monitor node health.</li>
        <li>Replication ensures data availability; consensus ensures agreement.</li>
        <li>Essential for scalable, reliable, and high-performance applications.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 11,
  title: "Class Diagrams & UML",
  path: "/system-design/lld/class-diagrams",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Class Diagrams</strong> in UML (Unified Modeling Language) represent the structure of a system by showing classes, their attributes, methods, and relationships.  
        They are fundamental in designing and visualizing object-oriented systems.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Classes</strong> – Blueprints for objects, containing attributes (data) and methods (functions).
        </li>
        <li>
          <strong style={{ color: colors.success }}>Relationships</strong> – Connections between classes, including:
          <ul>
            <li><strong>Association:</strong> General connection between classes.</li>
            <li><strong>Aggregation:</strong> “Has-a” relationship; whole-part relationship where parts can exist independently.</li>
            <li><strong>Composition:</strong> Strong “Has-a” relationship; parts cannot exist independently of the whole.</li>
            <li><strong>Inheritance:</strong> “Is-a” relationship; child class inherits attributes and methods from parent class.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: colors.info }}>UML Notation</strong> – Standardized symbols and lines to represent classes and their relationships visually.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Designing object-oriented systems before implementation.</li>
        <li>Documenting system architecture for better understanding.</li>
        <li>Identifying class responsibilities, relationships, and dependencies.</li>
        <li>Helps in designing APIs and microservices structure.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Provides a clear visual representation of system structure.</li>
        <li>Helps developers understand relationships between classes.</li>
        <li>Reduces design errors before coding.</li>
        <li>Facilitates communication between team members and stakeholders.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Improves system design and maintainability.</li>
        <li>Helps in planning class interactions and object lifecycles.</li>
        <li>Assists in identifying reusable components.</li>
        <li>Serves as documentation for future reference.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
+-----------------+
|      User       |
+-----------------+
| - name          |
| - email         |
+-----------------+
| + login()       |
| + logout()      |
+-----------------+
         |
         | 1
         |
+-----------------+
|    Account      |
+-----------------+
| - balance       |
+-----------------+
| + deposit()     |
| + withdraw()    |
+-----------------+
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a UML class diagram?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A diagram that shows the structure of classes, their attributes, methods, and relationships in a system.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between aggregation and composition?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Aggregation = parts can exist independently; Composition = parts cannot exist without the whole.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is inheritance?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A relationship where a child class inherits attributes and methods from a parent class.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use class diagrams?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To visualize and plan system structure, understand class relationships, and reduce design errors.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are associations in UML?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> General connections between classes representing interactions or dependencies.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>UML class diagrams show classes, attributes, methods, and relationships.</li>
        <li>Aggregation = weak “has-a”, Composition = strong “has-a”, Inheritance = “is-a”.</li>
        <li>Used for system design, documentation, and communication.</li>
        <li>Helps plan object interactions and maintainable architecture.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 12,
  title: "Design Principles (SOLID, DRY, KISS)",
  path: "/system-design/lld/design-principles",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Design Principles</strong> are guidelines for writing maintainable, scalable, and robust software.  
        Following principles like <strong style={{ color: colors.secondary }}>SOLID</strong>, <strong style={{ color: colors.success }}>DRY</strong>, and <strong style={{ color: colors.info }}>KISS</strong> ensures cleaner, easier-to-understand code in Low-Level Design (LLD).
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Principles</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>SOLID Principles</strong> – Five object-oriented design principles:
          <ul>
            <li><strong>Single Responsibility Principle (SRP):</strong> A class should have one responsibility.</li>
            <li><strong>Open/Closed Principle (OCP):</strong> Software entities should be open for extension but closed for modification.</li>
            <li><strong>Liskov Substitution Principle (LSP):</strong> Subclasses should be substitutable for their base classes.</li>
            <li><strong>Interface Segregation Principle (ISP):</strong> Prefer many small, specific interfaces over a large general-purpose one.</li>
            <li><strong>Dependency Inversion Principle (DIP):</strong> Depend on abstractions, not concrete implementations.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: colors.success }}>DRY (Don't Repeat Yourself)</strong> – Avoid code duplication; reuse code to reduce bugs and maintenance effort.
        </li>
        <li>
          <strong style={{ color: colors.info }}>KISS (Keep It Simple, Stupid)</strong> – Write code that is as simple as possible; avoid unnecessary complexity.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>YAGNI (You Aren't Gonna Need It)</strong> – Only implement what is currently needed; avoid speculative features.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Design classes and modules with clear responsibilities.</li>
        <li>Write reusable, maintainable, and scalable code.</li>
        <li>Prevent code duplication and reduce complexity.</li>
        <li>Enhance readability and team collaboration.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Prevents technical debt in large systems.</li>
        <li>Improves code maintainability and reduces bugs.</li>
        <li>Supports easier testing and refactoring.</li>
        <li>Ensures consistent design across the codebase.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Cleaner, modular, and understandable code.</li>
        <li>Reduced duplication and maintenance effort.</li>
        <li>Promotes code extensibility and scalability.</li>
        <li>Facilitates better collaboration among developers.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Class A (SRP) → handles only one responsibility
Class B → reusable utility methods (DRY)
Class C → simple and straightforward (KISS)
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the SRP in SOLID?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A class should have only one reason to change; it should handle a single responsibility.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Explain DRY principle.  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Avoid repeating code; reuse functions, modules, or classes to reduce bugs and improve maintainability.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What does KISS mean?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Keep code as simple as possible; avoid unnecessary complexity.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is YAGNI?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Implement only what is required now; avoid building features you might need in the future.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why are SOLID principles important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They help create modular, maintainable, and scalable object-oriented code.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>SOLID = modular, maintainable OOP design.</li>
        <li>DRY = avoid code repetition.</li>
        <li>KISS = keep code simple and readable.</li>
        <li>YAGNI = implement only necessary features.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 13,
  title: "Design Patterns",
  path: "/system-design/lld/design-patterns",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Design Patterns</strong> are standard, reusable solutions to common software design problems.  
        They help developers create robust, maintainable, and scalable code by providing proven approaches.  
        Key types include <strong style={{ color: colors.secondary }}>Creational</strong>, <strong style={{ color: colors.success }}>Structural</strong>, and <strong style={{ color: colors.info }}>Behavioral</strong> patterns.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Patterns</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Creational Patterns</strong> – Handle object creation:
          <ul>
            <li><strong>Singleton:</strong> Ensures only one instance of a class exists.</li>
            <li><strong>Factory:</strong> Creates objects without specifying exact classes.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: colors.success }}>Structural Patterns</strong> – Manage relationships between objects:
          <ul>
            <li><strong>Adapter:</strong> Converts one interface to another.</li>
            <li><strong>Decorator:</strong> Adds behavior to objects dynamically.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: colors.info }}>Behavioral Patterns</strong> – Handle communication between objects:
          <ul>
            <li><strong>Observer:</strong> Notifies dependent objects of changes.</li>
            <li><strong>Strategy:</strong> Encapsulates algorithms and makes them interchangeable.</li>
          </ul>
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Use patterns to solve recurring design problems efficiently.</li>
        <li>Ensure consistent design approaches across teams and projects.</li>
        <li>Improve code readability, maintainability, and flexibility.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Reduces development time by reusing proven solutions.</li>
        <li>Prevents reinventing the wheel and potential design mistakes.</li>
        <li>Promotes best practices and design consistency.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Faster development with reliable solutions.</li>
        <li>Code becomes easier to maintain and extend.</li>
        <li>Encourages modular, reusable, and scalable architecture.</li>
        <li>Improves communication among developers through common terminology.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Client → Factory → Product
Subject → Observer → Listeners
Context → Strategy → Algorithm
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are design patterns?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Reusable solutions to common software design problems.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Explain Singleton pattern.  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Ensures only one instance of a class exists and provides a global access point.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> When would you use Factory pattern?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> When object creation logic should be separated from its usage.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the Observer pattern?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Allows objects to be notified automatically when another object changes state.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the benefit of using design patterns?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Promotes code reuse, consistency, maintainability, and easier communication.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Design patterns = reusable solutions to design problems.</li>
        <li>Creational = object creation; Structural = object relationships; Behavioral = object interactions.</li>
        <li>Common examples: Singleton, Factory, Observer, Adapter, Strategy.</li>
        <li>Benefits: maintainable, scalable, and consistent code.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 14,
  title: "Concurrency & Threading",
  path: "/system-design/lld/concurrency",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Concurrency & Threading </strong> 
        deals with executing multiple tasks simultaneously to improve application performance 
        and responsiveness. It helps utilize system resources efficiently and manage parallel operations.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Threads</strong> – Lightweight units of execution within a process.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Race Conditions</strong> – Occur when multiple threads access shared resources simultaneously, leading to unpredictable results.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Deadlocks</strong> – When two or more threads are waiting on each other indefinitely, causing the program to hang.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Locking</strong> – Mechanisms to control access to shared resources and prevent race conditions.  
          Examples: mutex, semaphore.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Thread Pools</strong> – Pre-created pool of threads to reuse for multiple tasks, improving efficiency.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Optimistic vs Pessimistic Locking</strong> – 
          Optimistic assumes minimal conflicts and checks before committing;  
          Pessimistic locks resources upfront to prevent conflicts.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Perform multiple operations in parallel (e.g., handling multiple user requests).</li>
        <li>Improve responsiveness in UI applications by offloading heavy tasks to background threads.</li>
        <li>Manage concurrent access to shared resources in databases or in-memory stores.</li>
        <li>Implement thread-safe operations to avoid inconsistent states or crashes.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Maximizes CPU utilization and system performance.</li>
        <li>Prevents bugs like race conditions or deadlocks in concurrent programs.</li>
        <li>Ensures reliable and predictable behavior in multi-threaded applications.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Faster task execution by parallel processing.</li>
        <li>Better resource utilization and scalability.</li>
        <li>Improved responsiveness and user experience.</li>
        <li>Reliable concurrency control with proper locking mechanisms.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Thread Pool
 ├─ Task 1
 ├─ Task 2
 ├─ Task 3
Shared Resource → Mutex / Lock
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a thread?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A lightweight unit of execution within a process.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a race condition?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> When multiple threads access shared data simultaneously, causing unpredictable results.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How can deadlocks be prevented?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By proper resource ordering, using timeouts, or applying lock hierarchy strategies.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between optimistic and pessimistic locking?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Optimistic locking assumes minimal conflicts; Pessimistic locking locks resources to prevent conflicts.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use thread pools?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To reuse threads for multiple tasks, reducing overhead and improving efficiency.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Concurrency = executing multiple tasks at the same time.</li>
        <li>Threads = lightweight units of execution within a process.</li>
        <li>Key issues: race conditions, deadlocks → solved using locks and thread-safe practices.</li>
        <li>Thread pools and locking improve performance, reliability, and scalability.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 15,
  title: "LLD Case Studies",
  path: "/system-design/lld/examples",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>LLD Case Studies</strong> are practical examples 
        that demonstrate how to apply low-level design principles, patterns, and best practices 
        to real-world systems. Studying these cases helps in understanding object-oriented 
        modeling, design patterns, and system decomposition.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Common LLD Case Studies</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Parking Lot System</strong> – Design classes for vehicles, parking spots, and ticket management.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Elevator System</strong> – Classes for elevators, floors, buttons, and scheduling algorithms.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Library Management System</strong> – Classes for books, users, loans, reservations, and fine calculation.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Amazon Locker</strong> – Manage locker locations, packages, and pickup workflows.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>ATM Workflow</strong> – Classes for accounts, transactions, authentication, and cash handling.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Helps visualize real-world systems using object-oriented design.</li>
        <li>Practices class decomposition, relationships, and modular design.</li>
        <li>Applies design patterns like Singleton, Strategy, Observer in practical scenarios.</li>
        <li>Prepares for interviews by demonstrating problem-solving skills in LLD questions.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Bridges the gap between theoretical knowledge and real-world implementation.</li>
        <li>Improves coding quality by designing scalable, maintainable systems.</li>
        <li>Builds intuition for choosing the right classes, relationships, and patterns.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Hands-on understanding of low-level design concepts.</li>
        <li>Ability to create modular, reusable, and testable code.</li>
        <li>Enhanced problem-solving skills for complex system design.</li>
        <li>Better preparation for LLD-focused interviews.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
ParkingLot
 ├─ Vehicle
 ├─ ParkingSpot
 ├─ Ticket
ElevatorSystem
 ├─ Elevator
 ├─ Floor
 ├─ Button
LibraryManagement
 ├─ Book
 ├─ User
 ├─ Loan
ATMWorkflow
 ├─ Account
 ├─ Transaction
 ├─ Authentication
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the purpose of LLD case studies?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To practice real-world design problems and understand object-oriented modeling.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you choose classes for a system?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Identify entities, their attributes, responsibilities, and relationships.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use design patterns in LLD?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To provide reusable, tested solutions for common design problems.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do case studies help in interviews?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They demonstrate your ability to design structured, maintainable, and scalable systems.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Can LLD case studies be applied to real projects?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Yes, they serve as blueprints for building production-ready systems.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>LLD case studies = practical examples for designing real-world systems.</li>
        <li>Focus on classes, relationships, and design patterns.</li>
        <li>Improves problem-solving, modularity, and code quality.</li>
        <li>Prepares developers for LLD-focused interviews and real projects.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 16,
  title: "Authentication & Authorization",
  path: "/system-design/components/auth",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Authentication & Authorization</strong> are core components of any secure system. 
        <strong>Authentication</strong> verifies who the user is, while <strong>Authorization</strong> determines what resources the user can access.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>OAuth2</strong> – A framework that allows third-party apps to access user data securely without sharing credentials.
        </li>
        <li>
          <strong style={{ color: colors.success }}>JWT (JSON Web Token)</strong> – Compact token used to securely transmit user identity and claims between client and server.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Session-Based Authentication</strong> – User login sessions stored on the server, often with a session ID cookie.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>SSO (Single Sign-On)</strong> – Allows users to authenticate once and access multiple applications seamlessly.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Refresh Tokens</strong> – Used to obtain new access tokens without requiring the user to login again.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Access Control</strong> – Defines permissions and roles to control what resources users can access.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Secures APIs, web applications, and mobile apps.</li>
        <li>Prevents unauthorized access to sensitive data.</li>
        <li>Enables role-based or permission-based access control.</li>
        <li>Supports modern authentication mechanisms like OAuth2 and SSO.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Protects user data and system resources from unauthorized access.</li>
        <li>Improves trust and compliance with security standards.</li>
        <li>Allows scaling authentication securely for large systems.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Secure user identity verification.</li>
        <li>Granular control over resource access.</li>
        <li>Enables single login across multiple services (SSO).</li>
        <li>Supports token-based authentication for stateless systems.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Client → Auth Server → Access Token
       ↘ API Server (validates token)
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between authentication and authorization?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Authentication verifies who the user is; Authorization decides what resources the user can access.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use JWT instead of sessions?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> JWT is stateless, scalable, and works well for APIs and distributed systems.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is OAuth2 used for?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Securely granting third-party apps access to user resources without sharing passwords.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does SSO help users?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Users log in once and can access multiple apps without repeated logins.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What are refresh tokens?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Tokens used to get new access tokens without asking the user to log in again.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Authentication = verifies identity; Authorization = controls access.</li>
        <li>JWT and OAuth2 enable secure, token-based authentication.</li>
        <li>SSO allows seamless login across applications.</li>
        <li>Access control enforces resource permissions.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 17,
  title: "Distributed Caching Systems",
  path: "/system-design/components/distributed-cache",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Distributed Caching Systems</strong> are used to store frequently accessed data across multiple cache nodes. 
        They improve application performance, reduce database load, and ensure scalability in high-traffic systems.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Redis Cluster</strong> – A distributed Redis setup where data is partitioned across multiple nodes for scalability and fault tolerance.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Cache Invalidation</strong> – Removing or updating stale cache entries to ensure data consistency.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Cache-Aside Pattern</strong> – Application checks cache first; if missing, fetches from DB and populates cache.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Read-Through/Write-Through Caching</strong> – Cache automatically fetches from DB on a miss (read-through) or updates DB when cache is updated (write-through).
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Speeds up response times for frequently requested data.</li>
        <li>Reduces load on the main database.</li>
        <li>Ensures high availability by replicating data across cache nodes.</li>
        <li>Used in applications with high read/write traffic and distributed architecture.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Prevents database bottlenecks during peak loads.</li>
        <li>Improves user experience with faster data access.</li>
        <li>Supports horizontal scaling by distributing cache across multiple nodes.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Faster response times → better user experience.</li>
        <li>Reduces database load and improves scalability.</li>
        <li>Ensures data redundancy and high availability.</li>
        <li>Supports various caching patterns for consistency and reliability.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Client → Cache Node 1
       → Cache Node 2
       → Cache Node 3
       ↘ Database (on cache miss)
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is a distributed cache?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> A caching system where data is spread across multiple nodes to improve performance, availability, and scalability.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is cache invalidation?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Removing or updating outdated cache entries to maintain data consistency.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Explain the cache-aside pattern.  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Application reads from cache first; on a miss, it fetches from the database and updates the cache.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is read-through and write-through caching?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Read-through fetches data from DB automatically on cache miss; write-through updates DB when cache is updated.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use a Redis cluster?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> For horizontal scaling, fault tolerance, and distributing data across multiple nodes.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Distributed caching stores data across multiple nodes for speed and scalability.</li>
        <li>Cache-aside, read-through, write-through are common patterns.</li>
        <li>Cache invalidation ensures data consistency.</li>
        <li>Improves performance, reduces DB load, and supports high availability.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 18,
  title: "Database Scaling",
  path: "/system-design/components/db-scaling",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Database Scaling</strong> refers to techniques and strategies used to handle increasing data volumes, traffic, and load on a database system. 
        Proper scaling ensures high performance, availability, and reliability of applications.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Indexes</strong> – Data structures that speed up query retrieval by reducing the amount of scanned data.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Query Optimization</strong> – Techniques to rewrite or tune queries for faster execution and reduced resource usage.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Sharding</strong> – Partitioning data horizontally across multiple database nodes for better performance and scalability.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Replication</strong> – Creating copies of databases to improve read performance, fault tolerance, and high availability.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Partitioning</strong> – Dividing a database table into smaller, manageable pieces to improve query performance and maintenance.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Improve read and write performance by distributing load across multiple nodes.</li>
        <li>Handle growing data volumes without degrading application performance.</li>
        <li>Ensure high availability and fault tolerance using replication.</li>
        <li>Optimize queries to reduce database CPU, memory, and I/O usage.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Prevents database bottlenecks as application traffic increases.</li>
        <li>Maintains fast response times for users.</li>
        <li>Supports horizontal scaling for distributed architectures.</li>
        <li>Reduces downtime risk with replicated nodes and partitions.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Improved query performance with indexing and optimization.</li>
        <li>Scalable database architecture using sharding and partitioning.</li>
        <li>High availability and fault tolerance through replication.</li>
        <li>Efficient resource utilization and reduced latency.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Client Requests
      |
    Load Balancer
      |
  DB Shard 1 → Read Replica
  DB Shard 2 → Read Replica
  DB Shard 3 → Read Replica
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is database sharding?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Splitting a database horizontally into smaller pieces to distribute load and improve performance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does replication improve database performance?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By creating copies of data, allowing reads from multiple nodes and ensuring high availability.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why are indexes important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They allow faster data retrieval by reducing the amount of data scanned in queries.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is partitioning?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Dividing a large table into smaller pieces for better query performance and easier maintenance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does query optimization help?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Optimized queries use fewer resources, execute faster, and improve overall database efficiency.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Database scaling ensures high performance, availability, and reliability.</li>
        <li>Indexing, query optimization, sharding, replication, and partitioning are key techniques.</li>
        <li>Supports horizontal scaling, reduces latency, and improves resource utilization.</li>
        <li>Essential for handling growing data and traffic in distributed systems.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 19,
  title: "Monitoring & Logging",
  path: "/system-design/components/observability",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Monitoring & Logging</strong> are essential components of observability in a system. 
        They help track system health, detect anomalies, diagnose issues, and ensure high availability and performance.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Metrics</strong> – Quantitative data like CPU usage, memory usage, request rates, and error rates used to monitor system performance.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Logs</strong> – Detailed records of system events, errors, and transactions to aid debugging and auditing.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Tracing</strong> – Tracks the flow of requests through different services to identify bottlenecks in distributed systems.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Alerts</strong> – Notifications triggered when metrics exceed thresholds or errors occur, enabling proactive response.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Visualization Tools</strong> – Tools like Grafana and Kibana provide dashboards to view metrics, logs, and traces.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Track system health and performance in real-time.</li>
        <li>Detect anomalies, errors, and potential failures early.</li>
        <li>Debug and analyze issues in distributed systems.</li>
        <li>Provide actionable insights for capacity planning and optimization.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Ensures systems remain reliable and available for users.</li>
        <li>Helps in reducing downtime and improving user experience.</li>
        <li>Facilitates proactive problem detection and faster incident response.</li>
        <li>Critical for distributed and microservice architectures where failures can be complex to track.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Faster detection and resolution of system issues.</li>
        <li>Improved reliability and uptime of applications.</li>
        <li>Better resource utilization through data-driven insights.</li>
        <li>Compliance and audit-ready logs for accountability.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Application / Services → Logs & Metrics → Monitoring Tools
                         |
                      Alerts / Dashboard
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the difference between monitoring and logging?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Monitoring tracks metrics and system health in real-time; logging records detailed events and errors for analysis.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do tracing and metrics help in distributed systems?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Tracing tracks request flows to identify bottlenecks; metrics quantify system performance to detect anomalies.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What tools are commonly used for monitoring and logging?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Prometheus (metrics), Grafana (visualization), ELK stack (logs), Jaeger/Zipkin (tracing).
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why are alerts important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Alerts notify engineers about issues proactively, enabling faster response before end users are impacted.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does monitoring improve system reliability?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By continuously tracking performance and errors, issues are detected early, reducing downtime.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Monitoring & logging ensure visibility into system health and performance.</li>
        <li>Metrics track performance, logs capture events, tracing identifies bottlenecks.</li>
        <li>Alerts enable proactive issue resolution.</li>
        <li>Tools like Prometheus, Grafana, and ELK provide observability and insights.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 20,
  title: "Rate Limiting & Throttling",
  path: "/system-design/components/rate-limiting",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Rate Limiting & Throttling</strong> are techniques used to control the number of requests a user or client can make to an API or service within a specified time window.  
        They help prevent abuse, reduce server overload, and ensure fair usage among users.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Token Bucket</strong> – Requests consume tokens from a bucket; tokens are replenished at a fixed rate. Ensures smooth request flow.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Leaky Bucket</strong> – Requests enter a queue and are processed at a fixed rate; excess requests are delayed or dropped.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Sliding Window Counters</strong> – Tracks requests in a moving time window to dynamically enforce limits.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Throttling</strong> – Slows down or rejects requests that exceed the allowed rate to prevent server overload.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Protect APIs from abuse and DoS attacks.</li>
        <li>Prevent backend services from being overwhelmed by traffic spikes.</li>
        <li>Ensure fair usage among different users or clients.</li>
        <li>Control billing in pay-per-use APIs by limiting requests.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Prevents servers from crashing due to too many requests.</li>
        <li>Maintains consistent performance and response times for all users.</li>
        <li>Improves security by reducing risk of brute-force attacks.</li>
        <li>Enables predictable resource usage and cost management.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Improved reliability and stability of APIs and services.</li>
        <li>Fair distribution of resources among users.</li>
        <li>Reduced risk of server overload or downtime.</li>
        <li>Better control over traffic spikes and abuse.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Client Requests → Rate Limiter → API Server
       |
     Token Bucket / Leaky Bucket / Sliding Window
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is rate limiting?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Restricting the number of requests a client can make to a service in a specific time window.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Difference between throttling and rate limiting?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Rate limiting sets a hard cap on requests; throttling slows down or delays requests when limits are reached.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does the token bucket algorithm work?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Each request consumes a token; tokens are replenished over time to allow new requests.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is the leaky bucket algorithm?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Requests enter a queue and are processed at a fixed rate; excess requests may be dropped.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use sliding window counters?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To dynamically track requests in a moving time window and enforce flexible limits.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Rate limiting and throttling control request rates to prevent abuse.</li>
        <li>Token bucket, leaky bucket, and sliding window are common techniques.</li>
        <li>Improves system reliability, fairness, and security.</li>
        <li>Ensures APIs remain performant under high load.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 21,
  title: "Design URL Shortener",
  path: "/system-design/topics/url-shortener",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>URL Shortener</strong> is a service that converts long URLs into short, easy-to-share links while redirecting users to the original URL.  
        <br />
        Key techniques involve generating unique short IDs, storing mappings in a database, and caching frequently accessed URLs for faster access.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>How It Works / Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Hashing Strategies</strong> – Generate unique IDs from long URLs using hash functions to avoid collisions.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Base62 Encoding</strong> – Converts numeric IDs to a short alphanumeric string (A-Z, a-z, 0-9) for compact URLs.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Database Schema</strong> – Store mappings of short URL → original URL with metadata like creation date, usage count.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Cache Layer</strong> – Frequently accessed URLs are cached (Redis/Memcached) to reduce DB lookups and improve performance.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Redirect Flow</strong> – When a user clicks a short URL, the service looks up the original URL and redirects them.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Shortening long URLs for easy sharing on social media, emails, and SMS.</li>
        <li>Tracking link usage and analytics (click counts, geographic data).</li>
        <li>Improving user experience by generating human-readable short links.</li>
        <li>Masking complex URLs for marketing campaigns or temporary links.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Makes URLs easier to share and remember.</li>
        <li>Reduces visual clutter in messages and social posts.</li>
        <li>Supports analytics for businesses to track link performance.</li>
        <li>Helps manage and monitor links efficiently at scale.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Faster user access with shorter, simple URLs.</li>
        <li>Reduces storage and bandwidth usage by using compact IDs.</li>
        <li>Supports caching for high performance and scalability.</li>
        <li>Enables analytics for marketing and traffic insights.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User → Short URL → URL Shortener Service → Lookup DB / Cache → Redirect to Original URL
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you generate unique short URLs?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use hashing or incremental IDs encoded in Base62 to ensure uniqueness and compactness.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use Base62 encoding?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Base62 generates shorter, alphanumeric URLs that are easier to read and share.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you handle high traffic for popular URLs?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Cache frequently accessed URLs in memory (Redis/Memcached) to reduce database lookups.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you avoid collisions in short URL generation?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use robust hash functions or check for duplicates in the database before assigning a short URL.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How would you scale a URL shortener service?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use horizontal scaling for the service layer, database sharding, caching, and CDNs for global access.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>URL shortener converts long URLs to compact, shareable links.</li>
        <li>Base62 IDs and hashing ensure uniqueness and readability.</li>
        <li>Caching improves performance for popular links.</li>
        <li>Supports analytics and scalable redirection at high traffic.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 22,
  title: "Design Instagram",
  path: "/system-design/topics/instagram",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Instagram</strong> is a social media platform focused on photo and video sharing.  
        <br />
        Designing Instagram at scale requires handling media storage, feed generation, caching, and sharding to support millions of users with low latency.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Feed Ranking</strong> – Algorithm determines the order of posts in a user's feed based on relevance, engagement, and recency.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Media Storage</strong> – Store photos and videos efficiently using object storage systems (e.g., AWS S3) with versioning and replication.
        </li>
        <li>
          <strong style={{ color: colors.info }}>CDN</strong> – Distribute media content to edge servers closer to users for faster access and reduced latency.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Caching</strong> – Frequently accessed feeds, profiles, and media metadata are cached (Redis/Memcached) to reduce database load.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Sharding</strong> – Database is partitioned to distribute user data across multiple servers for scalability.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Fan-out on Write / Read</strong> –  
          Distribute new posts to followers’ feeds on write (push) or generate feeds on read (pull) depending on performance trade-offs.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Deliver personalized feeds to millions of users in real-time.</li>
        <li>Store and serve large amounts of media efficiently.</li>
        <li>Reduce latency with caching and CDNs.</li>
        <li>Ensure system reliability and scalability with sharding and replication.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Handles massive user traffic and content uploads efficiently.</li>
        <li>Maintains a smooth and responsive user experience.</li>
        <li>Allows horizontal scaling of the service as the user base grows.</li>
        <li>Supports high availability and fault tolerance for media delivery.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Fast and personalized content delivery.</li>
        <li>Scalable media storage and retrieval system.</li>
        <li>Reduced server load via caching and CDNs.</li>
        <li>Efficient database management through sharding and fan-out strategies.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Users → Feed Service → DB Shards / Cache → Media Storage → CDN → Users
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How would you design Instagram’s feed system?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use feed ranking algorithms, cache frequently accessed feeds, and employ fan-out on write or read strategies to deliver posts.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you handle storing billions of images/videos?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use object storage with replication, CDN distribution, and efficient metadata storage.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is fan-out on write vs fan-out on read?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Fan-out on write pushes posts to followers’ feeds; fan-out on read generates feeds when users request them. Trade-offs involve write/read latency and storage.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why use sharding for Instagram?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> To distribute user data across multiple databases, ensuring scalability and high performance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does CDN help in Instagram?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> CDNs serve media closer to users, reducing latency and improving load times.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Instagram requires scalable media storage and feed delivery.</li>
        <li>Feed ranking, caching, and CDNs improve performance and UX.</li>
        <li>Sharding and fan-out strategies ensure scalability and efficiency.</li>
        <li>System handles high availability, large traffic, and billions of media items.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 23,
  title: "Design Uber",
  path: "/system-design/topics/uber",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Uber</strong> is a ride-hailing platform that connects riders with drivers in real-time.  
        <br />
        Designing Uber involves handling live GPS tracking, efficient driver-passenger matching, scalable request handling, and reliable notifications.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Real-time GPS Tracking</strong> – Continuously track locations of drivers and riders for accurate matching and ETA ( Estimated Time for Arrival ) calculations.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Driver-Rider Matching</strong> – Efficiently match riders with nearby drivers using algorithms like geohashing or spatial indexing.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Geohashing</strong> – Converts GPS coordinates into hash codes to quickly find nearby drivers.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Load Balancing</strong> – Distribute requests across multiple servers to handle millions of ride requests simultaneously.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Event Queues</strong> – Handle asynchronous events such as ride requests, notifications, and payment processing reliably (Kafka, RabbitMQ, SQS).
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Usage</h2>
      <ul>
        <li>Match riders with the nearest drivers in real-time.</li>
        <li>Track live locations to provide accurate ETAs ( Estimated Time for Arrival ) and route guidance.</li>
        <li>Process ride requests, cancellations, and payments asynchronously.</li>
        <li>Scale the system to handle high traffic in busy cities.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why It Matters</h2>
      <ul>
        <li>Real-time location tracking ensures efficient pickups and drop-offs.</li>
        <li>Efficient matching improves user experience and reduces wait times.</li>
        <li>Scalable architecture handles millions of users simultaneously.</li>
        <li>Asynchronous processing ensures reliability and prevents system bottlenecks.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Benefits</h2>
      <ul>
        <li>Faster and accurate ride matching.</li>
        <li>Real-time updates on driver and rider locations.</li>
        <li>Reliable ride request and payment handling.</li>
        <li>High availability and scalability in dense urban areas.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Rider Request → API Gateway → Load Balancer → Matching Service → Driver
       |                                          |
       → Event Queue → Notification Service       → GPS Updates
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you match riders with drivers efficiently?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use spatial indexing or geohashing to find nearby drivers and assign based on ETA ( Estimated Time for Arrival ) , availability, and driver preferences.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Uber handle real-time GPS updates?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Drivers’ and riders’ locations are streamed to the system continuously, updating routes and ETAs ( Estimated Time for Arrival ) .
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What role do event queues play?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Event queues handle asynchronous tasks like notifications, payment processing, and ride state updates reliably.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you scale Uber to handle high traffic?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Use load balancing, sharding, and distributed services to ensure high availability and performance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why is geohashing important in ride-hailing apps?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Geohashing allows efficient querying of nearby drivers using hashed spatial coordinates, reducing search complexity.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Uber requires real-time GPS tracking and fast driver-rider matching.</li>
        <li>Geohashing and event queues improve performance and reliability.</li>
        <li>Load balancing and distributed services enable scalability.</li>
        <li>System ensures high availability, fast notifications, and efficient ride handling.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 24,
  title: "Design WhatsApp",
  path: "/system-design/topics/whatsapp",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>WhatsApp</strong> is a real-time messaging platform that allows users 
        to send messages, images, videos, and voice notes securely.  
        It uses message queues, end-to-end encryption, and delivery acknowledgments to ensure reliability and privacy.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Features & Usage</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Real-Time Messaging</strong> – Messages are delivered instantly using persistent TCP/WebSocket connections.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Message Queues</strong> – Handle offline messages and ensure reliable delivery when users reconnect.
        </li>
        <li>
          <strong style={{ color: colors.info }}>End-to-End Encryption</strong> – Messages are encrypted on the sender’s device and decrypted on the recipient’s device.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Delivery & Read Acknowledgments</strong> – Track message status: sent, delivered, read.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why & Benefits</h2>
      <ul>
        <li>Secure communication with end-to-end encryption.</li>
        <li>Reliable delivery even when users are offline.</li>
        <li>Efficient real-time messaging with low latency.</li>
        <li>User-friendly experience with status indicators.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Sender Device → WhatsApp Server → Message Queue → Receiver Device
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does WhatsApp deliver messages in real-time?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using persistent TCP or WebSocket connections between clients and servers.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does WhatsApp ensure message reliability?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Messages are stored in queues if the recipient is offline and delivered once they reconnect.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is end-to-end encryption?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Messages are encrypted on the sender’s device and can only be decrypted by the recipient.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are delivery and read statuses tracked?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Servers send acknowledgments back to the sender when the message is delivered and read.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>WhatsApp = secure, real-time messaging platform.</li>
        <li>Uses message queues for reliable delivery.</li>
        <li>End-to-end encryption ensures privacy.</li>
        <li>Status indicators improve user experience.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 25,
  title: "Design YouTube",
  path: "/system-design/topics/youtube",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>YouTube</strong> is a large-scale video streaming platform that allows users 
        to upload, watch, and share videos. It leverages CDNs, video encoding pipelines, caching, 
        and recommendation systems to deliver content efficiently.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Features & Usage</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Video Encoding Pipeline</strong> – Converts uploaded videos into multiple resolutions (1080p, 720p, 480p) for streaming across devices.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Content Delivery Network (CDN)</strong> – Stores and serves videos from edge servers closer to users for fast playback.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Recommendations & Personalization</strong> – Suggests videos based on user history, watch patterns, and engagement metrics.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Metadata Storage</strong> – Stores video metadata (title, description, views, likes) in databases for search, indexing, and analytics.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why & Benefits</h2>
      <ul>
        <li>Efficient video delivery using CDNs reduces latency and buffering.</li>
        <li>Adaptive streaming ensures smooth playback across devices and network conditions.</li>
        <li>Recommendation engine increases user engagement and watch time.</li>
        <li>Metadata storage enables search, analytics, and content management.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User Request → CDN Edge Node → Video Server → Video Encoding Pipeline
      |
Recommendation Engine → Metadata DB
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does YouTube handle different video resolutions?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Videos are transcoded into multiple resolutions during upload, enabling adaptive streaming based on network and device.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does YouTube reduce latency for video playback?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using CDNs to store videos on edge servers closer to users for faster delivery.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does the recommendation system work?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> It analyzes user history, engagement, and patterns to suggest relevant videos.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> Why is metadata storage important?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Stores information like video titles, views, and likes for search, indexing, and analytics.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>YouTube = video streaming platform with global reach.</li>
        <li>CDNs reduce latency; encoding pipeline ensures multiple resolutions.</li>
        <li>Recommendation engine boosts engagement.</li>
        <li>Metadata storage enables search, analytics, and content management.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 26,
  title: "Design Netflix",
  path: "/system-design/topics/netflix",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Netflix</strong> is a large-scale video streaming platform that delivers movies and TV shows 
        to millions of users worldwide. It uses edge caching, distributed services, and resilient architectures to ensure high availability 
        and performance.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Features & Usage</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Video Streaming & Encoding</strong> – Videos are transcoded into multiple formats/resolutions for adaptive streaming.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Edge Caching & CDNs</strong> – Frequently watched content is cached closer to users to reduce latency and improve playback speed.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Distributed Services</strong> – Microservices handle different components like user profiles, recommendations, billing, and search independently for scalability.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Chaos Engineering & Resilience</strong> – Netflix intentionally tests failures in production (Chaos Monkey) to ensure system reliability.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Why & Benefits</h2>
      <ul>
        <li>Edge caching and CDNs reduce buffering and improve user experience globally.</li>
        <li>Microservices allow independent scaling and fault isolation for better reliability.</li>
        <li>Chaos engineering ensures resilience under failures and prevents downtime.</li>
        <li>Adaptive streaming allows smooth playback across network conditions and devices.</li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User Request → CDN Edge Node → Video Server → Video Encoding Pipeline
      |
Microservices: Recommendations, Profiles, Billing, Search
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Netflix ensure smooth streaming for global users?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using CDNs and edge caching to deliver videos from servers close to users.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What role do microservices play in Netflix architecture?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> They allow independent scaling, better fault isolation, and easier maintenance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is Chaos Engineering and why Netflix uses it?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Testing failures in production to ensure resilience and prevent downtime.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does adaptive streaming improve user experience?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By adjusting video quality based on network speed and device capabilities.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Netflix = global video streaming platform.</li>
        <li>CDNs & edge caching reduce latency and buffering.</li>
        <li>Distributed microservices provide scalability and fault tolerance.</li>
        <li>Chaos engineering ensures system reliability.</li>
        <li>Adaptive streaming delivers smooth playback across devices and networks.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 27,
  title: "Design Amazon",
  path: "/system-design/topics/amazon",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Amazon</strong> is a large-scale e-commerce platform that handles millions of products, users, and orders simultaneously.  
        It requires a distributed, scalable, and reliable architecture to manage catalog, inventory, orders, and payments efficiently.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts & Components</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Product Catalog</strong> – Stores product details, categories, pricing, and inventory.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Order Management</strong> – Tracks user orders, status, and shipment details.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Payment Processing</strong> – Handles secure payments via multiple gateways.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Inventory Tracking</strong> – Maintains stock levels and synchronizes with warehouses.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Logistics & Delivery</strong> – Integrates with delivery partners, calculates ETA, and optimizes routes.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Distributed Architecture</strong> – Microservices, caching, queues, and replication to scale efficiently.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User → Web/Mobile → API Gateway → Microservices → Database / Cache
                   |          \
                   |           → Payment Gateway
                   |           → Logistics Service
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Amazon handle millions of product queries?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using distributed databases, caching, and search indexing for fast response.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is order consistency maintained?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using transactions, event-driven architecture, and message queues to track order states.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are inventory updates handled in real-time?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Through distributed cache, replication, and atomic operations in databases.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is payment security ensured?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using secure APIs, encryption, tokenization, and PCI DSS compliance.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Amazon optimize delivery routes?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using real-time logistics data, geolocation, and routing algorithms.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Amazon = distributed e-commerce platform with scalable architecture.</li>
        <li>Key components: product catalog, order management, payment, inventory, logistics.</li>
        <li>Uses caching, microservices, and queues for efficiency.</li>
        <li>Ensures security, real-time updates, and optimized delivery.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 28,
  title: "Design Facebook",
  path: "/system-design/topics/facebook",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Facebook</strong> is a large-scale social media platform that delivers content, notifications, and messages to millions of users in real-time.  
        It requires a highly scalable, distributed, and fault-tolerant architecture.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts & Components</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>News Feed Ranking</strong> – Uses algorithms to prioritize posts based on user interests, interactions, and recency.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Media Storage & CDN</strong> – Stores images, videos, and other media, delivered via CDNs to reduce latency.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Messaging System</strong> – Real-time messaging using queues, push notifications, and WebSockets.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Notifications & Alerts</strong> – Push notifications and emails for events like likes, comments, and friend requests.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Event-Driven Architecture</strong> – Decoupled services that communicate via events for scalability and reliability.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User → Web/Mobile → API Gateway → Microservices → Database / Cache
                   |          \
                   |           → News Feed Service
                   |           → Media Service → CDN
                   |           → Messaging Service → Queue
                   |           → Notification Service
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Facebook rank posts in the news feed?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using algorithms that consider user engagement, recency, and relevance scores.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is media delivered efficiently to users?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Media is stored in distributed storage and delivered via CDNs close to users.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Facebook ensure real-time messaging?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using message queues, WebSockets, and push notification services.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What architecture is used for scalability?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Event-driven and microservices architecture with horizontal scaling.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are notifications managed?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Notifications are handled asynchronously via queues and push services to avoid delays.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Facebook = large-scale social media platform with real-time interactions.</li>
        <li>Key components: news feed, media storage, messaging, notifications.</li>
        <li>Uses CDN, caching, event-driven architecture for efficiency.</li>
        <li>Ensures scalability, low latency, and real-time user experience.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 29,
  title: "Design Flipkart",
  path: "/system-design/topics/flipkart",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Flipkart</strong> is a large-scale e-commerce platform that handles millions of users, product listings, and orders daily.  
        It requires a highly scalable, fault-tolerant, and efficient system to manage inventory, process payments, and deliver personalized recommendations.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts & Components</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Product Catalog</strong> – Stores all products with attributes like price, availability, ratings, and descriptions.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Inventory Management</strong> – Tracks stock levels, handles multiple warehouses, and ensures real-time updates.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Order Processing</strong> – Handles cart, checkout, payment verification, and order confirmation.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Payment Gateway Integration</strong> – Supports multiple payment methods securely, including wallets, UPI, and cards.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Recommendations & Personalization</strong> – Suggests products based on user behavior, history, and collaborative filtering.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Caching & Distributed Services</strong> – Speeds up frequent requests and ensures the system scales horizontally.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User → Web/Mobile → API Gateway → Microservices → Database / Cache
                   |          \
                   |           → Product Service
                   |           → Inventory Service
                   |           → Order Service → Payment Gateway
                   |           → Recommendation Service
                   |           → Notification Service
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is Flipkart's product catalog managed efficiently?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using distributed databases, indexing, caching, and search services like Elasticsearch to handle millions of products.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does inventory management ensure real-time updates?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using transactional updates, event-driven architecture, and distributed locks to avoid overselling.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are orders processed reliably?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Through order service, queues, idempotent requests, and integration with payment gateways.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are recommendations generated?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using collaborative filtering, content-based filtering, and caching frequently accessed suggestions.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Flipkart handle high traffic efficiently?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Through horizontal scaling, distributed caching, load balancing, and microservices architecture.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Flipkart = large-scale e-commerce platform with millions of users.</li>
        <li>Key components: product catalog, inventory, orders, payment, recommendations.</li>
        <li>Uses caching, distributed services, and horizontal scaling for performance.</li>
        <li>Event-driven architecture ensures reliability and real-time updates.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 30,
  title: "Design Swiggy",
  path: "/system-design/topics/swiggy",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Swiggy</strong> is a real-time food delivery platform that connects customers, restaurants, and delivery partners efficiently.  
        It requires scalable systems to handle dynamic order flow, peak-hour traffic, and live tracking of deliveries.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts & Components</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Order Management</strong> – Manages customer orders, tracks status from placement to delivery, and ensures reliability.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Restaurant Tracking</strong> – Keeps track of restaurant preparation times, menu availability, and estimated delivery times.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Delivery Assignment</strong> – Matches delivery partners to orders based on proximity, availability, and delivery capacity.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Geolocation & Mapping</strong> – Real-time tracking of delivery partners, route optimization, and distance calculations.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Push Notifications</strong> – Alerts customers and delivery partners about order status, delays, or cancellations.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Caching & Scaling</strong> – Uses caches for menus, popular restaurants, and user sessions; scales horizontally to handle peak traffic.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Order Queues & Event-Driven Architecture</strong> – Manages asynchronous tasks like payment processing, delivery assignment, and notifications.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Customer → App/Website → API Gateway → Microservices → Database / Cache
                                     |          \
                                     |           → Order Service → Payment
                                     |           → Delivery Service → Tracking
                                     |           → Notification Service
                                     |           → Restaurant Service
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is real-time delivery tracking implemented?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using GPS tracking from delivery partner devices, websocket or push updates, and map services for route optimization.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are delivery partners assigned to orders?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Based on proximity, availability, order load, and optimized routing algorithms.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Swiggy handle peak-hour traffic?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Horizontal scaling, caching frequently accessed menus and restaurant data, and queue-based request handling.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are notifications managed efficiently?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Through event-driven architecture with message queues to trigger push notifications asynchronously.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is restaurant availability and menu data kept consistent?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using caching with TTL, database updates, and periodic synchronization with restaurants.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Swiggy = real-time food delivery platform connecting customers, restaurants, and delivery partners.</li>
        <li>Key components: order management, delivery assignment, geolocation, restaurant tracking, notifications.</li>
        <li>Uses caching, horizontal scaling, and event-driven architecture for peak traffic.</li>
        <li>Real-time tracking and optimized delivery ensure faster customer experience.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 31,
  title: "Design Banking System",
  path: "/system-design/topics/banking",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Banking System</strong> handles customer accounts, transactions, and financial operations securely and reliably.  
        It requires strong consistency, high availability, and fault-tolerant architecture to ensure safe and continuous service.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Concepts & Components</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Account Management</strong> – Manages user accounts, balances, and personal information securely.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Transaction Processing</strong> – Handles deposits, withdrawals, transfers, and payments with ACID compliance.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Fraud Detection</strong> – Monitors unusual activity using rule-based systems or machine learning to prevent financial losses.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Ledger Replication</strong> – Ensures data consistency across multiple nodes using replication, consensus protocols, or distributed ledgers.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Security & Encryption</strong> – Protects sensitive data using TLS/SSL, encryption-at-rest, and multi-factor authentication.
        </li>
        <li>
          <strong style={{ color: colors.success }}>High Availability</strong> – Achieved using redundant servers, failover strategies, load balancers, and disaster recovery plans.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Distributed Databases</strong> – Ensures scalability, consistency, and durability for large-scale banking data.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
Customer → Banking App → API Gateway → Microservices → Database / Cache
                                     |          \
                                     |           → Account Service
                                     |           → Transaction Service
                                     |           → Fraud Detection Service
                                     |           → Notification Service
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you ensure transaction consistency in banking systems?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By using ACID-compliant databases, distributed transactions, and consensus protocols to maintain data integrity.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is high availability achieved?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Through redundant servers, load balancers, database replication, failover mechanisms, and disaster recovery.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do banks detect fraud?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By monitoring transaction patterns, using rule-based systems, ML models, and real-time alerts.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What security measures are used?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Encryption (TLS/SSL, at-rest), multi-factor authentication, access control, and regular audits.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is ledger replication handled?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using database replication, consensus protocols, or distributed ledger technology to ensure consistency across nodes.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Banking system = manages accounts, transactions, and financial operations securely.</li>
        <li>Key components: account management, transaction processing, fraud detection, ledger replication, high availability, and security.</li>
        <li>Ensures consistency, reliability, and fault tolerance using distributed databases and replication.</li>
        <li>Security, monitoring, and failover mechanisms protect data and ensure uptime.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 32,
  title: "Design TV Streaming Platform",
  path: "/system-design/topics/tv-streaming",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>TV Streaming Platform</strong> allows users to watch live or on-demand video content online.  
        It requires scalable video delivery, personalized recommendations, and high availability to handle millions of concurrent users.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Components & Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Video Encoding & Transcoding</strong> – Converts raw video into multiple formats and bitrates for adaptive streaming.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Content Delivery Network (CDN)</strong> – Delivers video content from edge servers closer to users, reducing latency and buffering.
        </li>
        <li>
          <strong style={{ color: colors.info }}>User Subscriptions & Management</strong> – Handles user accounts, subscriptions, access control, and payment processing.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Recommendations Engine</strong> – Suggests content based on user behavior, preferences, and trending content.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Edge Caching</strong> – Stores popular content on edge nodes to reduce server load and improve streaming speed.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Adaptive Bitrate Streaming</strong> – Adjusts video quality dynamically based on user bandwidth to prevent buffering.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Distributed Services</strong> – Microservices for content management, recommendation, billing, and analytics for scalability and maintainability.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User → App/Web → API Gateway → Microservices → CDN → Edge Servers → Video Storage
                     |               \
                     |                → Recommendations Engine
                     |                → Billing & Subscription Service
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you reduce video buffering for users?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using CDNs, edge caching, and adaptive bitrate streaming to deliver video from nearby servers based on user bandwidth.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is content delivered efficiently to millions of users?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using distributed services and a global CDN network to replicate and deliver content closer to users.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How do you handle recommendations?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> By analyzing user behavior, watch history, ratings, and trending content to suggest personalized videos.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> What is adaptive bitrate streaming?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Dynamically adjusting video quality based on the user’s internet speed to minimize buffering.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is subscription and access control implemented?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using authentication, subscription service, and role-based access to allow or restrict content access.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>TV streaming platforms deliver live/on-demand video using CDNs and edge caching.</li>
        <li>Adaptive bitrate streaming ensures smooth playback on varying networks.</li>
        <li>Microservices manage subscriptions, recommendations, and content efficiently.</li>
        <li>Global scalability is achieved with distributed services and replicated video storage.</li>
      </ul>

      <br />
    </>
  ),
},
{
  id: 33,
  title: "Design Google Services",
  path: "/system-design/topics/google",
  explanation: (
    <>
      <p>
        <strong style={{ color: colors.primary }}>Google Services</strong> provide fast and reliable search, analytics, and other services at a global scale.  
        Key challenges include indexing the web, ranking results, real-time analytics, and ensuring high availability for billions of users.
      </p>

      <br />

      <h2 style={{ color: colors.primary }}>Key Components & Concepts</h2>
      <ul>
        <li>
          <strong style={{ color: colors.secondary }}>Web Crawlers & Indexing</strong> – Automatically crawl web pages, extract content, and build a searchable index.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Ranking Algorithms</strong> – Rank search results based on relevance, PageRank, user context, and other factors.
        </li>
        <li>
          <strong style={{ color: colors.info }}>Distributed Systems</strong> – Use distributed storage and compute (like Bigtable, Spanner) to store massive data and serve requests efficiently.
        </li>
        <li>
          <strong style={{ color: colors.danger }}>Caching & CDN</strong> – Cache frequently accessed search results and static resources to reduce latency globally.
        </li>
        <li>
          <strong style={{ color: colors.secondary }}>Load Balancing & High Availability</strong> – Distribute search requests across multiple data centers and servers to ensure uptime.
        </li>
        <li>
          <strong style={{ color: colors.success }}>Real-time Analytics</strong> – Collect and process query logs, trends, and user interactions for recommendations and improvements.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Simple Diagram Idea</h2>
      <pre>
{`
User Query
     |
  Load Balancer
     |
Search Frontend → Cache → Index Servers
     |
Distributed Storage / Analytics / Ranking Engine
     |
Web Crawlers → Index Updates
`}
      </pre>

      <br />

      <h2 style={{ color: colors.primary }}>Interview Questions & Answers</h2>
      <ul>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Google index the web?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Web crawlers visit pages, extract content, and store them in distributed index servers for fast search.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How are search results ranked?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Algorithms like PageRank, relevance scoring, and personalization determine the order of results.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is low latency achieved for global users?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Using caching, CDNs, replicated index servers, and distributed load balancing.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How is high availability ensured?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Multiple replicas of indexes, redundant data centers, and fault-tolerant architecture.
        </li>
        <li>
          <strong style={{ color: colors.primary }}>Q:</strong> How does Google process real-time analytics?  
          <br />
          <strong style={{ color: colors.success }}>A:</strong> Streams query logs and events into distributed processing systems for insights and recommendations.
        </li>
      </ul>

      <br />

      <h2 style={{ color: colors.primary }}>Short Summary</h2>
      <ul>
        <li>Google indexes and ranks web content using distributed crawlers and algorithms.</li>
        <li>Caching and CDNs reduce latency for users globally.</li>
        <li>Load balancing and replicated storage ensure high availability.</li>
        <li>Real-time analytics help improve search relevance and provide insights.</li>
      </ul>

      <br />
    </>
  ),
},
];
