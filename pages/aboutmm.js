// File: pages/3d-produkty.js
import Navbar from '../components/Navbar';
import OMm from '../components/OMm';
import OMmWhyMM from '../components/OMmWhyMM';
import Footer from '../components/Footer';


export default function aboutmm() {
  return (
    <>
      <Navbar />
      <main className="relative">
      <OMm/>
      <OMmWhyMM/>
      <Footer/>
      
      </main>
    </>
  );
}