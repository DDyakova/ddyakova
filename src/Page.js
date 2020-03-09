/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component, Fragment } from "react";
import "./Page.css";
import { Heading } from "./components/Heading/Heading";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { Emoji } from "./components/Emoji/Emoji";
import { Link } from "./components/Link/Link";
import { List } from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem";
import { Logo } from "./components/Logo/Logo";

export default class Page extends Component {
    render() {
        return (
            <Fragment>
                <div id="container">
                    <Logo src="./DD-logo.jpg" alt="logo" />
                    <Heading size="xl">
                        Hi, I’m Dimana Dervisheva <Emoji name="wave">👋🏻</Emoji>
                    </Heading>
                    <Heading size="l">
                        I am a Customer Service expert based in Sofia, Bulgaria{" "}
                        <Emoji name="flag">🇧🇬</Emoji>
                    </Heading>
                    <Paragraph>
                        Right now I’m raising my newborn daughter and polishing
                        my photography skills.
                        <br />
                        I’m actively looking for remote opportunities to work in
                        the Customer Service field.
                        <br />
                        Feel free to contact me if you’re in need of stepping up
                        your customer success level{" "}
                        <Emoji name="handshake">🤝</Emoji>
                    </Paragraph>
                    <hr
                        style={{
                            height: "1px",
                            width: "100%",
                            backgroundColor: "black"
                        }}
                    ></hr>
                    <Paragraph>
                        For professionals you can find me on{" "}
                        <Link
                            color="#0077B5"
                            link="https://www.linkedin.com/in/ddiakova/"
                        >
                            LinkedIn
                        </Link>
                        <br />
                        To check out my food photography journey you can follow
                        me on{" "}
                        <Link
                            color="#bc2a8d"
                            link="https://www.instagram.com/dimittaskitchen/"
                        >
                            Instagram
                        </Link>
                        <br />
                        My occasional thoughts on the latest in the gaming
                        industry can be found on my{" "}
                        <Link
                            color="#1DA1F2"
                            link="https://twitter.com/Dimitta"
                        >
                            Twitter
                        </Link>{" "}
                        profile
                    </Paragraph>
                    <Heading size="l">My latest projects</Heading>
                    <Heading size="m">
                        Knowledge base & Chat Bot development
                    </Heading>
                    <Paragraph>
                        What <Emoji name="question">❓</Emoji>
                        <br />
                        <Paragraph>
                            Dissecting and rebuilding completely the entire
                            knowledge base & processes for both CS agents &
                            end-clients in the online gaming industry.
                        </Paragraph>
                        How <Emoji name="checkmark">✔️</Emoji>
                        <br />
                        <Paragraph>
                            Internal Knowledge base
                            <List>
                                <ListItem>
                                    Diving the information to agent’s seniority
                                    levels
                                </ListItem>
                                <ListItem>
                                    Complete revision of all processes
                                </ListItem>
                                <ListItem>
                                    Compiling the whole information in one
                                    Intranet channel (ZenDesk)
                                </ListItem>
                                <ListItem>
                                    Creation and implementation of “Internal
                                    processes publishing” standard
                                </ListItem>
                            </List>
                            End-clients Knowledge base
                            <List>
                                <ListItem>
                                    Revision of the user journeys relating to
                                    contacting Customer Support
                                </ListItem>
                                <ListItem>
                                    Analysing of all frequently asked questions
                                    by end-users
                                </ListItem>
                                <ListItem>
                                    Creating a standardised method for
                                    publishing new content to end-users
                                </ListItem>
                                <ListItem>
                                    Implementation of Bold360 ChatBot & FAQ
                                    across all products The results 📈 30%
                                    success rate of the Chat bot for
                                    “Successfully completed chats” 40% increase
                                    in agent reply times and significant
                                    reduction of verbal questions to seniors
                                </ListItem>
                            </List>
                        </Paragraph>
                    </Paragraph>
                    <Heading size="m">
                        Intro training for Customer Service agents
                    </Heading>
                    <Paragraph>
                        What <Emoji name="question">❓</Emoji>
                        <Paragraph>
                            Complete revision of the introductory training for
                            Customer Service agents in the online gaming
                            industry.
                        </Paragraph>
                        How <Emoji name="checkmark">✔️</Emoji>
                        <List>
                            <ListItem>
                                Full revision of the internal processes and
                                synchronising them in a training fitted for the
                                current company needs
                            </ListItem>
                            <ListItem>
                                Creating engaging new presentation content full
                                of practical exercises, live demos and short
                                quizzes to test the candidates’ understanding of
                                the information
                            </ListItem>
                            <ListItem>
                                Creating new knowledge tests and automating them
                                using Google Forms
                            </ListItem>
                            <ListItem>
                                Follow up support for the new agents in their
                                1st month on the job
                            </ListItem>
                            <ListItem>
                                Continued monitoring and updating of the
                                training’s information to reflect the current
                                processes and meet the business’ needs
                            </ListItem>
                        </List>
                        The results 📈 90% increase of the candidate’s success
                        rate on their 1st attempt of the final tests. Better
                        onboarding of the new candidates after the training’s
                        completion.
                    </Paragraph>
                </div>
            </Fragment>
        );
    }
}
