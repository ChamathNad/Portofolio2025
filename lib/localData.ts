export function WorkHystory() {
  return [
    {
      place: 'Ninehermits Games, Colombo',
      title: 'Game Development Lead',
      time: 'Jan 2025 - Aug 2025',
      description: 'Work as Lead Game dev on several projects',
    },
    {
      place: 'Ninehermits Games, Colombo',
      title: 'Senior Developer',
      time: 'Jan 2023 - Jan 2025',
      description: 'Promoted to Senior a Game Dev',
      color: 'bg-primary-500',
    },
    {
      place: 'Ninehermits Games, Colombo',
      title: 'Junior Developer',
      time: 'Jul 2022 - Jan 2023',
      description: 'Joined Ninehermits as a Game Dev',
    },
    {
      place: '........',
      title: 'Freelancer',
      time: 'May 2021 - May 2022',
      description: 'Start Freelancing on various projects',
    },
    {
      place: 'RIS - USJP',
      title: 'Student/Research',
      time: 'Sep 2020 - Apr 2021',
      description: 'Works multiple projects on Robotics and Interaction Systems',
    },
    {
      place: '99X Technology, Colombo',
      title: 'Trainee SE - Reactnative',
      time: 'Jan 2020 - Aug 2020',
      description: 'Worked on React/React Native App Development',
    },
  ];
}

export function SchoolHystory() {
  return [    
    {
      place: 'University of Jayewardenepura, Colombo.',
      title: 'BSc in Physics Science - ICT',
      time: 'Jan 2016 - Dec 2019',
      description: ' ',
    },
    {
      place: 'Mahanama College Colombo 03.',
      title: 'A/L Education',
      time: 'Jan 2012 - Dec 2015',
      description: ' ',
    },
    {
      place: 'Mahanama College Colombo 03.',
      title: 'O/L Education',
      time: 'Jan 2007 - Dec 2012',
      description: ' ',
    },
    {
      place: 'De la Salle College, Colombo-15',
      title: 'Primary Education',
      time: 'Jan 2001 - Dec 2006',
      description: ' ',
    },
  ];
}


export type ToolObj = {
  Name: string;
  Link: string;
  Invert : boolean;
  PrioGame: number,
  PrioWeb: number,
  Icon:string
};

export async function ToolHystory(): Promise<ToolObj[]>  {
  const spreadsheetId = "1Irw9K6EsWuJE5NC81GfPJPBzI6NI98K91YoZ2KwN1qc";
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_GOOGLE_API;
  const sheetName = "Tools";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  const res = await fetch(url);
  const data: { values?: string[][] } = await res.json();

  const values = data.values || [];
  const [header, ...rows] = values;

  const mytools: ToolObj[] = rows.map((row: string[]) => {
    const obj: Record<string, string> = {};
    header.forEach((key, i) => {
      obj[key] = row[i] || "";
    });

    return {
      Name: obj.Name,
      Link: obj.Link,
      Invert : obj.Invert?.toLowerCase() === "true",
      PrioGame : parseInt(obj.PrioGame),
      PrioWeb : parseInt(obj.PrioWeb),
      Icon : obj.Icon,
    };
  });

  return mytools;
}

//PROJECT FILES
export type Project = {
  title: string;
  tags: string[];
  data: string;
  org: string;
  size: string;
  cover: string;
  images: string[];
  quote: string;
  description: string;
  cquote: string;
  cdescription: string[];
  linkList: { name: string; type: string; link: string }[];
  videos: string[];
  enable: boolean;
  CVDesc: string;
  CVTags : string;
  portofolio : boolean;
  icon: string,
  gameCV: boolean,
  webCV: boolean
};
export async function ProjectList(): Promise<Project[]> {
  const spreadsheetId = "1Irw9K6EsWuJE5NC81GfPJPBzI6NI98K91YoZ2KwN1qc";
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_GOOGLE_API;
  const sheetName = "Projects";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  const res = await fetch(url);
  const data: { values?: string[][] } = await res.json();

  const values = data.values || [];
  const [header, ...rows] = values;

  const projects: Project[] = rows.map((row: string[]) => {
    const obj: Record<string, string> = {};
    header.forEach((key, i) => {
      obj[key] = row[i] || "";
    });

    return {
      title: obj.title,
      tags: obj.tags ? obj.tags.split(",").map((t) => t.trim()) : [],
      data: obj.data,
      org: obj.org,
      size: obj.size,
      cover: obj.cover,
      images: obj.images ? obj.images.split(",").map((i) => i.trim()) : [],
      quote: obj.quote,
      description: obj.description,
      cquote: obj.cquote,
      cdescription: obj.cdescription ? obj.cdescription.split("|").map((d) => d.trim()) : [],
      linkList: obj.linkList
        ? obj.linkList.split("|").map((linkStr) => {
            const [name = "", type = "", link = ""] = linkStr.split(",");
            return { name: name.trim(), type: type.trim(), link: link.trim() };
          })
        : [],
      videos: obj.videos ? obj.videos.split(",").map((v) => v.trim()) : [],
      enable: obj.enable?.toLowerCase() === "true",
      CVDesc: obj.CVDesc,
      CVTags: obj.CVTags,
      portofolio : obj.portofolio?.toLowerCase() === "true",
      icon: obj.icon,
      gameCV : obj.gameCV?.toLowerCase() === "true",
      webCV : obj.webCV?.toLowerCase() === "true",
    };
  });

  return projects;
}


//EVENT FILES
export type Event = {
  title: string;
  role: string;
  tags: string[];
  data: string;
  cover: string;
  org: string;
  location: string;
  description: string;
  cdescription: string[];
  linkList: { name: string; type: string; link: string }[];
  enable: boolean;
  CVdes: string;
  icon: string,
};
export async function EventsList(): Promise<Event[]>  {
  const spreadsheetId = "1Irw9K6EsWuJE5NC81GfPJPBzI6NI98K91YoZ2KwN1qc";
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_GOOGLE_API;
  const sheetName = "Events";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  const res = await fetch(url);
  const data: { values?: string[][] } = await res.json();

  const values = data.values || [];
  const [header, ...rows] = values;

  const events: Event[] = rows.map((row: string[]) => {
    const obj: Record<string, string> = {};
    header.forEach((key, i) => {
      obj[key] = row[i] || "";
    });

    return {
      title: obj.title,
      role: obj.size,
      tags: obj.tags ? obj.tags.split(",").map((t) => t.trim()) : [],
      data: obj.data,
      cover: obj.cover,
      org: obj.org,
      location: obj.cover,
      description: obj.description,
      cdescription: obj.cdescription ? obj.cdescription.split("|").map((d) => d.trim()) : [],
      linkList: obj.linkList
        ? obj.linkList.split("|").map((linkStr) => {
            const [name = "", type = "", link = ""] = linkStr.split(",");
            return { name: name.trim(), type: type.trim(), link: link.trim() };
          })
        : [],
      enable: obj.enable?.toLowerCase() === "true",
      CVdes: obj.CVdes,
      icon: obj.icon,
    };
  });

  return events;
}

//INTEREST FILES
export type InterestObj = {
  Name: string;
  Icon:string;
  CV:boolean;
  Link: string;
};

export async function InterestHystory(): Promise<InterestObj[]>  {
  const spreadsheetId = "1Irw9K6EsWuJE5NC81GfPJPBzI6NI98K91YoZ2KwN1qc";
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_GOOGLE_API;
  const sheetName = "Interests";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  const res = await fetch(url);
  const data: { values?: string[][] } = await res.json();

  const values = data.values || [];
  const [header, ...rows] = values;

  const mytools: InterestObj[] = rows.map((row: string[]) => {
    const obj: Record<string, string> = {};
    header.forEach((key, i) => {
      obj[key] = row[i] || "";
    });

    return {
      Name: obj.Name,
      Icon : obj.Icon,
      CV : obj.CV?.toLowerCase() === "true",
      Link : obj.Link,
    };
  });

  return mytools;
}