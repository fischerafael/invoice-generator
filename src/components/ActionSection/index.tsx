import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const ActionSection = () => {
  return (
    <HStack h="20vh" w="full" align="center" justify="center">
      <HStack h="full" w="full" maxW="container.md" justify="space-between">
        <Text>Your Invoices</Text>
        <Button fontSize="xs" colorScheme="purple">
          Add Invoice
        </Button>
      </HStack>
    </HStack>
  );
};
