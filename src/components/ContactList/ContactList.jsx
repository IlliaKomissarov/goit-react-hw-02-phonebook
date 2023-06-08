import PropTypes from 'prop-types';
import { Li, Ul, Button, Name, Number } from './ContactList.styled';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <Li key={id}>
      <Name>{name} :</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => removeContact(id)}>
        Delete
      </Button>
    </Li>
  ));
  return <Ul>{elements}</Ul>;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};