import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import RepeatIcon from "@mui/icons-material/Repeat";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    icon: <EmailIcon />,
  },
  {
    id: 2,
    name: "username",
    type: "text",
    placeholder: "Username",
    icon: <AccountCircleIcon />,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: <KeyIcon />,
  },
  {
    id: 4,
    name: "passwordRepeat",
    type: "password",
    placeholder: "Repeat Password",
    icon: <RepeatIcon />,
  },
  {
    id: 5,
    name: "code",
    type: "text",
    placeholder: "Code sent via email",
    icon: <VpnKeyIcon />,
  },
  {
    id: 6,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    icon: <DriveFileRenameOutlineIcon />,
  },
  {
    id: 7,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    icon: <DriveFileRenameOutlineIcon />,
  },
];

export default inputs;
