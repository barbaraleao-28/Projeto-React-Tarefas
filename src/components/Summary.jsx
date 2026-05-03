function Summary({ listaTarefas }) {
  const total = listaTarefas.length
  const concluidas = listaTarefas.filter((tarefa) => tarefa.done).length
  const pendentes = total - concluidas

  return (
    <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-4 text-slate-100 backdrop-blur">
        <p className="text-sm text-slate-300">Total</p>
        <strong className="text-2xl">{total}</strong>
      </div>
      <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-4 text-slate-100 backdrop-blur">
        <p className="text-sm text-slate-300">Concluidas</p>
        <strong className="text-2xl">{concluidas}</strong>
      </div>
      <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-4 text-slate-100 backdrop-blur">
        <p className="text-sm text-slate-300">Pendentes</p>
        <strong className="text-2xl">{pendentes}</strong>
      </div>
    </section>
  )
}

export default Summary
