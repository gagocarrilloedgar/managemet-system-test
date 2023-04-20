import React from "react";

import { Container } from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="xl" style={{ position: "fixed" }}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Container>
  );
};
