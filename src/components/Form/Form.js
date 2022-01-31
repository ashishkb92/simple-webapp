import { useMemo, useState } from 'react';
import { FormContext } from '../../contexts/FormContext';

export const Form = ({ className, onSubmit, header, children, ...props }) => {
  const [values, setValues] = useState({});
  const [isDirty, setIsDirty] = useState({});
  const [errors, setErrors] = useState({});
  const contextValues = useMemo(
    () => ({ values, isDirty, setIsDirty, setValues, errors, setErrors }),
    [values, isDirty, errors]
  );
  const combinedClassName = ['form-container', className].join(' ');
  return (
    <FormContext.Provider value={contextValues}>
      <form
        className={combinedClassName}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(values);
        }}
        {...props}
      >
        {header && <h2>{header}</h2>}
        {children}
      </form>
    </FormContext.Provider>
  );
};
