import React, { Component } from 'react';
import styled from 'styled-components';
import BaseButton from '../Button';

export const Container = styled.div`
    height: ${props => props.theme.hero.height};
    background-image: linear-gradient(
      to bottom right,
      ${ props => props.theme.hero.gradientColors.join(',')}
    )
    ${props => props.theme.hero.backgroundImage && `, url(${props.theme.hero.backgroundImage})` || ``};
    background-size: cover;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    border-radius: ${props => props.theme.hero.borderRadius};

    display: flex;
    flex-direction: column;
    justify-content: ${props => props.center && 'center' || 'flex-start' };
    align-items: ${props => props.center && 'center' || 'flex-start' };

    @media (max-width: 575.98px) {
      font-size: 1.25rem;
      padding: 0 1.75rem;
      justify-content: center;
      align-items: flex-start;
    }
    @media (min-width: 1920px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 50vh, 0 100%);
    }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: ${props => props.theme.hero.fontFamily};
  font-weight: 400;
  color: ${props => props.theme.hero.textColor};
  text-shadow: .1rem .1rem 3rem rgba(0, 0, 0, .9);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  @media (max-width: 575.98px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1920px) {
    font-size: 6rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-family: ${props => props.theme.hero.fontFamily};
  font-weight: 300;
  color: ${props => props.theme.hero.textColor};
  text-shadow: .5rem .5rem 6rem rgba(0, 0, 0, .6);
  margin-bottom: 5rem;
  letter-spacing: .5rem;

  @media (max-width: 575.98px) {
    font-size: 1rem;
    align-self: flex-start;
  }
  @media (min-width: 1920px) {
    font-size: 4rem;
  }
`;

const StyledButton = styled(BaseButton) `
  background-color: ${props => props.theme.hero.buttonColor};
`

const ButtonText = styled.div`
  display: inline-block;
  background: linear-gradient(
    to right,
    ${ props => props.theme.hero.gradientColors.join(',')}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
`

export class Button extends Component {
  static Text = ButtonText;
  render() {
    return(
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    )    
  }
}
