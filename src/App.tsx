import { Container } from "./components/Container";
import { Logo } from "./components/Logo";


import "./styles/theme.css";
import "./styles/global.css";
import { Menu } from "./components/Menu";


export const App = () => {
  return (
    <>
        <Container>
            <Logo />
        </Container>
        <Container>
            <Menu />
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
