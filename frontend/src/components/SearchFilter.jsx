import { Form, Row, Col } from "react-bootstrap";

const SearchFilter = ({
  value,
  onChange,
  placeholder,
  priorityValue,
  onPriorityChange,
  showPriority = false, // flag to optionally show priority filter
}) => {
  return (
    <Form className="mb-3">
      <Row className="align-items-center">
        <Col md={showPriority ? 8 : 12} className="mb-2 mb-md-0">
          <Form.Control
            type="text"
            value={value}
            placeholder={placeholder || "Search..."}
            onChange={(e) => onChange(e.target.value)}
          />
        </Col>

        {showPriority && (
          <Col md={4}>
            <Form.Select
              value={priorityValue}
              onChange={(e) => onPriorityChange(e.target.value)}
            >
              <option value="All">All Priorities</option>
              <option value="Compulsory">Compulsory</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default SearchFilter;
