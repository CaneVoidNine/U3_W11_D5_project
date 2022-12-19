import { Row, Col } from "react-bootstrap";

const Searching = ({ data, cover, i }) => {
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3 text-light d-flex align-items-center justify-content-between"
        style={{
          border: "2px solid #00000033",
          borderRadius: "15px",
          backgroundColor: "transparent",
          width: "50vw",
        }}
      >
        <Col xs={2} className="d-flex align-items-center">
          <img src={cover} className="w-75 h-75" />
        </Col>

        <Col xs={10}>
          {data.title}, {data.artist.name}
        </Col>
      </Row>
    </>
  );
};

export default Searching;
