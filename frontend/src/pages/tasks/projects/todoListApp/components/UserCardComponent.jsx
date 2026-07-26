import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

const UserCardComponent = ({ id, title, description, link, level, badge }) => {
  return (
    <Col md={6} lg={4}>
      <Link to={link} className="text-decoration-none">
        <Card
          className="
            h-100
            shadow-sm
            transition-transform
            duration-300
            hover:shadow-lg
            hover:-translate-y-2
            hover:scale-105
          "
          style={{ cursor: "pointer" }}
        >
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <Card.Title className="fw-bold">{title}</Card.Title>
              <Badge bg={badge}>{level}</Badge>
            </div>

            <Card.Text>{description}</Card.Text>

            <Button variant="primary">Open Project</Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default UserCardComponent;
