// import React, { useState } from "react";
// import { X } from "react-feather";
// import './Editable.css'

// function Editable(props){
//     const [showEdit,setShowEdit]=useState(false)
//     return(
//         <div className="editable">
//             {
//                 showEdit ? 
//                 <form className={`editable_edit ${props.editClass || ""}`}
//                 onSubmit={(event)=>{event.preventDefault() 
//                 if(props.onSubmit)props.onSubmit()}}>
//                 <input autoFocus type="text" defaultValue={props.text} placeholder={props.placeholder || "Enter Items"}/>
//                 <div className="editable_edit_footer">
//                 <button type="submit">{props.buttonText || "Add"}</button>
//                 <X onClick={()=>setShowEdit(false)}/>
//                 </div>
//             </form>
//            :<p className={`editable_display ${props.displayClass || ""}`} onClick={()=>setShowEdit(true)}>{props.text || "Add item"}</p> 
//            }
//         </div>
//     )
// }
// export default Editable

// import React, { useState } from "react";

// import { X } from "react-feather";

// import "./Editable.css";

// function Editable(props) {
//   const [isEditable, setIsEditable] = useState(false);
//   const [inputText, setInputText] = useState(props.defaultValue || "");

//   const submission = (e) => {
//     e.preventDefault();
//     if (inputText && props.onSubmit) {
//       setInputText("");
//       props.onSubmit(inputText);
//     }
//     setIsEditable(false);
//   };

//   return (
//     <div className="editable">
//       {isEditable ? (
//         <form
//           className={`editable_edit ${props.editClass ? props.editClass : ""}`}
//           onSubmit={submission}
//         >
//           <input
//             type="text"
//             value={inputText}
//             placeholder={props.placeholder || props.text}
//             onChange={(event) => setInputText(event.target.value)}
//             autoFocus
//           />
//           <div className="editable_edit_footer">
//             <button type="submit">{props.buttonText || "Add"}</button>
//             <X onClick={() => setIsEditable(false)} className="closeIcon" />
//           </div>
//         </form>
//       ) : (
//         <p
//           className={`editable_display ${
//             props.displayClass ? props.displayClass : ""
//           }`}
//           onClick={() => setIsEditable(true)}
//         >
//           {props.text}
//         </p>
//       )}
//     </div>
//   );
// }

// export default Editable;

import React, { useState } from "react";

import { X } from "react-feather";

import "./Editable.css";

function Editable(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && props.onSubmit) {
      setInputText("");
      props.onSubmit(inputText);
    }
    setIsEditable(false);
  };

  return (
    <div className="editable">
      {isEditable ? (
        <form
          className={`editable_edit ${props.editClass ? props.editClass : ""}`}
          onSubmit={submission}
        >
          <input
            type="text"
            value={inputText}
            placeholder={props.placeholder || props.text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setIsEditable(false)} className="closeIcon" />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${
            props.displayClass ? props.displayClass : ""
          }`}
          onClick={() => setIsEditable(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}

export default Editable;