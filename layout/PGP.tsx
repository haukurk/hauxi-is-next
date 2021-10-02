import React from "react";
import styled from "styled-components";
import { Keybase } from "@styled-icons/fa-brands";

const Icon = styled(Keybase)`
  width: 12px;
`;

const Container = styled.div`
  display: flex;
  justify-content: right;
  svg {
    padding-left: 4px;
  }
  a {
    text-decoration: none;
    color: #1c1935;
    font-size: 12px;
  }
`;

const SocialContacts = () => {
  return (
    <Container>
      <a href="https://keybase.io/hauxi/pgp_keys.asc?fingerprint=5b51459b061dfe7b76ae0786609bcbe5ef94c2ff">
        <Icon />
        PGP
      </a>
    </Container>
  );
};

export default SocialContacts;
