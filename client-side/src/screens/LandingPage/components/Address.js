import { Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;
function Address() {
  return (
    <div style={{ marginTop: 30, marginBottom: 40 }}>
      <Row justify="center">
        <Title level={3}>Kai Rescue Address</Title>
      </Row>
      <Row justify="center" style={{width: "100%", minHeight: 400}}>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              style={{minHeight: 400, minWidth: 400}}
              id="gmap_canvas"
              src="http://maps.google.com/maps?q=30%20Trafalgar%20Street,%20The%20Wood,%20Nelson%207010&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Address;
