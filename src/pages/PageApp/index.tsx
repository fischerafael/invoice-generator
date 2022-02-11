import React from "react";

import { SimpleGrid } from "@chakra-ui/react";

import { AppTemplate } from "../../components/Template/AppTemplate";
import { CardInvoice } from "../../components/CardInvoice";
import { MainSection } from "../../components/MainSection";
import { ActionSection } from "../../components/ActionSection";

export const PageApp = () => {
  return (
    <AppTemplate
      mainSection={
        <>
          <ActionSection />
          <MainSection
            content={
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
            }
          />
        </>
      }
    />
  );
};
