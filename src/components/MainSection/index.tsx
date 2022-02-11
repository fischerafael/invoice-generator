import { Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CardInvoice } from "../CardInvoice";

export const MainSection = () => {
  return (
    <Flex w="full" justify="center" h="70vh" overflowY="scroll">
      <Flex maxW="container.md" w="full" h="full">
        <SimpleGrid w="full" columns={3} gap="8" h="full" pb="8">
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
          <CardInvoice />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
