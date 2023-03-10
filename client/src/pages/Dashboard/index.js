import React, { useEffect, useState } from "react";
import Board from "./DashboardComponents/Board/Board";
import "./index.css";
import Editable from "./DashboardComponents/Editabled/Editable";
function Dashboar() { 
  const [boards, setBoards] = useState(
    []
  );
  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "", 
  });

  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };
  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };
  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };
  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;
    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;
    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;
    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };
  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;
    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;
    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;
    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;
    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);
    setTargetCard({
      bid: "",
      cid: "",
    });
  };
  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };
  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;
    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;
    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;
    tempBoards[index].cards[cardIndex] = card;
    setBoards(tempBoards);
  };
  useEffect(()=>{
    fetch('http://localhost:9000/board',{
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:9000/board",
          "Access-Control-Allow-Credentials":true,
          Authorization:localStorage.getItem('token'),
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
      }
  }).then((d)=>{
    if(d.status === 200){
      return d.json();
    }
    else if(d.status === 401){
      alert(`${d.status} Unauthorized`)
      window.location = '/'
    }
    else{ 
      alert(`${d.status} server error`)
      window.location = '/'}
  }).then((res)=>{
    if(res){
      setBoards(res.data);
      // let id = res.id;
      console.log(res);
    }
  }).catch((er)=>{console.log("error")})
  },[])

function savebutton(){
 fetch("http://localhost:9000/board/",{
  method: "PUT",
  headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:9000/board",
      "Access-Control-Allow-Credentials":true,
      Authorization:localStorage.getItem('token'),
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
      "Access-Control-Max-Age": 86400,
  },
  body: JSON.stringify(boards)
}).then((res)=>{
  if(res.status === 200){
    console.log('update successfuly')
    return res.json()
  }
}).then((res)=>{console.log(res)}).catch((er)=>console.log('error'))
}

function deletetoken(){
  console.log('ok')
   localStorage.removeItem('token')
   window.location= '/';
}
  return (
    <div className="app">
      <div className="app_nav">
        <h1>Board</h1>
      </div>
      <div>
      <button className="savebutton" onClick={deletetoken}>Log out</button>
      <button className="savebutton" onClick={savebutton}>Save</button>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
            />
          ))}
          <div className="app_boards_last">
            <Editable
              displayClass="app_boards_add-board"
              editClass="app_boards_add-board_edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboar;