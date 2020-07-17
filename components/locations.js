import styled from "styled-components";

export default function Locations({ tour }) {
  const listLocations = (tour) => {
    return tour.map((item) => {
      let listItem = <li>{item}</li>;
      return listItem;
    });
  };

  return (
    <TourLocations>
      <ul>{listLocations(tour)}</ul>
    </TourLocations>
  );
}

const TourLocations = styled.div`
  width: 100%;
  height: 100%;

  ul {
    columns: 2;

    li {
      font-family: "Josefin Sans";
      font-weight: 300;
    }
  }
`;
