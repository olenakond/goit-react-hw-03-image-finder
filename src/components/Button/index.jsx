import { Btn } from './Button.styled';

const Button = ({ handleLoadMore }) => {
  return (
    <Btn type="button" onClick={handleLoadMore}>
      Load more
    </Btn>
  );
};

export default Button;
