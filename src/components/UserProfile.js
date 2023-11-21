import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { userProfileItems } from "@data/app.data";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import React from "react";
import { inlineText } from "../styles/styles";
import UseToggle from "../hooks/UseToggle";

const UserProfile = () => {
  const { el, open, handleClick, handleClose } = UseToggle();
  return (
    <Box sx={{ pl: 0.25 }}>
      <Button
        id="basic-button"
        onClick={handleClick}
        sx={{
          height: "60px",
          width: "30px",
          borderRadius: "50%",
        }}
      >
        <AccountCircleRoundedIcon fontSize="large" />
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
        <ListItem sx={{ pt: 0, pb: 1 }} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Channel avatar"
              src={`https://i.pravatar.cc/150?img=2`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Haja Mydeen"
            secondary={
              <React.Fragment>
                <Typography sx={inlineText} component="span">
                  <Link href="#" underline="none">
                    Manage Your Google Account
                  </Link>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box sx={{ minWidth: 300, borderTop: "1px solid #ddd" }}>
          {userProfileItems.map((item) => {
            return (
              <List sx={{ p: 0 }} key={item.id}>
                {item.divider ? (
                  <Divider />
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            );
          })}
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;
