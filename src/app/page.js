import Title from '@/components/Title'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title title='home' />

      <a href="/about" className="text-blue-500 hover:underline">about</a>
    </main>
  )
}
