import { useState } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
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

  function removerTarefa(idDaTarefa) {
    setListaTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== idDaTarefa),
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <TaskForm adicionarTarefa={adicionarTarefa} />
        <Summary listaTarefas={listaTarefas} />
        <WeekBoard
          listaTarefas={listaTarefas}
          marcarConcluida={marcarConcluida}
          removerTarefa={removerTarefa}
        />
      </main>
    </div>
  )
}

export default App
