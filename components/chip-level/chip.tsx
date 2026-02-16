import { Chip } from "@mui/material";

import { SxProps } from "@mui/system";

interface OpenCourseChipProps {
  label?: string;
  sx?: SxProps;
}

export const OpenCourseChip = ({ label, sx }: OpenCourseChipProps) => {
  return (
    <Chip
      icon={
        <span
          style={{
            backgroundColor: "rgb(219, 138, 16)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            display: "inline-block",
          }}
        />
      }
      label={label}
      sx={{
        border: "1px solid #F9DBAF",
        backgroundColor: "#FEF6EE",
        color: "#B93815",
        fontWeight: "500",
        fontSize: "12px",
        borderRadius: "16px",
        padding: "0 6px",
        height: "32px",
        lineHeight: "32px",
        display: "inline-flex",
        alignItems: "center",
        ...sx,
      }}
      size="small"
    />
  );
};

export const ChipLevel = ({ label, sx }: OpenCourseChipProps) => {
  // Define the styles for each level
  const levelStyles = {
    Noob: {
      border: "1px solid #90EE90",
      backgroundColor: "#F0FFF0",
      color: "#008000",
    },
    Intermediate: {
      border: "1px solid #87CEFA",
      backgroundColor: "#F0F8FF",
      color: "#175cd3",
    },
    Advanced: {
      border: "1px solid #FFA07A",
      backgroundColor: "#FFF5F5",
      color: "#FF4500",
    },
  };

  return (
    <Chip
      label={label}
      sx={{
        fontWeight: "500",
        fontSize: "14px",
        borderRadius: "16px",
        padding: "0 8px",
        height: "32px",
        // @ts-expect-error: label is used to determine the style
        ...levelStyles[label],
        ...sx,
      }}
    />
  );
};
