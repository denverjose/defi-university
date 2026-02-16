import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    gochiH1: React.CSSProperties;
    gochiH2: React.CSSProperties;
    gochiSubHeader: React.CSSProperties;
    gochiNavbar: React.CSSProperties;
  }

  // Allow `gochi-h1` in Typography's `variant` prop
  interface TypographyVariantsOptions {
    gochiH1?: React.CSSProperties;
    gochiH2?: React.CSSProperties;
    gochiSubHeader?: React.CSSProperties;
    gochiNavbar?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    gochiH1: true;
    gochiH2: true;
    gochiSubHeader: true;
    gochiNavbar: true;
  }
}
