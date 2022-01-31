import './App.css';
import { Form, FormInput } from './components/Form';

const requiredValidator = (value, label) => {
  if (value.trim() === '') return `${label} cannot be empty`;
};
function App() {
  return (
    <>
      <section className='form-section'>
        <Form header={`Enter Details Below`}>
          <FormInput
            name='name'
            label='Name'
            validators={[requiredValidator]}
          />
          <FormInput
            name='age'
            label='Age'
            type='number'
            validators={[requiredValidator]}
          />
          <FormInput
            name='location'
            label='Location'
            validators={[requiredValidator]}
          />
        </Form>
      </section>
    </>
  );
}

export default App;
