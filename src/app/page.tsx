"use client";
import { getQuestion } from "@/redux/features/questionSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const loading = useSelector((state: any) => state.question.loading);

  const question = useSelector((state: any) => state.question.question);

  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(getQuestion(1));
  }, []);
  return (
    <div className="">
      <h1>Say hi</h1>
    </div>
  );
}
