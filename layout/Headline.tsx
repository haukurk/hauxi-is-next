import styled from "styled-components";
import Heart from "../assets/heart.png";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #403b66;
    font-size: 48px;
    line-height: 1.2;
    font-weight: 400;
    margin: 0;
    margin-top: 10px;

    b {
      font-weight: 600;
    }
  }
  h5 {
    color: #8c89a2;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
  }
  p {
    color: #686767;
    font-size: 18px;
    margin-top: 20px;
    line-height: 28px;
    margin-bottom: 10px;
    display: inline-block;

    a {
      text-decoration: none;
      font-weight: 600;
      color: #403b66;
    }
  }
`;

const Headline: React.FC = () => {
  return (
    <Container>
      <h5>Whats up?</h5>
      <h2>
        I&apos;m <b>Haukur</b> <br /> <b>a</b> guy that{" "}
        <Image width={32} height={32} alt="heart" title="loves" src={Heart} />{" "}
        software developement
      </h2>
      <p>
        I have passion for software developement and I love creating digital
        products. I&apos;m also just an all-around technology type-of-guy always
        trying to find the next interesting thing to dive into.
      </p>
      <p>
        Currently in the role as the CTO for the digital product agency{" "}
        <a href="https://www.gangverk.is">Gangverk</a> where I work with really
        talented people that are creating awesome products for our clients.
      </p>
    </Container>
  );
};
export default Headline;
