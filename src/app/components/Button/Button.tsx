import React, { forwardRef } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref) => {
        return (
            <button ref={ref} className={styles.btn} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
