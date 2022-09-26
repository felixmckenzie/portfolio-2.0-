import React from "react";
import styles from "../styles/Projects.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const projects = [
  {
    title: "Rebuilt MarketPlace",
    description:
      "A two sided marketplace to buy and sell used building materials. Features include user authentication, in app messaging, search/filter function and payment integration with Stripe ",
    technologies: "Rails, Bootstrap, PostgresQL",
    github_link: "https://github.com/felixmckenzie/rebuilt",
    live_link: "https://rebuilt-official.herokuapp.com/"
  },
  {
    title: "Task Manager",
    description: "A task manager application built with React and MUI components. Features include creating, editing and deleting tasks.",
    technologies: "React, CSS, Material UI",
    github_link: "https://github.com/felixmckenzie/task-manager",
    live_link: "https://task-manager-fmckenzie.netlify.app"
  },
  {
    title: "Calculator",
    description: "A vanilla Javascript calculator built as a side project to learn JS fundamentals while at Coder Academy",
    technologies: "HTML, CSS, Javascript",
    github_link: "https://github.com/felixmckenzie/js-calculator",
    live_link: "https://felixmckenzie.github.io/js-calculator/"
  },
  {
    title: "Who Wants To Be A Ruby Millionaire",
    description: "A terminal quiz app based on the game show 'Who Wants to Be A Millionaire'. This was my first project at Coder Academy and taught me the fundamentals of programming in Ruby ",
    technologies: "Ruby",
    github_link: "https://github.com/felixmckenzie/Who-Wants-To-Be-A-Ruby-Millionaire"
  },
];

export default function Projects() {
  return (
    <Container sx={{ py: 8 }} maxWidth="sm" align="center">
        <h2>RECENT PROJECTS</h2>
      <Grid container spacing={4}>
        {projects.map((project) => {
          return (
           <Grid item xs={12} key={project.title}>
            <div className={styles.card}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  padding:"10px"
                }}
              >
                <CardHeader
                  title={project.title}
                  subheader={project.technologies}
                />
                <CardContent>{project.description}</CardContent>
               <a target="_blank" rel="noreferrer"  href={project.github_link}>View Source Code</a>
               <a target="_blank" rel="noreferrer"  href={project.live_link}>View Live Demo</a>
              </Card>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
