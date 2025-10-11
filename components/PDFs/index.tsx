import dynamic from "next/dynamic";
import Spinner from "../ui/spinner";

export { CV1 } from "./Resumes/CV1";

// Dynamically import PDFViewer with SSR disabled
export const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-screen"><Spinner attributes="border-Primary-500 w-[10vw] h-[10vw] min-w-[32px] min-h-[32px] border-[1vw] "/></div>,
  }
);

export const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),  
  {
    ssr: true,
    loading: () => <div className="flex items-center justify-center h-[40px]"><Spinner attributes="border-white w-[30px] h-[30px] border-[5px] " /></div>,
  }
);
