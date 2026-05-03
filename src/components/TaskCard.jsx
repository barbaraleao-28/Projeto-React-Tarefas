function TaskCard({ tarefa, marcarConcluida, removerTarefa }) {
  const estiloDaPrioridade = {
    Alta: 'border-amber-400 shadow-lg shadow-amber-400/25',
    Media: 'border-purple-500/30',
    Baixa: 'border-slate-600',
  }

  return (
    <article
      className={`mb-3 rounded-2xl border bg-slate-800/80 p-3 text-slate-100 ${estiloDaPrioridade[tarefa.priority]}`}
    >
      <h3 className="font-medium">{tarefa.title}</h3>
      <p className="mt-2 text-sm text-slate-300">Prioridade: {tarefa.priority}</p>
      <div className="mt-3 space-y-2">
        <button
          type="button"
          className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-2 text-sm font-medium text-white"
          onClick={() => marcarConcluida(tarefa.id)}
        >
          {tarefa.done ? 'Desmarcar' : 'Concluir'}
        </button>
        <button
          type="button"
          className="w-full rounded-2xl border border-slate-600 bg-slate-900/70 px-3 py-2 text-sm font-medium text-slate-200"
          onClick={() => removerTarefa(tarefa.id)}
        >
          Remover
        </button>
      </div>
    </article>
  )
}

export default TaskCard
