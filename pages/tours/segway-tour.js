import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";

import Layout from "../../components/layout";
import Locations from "../../components/locations";

export default function Tour() {
  const segwayTour = [
    "Sweetie Pies",
    "Vintage Sweet Shoppe",
    "The Pear Southern Bistro",
    "Tarla’s",
    "Carpe Diem",
    "Sushi Mambo",
    "Small World Cafe",
    "Ca’Momi",
    "La Esperanza",
    "Bui Bistro",
    "Lucero",
    "Three Twins",
    "Napa General Store",
    "Frati",
    "Clementes",
    "Napa Valley Olive Oil",
    "Ristorante Allegria",
    "Napkins",
    "Model Bakery",
    "Mango on Main",
    "Melted",
    "Napa Valley Bistro",
    "Taqueria Rosita",
    "Kara’s Cupcakes",
    "Smoakville",
  ];

  return (
    <Layout>
      <Content>
        <Column>
          <Heading>
            <img
              src="/arrow-left-solid.svg"
              alt=""
              onClick={() => Router.back()}
            />
            <h1>Segway Tour</h1>
            <h1>$85</h1>
          </Heading>
          <h2>7 stops may include:</h2>
          <Locations tour={segwayTour} />
          <Button href="mailto:foodiesonfoot@yahoo.com">
            Email to Reserve
          </Button>
        </Column>
        <Column
          style={{
            backgroundImage: "url('../segway.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            filter: "sepia(0.3) opacity(0.8)",
          }}
        ></Column>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background-color: black;

  h2 {
    color: white;
    font-size: 36px;

    span {
      color: white;
    }
  }
`;

const Column = styled.div`
  padding: 50px;
  padding-top: 125px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;

  h2 {
    font-size: 20px;
  }
`;

const Button = styled.a`
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  border: 0px solid white;
  width: 300px;
  height: 60px;
  font-family: "Josefin Sans";
  font-weight: 700;
  font-size: 25px;
  color: black;
  justify-self: center;
  align-self: center;
  margin-top: 80px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Heading = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;
