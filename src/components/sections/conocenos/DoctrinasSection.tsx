import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Sparkles,
  Church,
  Flame,
  Gift,
  Heart,
  Users,
  ShieldCheck,
  Droplets,
  GraduationCap,
  HeartPulse,
  Sun,
  Crown,
  Scale,
  Compass,
  ExternalLink,
  X,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import { DOCTRINAS_LADP, type Doctrina } from "@/data/doctrinas";

// Mapeo dinámico de íconos temáticos para cada una de las 16 doctrinas
const DOCTRINA_ICONS: Record<number, React.ElementType> = {
  1: BookOpen, // La inspiración de las Sagradas Escrituras
  2: Sparkles, // El único Dios verdadero
  3: Church, // El Señor Jesucristo
  4: Flame, // El Espíritu Santo
  5: Flame, // El Bautismo en el Espíritu Santo (Cardinal)
  6: Gift, // Los dones y el fruto del Espíritu Santo
  7: Users, // El hombre
  8: ShieldCheck, // La salvación (Cardinal)
  9: Droplets, // Las ordenanzas
  10: Church, // La Iglesia
  11: GraduationCap, // Los ministros de la Palabra
  12: HeartPulse, // La Sanidad Divina (Cardinal)
  13: Sun, // La segunda venida de Cristo (Cardinal)
  14: Crown, // El reino milenial de Cristo
  15: Scale, // El Juicio Final
  16: Compass, // Cielos Nuevos y Tierra Nueva
};

export default function DoctrinasSection() {
  const [selectedDoctrina, setSelectedDoctrina] = useState<Doctrina | null>(null);

  // Bloquear scroll al abrir modal y escuchar tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDoctrina(null);
      }
    };

    if (selectedDoctrina) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDoctrina]);

  return (
    <section
      id="valores"
      className="py-18 sm:py-24 md:py-28 bg-[#B59A7C] text-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Centralizada (Inspirada en imagen referencial) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/25 shadow-xs">
            <Bookmark className="size-3.5 text-white" />
            16 Verdades Fundamentales · LADP
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Nuestras Creencias Fundamentales
          </h2>

          <p className="mt-4 text-white/95 text-base sm:text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Como congregación afiliada a Las Asambleas de Dios del Perú,
            profesamos 16 verdades doctrinales basadas en las Sagradas
            Escrituras que norman nuestra fe, conducta y vida en comunidad.
          </p>
        </div>

        {/* Grilla de 16 Doctrinas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {DOCTRINAS_LADP.map((doc) => {
            const Icon = DOCTRINA_ICONS[doc.numero] || BookOpen;
            const isCardinal = doc.isCardinal;

            return (
              <article
                key={doc.numero}
                className={`group rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative ${
                  isCardinal
                    ? "bg-[#5E7A60] text-white border border-white/15"
                    : "bg-[#FAF5EE] text-[#2B2521] border border-black/5"
                }`}
              >
                {/* Parte Superior: Ícono y Categoría */}
                <div className="w-full flex flex-col items-center">
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                        isCardinal
                          ? "bg-white/20 text-white"
                          : "bg-[#7D5836]/10 text-[#7D5836]"
                      }`}
                    >
                      {doc.numeroFormatted}
                    </span>

                    {isCardinal && (
                      <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#B59A7C] text-white shadow-xs">
                        Doctrina Cardinal
                      </span>
                    )}
                  </div>

                  {/* Ícono centrado */}
                  <div
                    className={`size-12 rounded-2xl flex items-center justify-center mb-3 shadow-xs transition-transform duration-300 group-hover:scale-110 ${
                      isCardinal
                        ? "bg-white/20 text-white"
                        : "bg-[#7D5836]/10 text-[#2B2521]"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Título de la Doctrina */}
                  <h3
                    className={`font-heading font-bold text-lg sm:text-xl leading-snug mb-3 ${
                      isCardinal ? "text-white" : "text-[#2B2521]"
                    }`}
                  >
                    {doc.titulo}
                  </h3>

                  {/* Resumen limpio sin versículos */}
                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed mb-6 ${
                      isCardinal ? "text-white/90" : "text-[#5C534D]"
                    }`}
                  >
                    {doc.resumen}
                  </p>
                </div>

                {/* Botón de Acción centrado (Estilo fiel a la imagen referencial) */}
                <div className="w-full pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctrina(doc)}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#B59A7C] hover:bg-[#9F8367] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                    aria-label={`Leer más sobre ${doc.titulo}`}
                  >
                    <span>LEER MÁS</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota al pie con enlace oficial */}
        <div className="mt-14 text-center">
          <p className="text-white/85 text-xs sm:text-sm font-body">
            Conoce la declaración teológica completa y oficial en{" "}
            <a
              href="https://ladpregionlimacentro.com/en-que-creeemos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 font-semibold hover:text-[#FAF5EE] transition-colors"
            >
              Las Asambleas de Dios del Perú - Región Lima Centro
            </a>
          </p>
        </div>
      </div>

      {/* MODAL DETALLADO CON DECLARACIÓN Y REFERENCIAS BÍBLICAS */}
      {selectedDoctrina && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedDoctrina(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 text-left shadow-2xl border border-black/10 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setSelectedDoctrina(null)}
              className="cursor-pointer absolute top-5 right-5 size-9 rounded-full bg-black/5 hover:bg-black/10 text-[#2B2521] flex items-center justify-center transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="size-5" />
            </button>

            {/* Encabezado del modal */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-md bg-[#7D5836]/10 text-[#5A3C1E]">
                Doctrina {selectedDoctrina.numeroFormatted}
              </span>

              {selectedDoctrina.isCardinal && (
                <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-md bg-[#5E7A60] text-white">
                  Doctrina Cardinal LADP
                </span>
              )}
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#121213] mb-4">
              {selectedDoctrina.titulo}
            </h3>

            {/* Texto Oficial */}
            <div className="space-y-4 text-foreground/90 font-body text-sm sm:text-base leading-relaxed bg-[#FAF5EE] p-5 sm:p-6 rounded-2xl border border-black/5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7D5836] mb-1">
                Declaración de Fe Oficial:
              </div>
              <p className="text-[#2B2521]">
                {selectedDoctrina.descripcionCompleta}
              </p>
            </div>

            {/* Referencias Bíblicas de Estudio */}
            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A3C1E] flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[#7D5836]" />
                Fundamento Bíblico de Referencia:
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedDoctrina.versiculosReferencia.map((ref) => (
                  <span
                    key={ref}
                    className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-[#4A4036] border border-stone-200"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones de pie */}
            <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="https://ladpregionlimacentro.com/en-que-creeemos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#7D5836] hover:text-[#5A3C1E] transition-colors"
              >
                <span>Ver documento completo en LADP</span>
                <ExternalLink className="size-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedDoctrina(null)}
                className="cursor-pointer w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#7D5836] hover:bg-[#69492C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
