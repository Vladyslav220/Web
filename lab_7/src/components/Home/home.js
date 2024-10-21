import Section1 from '../Section1/section1';
import '../Section1/section1.css'
import LampsSection from '../LampsSection/lampsSection';
import '../LampsSection/lampsSection.css'

function Home() {
    return (
      <div className="Home">
        <Section1/>
        <LampsSection/>
      </div>
    );
  }
  
  export default Home;