import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbItem,
  Box,
  Heading,
} from "@chakra-ui/react";
export const Navbar: React.FC = () => {
  return (
    <Box
      padding="0.5rem 2rem"
      bgColor="var(--main-bg-color)"
      color="white"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <Heading fontSize="20px">Manhwa Tracker</Heading>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/search">Browse</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
