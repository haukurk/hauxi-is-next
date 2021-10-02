import React from "react";
import styled from "styled-components";
import Headline from "../layout/Headline";
import PGP from "../layout/PGP";
import SocialContacts from "../layout/SocialContacts";

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
        <Headline />
        <SocialContacts />
        <PGP />
      </Card>
    </LandingSectionContainer>
  );
};

export default Home;
