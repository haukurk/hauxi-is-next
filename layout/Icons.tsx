import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "@styled-icons/boxicons-logos";
import { Keybase } from "@styled-icons/fa-brands/";
import styled from "styled-components";

const LinkedInIcon = styled(Linkedin)``;
const TwitterIcon = styled(Twitter)``;
const FacebookIcon = styled(Facebook)``;
const GithubIcon = styled(Github)``;
const KeybaseIcon = styled(Keybase)``;

type SocialType = "facebook" | "github" | "twitter" | "linkedin" | "keybase";
type SocialIconProps = {
  type: SocialType;
};

const IconByType: React.FC<SocialIconProps> = (props) => {
  switch (props.type) {
    case "github":
      return <LinkedInIcon {...props} />;
    case "facebook":
      return <FacebookIcon {...props} />;
    case "linkedin":
      return <TwitterIcon {...props} />;
    case "github":
      return <GithubIcon {...props} />;
    case "keybase":
      return <KeybaseIcon {...props} />;
    default:
      return <GithubIcon {...props} />;
  }
};

const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  return <IconByType type={type} />;
};

export default SocialIcon;
