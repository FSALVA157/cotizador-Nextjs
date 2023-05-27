import { Box } from '@mui/material'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Navbar } from '../ui';

interface IProps{
    title? : string;
    children: ReactNode
}

export const Layout = ({title="Finex Cotizaciones", children}: IProps) => {
  return (
    <Box sx={{flexFlow: 1}}>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar></Navbar>
        <Box sx={{padding: '10px 20px'}}>
            {children}
        </Box>
    </Box>

  )
}
