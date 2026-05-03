import { useState } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import StarField from './components/StarField'
import TaskForm from './components/TaskForm'
import WeekBoard from './components/WeekBoard'
import tarefasIniciais from './data/tasks.json'

function App() {
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)
  const [filtroAtual, setFiltroAtual] = useState('todas')

  function adicionarTarefa(novaTarefa) {
    setListaTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      {
        id: Date.now(),
        title: novaTarefa.title,
        day: novaTarefa.day,
        priority: novaTarefa.priority,
        done: false,
      },
    ])
  }

  function marcarConcluida(idDaTarefa) {
    setListaTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === idDaTarefa ? { ...tarefa, done: !tarefa.done } : tarefa,
      ),
    )
  }

  function removerTarefa(idDaTarefa) {
    setListaTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== idDaTarefa),
    )
  }

  const tarefasFiltradas = listaTarefas.filter((tarefa) => {
    if (filtroAtual === 'pendentes') {
      return !tarefa.done
    }

    if (filtroAtual === 'concluidas') {
      return tarefa.done
    }

    return true
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <StarField />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8">
        <TaskForm adicionarTarefa={adicionarTarefa} />
        <Summary listaTarefas={listaTarefas} />
        <section className="mb-6 rounded-3xl border border-purple-500/30 bg-slate-800/60 p-5 text-slate-100 backdrop-blur">
          <h2 className="mb-3 text-lg font-semibold text-yellow-300">Filtros</h2>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                filtroAtual === 'todas'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'bg-slate-900/70 text-slate-200'
              }`}
              onClick={() => setFiltroAtual('todas')}
            >
              Todas
            </button>
            <button
              type="button"
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                filtroAtual === 'pendentes'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'bg-slate-900/70 text-slate-200'
              }`}
              onClick={() => setFiltroAtual('pendentes')}
            >
              Pendentes
            </button>
            <button
              type="button"
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                filtroAtual === 'concluidas'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'bg-slate-900/70 text-slate-200'
              }`}
              onClick={() => setFiltroAtual('concluidas')}
            >
              Concluidas
            </button>
          </div>
        </section>
        <WeekBoard
          listaTarefas={tarefasFiltradas}
          marcarConcluida={marcarConcluida}
          removerTarefa={removerTarefa}
        />
        </main>
      </div>
    </div>
  )
}

export default App
