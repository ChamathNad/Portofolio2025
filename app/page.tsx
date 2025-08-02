'use client';
import Container from "@/components/custom/Container";
import HomeFooter from "@/components/HomePage/Footer";
import HomePage from "@/components/HomePage/HomeP";
import ServicesPage from "@/components/HomePage/ServiceHome";
import WorkPage from "@/components/HomePage/WorkHome";


export default function Home() {


  return (
    <div className="w-full p-1">
      <Container className="relative bg-background w-full min-h-[80vh]  ">
        
          <hr className="custom-hr"/>
          <HomePage/>
          <ServicesPage />          
          <WorkPage />          
          <hr className="custom-hr"/>
          <HomeFooter />
      </Container>
    </div>
  );
}