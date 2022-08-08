import React, { useRef, useState } from "react";
import "./coordinate1.css";
import Calc from "./Calc";
const Coordinate1 = () => {
  const [countIds, setCountIds] = useState(1);
  //   console.log(counntIds);
  const keyRef = useRef(0);
  const finalArr = useRef([]);
  let flag = true;

  const [finalCoordinates, setFinalCoordinates] = useState(null);

  const inputBoxesX = [];
  const inputBoxesY = [];
  const addInputBoxes = () => {
    for (let i = 0; i < countIds; i++) {
      let num = 1;
      while (num < 4) {
        keyRef.current = keyRef.current + 1;

        inputBoxesX.push(
          <input
            id={`inputId${i}x${num}`}
            // class={`x${num}`}
            key={keyRef.current + "row"}
            className="innerInput"
          ></input>
        );
        keyRef.current = keyRef.current + 1;
        inputBoxesY.push(
          <input
            id={`inputId${i}y${num}`}
            // class={`y${num}`}
            key={keyRef.current + "col"}
            className="innerInput"
          ></input>
        );
        num += 1;
      }
    }
  };
  addInputBoxes();

  const submitHandler = (event) => {
    event.preventDefault();
    finalArr.current = [];
    for (let k = 0; k < countIds; k++) {
      let temp = [];
      let num2 = 1;
      while (num2 < 4) {
        temp.push(document.getElementById(`inputId${k}x${num2}`).value);
        temp.push(document.getElementById(`inputId${k}y${num2}`).value);
        num2 += 1;
      }
      finalArr.current.push(temp);
      //   console.log(temp);
    }
    console.log(finalArr.current);

    setFinalCoordinates(<Calc coordinates={finalArr.current}></Calc>);
  };

  return (
    <>
      <div className="header-container">
        <h5 className="description">add coordinate points</h5>
        <button
          className="addButton"
          onClick={(event) => {
            setCountIds((prevId) => prevId + 1);
          }}
        >
          Add
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="inputDiv">
          <div className="inputX">
            <h6 className="coordinate-heading">X Co-ordinate</h6>
            {inputBoxesX}
          </div>
          <div className="inputY">
            <h6 className="coordinate-heading">Y Co-ordinate</h6>
            {inputBoxesY}
          </div>
          <div className="final-coor">{finalCoordinates}</div>
        </div>

        <div className="footer">
          <div className="submit_reset">
            <button type="submit" className="submit">
              submit
            </button>
            <button
              className="reset"
              onClick={() => {
                setCountIds(1);
              }}
            >
              reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Coordinate1;
