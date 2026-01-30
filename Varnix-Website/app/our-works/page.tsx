import Navbar from "@/components/Navbar";
import PageLabel from "@/components/PageLabel";
import OurClients from "@/components/OurClients";
import Label from "@/components/Label";
import Footer from "@/components/Footer";
import IndustriesWeServe from "@/components/IndustriesWeServe";


const page = () => {
  return (
     <main className="bg-white text-black">
        <Navbar />
        <PageLabel title="our works." />
           <IndustriesWeServe iconColor="#db2777" />
        <OurClients />
        <Label />
        <Footer />
     </main>
  )
}

export default page
