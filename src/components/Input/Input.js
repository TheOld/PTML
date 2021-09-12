import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = forwardRef(
  (
    {
      accessKey,
      tabIndex,
      defaultValue,
      errorText,
      id,
      label,
      onChange,
      placeholder,
      required,
      size,
      title,
      type,
      value,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="input">
        {label && (
          <label className="input__label t-small t-left h-pointer" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          tabIndex={tabIndex}
          aria-invalid={!!errorText}
          className="input__control"
          defaultValue={defaultValue}
          id={id}
          onChange={(event) => onChange(event)}
          placeholder={placeholder}
          ref={ref}
          required={required}
          type={type}
          {...rest}
        />
        {errorText && <small role="alert" className="input__error">{`* ${errorText}`}</small>}
      </div>
    );
  },
);

Input.propTypes = {
  /**
   * Input id
   *
   * @since Version 1.0.0
   */
  id: PropTypes.string.isRequired,

  /**
   * Tab index
   *
   * @since Version 1.0.0
   */
  tabIndex: PropTypes.string.isRequired,

  /**
   * Input name.
   *
   * @since Version 1.0.0
   */
  name: PropTypes.string,

  /**
   * Text title that will appear above the input box e.g. "First Name"
   *
   * @since Version 1.0.0
   */
  label: PropTypes.string,

  /**
   * Type - by default is text
   *
   * @since Version 1.0.0
   */
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'textarea',
    'time',
    'url',
  ]),

  /**
   * Value is any changed or updated value.
   *
   *
   * @since Version 1.0.0
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Value is any changed or updated value.
   *
   *
   * @since Version 1.0.0
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Required adds validation so user must input some value.
   *
   * @since Version 1.0.0
   */
  required: PropTypes.bool,

  /**
   * Placeholder.
   *
   * @since Version 1.0.0
   */
  placeholder: PropTypes.string,

  /**
   * Error message - helper text for validating entries
   *
   * @since Version 1.0.0
   */
  errorText: PropTypes.string,

  /**
   * Gets called when the user types in the field
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   *
   * @param {Object} allProps All props of this Button
   *
   * @since Version 1.0.0
   */
  onChange: PropTypes.func,
};

export default Input;
