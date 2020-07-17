import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <Layout>
      <Content>
        <h1>What the Heck is Foodies on Foot Anyway?</h1>
        <h3>Do you like to walk quaint little towns?</h3>
        <h3>Do you love to eat at world class dining establishments?</h3>
        <p>
          Here in the Napa and Sonoma Valley we have BOTH! Napa, Sonoma,
          Yountville, Saint Helena and Calistoga are all small towns yet host a
          number of Michelin Star, TripAdvisor, Yelp and AAA diamond rated
          eateries. With Foodies On Foot, we tailor our tours to include top
          TripAdvisor and Yelp reviewed restaurants and sample one of their
          signature creations. Like a Pub Crawl, without the hangover! We have
          done exhaustive research eating at hundreds of restaurants culling the
          less desirable and keeping the best for you; rough work, I know, but
          someone had to do it.
        </p>
      </Content>
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
  padding-right: 10%;
  padding-left: 10%;
  padding-top: 50px;

  h1 {
    color: #574925;
    font-size: 60px;
  }

  h3 {
    color: #574925;
    font-size: 24px;
    font-family: "Josefin Sans";
    margin: 10px 0px 0px 0px;

    span {
      color: white;
    }
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
