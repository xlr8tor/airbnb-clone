import React from "react";
import {
  Box,
  Flex,
  List,
  ListItem,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { TfiAngleUp } from "react-icons/tfi";

const Footer = () => {
  return (
    <Box w="100%" px={20} py={3.5} fontSize={14} borderTop="1px" borderTopColor="gray.25" >
      <Flex justify="space-between">
        <List display="flex">
          <ListItem> &copy; 2022 Airbnb, Inc.</ListItem>
          <ListItem>
            <Box
              as="span"
              display="inline-block"
              w={19}
              textAlign="center"
              fontSize={14}
            >
              ·
            </Box>
            <ChakraLink href="/">Privacy</ChakraLink>
          </ListItem>
          <ListItem>
            <Box
              as="span"
              display="inline-block"
              w={19}
              textAlign="center"
              fontSize={14}
            >
              ·
            </Box>
            <ChakraLink href="/">Terms</ChakraLink>
          </ListItem>
          <ListItem>
            <Box
              as="span"
              display="inline-block"
              w={19}
              textAlign="center"
              fontSize={14}
            >
              ·
            </Box>
            <ChakraLink href="/">Sitemap</ChakraLink>
          </ListItem>
          <ListItem>
            <Box
              as="span"
              display="inline-block"
              w={19}
              textAlign="center"
              fontSize={14}
            >
              ·
            </Box>
            <ChakraLink href="/">Destinations</ChakraLink>
          </ListItem>
        </List>
        <List display="flex" alignItems="center" fontWeight="boldSm">
          <ListItem mr={6} display="flex" alignItems="center">
            <Icon as={TbWorld} mr={2} />
            <ChakraLink href="/">English(US)</ChakraLink>
          </ListItem>
          <ListItem mr={6} display="flex" alignItems="center">
            <Icon as={BiDollar} mr={2} />
            <ChakraLink href="/">USD</ChakraLink>
          </ListItem>
          <ListItem mr={6} display="flex" alignItems="center">
            <ChakraLink href="/">Support & resources</ChakraLink>
            <Icon as={TfiAngleUp} ml={2} strokeWidth={1} />
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default Footer;
