import styled from 'styled-components';

const Button = styled.button`
  border: ${props => props.inverted ? `1px solid ${props.theme.primary}` : 'none'};
  border-radius: ${props => props.theme.button.baseRadius};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  font-size: ${props => {
    const { baseFontSize } = props.theme;
    const baseFontSizeParsed = parseInt(baseFontSize, 10);
    return (props.small && `${baseFontSizeParsed * 0.875}rem`)
      || (props.large && `${baseFontSizeParsed * 2.8}rem`)
      || baseFontSize;
  }};
  font-weight: ${props => props.theme.fontSemibold};
  line-height: ${props =>
    (props.small && '2.2') || (props.large && '1.25') || '2.5'
  };
  padding: ${props =>
    props.large ? '1.6rem 4rem 1.6rem' : '0 1.2rem'
  };
  position: relative;
  text-align: center;
  color: ${props =>
    (props.inverted && props.theme.primary)
    || (props.link && props.theme.baseFontColor)
    || '#000'
  };
  background-color: ${props =>
    (props.primary && props.theme.primary)
    || (props.danger && props.theme.danger)
    || (props.warning && props.theme.warning)
    || ((props.inverted || props.link) && '#fff')
    || (props.disabled && props.theme.brandGrey)
  };

  &:hover {
    ${props => props.link && 'text-decoration: underline;'}
  }
    
    @media (max-width: 575.98px) {
      font-size: ${props => {
      const { baseFontSize } = props.theme;
      const baseFontSizeParsed = parseInt(baseFontSize, 10);
      return (props.small && `${baseFontSizeParsed * 0.575}rem`)
        || (props.large && `${baseFontSizeParsed * 1.3}rem`)
        || baseFontSize;
        }
      }
    };
    @media (min-width: 1920px) {
      font-size: ${props => {
        const { baseFontSize } = props.theme;
        const baseFontSizeParsed = parseInt(baseFontSize, 10);
        return (props.small && `${baseFontSizeParsed * 2.25}rem`)
          || (props.large && `${baseFontSizeParsed * 3.8}rem`)
          || baseFontSize;
        }
      }      
    }

`;

export default Button;
