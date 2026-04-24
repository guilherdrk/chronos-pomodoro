import { Container } from "./components/Container";
import { Logo } from "./components/Logo";


import "./styles/theme.css";
import "./styles/global.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";


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
				<CountDown />
			</Container>
			<Container>
				<section>FOOTER</section>
			</Container>
		</>
	);
};
