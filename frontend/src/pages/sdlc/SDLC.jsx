import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";

/* --------------------- SDLC PHASES ---------------------- */

const sdlcPhases = [
  {
    title: "1. Requirement Analysis",
    goal: "Figure out exactly what needs to be built.",
    activities: [
      "Talk to stakeholders (People who have something to gain or lose from the project) and users to understand their problems.",
      "Write functional requirements (what features the app must have).",
      "Write non-functional requirements (speed, security, performance, scalability).",
      "Prepare an SRS document that explains what the software should do — its features, rules, behavior, and constraints.",
    ],
    tip: "This phase decides the direction of the whole project — take your time.",
  },
  {
    title: "2. System Design / Architecture",
    goal: "Plan how the app will work internally and how all parts will connect.",
    activities: [
      "Design frontend, backend, APIs, and database structure.",
      "Choose technologies (React/Next.js, Node/NestJS, PostgreSQL/MongoDB, etc.).",
      "Select architecture: Monolith, Microservices, or Serverless.",
      "Plan scalability: CDN, caching, load balancers, database sharding/replication.",
      "Plan security: authentication, authorization, encryption, secure API design.",
    ],
    tip: "Think of this as the blueprint — good design avoids big issues later.",
  },
  {
    title: "3. Implementation / Coding",
    goal: "Start converting the design into real working code.",
    activities: [
      "Write modular, reusable, and clean code.",
      "Use Git and branches for safe version control.",
      "Follow secure coding practices (input validation, sanitization, avoid injections).",
      "Improve performance using lazy loading, code splitting, caching, etc.",
    ],
    tip: "Build small features first. Test them. Then move to bigger ones.",
  },
  {
    title: "4. Testing",
    goal: "Ensure the software is stable, secure, and works as expected.",
    activities: [
      "Unit Testing: Test individual pieces (functions, components).",
      "Integration Testing: Check if modules work together properly.",
      "End-to-End Testing: Test the app like a real user (Cypress, Selenium).",
      "Performance Testing: Check speed, load, concurrency (JMeter, Locust).",
      "Security Testing: Vulnerability scanning and basic penetration tests.",
    ],
    tip: "Testing early saves time, money, and prevents major production failures.",
  },
  {
    title: "5. Deployment",
    goal: "Launch the app so users can access it.",
    activities: [
      "Choose hosting: AWS, Azure, Vercel, Netlify, Render, etc.",
      "Setup CI/CD pipelines for automatic deployment.",
      "Configure secure environment variables and databases.",
      "Enable monitoring tools to track performance and errors.",
    ],
    tip: "Always deploy to a staging environment before production.",
  },
  {
    title: "6. Maintenance",
    goal: "Keep the app running smoothly after release.",
    activities: [
      "Fix bugs reported by users or monitoring tools.",
      "Release updates, improvements, and security patches.",
      "Monitor server performance, logs, and user behavior.",
      "Scale infrastructure as user traffic grows.",
    ],
    tip: "Maintenance is continuous — apps evolve with users’ needs.",
  },
  {
    title: "7. Review & Feedback",
    goal: "Collect feedback and plan the next improvements.",
    activities: [
      "Gather user feedback from reviews, analytics, and usage patterns.",
      "Identify which features work well and which need improvement.",
      "Plan new features or optimizations for the next cycle.",
    ],
    tip: "A feedback loop makes your product better with every version.",
  },
];

/* --------------------- AGILE + SCRUM + SPRINT ---------------------- */

const agilePhases = [
  {
    title: "1. Agile Methodology",
    goal: "Build software in small steps instead of one long delivery process.",
    activities: [
      "Deliver the product in short cycles (iterations).",
      "Embrace changes even late in development.",
      "Communicate constantly with stakeholders.",
      "Focus on working software over documentation-heavy approaches.",
    ],
    tip: "Agile means flexibility — build, improve, deliver continuously.",
  },
  {
    title: "2. Scrum Framework",
    goal: "Use a structured team-based approach to perform Agile development.",
    activities: [
      "Scrum Master ensures the process runs smoothly.",
      "Product Owner manages and prioritizes the backlog.",
      "Development Team builds and delivers increments.",
      "Work is done in fixed time periods called Sprints.",
    ],
    tip: "Scrum = Agile but with rules, roles, and a clear rhythm.",
  },
  {
    title: "3. Product Backlog",
    goal: "A list of everything the product needs: features, bugs, improvements.",
    activities: [
      "Write user stories to describe features clearly.",
      "Prioritize based on business value and urgency.",
      "Add acceptance criteria to define “done”.",
      "Continuously refine and improve backlog items.",
    ],
    tip: "Backlog is like your master to-do list — keep it tidy and updated.",
  },
  {
    title: "4. Sprint Planning",
    goal: "Decide what work will be completed in the next Sprint.",
    activities: [
      "Choose high-priority items from the backlog.",
      "Break them into smaller development tasks.",
      "Estimate effort using story points.",
      "Team commits to a realistic set of tasks.",
    ],
    tip: "Plan smart — the goal is to finish, not overcommit.",
  },
  {
    title: "5. Sprint (1–4 Weeks)",
    goal: "Build a small, working version of the product.",
    activities: [
      "Develop features step-by-step.",
      "Test features as they are built.",
      "Collaborate constantly and fix roadblocks early.",
      "Deliver a potentially shippable product increment.",
    ],
    tip: "Think of a Sprint as a mini-project inside the big project.",
  },
  {
    title: "6. Daily Scrum (Standup)",
    goal: "Keep the team aligned and unblock development.",
    activities: [
      "Each member answers: What I did? What I’ll do today? Any blockers?",
      "Identify issues early before they grow.",
      "Adjust work if priorities shift.",
      "Keep the meeting short (10–15 minutes).",
    ],
    tip: "Daily standups prevent last-minute surprises.",
  },
  {
    title: "7. Sprint Review & Retrospective",
    goal: "Show results and improve the next Sprint.",
    activities: [
      "Sprint Review: demonstrate completed features.",
      "Collect feedback from stakeholders.",
      "Sprint Retrospective: discuss what went well, what didn’t.",
      "Plan improvements for future Sprints.",
    ],
    tip: "Every Sprint should be better than the last — continuous improvement.",
  },
];

/* --------------------- MAIN COMPONENT ---------------------- */

const SDLC = () => {
  return (
    <Container className="py-5">
      {/* About SDLC */}
      <FadeScrollWrapper >
      <div className="text-center mb-5">
        <h1 className="text-4xl md:text-5xl fw-bold text-gray-800">
          SDLC + Agile + Scrum + Sprint (Complete Beginner-Friendly Guide)
        </h1>

        <p className="text-gray-600 mt-3 text-lg md:text-xl">
          The <strong>Software Development Life Cycle (SDLC)</strong> is a
          structured framework for building high-quality software efficiently.
          By following SDLC, teams can plan, design, develop, test, and deploy
          applications systematically while minimizing risks and errors.
        </p>

        <p className="text-gray-500 mt-2 italic">
          In this guide, you will learn <strong>what SDLC is</strong>, why it
          helps build reliable software, and how it works with{" "}
          <strong>Agile</strong>, <strong>Scrum</strong>, and <strong>Sprints</strong>.
        </p>
      </div>
      </FadeScrollWrapper>

      {/* SDLC Section */}
      <FadeScrollWrapper>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">🔵 SDLC Phases</h2>

      <Row className="g-4 mb-5">
        {sdlcPhases.map((phase, idx) => (
          <Col key={idx} md={6} lg={4}>
            <Card className="shadow rounded-lg h-100 transition-transform transform hover:shadow-2xl hover:scale-105 duration-300">
              <Card.Body>
                <Card.Title className="text-lg font-semibold text-gray-700 mb-2">
                  {phase.title}
                </Card.Title>

                <p>
                  <strong>Goal:</strong> {phase.goal}
                </p>

                <p>
                  <strong>Activities:</strong>
                </p>

                <ul className="list-disc list-inside mb-2">
                  {phase.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>

                <p>
                  <strong>Tip:</strong> {phase.tip}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </FadeScrollWrapper>

      {/* Agile Section */}
      <FadeScrollWrapper>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        🟢 Agile + Scrum + Sprint
      </h2>

      <Row className="g-4">
        {agilePhases.map((phase, idx) => (
          <Col key={idx} md={6} lg={4}>
            <Card className="shadow rounded-lg h-100 transition-transform transform hover:shadow-2xl hover:scale-105 duration-300">
              <Card.Body>
                <Card.Title className="text-lg font-semibold text-gray-700 mb-2">
                  {phase.title}
                </Card.Title>

                <p>
                  <strong>Goal:</strong> {phase.goal}
                </p>

                <p>
                  <strong>Activities:</strong>
                </p>

                <ul className="list-disc list-inside mb-2">
                  {phase.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>

                <p>
                  <strong>Tip:</strong> {phase.tip}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </FadeScrollWrapper>

      {/* Key Takeaways */}
      <FadeScrollWrapper>
      <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow">
        <h5 className="font-semibold text-gray-800 mb-2">Key Takeaways</h5>

        <ul className="text-gray-700 list-disc list-inside">
          <li>SDLC defines the structure of how to build a quality application.</li>
          <li>Agile improves speed and flexibility through fast iterations.</li>
          <li>Scrum organizes teams with roles, ceremonies, and short Sprints.</li>
          <li>
            Combining SDLC + Agile + Scrum gives you a powerful workflow for
            modern software development.
          </li>
        </ul>
      </div>
      </FadeScrollWrapper>
    </Container>
  );
};

export default SDLC;
