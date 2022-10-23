import { useState, FC} from "react";
import { Box, Flex, HStack, Stack, Text, Icon, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { ListingsType } from "common/data/dummyListingsData";


const Card:FC<ListingsType> = ({host, period, price, location, imageUrl, rating}) => {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <Box cursor="pointer">
      <Box position="relative">
        <Image
          src={`/img/${imageUrl}`}
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
          <Text fontWeight="boldSm">{location}</Text>
          <HStack>
            <Icon as={StarIcon} />
            <Text>{rating}</Text>
          </HStack>
        </Flex>
        <Text color="gray.50">Hosted by {host}</Text>
        <Text color="gray.50">{period}</Text>
        <Text fontWeight="boldSm" mt={1.5}>
          ${price} night
        </Text>
      </Stack>
    </Box>
  );
};

export default Card;
