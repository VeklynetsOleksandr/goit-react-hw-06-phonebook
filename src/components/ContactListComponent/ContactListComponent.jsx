import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/actions/actions';
import { Element, Button } from './ContactListComponent.Styled';

export const ContactListComponent = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Element>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </Button>
    </Element>
  );
};

ContactListComponent.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};