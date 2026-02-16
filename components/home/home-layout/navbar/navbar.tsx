// "use client";

// import { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Container,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useRouter } from "next/navigation";
// import { Services } from "./services";
// import { AuthButton } from "../../../auth/login-logout-button";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const router = useRouter();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const leftLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About Us" },
//   ];
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const rightLinks = [
//     { path: "/courses", label: "Courses" },
//     { path: "/login", label: "Log In" }, // Example ID
//   ];

//   return (
//     <Container maxWidth="xl">
//       <AppBar
//         position="static"
//         sx={{ backgroundColor: "transparent", boxShadow: "none" }}
//       >
//         <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
//           {/* Left Section: Logo and Links */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Typography
//               variant="gochiNavbar"
//               sx={{
//                 marginRight: 5,
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 color: "#000",
//               }}
//               onClick={() => router.push("/")}
//             >
//               DeFiU
//             </Typography>

//             <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//               {leftLinks.map((link) => (
//                 <Button
//                   key={link.path}
//                   onClick={() => router.push(link.path)}
//                   sx={{ color: "#485875ff", textTransform: "none" }}
//                 >
//                   {link.label}
//                 </Button>
//               ))}
//               <Services />
//             </Box>
//           </Box>

//           {/* Right Section: Links and Burger Menu */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//               <Button
//                 onClick={() => router.push("/courses")}
//                 sx={{
//                   color: "text.secondary",
//                   fontWeight: 700,
//                   paddingY: 1,
//                 }}
//                 variant="outlined"
//               >
//                 Courses
//               </Button>
//               <AuthButton />
//             </Box>
//             {/* Mobile Burger Icon */}
//             <IconButton
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleDrawerToggle}
//               sx={{ display: { md: "none" } }}
//             >
//               <MenuIcon color="primary" />
//             </IconButton>
//           </Box>
//         </Toolbar>

//         {/* Drawer for Mobile */}
//         <Drawer
//           anchor="top"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             sx: {
//               backdropFilter: "blur(4px)",
//               backgroundColor: "rgba(0, 0, 0, 0.3)",
//             },
//           }}
//           PaperProps={{
//             sx: {
//               backgroundColor: "white",
//             },
//           }}
//         >
//           <Box onClick={handleDrawerToggle}>
//             <List>
//               {leftLinks.map((link) => (
//                 <ListItem component="li" key={link.path}>
//                   <Button
//                     onClick={() => router.push(link.path)}
//                     sx={{ width: "100%", textAlign: "center" }}
//                   >
//                     <ListItemText
//                       primary={link.label}
//                       sx={{ color: "text.primary" }}
//                     />
//                   </Button>
//                 </ListItem>
//               ))}
//               <ListItem
//                 component="li"
//                 sx={{ display: "flex", justifyContent: "center" }}
//                 onClick={(e) => e.stopPropagation()} // Prevents closing the drawer

//               >
//                 <Services />
//               </ListItem>
//               <ListItem component="li">
//                 <Button
//                   onClick={() => router.push("/courses")}
//                   sx={{ width: "100%", textAlign: "center" }}
//                 >
//                   <ListItemText
//                     primary="Courses"
//                     sx={{ color: "text.primary" }}
//                   />
//                 </Button>
//               </ListItem>

//               <ListItem
//                 component="li"
//                 sx={{ display: "flex", justifyContent: "center" }}
//               >
//                 <AuthButton />
//               </ListItem>
//             </List>
//           </Box>
//         </Drawer>
//       </AppBar>
//     </Container>
//   );
// };

// export default Navbar;

"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { AuthButton } from "@/components/auth/login-logout-button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <Container maxWidth="xl">
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                component={Link}
                variant="gochiNavbar"
                sx={{
                  marginRight: 5,
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#000",
                  textDecoration: "none",
                }}
                href="/"
              >
                DeFiU
              </Typography>

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                <Button
                  component={Link}
                  href="/"
                  sx={{ color: "#485875ff", textTransform: "none" }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  href="/about"
                  sx={{ color: "#485875ff", textTransform: "none" }}
                >
                  About Us
                </Button>
                <Button
                  onClick={handleMenuOpen}
                  sx={{ color: "#485875ff", textTransform: "none" }}
                >
                  Courses <ArrowDropDownIcon />
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{ width: "100vw" }} // Make the dropdown full width
                >
                  <MenuItem
                    component={Link}
                    href="/courses/1"
                    onClick={handleMenuClose}
                    sx={{ width: "100vw", mx: "8px" }} // Apply full width & horizontal margin
                  >
                    Course 1
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    href="/courses/2"
                    onClick={handleMenuClose}
                    sx={{ width: "100vw", mx: "8px" }} // Apply full width & horizontal margin
                  >
                    Course 2
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    href="/courses/3"
                    onClick={handleMenuClose}
                    sx={{ width: "100vw", mx: "8px" }} // Apply full width & horizontal margin
                  >
                    Course 3
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                component={Link}
                href="/courses"
                sx={{
                  color: "text.secondary",
                  fontWeight: 700,
                  paddingY: 1,
                }}
                variant="outlined"
              >
                Courses
              </Button>

              <AuthButton />
            </Box>
            {/* asdsad */}

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              aria-label="menu"
              sx={{ display: { md: "none" } }}
              onClick={toggleMobileMenu}
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer Menu */}
        <Drawer anchor="top" open={mobileOpen} onClose={toggleMobileMenu}>
          <Box
            sx={{
              p: 2,
              display: " flex",

              justifyContent: { xs: "flex-start", md: "center" },
              width: "100%",
            }}
          >
            {/* Close Button */}
            <List>
              <ListItem
                component={Link}
                href="/"
                onClick={toggleMobileMenu}
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  color: "text.secondary",
                }}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                component={Link}
                href="/about"
                onClick={toggleMobileMenu}
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  color: "text.secondary",
                }}
              >
                <ListItemText primary="About Us" />
              </ListItem>

              {/* Courses Dropdown (in Drawer) */}
              <ListItem
                sx={{
                  display: "flex",
                  color: "text.secondary",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Button
                  onClick={handleMenuOpen}
                  sx={{ color: "#485875ff", textTransform: "none", p: 0 }}
                >
                  <ListItemText primary="Courses" />
                  <ArrowDropDownIcon />
                </Button>
              </ListItem>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ width: "100vw" }}
              >
                <MenuItem
                  component={Link}
                  href="/courses/1"
                  onClick={() => {
                    handleMenuClose();
                    toggleMobileMenu();
                  }}
                  sx={{ width: "100vw", mx: "8px" }}
                >
                  Course 1
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/courses/2"
                  onClick={() => {
                    handleMenuClose();
                    toggleMobileMenu();
                  }}
                  sx={{ width: "100vw", mx: "8px" }}
                >
                  Course 2
                </MenuItem>

                <MenuItem
                  component={Link}
                  href="/courses/3"
                  onClick={() => {
                    handleMenuClose();
                    toggleMobileMenu();
                  }}
                  sx={{ width: "100vw", mx: "8px" }}
                >
                  Course 3
                </MenuItem>
              </Menu>
              <ListItem
                component={Link}
                href="/courses"
                onClick={toggleMobileMenu}
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  color: "text.secondary",
                }}
              >
                <ListItemText primary="Courses" />
              </ListItem>
                <ListItem
                  onClick={toggleMobileMenu}
                  sx={{
                    textAlign: { xs: "left", md: "center" },
                    color: "text.secondary",
                  }}
                >
                  <AuthButton />
                </ListItem>
            </List>
          </Box>
        </Drawer>
      </Container>
    </>
  );
}
