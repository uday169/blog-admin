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
  // {
  //   component: CNavTitle,
  //   name: "User management"
  // },

  {
    component: CNavTitle,
    name: "Blogs"
  },
  {
    component: CNavItem,
    name: "Posts",
    to: "/posts",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: "Settings"
  },
  {
    component: CNavItem,
    name: "Authors",
    to: "/authors",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: "Types",
    to: "/types",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: "Tags",
    to: "/tags",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  }
];

export default _nav;
