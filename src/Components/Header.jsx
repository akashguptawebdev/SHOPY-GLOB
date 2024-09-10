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
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";

export default function PrimarySearchAppBar() {
  // Access the cart items from the Redux store
  const Cart = useSelector((store) => store.cart.items);

  // Calculate the total quantity of items in the cart
  const cartLength = Cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Handle profile menu opening
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing mobile menu
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // Handle closing menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // Handle opening mobile menu
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
      {/* Home link in mobile menu */}
      <MenuItem>
        <Link to="/">
          <IconButton size="large" color="inherit">
            <HomeIcon />
          </IconButton>
          <span>Home</span>
        </Link>
      </MenuItem>

      {/* Product link in mobile menu */}
      <MenuItem>
        <Link to="/CategoryProductPage/All">
          <IconButton size="large" color="inherit">
            <ShoppingBagRoundedIcon />
          </IconButton>
          <span>Products</span>
        </Link>
      </MenuItem>

      {/* Profile option in mobile menu */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" aria-controls={menuId} color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar component for navigation */}
      <AppBar position="static">
        <Toolbar>
          {/* Menu icon for mobile view */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Brand logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <img src="/Brand3.png" alt="Brand Logo" className="w-40" />
            </Link>
          </Typography>

          {/* Search component */}
          <SearchProduct />

          {/* Cart icon for mobile view */}
          <Link to="/CartPage" className="block md:hidden">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Link>

          {/* Spacing for aligning icons on the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Icons for desktop view */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Link to="/">
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Link to="/CartPage">
                <Badge badgeContent={cartLength} color="error">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Link to="/CategoryProductPage/All">
                <ShoppingBagRoundedIcon />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
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

      {/* Render mobile and desktop menus */}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
