import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container } from "@mui/material";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
  return (
	 <Container className={styles.container}>
      <Hero />
      <Skills/>
	  <Projects/>
    </Container>
  );
}
