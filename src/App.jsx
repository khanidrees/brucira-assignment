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
    <div className='px-[90px]'>
      <Navbar/>
      <Hero/>
      <LogoMarquee/>
      
      <div className='text-start'>
        <p className='font-medium text-[52px]'>Our expertise and passion</p>
        <p className='font-medium text-[52px]'>breathe life into your narratives</p>
          
      </div>

      <Accordion />
      <Heading>  WE ARE GLOBAL</Heading>
      <div className='flex flex-wrap gap-[126px]'>
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
