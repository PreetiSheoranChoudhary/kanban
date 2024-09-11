import React from "react";
import './Board.css';
import {MoreHorizontal} from 'react-feather';
import Card from "../card/Card";
import EditTable from "../Edittable/EditTable";

function Board(props) {
    return (
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">
                 To Do 
                 <span> {"  "} 2  </span>
                 </p>
                
                <MoreHorizontal className="board_top_icon"/>
            </div>
            <div className="board_cards">
                 <Card/> 
                 <Card/> 
                 <Card/> 
                 <Card/> 
                 <Card/> 
                 <Card/> 
                 <Card/> 
                <EditTable 
                displayClass="boards_cards_add"
                text= "Add card"
                placeholder="Enter card title"/>
            </div>
        </div>
    );
}

export default Board;