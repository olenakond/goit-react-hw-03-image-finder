import { styled } from 'styled-components';

export const Header = styled('header')(() => {
  return {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    padding: '12px 24px',
    color: '#fff',
    backgroundColor: '#849b87',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  };
});

export const Form = styled('form')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  };
});

export const Button = styled('button')(() => {
  return {
    display: 'inline-block',
    width: 48,
    height: 48,
    border: 0,
    backgroundSize: '40%',
    backgrounRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.6,
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      opacity: 1,
    },
  };
});

export const Label = styled('span')(() => {
  return {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',
    border: 0,
  };
});

export const Input = styled('input')(() => {
  return {
    display: 'inline-block',
    paddingLeft: 4,
    paddingRight: 4,
    width: '100%',
    font: 'inherit',
    fontSize: 20,
    border: 'none',
    outline: 'none',
    '&::placeholder': {
      font: 'inherit',
      fontSize: 18,
    },
  };
});
