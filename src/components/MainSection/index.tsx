import React, { ReactNode } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { CardInvoice } from "../CardInvoice";

interface Props {
  content: ReactNode;
}

export const MainSection = ({ content }: Props) => {
  return (
    <Flex w="full" justify="center" h="70vh" overflowY="scroll">
      <Flex maxW="container.md" w="full" h="full">
        {content}
      </Flex>
    </Flex>
  );
};
