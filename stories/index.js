import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
// import Button from '../components/Button';
import Hero from '../components/Hero';

import './reset.css';
let theme = {}
theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

console.log('TITLE1', Hero.Title)
// storiesOf('Button', module)
//     .add('primary', () => (
//         <ThemeProvider theme={theme}>
//             <Button primary onClick={action('clicked')}>Primary</Button>
//         </ThemeProvider>
//     ))
//     .add('warning', () => (
//         <ThemeProvider theme={theme}>
//             <Button warning onClick={action('clicked')}>Warning</Button>
//         </ThemeProvider>
//     ))
//     .add('danger', () => (
//         <ThemeProvider theme={theme}>
//             <Button danger onClick={action('clicked')}>Danger</Button>
//         </ThemeProvider>
//     ));

const bluish = [
  `rgba(5, 25, 55, 0.8)`,
  `rgba(0, 77, 122, 0.8)`,
  `rgba(0, 135, 147, 0.8)`,
  `rgba(0, 181, 114, 0.8)`,
  `rgba(168, 235, 18, 0.8)`,
];

const redish = [
  'rgba(238, 9, 121, .8)',
  'rgba(255, 106, 0, .8)'
]
const baseTheme = {
  baseFontSize: '1.6rem',
  baseFontColor: '#000',
  fontSemibold: '600',
  hero: {
    borderRadius: '1px',
    fontFamily: 'Roboto',
    backgroundImage: '/img/hero2.jpg',
    height: '95vh',
    textColor: `
      rgba(255, 255, 255, 1)
    `,
    buttonColor: `
      rgba(255, 255, 255, 1)
    `,    
  },
  button: {
    baseBorder: `1px solid rgba(84, 106, 120, 1)`,
    baseRadius: '10rem',
  }
}

const bluishTheme = {
  ...baseTheme,
  hero: {
    ...baseTheme.hero,
    gradientColors: bluish, 
    backgroundImage: '/img/hero5.jpg',   
  }
}

const redishTheme = {
  ...baseTheme,
  hero: {
    ...baseTheme.hero,
    gradientColors: redish,
  },
  button: {
    ...baseTheme.button,
    baseRadius: '1rem',
  }    
}

storiesOf('Hero', module)
    .add('Bluish', () => (
      <ThemeProvider theme={bluishTheme}>
        <Hero center>
          <Hero.Title>Styled Components Demo💅</Hero.Title>
          <Hero.SubTitle>CSS in JS FTW!</Hero.SubTitle>
          <Hero.Button large>
            <Hero.Button.Text>Get started &rarr;</Hero.Button.Text>
          </Hero.Button>
        </Hero>
    </ThemeProvider>
  ))
  .add('Redish', () => (
    <ThemeProvider theme={redishTheme}>
      <Hero center>
        <Hero.Title>Styled Components Demo💅</Hero.Title>
        <Hero.SubTitle>CSS in JS FTW!</Hero.SubTitle>
        <Hero.Button large>
          <Hero.Button.Text>Get started &rarr;</Hero.Button.Text>
        </Hero.Button>
      </Hero>
    </ThemeProvider>    
  ));
