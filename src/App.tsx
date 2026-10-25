import { itens } from './data/mock'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <h1 className="text-3xl font-bold text-cyan-400">Base do minicurso</h1>
      <p className="mt-2 text-slate-400">Se você está vendo esta tela, o projeto está rodando.</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {itens.map((item) => (
          <li key={item.id} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <h2 className="font-semibold">{item.nome}</h2>
            <p className="mt-1 text-sm text-slate-400">{item.descricao}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
