import React from "react";
import { insertCardDetail } from "../../state/Card/card.slice";
import { Card } from "../../component/input/Card";
import { TopNavBar } from "../../component/nav/TopNavBar";

export const RegisterCardPage = () => {
  return (
    <>
      <TopNavBar />
      <Card submitHanlder={insertCardDetail} />
    </>
  );
};
