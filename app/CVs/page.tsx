'use client'
import { CV1, PDFViewer } from "@/components/PDFs";
import { useSearchParams } from "next/navigation";


export default function Home(){

  const searchParams = useSearchParams();
  const game = searchParams.get("game");

  const isGame = game === "true";
  
  const cvDoc = (
    <CV1
      primaryColor={isGame ? "#FB923C" : "#3C92CB"}
      BackgroundColor="#202025"
      secondaryColor={isGame ? "#FDD9AE" : "#BED9FD"}
      GameCV={isGame}
      frameImage={isGame ? "/frame.png" : "/frame2.png"}
    />
  );

    return( 
    <div className="min-h-screen min-w-screen mt-4">
        <PDFViewer className="w-full h-screen">{cvDoc}</PDFViewer>
    </div>
    );
}