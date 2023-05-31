import { FormEvent, useState } from 'react';
import { Form, SubmitButton, AcceptPolicyText, PolicyLink } from './styles';
import Input from '../Input';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState({ value: '', error: false });
  const [lastName, setLastName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!firstName.value) setFirstName({ value: firstName.value, error: true });
    if (!lastName.value) setLastName({ value: lastName.value, error: true });
    if (!email.value) setEmail({ value: email.value, error: true });
    if (!password.value) setPassword({ value: password.value, error: true });

    if (firstName.value && lastName.value && email.value && password.value) {
      console.log('form values:', {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      });
      setFirstName({ value: '', error: false });
      setLastName({ value: '', error: false });
      setEmail({ value: '', error: false });
      setPassword({ value: '', error: false });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        inputControlState={firstName}
        name="First Name"
        onChange={(e) => {
          setFirstName({ value: e.target.value, error: false });
        }}
      />
      <Input
        type="text"
        inputControlState={lastName}
        name="Last Name"
        onChange={(e) => setLastName({ value: e.target.value, error: false })}
      />
      <Input
        type="text"
        inputControlState={email}
        name="Email"
        onChange={(e) => setEmail({ value: e.target.value, error: false })}
      />
      <Input
        type="password"
        inputControlState={password}
        name="Password"
        onChange={(e) => setPassword({ value: e.target.value, error: false })}
      />
      <SubmitButton>Claim your free trial</SubmitButton>
      <AcceptPolicyText>
        By clicking the button, you are agreeing to our{' '}
        <PolicyLink>Terms and Services</PolicyLink>
      </AcceptPolicyText>
    </Form>
  );
};

export default SignUpForm;
