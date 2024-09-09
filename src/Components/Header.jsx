import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchBar from "./SearchBar";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

export default function PrimarySearchAppBar() {
  const Cart = useSelector((store) => store.cart.items);

  // Calculate the total quantity of items
  const cartLength = Cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
          <span>Home</span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/CategoryProductPage/All">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <ShoppingBagRoundedIcon />
          </IconButton>
          <span>Product</span>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/"><img src="/Brand3.png" alt=""  className="w-40"/> </Link>
          </Typography>

          {/* Search */}
          <SearchProduct />
          <Link to="/CartPage" className="block md:hidden">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Link to="/">
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link to="/CartPage">
                <Badge badgeContent={cartLength} color="error">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </Link>
            </IconButton>
           
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
              <Link to="/CategoryProductPage/All">
                  <ShoppingBagRoundedIcon />
              </Link>
                </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
