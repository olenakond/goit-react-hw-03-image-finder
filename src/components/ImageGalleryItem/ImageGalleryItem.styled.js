import { styled } from 'styled-components';

export const Item = styled('li')(() => {
  return {
    borderRadius: 7,
    overflow: 'hidden',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  };
});

export const Image = styled('img')(() => {
  return {
    width: '100%',
    height: 260,
    objectFit: 'cover',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'zoom-in',

    '&:hover': {
      transform: 'scale(1.03)',
    },
  };
});
