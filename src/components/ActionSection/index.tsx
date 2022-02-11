import React from "react";
import NextLink from "next/link";
import { Button, HStack, Text } from "@chakra-ui/react";

export const ActionSection = () => {
  return (
    <HStack h="20vh" w="full" align="center" justify="center">
      <HStack h="full" w="full" maxW="container.md" justify="space-between">
        <Text>Your Invoices</Text>
        <NextLink href="/app/add-invoice">
          <Button fontSize="xs" colorScheme="purple">
            Add Invoice
          </Button>
        </NextLink>
      </HStack>
    </HStack>
  );
};
