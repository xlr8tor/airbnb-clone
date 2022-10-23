import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import {Button, Icon} from "@chakra-ui/react"
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      cursor="pointer"
      display= "flex"
      flexDirection= "column"
      justifyContent= "center"
      right="1%"
      opacity={ disabled? 0 : 1}
      userSelect="none"
      _disabled={{opacity: 0}}
      borderRadius="round"
      padding="0"
      w="28px"
      minW="none"
      h="28px"
    >
      {children}
    </Button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <Icon as={FaAngleLeft}/>
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
     <Icon as={FaAngleRight}/>
    </Arrow>
  );
}
