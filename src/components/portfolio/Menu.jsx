
import nuxalle from "../../assets/nuxalle.png";
import vant from "../../assets/vant.png";
import theragist from "../../assets/theragist.png";
import campusgenie from "../../assets/campusgenie.png";
// import deep from "../../assets/deep.png";

const Menu = [
 
    {
        id: 1,
        image: vant,
        title: "Vant",
        category: ["Frontend", "React js"],
        url: "https://vantapp.com/",
        pageLink: "/case/vant",
        // repositoryUrl: "https://spacetour-app.netlify.app/"
    },
    {
        id: 2,
        image: nuxalle,
        title: "Nuxalle",
        category: ["Frontend", "React js"],
        url: "https://nuxalle.com",
         pageLink: "/case/nuxalle",

    },
   
    {
        id: 3,
        image: campusgenie,
        title: "Campus Genie",
        category: ["Frontend", "Next js"],
        url: "https://www.campusgenie.app/",
        pageLink: "/case/campusgenie",
    },
    {
        id: 4,
        image: theragist,
        title: "Theragist",
        category: ["Frontend", "Next js"],
        url: "https://www.theragist.com/",
        pageLink: "/case/theragist",
    },
];


export default Menu;
