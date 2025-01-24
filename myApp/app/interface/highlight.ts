import images from "@/constants/ConstImg";
interface Highlight{
    img:string;
};
let HighlightAdress: Highlight[]=[
    {img:images.logo},
    {img: require("../../assets/images/post2.jpg")},
    {img: require("../../assets/images/post3.jpg")},
    {img: require("../../assets/images/post4.jpg")},
    {img: require("../../assets/images/post3.jpg")},
    {img: require("../../assets/images/post2.jpg")},
    {img: require("../../assets/images/post4.jpg")},
    {img: require("../../assets/images/post3.jpg")},
    {img: require("../../assets/images/post1.jpg")},
 ];
export default HighlightAdress;