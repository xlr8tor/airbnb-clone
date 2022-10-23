import React from "react";
import { Box, Flex, Grid, Button, Icon, Text } from "@chakra-ui/react";
import { AiFillControl } from "react-icons/ai";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "./NavList";
import usePreventBodyScroll from "./hooks/usePreventBodyScroll";
import navbar from "common/data/dummyNavData";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;


const Navbar = () => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [isSelected, setIsSelected] = React.useState(1);

  const toggleSelected = (id: number) => {
    setIsSelected(id)
  }

  return (
    <Box
      h="98px"
      w="100%"
      position="sticky"
      top="calc(80px - 20px)"
      pt={5}
      bgColor="white"
      zIndex={9}
    >
      <Flex>
        <Grid
          px={{ base: 10, lg: 20 }}
          w="100%"
          maxH="78px"
          gridTemplateColumns="100%"
          sx={{
            "--max-content-width": "2560px",
            ".navspan": {
              maxW: "var(--max-content-width, 1760px)",
            },
          }}
        >
          <Flex>
            <Box
              as="div"
              onMouseEnter={disableScroll}
              onMouseLeave={enableScroll}
              flex={1}
              overflowX="hidden"
              css={{
                ".react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":
                  {
                    display: "none",
                  },
                ".react-horizontal-scrolling-menu--scroll-container": {
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  gap: "24px",
                },
                ".react-horizontal-scrolling-menu--arrow-left,.react-horizontal-scrolling-menu--arrow-right":
                  {
                    alignItems: "center",
                  },
              }}
            >
              <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                onWheel={onWheel}
              >
                {navbar.map(({ id, title, component }) => (
                
                  
                  <Box key={id} mt={3} pt={1} pb={3.5}>
                    
                    <Button variant="blank" px={0} onClick={() => toggleSelected(id)} >
                      <Box display="flex">
                        <Box
                          as="span"
                          display="flex"
                          flexDirection="column"
                          gap={2}
                          alignItems="center"
                          _after={{
                            position: "absolute",
                            content: "' '",
                            height: "2px",
                            top: "calc(100% + 12px)",
                            opacity: id == isSelected ? 1 : 0,
                            transition: "opacity 0.3s ease",
                            insetInline: 0,
                            bgColor: id == isSelected ? "black": "gray.25",
                          }}
                          _hover={{
                            _after: {
                              opacity: 1,
                            },
                          }}
                        >
                          <Icon as={component} />
                          <Text
                            fontSize="12px"
                            color="gray.50"
                            fontWeight="boldSm"
                          >
                    
                            {title}
                          </Text>
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                ))}
              </ScrollMenu>
            </Box>
            <Box flexBasis="fit-content">
              <Box pl={6}>
                <Button variant="outline" fontSize="14px" mt={3}>
                  <Icon as={AiFillControl} transform="rotate(90deg)" mr={1} />
                  Filters
                </Button>
              </Box>
            </Box>
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default Navbar;
