import { useState } from 'react';

interface ColorToken {
  name: string;
  cssVar: string;
  hex: string;
  textColor: string;
  border: string;
  spanClass: string; // for bento layout
}

interface GradientToken {
  name: string;
  cssStyle: string;
  description: string;
  fromHex: string;
  toHex: string;
  spanClass: string;
}

const colorTokens: ColorToken[] = [
  {
    name: 'primary',
    cssVar: 'var(--accent)',
    hex: '#85C61C',
    textColor: 'text-black font-semibold',
    border: 'border-white/20',
    spanClass: 'col-span-1 md:col-span-2 row-span-2 min-h-[180px]',
  },
  {
    name: 'secondary',
    cssVar: 'var(--c-green-300)',
    hex: '#BEED69',
    textColor: 'text-black font-semibold',
    border: 'border-white/20',
    spanClass: 'col-span-1 min-h-[160px]',
  },
  {
    name: 'black',
    cssVar: 'var(--black)',
    hex: '#0A0A0A',
    textColor: 'text-white',
    border: 'border-white/15',
    spanClass: 'col-span-1 min-h-[160px]',
  },
  {
    name: 'white',
    cssVar: 'var(--white)',
    hex: '#E6E6E6',
    textColor: 'text-black font-semibold',
    border: 'border-white/30',
    spanClass: 'col-span-1 min-h-[160px]',
  },
  {
    name: 'gray',
    cssVar: 'var(--deepgray)',
    hex: '#1A1A1A',
    textColor: 'text-white',
    border: 'border-white/15',
    spanClass: 'col-span-1 md:col-span-2 min-h-[160px]',
  },
  {
    name: 'lightgray',
    cssVar: 'var(--lightgray)',
    hex: '#A3A3A3',
    textColor: 'text-black font-semibold',
    border: 'border-white/20',
    spanClass: 'col-span-1 min-h-[160px]',
  },
];

const gradientTokens: GradientToken[] = [
  {
    name: 'Primary Gradient (.grdt)',
    cssStyle: 'linear-gradient(135deg, #BEED69 10%, #85C61C 90%)',
    description: 'Degradado principal de acento utilizado en titulares destacados y botones principales.',
    fromHex: '#BEED69',
    toHex: '#85C61C',
    spanClass: 'col-span-1 md:col-span-2 min-h-[180px]',
  },
  {
    name: 'Glass Dark Surface',
    cssStyle: 'linear-gradient(180deg, rgba(26,26,26,0.9) 0%, rgba(10,10,10,0.95) 100%)',
    description: 'Superficie de cristal oscuro traslúcido para tarjetas Bento y contenedores.',
    fromHex: '#1A1A1A',
    toHex: '#0A0A0A',
    spanClass: 'col-span-1 min-h-[180px]',
  },
  {
    name: 'Emerald Radial Glow',
    cssStyle: 'radial-gradient(circle at center, rgba(133,198,28,0.3) 0%, rgba(10,10,10,0.8) 70%)',
    description: 'Efecto resplandor ambiental de fondo para iluminación y resaltado de áreas.',
    fromHex: '#85C61C',
    toHex: 'Transparent',
    spanClass: 'col-span-1 md:col-span-2 min-h-[180px]',
  },
  {
    name: 'Deep Emerald Gradient',
    cssStyle: 'linear-gradient(135deg, #1B2D06 0%, #375116 100%)',
    description: 'Fondo secundario verde profundo utilizado en secciones de servicios y destacados.',
    fromHex: '#1B2D06',
    toHex: '#375116',
    spanClass: 'col-span-1 min-h-[180px]',
  },
];

export default function BentoColoresDegradados() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <div className="space-y-12">
      {/* Toast Notification */}
      {copiedCode && (
        <div className="fixed bottom-8 right-8 z-50 bg-(--accent) text-black font-display font-medium px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          ¡Copiado al portapapeles: {copiedCode}!
        </div>
      )}

      {/* Colors Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl md:text-2xl font-medium text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-(--accent) inline-block"></span>
            Paleta de Colores del Sitio
          </h3>
          <span className="text-xs font-mono text-(--lightgray)">
            Haz clic en cualquier div para copiar su código Hex
          </span>
        </div>

        {/* Bento Grid for Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {colorTokens.map((color) => (
            <div
              key={color.name}
              onClick={() => handleCopy(color.hex)}
              className={`${color.spanClass} rounded-3xl p-6 relative overflow-hidden border ${color.border} shadow-xl cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between`}
              style={{ backgroundColor: color.hex }}
            >
              {/* Corner 1: Name */}
              <div className="flex items-center justify-between">
                <span className={`font-mono text-base tracking-wider capitalize ${color.textColor}`}>
                  {color.name}
                </span>

                {/* Corner 2: Hex Code */}
                <span className={`font-mono text-sm tracking-widest px-3 py-1 rounded-full bg-black/20 backdrop-blur-md ${color.textColor} border border-white/20 shadow-sm`}>
                  {color.hex}
                </span>
              </div>

              {/* Bottom details */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <span className={`block font-mono text-xs opacity-75 ${color.textColor}`}>
                    {color.cssVar}
                  </span>
                </div>
                
                <span className={`opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono px-2 py-1 rounded bg-black/40 text-white`}>
                  Copiar Hex
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradients Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl md:text-2xl font-medium text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-(--c-green-300) inline-block"></span>
            Degradados & Superficies Glassmorphism
          </h3>
          <span className="text-xs font-mono text-(--lightgray)">
            CSS Linear & Radial Gradients
          </span>
        </div>

        {/* Bento Grid for Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gradientTokens.map((grad) => (
            <div
              key={grad.name}
              onClick={() => handleCopy(grad.cssStyle)}
              className={`${grad.spanClass} rounded-3xl p-6 relative overflow-hidden border border-white/15 shadow-xl cursor-pointer hover:border-(--accent)/60 transition-all duration-300 group flex flex-col justify-between`}
              style={{ background: grad.cssStyle }}
            >
              {/* Corner 1 & Corner 2 */}
              <div className="flex items-start justify-between gap-2 relative z-10">
                <span className="font-display text-lg font-medium text-white drop-shadow-md">
                  {grad.name}
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-black/50 text-(--accent) border border-white/10 backdrop-blur-md shadow-sm shrink-0">
                  {grad.fromHex} ➔ {grad.toHex}
                </span>
              </div>

              {/* Description and Copy button */}
              <div className="mt-8 relative z-10 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4">
                <p className="text-xs text-gray-200 font-sans leading-relaxed">
                  {grad.description}
                </p>
                <button
                  type="button"
                  className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg bg-(--accent) text-black font-semibold hover:bg-white transition-colors"
                >
                  Copiar CSS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
