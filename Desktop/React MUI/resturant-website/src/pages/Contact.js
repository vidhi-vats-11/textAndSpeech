import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5, ml:10, "& h4": {fontWeight:"bold", mb:2}}}>
        <Typography variant='h4'>Contact My Resturant</Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo ipsum amet! Repellat repellendus soluta iure sunt. Esse quam architecto voluptate assumenda at voluptates, harum cum ipsa eius qui. Voluptate?
        </p>
      </Box>
      <Box sx={{
        m:3, 
        width:"600px", 
        ml:10, 
        "@media (max-width:600px)":{
        width:"300px",
        },
      }}>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell
              sx={{bgcolor:"black", color:"white"}}
              align="center"
              >Contact Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{ color:"red", pt:1}}/> 1800-00-000(Tollfree)
              </TableCell>
            <TableRow>
              <TableCell>
                <MailIcon sx={{ color:"red", pt:1}}/> 9876543210(Tollfree)
              </TableCell>
            </TableRow>
            <TableRow>
            <CallIcon sx={{ color:"green", pt:1}}/> 9876543210(Tollfree)
            </TableRow>
            </TableRow>
          </TableBody>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact