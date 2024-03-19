import QuestionsArticle from '@/components/QuestionsArticle'

const QuestionsList = ({ questions }) => {
  console.log(questions)
  return (
    <section className="flex flex-col gap-10">
      {questions.map(({ id, question }) => (
        <QuestionsArticle key={id} question={question} />
      ))}
    </section>
  )
}

export default QuestionsList
