export default function Card({ title, desc, accent, icon }) {
  return (
    <div className="card w-80 h-48 rounded-2xl shadow-lg bg-white flex flex-col items-start justify-start p-5">
      {/* Top robot icon */}
      <div className="flex justify-center w-full text-3xl mb-3">🤖</div>

      {/* Inner colored box */}
      <div className={`inner-box w-full h-full rounded-lg p-4 ${accent}`}>
        {/* Icon */}
        <div className="icon text-xl">{icon}</div>

        {/* Title */}
        <h3 className="title">{title}</h3>

        {/* Paragraph */}
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}
