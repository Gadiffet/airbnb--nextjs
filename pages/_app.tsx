import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import { theme } from '../utils/color/color';
import Navbar from '../layers/navBar/navbar';
import { Subnavbar } from '../layers/subNavBar/subnavbar';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Navbar></Navbar>
			<Subnavbar></Subnavbar>

			<Component {...pageProps} />
		</ThemeProvider>
	);
}
