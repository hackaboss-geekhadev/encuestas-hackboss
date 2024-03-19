import QuestionsList from '@/components/QuestionsList'
import { ENCUESTAS } from '@/database/encuestas'
const ENCUESTA = ENCUESTAS[0]

export default function EncuestaPage () {
  return (
    <>
      <h2 className="text-4xl font-bold text-blue-500">
        Detalle de la encuesta ????
      </h2>

      {ENCUESTA && (
        <section className="flex flex-col gap-10">
          <QuestionsList questions={ENCUESTA.questions} />
        </section>
      )}
    </>
  )
}
