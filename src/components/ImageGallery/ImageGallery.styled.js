import { styled } from 'styled-components';

export const Gallery = styled('ul')(() => {
  return {
    margin: '0 auto',
    padding: 20,
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: 16,
    listStyle: 'none',
  };
});
