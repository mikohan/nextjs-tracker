import { Form, Field } from '@leveluptuts/fresh';

const HabitForm = () => {
  return (
    <Form
      formId="formId"
      onSubmit={(data: any) => {
        console.log(data);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
