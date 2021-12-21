import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { Light } from "../styles/Theme";
import { SWRConfig } from "swr";
import MarqueeBanner from "../components/content/MarqueeBanner";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Reset />
			<ThemeProvider theme={Light}>
				<GlobalStyle />
				<SWRConfig
					value={{
						fetcher: (resource, init) =>
							fetch(resource, init).then((res) => res.json()),
					}}>
					<MarqueeBanner />
					<Component {...pageProps} />
				</SWRConfig>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
