import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Covid-19 Visual Data</h1>
          <h6>© {new Date().getFullYear()} Bradley Genao</h6>{" "}
        </FooterDesc>

        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterHref href="mailto:bradley@genao.io" target="_top">
            Contact
          </FooterHref>
          <FooterLink to="/about">About</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterHref href="https://genao.io">Portfolio</FooterHref>
          <FooterHref href="https://www.linkedin.com/in/bjgenao/">
            Linkedin
          </FooterHref>
          <FooterHref href="https://github.com/BradleyGenao">Github</FooterHref>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 2rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  background: black;
  height: 100%;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #73a9c2;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterHref = styled.a`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: whitesmoke;

  &:hover {
    color: #73a9c2;
    transition: 0.3s ease-out;
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: whitesmoke;

  &:hover {
    color: #73a9c2;
    transition: 0.3s ease-out;
  }
`
