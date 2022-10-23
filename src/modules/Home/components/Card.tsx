import { useState } from "react";
import { Box, Flex, HStack, Stack, Text, Icon, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";

const Card = () => {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <Box cursor="pointer">
      <Box position="relative">
        <Image
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
          mb={3}
          alt="house"
          borderRadius="xls"
        />
        <Icon
          as={FaHeart}
          boxSize={6}
          position="absolute"
          top="20px"
          right="20px"
          fill={liked? 'pink.25': ' '}
          fillOpacity={liked? 1: 0.3}
          stroke="white"
          strokeWidth="20"
          onClick={toggleLike}
        />
      </Box>

      <Stack spacing={1} fontSize="14px" lineHeight="19px">
        <Flex justify="space-between">
          <Text fontWeight="boldSm">Marrakesh, Morocco</Text>
          <HStack>
            <Icon as={StarIcon} />
            <Text>4.95</Text>
          </HStack>
        </Flex>
        <Text color="gray.50">3,042 kilometers away</Text>
        <Text color="gray.50">Date</Text>
        <Text fontWeight="boldSm" mt={1.5}>
          $750 night
        </Text>
      </Stack>
    </Box>
  );
};

export default Card;
