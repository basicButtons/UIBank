import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";

function Home() {
  return <div>首页</div>;
}

function Todo() {
  return <div>待办</div>;
}

function Message() {
  return <div>消息</div>;
}

function PersonalCenter() {
  return <div>我的</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/me",
        element: <PersonalCenter />,
      },
    ],
  },
]);

export const RouterCenter = () => {
  return <RouterProvider router={router} />;
};
