import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from "@mui/material";



export default function Skills() {
    const skillsData = [
        {   id: "panel1",
            title: "Responsive and Accessible Design",
            content:"Creating responsive and accessible layouts with CSS and semantic HTML was a skill I learned early on in my web development journey."
        },
        {
            id: "panel2",
            title: "Ruby on Rails Applications",
            content:"I have gained rich experience with the Rails framework through developing a two sided marketplace application. I know the ins and outs of MVC architecture."
        },
        {   id: "pane3",
            title: "Javascript + React + Next.JS Frontends",
            content:"I love to create interactive frontends with JS and React that are aesethetically pleasing, functional and intuitive to use"
        },
        {   
            id: "panel4",
            title: "Node, Express & MongoDB",
            content:"...Currently learning"
        },
    ]

    const[expanded, setExpanded] = useState(false)
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <Container maxWidth="sm" align="center">
        <h2>WHAT I DO</h2>
    <Container maxWidth="sm" disableGutters sx={{ padding:"5px",background: " linear-gradient(to right, #d8e2e2, #cbd9d9, #b2c6c6, #7fa0a0, #729090)"}}>
        {skillsData.map((skill) =>{
            const {id, title, content} = skill
          return(  
          <Accordion expanded={expanded === id} key={id} onChange={handleChange(id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{content}</Typography>
            </AccordionDetails>
          </Accordion>
          )
        })}
           
    </Container>
    </Container>
  )
}
