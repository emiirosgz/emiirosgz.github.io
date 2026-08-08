import { useState } from 'react';

const fonts = [
  {
    name: 'Space Grotesk',
    variable: 'var(--display)',
    fontFamily: '"Space Grotesk", sans-serif',
    usage: 'Títulos principales (H1, H2, H3, H4, H5) y encabezados de sección',
    weights: ['Medium (500)', 'Bold (700)'],
    sampleSentence: 'Diseño visual y desarrollo web con precisión geométrica.',
  },
  {
    name: 'Inter',
    variable: 'var(--sans)',
    fontFamily: '"Inter", sans-serif',
    usage: 'Cuerpo de texto, párrafos, tarjetas, menús y UI general',
    weights: ['Regular (400)', 'Medium (500)'],
    sampleSentence: 'Especializada en la creación de experiencias visuales atractivas y efectivas para productos digitales.',
  },
  {
    name: 'UI Monospace',
    variable: 'var(--mono)',
    fontFamily: 'ui-monospace, SFMono-Regular, monospace',
    usage: 'Código, etiquetas de estado, métricas y badges técnicos (.font-mono)',
    weights: ['Regular (400)'],
    sampleSentence: 'const developer = { name: "Emireth Rosas", role: "UI/UX & Web Dev" };',
  },
];

export default function DemostracionFuentes() {
  const [testText, setTestText] = useState('Emireth Rosas ─ Creative Web Designer');

  return (
    <div className="space-y-8">
      {/* Dynamic Text Input Tester */}
      <div className="bg-white/3 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="font-display text-lg font-medium text-white">
              Probador de Tipografía Interactivo
            </h4>
            <p className="text-sm text-(--lightgray)">
              Escribe un texto personalizado para previsualizarlo simultáneamente en las 3 fuentes del sitio.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-(--accent)/20 text-(--accent) border border-(--accent)/30">
            En vivo
          </span>
        </div>

        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Escribe algo aquí..."
          className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-3.5 text-white font-sans focus:outline-none focus:border-(--accent) transition-colors text-base"
        />
      </div>

      {/* Font Specimen Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {fonts.map((font) => (
          <div
            key={font.name}
            className="bg-white/2 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-(--accent)/40 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white group-hover:text-(--accent) transition-colors"
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.name}
                  </h3>
                  <code className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-(--accent)">
                    {font.variable}
                  </code>
                </div>
                <p className="text-sm text-(--lightgray)">{font.usage}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {font.weights.map((w) => (
                  <span
                    key={w}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-300"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Live User Input Preview */}
            <div className="mb-6">
              <span className="block text-xs font-mono text-(--lightgray)/60 uppercase tracking-wider mb-2">
                Vista previa en tiempo real
              </span>
              <p
                className="text-2xl md:text-4xl text-white wrap-break-word transition-all leading-tight"
                style={{ fontFamily: font.fontFamily }}
              >
                {testText || 'Escribe tu texto...'}
              </p>
            </div>

            {/* Character Set Specimen */}
            <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
              <span className="block text-[11px] font-mono text-(--lightgray)/60 mb-1">
                Juego de caracteres
              </span>
              <p
                className="text-sm md:text-base text-gray-300 tracking-wider overflow-x-auto whitespace-nowrap"
                style={{ fontFamily: font.fontFamily }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ  abcdefghijklmnopqrstuvwxyz  0123456789  &!@#$%&amp;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
