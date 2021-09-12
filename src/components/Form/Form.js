import React from 'react';
import { useForm } from 'react-hook-form';
// Store
import useStore from '../../store/useStore';

// Components
import Input from '../Input/Input';

// Styles
import './Form.scss';

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { fetchParts } = useStore();
  const exclusions = useStore((state) => state.exclusions);
  const isExcluded = useStore((state) => state.isExcluded);

  const onSubmit = async (values) => {
    if (values) {
      const { partNumber } = values;

      //--> Requirement 2 - Check Exclusions List

      // If we got here it means that the part # is valid, we can now check it against the exclusion list in the store
      const excluded = isOnExclusionList({ partNumber });

      // The exclusion list contains the provided part number
      if (excluded) {
        // So now we need to set the parts list to an empty array (Req 2)
        useStore.setState({ parts: [] });
        useStore.setState({ isExcluded: true });
        // We end instructions here, the UI should be updated once the previous line is executed
        return;
      }

      //--> Requirement 3 - Lookup Compatible Parts

      // The provided part # is NOT in the exclusion list, so we must return
      if (!excluded) {
        useStore.setState({ isExcluded: false });
        fetchParts({ partNumber });
      }
    }
  };

  const isOnExclusionList = ({ partNumber }) => {
    return exclusions.some((x) => x.PartNumber.toLowerCase() === partNumber.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          type="text"
          label="Part number"
          id="partNumber"
          tabIndex="0"
          errorText={
            errors.partNumber?.type === 'pattern'
              ? 'Part number is invalid'
              : errors.partNumber?.type === 'required'
              ? 'Part number is required'
              : ''
          }
          {...register('partNumber', {
            required: true,
            //--> Requirement 1 - Validate Part Number
            // Regex will look for exactly 4 digits, a dash (-) and a minimum of 4 alphanumeric characters
            pattern: /([0-9]{4})-([a-z0-9]{4,})+$/i,
          })}
        />
        <input type="submit" className="button" value="Search" />
      </form>
      {isExcluded && <p>The provided part number is part of the exclusion list.</p>}
    </div>
  );
};

Form.propTypes = {};

export default Form;
