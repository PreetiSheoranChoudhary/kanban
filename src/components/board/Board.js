import React, { useState } from "react";
import './Board.css';
import { MoreHorizontal } from 'react-feather';
import Card from "../card/Card";
import EditTable from "../Edittable/EditTable";
import DropDown from "../DropDown/DropDown";

function Board(props) {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleCLick = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">
                    To Do
                    <span> {"  "} 2  </span>
                </p>
                <div className="board_top_more" onClick={()=> 
                    setShowDropDown(true)}>
                    <MoreHorizontal className="board_top_icon" />
                    {showDropDown && (
                        <DropDown
                        onClose={() => setShowDropDown(false)}>
                            <div className="board_dropdown">
                                <p style={{display:"flex",justifyContent:"center", alignItems:"center"}}>Delete board</p>
                            </div>

                        </DropDown>
                    )}
                </div>
            </div>
            <div className="board_cards">
                <Card />
                <Card />

                <EditTable
                    displayClass="boards_cards_add"
                    text="Add card"
                    placeholder="Enter card title" />
            </div>
        </div>
    );
}

export default Board;