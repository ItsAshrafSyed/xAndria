import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import globalStyles from "@/styles/globalstyles";
import AppLayout from "@/layouts/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppLayout>
			<ChakraProvider theme={globalStyles}>
				<Component {...pageProps} />
			</ChakraProvider>
		</AppLayout>
	);
}
