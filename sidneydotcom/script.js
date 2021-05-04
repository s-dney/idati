const mainWindow = document.getElementById("content")
const sidebar = document.getElementById("sidebar")
const projectList = document.getElementById("project-list")

let emptyObject = {
  name: "",
  description: "",
  embed: null,
  images: [
    {
    src: "",
    title: "",
    caption: "",
    link: null
    }
  ]
}

let testObject = {
  name: "Screenprinting",
  description: "",
  images: [
    {
    src: "assets/determination.jpeg",
    title: "Determination Screenprint",
    caption: "Determination (2017)",
    link: null
    }
  ]
}

let projectArray = [
  testObject,
  {
    name: "Six Times a Day",
    description: "A loud, interactive musing on the nature of clocks.",
    embed: "https://youarethinkingaboutaclockcompletelywrong.com",
    images: []
  },
  {
    name: "Is it spring yet?",
    description: "",
    embed: "https://is-it-spring-yet.glitch.me",
    images: [
      {
      src: "",
      title: "",
      caption: "",
      link: null
      }
    ]
  },
  {
    name: "The Problem With Sappho",
    description: "Letterpress accordion book, 2018",
    embed: null,
    images: [
      {
      src: "assets/sappho.jpg",
      title: "The Problem With Sappho",
      caption: "",
      link: null
      }
    ]
  },
  {
    name: "The Yale Globalist",
    description: "Since 2020, I've been creative director for Yale's undergraduate global affairs magazine.",
    embed: null,
    images: [
      {
      src: "assets/adaptation.png",
      title: "ADAPTATION",
      caption: "Winter/Spring 2021: ADAPTATION",
      link: "assets/Globalist_Spring2021_Adaptation_Print.pdf"
      }
    ]
  }
]

projectArray.forEach(project => {
  addToSidebar(project)
})

function addToSidebar(project) {
  let li = document.createElement('li')
  li.innerText = project.name
  projectList.appendChild(li)
  li.style.cursor = "pointer"
  li.addEventListener('click', (e) => {
    displayProject(project)
  })
}

function displayProject(project) {
  mainWindow.innerHTML = ""
  let h1 = document.createElement("h1")
  h1.innerText = project.name
  mainWindow.appendChild(h1)
  let desc = document.createElement("h3")
  desc.innerText = project.description
  mainWindow.append(desc)
  if (project.embed) {
    let object = document.createElement("object")
    object.data = project.embed
    object.width = "100%"
    object.height = "100%"
    let embed = document.createElement("embed")
    embed.src = project.embed
    
    object.appendChild(embed)
    mainWindow.appendChild(object)
  }
  for (let i = 0; i < project.images.length; i++) {
    let img = document.createElement('img')
    img.src = project.images[i].src
    img.alt = project.images[i].title
    let caption = document.createElement('p')
    caption.innerText = project.images[i].caption
    if (project.images[i].link) {
      let a = document.createElement("a")
      a.href = project.images[i].link
      a.target = "_blank"
      a.appendChild(img)
      mainWindow.appendChild(a)
    } else {
      mainWindow.appendChild(img)
    }
    mainWindow.appendChild(caption)
  }
}

function setup() {

}


function setup() {
  var canvas = createCanvas(710, 400)
  canvas.parent(mainWindow)
  noStroke();
  rectMode(CENTER); 
}

function draw() {
  background(255);
  fill(244, 122, 158);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(237, 34, 93);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}
