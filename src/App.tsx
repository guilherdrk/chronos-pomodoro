import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import "./styles/theme.css";
import "./styles/global.css";

export const App = () => {
  console.log("oi");
  return (
    <>
        <Container>
            <Heading>LOGO</Heading>
            
        </Container>
        <Container>
            <Heading>MENU</Heading>
        </Container>
        <Container>
            <section>FORM</section>
        </Container>
        <Container>
            <section>FOOTER</section>
        </Container>
    </>
  );
};
