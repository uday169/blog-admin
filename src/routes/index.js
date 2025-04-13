import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Tags = React.lazy(() => import("../views/tags/TagList"));
const Posts = React.lazy(() => import("../views/posts/PostList"));
const Authors = React.lazy(() => import("../views/authors/AuthorList"));
const Types = React.lazy(() => import("../views/types/TypeList"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/posts", name: "Posts", element: Posts, exact: true },
  { path: "/posts/:slug", name: "Post", element: Posts, exact: true },
  { path: "/tags", name: "Tags", element: Tags },
  { path: "/authors", name: "Authors", element: Authors },
  { path: "/types", name: "Types", element: Types }
];

export default routes;
