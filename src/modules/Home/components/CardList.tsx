import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import { Listings } from "common/data/dummyListingsData";

const CardList = () => {
  return (
    <Box as="main">
      <Box mt={4} mb={10} px={{base: 10, lg: 20}}>
        <Flex my={6}>
          <Grid
            gridAutoFlow="row"
            gridAutoRows="minmax(min-content, max-content)"
            gridGap="40px 24px"
            gridTemplateColumns={{sm: "repeat(1,minmax(250px,1fr))", md:"repeat(2,minmax(250px,1fr))", lg:"repeat(auto-fill,minmax(250px,1fr))"}}
          >
            {Listings.map((listing) => (
              <Card key={listing.id} {...listing}/>
            ))}
            
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardList;
