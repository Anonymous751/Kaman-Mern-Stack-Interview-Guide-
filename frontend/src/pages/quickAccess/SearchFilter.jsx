// UsersFilterTutorialPage.jsx
// Full page: UI (fetch + search + filters + cards) + inline tutorial (explanations + code)
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * UsersFilterTutorialPage
 *
 * Single-page tutorial:
 * - Top: interactive UI (fetch users, search, city/company filters, cards)
 * - Bottom: step-by-step tutorial content with code blocks and plain-English explanations
 *
 * Note: API used: https://jsonplaceholder.typicode.com/users
 */
const UsersFilterTutorialPage = () => {
  // ----------------------------
  //  UI & Data state
  // ----------------------------
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);           // raw data from API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // inputs (bound to UI)
  const [searchQuery, setSearchQuery] = useState("");       // free-text search
  const [selectedCity, setSelectedCity] = useState("all");  // city filter dropdown
  const [selectedCompany, setSelectedCompany] = useState("all"); // company filter

  // ----------------------------
  //  1) Fetch users (on mount)
  // ----------------------------
  useEffect(() => {
    let cancelled = false;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL);
        if (!cancelled) {
          setUsers(res.data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError("Failed to fetch users");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchUsers();
    return () => {
      cancelled = true;
    };
  }, [API_URL]);

  // ----------------------------
  //  2) Build unique lists for dropdowns
  //     useMemo so we compute only when `users` changes
  // ----------------------------
  const cities = useMemo(() => {
    const setCities = new Set();
    users.forEach((u) => {
      const city = (u.address && u.address.city) || u.city || "Unknown";
      setCities.add(city);
    });
    return ["all", ...Array.from(setCities).sort()];
  }, [users]);

  const companies = useMemo(() => {
    const setCompanies = new Set();
    users.forEach((u) => {
      const company = (u.company && u.company.name) || u.company || "Unknown";
      setCompanies.add(company);
    });
    return ["all", ...Array.from(setCompanies).sort()];
  }, [users]);

  // ----------------------------
  //  3) Filtering logic (search + city + company)
  //     useMemo so result recomputes only when inputs change
  // ----------------------------
  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return users.filter((u) => {
      // A) Search across name, email, username
      if (q) {
        const name = (u.name || "").toLowerCase();
        const email = (u.email || "").toLowerCase();
        const username = (u.username || "").toLowerCase();
        const hitsSearch = name.includes(q) || email.includes(q) || username.includes(q);
        if (!hitsSearch) return false;
      }

      // B) City filter (if not "all")
      const city = (u.address && u.address.city) || u.city || "Unknown";
      if (selectedCity !== "all" && city !== selectedCity) return false;

      // C) Company filter (if not "all")
      const company = (u.company && u.company.name) || u.company || "Unknown";
      if (selectedCompany !== "all" && company !== selectedCompany) return false;

      // passes all checks
      return true;
    });
  }, [users, searchQuery, selectedCity, selectedCompany]);

  // ----------------------------
  //  4) Helpers
  // ----------------------------
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCity("all");
    setSelectedCompany("all");
  };

  // ----------------------------
  //  5) Render UI & Tutorial
  // ----------------------------
  return (
    <Container className="my-5">
      <h2 className="mb-4">Users — Live Example + Step-by-step Tutorial</h2>

      {/* ---------------- Controls (Search + Filters + Clear) ---------------- */}
      <Card className="mb-4">
        <Card.Body>
          <Row className="g-2 align-items-center">
            <Col md={5}>
              <Form.Control
                placeholder="Search by name, email or username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>

            <Col md={3}>
              <Form.Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c === "all" ? "All Cities" : c}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={3}>
              <Form.Select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                {companies.map((c) => (
                  <option key={c} value={c}>
                    {c === "all" ? "All Companies" : c}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={1}>
              <Button variant="secondary" className="w-100" onClick={clearFilters}>
                Clear
              </Button>
            </Col>
          </Row>

          <small className="text-muted d-block mt-2">
            Showing {filteredUsers.length} of {users.length} users
          </small>
        </Card.Body>
      </Card>

      {/* ---------------- Grid of Cards ---------------- */}
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users match your current search/filters.</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-3 mb-4">
          {filteredUsers.map((user) => {
            const city = (user.address && user.address.city) || user.city || "Unknown";
            const company = (user.company && user.company.name) || user.company || "Unknown";

            return (
              <Col key={user.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                    <Card.Text style={{ fontSize: 14 }}>
                      <div><strong>Email:</strong> {user.email}</div>
                      <div><strong>City:</strong> {city}</div>
                      <div><strong>Company:</strong> {company}</div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">ID: {user.id}</small>
                    <div>
                      <Button size="sm" className="me-2" onClick={() => setSearchQuery(user.name)}>
                        Search
                      </Button>
                      <Button size="sm" variant="outline-primary" onClick={() => alert(`Open ${user.name}`)}>
                        View
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}

      {/* ---------------- Tutorial content (step-by-step) ---------------- */}
      <h3 className="mt-5">Tutorial — Step by step</h3>

      {/* Step 1 */}
      <Card className="mb-3">
        <Card.Body>
          <h5>Step 1 — Fetch users from API and store them in state</h5>
          <p>We call the API once when the component mounts (inside <code>useEffect</code>). The response is saved in <code>users</code> state. We also handle loading and error states for a better user experience.</p>

          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// useEffect to load users once
useEffect(() => {
  let cancelled = false;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      if (!cancelled) {
        setUsers(res.data);
        setError(null);
      }
    } catch (err) {
      if (!cancelled) setError("Failed to fetch users");
    } finally {
      if (!cancelled) setLoading(false);
    }
  };

  fetchUsers();
  return () => { cancelled = true; };
}, [API_URL]);`}
          </SyntaxHighlighter>

          <p><strong>Plain words:</strong> When the page opens we call the API, save the returned list into <code>users</code>, and toggle the loading state so the UI can show a loader while waiting.</p>
        </Card.Body>
      </Card>

      {/* Step 2 */}
      <Card className="mb-3">
        <Card.Body>
          <h5>Step 2 — Create dropdown lists (cities & companies)</h5>
          <p>We extract unique city and company values from the API result so dropdowns show only available options. We use <code>useMemo</code> to avoid recomputing on every render.</p>

          <SyntaxHighlighter language="javascript" style={oneDark}>
{`const cities = useMemo(() => {
  const setCities = new Set();
  users.forEach(u => {
    const city = (u.address && u.address.city) || u.city || "Unknown";
    setCities.add(city);
  });
  return ["all", ...Array.from(setCities).sort()];
}, [users]);

const companies = useMemo(() => {
  const setCompanies = new Set();
  users.forEach(u => {
    const company = (u.company && u.company.name) || u.company || "Unknown";
    setCompanies.add(company);
  });
  return ["all", ...Array.from(setCompanies).sort()];
}, [users]);`}
          </SyntaxHighlighter>

          <p><strong>Plain words:</strong> Read every user, collect the city or company names into a set (to remove duplicates), convert back to a sorted array, and add an "all" option at the front.</p>
        </Card.Body>
      </Card>

      {/* Step 3 */}
      <Card className="mb-3">
        <Card.Body>
          <h5>Step 3 — Bind UI inputs to state (search box & dropdowns)</h5>
          <p>The search input and the dropdowns are connected (bound) to React state using the <code>value</code> and <code>onChange</code> pattern. When a user types or selects, the state updates instantly.</p>

          <SyntaxHighlighter language="javascript" style={oneDark}>
{`<Form.Control
  placeholder="Search by name, email or username..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

<Form.Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
  {cities.map(c => <option key={c} value={c}>{c}</option>)}
</Form.Select>`}
          </SyntaxHighlighter>

          <p><strong>Plain words:</strong> The input shows the current state value and updates that value when the user types or changes the dropdown. That updated state drives filtering logic (next step).</p>
        </Card.Body>
      </Card>

      {/* Step 4 */}
      <Card className="mb-3">
        <Card.Body>
          <h5>Step 4 — The filtering algorithm (search + city + company)</h5>
          <p>This is the heart of the tutorial. We take the original <code>users</code> list and apply three checks for each user:</p>
          <ol>
            <li>If the search text is present, check name/email/username.</li>
            <li>If a city is selected (not "all"), require the user's city to match it.</li>
            <li>If a company is selected (not "all"), require the user's company to match it.</li>
          </ol>

          <SyntaxHighlighter language="javascript" style={oneDark}>
{`const filteredUsers = useMemo(() => {
  const q = searchQuery.trim().toLowerCase();

  return users.filter(u => {
    // 1) Search
    if (q) {
      const name = (u.name || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      const username = (u.username || "").toLowerCase();
      if (!(name.includes(q) || email.includes(q) || username.includes(q))) {
        return false;
      }
    }

    // 2) City filter
    const city = (u.address && u.address.city) || u.city || "Unknown";
    if (selectedCity !== "all" && city !== selectedCity) return false;

    // 3) Company filter
    const company = (u.company && u.company.name) || u.company || "Unknown";
    if (selectedCompany !== "all" && company !== selectedCompany) return false;

    return true;
  });
}, [users, searchQuery, selectedCity, selectedCompany]);`}
          </SyntaxHighlighter>

          <p><strong>Plain words:</strong> For each user we ask: "Does this user contain the search text?" and "Does it match the selected city?" and "Does it match the selected company?" — only users passing all checks are kept.</p>
        </Card.Body>
      </Card>

      {/* Step 5 */}
      <Card className="mb-3">
        <Card.Body>
          <h5>Step 5 — Why use <code>useMemo</code> here?</h5>
          <p>Filtering can be expensive if you have many users. <code>useMemo</code> memoizes the filtered result so React recalculates it only when the dependencies change: <code>users</code>, <code>searchQuery</code>, <code>selectedCity</code>, or <code>selectedCompany</code>.</p>

          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// dependencies: users, searchQuery, selectedCity, selectedCompany
useMemo(() => { /* filter */ }, [users, searchQuery, selectedCity, selectedCompany]);`}
          </SyntaxHighlighter>

          <p><strong>Plain words:</strong> If nothing changed, React reuses the previous filtered result — faster and smoother UI.</p>
        </Card.Body>
      </Card>

      {/* Step 6 */}
      <Card className="mb-3">
        <Card.Body>
          <h5>Step 6 — Showing the filtered results</h5>
          <p>We simply map over <code>filteredUsers</code> and render cards. Each card must have a unique <code>key</code> (we use <code>user.id</code>).</p>

          <SyntaxHighlighter language="javascript" style={oneDark}>
{`filteredUsers.map(user => (
  <Card key={user.id}>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email} — {user.address.city}</Card.Text>
    </Card.Body>
  </Card>
));`}
          </SyntaxHighlighter>

          <p><strong>Plain words:</strong> Because the UI is driven by <code>filteredUsers</code>, it updates automatically whenever search or filters change.</p>
        </Card.Body>
      </Card>

      {/* Final tips */}
      <Card className="mb-5">
        <Card.Body>
          <h5>Final tips & improvements</h5>
          <ul>
            <li><b>Debounce the search input</b> (300ms) to avoid filtering on every keystroke for very large lists.</li>
            <li><b>Server-side search/pagination</b> for very big datasets to reduce client memory and network cost.</li>
            <li><b>Case & accent normalization</b> if you expect international text (use libraries like <code>remove-accents</code>).</li>
            <li><b>Show a friendly message</b> when there are no results and suggest clearing filters.</li>
            <li><b>Keep your data access safe</b> — never trust input on server side; always validate.</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UsersFilterTutorialPage;
