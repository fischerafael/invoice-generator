import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import { ActionSection } from "../../ActionSection";
import { Header } from "../../Header";

interface Props {
  mainSection: ReactNode;
}

export const AppTemplate = ({ mainSection }: Props) => {
  return (
    <Flex
      align="center"
      justify="flex-start"
      h="100vh"
      px="4"
      bg="gray.50"
      fontFamily="sans-serif"
      flexDirection="column"
    >
      <Header />
      {mainSection}
    </Flex>
  );
};
