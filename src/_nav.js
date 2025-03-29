import React from "react";
import CIcon from "@coreui/icons-react";
import { cilDrop, cilPencil, cilSpeedometer } from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW"
    }
  },
  {
    component: CNavTitle,
    name: "User management"
  },
  {
    component: CNavItem,
    name: "Colors",
    to: "/theme/colors",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: "Typography",
    to: "/theme/typography",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: "Settings"
  },
  {
    component: CNavItem,
    name: "Author",
    to: "/theme/colors",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: "Types",
    to: "/theme/typography",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  }
];

export default _nav;
