import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { Light } from "../styles/Theme";
import { SWRConfig } from "swr";
import MarqueeBanner from "../components/content/MarqueeBanner";
import ToastContextProvider from "../context/toast.context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="theme-color" content="#8c391b" />
				<title>메타버스 기부 프로젝트 : 스노우타운</title>
				<meta
					name="description"
					content={
						"메타버스 세상속 스노우타운에서 곤경에 처한 사람들을 도와주세요! " +
						"미션들을 수행하고 트리를 완성하면 천원이 자동으로 기부됩니다!"
					}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@pinot_kim" />
				<meta
					name="twitter:image"
					content="https://donation-tree.io/opengraph_image.png"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:locale" content="ko_KR" />
				<meta
					property="og:title"
					content="메타버스 기부 프로젝트 : 스노우타운"
				/>
				<meta
					property="og:description"
					content={
						"메타버스 세상속 스노우타운에서 곤경에 처한 사람들을 도와주세요! " +
						"미션들을 수행하고 트리를 완성하면 천원이 자동으로 기부됩니다!"
					}
				/>
				<meta property="og:url" content="https://donation-tree.io" />
				<meta
					property="og:image"
					content="https://donation-tree.io/opengraph_image.png"
				/>
			</Head>
			<Reset />
			<ThemeProvider theme={Light}>
				<GlobalStyle />
				<SWRConfig
					value={{
						fetcher: (resource, init) =>
							fetch(resource, init).then((res) => res.json()),
					}}>
					<ToastContextProvider>
						<MarqueeBanner />
						<Component {...pageProps} />
					</ToastContextProvider>
				</SWRConfig>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
