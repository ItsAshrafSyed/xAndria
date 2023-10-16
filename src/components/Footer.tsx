import { Box, Flex, Text, Image, Spacer, Button } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Flex
			as="footer"
			align="center"
			justify="space-between"
			padding="1rem"
			bg="#111"
			color="white"
			w="100%"
			position="fixed"
			bottom="0"
			left="0"
			zIndex="10"
		>
			<Flex align="center">
				<Image src="/images/logo.png" alt="Your Logo" boxSize="40px" mr="2" />
				<Text fontWeight="bold">Your Website Name</Text>
			</Flex>
			<Spacer />
			<Box>
				<Button colorScheme="teal" size="sm">
					Connect Wallet
				</Button>
			</Box>
		</Flex>
	);
}
