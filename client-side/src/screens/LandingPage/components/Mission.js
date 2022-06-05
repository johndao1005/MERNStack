import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
const { Title } = Typography;

function Mission() {
  const informationCard = [
    {
      label: "Financial Donations ",
      content:
        "we are very grateful to receive financial donations to help with the operational costs of running the Kai Rescue Programme. ",
      button: (
        <Button  style={{ maxWidth: 300, marginTop: 10, marginBottom: 10 }}
        type={"primary"} href="/donate">
          Donate
        </Button>
      ),
    },
    {
      label: "Food Donations",
      content:
        "if you or your organisation would like to make a food donation (whether one-off or recurring) we’d love to hear from you! Contact our Kai Rescue Coordinator Karen for more information.",
      button: (
        <Button
        style={{ maxWidth: 300, marginTop: 10, marginBottom: 10 }}
        type={"primary"}
          href="mailto:kairescue@nec.org.nz?subject=Food%20Donation%20Enquiry%20to%20Kai%20Rescue%20"
        >
          Contact Karen
        </Button>
      ),
    },
    {
      label: "Volunteer ",
      content:
        "Volunteering with Kai Rescue is a fantastic way to get involved in the community, meet new people and power a good cause. Get in touch with our Volunteer Coordinator Ellie for more details. ",
      button: (
        <Button
        style={{ maxWidth: 300, marginTop: 10, marginBottom: 10 }}
        type={"primary"}
          href="mailto:volunteer@nec.org.nz?subject=Volunteer%20with%20Kai%20Rescue"
        >
          Contact Ellie
        </Button>
      ),
    },
  ];
  return (
    <div className="center" style={{ marginTop: 30 }} id="mission">
      <Col className="text-center center">
        <Title level={3}>Want to give a hand?</Title>
        <Title level={4} style={{ fontWeight: 400 }}>
          We welcome help in many forms, including:
        </Title>

        <Row
          justify="center"
          className="mx-auto px-5 py-1 text-center center d-flex flex-row"
        >
          {informationCard.map((card) => {
            return (
              <Col key={card.label} xs={24} sm={12} md={8} lg={8} xl={6}>
                <Row justify="center">
                <Card
                  style={{ height: 300, paddingBottom: 60, width: 240 }}
                  className="smallCard p-3 m-2"
                >
                  <Title level={4}>{card.label}</Title>
                  <div>{card.content}</div>
                  <Col
                    style={{
                      position: "absolute",
                      bottom: 10,
                      width: "80%",
                    }}
                  >
                    {card.button}
                  </Col>
                </Card>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Col>
    </div>
  );
}

export default Mission;
