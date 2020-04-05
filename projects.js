/* This is where I can store project data and display it to the user. */

//Project Data
var projects = [
    {
        name: "New England Shea Butter",
        image: "projectImgs/nesb.png",
        desc: "Ecommerce website made for New England Shea Butter, LLC.",
        whatIUsed: ["HTML5", "CSS3", "Javascript", "PHP", "MySQL", "PayPal Api", "Jquery", "Bootstrap"],
        view: "https://nesheabutter.com",
        code: "view-source:https://nesheabutter.com/"
    },
    {
        name: "COVID-19 Tracker",
        image: "projectImgs/covid-19.PNG",
        desc: "This is a covid-19 application that provides free opensource information regarding covid-19. The covid-19 data in this application is sourced from The Center for Systems Science and Engineering at John Hopkins University which is accessed through a Application Programming Interface (API) provided by @mathdroid.",
        whatIUsed: ["HTML5", "CSS3", "Javascript", "REACT", "FECTH API", "MapBox", "Postman"],
        view: "http://covid19.dinshpati.com/#/",
        code: "https://github.com/DinShpati/covid-19"
    },
    {
        name: "WXY Movies",
        image: "projectImgs/wxymovies.png",
        desc: "This is a fully responsive landing page for a movies website.",
        whatIUsed: ["HTML5", "CSS3", "Javascript", "Jquery"],
        view: "https://dinshpati.github.io/wxy-Movies-Webpage/",
        code: "https://github.com/DinShpati/wxy-Movies-Webpage"
    },
    {
        name: "LYFT Clone 2019",
        image: "projectImgs/lyft.png",
        desc: "A clone of lyfts website",
        whatIUsed: ["HTML5", "CSS3", "Javascript", "Jquery"],
        view: "https://dinshpati.github.io/LYFT_CLONE/",
        code: "https://github.com/DinShpati/LYFT_CLONE"
    },
    {
        name: "Cheap Flight Finder",
        image: "projectImgs/cheapff.png",
        desc: "Cheap flight finders main page for the landing page, desktop/laptop screen only",
        whatIUsed: ["HTML5", "CSS3", "Javascript", "Jquery"],
        view: "https://dinshpati.github.io/CheapFlightFinder/",
        code: "https://github.com/DinShpati/CheapFlightFinder"
    },
    {
        name: "GAOTek, Excel Generator",
        image: "projectImgs/gaotek.PNG",
        desc: "We are creating a program that takes user inputs and generates a amazon excel sheet that can be uploaded to amazon and automatically create a product lisitng.",
        whatIUsed: ["HTML5", "CSS3", "Javascript", "PHP", "Composer", "Bootstrap"],
        view: "https://github.com/scalable-system/project22",
        code: "https://github.com/scalable-system/project22"
    },
    {
        name: "Pazzam",
        image: "projectImgs/pazzam.png",
        desc: "This is a landing page build for a creative agnecy called Pazzam",
        whatIUsed: ["HTML5", "CSS3", "Javascript"],
        view: "https://dinshpati.github.io/Pazzam/",
        code: "https://github.com/DinShpati/Pazzam"
    },
    {
        name: "BrideBook",
        image: "projectImgs/bridebook.jpg",
        desc: "This is a email template made for bridebook.",
        whatIUsed: ["HTML5", "CSS3", "Javascript"],
        view: "https://dinshpati.github.io/bridebook/",
        code: "https://github.com/DinShpati/bridebook"
    },
    {
        name: "Norwalk CC Final Project",
        image: "projectImgs/norwalkccfinalproject.png",
        desc: "This is was my final project for a web dev class at Norwalk CC.",
        whatIUsed: ["HTML5", "CSS3", "Javascript"],
        view: "https://dinshpati.github.io/NorwalkCC-Final/index.html",
        code: "https://github.com/DinShpati/NorwalkCC-Final"
    }
];

//Project List

function listProjects(projects){

    mainDivElement = document.getElementById("mainProjectDiv");

    for(var i = 0; i < projects.length; i++){

        //declaring the variables and assigning there values
        let name = projects[i].name, 
        image = projects[i].image, 
        desc = projects[i].desc,
        view = projects[i].view, 
        code = projects[i].code;

        //Main Div
        projectDiv = document.createElement("div");
        projectDiv.className = "projectDiv";
        projectDiv.style.backgroundImage = "url(" + image + ")";

            //Main Title
            projectTitle = document.createElement("div");
            projectTitle.className = "projectTitle";

                //Main Title H4
                h4_1 = document.createElement("h2");
                h4_1.className = "h4 blackclr";
                h4_1.innerHTML = name;

            //Main Button Div
            projectButton = document.createElement("div");
            projectButton.className = "projectInfo";

                //A Tag For the main button
                projectInfoBTN = document.createElement("a");
                projectInfoBTN.href = "#popup" + i;
                projectInfoBTN.innerHTML = "View Project";

            //Main  popup container
            projectPopup = document.createElement("div");
            projectPopup.id = "popup" + i;
            projectPopup.className = "overlay";

                //another container
                projectPopupDiv = document.createElement("div");
                projectPopupDiv.className = "popup";

                    //popup project title
                    h4_2 = document.createElement("h2");
                    h4_2.className = "h4";
                    h4_2.innerHTML = name;

                    //Close popup btn
                    CloseBTN = document.createElement("a");
                    CloseBTN.href = "#section4";
                    CloseBTN.innerHTML = "&times;";
                    CloseBTN.className = "close";

                    //HR and BR
                    hr = document.createElement("hr");
                    hr2 = document.createElement("hr");
                    br = document.createElement("br");

                    //Another 2 column container
                    projectPopupChildDiv = document.createElement("div");
                    projectPopupChildDiv.className = "col-2";

                        // Regular Container
                        regulerDiv1 = document.createElement("div");

                            //Project Image
                            projectImage = document.createElement("img");
                            projectImage.className = "projectImg";
                            projectImage.src = image;
                            projectImage.alt = name;

                        // Regular Container #2
                        regulerDiv2 = document.createElement("div");

                            //Project Description
                            projectDesc = document.createElement("p");
                            projectDesc.className = "p gray";
                            projectDesc.innerText = desc;
                            regulerDiv2.appendChild(projectDesc);
                            
                            //Simple hr tag
                            hr3 = document.createElement("hr");
                            regulerDiv2.appendChild(hr3);

                            //p tag header
                            projectHeader = document.createElement("p");
                            projectHeader.className = "h4 gray";
                            projectHeader.innerText = "What I Used";
                            regulerDiv2.appendChild(projectHeader);

                            //Creating the elements for the technologies that I used for the development of the project

                            for(var j = 0; j < projects[i].whatIUsed.length; j++){

                                aHREF = document.createElement("a");
                                aHREF.href = "";
                                aHREF.innerHTML = projects[i].whatIUsed[j];
                                aHREF.className = "skillheader";
                                regulerDiv2.appendChild(aHREF);

                            }
                    
                    //Content div at the buttom
                    contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                            //View code and View Project buttons
                            viewSite = document.createElement("a");
                            viewSite.href = view;
                            viewSite.innerHTML = "View App/Site";
                            viewSite.className = "view";
                            viewCode = document.createElement("a");
                            viewCode.href = code;
                            viewCode.innerHTML = "See the Code";
                            viewCode.className = "code";


        //Appending Children
        mainDivElement.appendChild(projectDiv);

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectButton);
        projectDiv.appendChild(projectPopup);

        projectTitle.appendChild(h4_1);

        projectButton.appendChild(projectInfoBTN);

        projectPopup.appendChild(projectPopupDiv);

        projectPopupDiv.appendChild(h4_2);
        projectPopupDiv.appendChild(CloseBTN);
        projectPopupDiv.appendChild(hr);
        projectPopupDiv.appendChild(br);
        projectPopupDiv.appendChild(projectPopupChildDiv);
        projectPopupDiv.appendChild(hr2);
        projectPopupDiv.appendChild(contentDiv);

        projectPopupChildDiv.appendChild(regulerDiv1);
        projectPopupChildDiv.appendChild(regulerDiv2);
        
        regulerDiv1.appendChild(projectImage);
        
        contentDiv.appendChild(viewSite);
        contentDiv.appendChild(viewCode);

    }

}

//Call the function and display to the user
listProjects(projects);