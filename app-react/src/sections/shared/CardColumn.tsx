import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export const CardColumn = ({
  children,
  title,
  size,
  height = "100%"
}: React.PropsWithChildren<{
  title: string;
  size: { xl: number; lg: number };
  height?: string;
}>) => {
  return (
    <Grid item xl={size.xl} lg={size.lg} md={6} xs={12}>
      <Card variant="outlined">
        <CardHeader title={title} />
        <CardContent sx={{ height: height }}>{children}</CardContent>
      </Card>
    </Grid>
  );
};
