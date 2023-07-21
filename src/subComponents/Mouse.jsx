import { useEffect } from 'react'

const Mouse = () => {
    useEffect(() => {
        const handleScroll = () => {
          const mouse = document.getElementById('mouse');
          const windowHeight = window.innerHeight;
          const scrollHeight = document.documentElement.scrollHeight;
          const scrolled = window.scrollY;
          const mousePosition = (windowHeight / scrollHeight) * scrolled;
          mouse.style.top = `${mousePosition}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div id="mouse" />
  )
}

export default Mouse