import { ColorRing } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ColorRing height="100" width="100" />
    </Container>
  );
};

export default Loader;
