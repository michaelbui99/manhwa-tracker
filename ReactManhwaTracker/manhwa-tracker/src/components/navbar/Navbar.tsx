import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbItem,
  Box,
} from "@chakra-ui/react";
export const Navbar: React.FC = () => {
  return (
    <Box padding="0.5rem 2rem" bgColor="var(--main-bg-color)" color="white">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="20px">Manhwa Tracker</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/search">Search</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
