import { useState, forwardRef } from "react";
import image from "~/assets/image";

import className from "classnames/bind";
import style from "./Images.module.scss";
const cx = className.bind(style);

const Images = forwardRef(
  (
    { src, alt, fallback: customFallback = image.noImg, className, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleOnError = () => {
      setFallback(customFallback);
    };

    const classes = cx("wrapper", {
      [className]: className,
    });

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
      <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        className={classes}
        {...props}
        onError={handleOnError}
      />
    );
  }
);

export default Images;
