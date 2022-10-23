import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  Icon,
  AvatarBadge,
  Avatar,
} from "@chakra-ui/react";
import { LogoIcon } from "design/Icons/LogoIcon";
import { Search2Icon } from "@chakra-ui/icons";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <Box position="sticky" top="0" zIndex="10" bgColor="white">
      <Box
        as="header"
        w="100%"
        h="80px"
        borderBottom="1px"
        borderBottomColor="gray.25"
        bgColor="white"
      >
        <Box px={20} w="inherit" h="inherit">
          <Flex h="inherit" align="center" justify="space-between">
            <Link href="/" h="inherit" display="flex" alignItems="center">
              <LogoIcon w="120px" h="32px" />
            </Link>
            <Flex
              mx={6}
              border="1px"
              borderColor="gray.25"
              borderRadius="3xl"
              h="48px"
              boxShadow="sm"
              align="center"
            >
              <Button variant="blank" h="inherit" pl={2} pr={0}>
                <Text px={4} fontSize="14px">
                  Anywhere
                </Text>
                <Box as="span" h="24px" w="1px" backgroundColor="gray.25"></Box>
              </Button>
              <Button variant="blank" h="inherit" p={0}>
                <Text px={4} fontSize="14px">
                  Any week
                </Text>
                <Box as="span" h="24px" w="1px" backgroundColor="gray.25"></Box>
              </Button>
              <Button variant="blank" h="inherit" p={0}>
                <Text
                  px={4}
                  fontSize="14px"
                  fontWeight="normal"
                  color="gray.50"
                >
                  Add guests
                </Text>
                <Box
                  as="span"
                  p={2.5}
                  backgroundColor="pink.25"
                  borderRadius="full"
                  my="7px"
                  mr="7px"
                  display="flex"
                >
                  <Icon as={Search2Icon} color="white" w="10.5px" h="10.5px" />
                </Box>
              </Button>
            </Flex>
            <Flex align="center">
              <Box
                p={3}
                _hover={{ borderRadius: "3xl", backgroundColor: "gray.100" }}
              >
                <Link
                  href="/"
                  fontSize="14px"
                  fontWeight="boldSm"
                  p={3}
                  _hover={{ textDecoration: "none" }}
                >
                  Become a Host
                </Link>
              </Box>
              <Box
                display="flex"
                cursor="pointer"
                p={3}
                _hover={{ borderRadius: "full", backgroundColor: "gray.100" }}
              >
                <Icon as={TbWorld} w="20px" h="20px" />
              </Box>
              <Button
                variant="blank"
                py="5px"
                pl={3}
                pr="5px"
                border="1px"
                borderRadius="3xl"
                borderColor="gray.25"
                ml={2}
              >
                <Flex align="center">
                  <Icon as={GiHamburgerMenu} />
                  <Avatar size="sm" ml={3}>
                    <AvatarBadge
                      borderColor="white"
                      border="2px"
                      bg="pink.25"
                      boxSize="1.1em"
                      top={-2}
                    />
                  </Avatar>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
