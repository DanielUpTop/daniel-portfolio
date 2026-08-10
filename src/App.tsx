import { ThemeProvider } from './context/ThemeContext';
import { SkipLink } from './components/SkipLink';
import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
