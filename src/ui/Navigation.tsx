import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Navigation() {
  const [value, setValue] = useState("today");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="today" label="Today" />
      <Tab value="tomorrow" label="Tomorrow" />
    </Tabs>
  );
}

export default Navigation;
