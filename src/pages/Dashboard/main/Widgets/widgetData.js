import {
    GroupAddOutlined,
    Groups3Outlined,
    GroupRemoveOutlined,
    PendingActionsOutlined,
  } from "@mui/icons-material";

  export const widgetData = [
    {
      id: 1,
      title: "all clients",
      value: 50,
      icon: <Groups3Outlined />,
      color: "#2f80ed",
      backgroundColor: "#d5e6fb",
      link: "All Clients",
    },
    {
      id: 2,
      title: "active clients",
      value: 45,
      icon: <GroupAddOutlined />,
      color: "#9181db",
      backgroundColor: "#e9e6f8",
      link: "Active Clients",
    },
    {
      id: 3,
      title: "inactive clients",
      value: 5,
      icon: <GroupRemoveOutlined />,
      color: "#f0a0a0",
      backgroundColor: "#fcecec",
      link: "Inactive Clients",
    },
    {
      id: 4,
      title: "pending accounts",
      value: 0,
      icon: <PendingActionsOutlined />,
      color: "#ffb849",
      backgroundColor: "#fff1db",
      link: "New Clients Not Trades",
    },
  ];