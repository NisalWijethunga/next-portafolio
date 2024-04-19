// import Link from 'next/link';
import About from './about/page';
import Contact from './contact/page';
import Projects from './projects/page';
import Skills from './skills/page';

export default function Home() {
  return (
  <main>
    
    <About />
    <Projects />
    <Skills />
    <Contact />
        
  </main>
  );
}