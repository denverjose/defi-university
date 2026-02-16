"use client";
import { Typography, List, ListItem, Avatar } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTypography = styled(Typography)({
  marginBottom: "10px",
});

export const StyledNumberedList = styled(List)({
  marginBottom: "10px",
  listStyleType: "decimal",
  marginLeft: "48px",
});

export const StyledBulletedList = styled(List)({
  marginBottom: "10px",
  listStyleType: "disc",
  marginLeft: "48px",
});

export const StyledListItem = styled(ListItem)({
  display: "list-item",
  padding: 0,
});

export const StyledImage = styled(Avatar)({
  marginBottom: "10px",
  width: "100%",
  height: "auto",
});
