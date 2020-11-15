import React from "react";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

export default [
  {
    icon: <LocalFloristIcon />,
    title: "N-Agro",
    duration: "Duration: 6 months",
    description: `Volunteers will provide advisory services to farmers across the
          country. They will also gather data of Nigeria's agriculture assets.
          Open to both Graduates and Non- Graduates`,
  },
  {
    icon: <MenuBookIcon />,
    title: "N-Teach",
    duration: "Duration: 12 months",
    description: `Volunteers will help improve basic education delivery in Nigeria. 
    They will be deployed as teacher assistants in primary schools around Nigeria. Open to
    Graduates only`,
  },
  {
    icon: <LocalHospitalIcon />,
    title: "N-Health",
    duration: "Duration: 12 months",
    description: `Volunteers will help imporve and promote preventive healthcare in their
    communities to vulnerable members of the society. Open to Graduates only`,
  },
  {
    icon: <ImportantDevicesIcon />,
    title: "N-Build, Tech and Creative",
    duration: "Duration: 6 months",
    description: `Volunteers will receive extensive training to help develp and expand their
    respective skillset. This will help foster innovation and creativity. Open to Graduates
    and Non-Graduates`,
  },
];
