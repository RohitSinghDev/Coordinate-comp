import React, { useState } from "react";
import "./coordinate1.css";

const Calc = (props) => {
  let checkX90 = false;
  let checkY90 = false;
  let checkPositive = false;
  //   let x1 = 1;
  //   let y1 = 9;
  //   let x2 = 3;
  //   let y2 = 1;
  //   let x3 = 1;
  //   let y3 = 1;
  let y4 = [];
  let x4 = [];
  let cPointx;
  let cPointy;
  let key = 0;

  let distance1 = 0;
  let distance2 = 0;
  let line1Points = [];
  let line2Points = [];

  //   const [x4, setX4] = useState([]);
  //   const [y4, setY4] = useState([]);

  const findDistance = (x1, y1, x2, y2) => {
    return Math.pow(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2), 0.5);
  };

  const checkXparallel = (x1, y1, x2, y2) => {
    return (y2 - y1) / (x2 - x1);
  };

  const checkYparallel = (x1, y1, x2, y2) => {
    return (
      (x2 - x1) / Math.pow(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2), 0.5)
    );
  };

  const check90 = (x1, y1, x2, y2, x3, y3) => {
    checkY90 = false;
    if (
      checkXparallel(x1, y1, x2, y2) == 0 ||
      checkXparallel(x2, y2, x3, y3) == 0 ||
      checkXparallel(x3, y3, x1, y1) == 0
    ) {
      checkY90 = true;
    }
    checkX90 = false;
    if (
      checkYparallel(x1, y1, x2, y2) == 0 ||
      checkYparallel(x2, y2, x3, y3) == 0 ||
      checkYparallel(x3, y3, x1, y1) == 0
    ) {
      checkX90 = true;
    }
    checkPositive = false;
    if (x1 >= 0 && y1 >= 0 && x2 >= 0 && y2 >= 0 && x3 >= 0 && y3 >= 0) {
      checkPositive = true;
    }
  };

  const findCommonPoint = (x1, y1, x2, y2, x3, y3) => {
    if (x1 != x2 && y1 != y2) {
      cPointx = x3;
      cPointy = y3;
    } else if (x2 != x3 && y2 != y3) {
      cPointx = x1;
      cPointy = y1;
    } else if (x3 != x1 && y3 != y1) {
      cPointx = x2;
      cPointy = y2;
    }
  };

  const d1 = (x1, y1, x2, y2, x3, y3) => {
    if (checkXparallel(x1, y1, x2, y2) == 0) {
      // distance1 = findDistance(x1, y1, x2, y2);
      // checkY90 = true;
      if (cPointx == x1 && cPointy == y1) {
        x4.push(x2);
      } else {
        // setX4((prevVal) => {
        //   return [...prevVal, x1];
        // });
        x4.push(x1);
      }
    } else if (checkXparallel(x2, y2, x3, y3) == 0) {
      // distance1 = findDistance(x2, y2, x3, y3);
      // checkY90 = true;
      if (cPointx == x2 && cPointy == y2) {
        // setX4((prevVal) => {
        //   return [...prevVal, x3];
        // });
        x4.push(x3);
      } else {
        // setX4((prevVal) => {
        //   return [...prevVal, x2];
        // });
        x4.push(x2);
      }
    } else if (checkXparallel(x3, y3, x1, y1) == 0) {
      // distance1 = findDistance(x3, y3, x1, y1);
      // checkY90 = true;
      if (cPointx == x3 && cPointy == y3) {
        // setX4((prevVal) => {
        //   return [...prevVal, x1];
        // });
        x4.push(x1);
      } else {
        // setX4((prevVal) => {
        //   return [...prevVal, x3];
        // });
        x4.push(x3);
      }
    }
  };

  const d2 = (x1, y1, x2, y2, x3, y3) => {
    if (checkYparallel(x1, y1, x2, y2) == 0) {
      // distance2 = findDistance(x1, y1, x2, y2);
      // checkX90 = true;
      if (cPointx == x1 && cPointy == y1) {
        // setY4((prevVal) => {
        //   return [...prevVal, y2];
        // });
        y4.push(y2);
      } else {
        // setY4((prevVal) => {
        //   return [...prevVal, y1];
        // });
        y4.push(y1);
      }
    } else if (checkYparallel(x2, y2, x3, y3) == 0) {
      // distance2 = findDistance(x2, y2, x3, y3);
      // checkX90 = true;
      if (cPointx == x2 && cPointy == y2) {
        // setY4((prevVal) => {
        //   return [...prevVal, y3];
        // });
        y4.push(y3);
      } else {
        // setY4((prevVal) => {
        //   return [...prevVal, y2];
        // });
        y4.push(y2);
      }
    } else if (checkYparallel(x3, y3, x1, y1) == 0) {
      // distance2 = findDistance(x3, y3, x1, y1);
      // checkX90 = true;
      if (cPointx == x3 && cPointy == y3) {
        // setY4((prevVal) => {
        //   return [...prevVal, y1];
        // });
        y4.push(y1);
      } else {
        // setY4((prevVal) => {
        //   return [...prevVal, y3];
        // });
        y4.push(y3);
      }
    }
  };

  const MainFunc = (x1, y1, x2, y2, x3, y3) => {
    check90(x1, y1, x2, y2, x3, y3);
    console.log(x1, y1, x2, y2, x3, y3, checkX90, checkY90);
    if (checkX90 && checkY90 && checkPositive) {
      findCommonPoint(x1, y1, x2, y2, x3, y3);
      d1(x1, y1, x2, y2, x3, y3);
      d2(x1, y1, x2, y2, x3, y3);
    } else {
      if (checkPositive == false) {
        x4.push("The coordinates have to be of the 1st quadrant");
        y4.push(" ");
      } else {
        x4.push("invalid coordinates are given");
        y4.push(" ");
      }
    }
  };

  // d1(x1, y1, x2, y2, x3, y3);
  // d2(x1, y1, x2, y2, x3, y3);
  //   MainFunc();
  //   console.log(x4, y4);

  const allReqCoordinates = () => {
    for (let i = 0; i < props.coordinates.length; i++) {
      MainFunc(
        props.coordinates[i][0],
        props.coordinates[i][1],
        props.coordinates[i][2],
        props.coordinates[i][3],
        props.coordinates[i][4],
        props.coordinates[i][5]
      );
    }
    console.log("x4 coor:", x4);
    console.log("y4 coor:", y4);
  };

  allReqCoordinates();

  return (
    <>
      <div className="inputDiv">
        <div className="inputX">
          {x4.map((x4Val) => {
            key += 1;

            return <h5 key={key}>{x4Val}</h5>;
          })}
        </div>
        <div className="inputY">
          {y4.map((y4Val) => {
            key += 1;
            return <h5 key={key}>{y4Val}</h5>;
          })}
        </div>
      </div>
    </>
  );
};

export default Calc;
