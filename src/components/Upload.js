import { RiVideoAddLine } from "react-icons/ri";
import { uploadMenuItems } from "../data/app.data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Typography from "@mui/material/Typography";
import useToggle from "../hooks/UseToggle";

const Upload = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ pl: 20 }}>
      <Button
        id="basic-button"
        onClick={handleClick}
        sx={{
          height: "60px",
          width: "30px",
          borderRadius: "50%",
        }}
      >
        <RiVideoAddLine size={24} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {uploadMenuItems.map((item) => {
          return (
            <MenuItem key={item.id} onClick={handleClose}>
              {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
              <Typography
                sx={{ textAlign: "center", width: "200px" }}
                component="span"
              >
                {item.text}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default Upload;
