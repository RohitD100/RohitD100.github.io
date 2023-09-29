


// import GitHubCalendar from "react-github-calendar";
// import ReactToolTip from "react-tooltip"


// const Calendar = () => {
//     const selectLastHalfYear = (contributions) => {
//         const currentYear = new Date().getFullYear();
//         const currentMonth = new Date().getMonth();
//         const shownMonths = 6;

//         return contributions.filter((day) => {
//             const date = new Date(day.date);
//             const monthOfDay = date.getMonth();

//             return (
//                 date.getFullYear() === currentYear &&
//                 monthOfDay > currentMonth - shownMonths &&
//                 monthOfDay <= currentMonth
//             )
//         })
//     }

//     return (
//         <div>

//             <GitHubCalendar username="RohitD100" />

//             {/* <ReactToolTip delayHide={20} html /> */}
//             {/* style={{ margin: "auto" }}
//                 username="pandit0305"
//                 color="black"
//                 transformData={selectLastHalfYear}
//                 blockSize={20}
//                 fontSize={20} */}

//         </div>
//     )
// };

// export default Calendar;



// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import ReactToolTip from "react-tooltip"
// // import { Typography, Box, styled } from "@mui/material";
// // import Image from 'mui-image';

// const selectLastHalfYear = contributions => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 6;

//     return contributions.filter(day => {
//         const date = new Date(day.date);
//         const monthOfDay = date.getMonth();

//         return (
//             date.getFullYear() === currentYear &&
//             monthOfDay > currentMonth - shownMonths &&
//             monthOfDay <= currentMonth
//         );
//     });
// };

// function Calendar() {

//     const CustomBox = styled(Box)(({ theme }) => ({
//         maxWidth: "1300px",
//         display: "flex",
//         flexWrap: "wrap",
//         flexDirection: "column",
//         justifyContent: "center",
//         mx: "auto",
//         margin: "auto",
//         color: "white",
//         mb: 5,
//         [theme.breakpoints.down("md")]: {
//             ml: 5
//         },
//         [theme.breakpoints.down("sm")]: {
//             ml: 10
//         }
//     }));
//     const GithubBox = styled(Box)(() => ({
//         maxWidth: "1300px",
//         display: "flex",
//         flexWrap: "wrap",
//         flexDirection: "column",
//         justifyContent: "center",
//         mx: "auto",
//         margin: "auto",
//         color: "white",
//         alignItems: "center"
//     }));

//     return (
//         <GitHubCalendar
//             sx={{ margin: "auto" }}
//             username="RohitD100"
//             showWeekdayLabels={true}
//             transformData={selectLastHalfYear}
//             blockSize={10}
//             blockRadius="50%"
//             color="#00C7FF"
//             fontSize={15}
//         >
//             <ReactToolTip delayHide={20} html />
//         </GitHubCalendar>

//     );
// }

// export default Calendar;

// import GitHubCalendar from 'react-github-calendar';

// const Calendar = () => {
//     return (
//         <GitHubCalendar username="rohitd100" />
//     )
// }
// export default Calendar