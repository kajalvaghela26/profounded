import React, { useState } from "react";
import Logo from "../../../image/logo.png";
import smallIcon from "../../../image/ProfoundEd-CompanyName-Logo (1).png";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Avatar,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Footer from "../Footer/index";
import Editors from "../../Editor/Editor";
import { AppBar, Drawer, DrawerHeader } from "./materialUICSS";
import SearchBar from "../SearchBar";
import DropDownBtn from "../Button/DropDownBtn";
import From from "../From";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [openFrom, setOpenFrom] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <img src={smallIcon} height={75} width={200} />
            </IconButton>

            <div className="main-header">
              <div className="sub-header"></div>
              <div className="profile-header">
                <div className="detail">
                  <span>
                    <div className="mrgin-left">last logged in</div>
                    30 Jan, 2024, 4:50 AM
                  </span>
                </div>
                <div className="dropdwn">
                  <Typography component="div">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 30, height: 30 }}
                      className="avtar-icon"
                    />
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <Select
                        value="John Doe"
                        // onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="John Doe">
                          <em>John Doe</em>
                        </MenuItem>
                        <MenuItem value="John Doe">John Doe</MenuItem>
                        <MenuItem value="John Doe">John Doe</MenuItem>
                        <MenuItem value="John Doe">John Doe</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader className="image_top">
            <img
              src={Logo}
              height={88}
              width={100}
              onClick={() => setOpen(false)}
            />
          </DrawerHeader>
          <List></List>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 50,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            <SearchBar />
            <Editors />
            <Box display="flex" justifyContent="center">
              <DropDownBtn
                title="Download Document"
                setOpenFrom={setOpenFrom}
              />
              <DropDownBtn title="Download PPT" setOpenFrom={setOpenFrom} />
              <DropDownBtn title="Download Video" setOpenFrom={setOpenFrom} />
            </Box>
          </Typography>
          <Footer />
        </Box>
        {openFrom && (
          <>
            <From openFrom={openFrom} close={() => setOpenFrom(false)} />
          </>
        )}
      </Box>
    </>
  );
};
export default SideBar;
