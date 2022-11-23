import { ContainerStyle } from './ContainerPhonebook.Styled';
import PropTypes from 'prop-types';

export const ContainerPhonebook = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
}

ContainerPhonebook.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
