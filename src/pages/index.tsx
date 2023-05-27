import { Layout } from '@/components/layouts'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <Layout>
     <Typography variant='h1' color='primary'>Hola Mundo</Typography>
    // </Layout>
  )
}
