import TaskCard from './TaskCard'

function DayColumn({ dia, listaTarefas, marcarConcluida, removerTarefa }) {
  const tarefasDoDia = listaTarefas.filter((tarefa) => tarefa.day === dia)

  return (
    <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-4 text-slate-100 shadow-lg shadow-slate-950/40 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{dia}</h2>
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-200">
          {tarefasDoDia.length}
        </span>
      </div>
      <div className="mt-3">
        {tarefasDoDia.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-900/50 p-4 text-sm text-slate-400">
            Nenhuma tarefa para este dia
          </div>
        )}
        {tarefasDoDia.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            tarefa={tarefa}
            marcarConcluida={marcarConcluida}
            removerTarefa={removerTarefa}
          />
        ))}
      </div>
    </div>
  )
}

export default DayColumn
