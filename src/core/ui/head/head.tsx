"use client";

import React, { FC } from "react";

import { IHeadProps } from "./head.types";

const Head: FC<IHeadProps> = async ({ locale }) => {
  return <head lang={locale}></head>;
};
export default Head;
