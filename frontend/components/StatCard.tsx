export default function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: 'cyan' | 'emerald' | 'rose' | 'violet';
}) {
  const colors = {
    cyan: 'border-cyan-400 text-cyan-400',
    emerald: 'border-emerald-400 text-emerald-400',
    rose: 'border-rose-400 text-rose-400',
    violet: 'border-violet-400 text-violet-400',
  };

  return (
    <div
      className={`p-8 border-2 ${colors[color]} rounded-xl shadow-lg text-center hover:scale-105 transition`}
    >
      <h3 className='text-lg mb-2'>{title}</h3>
      <p className='text-4xl font-bold'>{value}</p>
    </div>
  );
}
