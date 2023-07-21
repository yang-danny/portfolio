import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import useLocalStorage from 'use-local-storage';
import { motion } from "framer-motion";
const ThemeToggle = () => {
   const defaultTheme ='light'
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? 'light' : 'dark');
    return (
      <motion.div
      initial={{ x:200 }}
      animate={{ x: 0 }} 
      transition={{ duration: 1.5, delay: 1 }}
       className='themeToggle'>
      <DarkModeToggle
        mode={theme}
        dark="Dark"
        light="Light"
        size="sm"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        onChange={(theme) => {
          setTheme(theme);
        }}
      />
     </motion.div>
    )
  }
  

export default ThemeToggle
