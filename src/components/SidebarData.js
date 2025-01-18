import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as CiIcons from "react-icons/ci";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
    },
    {
        title: "Fund Position",
        path: "/fundPosition",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Bankwise Balance",
                path: "/fundPosition/bankwiseBalance",
                icon: <CiIcons.CiBank />,
            },
            {
                title: "Cash Inflows and Outflows",
                path: "/fundPosition/cashInflowsOutflows",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Cash Flows",
        path: "/cashFlows",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Daily Cash Flow Planning",
                path: "/cashFlows/dailyCashFlowPlanning",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Historical Cash Flow",
                path: "/cashFlows/historicalCashFlow",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Projected Cash Flow",
                path: "/cashFlows/projectedCashFlow",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Compliance Tracker",
        path: "/complianceTracker",
        icon: <GrIcons.GrCompliance />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "compliance Tracker",
                path: "/complianceTracker/complianceCards",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Complicance List",
                path: "/compliance/complianceList",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            }
        ],
    },
    {
        title: "Contact Us",
        path: "/contactUs",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];
