"use client";

import classNames from "classnames";
import dynamic from "next/dynamic";
import { FC } from "react";

import { createBem } from "@/shared";

import styles from "./icon.module.scss";
import { IIconProps } from "./icon.types";

const Icon: FC<IIconProps> = ({ name, folder = "", className, onClick, ...props }) => {
  const bem = createBem("icon", styles);
  const Svg = dynamic(() =>
    import(`@/public/assets/icons/${folder ? `${folder}/` : ""}${name}.svg`)
      .then(module => module.default)
      .catch(() => {
        console.warn(`Icon ${name} not found`);
      })
  );

  return (
    <div onClick={onClick} className={classNames(bem(""), className)}>
      {Svg ? <Svg {...props} /> : null}
    </div>
  );
};

export default Icon;
