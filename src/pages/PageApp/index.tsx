import React from "react";
import { Flex } from "@chakra-ui/react";

import { ActionSection } from "../../components/ActionSection";
import { Header } from "../../components/Header";
import { MainSection } from "../../components/MainSection";

export const PageApp = () => {
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
      <ActionSection />
      <MainSection />
    </Flex>
  );
};
