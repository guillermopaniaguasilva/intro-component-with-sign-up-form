import './App.css';
import { Section, Heading, Description, Card, CardText, Bold } from './styles';
import SignUpForm from '../SignUpForm/SignUpForm';

const App = () => {
  return (
    <>
      <Section>
        <Heading>Learn to code by watching others</Heading>
        <Description>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but undestanding how developers think is
          invaluable.
        </Description>
        <Card>
          <CardText>
            <Bold>Try it free 7 days </Bold>
            then $20/mo. thereafter
          </CardText>
        </Card>
      </Section>
      <Section>
        <SignUpForm />
      </Section>
    </>
  );
};

export default App;
