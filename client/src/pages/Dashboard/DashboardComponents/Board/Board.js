// import React from "react"
// import './Board.css'
// import {MoreHorizontal} from 'react-feather'
// import Card from "../Card/Card"
// import Editable from "../Editable/Editable"
// import Dropdown from "../Dropdown/Dropdown"

// function Board()
// {

    

//     return(
//         <div className="board">
//             <div className="board_top">
//                 <p className="board_top_title">To Do <span>2</span></p>
//                 <div className="board_top_more">
//                     <MoreHorizontal/>
//                     <Dropdown>
//                         <div className="board_dropdown">
//                            <p>Delete Board</p>
//                         </div>  
//                     </Dropdown>
//                 </div>
                
//             </div>
//             <div className="board_cards custom-scroll">
//                 <Card/>
//                 <Card/>
//                 <Card/>
//                 <Editable displayClass="board_cards_add" text="Add Card" placeholder="Enter Card Title"/>
//             </div>
//         </div>
//     )
// }

// export default Board
// import React, { useState } from "react";
// import { MoreHorizontal } from "react-feather";

// import Card from "../Card/Card";
// import Dropdown from "../Dropdown/Dropdown";
// import Editable from "../Editabled/Editable";

// import "./Board.css";

// function Board(props) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <div className="board">
//       <div className="board_header">
//         <p className="board_header_title">
//           {props.board?.title}
//           <span>{props.board?.cards?.length || 0}</span>
//         </p>
//         <div
//           className="board_header_title_more"
//           onClick={() => setShowDropdown(true)}
//         >
//           <MoreHorizontal />
//           {showDropdown && (
//             <Dropdown
//               class="board_dropdown"
//               onClose={() => setShowDropdown(false)}
//             >
//               <p onClick={() => props.removeBoard()}>Delete Board</p>
//             </Dropdown>
//           )}
//         </div>
//       </div>
//       <div className="board_cards custom-scroll">
//         {props.board?.cards?.map((item) => (
//           <Card
//             key={item.id}
//             card={item}
//             boardId={props.board.id}
//             removeCard={props.removeCard}
//             dragEntered={props.dragEntered}
//             dragEnded={props.dragEnded}
//             updateCard={props.updateCard}
//           />
//         ))}
//         <Editable
//           text="+ Add Card"
//           placeholder="Enter Card Title"
//           displayClass="board_add-card"
//           editClass="board_add-card_edit"
//           onSubmit={(value) => props.addCard(props.board?.id, value)}
//         />
//       </div>
//     </div>
//   );
// }

// export default Board;
import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
            <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
    </>
  );
}

export default Board;