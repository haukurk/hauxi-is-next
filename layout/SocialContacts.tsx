import React from "react";
import styled from "styled-components";
import SocialIcon from "./Icons";

const Container = styled.div`
  display: flex;
  justify-content: right;
  svg {
    padding-left: 4px;
  }
`;

const SocialContacts = () => {
  return (
    <Container>
      <a href="https://github.com/haukurk">
        <SocialIcon type="github" />
      </a>
      <a href="https://www.facebook.com/haukur.kristinsson">
        <SocialIcon type="facebook" />
      </a>
      <a href="https://www.linkedin.com/in/haukurk/">
        <SocialIcon type="linkedin" />
      </a>
      <a href="https://twitter.com/haukurk">
        <SocialIcon type="twitter" />
      </a>
    </Container>
  );
};

export default SocialContacts;
