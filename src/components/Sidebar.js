// Desc: Sidebar component for the dashboard

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { SidebarData } from "./SidebarData";
import SidebarMenu from "./SidebarMenu";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "200px" : "45px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 15,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    VITTI
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaIcons.FaBars onClick={toggle} />
                        </div>
                    </div>
                    <div className="search">
                        <div className="search_icon">
                            <BiSearch />
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.input
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={inputAnimation}
                                    type="text"
                                    placeholder="Search"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <section className="routes">
                        {SidebarData.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </>
    );
};

export default Sidebar;
