import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Blog from './Blog/index';
import Header from './Header/index';
import Navigation from './Navigation/index';
import Footer from './Footer/index';
import {
  Container,
  HeaderContainer,
  ContainerWidth,
  MainContainer,
  NavContainer,
  BlogContainer,
  FooterContainer
} from "./style";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <HeaderContainer>
            {/* <ContainerWidth> */}
            <Header />
            {/* </ContainerWidth> */}
          </HeaderContainer>
          <MainContainer>
            <NavContainer>
              <ContainerWidth>
                <Navigation />
              </ContainerWidth>
            </NavContainer>
            <ContainerWidth>
              <BlogContainer>
                <Blog />
              </BlogContainer>
            </ContainerWidth>
          </MainContainer>
          <FooterContainer>
            <ContainerWidth>
              <Footer />
            </ContainerWidth>
          </FooterContainer>
        </Container>
      </Router>
    );
  }
}

export default App;
