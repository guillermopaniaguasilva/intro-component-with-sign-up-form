import './App.css';
import { useState, useEffect } from 'react';
import { Section, Heading, Description, Card, CardText, Bold, DesktopContainer } from './styles';
import SignUpForm from '../SignUpForm/SignUpForm';

const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 600px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {
        !matches ? <>
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
        </> :
          <>
            <Section>
              <DesktopContainer>
                <Heading>Learn to code by watching others</Heading>
                <Description>
                  See how experienced developers solve problems in real-time. Watching
                  scripted tutorials is great, but undestanding how developers think is
                  invaluable.
                </Description>  
              </DesktopContainer>
            </Section>
            <Section>
              <DesktopContainer>
                <Card>
                  <CardText>
                    <Bold>Try it free 7 days </Bold>
                    then $20/mo. thereafter
                  </CardText>
                </Card>
                <SignUpForm />
              </DesktopContainer>
            </Section>
          </>
      }
    </>
  );
};

export default App;
