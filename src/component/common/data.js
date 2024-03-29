import { v4 as uuidv4 } from 'uuid';
import courseA from "./../../assets/images/photographer-retouching-pictures-computer-with-edit-app.jpg"
import courseB from "./../../assets/images/african-american-blogger-reviewing-studio-light-camera.jpg"
import courseC from "./../../assets/images/smiley-photographer-studio.jpg"
import courseD from "./../../assets/images/african-american-coder-programming-binary-code-interface-using-css-html-script-encryption-computer-male-freelancer-coding-se.jpg"

import curve from "./../../assets/images/curve.png"
import coding from "./../../assets/images/coding.png"
import brain from "./../../assets/images/brain.png"
import graph from "./../../assets/images/graph.png"
import shopping from "./../../assets/images/online-shopping.png"
export const heading = ["Welcome Samir 🖐", "Recommended Courses"];
export const courses = [
  {
    id: uuidv4(),
    image: courseA,
    text: "Complete Design Bootcamp",
    rate: 4.7
  },
  {
    id: uuidv4(),
    image: courseB,
    text:"Blogging Masterclass",
    rate: 4.7
  },
  {
    id: uuidv4(),
    image: courseC,
    text:"Digital Photography for Beginners",
    rate: 4.0
  },
  {
    id: uuidv4(),
    image: courseD,
    text:"Webdeveloping Bootcamp",
    rate: 4.2
  },
]

export const topCourses = [
  {
    id: uuidv4(),
    image: curve,
    text: "Design",
    rate: 4.7
  },
  {
    id: uuidv4(),
    image: coding,
    text:"Development",
    rate: 4.7
  },
  {
    id: uuidv4(),
    image: brain,
    text:"AI",
    rate: 4.0
  },
  {
    id: uuidv4(),
    image: graph,
    text:"Business",
    rate: 4.2
  },
  {
    id: uuidv4(),
    image: shopping,
    text:"Marketing",
    rate: 4.2
  },
]

    export const tideLink =["Company", "Resources", "Quick Links"]
    export const company = ["About US", "Why TIDE", "Blog"]
    export const resources = ["Categories", "Help & FAQ"]
    export const quickLinks = ["Terms", "Privacy Policy", "Sitemap"]
    export const tides = [
      {
      id: 10,
      name: "Company",
      list: ["About US", "Why TIDE", "Blog"]
    },
    {
      id: 9,
      name: "Resources",
      list: ["Categories", "Help & FAQ"]
    },
    {
      id: 8,
      name: "Quick Links",
      list: ["Terms", "Privacy Policy", "Sitemap"]
    },
    
  ]    
