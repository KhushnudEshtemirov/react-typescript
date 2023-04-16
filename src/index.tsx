import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import EventComponent from "./events/EventComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <EventComponent />
  </StrictMode>
);
