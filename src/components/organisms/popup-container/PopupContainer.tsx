import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import "./PopupContainer.scss";

interface PopupProps {
    title: string;
    message: string;
    buttons?: PopupButtonProps[];
    onClick?: () => void;
}
interface PopupButtonProps {
    text: string;
    onClick: any;
    color?: string;
}

function PopupContainer(props: PopupProps) {

    const gameContext = useContext(GameContext);

    function handleGenericClick() {
        gameContext.togglePopup();
    }

    return (
        <div className="popup_container_wrap">
            <div className="popup_container">
                <div className="heading">{props.title}</div>

                <div className="buttons">
                    {props.buttons &&
                        props.buttons.map((button, index) => {
                            return (
                                <div
                                    className="button"
                                    style={{ color: button.color ? button.color : "" }}
                                    onClick={button.onClick}
                                >
                                    {button.text}
                                </div>
                            );
                        })}
                    {!props.buttons && (
                        <div
                            className="button"
                            onClick={props.onClick ? props.onClick : handleGenericClick}
                        >OK</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PopupContainer;
