import {useContext} from 'react';
import {FormContext} from '../../contexts/FormContext';

export const FormInput = ({
  name,
  label,
  onChange,
  validators = [],
  className,
  ...props
}) => {
  const {
    values,
    isDirty,
    setIsDirty,
    setValues,
    errors,
    setErrors
  } = useContext(FormContext);

  let setError = (value) => {
    let currentErrors = validators
      .map((cb) => cb(value, label))
      .filter(Boolean);
    setErrors((errors) => ({ ...errors, [name]: currentErrors }));
  };

  return (
    <div className="field-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        className={className}
        onChange={(e) => {
          const { value: currentValue } = e.target;
          setValues((values) => ({ ...values, [name]: currentValue }));
          setIsDirty((values) => ({ ...values, [name]: true }));
          setError(currentValue);
        }}
        onBlur={() => {
          setIsDirty((values) => ({ ...values, [name]: true }));
          setError(values[name]);
        }}
        value={values[name] || ""}
        {...props}
      />
      {isDirty[name] && errors[name].length > 0 && (
        <strong>{errors[name][0]}</strong>
      )}
    </div>
  );
};