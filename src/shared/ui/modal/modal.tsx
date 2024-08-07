"use client";

import classNames from "classnames";
import { FC, PropsWithChildren, useEffect, useState } from "react";

import { createBem, MODAL_ANIMATION_DELAY, Portal } from "@/shared";

import styles from "./modal.module.scss";
import { IModalProps } from "./modal.types";

const Modal: FC<PropsWithChildren<IModalProps>> = ({ onClose, children, className, isOpen }) => {
  const bem = createBem("modal", styles);

  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && !isMounted) {
      setIsOpening(true);
      setIsMounted(true);
      setTimeout(() => {
        setIsOpening(false);
      }, MODAL_ANIMATION_DELAY);
    } else if (!isOpen && isMounted) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsMounted(false);
      }, MODAL_ANIMATION_DELAY);
    }
  }, [isOpen, isMounted]);

  const mods = {
    [bem("", "is-open")]: isMounted,
    [bem("", "is-closing")]: isClosing,
    [bem("", "is-opening")]: isOpening,
  };

  return (
    <Portal>
      <div className={classNames(bem(""), mods)}>
        <div className={bem("overlay")} onClick={onClose}>
          <div className={classNames(bem("content"), {}, [className])} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
