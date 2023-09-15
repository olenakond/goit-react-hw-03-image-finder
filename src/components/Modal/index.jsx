import { Component } from 'react';
import { Overlay, Container } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.toogleModal();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toogleModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <Container>
          <img
            src={this.props.image.largeImageURL}
            alt={this.props.image.tags}
          />
        </Container>
      </Overlay>
    );
  }
}

export default Modal;
