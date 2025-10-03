'use client'
import { CV1, PDFViewer } from "@/components/PDFs";


export default function Home(){

  
  const cvDoc = (
    <CV1
      primaryColor="#3C92CB"
      BackgroundColor="#202025"
      secondaryColor="#BED9FD"
      GameCV={false}
      frameImage="/frame2.png"
    />
  );

    return( 
    <div className="min-h-screen min-w-screen mt-4">
        <PDFViewer className="w-full h-screen">{cvDoc}</PDFViewer>
    </div>
    );
}