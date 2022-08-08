import Coordinate1 from "./components";
import "./App.css";

const App = () => {
  // let checkX90 = false;
  // let checkY90 = false;
  // let x1 = 1;
  // let y1 = 9;
  // let x2 = 3;
  // let y2 = 1;
  // let x3 = 1;
  // let y3 = 1;
  // let y4;
  // let x4;
  // let cPointx;
  // let cPointy;

  // let distance1 = 0;
  // let distance2 = 0;
  // let line1Points = [];
  // let line2Points = [];

  // const findDistance = (x1, y1, x2, y2) => {
  //   return Math.pow(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2), 0.5);
  // };

  // const checkXparallel = (x1, y1, x2, y2) => {
  //   return (y2 - y1) / (x2 - x1);
  // };

  // const checkYparallel = (x1, y1, x2, y2) => {
  //   return (
  //     (x2 - x1) / Math.pow(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2), 0.5)
  //   );
  // };

  // const check90 = (x1, y1, x2, y2, x3, y3) => {
  //   if (
  //     checkXparallel(x1, y1, x2, y2) == 0 ||
  //     checkXparallel(x2, y2, x3, y3) == 0 ||
  //     checkXparallel(x3, y3, x1, y1) == 0
  //   ) {
  //     checkY90 = true;
  //   }

  //   if (
  //     checkYparallel(x1, y1, x2, y2) == 0 ||
  //     checkYparallel(x2, y2, x3, y3) == 0 ||
  //     checkYparallel(x3, y3, x1, y1) == 0
  //   ) {
  //     checkX90 = true;
  //   }
  // };

  // const findCommonPoint = (x1, y1, x2, y2, x3, y3) => {
  //   if (x1 != x2 && y1 != y2) {
  //     cPointx = x3;
  //     cPointy = y3;
  //   } else if (x2 != x3 && y2 != y3) {
  //     cPointx = x1;
  //     cPointy = y1;
  //   } else if (x3 != x1 && y3 != y1) {
  //     cPointx = x2;
  //     cPointy = y2;
  //   }
  // };

  // const d1 = (x1, y1, x2, y2, x3, y3) => {
  //   if (checkXparallel(x1, y1, x2, y2) == 0) {
  //     // distance1 = findDistance(x1, y1, x2, y2);
  //     // checkY90 = true;
  //     if (cPointx == x1 && cPointy == y1) {
  //       x4 = x2;
  //     } else {
  //       x4 = x1;
  //     }
  //   } else if (checkXparallel(x2, y2, x3, y3) == 0) {
  //     // distance1 = findDistance(x2, y2, x3, y3);
  //     // checkY90 = true;
  //     if (cPointx == x2 && cPointy == y2) {
  //       x4 = x3;
  //     } else {
  //       x4 = x2;
  //     }
  //   } else if (checkXparallel(x3, y3, x1, y1) == 0) {
  //     // distance1 = findDistance(x3, y3, x1, y1);
  //     // checkY90 = true;
  //     if (cPointx == x3 && cPointy == y3) {
  //       x4 = x1;
  //     } else {
  //       x4 = x3;
  //     }
  //   }
  // };

  // const d2 = (x1, y1, x2, y2, x3, y3) => {
  //   if (checkYparallel(x1, y1, x2, y2) == 0) {
  //     // distance2 = findDistance(x1, y1, x2, y2);
  //     // checkX90 = true;
  //     if (cPointx == x1 && cPointy == y1) {
  //       y4 = y2;
  //     } else {
  //       y4 = y1;
  //     }
  //   } else if (checkYparallel(x2, y2, x3, y3) == 0) {
  //     // distance2 = findDistance(x2, y2, x3, y3);
  //     // checkX90 = true;
  //     if (cPointx == x2 && cPointy == y2) {
  //       y4 = y3;
  //     } else {
  //       y4 = y2;
  //     }
  //   } else if (checkYparallel(x3, y3, x1, y1) == 0) {
  //     // distance2 = findDistance(x3, y3, x1, y1);
  //     // checkX90 = true;
  //     if (cPointx == x3 && cPointy == y3) {
  //       y4 = y1;
  //     } else {
  //       y4 = y3;
  //     }
  //   }
  // };

  // const MainFunc = () => {
  //   check90(x1, y1, x2, y2, x3, y3);
  //   if (checkX90 && checkY90) {
  //     findCommonPoint(x1, y1, x2, y2, x3, y3);
  //     d1(x1, y1, x2, y2, x3, y3);
  //     d2(x1, y1, x2, y2, x3, y3);
  //   } else {
  //     console.log("wrong input");
  //   }
  // };

  // // d1(x1, y1, x2, y2, x3, y3);
  // // d2(x1, y1, x2, y2, x3, y3);
  // MainFunc();
  // console.log(x4, y4);

  return (
    <>
      <Coordinate1></Coordinate1>
    </>
  );
};

export default App;
