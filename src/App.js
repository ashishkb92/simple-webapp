import './App.css';
import { Form, FormInput } from './components/Form';
import { InformationPane } from './components/Form/InformationPane';

const requiredValidator = (value, label) => {
  if (value.trim() === '') return `${label} cannot be empty`;
};
function App() {
  return (
    <main>
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
      <section className='information-section'>
        <InformationPane>Information to be displayed here</InformationPane>˝
      </section>
    </main>
  );
}

export default App;
