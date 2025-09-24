export default function Card({ title, desc, accent, icon }) {
  return (
    <div className="card w-80 h-48 rounded-2xl shadow-lg bg-white flex flex-col items-start justify-start p-5">
    
      <div className="flex justify-center w-full text-2xl mb-2">🤖</div>

      {/* Colored content box */}
      <div className={`w-full h-full rounded-lg p-4 ${accent}`}>
        {/* Icon */}
        <div className="text-xl mb-2">{icon}</div>

         {/* Heading */}
        <h3 className="font-semibold text-lg mb-1">{title}</h3>

        {/* Paragraph */}
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
    </div>
  );
}
