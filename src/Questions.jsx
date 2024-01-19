import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toogleQuestion }) => {
  return (
    <section className="container">
      <h2>Questions</h2>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toogleQuestion={toogleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
