import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({title,boxSX,titleSX}) => {
  return (
    <Box
    sx={{
      color: "success.dark",

      fontWeight: "bold",
      ml: 0.9,
      mr:3,
      fontSize: 14,
      backgroundColor: "#2a58ad",
    }}
  >
    <Typography
      sx={{
        color: "white",
        display: "inline",
        fontWeight: "bold",
        mx: 0.9,
        fontSize: 14,
      }}
      variant="button"
      display="block"
    >
      {title}
    </Typography>
  </Box>
  )
}

export default Heading