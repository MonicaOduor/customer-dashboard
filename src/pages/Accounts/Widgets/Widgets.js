import { ArrowUpwardOutlined } from "@mui/icons-material";
import { widgetData } from "./widgetsData";

export default function Widgets() {
  return (
    <>
      {widgetData.map((data) => (
        <div
          className="widget"
          key={data.id}
          style={{
            color: data.color,
            backgroundColor: data.backgroundColor,
            height: "fit-content",
            borderRadius: "20px",
            border: "none",
          }}
        >
          <p>
            <span
              style={{
                color: data.color,
                backgroundColor: data.backgroundColor,
              }}
            >
              {data.icon}&nbsp;
            </span>
            <small style={{ color: data.color, fontWeight: 700 }}>
              {data.title.toLocaleUpperCase()}
            </small>
          </p>
          <p>
            <ArrowUpwardOutlined />
            {data.value}
          </p>
        </div>
      ))}
    </>
  );
}
