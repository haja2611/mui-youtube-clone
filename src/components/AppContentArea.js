import Box from "@mui/material/Box";
import React, { useState, useEffect, useContext } from "react";
import SideList from "./SideList";
import { appContentWrapper, flexColumnGrow } from "@styles/styles";
import TabList from "./Tablist";
import CardList from "./CardlList";
import Shorts from "./Shorts";
import { getYoutubeAPIData } from "../api/axios";
import SearchContext from "../context/SearcchContext";

const AppContentArea = ({ isOpen }) => {
  const [hide, setHide] = useState(false);
  const [youtubeData, setYoutubeData] = useState([]);
  const { searchText, onSearch } = useContext(SearchContext);

  useEffect(() => {
    getYoutubeAPIData(searchText).then((response) => {
      setYoutubeData(response.data.items);
    });
  }, [searchText]);

  if (!youtubeData) {
    return;
  }

  const items1 = youtubeData.slice(0, 8);
  const items2 = youtubeData.slice(8);

  const hideShorts = () => {
    setHide(true);
  };

  const undoHide = () => {
    setHide(false);
  };

  const onTabChange = (searchValue) => {
    onSearch(searchValue);
  };

  const sideBarWidth = isOpen ? "70px" : "250px";
  return (
    <Box component="main" sx={appContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: "auto",
        }}
      >
        <SideList />
      </Box>
      <Box component="div" sx={flexColumnGrow}>
        <Box
          sx={{
            my: 2,
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList onTabChange={onTabChange} />
        </Box>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            p: 1,
            overflowY: "auto",
            overflowX: "hidden",
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <CardList items={items1} />
          <Box
            component="div"
            sx={{
              display: "block",
              p: 2,
              minHeight: "100px",
              mb: 4,
              overflow: "hidden",
              overflowY: "auto",
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <Shorts
              hideShorts={hideShorts}
              isHidden={hide}
              undoHide={undoHide}
            />
          </Box>
          <CardList items={items2} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppContentArea;
