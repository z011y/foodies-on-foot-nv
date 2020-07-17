import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";
import Locations from "../components/locations";

export default function OurTours() {
  const oxbowMarket = [
    "Organic Juice Bar",
    "Model Bakery",
    "Ca’Momi",
    "Carpe Diem",
    "La Esperanza",
    "Melted",
    "Bui Bistro",
    "Napa Valley Bistro",
    "Lucero",
    "Taqueria Rosita",
    "Kara’s Cupcakes",
    "Ristorante Allegria",
    "Velo Pizza",
    "Small World Cafe",
    "Three Twins",
    "Tarla Clementes",
    "C’Casa",
  ];

  const historicNapaMill = [
    "Sweetie Pies",
    "Vintage Sweet Shoppe",
    "The Pear Southern Bistro",
    "Tarla’s",
    "Grace’s Table",
    "Eight Noodle",
    "Small World Cafe",
    "Napa General Store",
    "Frati",
    "Clementes",
    "Napa Valley Olive Oil",
    "Ristorante Allegria",
    "Napkins",
  ];

  const sonomaSquare = [
    "Basque Boulangerie Bakery",
    "Vella Cheese Factory",
    "Taste of the Himalayas",
    "El Dorado Kitchen",
    "Wine Country Chocolates",
    "The Red Grape",
    "Bui Bistro",
    "La Casa",
    "The Swiss Hotel",
    "The Patch",
    "Maya",
    "La Bodega",
    "Sunflower Caffe",
    "The Chocolate Cow",
    "Sonoma Cheese Factory",
  ];

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
      <SectionOne>
        <h1>
          <span>Taste</span> your way through Napa and Sonoma!
        </h1>
        <SeeTours>See Tours Below</SeeTours>
      </SectionOne>
      <SectionTwo>
        <Link href="/tours/oxbow-market" name="Oxbow Market">
          <Tour>
            <TourHeader>
              <img src="avocado.svg" alt="" />
              <h2>Oxbow Market</h2>
              <h2>$79</h2>
            </TourHeader>
            <Locations tour={oxbowMarket} />
          </Tour>
        </Link>
        <Link href="/tours/historic-napa-mill">
          <Tour>
            <TourHeader>
              <img src="cheese.svg" alt="" />
              <h2>Historic Napa Mill</h2>
              <h2>$79</h2>
            </TourHeader>
            <Locations tour={historicNapaMill} />
          </Tour>
        </Link>
        <Link href="/tours/sonoma-square">
          <Tour>
            <TourHeader>
              <img src="grape.svg" alt="" />
              <h2>Sonoma Square</h2>
              <h2>$85</h2>
            </TourHeader>
            <Locations tour={sonomaSquare} />
          </Tour>
        </Link>
        <Link href="/tours/segway-tour">
          <Tour>
            <TourHeader>
              <img src="segway.svg" alt="" />
              <h2>Segway Tour</h2>
              <h2>$85</h2>
            </TourHeader>
            <Locations tour={segwayTour} />
          </Tour>
        </Link>
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
  padding-right: 10%;
  padding-left: 10%;

  h2 {
    color: #574925;
    font-size: 36px;

    span {
      color: white;
    }
  }
`;

const SectionOne = styled(Content)`
  background-image: url("wave.svg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 100px;
    color: #574925;
    text-align: center;

    span {
      color: #8c9e59;
    }
  }
`;

const SectionTwo = styled(Content)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding-bottom: 50px;
  padding-top: 50px;
  height: 100%;
`;

const SeeTours = styled.h3`
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  border: 0px solid white;
  width: 300px;
  height: 60px;
  font-family: "Josefin Sans";
  font-weight: 700;
  font-size: 25px;
  color: #8c9e59;
  justify-self: center;
  align-self: center;
  margin-top: 80px;
  line-height: 40px;
  text-align: center;
`;

const Tour = styled.a`
  border: 5px solid #efece3;
  background-color: #efece3;
  border-radius: 10px;
  height: 100%;
  padding: 20px;
  transition: 0.25s ease-in-out;
  color: #574925;

  &:hover {
    border: 5px solid #574925;
  }
`;

const TourHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Josefin Sans";
    font-weight: 700;
    font-size: 24px;
  }

  img {
    height: 40px;
  }
`;
