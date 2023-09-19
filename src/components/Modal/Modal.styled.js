import { styled } from 'styled-components';

export const Overlay = styled('div')(() => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  };
});

export const Container = styled('div')(() => {
  return {
    width: '60vw',
    borderRadius: 5,
    overflow: 'hidden',
  };
});
