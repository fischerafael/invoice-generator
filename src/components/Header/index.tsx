import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <HStack h="10vh" w="full" align="center" justify="center">
      <HStack h="full" w="full" maxW="container.md" justify="space-between">
        <Text color="purple.500" fontWeight="black">
          InvoiceGenerator
        </Text>
        <Button variant="outline" fontSize="xs" colorScheme="purple">
          Log Out
        </Button>
      </HStack>
    </HStack>
  );
};
