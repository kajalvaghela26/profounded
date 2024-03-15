import React, { useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "../Button/style.scss";
const options = ["Hindi", "English", "Marathi", "Tamil"];
const DropDownBtn = ({ title, setOpenFrom, height, width }) => {
  const [btnOpen, setBtnOpen] = useState(false);
  const anchorRef = useRef(null);
  // const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = () => {
    setOpenFrom(true);
  };

  const handleMenuItemClick = (event, index) => {
    // setSelectedIndex(index);
    setBtnOpen(false);
  };

  const handleToggle = () => {
    setBtnOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setBtnOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
        
      >
        <Button onClick={handleClick}>{title}</Button>
        <Button
          size="small"
          aria-controls={btnOpen ? "split-button-menu" : undefined}
          aria-expanded={btnOpen ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {btnOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
        <Popper
          open={btnOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className="height-list"
          
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        style={{ height, width }}  
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ButtonGroup>
    </>
  );
};
export default DropDownBtn;
