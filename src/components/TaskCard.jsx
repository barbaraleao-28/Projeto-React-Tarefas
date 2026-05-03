function TaskCard({ tarefa }) {
  return (
    <article className="mb-3 rounded-2xl border border-purple-500/20 bg-slate-800/80 p-3 text-slate-100">
      <h3 className="font-medium">{tarefa.title}</h3>
      <p className="mt-2 text-sm text-slate-300">Prioridade: {tarefa.priority}</p>
    </article>
  )
}

export default TaskCard
