'use client'
import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, Link, Svg, Path } from '@react-pdf/renderer';
import { Event, EventsList, InterestHystory, InterestObj, Project, ProjectList, SchoolHystory, ToolHystory, ToolObj, WorkHystory } from '@/lib/localData';

// Register font once (global)
Font.register({
  family: "Orbitron",
  src: "/fonts/Orbitron-Bold.ttf", // put this inside /public/fonts
});
Font.register({
  family: "RobotoCondensed",
  src: "/fonts/RobotoCondensed-Black.ttf", // put this inside /public/fonts
});
Font.register({
  family: "RobotoRegular",
  src: "/fonts/Roboto-Regular.ttf", // put this inside /public/fonts
});
Font.register({
  family: "RobotoMono-Regular",
  src: "/fonts/RobotoMono-Regular.ttf", // put this inside /public/fonts
});



// Create styles
const styles = StyleSheet.create({
   page: {
    flexDirection: "row",
    fontSize: 11,
    padding: 15,
    fontFamily : "RobotoRegular",
  },
  section: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  sidebar: {
    width: "35%",
    flexDirection: "column",
  },
  main: {
    width: "65%",
    flexDirection: "column",
  },
  section2: {
    padding: 15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  row: {
    paddingTop : 5,
    flexDirection: 'row',
    flexWrap : 'wrap',
    justifyContent: 'flex-start',
    textAlign: "left",
    alignItems: 'stretch',
    width: '100%',
  },
  col: {
    paddingTop : 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: "left",
    alignItems: 'flex-start',
    width: "100%"
  },
});


const SocialData = 
      [   
        {
          links: 'mailto:chamath.nad@gmail.com',
          rawlinks: 'chamath.nad@gmail.com',
          Id: 'Email',
          Logo: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" ,
        }, 
        {
          links: 'tel:+94775269153',
          rawlinks: '+94 77 526 9153',
          Id: 'Phone ',
          Logo: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0" ,
        }, 
        {
          links: 'https://portofolio2025-ten.vercel.app/',
          rawlinks: 'portofolio2025-ten.vercel.app',
          Id: 'Portfolio ',
          Logo: "M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" ,
        }, 
        {
          links: 'https://www.linkedin.com/in/chamath-nadeeshan-9301691a0/',
          rawlinks: 'chamath-nadeeshan-9301691a0/',
          Id: 'LinkedIn ',
          Logo: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" ,
        }, 
        {
          links: 'https://github.com/ChamathNad',
          rawlinks: 'ChamathNad',
          Id: 'Github ',
          Logo: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" ,
        }, 
      ];



export const CV1 = ({
        primaryColor, secondaryColor,BackgroundColor, GameCV, frameImage, PhotoImage
    }:{
        primaryColor?: string,
        secondaryColor?: string,
        BackgroundColor? : string,
        GameCV?: boolean,
        WebCV?: boolean,
        frameImage? : string,
        PhotoImage? : string,
    }) =>
      {


//const [PList, setProjects] = useState<Project[]>([]);
const schoolData = SchoolHystory();
const workData = WorkHystory();
const [SList, setEvents] = useState<Event[]>([]);
const [TList, setTools] = useState<ToolObj[]>([]);
const [page1Projects, setPage1Projects] = useState<Project[]>([]);
const [page2Projects, setPage2Projects] = useState<Project[]>([]);
const [pageInterests, setInteresets] = useState<InterestObj[]>([]);

useEffect(() => {  
  InterestHystory().then((interest) => {
    interest = interest.filter((i) => i.CV);
    interest = interest.slice(0,13);
    setInteresets(interest);
  });

  EventsList().then((events) => {
    const cleaned2 = events.map((e) => {
      const sanitize = (text: string) =>
        text
          ?.replaceAll("– U.S. Embassy", "");
      return {
        ...e,
        title: sanitize(e.title),
      };
    });
    setEvents(cleaned2);
  });

  ToolHystory().then((events) => {
    events = events.sort((obj1, obj2) => GameCV? obj1.PrioGame - obj2.PrioGame : obj1.PrioWeb -obj2.PrioWeb);
    setTools(events.slice(0,13));
  });

  
  ProjectList().then((projects) => {
    let cleaned = projects.map((p) => {
      const sanitize = (text: string) =>
        text
          ?.replaceAll("University of Sri Jayawardanapura", "USJP")
          .replaceAll("Solo Project", "Solo");

      return {
        ...p,
        org: sanitize(p.org),
        quote: "RobotoRegular"
      };
    });

     const memeGames = cleaned.filter((p) =>
      p.title.startsWith("Meme Games")
    );

    // 3️⃣ Remove them from main list
    cleaned = cleaned.filter((p) => !p.title.startsWith("Meme Games"));


     if (memeGames.length > 0) {
      const combinedEntry: Project = {
        title: "Meme Games Series",
        description:"",
        org: "Solo",
        tags: [],
        data: 'Nov 2024 - Mar 2025',
        size: '',
        cover: '',
        images: [],
        quote: 'RobotoMono-Regular',
        cquote: '',
        cdescription: [],
        linkList: [],
        videos: [],
        enable: false,
        CVDesc:  "• Into the Johnnyverse    • Squid Game Cookie Cutting\n"+
                 "• No Drone Zone           • Pepe Grab\n"+
                 "• Cat Song                • WTF\n"+
                 "• Mind Blown              • My Precious"  + "\nHypher-Casual minigame series based on varioud popular Memes",
        CVTags: 'Unity | Action | Puzzle | Game | Web | C#',
        portofolio: false,
        icon: "M19.1818 12.9174C19.1818 15.4694 17.3977 17.5455 15.2045 17.5455C13.6625 17.5455 12.267 16.5002 11.6142 14.9008H8.56705C7.91477 16.5002 6.51932 17.5455 4.97727 17.5455C2.78409 17.5455 1 15.4694 1 12.9174C1 12.5729 1.0358 12.2179 1.10682 11.8661L2.31591 5.74446C2.775 4.10281 4.07273 3 5.54545 3C6.51875 3 7.425 3.47802 8.0733 4.32231H12.1085C12.7568 3.47802 13.6631 3 14.6364 3C16.1091 3 17.4068 4.10281 17.8659 5.74446L19.0744 11.8635C19.146 12.2179 19.1818 12.5729 19.1818 12.9174ZM7.81818 8.95041C7.81818 8.58545 7.56364 8.28926 7.25 8.28926H6.68182V7.6281C6.68182 7.26314 6.42727 6.96694 6.11364 6.96694H4.97727C4.66364 6.96694 4.40909 7.26314 4.40909 7.6281V8.28926H3.84091C3.52727 8.28926 3.27273 8.58545 3.27273 8.95041V10.2727C3.27273 10.6377 3.52727 10.9339 3.84091 10.9339H4.40909V11.595C4.40909 11.96 4.66364 12.2562 4.97727 12.2562H6.11364C6.42727 12.2562 6.68182 11.96 6.68182 11.595V10.9339H7.25C7.56364 10.9339 7.81818 10.6377 7.81818 10.2727V8.95041ZM13.5 11.595C13.5 10.8645 12.9915 10.2727 12.3636 10.2727C11.7358 10.2727 11.2273 10.8645 11.2273 11.595C11.2273 12.3256 11.7358 12.9174 12.3636 12.9174C12.9915 12.9174 13.5 12.3256 13.5 11.595ZM13.5 8.28926C13.5 7.55868 12.9915 6.96694 12.3636 6.96694C11.7358 6.96694 11.2273 7.55868 11.2273 8.28926C11.2273 9.01983 11.7358 9.61157 12.3636 9.61157C12.9915 9.61157 13.5 9.01983 13.5 8.28926ZM16.3409 10.9339C16.3409 10.2033 15.8324 9.61157 15.2045 9.61157C14.5767 9.61157 14.0682 10.2033 14.0682 10.9339C14.0682 11.6645 14.5767 12.2562 15.2045 12.2562C15.8324 12.2562 16.3409 11.6645 16.3409 10.9339ZM16.3409 7.6281C16.3409 6.89752 15.8324 6.30579 15.2045 6.30579C14.5767 6.30579 14.0682 6.89752 14.0682 7.6281C14.0682 8.35868 14.5767 8.95041 15.2045 8.95041C15.8324 8.95041 16.3409 8.35868 16.3409 7.6281Z",
        gameCV: true,
        webCV: true,
      };

      cleaned.splice(cleaned.length - 19, 0, combinedEntry); // put it at the top (or push at end if you prefer)
    }

    cleaned = cleaned.filter(p => (p.gameCV && GameCV) || (p.webCV && !GameCV));
    
    //setProjects(cleaned);
    setPage1Projects(cleaned.slice(0, 9)); // first page
    setPage2Projects(cleaned.slice(9)); // second page
  });
}, [GameCV]);

        return(
            <Document>           

{/* PAGE 1 */}
              <Page size="A4" style={[styles.page , { backgroundColor: BackgroundColor }]}>
                <View style={styles.section}>
                  {/* LEFT SIDEBAR */}
                  <View style={styles.sidebar }>
                    <View style={[{ height: "25%"}]}>
                      <View
                        style={{
                          height: "100%",
                          margin: 15,
                          padding: 15,
                          borderRadius: 5,
                          overflow: "hidden",
                        }}
                      >
                        {/* Use an image that is just a gradient border */}
                        <Image
                          src= {PhotoImage}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <Image
                          src={frameImage}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <View style={{ flex: 1, padding: 10, justifyContent: "center", alignItems: "center" }}>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.section2, { height: "20%",color:"#EEEEEE",  justifyContent:"flex-start" }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>CONTACTS </Text>
                      {SocialData.map((exp, index) => (
                        <View key={index} style={styles.row}>
                          <View style={[{ width: "8%"}]}>
                            <Svg width="15" height="15" viewBox="0 0 20 20" >
                              <Path
                                d= {exp.Logo}
                                fill = {primaryColor}
                              />
                            </Svg>
                          </View>
                          <View style={[{ maxWidth: "35%", fontSize: 10}]}>
                            <Text>  {exp.Id} : </Text>                          
                          </View>
                          
                          <View style={[{ width: "57%", alignItems: 'flex-start',}]}>
                            <Link src={exp.links} style={{ color: '#00aaff', textDecoration: 'none', fontSize: 9, flexWrap:'wrap', alignItems: 'flex-start'}}>
                              <Text>{exp.rawlinks}</Text>
                            </Link>                     
                          </View>
                        </View>
                      ))}
                    </View>
                    <View style={[styles.section2, { height: "55%",color:"#EEEEEE",  justifyContent:"flex-start", marginBottom: 20 }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>TECH STACK </Text>
                      {TList.map((exp, index) => (
                          <View key={index} style={{...styles.col, paddingBottom: 4}}>
                            <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Svg width="18" height="18" viewBox="0 0 50 50" >
                              <Path
                                d= {exp.Icon}
                                //d=""
                                fill = {primaryColor}
                                //fillRule="evenodd"
                              />
                            </Svg>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}><Text style={{fontWeight:10}}> {exp.Name} </Text> </View>
                            </View>
                          </View>
                        ))}
                    </View>
                  </View>

                  {/* MAIN CONTENT */}
                  <View style={styles.main}>
                    <View
                      style={[
                        styles.section2,
                        { height: "10%", color:"#EEEEEE", padding: 10,  justifyContent:"flex-start"},
                      ]}
                    >
                      <Text style={{fontFamily: "Orbitron", fontSize: 30,}}>Chamath Nadeeshan</Text>
                      <Text style={{color: secondaryColor}}> {GameCV? "Game Developer | Frontend Developer | Gamer | Lore Master": "Frontend Developer | Game Developer | Gamer | Problem Solver"}</Text>
                    </View>
                    <View
                      style={[
                        styles.section2,
                        { height: "18%", color:"#EEEEEE", padding: 10,  justifyContent:"flex-start"},
                      ]}
                    >
                      <Text>Passionate technologist with experience in Software, Robotics, IoT and Game Development. BSc in Physics-ICT from USJP. Experienced in interactive media, problem-solving, and learning new technologies fast. Detail-oriented, organized, and driven to create efficient, clear, and innovative solutions.</Text>
                      
                      <Text style={{paddingTop: 15}} >Date of Birth:<Text style={{color:secondaryColor}}>  05 Jul 1996</Text></Text>  
                    </View>
                    <View style={[styles.section2, { height: "85%",color:"#EEEEEE",  justifyContent:"flex-start", marginBottom: 20 }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>EXPERIENCE AND PROJECTS</Text>
                       {page1Projects.map((exp, index) => (
                          <View key={index} style={styles.col}>
                            <View key={index} style={styles.row}>
                              <View style={{flexDirection:'column', alignItems:'center',}}>
                                <Svg width="15" height="15" viewBox="0 0 20 20" >
                                  <Path
                                    d= {exp.icon}
                                    fill = {primaryColor}
                                  />
                                </Svg>
                                <View style={{ backgroundColor: primaryColor, width: 1, marginRight: 2, borderRadius: 1,}}>
                                  <Text> </Text>
                                  <Text> </Text> 
                                  {exp.CVDesc.length > 70? <Text> </Text> : <Text></Text>}
                                  {exp.CVDesc.length > 70? <Text> </Text> : <Text></Text>}
                                  {exp.CVDesc.length > 70? <Text> </Text> : <Text></Text>}
                                  {exp.CVDesc.length > 70? <Text> </Text> : <Text></Text>}
                                  {exp.CVDesc.length > 70? <Text> </Text> : <Text></Text>}
                                </View>
                              </View>
                              <View style={{ flex: 1, flexDirection:'column', width:'100%'}} >
                                <View style={{paddingLeft: 3,paddingBottom: 3, flexDirection: 'row', alignItems: 'flex-end', width:'100%'}}><Text style={{}}>{exp.title} </Text> <Text style={{fontSize: 9, color: primaryColor}}> ({exp.org}) </Text>  <Text style={{fontSize: 8}}> : {exp.data} </Text> </View>
                                <Text style={{paddingLeft: 3,fontSize: 10, paddingBottom: 2, fontFamily: exp.quote}}>{exp.CVDesc}</Text>
                                <Text style={{paddingLeft: 3,color:secondaryColor, fontSize: 9, paddingBottom: 3}}>{exp.CVTags}</Text>
                              </View>
                            </View>
                          </View>
                        ))}
                    </View>
                  </View>
                </View>
              </Page>

{/* PAGE 2 */}
               <Page size="A4" style={[styles.page , { backgroundColor: BackgroundColor }]}>
                <View style={styles.section}>
                  {/* LEFT SIDEBAR */}
                  <View style={styles.sidebar }>
                    <View style={[styles.section2, { height: "32%",color:"#EEEEEE",  justifyContent:"flex-start" }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>EDUCATION HYSTORY</Text>  
                        {schoolData.map((exp, index) => (
                            <View key={index} style={{...styles.col, paddingBottom: 4}}>
                              <View style={{flexDirection:'row'}}>
                              <Svg width="10" height="10" viewBox="0 0 11 11" style={{paddingTop:1}}>
                                <Path
                                  d= "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
                                  fill = {primaryColor}
                                />
                              </Svg>
                              <View>                                
                                <Text style={{fontWeight:11}}> {exp.title} </Text> 
                                <Text style={{fontSize: 10}}> {exp.place} </Text> 
                                <Text style={{fontSize: 9, color:secondaryColor}}> {exp.time} </Text> 
                              </View>
                              </View>
                            </View>
                          ))}                    
                    </View>

                    <View style={[styles.section2, { height: "43%",color:"#EEEEEE",  justifyContent:"flex-start" }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>WORK HYSTORY</Text>
                          {workData.map((exp, index) => (
                            <View key={index} style={{...styles.col, paddingBottom: 4}}>
                              <View style={{flexDirection:'row'}}>
                              <Svg width="10" height="10" viewBox="0 0 11 11" style={{paddingTop:1}}>
                                <Path
                                  d= "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
                                  fill = {primaryColor}
                                />
                              </Svg>
                              <View>                                
                                <Text style={{fontWeight:11}}> {exp.title} </Text> 
                                <Text style={{fontSize: 10}}> {exp.place} </Text> 
                                <Text style={{fontSize: 9, color:secondaryColor}}> {exp.time} </Text> 
                              </View>
                              </View>
                            </View>
                          ))}      
                    </View>
                    {/* REFERENCE */}
                    <View style={[styles.section2, { height: "25%",color:"#EEEEEE",  justifyContent:"space-around" }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>REFERENCE</Text>

                      <Text style={{paddingBottom: 3, }}>Sharmila Roshandeen </Text>
                      <Text style={{fontSize: 10,  }}>HR Manager</Text>
                      <View style={{fontSize: 9,  flexDirection: 'row'}}> 
                        <Svg width="10" height="10" viewBox="0 0 50 50" >
                          <Path
                            d= "M41.666 8.33337H8.33268C6.04102 8.33337 4.18685 10.2084 4.18685 12.5L4.16602 37.5C4.16602 39.7917 6.04102 41.6667 8.33268 41.6667H41.666C43.9577 41.6667 45.8327 39.7917 45.8327 37.5V12.5C45.8327 10.2084 43.9577 8.33337 41.666 8.33337ZM41.666 16.6667L24.9993 27.0834L8.33268 16.6667V12.5L24.9993 22.9167L41.666 12.5V16.6667Z"
                            fill = {primaryColor}
                          />
                        </Svg>                   
                        <Text style={{color: primaryColor}}> Email : </Text>
                        <Text style={{color: secondaryColor}}> Sharmideen92@gmail.com </Text>
                      </View>
                      <View style={{fontSize: 9, paddingBottom: 7, flexDirection: 'row'}}> 
                        <Svg width="9" height="9" viewBox="0 0 24 24" >
                          <Path
                            d= "M20.19,13a10,10,0,0,1-3.43-.91,2,2,0,0,0-2.56.83l-.51.85a12.69,12.69,0,0,1-3.44-3.45l.86-.49a2,2,0,0,0,.83-2.56A10,10,0,0,1,11,3.81,2,2,0,0,0,9,2H5.13A3,3,0,0,0,2.86,3a3.13,3.13,0,0,0-.71,2.43A19,19,0,0,0,18.58,21.85a3,3,0,0,0,.42,0,3,3,0,0,0,2-.73,3,3,0,0,0,1-2.26V15A2,2,0,0,0,20.19,13Z"
                            fill = {primaryColor}
                          />
                        </Svg> 
                        <Text style={{color: primaryColor}}> Phone : </Text>
                        <Text style={{color: secondaryColor}}> +94 76 971 0702 </Text>
                      </View>

                      
                      <Text style={{paddingBottom: 3, }}>Lahiru Supun </Text>
                      <Text style={{fontSize: 10, }}>Full Stack Developer </Text>
                      <View style={{fontSize: 9,  flexDirection: 'row'}}> 
                        <Svg width="10" height="10" viewBox="0 0 50 50" >
                          <Path
                            d= "M41.666 8.33337H8.33268C6.04102 8.33337 4.18685 10.2084 4.18685 12.5L4.16602 37.5C4.16602 39.7917 6.04102 41.6667 8.33268 41.6667H41.666C43.9577 41.6667 45.8327 39.7917 45.8327 37.5V12.5C45.8327 10.2084 43.9577 8.33337 41.666 8.33337ZM41.666 16.6667L24.9993 27.0834L8.33268 16.6667V12.5L24.9993 22.9167L41.666 12.5V16.6667Z"
                            fill = {primaryColor}
                          />
                        </Svg>                   
                        <Text style={{color: primaryColor}}> Email : </Text>
                        <Text style={{color: secondaryColor}}> lhrsupun@gmail.com </Text>  
                      </View>
                      <View style={{fontSize: 9, paddingBottom: 7, flexDirection: 'row'}}> 
                        <Svg width="9" height="9" viewBox="0 0 24 24" >
                          <Path
                            d= "M20.19,13a10,10,0,0,1-3.43-.91,2,2,0,0,0-2.56.83l-.51.85a12.69,12.69,0,0,1-3.44-3.45l.86-.49a2,2,0,0,0,.83-2.56A10,10,0,0,1,11,3.81,2,2,0,0,0,9,2H5.13A3,3,0,0,0,2.86,3a3.13,3.13,0,0,0-.71,2.43A19,19,0,0,0,18.58,21.85a3,3,0,0,0,.42,0,3,3,0,0,0,2-.73,3,3,0,0,0,1-2.26V15A2,2,0,0,0,20.19,13Z"
                            fill = {primaryColor}
                          />
                        </Svg> 
                        <Text style={{color: primaryColor}}> Phone : </Text>
                        <Text style={{color: secondaryColor}}> +94 71 348 6065 </Text>
                      </View>
                    </View>
                  </View>

                  {/* RIGHT CONTENT */}
                  <View style={styles.main}>
                    
                  {/* PROJECTS */}
                    <View style={[styles.section2, { height: "53%",color:"#EEEEEE",  justifyContent:"flex-start" }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>EXPERIENCE AND PROJECTS</Text>
                       {page2Projects.map((exp, index) => (
                        <View key={index} style={styles.col}>
                          <View key={index} style={styles.row}>
                            <View style={{flexDirection:'column', alignItems:'center' }}>
                              <Svg width="15" height="15" viewBox="0 0 20 20" >
                                <Path
                                  d= {exp.icon}
                                  fill = {primaryColor}
                                />
                              </Svg>
                              <View style={{ backgroundColor: primaryColor,  height: "70%", width: 1, marginRight: 2, borderRadius: 1 }}>
                                <Text> </Text>
                              </View>
                            </View>
                            <View style={{flexDirection:'column'}} >
                              <View style={{paddingLeft: 3,paddingBottom: 3, flexDirection: 'row', alignItems: 'flex-end'}}><Text style={{}}>{exp.title} </Text> <Text style={{fontSize: 9, color: primaryColor}}> ({exp.org}) </Text>  <Text style={{fontSize: 8}}> : {exp.data} </Text> </View>                            
                              <Text style={{paddingLeft: 3,fontSize: 10, paddingBottom: 2, fontFamily: exp.quote}}>{exp.CVDesc}</Text>
                              <Text style={{paddingLeft: 3,color:secondaryColor, fontSize: 9, paddingBottom: 3}}>{exp.CVTags}</Text>
                            </View>
                          </View>
                        </View>
                        ))}
                    </View>
                    
                  {/* EVENTS AND ACHIVES */}
                    <View style={[styles.section2, { height: "25%",color:"#EEEEEE",  justifyContent:"flex-start" }]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 10}}>ACHIEVEMENTS & EVENTS</Text>
                       {SList.map((exp, index) => (
                          <View key={index} style={styles.col}>
                            <View key={index} style={styles.row}>
                            <View style={{flexDirection:'column', alignItems:'center' }}>
                              <Svg width="15" height="15" viewBox="0 0 20 20" >
                                <Path
                                  d= {exp.icon}
                                  fill = {primaryColor}
                                />
                              </Svg>
                              <View style={{ backgroundColor: primaryColor,  height: "70%", width: 1, marginRight: 1, borderRadius: 1 }}>
                                <Text> </Text>
                              </View>
                            </View>
                            <View style={{flexDirection:'column'}} >
                              <View style={{paddingLeft: 3,paddingBottom: 3, flexDirection: 'row', alignItems: 'flex-end'}}><Text style={{}}>{exp.title} </Text> <Text style={{fontSize: 9, color: primaryColor}}> ({exp.org}) </Text>  <Text style={{fontSize: 8}}> : {exp.data} </Text> </View>
                              <Text style={{paddingLeft: 3,fontSize: 10, paddingBottom: 2, }}>{exp.CVdes}</Text>
                              <Text style={{paddingLeft: 3,color:secondaryColor, fontSize: 9, paddingBottom: 3}}>{exp.tags}</Text>
                            </View>
                          </View>
                        </View>
                        ))}
                    </View>

                  {/* INTERESTS */}
                    <View style={[styles.section2, { height: "22%",color:"#EEEEEE",  justifyContent:"flex-start"}]}>
                      <Text style={{fontFamily: "RobotoCondensed", fontSize: 14, color: primaryColor, paddingBottom: 7}}>INTERESTS </Text>
                       <View style={{ flexDirection: 'row', flexWrap:'wrap', gap: 5, width: "100%"}}> 
                        {pageInterests.map((exp, index) => (
                        <View key={index} style={{flexDirection: 'row', borderWidth: 1, borderRadius: 10, justifyContent:'center', borderColor: primaryColor, padding: 3, margin: 1}}>
                          <Svg width="10" height="10" viewBox="0 0 24 24" >
                            <Path
                              d= {exp.Icon}
                              fill = {primaryColor}
                            />
                          </Svg>
                          <Text style={{color: primaryColor, fontSize: 10}}> {exp.Name} </Text>
                        </View>
                        ))}

                      </View>
                    </View>

                  </View>
                </View>
              </Page>
            </Document>
        );
};