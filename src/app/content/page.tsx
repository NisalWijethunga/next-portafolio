import React from "react";
import { GoTypography, GoContainer } from "react-icons/go";
import { makeStyles } from "@material-ui/core/styles";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <GoContainer component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <GoTypography variant="h5" component="h2">
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </GoTypography>
        <GoTypography variant="h1" component="h1" className={classes.jobs}>
            <TextDecrypt text={`${Resume.basics.job1} + `} />
            <TextDecrypt text={`${Resume.basics.job2}`} />
        </GoTypography>
      </div>
    </GoContainer>
  );
};