import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <Container>
      <Title>About Page</Title>
      <Info>
        Hello, My name is Bradley! This website originated from a simple react
        graph project I made over the summer. I wanted to develop a visually
        appealing website that pulled current COVID-19 data and displayed the
        information with easy charts. My main two goals for this project were to
        use GatsbyJs with graphql to query and display data and style the
        website with react-styled components. I wanted to start with a blank
        slate project that gave me one hundred percent customization. The
        biggest takeaways I learned from this project are that GatsbyJs and
        graphql provide an easy and fast way to build a static website. Styled
        components provided me with an easy way to quickly create any react
        component or style. I had a lot of fun learning GatsbyJs and all it
        brings to your website, the final product isn't complete nor perfect and
        I do want to revisit this site in the future to add more and clean up
        some styling issues. Lastly the site is deployed on netlify, which I can
        say was easy and intuitive with my gatsby project.
      </Info>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: black;
  color: white;
  height: 70vw;
  position: relative;
  margin-top: -80px;
`

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: clamp(1.5rem, 6vw, 3.6rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const Info = styled.div`
  text-align: center;

  height: 40%;
  padding: 1rem;
  padding-top: 3rem;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 21px;
  letter-spacing: 1.4px;
  word-spacing: 0.2px;
  color: #ffffff;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`
