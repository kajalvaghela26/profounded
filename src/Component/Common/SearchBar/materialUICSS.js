import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: theme.spacing(4), // Adjust margin as needed
  },
  searchInput: {
    width: "90%", // Initially, it will take 90% width
    [theme.breakpoints.down("sm")]: {
      width: "100%", // On small screens, it will take full width
    },
    border: "1px solid #ccc", // Just for demonstration
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1), // Adjust padding as needed
  },
}));
