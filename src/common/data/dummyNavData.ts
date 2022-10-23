import React from "react";
import { IconType } from "react-icons";
import { RiHome2Line } from "react-icons/ri";
import { MdBeachAccess, MdSportsGolf } from "react-icons/md";
import {
  GiFarmTractor,
  GiFishingBoat,
  GiWoodCabin,
  GiIsland,
  GiSurfBoard,
  GiFamilyHouse,
  GiMountainCave,
  GiModernCity,
  GiPalmTree
} from "react-icons/gi";
import { TbBuildingCastle } from "react-icons/tb";
import { FaSwimmingPool } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5";
import {BiRocket} from "react-icons/bi"
import {HiOutlineHomeModern} from "react-icons/hi2"
import {BsFillTreeFill} from "react-icons/bs"

type NavbarType = {
  id: number;
  title: string;
  component: IconType;
};

const navbar: NavbarType[] = [
  { id: 1, title: "Shared homes", component: RiHome2Line },
  { id: 2, title: "Beach", component: MdBeachAccess },
  { id: 3, title: "Design", component: GiFamilyHouse },
  { id: 4, title: "Surfing", component: GiSurfBoard },
  { id: 5, title: "Arctic", component: IoSnowOutline },
  { id: 6, title: "OMG!", component: BiRocket },
  { id: 7, title: "Iconic cities", component: GiModernCity },
  { id: 8, title: "Mansions", component: MdBeachAccess },
  { id: 9, title: "Caves", component: GiMountainCave },
  { id: 10, title: "Bed & breakfasts", component: MdBeachAccess },
  { id: 11, title: "Tropical", component: GiPalmTree },
  { id: 12, title: "Amazing pools", component: FaSwimmingPool },
  { id: 13, title: "Castles", component: TbBuildingCastle },
  { id: 14, title: "Islands", component: GiIsland },
  { id: 15, title: "National parks", component: BsFillTreeFill },
  { id: 16, title: "Tiny homes", component: HiOutlineHomeModern },
  { id: 17, title: "Cabins", component: GiWoodCabin },
  { id: 18, title: "Boats", component: GiFishingBoat },
  { id: 19, title: "Farms", component: GiFarmTractor },
  { id: 20, title: "Golfing", component: MdSportsGolf },
];

export default navbar;
