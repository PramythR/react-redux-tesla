import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Fade from "react-reveal/Fade";
function Home() {
  return (
    <Container>
      <Section
        title="Modelddd s"
        Description="Order Online for Touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting Inventory"
      />
      <Section
        title="Model Y"
        Description="Order Online for Touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting Inventory"
      />
      <Section
        title="Model 3"
        Description="Order Online for Touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting Inventory"
      />
      <Section
        title="Model X"
        Description="Order Online for Touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting Inventory"
      />
      <Section
        title="Lowest Cost Solor Panels in America"
        Description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solor for new roof"
        Description="Solor Roof Costs Less Than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Aceesories"
        Description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
