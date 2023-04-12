import React from "react";

import { Container } from "@mui/material";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Container maxWidth="xl">{children}</Container>;
};
