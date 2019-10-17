import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const topics = ["topic1 , topic2"];

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2)
    },
    flex: {
        display: "flex"
    },
    chatWindow: {
        wdith: "70%",
        height: "300px"
    },
    topicsWindow: {
        width: "30%",
        height: "300px",
        borderRight: "1px solid gray"
    },
    chatBox: {
        width: "85%"
    },
    button: {
        width: "15%"
    }
}))

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat app
                </Typography>
                <Typography variant="h5" component="h5">
                    Topics go here
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ["topic"].map(topic => {
                                    return (
                                        <ListItem key={topic}>
                                            <ListItemText primary={topic} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </div>
                </div>
                <div className={classes.flex}>
                    <div className={classes.chatWindow}>
                        
                    </div>
                </div>
            </Paper>
        </div>
    )
}