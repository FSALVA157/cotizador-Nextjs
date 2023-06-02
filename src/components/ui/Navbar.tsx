import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { motion } from "framer-motion";


const logoVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,    
  },
};

const logoTransition = {
  delay: 0.5,      
  duratiom: 10,
  mass: 0.4,
  damping: 8,
};

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
      
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <MenuOutlinedIcon fontSize="large"></MenuOutlinedIcon>
        </IconButton>
      
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Finex
          </Typography>
        
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          transition={logoTransition}
        >
          <Avatar
            variant="square"
            alt="icono"
            src="LogoFinex_blancox120.png"
            sx={{ width: 50, height: 50 }}
          />
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};
