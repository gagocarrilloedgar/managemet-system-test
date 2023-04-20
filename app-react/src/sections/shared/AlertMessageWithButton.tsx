import { Button, Typography } from "@mui/material";

export const AlertMessageWithButton = ({
  resetForm,
  title,
  buttonActionText
}: React.PropsWithChildren<{
  resetForm: () => void;
  title: string;
  buttonActionText: string;
}>) => {
  return (
    <section role="alert">
      <Typography variant="h2">😱 {title} </Typography>
      <Button variant="outlined" onClick={resetForm}>
        {buttonActionText}
      </Button>
    </section>
  );
};
