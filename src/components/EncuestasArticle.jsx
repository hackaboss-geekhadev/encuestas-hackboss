import Link from 'next/link'

const EncuestasArticle = (props) => {
  const { encuesta } = props
  const { id, name, slug, description } = encuesta
  return (
    <Link key={id} href={`/encuesta/${slug}`}>
      <article key={id} className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-2xl font-bold text-blue-500">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </article>
    </Link>
  )
}

export default EncuestasArticle
