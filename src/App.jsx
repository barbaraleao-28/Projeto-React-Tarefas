import { useState } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import StarField from './components/StarField'
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <StarField />
      <div className="relative z-10">
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
    </div>
  )
}

export default App
