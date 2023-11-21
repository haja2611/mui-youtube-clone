import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { sideListItems } from "../data/app.data";
import { sideListWrapper } from "../styles/styles";

const SideList = () => {
  return (
    <Box sx={sideListWrapper}>
      {sideListItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.subdivision ? (
              <>
                <Divider />
                <Box
                  sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  variant="button"
                  display="block"
                >
                  {item.text}
                  <Typography></Typography>
                </Box>{" "}
              </>
            ) : item.divider ? (
              <Divider />
            ) : (
              <nav aria-label="side list items">
                <List sx={{ pl: "10px" }}>
                  <ListItem disablePadding>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItem>
                </List>
              </nav>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default SideList;
