import { keys } from "@material-ui/core/styles/createBreakpoints";
import {
  SentimentSatisfied,
  SentimentSatisfiedAltTwoTone,
} from "@material-ui/icons";
import React, { useCallback, useState, useEffect } from "react";
import styles from "../styles/Visualizer.module.css";
import { insertionSort } from "./sorts/bubblesort";
import { sorted } from "./sorts/sorted";
import { Bar } from "./Bar";

const ARR_SIZE = 180;

export const Visualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<boolean[]>([]);

  const resetArray = (min = 0, max = 100) => {
    const new_array = [];
    for (let i = 0; i < ARR_SIZE; i++) {
      new_array.push(min + Math.floor(Math.random() * (max - min)));
    }
    setArray(new_array);
  };

  const insertionSortAnimation = (array: number[], i = 0) => {
    animationHelper(i, ...array, insertionSort).then((res: number[]) => {
      if (!sorted(res)) {
        insertionSortAnimation(res, i + 1);
      }
    });
  };

  const selectionSort = (array: number[], curr: number) => {
    console.log(curr);
    if (array.length === 0) {
      return undefined;
    }
    let min = array[curr];
    let min_i = curr;
    for (let i = curr; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
        min_i = i;
      }
    }
    let result = [...array];
    [result[min_i], result[curr]] = [result[curr], result[min_i]];
    return result;
  };

  const selectionSortAnimation = (array: number[], i = 0) => {
    animationHelper(i, ...array, selectionSort).then((res: number[]) => {
      if (!sorted(res)) {
        selectionSortAnimation(res, i + 1);
      }
    });
  };

  const animationHelper = async (
    i: number,
    prev: number[],
    sort: (arr: number[], n: number) => number[]
  ) => {
    const waitFor = (delay: number) =>
      new Promise((res, _) => {
        setTimeout((_) => {
          let newArr = [...prev];
          newArr = sort(newArr, 1);
          setArray(newArr);
          setHighlighted(highlightElements(prev, newArr));
          res(newArr);
        }, 0.5);
      });
    return await waitFor(i);
  };

  const highlightElements = (prev: number[], curr: number[]) => {
    let res = new Array(ARR_SIZE);
    for (let i = 0; i < ARR_SIZE; i++) {
      if (prev[i] != curr[i]) {
        res[i] = true;
      } else {
        res[i] = false;
      }
    }
    return res;
  };

  useEffect(() => {});

  return (
    <div>
      <div className={styles["controls"]}>
        <button
          className={styles["interactions"]}
          onClick={() => resetArray(0, 100)}
        >
          {" "}
          Reset Array{" "}
        </button>
        <button
          className={styles["interactions"]}
          onClick={() => insertionSortAnimation(array)}
        >
          Insertion Sort!
        </button>
        <button
          className={styles["interactions"]}
          onClick={() => selectionSortAnimation(array)}
        >
          Selection Sort!
        </button>
      </div>
      <div className={styles["array-container"]}>
        {array.map((value, index) => {
          return (
            <Bar
              className={styles["array-element"]}
              highlighted={highlighted[index]}
              key={index}
              style={{ height: `${value * 5}px` }}
            ></Bar>
          );
        })}
      </div>
    </div>
  );
};
