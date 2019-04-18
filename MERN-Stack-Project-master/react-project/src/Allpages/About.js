import React from 'react'
import './about.css'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = {
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lobster'
    },
    text: {
        fontSize: 15,
        textTransform: 'capitalize',
        paddingTop: 20,
        textAlign: 'justify',
        fontFamily: 'cursive',
        textJustify: 'inter-word'
    }

};
const About = (props) => {
    const { classes } = props
    return (
        <div>
            <div className='parallex-first'>
                <h4>About</h4>
                <div className='about-content'>
                    <p>
                        Hi, chitkarians!! You all must have face the problems like
                            locating the teacher?
                            Roaming for hours in the campus without any clue about the teacher?
                            Missing lectures in the entire process?
                        <br />
                        <br />
                        We have realised that this is the common problem faced by all the students, so we thought of coming up with the solution for the same. We have created a platform that will enable both the teachers and students to connect without any problem. The platform will enable the students to make an appointment with the teacher pre hand and even can access the details of the student easily without any confusions. The students can search for the teacher, check for availability of a teacher, communicate its doubts, set for a meeting point & time, check teacher timetable as well. The teachers can access the student’s information, communicate with them & respond effectively.
                    </p>
                </div>

                <div className='benefits'>
                    <h4>benefits</h4>
                </div>

                <h4>Services </h4>

                <div className='services'>
                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                Timetable
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                {'this feature will enable the students to access the teachers timetable and can barge for the appointments accordingly.'}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Search
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                the students can search for the prospective faculty and the faculty can search for the students.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Availability
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                this will help the students and the teacher to check for each other’s availability.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Location
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                this will enable the students to track the faculty.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(About);