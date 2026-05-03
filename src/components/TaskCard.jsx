function TaskCard({ tarefa, marcarConcluida }) {
  return (
    <article className="mb-3 rounded-2xl border border-purple-500/20 bg-slate-800/80 p-3 text-slate-100">
      <h3 className="font-medium">{tarefa.title}</h3>
      <p className="mt-2 text-sm text-slate-300">Prioridade: {tarefa.priority}</p>
      <button
        type="button"
        className="mt-3 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-2 text-sm font-medium text-white"
        onClick={() => marcarConcluida(tarefa.id)}
      >
        {tarefa.done ? 'Desmarcar' : 'Concluir'}
      </button>
    </article>
  )
}

export default TaskCard
