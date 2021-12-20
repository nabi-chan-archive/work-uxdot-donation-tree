import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { Light } from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Reset />
			<ThemeProvider theme={Light}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
