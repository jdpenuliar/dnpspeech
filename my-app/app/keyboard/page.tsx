// import { useEffect, useRef, useState } from "react";
// import webgazer from 'webgazer'; // Import webgazer;

// export default function KeyboardPage() {
//   const [gazeData, setGazeData] = useState(null);
//   const videoRef = useRef(null); // Ref for the video feed

//   useEffect(() => {
//     // Initialize WebGazer.js when the component mounts
//     const initializeWebGazer = async () => {
//       await webgazer.set<ctrl62>;
//       webgazer.begin();

//       // Set up a gaze listener to get real-time gaze data
//       webgazer.setGazeListener((data) => {
//         if (data) {
//           setGazeData({ x: data.x, y: data.y });
//           // You can use this data to update UI elements or trigger actions
//         }
//       });
//     };

//     initializeWebGazer();

//     // Clean up WebGazer.js when the component unmounts
//     return () => {
//       webgazer.end();
//     };
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     <div>
//       <h1>WebGazer.js Eye Tracking in React</h1>
//       {/* WebGazer will inject its video feed into the DOM, but you can reference it */}
//       {/* You might want to style this or hide it if you don't need to display the feed */}
//       <video
//         ref={videoRef}
//         id="webgazerVideoFeed"
//         style={{ display: "none" }}
//       ></video>

//       {gazeData && (
//         <div
//           style={{
//             position: "absolute",
//             left: gazeData.x,
//             top: gazeData.y,
//             width: "20px",
//             height: "20px",
//             borderRadius: "50%",
//             backgroundColor: "red",
//             opacity: 0.7,
//             pointerEvents: "none", // Prevent the indicator from interfering with clicks
//             transform: "translate(-50%, -50%)", // Center the indicator
//           }}
//         />
//       )}

//       <p>Look around the screen!</p>
//       {gazeData && (
//         <p>
//           Gaze Position: X: {gazeData.x.toFixed(2)}, Y: {gazeData.y.toFixed(2)}
//         </p>
//       )}
//     </div>
//   );
// }
