'use client'
import { CV1, PDFViewer } from "@/components/PDFs";


export default function Home(){
  
  const cvDoc = (
    <CV1
      primaryColor= "#FB923C"
      BackgroundColor="#202025"
      secondaryColor= "#FDD9AE"
      GameCV={true}
      frameImage= "/frame.png" 
      PhotoImage= "/Photo.png"
    />
  );

    return( 
    <div className="min-h-screen min-w-screen mt-4">
        <PDFViewer className="w-full h-screen">{cvDoc}</PDFViewer>
    </div>
    );
}