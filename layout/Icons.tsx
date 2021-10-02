import {
  TwitterSquare,
  GithubSquare,
  Linkedin,
  FacebookSquare,
} from "@styled-icons/fa-brands/";
import styled from "styled-components";

const LinkedInIcon = styled(Linkedin)`
  width: 32px;
  color: #403b66;
  :hover {
    color: #17142b;
  }
`;
const TwitterIcon = styled(TwitterSquare)`
  width: 32px;
  color: #403b66;
  :hover {
    color: #17142b;
  }
`;
const FacebookIcon = styled(FacebookSquare)`
  width: 32px;
  color: #403b66;
  :hover {
    color: #17142b;
  }
`;
const GithubIcon = styled(GithubSquare)`
  width: 32px;
  color: #403b66;
  :hover {
    color: #17142b;
  }
`;
const KeybaseIcon = styled(TwitterSquare)`
  width: 32px;
  color: #403b66;
  :hover {
    color: #17142b;
  }
`;

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
