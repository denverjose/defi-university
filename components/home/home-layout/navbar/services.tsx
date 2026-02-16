import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Button, Menu, MenuItem } from "@mui/material";

export const Services = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesDrawerToggle = () => {
    setServicesOpen(!servicesOpen);
  };
  const handleClose = () => {
    setServicesOpen(false);
  };

  const services = [
    { path: "/courses/test1", label: "Course 1" },
    { path: "/courses/test2", label: "Course 2" },
    { path: "/courses/test3", label: "Course 3" },
  ];
  return (
    <>
      <Button
        sx={{ color: "#485875ff", textTransform: "none" }}
        id="basic-button"
        onClick={handleServicesDrawerToggle}
        // variant={link.label === "Courses" ? "outlined" : "contained"}
        // color={link.label === "Courses" ? "inherit" : "primary"}
      >
        Courses
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={servicesOpen ? document.getElementById("basic-button") : null}
        open={servicesOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "100vw", // Full viewport width
            maxWidth: "100vw", // Ensure it doesn't shrink
          },
        }}
      >
        {services.map((service) => (
          <MenuItem
            key={service.path}
            onClick={handleClose}
            component="a"
            href={service.path}
          >
            {service.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
