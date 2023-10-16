import React from "react";
import { Box, Flex, Button, Image, Text, Spacer } from "@chakra-ui/react";

function Navbar() {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			padding="1rem"
			bg="#111"
			color="white"
		>
			<Flex align="center">
				<Image src="/images/logo.png" alt="Your Logo" boxSize="40px" mr="2" />
				<Text fontWeight="bold">Your Website Name</Text>
			</Flex>

			<Box>
				<Button colorScheme="teal" size="sm">
					Connect Wallet
				</Button>
			</Box>
		</Flex>
	);
}

export default Navbar;
