import { useSearchParams } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Navigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dateValue = searchParams.get("date") || "today";

  const handleChange = (_event: React.SyntheticEvent, date: string) => {
    searchParams.set("date", date);
    setSearchParams(searchParams);
  };

  return (
    <Tabs
      value={dateValue}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
    >
      <Tab value="today" label="Today" />
      <Tab value="tomorrow" label="Tomorrow" />
    </Tabs>
  );
}

export default Navigation;
