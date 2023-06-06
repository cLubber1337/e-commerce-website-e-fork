import {
  faBagShopping,
  faBottleDroplet,
  faBowlFood,
  faClock,
  faGears,
  faGem,
  faGlasses,
  faHandDots,
  faHouse,
  faKey,
  faLaptop,
  faLightbulb,
  faMobileScreenButton,
  faMotorcycle,
  faPersonDress,
  faShirt,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

export const BASE_URL = "https://dummyjson.com/"

export const instance = axios.create({
  baseURL: "https://dummyjson.com/",
})

export const ICONS_FOR_NAVBAR = [
  faMobileScreenButton,
  faLaptop,
  faBottleDroplet,
  faHandDots,
  faBowlFood,
  faHouse,
  faKey,
  faShirt,
  faPersonDress,
  faShoePrints,
  faShirt,
  faShoePrints,
  faClock,
  faClock,
  faBagShopping,
  faGem,
  faGlasses,
  faGears,
  faMotorcycle,
  faLightbulb,
]
