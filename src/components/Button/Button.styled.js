import { styled } from 'styled-components';

export const Btn = styled('button')(() => {
  return {
    padding: '16px 16px',
    margin: '20px auto 20px auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#849b87',
    fontFamily: 'inherit',
    fontSize: 22,
    lineHeight: 1.33,
    fontStyle: 'normal',
    textDecoration: 'none',
    fontWeight: 500,
    color: '#fff',
    border: 0,
    borderRadius: 10,
    minWidth: 180,
    height: 60,
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',

    '&:hover, &:focus': { backgroundColor: '#abbd81' },
    cursor: 'pointer',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  };
});
