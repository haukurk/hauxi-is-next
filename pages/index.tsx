import React from "react";
import styled from "styled-components";
import Headline from "../layout/Headline";

const LandingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  width: auto;
`;

const Home: React.FC = () => {
  return (
    <LandingSectionContainer>
      <Card>
        <Headline>Hæ</Headline>
      </Card>
    </LandingSectionContainer>
  );
};

export default Home;
