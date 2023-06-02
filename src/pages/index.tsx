import { Layout } from '@/components/layouts'
import darkTheme from '@/themes/dark-theme'
import lightTheme from '@/themes/light-theme'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { motion } from "framer-motion";
// import styles from '@/styles/Home.module.css'
import "../styles/Home.css"
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function Home(props: any) {
  const router = useRouter()
  const handleTheme = () => {    
    if (props.selectedTheme === darkTheme){
      props.toggleTheme(lightTheme)
    }else{
      props.toggleTheme(darkTheme)
    }

  }

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    router.push('/cars')
  }

  return (
    // <Layout>
    <div className='cuerpo'>
     {/* <Typography variant='h1' color='primary'>Hola Mundo</Typography>      */}
     {/* <button onClick={() => handleTheme()} >Theming</button> */}
     <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
     </div>
    // </Layout>
  )
}
