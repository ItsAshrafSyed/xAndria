import {
	Box,
	Flex,
	Text,
	Image,
	Spacer,
	Button,
	Container,
	IconButton,
} from "@chakra-ui/react";

export default function SideNav() {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			padding="1rem"
			bg="#111"
			color="white"
			maxW={"30vw"}
			h="100vh"
			position="fixed"
			top="0"
			left="0"
			zIndex="10"
		>
			<Container>
				<IconButton aria-label="" />
			</Container>
		</Flex>
	);
}
