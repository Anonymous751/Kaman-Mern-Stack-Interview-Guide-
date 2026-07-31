import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const TutorialNavigation = ({ prev, next }) => {
  return (
    <Row className="my-4">
      <Col>
        {prev && (
          <Link to={prev}>
            <button className="btn btn-outline-primary">
              ← Previous Page
            </button>
          </Link>
        )}
      </Col>

      <Col className="text-end">
        {next && (
          <Link to={next}>
            <button className="btn btn-primary">
              Next Page →
            </button>
          </Link>
        )}
      </Col>
    </Row>
  );
};

export default TutorialNavigation;