import { useState } from 'react'
import Header from './components/Header'
import tarefasIniciais from './data/tasks.json'

function App() {
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-5 text-slate-100 backdrop-blur">
          Tarefas carregadas: <strong>{listaTarefas.length}</strong>
        </div>
      </main>
    </div>
  )
}

export default App
