import { Form, Field } from '@leveluptuts/fresh';

const HabitForm = ({ setHabits }) => {
  return (
    <Form
      formId="formId"
      onSubmit={(data) => {
        setHabits((prevState) => [...prevState, data.habit]);
      }}
    >
      <Field className="inClass">Habit</Field>
      <style jsx>
        {`
          input {
            width: 100%;
            border: 2px solid red;
            border-radius: 4px;
          }

          .inClass {
            border: 2px solid blue;
          }
        `}
      </style>
    </Form>
  );
};

export default HabitForm;
