import { companyList } from '../util/constansts'
import './App.css'
import Accordion from './components/Accordion'
import AnalyticsComponent from './components/AnalyticsComponent'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Heading from './components/Heading'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Navbar from './components/Navbar'
import SloganMarquee from './components/SloganMarquee'



function App() {
  

  return (
    <div className='px-4 md:px-[90px] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <LogoMarquee/>
      
      <div className='text-start py-[64px]'>
        <p className='font-medium text-xl md:text-5xl'>Our expertise and passion</p>
        <p className='font-medium text-xl md:text-5xl'>breathe life into your narratives</p>
          
      </div>

      <Accordion />
      <Heading>  WE ARE GLOBAL</Heading>
      <div className='grid grid-cols-2 md:grid-cols-4 '>
        <AnalyticsComponent number={'60'}><p>brands</p><p>partnered with</p> </AnalyticsComponent>
        <AnalyticsComponent number={'3K'}><p>brand content</p><p>assets created</p> </AnalyticsComponent>
        <AnalyticsComponent number={'1K'}><p>global partners and</p><p>collaborations</p> </AnalyticsComponent>
        <AnalyticsComponent number={'100'}><p>cities</p><p>worldwide</p> </AnalyticsComponent>
      </div>
      <Heading>  TESTIMONY FROM OUR PARTNERS</Heading>
      <Carousel/>
      <FAQ/>
      <Contact/>
      <SloganMarquee/>
      <Footer/> 
    </div>  
  )
}

export default App
