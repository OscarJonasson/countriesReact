import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { search } from '../../features/countries/countriesSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Search for a country</h2>
      <InputGroup className="mt-5 w-25">
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => dispatch(search(e.target.value))}
        />
      </InputGroup>
    </>
  );
};

export default Search;
