import foodImg from "../assets/images/category_food.png";
import foodImgGreen from "../assets/images/category_food_green.png";
import homeImg from "../assets/images/house-24px.svg";
import homeImgGreen from "../assets/images/house-24px_green.svg";
import clothingImg from "../assets/images/checkroom-24px.svg";
import clothingImgGreen from "../assets/images/checkroom-24px_green.svg";
import jewelryImg from "../assets/images/category_jewelry.png";
import jewelryImgGreen from "../assets/images/category_jewelry_green.png";
import craftsImg from "../assets/images/crafts.png";
import craftsImgGreen from "../assets/images/crafts_green.png";

export default [{
    name: "food",
    icon: foodImg,
    icon_green: foodImgGreen,
    subcategories: ["fresh_fruit", "fresh_vegetables"]
}, {
    name: "home",
    icon: homeImg,
    icon_green: homeImgGreen,
    subcategories: ["candles", "bathroom", "wall_decorations","ceramics","furniture","bed","statues","paperwork","lightning","spirituality","other"]
},
{
    name: "clothing",
    icon: clothingImg,
    icon_green: clothingImgGreen,
    subcategories: ["t_shirts"]
},
{
    name: "jewelry",
    icon: jewelryImg,
    icon_green: jewelryImgGreen,
    subcategories: ["bracelets","necklaces"]
},
{
    name: "crafts",
    icon: craftsImg,
    icon_green: craftsImgGreen,
    subcategories: ["fresh_fruit","fresh_vegetables"]
},
{
    name: "music",
    // icon: musicImg,
    // icon_green: musicImgGreen,
    subcategories: ["instruments","paintings"]
}];