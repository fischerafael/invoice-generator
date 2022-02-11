import React from "react";
import NextLink from "next/link";
import {
  Button,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { AppTemplate } from "../../components/Template/AppTemplate";
import { CardInvoice } from "../../components/CardInvoice";
import { MainSection } from "../../components/MainSection";

export const PageAppCompanyDetails = () => {
  return (
    <AppTemplate
      mainSection={
        <>
          <HStack h="20vh" w="full" align="center" justify="center">
            <HStack
              h="full"
              w="full"
              maxW="container.sm"
              justify="space-between"
            >
              <Text fontWeight="bold">COMPANY DETAILS</Text>
              <NextLink href="/app">
                <Button fontSize="xs" variant="ghost" colorScheme="purple">
                  Cancel
                </Button>
              </NextLink>
            </HStack>
          </HStack>

          <VStack w="full" maxW="container.sm" spacing="4">
            <Input placeholder="Company Name" bg="white" />
            <Input placeholder="Responsible" bg="white" />
            <Input placeholder="Email" bg="white" />
            <Input placeholder="Tax Number" bg="white" />
            <Input placeholder="Address" bg="white" />
            <HStack w="full">
              <Input placeholder="City" bg="white" />
              <Input placeholder="State" bg="white" />
            </HStack>
            <HStack w="full">
              <Input placeholder="Country" bg="white" />
              <Input placeholder="Postal Code" bg="white" />
            </HStack>

            <Button fontSize="xs" colorScheme="purple" alignSelf="flex-end">
              Save
            </Button>
          </VStack>
        </>
      }
    />
  );
};
