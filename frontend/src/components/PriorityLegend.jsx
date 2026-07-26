import { Badge } from 'react-bootstrap';

const PriorityLegend = () => {
  return (
    <>
      {/* Responsive grid layout */}
      <div className="mb-4 row g-3 justify-content-center text-center w-100">

        <div className="col-6 col-lg-auto d-flex justify-content-center">
          <Badge 
            bg="danger"
            className="px-3 py-2"
            style={{ fontSize: "13px" }}
          >
            Compulsory (Must-know)
          </Badge>
        </div>

        <div className="col-6 col-lg-auto d-flex justify-content-center">
          <Badge 
            bg="warning"
            className="text-dark px-3 py-2"
            style={{ fontSize: "13px" }}
          >
            High (Very important, often asked)
          </Badge>
        </div>

        <div className="col-6 col-lg-auto d-flex justify-content-center">
          <Badge 
            bg="info"
            className="text-dark px-3 py-2"
            style={{ fontSize: "13px" }}
          >
            Medium (Useful, but not always)
          </Badge>
        </div>

        <div className="col-6 col-lg-auto d-flex justify-content-center">
          <Badge 
            bg="secondary"
            className="px-3 py-2"
            style={{ fontSize: "13px" }}
          >
            Low (Optional or rarely asked)
          </Badge>
        </div>

      </div>
    </>
  )
}

export default PriorityLegend;
