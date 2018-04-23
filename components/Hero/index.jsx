import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Title, SubTitle, Button } from './UI';
class Hero extends Component {
  static Title = Title;
  static SubTitle = SubTitle;
  static Button = Button;

  render() {
    return(
      <Container {...this.props}>
        {this.props.children}
      </Container>
    )
  }
}

export default Hero
