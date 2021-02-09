import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';

const getString = (hook, strands) => Math.sqrt(hook ** 2 + strands ** 2);
const ButtonMask = (props) => {
    const { buttonSize, animateTime, clickPosition } = props;
    const [maskRadius, setMaskRadius] = useState(getString(buttonSize.width, buttonSize.height));
    const [maskPosition, setMaskPosition] = useState(null);
    useEffect(() => {
        if (clickPosition) {
            const { left, top } = clickPosition;
            const x = left > buttonSize.width / 2 ? left : buttonSize.width - left;
            const y = top > buttonSize.height / 2 ? top : buttonSize.height - top;
            const radius = getString(x, y);
            setMaskRadius(radius);
            setMaskPosition({ ...clickPosition });
        }
    }, [buttonSize.height, buttonSize.width, clickPosition]);
    return (jsx("div", Object.assign({ className: "huz-button-mask" }, { children: jsx("span", { style: {
                animationDuration: `${animateTime}ms`,
                width: `${maskRadius * 2}px`,
                height: `${maskRadius * 2}px`,
                left: `${!maskPosition ? "50%" : `${maskPosition.left}px`}`,
                top: `${!maskPosition ? "50%" : `${maskPosition.top}px`}`,
            } }, void 0) }), void 0));
};

const useButton = () => {
    const button = useRef(null);
    const [buttonPlace, setButtonPlace] = useState(null);
    const [buttonSize, setButtonSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        setButtonSize({
            width: button.current?.clientWidth || 0,
            height: button.current?.clientHeight || 0,
        });
        setButtonPlace(button.current?.getBoundingClientRect() || null);
    }, [button]);
    const computeClickPlace = useCallback((clickEvent) => {
        let left;
        let top;
        if (buttonPlace) {
            left = clickEvent.pageX - buttonPlace.left;
            top = clickEvent.pageY - buttonPlace.top;
            return {
                top,
                left,
            };
        }
        return undefined;
    }, [buttonPlace]);
    return {
        buttonRef: button,
        buttonSize,
        buttonPlace,
        computeClickPlace,
    };
};

const useMask = (animateTime) => {
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [timer, setTimer] = useState(0);
    const toggleActive = useCallback(() => {
        if (isActive) {
            clearTimeout(timer);
            setIsBreak(true);
            setIsActive(false);
        }
        else {
            setIsActive(true);
        }
    }, [isActive, timer]);
    useEffect(() => {
        if (isActive) {
            setTimer(setTimeout(() => setIsActive(false), animateTime));
        }
        else if (isBreak) {
            setIsActive(true);
            setIsBreak(false);
        }
    }, [animateTime, isActive, isBreak]);
    return {
        handleMaskAnimation: toggleActive,
        maskVisible: isActive,
    };
};

const ANIMATE_TIME = 325;
const typeHash = {
    normal: "huz-normal-button",
    primary: "huz-primary-button",
    danger: "huz-danger-button",
    link: "huz-link-button",
};
const Button = (props) => {
    const { onClick, type, isContained, disable, children, className, } = props;
    const { buttonRef, buttonSize, computeClickPlace } = useButton();
    const [clickPlace, setClickPlace] = useState(null);
    const { handleMaskAnimation, maskVisible } = useMask(ANIMATE_TIME);
    const handleClick = useCallback((e) => {
        if (disable) {
            return;
        }
        const clickRes = computeClickPlace(e);
        if (clickRes) {
            const { left, top } = clickRes;
            setClickPlace({ left, top });
        }
        handleMaskAnimation();
        if (onClick) {
            onClick(e);
        }
    }, [computeClickPlace, disable, handleMaskAnimation, onClick]);
    const buttonExtraClassName = type ? typeHash[type] : typeHash.normal;
    const buttonClassName = `huz-button ${isContained === undefined || isContained ? "huz-button-contained" : ""} ${disable ? "huz-disable-button" : buttonExtraClassName} ${className || ""}`;
    return (jsxs("button", Object.assign({ className: buttonClassName, ref: buttonRef, onClick: handleClick }, { children: [maskVisible && type !== "link" && (jsx(ButtonMask, { buttonSize: buttonSize, clickPosition: clickPlace, animateTime: ANIMATE_TIME }, void 0)), children] }), void 0));
};

const useInput = () => {
    const [inputSize, setInputSize] = useState({ width: 0, height: 0 });
    const input = useRef(null);
    useEffect(() => {
        if (!input.current) {
            return;
        }
        setInputSize({
            width: input.current.clientWidth,
            height: input.current.clientHeight,
        });
    }, []);
    return {
        input,
        inputSize,
    };
};

const Input = (props) => {
    const { label, value, inputWidth, onChange, onFocus, onBlur, } = props;
    const { input, inputSize } = useInput();
    const [borderClass, setBorderClass] = useState("");
    const [fieldsetClass, setFieldsetClass] = useState("");
    const [legendClass, setLegendClass] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const hasInput = value.length > 0;
    const getInputState = useCallback(() => {
        setBorderClass(isFocused
            ? "transparent-border"
            : isHover
                ? hasInput
                    ? "transparent-border"
                    : "hovered-border"
                : hasInput
                    ? "transparent-border"
                    : "");
        setFieldsetClass(isFocused
            ? "focused-fieldset"
            : isHover
                ? hasInput
                    ? "hovered-fieldset"
                    : "transparent-border"
                : hasInput
                    ? ""
                    : "transparent-border");
        setLegendClass(isFocused ? "legend-up legend-color" : hasInput ? "legend-up" : "");
    }, [hasInput, isFocused, isHover]);
    useEffect(() => {
        getInputState();
    }, [getInputState]);
    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus && onFocus(e);
    };
    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur && onBlur(e);
    };
    const handleInput = (e) => {
        if (onChange) {
            onChange(e);
        }
    };
    return (jsxs("div", Object.assign({ className: "huz-input", style: { width: `${inputWidth}px` } }, { children: [jsxs("fieldset", Object.assign({ className: fieldsetClass }, { children: [jsx("label", Object.assign({ htmlFor: label }, { children: jsx("input", { ref: input, id: label, name: label, type: "text", value: value, onChange: handleInput, onFocus: handleFocus, onBlur: handleBlur, onMouseEnter: () => setIsHover(true), onMouseLeave: () => setIsHover(false) }, void 0) }), void 0),
                    jsx("legend", Object.assign({ className: legendClass, style: {
                            height: `${inputSize.height}px`,
                            lineHeight: `${inputSize.height}px`,
                        } }, { children: label }), void 0)] }), void 0),
            jsx("div", { className: `input-border ${borderClass}`, style: {
                    top: `${inputSize.height / 2}px`,
                    height: `calc(100% - ${inputSize.height / 2}px)`,
                } }, void 0)] }), void 0));
};

var successIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg5LjQzMTEyOCA4NDUuMTA4NTE5YzAuMDMwMjMyLTAuNjg5MjkyIDAuMDcwNTQyLTEuMzc1NTYxIDAuMTA0ODA1LTIuMDYzODQ2Qzg5LjQ2NjM5OSA4NDMuNzIyODggODkuNDMxMTI4IDg0NC40MTIxNzIgODkuNDMxMTI4IDg0NS4xMDg1MTl6IiBmaWxsPSIjMjhDRDQxIiAvPjxwYXRoIGQ9Ik04NDYuMTQ1OTg0IDQwNS40MTI2NTFjLTguMTcyNzQ4LTExLjU4MDkxNS0yNC4xODM2NzYtMTQuMzQzMTIzLTM1Ljc2NDU5MS02LjE3MTM4MkwzNzguNjEyMzg1IDcwMy45MTI0NTMgMjMyLjg3NDQ0OCA0OTYuNjE0ODc3Yy04LjE3Mjc0OC0xMS41Nzk5MDctMjQuMTg0Njg0LTE0LjM0MzEyMy0zNS43NjQ1OTEtNi4xNzEzODItMTEuNTgwOTE1IDguMTcyNzQ4LTE0LjM0MjExNSAyNC4xODQ2ODQtNi4xNzEzODIgMzUuNzY0NTkxbDE2MC40OTYyNDggMjI4LjI5Mjc3MWMwLjI1NDk1NyAwLjM2MTc3OCAwLjUxODk4NSAwLjcxNDQ4NiAwLjc4OTA1OCAxLjA2MDEzOSA4LjM4MDM0MiAxMC42Nzk5OTggMjMuNzU3NDAzIDEzLjAyNzAxOCAzNC45NzU1MzMgNS4xMDkyMjdsNDUyLjc3NjI5Ni0zMTkuNDkzOTlDODUxLjU1NTUxNyA0MzMuMDA0NDkzIDg1NC4zMTc3MjUgNDE2Ljk5MjU1OCA4NDYuMTQ1OTg0IDQwNS40MTI2NTF6IiBmaWxsPSIjMjhDRDQxIiAvPjxwYXRoIGQ9Ik01MDQuNzg3MTIxIDE2LjQ1OTM3MWMtMjc3Ljk4MTI2NiAwLTUwMy4zMzA0MzcgMjI1LjM0ODE2My01MDMuMzMwNDM3IDUwMy4zMjk0MyAwIDI3Ny45ODMyODIgMjI1LjM0OTE3MSA1MDMuMzMwNDM3IDUwMy4zMzA0MzcgNTAzLjMzMDQzNyAyNzcuOTgyMjc0IDAgNTAzLjMzMDQzNy0yMjUuMzQ3MTU2IDUwMy4zMzA0MzctNTAzLjMzMDQzN0MxMDA4LjExNzU1OSAyNDEuODA3NTM0IDc4Mi43NjkzOTUgMTYuNDU5MzcxIDUwNC43ODcxMjEgMTYuNDU5Mzcxek01MDQuNzg3MTIxIDk3MC41NzE3OTJjLTI0OC45NjA0NTIgMC00NTAuNzgxOTg0LTIwMS44MjA1MjQtNDUwLjc4MTk4NC00NTAuNzgyOTkyIDAtMjQ4Ljk1OTQ0NCAyMDEuODIxNTMyLTQ1MC43ODE5ODQgNDUwLjc4MTk4NC00NTAuNzgxOTg0IDI0OC45NjE0NiAwIDQ1MC43ODA5NzcgMjAxLjgyMjU0IDQ1MC43ODA5NzcgNDUwLjc4MTk4NEM5NTUuNTY4MDk4IDc2OC43NTEyNjggNzUzLjc0ODU4MSA5NzAuNTcxNzkyIDUwNC43ODcxMjEgOTcwLjU3MTc5MnoiIGZpbGw9IiMyOENENDEiIC8+PC9zdmc+';

var errorIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkxOC43OTU5MjIgMzU2Ljg1NDY4N2MtMjEuNzk4MTIxLTUxLjQ3NjMxNC01Mi45MDkwNTUtOTcuNjMxMDIxLTkyLjUxNDA5Mi0xMzcuMjM2MDU4LTM5LjYwNTAzNy0zOS42MDUwMzctODUuODYyMDgzLTcwLjgxODMwOS0xMzcuMjM2MDU4LTkyLjUxNDA5MkM2MzUuNzI3MzY0IDEwNC41OTAwNDYgNTc5LjIzNjQ1OCA5My4xMjgxMjMgNTIwLjkwMzQ1OCA5My4xMjgxMjNzLTExNC44MjM5MDYgMTEuNDYxOTIzLTE2OC4xNDIzMTUgMzMuOTc2NDE0Yy01MS40NzYzMTQgMjEuNzk4MTIxLTk3LjYzMTAyMSA1Mi45MDkwNTUtMTM3LjIzNjA1OCA5Mi41MTQwOTJzLTcwLjgxODMwOSA4NS44NjIwODMtOTIuNTE0MDkyIDEzNy4yMzYwNThDMTAwLjQ5NjUwMiA0MTAuMTczMDk2IDg5LjAzNDU3OSA0NjYuNjY0MDAyIDg5LjAzNDU3OSA1MjQuOTk3MDAyczExLjQ2MTkyMyAxMTQuODIzOTA2IDMzLjk3NjQxNCAxNjguMTQyMzE1YzIxLjc5ODEyMSA1MS40NzYzMTQgNTIuOTA5MDU1IDk3LjYzMTAyMSA5Mi41MTQwOTIgMTM3LjIzNjA1OCAzOS42MDUwMzcgMzkuNjA1MDM3IDg1Ljg2MjA4MyA3MC44MTgzMDkgMTM3LjIzNjA1OCA5Mi41MTQwOTIgNTMuMjE2MDcgMjIuNTE0NDkxIDEwOS44MDkzMTQgMzMuOTc2NDE0IDE2OC4xNDIzMTUgMzMuOTc2NDE0czExNC44MjM5MDYtMTEuNDYxOTIzIDE2OC4xNDIzMTUtMzMuOTc2NDE0YzUxLjQ3NjMxNC0yMS43OTgxMjEgOTcuNjMxMDIxLTUyLjkwOTA1NSAxMzcuMjM2MDU4LTkyLjUxNDA5MiAzOS42MDUwMzctMzkuNjA1MDM3IDcwLjgxODMwOS04NS44NjIwODMgOTIuNTE0MDkyLTEzNy4yMzYwNTggMjIuNTE0NDkxLTUzLjIxNjA3IDMzLjk3NjQxNC0xMDkuODA5MzE0IDMzLjk3NjQxNC0xNjguMTQyMzE1Uzk0MS4zMTA0MTQgNDEwLjE3MzA5NiA5MTguNzk1OTIyIDM1Ni44NTQ2ODd6TTUyMC45MDM0NTggOTExLjgzNjg5OGMtMjEzLjI3MzYzNiAwLTM4Ni44Mzk4OTYtMTczLjU2NjI2LTM4Ni44Mzk4OTYtMzg2LjgzOTg5NnMxNzMuNTY2MjYtMzg2LjgzOTg5NiAzODYuODM5ODk2LTM4Ni44Mzk4OTYgMzg2LjgzOTg5NiAxNzMuNTY2MjYgMzg2LjgzOTg5NiAzODYuODM5ODk2UzczNC4xNzcwOTQgOTExLjgzNjg5OCA1MjAuOTAzNDU4IDkxMS44MzY4OTh6IiBmaWxsPSIjRkYzQjMwIiAvPjxwYXRoIGQ9Ik01NDUuMDU1MzY3IDUyNy41NTU0NjdsMTA1LjIwNDA3OC0xMDUuMjA0MDc4YzguODAxMTE5LTguODAxMTE5IDguODAxMTE5LTIzLjEyODUyMyAwLTMxLjgyNzMwNGwwIDBjLTguODAxMTE5LTguODAxMTE5LTIzLjEyODUyMy04LjgwMTExOS0zMS44MjczMDQgMEw1MTMuMjI4MDYzIDQ5NS43MjgxNjMgNDA3LjUxMjI5MyAzOTAuMTE0NzMxYy04LjgwMTExOS04LjgwMTExOS0yMy4xMjg1MjMtOC44MDExMTktMzEuODI3MzA0IDBsMCAwYy04LjgwMTExOSA4LjgwMTExOS04LjgwMTExOSAyMy4xMjg1MjMgMCAzMS44MjczMDRsMTA1LjYxMzQzMiAxMDUuNjEzNDMyTDM3NS4xNzMyOTYgNjMzLjY4MDU5MmMtOC44MDExMTkgOC44MDExMTktOC44MDExMTkgMjMuMTI4NTIzIDAgMzEuODI3MzA0IDguODAxMTE5IDguODAxMTE5IDIzLjEyODUyMyA4LjgwMTExOSAzMS44MjczMDQgMGwxMDYuMTI1MTI1LTEwNi4xMjUxMjUgMTA1LjYxMzQzMiAxMDUuNjEzNDMyYzguODAxMTE5IDguODAxMTE5IDIzLjEyODUyMyA4LjgwMTExOSAzMS44MjczMDQgMCA4LjgwMTExOS04LjgwMTExOSA4LjgwMTExOS0yMy4xMjg1MjMgMC0zMS44MjczMDRMNTQ1LjA1NTM2NyA1MjcuNTU1NDY3eiIgZmlsbD0iI0ZGM0IzMCIgLz48L3N2Zz4=';

const iconHash = {
    success: successIcon,
    error: errorIcon,
};
const Message = (props) => {
    const { messageType, text } = props;
    return (jsxs("div", Object.assign({ className: "huz-message" }, { children: [jsx("span", { children: jsx("img", { src: iconHash[messageType], alt: "" }, void 0) }, void 0),
            jsx("p", { children: text }, void 0)] }), void 0));
};

const Messages = [];
const message = ({ messageType, text }) => {
    const messageOuterWrapper = document.body.querySelector("#huz-message-outer-wrapper");
    if (!messageOuterWrapper) {
        const div = document.createElement("div");
        div.id = "huz-message-outer-wrapper";
        div.style.position = "fixed";
        div.style.left = "0";
        div.style.top = "0";
        div.style.width = `${document.documentElement.clientWidth}px`;
        div.style.height = `${document.documentElement.clientHeight}px`;
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.style.pointerEvents = "none";
        div.style.zIndex = "100";
        document.body.appendChild(div);
    }
    const newWrapper = document.getElementById("huz-message-outer-wrapper");
    Messages.push(jsx(Message, { messageType: messageType, text: text }, Math.random()));
    ReactDOM.render(jsx("div", { children: Messages }, void 0), newWrapper);
    setTimeout(() => {
        Messages.shift();
        ReactDOM.render(jsx("div", { children: Messages }, void 0), newWrapper);
        if (Messages.length === 0
            && document.querySelector("#huz-message-outer-wrapper")) {
            document.body.removeChild(document.querySelector("#huz-message-outer-wrapper"));
        }
    }, 3000);
};

const Box = (props) => {
    const { mode, children } = props;
    const className = `huz-box huz-box-${mode ?? "vertical"}`;
    return jsx("div", Object.assign({ className: className }, { children: children }), void 0);
};

export { Box, Button, Input, Message, message };
