import { BallTriangle } from "react-loader-spinner";
import { LoaderWrapp } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapp>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#ed3984"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderWrapp>
  );
};

// import { Box, Сircle1, Сircle2, Сircle3, SvgWrapp } from "./Loader.styled";

// export const Loader = () => {
//   return (
//     <main>
//       <div
//         style={{

//           borderRadius: "50%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box>
//           <Сircle1></Сircle1>
//           <SvgWrapp>
//             <svg
//               width="300"
//               height="300"
//               viewBox="0 0 80 80"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_739_1288)">
//                 <style>
//                   {`
//                 @keyframes rotateAnimation {
//                   from {
//                     transform: rotate(0deg);
//                   }
//                   to {
//                     transform: rotate(360deg);
//                   }
//                 }

//                 @keyframes fadeAndMoveAnimation {
//                   0% {
//                     opacity: 0;
//                     transform: translate(0, 0);
//                   }
//                   100% {
//                     opacity: 1;
//                     transform: translate(0, -25px);
//                   }
//                 }
//               `}
//                 </style>

//                 <path
//                   id="4"
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M39.9998 20.7975H39.9998C37.852 20.7975 36.0937 19.1215 35.9494 17C21.8506 18.98 11 31.1462 11 45.859C11 49.7918 11.7753 53.5426 13.1807 56.9656C13.6688 56.7568 14.2059 56.6412 14.7698 56.6412C16.2275 56.6412 17.5058 57.4132 18.2218 58.5724L39.9998 45.9378V20.7975ZM17.259 63.9442C18.2148 63.1978 18.8298 62.0316 18.8298 60.721C18.8298 60.0327 18.6602 59.3843 18.3607 58.8155L40.1377 46.1815L61.8063 58.7527C61.4858 59.3363 61.3034 60.0072 61.3034 60.721C61.3034 61.9938 61.8835 63.1305 62.7924 63.8786C57.4822 70.6515 49.2465 75 40 75C30.7833 75 22.5709 70.6796 17.259 63.9442ZM40.2788 20.788C42.2981 20.6503 43.9123 19.0289 44.0502 17C58.1491 18.9799 68.9999 31.1461 68.9999 45.859C68.9999 49.7739 68.2317 53.5085 66.8384 56.9188C66.3812 56.7396 65.8838 56.6412 65.3634 56.6412C63.9312 56.6412 62.6722 57.3865 61.9494 58.512L40.2788 45.9396V20.788Z"
//                   fill="url(#paint3_linear_739_1288)"
//                   //   style={{
//                   //     animation: "fadeAndMoveAnimation 2s ease-in-out 5s forwards",
//                   //   }}
//                 />
//               </g>
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_739_1288"
//                   x1="36"
//                   y1="9"
//                   x2="44"
//                   y2="9"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-color="#ED3984" />
//                   <stop offset="0.015625" stop-color="#ED3984" />
//                   <stop offset="1" stop-color="#7452C8" />
//                 </linearGradient>
//                 <linearGradient
//                   id="paint1_linear_739_1288"
//                   x1="4"
//                   y1="65"
//                   x2="12"
//                   y2="65"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-color="#ED3984" />
//                   <stop offset="0.015625" stop-color="#ED3984" />
//                   <stop offset="1" stop-color="#7452C8" />
//                 </linearGradient>
//                 <linearGradient
//                   id="paint2_linear_739_1288"
//                   x1="0"
//                   y1="4"
//                   x2="8"
//                   y2="4"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-color="#ED3984" />
//                   <stop offset="0.015625" stop-color="#ED3984" />
//                   <stop offset="1" stop-color="#7452C8" />
//                 </linearGradient>
//                 <linearGradient
//                   id="paint3_linear_739_1288"
//                   x1="17.67"
//                   y1="26.28"
//                   x2="81.0974"
//                   y2="40.7534"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-color="#ED3984" />
//                   <stop offset="1" stop-color="#7452C8" />
//                 </linearGradient>
//                 <clipPath id="clip0_739_1288">
//                   <rect
//                     width="72"
//                     height="70"
//                     fill="white"
//                     transform="translate(4 5)"
//                   />
//                 </clipPath>
//               </defs>
//             </svg>
//           </SvgWrapp>

//           <Сircle2></Сircle2>
//           <Сircle3></Сircle3>
//         </Box>
//       </div>
//     </main>
//   );
// };
