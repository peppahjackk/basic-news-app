import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const NavbarWrapper = () => {
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ backgroundColor: "#333", padding: "0 16px" }}
      >
        <Link to="/">
          <Box sx={{ backgroundColor: "#444",  p: '8px 16px' }}>
            <Typography variant="h4" component="h1" sx={{fontFamily: 'georgia', color: 'white', WebkitTextStroke: '0.5px slateBlue',}}>
              What Is Happening
            </Typography>
          </Box>
        </Link>
        <Typography variant="h6" component="h2" sx={{ color: "white" }}>
          Your source for the latest news
        </Typography>
      </Stack>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
