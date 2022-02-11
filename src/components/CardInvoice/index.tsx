import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const CardInvoice = () => {
  return (
    <Flex
      w="full"
      h="min-content"
      flexDir="column"
      border="1px"
      borderColor="purple.400"
      overflow="hidden"
      borderRadius="4"
    >
      <VStack w="full" bg="white" p="8" pb="4" align="flex-start" spacing="4">
        <Text fontSize="xs">2022 02</Text>
        <Text fontSize="xl" fontWeight="bold">
          USD 3.000,00
        </Text>
        <Text fontSize="xs">Amazon</Text>
        <Button w="full" variant="outline" colorScheme="purple">
          View
        </Button>
      </VStack>
      <Flex h="2" bg="purple.500" />
    </Flex>
  );
};
