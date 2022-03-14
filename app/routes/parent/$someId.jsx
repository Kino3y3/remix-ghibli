import React from "react";
import { useParams } from "remix";

export default function someId() {
  const { someId } = useParams();
  return <div>I am dynamic {someId}</div>;
}
