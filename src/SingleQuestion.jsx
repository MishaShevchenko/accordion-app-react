import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toogleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            toogleQuestion(id);
          }}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;

// import { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// const SingleQuestion = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false);
//   return (
//     <article className="question">
//       <header>
//         <h5>{title}</h5>
//         <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
//           {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       {showInfo && <p>{info}</p>}
//     </article>
//   );
// };
// export default SingleQuestion;
