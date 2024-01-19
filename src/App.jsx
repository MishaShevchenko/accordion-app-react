import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setquestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toogleQuestion = (id) => {
    let newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toogleQuestion={toogleQuestion}
      />
    </main>
  );
};
export default App;
