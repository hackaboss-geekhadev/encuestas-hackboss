const QuestionsArticle = ({ id, question }) => {
  return (
    <article className="flex flex-col">
      <h4 className="text-xl font-bold text-white">
        {question}
      </h4>
      <input
        type="search"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={`Respuesta a ${question}`}
        required />
    </article>
  )
}

export default QuestionsArticle
