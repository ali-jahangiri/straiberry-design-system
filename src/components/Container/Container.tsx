import React from "react";
import "./container.style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, ...elementRestProperty }) => (
    <div {...elementRestProperty} className={`container ${elementRestProperty?.className || ""}`}>
        {children}
    </div>
)


export default Container;