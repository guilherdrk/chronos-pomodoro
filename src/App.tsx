import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";


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
