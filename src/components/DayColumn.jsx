function DayColumn({ dia, listaTarefas }) {
  const tarefasDoDia = listaTarefas.filter((tarefa) => tarefa.day === dia)

  return (
    <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-4 text-slate-100 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{dia}</h2>
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs">
          {tarefasDoDia.length}
        </span>
      </div>
    </div>
  )
}

export default DayColumn
