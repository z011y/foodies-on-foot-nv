import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Foodies on Foot</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Josefin+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {router.pathname === "/story" ? null : (
        <Header>
          <Link href="/" passHref>
            <LogoWrapper>
              {router.pathname === "/tours/historic-napa-mill" ? (
                <img src="/cheese.svg" alt="" />
              ) : null}
              {router.pathname === "/tours/sonoma-square" ? (
                <img src="/grape.svg" alt="" />
              ) : null}
              {router.pathname === "/tours/segway-tour" ? (
                <img src="/segway.svg" alt="" />
              ) : null}
              {router.pathname !== "/tours/historic-napa-mill" &&
              router.pathname !== "/tours/sonoma-square" &&
              router.pathname !== "/tours/segway-tour" ? (
                <img src="/avocado.svg" alt="Logo" />
              ) : null}

              <h2>Foodies on Foot</h2>
            </LogoWrapper>
          </Link>
          <LinksWrapper>
            <Link href="/" passHref>
              <NavLink>Home</NavLink>
            </Link>
            <Link href="/our-tours" passHref>
              <NavLink>Our Tours</NavLink>
            </Link>
            <Link href="/about-us" passHref>
              <NavLinkAlt>About Us</NavLinkAlt>
            </Link>
            <Socials>
              <a
                href="https://www.instagram.com/foodiesonfootnv/"
                target="blank"
              >
                <img src="/instagram.svg" alt="" />
              </a>
              <a
                href="https://www.facebook.com/Foodies-On-Foot-Napa-Sonoma-Food-Tours-1408487212697952"
                target="blank"
              >
                <img src="/facebook.svg" alt="" />
              </a>
              <a
                href="https://www.yelp.com/biz/foodies-on-foot-napa?osq=foodies+on+foot"
                target="blank"
              >
                <img src="/yelp.svg" alt="" />
              </a>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g32766-d6534585-Reviews-Foodies_on_Foot-Napa_Napa_Valley_California.html"
                target="blank"
              >
                <img src="/tripadvisor.svg" alt="" />
              </a>
            </Socials>
          </LinksWrapper>
        </Header>
      )}
      <main>{children}</main>
      <Footer>
        <LogoWrapper>
          <img src="/avocado.svg" alt="Logo" />
          <h2>Foodies on Foot</h2>
        </LogoWrapper>
        <Contact>
          <h2>Available Tuesday through Saturday</h2>
          <a href="mailto:foodiesonfoot@yahoo.com">foodiesonfoot@yahoo.com</a>
          <a href="tel:707-208-4691">707-208-4691</a>
        </Contact>
        <h2>
          Leave a review on{" "}
          <a
            href="https://www.yelp.com/biz/foodies-on-foot-napa?osq=foodies+on+foot@yahoo.com"
            target="blank"
          >
            Yelp
          </a>{" "}
          or{" "}
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g32766-d6534585-Reviews-Foodies_on_Foot-Napa_Napa_Valley_California.html"
            target="blank"
          >
            Tripadvisor
          </a>
        </h2>
      </Footer>
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  height: 75px;
  position: fixed;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
  padding-left: 10%;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 210px;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 50px;
    margin-bottom: 5px;
  }

  h2 {
    color: #574925;
    margin-left: 20px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

const NavLink = styled.a`
  color: #574925;
  font-weight: 700;
  font-size: 18px;
`;

const NavLinkAlt = styled.a`
  color: #574925;
  font-weight: 700;
  font-size: 18px;
`;

const Footer = styled.footer`
  height: 50vh;
  width: 100%;
  background-color: #efece3;
  padding: 10%;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #574925;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Socials = styled.div`
  a {
    color: #574925;
    img {
      height: 20px;
      margin-right: 20px;
    }
  }
`;
