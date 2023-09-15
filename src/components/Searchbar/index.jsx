import { Component } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Header, Form, Button, Label, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.props.onSubmit}>
          <Button type="submit">
            <Label>Search</Label>
            <HiOutlineMagnifyingGlass size="22" />
          </Button>
          <Input
            onChange={this.handleInput}
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
