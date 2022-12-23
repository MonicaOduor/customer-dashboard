import {
    GroupAddOutlined,
    Groups3Outlined,
    GroupRemoveOutlined,
    PendingActionsOutlined,
  } from "@mui/icons-material";

  export const widgetData = [
    {
      id: 1,
      title: "new account",
      value: 50,
      icon: <Groups3Outlined />,
      color: "#2f80ed",
      backgroundColor: "#d5e6fb"
    },
    {
      id: 2,
      title: "crm set up",
      value: 45,
      icon: <GroupAddOutlined />,
      color: "#9181db",
      backgroundColor: "#e9e6f8",
    },
    {
      id: 3,
      title: "esg manager",
      value: 5,
      icon: <GroupRemoveOutlined />,
      color: "#f0a0a0",
      backgroundColor: "#fcecec",
    },
    {
      id: 4,
      title: "business expansion",
      value: 0,
      icon: <PendingActionsOutlined />,
      color: "#ffb849",
      backgroundColor: "#fff1db"
    },
  ];