import * as React from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/brand-logo.png";

const pages = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About Me",
    path: "#about",
  },
  {
    name: "Portfolio",
    path: "#portfolio",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeLink, setActiveLink] = React.useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ background: "#f5f5f5", top: "0" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <img
              src={logo}
              alt="brand-logo"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              className="logo-img"
            />
          </a>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#191919"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  ":hover": { color: "#226ebd" },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={page.path}
                >
                  <a
                    href={page.path}
                    textAlign="center"
                    textTransform="capitalize"
                    className="navLinkSp"
                  >
                    {page.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "70px",
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.path}
                key={page.name}
                onClick={() => handleLinkClick(page.name)}
                sx={{
                  my: 2,
                  color: activeLink === page.name ? "#226ebd" : "#191919",
                  display: "block",
                  textTransform: "capitalize",
                  ":hover": { color: "#226ebd" },
                }}
              >
                <span>{page.name}</span>
              </Button>
            ))}
          </Box>
          <Button
            variant="outlined"
            href="#contact"
            className="contact-btn"
            sx={{
              textTransform: "capitalize",
              color: "#191919",
              border: "1px solid #191919",
              ":hover": { background: "#226ebd", color: "#f5f5f5" },
            }}
          >
            <span>Contact Me</span>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
