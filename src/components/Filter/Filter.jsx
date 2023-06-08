import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ handleFilter }) => {
  return (
    <>
      <Label htmlFor="">Find contacts by name</Label>
      <Input
        name="filter"
        onChange={handleFilter}
        type="text"
        placeholder="Сontact search ..."
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};