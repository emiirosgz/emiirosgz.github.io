import { useState } from "react";

type Paso = {
  titulo: string;
  descripcion: string;
};

type Servicio = {
  id: string;
  encabezado: string;
  introduccion: string;
  pasos: Paso[];
  condiciones: string;
};

interface Props {
  flujosTrabajo: Servicio[];
}

export default function WorkflowFilter({ flujosTrabajo }: Props) {
  const [servicioActivo, setServicioActivo] = useState(flujosTrabajo[0]);

  return (
    <>
      {/* Filtros */}
      <div className="mb-12 flex flex-wrap gap-3 items-center">
        <span className="font-mono text-[#A1A1AA]"> Servicio: </span>

        {flujosTrabajo.map((servicio) => (
          <button
            key={servicio.id}
            onClick={() => setServicioActivo(servicio)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors cursor-pointer ${
              servicioActivo.id === servicio.id
                ? "border-(--accent) text-(--accent)"
                : "border-white/10 text-(--lightgray) hover:text-(--accent)"
            }`}
          >
            {servicio.encabezado}
          </button>
        ))}
      </div>

      {/* Encabezado */}
      <div className="space-y-6 mb-12">
        <span className="font-mono text-xs text-(--accent) uppercase tracking-widest block mb-1">
            // Trabajemos juntos
        </span>
        <h1 className="text-3xl md:text-5xl font-light leading-tight">
          Impulsa tu proyecto con <br />
          <span className="text-(--accent)">{servicioActivo.encabezado}</span> en
          un proceso claro y estructurado.
        </h1>

        <p className="text-lg text-[#A1A1AA]">
          {servicioActivo.introduccion}
        </p>
      </div>

      {/* Pasos */}
      <div className="space-y-12">
        {servicioActivo.pasos.map((paso, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-2xl font-medium">{paso.titulo}</h3>
            <p className="text-[#A1A1AA]">{paso.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Condiciones */}
      <div className="mt-16 pt-10 border-t border-white/10">
        <h3 className="text-xl mb-4">Condiciones del proyecto</h3>
        <p className="text-[#A1A1AA]">
          {servicioActivo.condiciones}
        </p>
      </div>
    </>
  );
}
