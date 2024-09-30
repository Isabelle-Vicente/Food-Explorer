import PropTypes from 'prop-types';
import { Label, Input } from './styles';

export const FormInput = ({ label, type, id, placeholder }) => {
    return (
      <>
        <Label htmlFor={id}>{label}</Label>
        <Input type={type} id={id} placeholder={placeholder} />
      </>
    );
  };
  

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string, 
}
