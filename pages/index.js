import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <SectionOne>
        <h2>Nibbling Napa and Sampling Sonoma</h2>
        <h1>One bite at a time</h1>
        <Link href="/our-tours" passHref>
          <Button>See Tours</Button>
        </Link>
      </SectionOne>
      <SectionTwo>
        <h2>
          Sonoma valley is known for its beautiful vineyards and world-class
          wine.
        </h2>
        <h2>
          But its also full of <span>delicious food </span>
          and <span>exciting experiences.</span>
        </h2>
        <h1>Let us give you a tour.</h1>
      </SectionTwo>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding: 10%;

  h2 {
    color: #574925;
    font-size: 36px;

    span {
      color: white;
    }
  }
`;

const SectionOne = styled(Content)`
  background-image: url("hills.jpg");
  background-size: cover;
  background-position: top;
  filter: sepia(0.4) opacity(0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: black;
    margin-top: 30px;
    font-size: 90px;
    font-weight: 700;
  }

  h2 {
    font-size: 65px;
    color: black;
  }
`;

const SectionTwo = styled(Content)`
  background-color: #b3be93;

  h1 {
    color: white;
    font-family: "Josefin Sans";
    font-size: 75px;
    margin-top: 50px;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  border: 0px solid white;
  width: 200px;
  height: 60px;
  font-family: "Josefin Sans";
  font-weight: 700;
  font-size: 25px;
  color: black;
  justify-self: center;
  align-self: center;
  margin-top: 80px;

  &:hover {
    cursor: pointer;
  }
`;
