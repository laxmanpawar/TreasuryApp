import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as CiIcons from "react-icons/ci";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [
    {
        name: "Dashboard",
        path: "/",
        icon: <MdIcons.MdDashboard />,
    },
    {
        name: "Fund Position",
        path: "/fundPosition",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subRoutes: [
            {
                name: "Bankwise Balance",
                path: "/fundPosition/bankwiseBalance",
                icon: <CiIcons.CiBank />,
            },
            {
                name: "Cash Inflows and Outflows",
                path: "/fundPosition/cashInflowsOutflows",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        name: "Cash Flows",
        path: "/cashFlows",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subRoutes: [
            {
                name: "Daily Cash Flow Planning",
                path: "/cashFlows/dailyCashFlowPlanning",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                name: "Historical Cash Flow",
                path: "/cashFlows/historicalCashFlow",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                name: "Projected Cash Flow",
                path: "/cashFlows/projectedCashFlows",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        name: "Compliance Tracker",
        path: "/complianceTracker",
        icon: <GrIcons.GrCompliance />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subRoutes: [
            {
                name: "compliance Tracker",
                path: "/complianceTracker/complianceCards",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                name: "Complicance List",
                path: "/compliance/complianceList",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            }
        ],
    },
    {
        name: "About Us",
        path: "/aboutUs",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];
