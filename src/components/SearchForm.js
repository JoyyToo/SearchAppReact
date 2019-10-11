import React from 'react';
import { FormGroup, Form, FormControl, Button } from 'react-bootstrap';

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="enter something..." />
    </FormGroup>
    {' '}
    <Button type="submit">
      search
    </Button>
  </Form>
);

export default SearchForm;
