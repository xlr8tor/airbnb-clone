import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <Box as="main">
      <Box mt={4} mb={10} px={{base: 10, lg: 20}}>
        <Flex my={6}>
          <Grid
            gridAutoFlow="row dense"
            gridAutoRows="minmax(min-content, max-content)"
            gridGap="40px 24px"
            gridTemplateColumns="repeat(auto-fill,minmax(250px,1fr))"
          >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardList;
