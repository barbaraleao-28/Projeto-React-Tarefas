import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import WeekBoard from './components/WeekBoard'
import tarefasIniciais from './data/tasks.json'

function App() {
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)

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

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <TaskForm adicionarTarefa={adicionarTarefa} />
        <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-5 text-slate-100 backdrop-blur">
          Tarefas carregadas: <strong>{listaTarefas.length}</strong>
        </div>
        <WeekBoard
          listaTarefas={listaTarefas}
          marcarConcluida={marcarConcluida}
        />
      </main>
    </div>
  )
}

export default App
