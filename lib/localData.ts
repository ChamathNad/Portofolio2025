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
    {
      place: 'USJP Colombo',
      title: 'Student',
      time: 'Jan 2016 - Dec 2019',
      description: 'BSc in Physics Science - ICT',
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

export function ToolHystory() {
  return [    
    {
      link: '/Images/Tools/arduino.svg',
      name: "Arduino",
      invert: false,
    }, 
    {
      link: '/Images/Tools/css.svg',
      name: "CSS",
      invert: false,
    }, 
    {
      link: '/Images/Tools/Unity.svg',
      name: "Unity Engine",
      invert: false,
    }, 
    {
      link: '/Images/Tools/Unreal.svg',
      name: "Unreal Engine",
      invert: false,
    },
    {
      link: '/Images/Tools/Audacity.svg',
      name: "Audacity",
      invert: false,
    },
    {
      link: '/Images/Tools/NextJs.svg',
      name: "NextJs",
      invert: false,
    },
    {
      link: '/Images/Tools/Photoshop.svg',
      name: "Photoshop",
      invert: false,
    },
    {
      link: '/Images/Tools/Illustrator.svg',
      name: "Illustrator",
      invert: false,
    },
    {
      link: '/Images/Tools/AndroidStudio.svg',
      name: "AndroidStudio",
      invert: false,
    },
    {
      link: '/Images/Tools/SubPainter.svg',
      name: "SubPainter",
      invert: false,
    },
    {
      link: '/Images/Tools/Figma.svg',
      name: "Figma",
      invert: false,
    },
    {
      link: '/Images/Tools/Fusion360.svg',
      name: "Fusion360",
      invert: false,
    },
    {
      link: '/Images/Tools/React.svg',
      name: "React",
      invert: false,
    },
    {
      link: '/Images/Tools/Js.svg',
      name: "Js",
      invert: false,
    },
    {
      link: '/Images/Tools/Python.svg',
      name: "Python",
      invert: false,
    },
    {
      link: '/Images/Tools/CSharp.svg',
      name: "CSharp",
      invert: false,
    },
    {
      link: '/Images/Tools/C.svg',
      name: "C",
      invert: false,
    },
    {
      link: '/Images/Tools/html.svg',
      name: "html",
      invert: false,
    },
    {
      link: '/Images/Tools/blender.svg',
      name: "Blender",
      invert: false,
    },
    {
      link: '/Images/Tools/vscode.svg',
      name: "Vscode",
      invert: false,
    },
    {
      link: '/Images/Tools/angular.svg',
      name: "Angular",
      invert: false,
    },
    {
      link: '/Images/Tools/git.svg',
      name: "git",
      invert: false,
    },
    {
      link: '/Images/Tools/miro.svg',
      name: "Miro",
      invert: false,
    },
    {
      link: '/Images/Tools/raspberry.svg',
      name: "Raspberry PI",
      invert: false,
    },
    {
      link: '/Images/Tools/zbrush-svgrepo-com 1.svg',
      name: "Zbrush",
      invert: true,
    },
  ];
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
    };
  });

  return projects;
}



export function EventsList() {
  return [     
    {
      title: "Dasasura: The legacy of Ravana",
      tags:["Unity","Solo","Games"],
      data: "Jan 2021 - Aug 2021",
      cover:"cld-sample-5",
      images:["cld-sample-5","cld-sample-5","cld-sample-5","cld-sample-5","cld-sample-5"],
      description: "3D RPG game sets in a near-futuristic sci-fi world, a story about an adventurer who helps rebel against a leader who tries to take over the Ancient Powers sealed within the values of Ravana. Ability to use various different weapons and gadgets. Explore the Nice looking sceneries and Environments. Fight real and Unreal creatures with special abilities, also face the forces of the Ravana.",
      cdescription:[
        "Backend Programming - Unity C#",
        "Frontend Development - Unity Engine",
        "3d Modeling - Blender, ZBrush, RealIllusion CC3",
        "Animation - Unity Animators, Mixamo",
        "Shaders, Texturing -  Unity ShaderGraphs, Substance Painter",
        "VFX, Cinematics - Unity ParticleSystem, Unity Timeline.",
        "Sound Editing - Audacity.",
        "UI design and Development"],
      linkList:[ ],
    }, 
    {
      title: "Dasasura: The legacy of Ravana",
      tags:["Unity","Solo","Games"],
      data: "Jan 2021 - Aug 2021",
      cover:"cld-sample-5",
      images:["cld-sample-5","cld-sample-5","cld-sample-5","cld-sample-5","cld-sample-5"],
      description: "3D RGB game sets in a near-futuristic sci-fi world, a story about an adventurer who helps rebel against a leader who tries to take over the Ancient Powers sealed within the values of Ravana. Ability to use various different weapons and gadgets. Explore the Nice looking sceneries and Environments. Fight real and Unreal creatures with special abilities, also face the forces of the Ravana.",
      cdescription:[
        "Backend Programming - Unity C#",
        "Frontend Development - Unity Engine",
        "3d Modeling - Blender, ZBrush, RealIllusion CC3",
        "Animation - Unity Animators, Mixamo",
        "Shaders, Texturing -  Unity ShaderGraphs, Substance Painter",
        "VFX, Cinematics - Unity ParticleSystem, Unity Timeline.",
        "Sound Editing - Audacity.",
        "UI design and Development"],
      linkList:[
        {name : "AS", link: "" },
        {name : "DAA", link: "" },
      ],

    }, 
  ];
}