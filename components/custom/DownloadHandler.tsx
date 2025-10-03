import { Dispatch, SetStateAction, useEffect } from 'react';
import Spinner from '../ui/spinner';
import { FaDownload } from 'react-icons/fa';

interface DownloadHandlerProps {
  url?: string | null;
  loading: boolean;
  downloaded: boolean;
  setDownloaded: Dispatch<SetStateAction<boolean>>;
}

export function DownloadHandler({ url, loading, downloaded, setDownloaded }: DownloadHandlerProps) {
  useEffect(() => {
    if (!loading && url && !downloaded) {
      const timer = setTimeout(() => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV.pdf';
        link.click();
        setDownloaded(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [url, loading, downloaded, setDownloaded]);

  if (loading) {
    return <Spinner attributes="border-white w-[30px] h-[30px] border-[5px] mx-auto" />;
  }

  return <FaDownload className="mx-auto duration-200" />;
}
