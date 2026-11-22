"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  type MapRef,
} from "@/components/ui/map";
import {
  MapPin,
  Navigation,
  Bus,
  ShoppingBag,
  Compass,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "./button";

export interface PuntoReferencia {
  id: "church" | "plazavea" | "paradero";
  nombre: string;
  categoria: string;
  descripcion: string;
  distancia: string;
  imagen: string;
  direcciones: string;
  lng: number;
  lat: number;
  zoom: number;
}

export const PUNTOS: PuntoReferencia[] = [
  {
    id: "church",
    nombre: "Jesús Camino de Vida",
    categoria: "Iglesia",
    descripcion: "Parque Ricardo Palma 144, Bellavista, Callao",
    distancia: "Punto principal",
    imagen: "/images/ExteriorIgle.jpg",
    direcciones: "https://maps.app.goo.gl/sL6Yk5uSMW56xvxu8",
    lng: -77.0949062035683,
    lat: -12.05147646370584,
    zoom: 17,
  },
  {
    id: "plazavea",
    nombre: "Plaza Vea – Colonial",
    categoria: "Centro comercial",
    descripcion: "Av. Óscar R. Benavides 4929 (a 3 min caminando)",
    distancia: "250 metros",
    imagen: "/images/PlazaVea.jpg",
    direcciones: "https://maps.app.goo.gl/b7iuACxLMk471SAS7",
    lng: -77.09274694653149,
    lat: -12.051840790799934,
    zoom: 16.8,
  },
  {
    id: "paradero",
    nombre: "Paradero San José",
    categoria: "Transporte público",
    descripcion: "Conexión principal en Av. Colonial y Av. Faucett",
    distancia: "200 metros",
    imagen: "/images/Paradero.jpeg",
    direcciones: "https://maps.app.goo.gl/g8a8R6ZDyR3XGxPd7",
    lng: -77.09618413842219,
    lat: -12.05330544500726,
    zoom: 16.8,
  },
];

export default function MapSection() {
  const mapRef = useRef<MapRef | null>(null);
  const [puntoActivo, setPuntoActivo] = useState<string>("church");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Timeout de seguridad: asegura que el loader desaparezca si la red o WebGL tarda
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const irAPunto = useCallback((punto: PuntoReferencia) => {
    setPuntoActivo(punto.id);
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [punto.lng, punto.lat],
        zoom: punto.zoom,
        essential: true,
        duration: 1200,
      });
    }
  }, []);

  const copiarDireccion = () => {
    navigator.clipboard.writeText("Parque Ricardo Palma 144, Bellavista, Callao");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Selector interactivo de puntos */}
      <div className="flex flex-wrap gap-2.5">
        {PUNTOS.map((punto) => {
          const isActivo = puntoActivo === punto.id;
          return (
            <button
              key={punto.id}
              type="button"
              onClick={() => irAPunto(punto)}
              className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                isActivo
                  ? "bg-[#7D5836] text-white border-[#7D5836] shadow-md scale-[1.02]"
                  : "bg-white/90 hover:bg-white text-foreground border-black/10 hover:border-black/20 shadow-xs"
              }`}
            >
              {punto.id === "church" && (
                <span className="flex size-2 rounded-full bg-emerald-400" />
              )}
              {punto.id === "plazavea" && (
                <ShoppingBag className={`size-4 ${isActivo ? "text-white" : "text-[#7D5836]"}`} />
              )}
              {punto.id === "paradero" && (
                <Bus className={`size-4 ${isActivo ? "text-white" : "text-[#7D5836]"}`} />
              )}
              <span>{punto.nombre}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                  isActivo ? "bg-black/25 text-white" : "bg-black/5 text-[#52525B]"
                }`}
              >
                {punto.distancia}
              </span>
            </button>
          );
        })}
      </div>

      {/* Contenedor del mapa con Skeleton de carga y Gestos Inteligentes */}
      <div className="relative h-105 sm:h-120 rounded-2xl overflow-hidden w-full border border-black/10 shadow-xl bg-[#F5EBE1]">
        {/* Skeleton mientras carga */}
        {!mapLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#F5EBE1] text-[#7D5836] gap-3 pointer-events-none transition-opacity duration-300">
            <div className="size-10 rounded-full border-3 border-[#7D5836]/30 border-t-[#7D5836] animate-spin" />
            <p className="text-sm font-medium text-foreground/80">
              Cargando mapa de Bellavista, Callao...
            </p>
          </div>
        )}

        <Map
          ref={mapRef}
          center={[-77.09439411010005, -12.052634738407588]}
          zoom={16.2}
          theme="light"
          onLoad={() => setMapLoaded(true)}
          cooperativeGestures={true}
          className="w-full h-full"
        >
          <MapControls position="bottom-right" showZoom showLocate />

          {/* Marcador Principal: Iglesia */}
          <MapMarker
            longitude={PUNTOS[0].lng}
            latitude={PUNTOS[0].lat}
            onClick={() => setPuntoActivo("church")}
          >
            <MarkerContent>
              <div className="relative cursor-pointer group">
                <div className="relative size-10 rounded-full bg-[#7D5836] text-white flex items-center justify-center shadow-lg border-2 border-white transform transition-transform group-hover:scale-110">
                  <MapPin className="size-5 fill-white" />
                </div>
              </div>
            </MarkerContent>

            <MarkerPopup className="p-0 w-68 overflow-hidden rounded-xl border border-black/10 shadow-2xl">
              <div className="h-32 overflow-hidden bg-muted">
                <img
                  src={PUNTOS[0].imagen}
                  alt={PUNTOS[0].nombre}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 bg-white">
                <div className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-[#7D5836]/15 text-[#5A3C1E] mb-1">
                  Punto de Encuentro
                </div>
                <h4 className="font-heading font-bold text-foreground text-base leading-snug">
                  {PUNTOS[0].nombre}
                </h4>
                <p className="text-xs text-[#52525B] mt-0.5 leading-relaxed">
                  {PUNTOS[0].descripcion}
                </p>

                <div className="mt-3 flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 h-8 bg-[#121213] hover:bg-black text-white text-xs font-semibold gap-1.5"
                    asChild
                  >
                    <a
                      href={PUNTOS[0].direcciones}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="size-3" />
                      Cómo llegar
                    </a>
                  </Button>
                </div>
              </div>
            </MarkerPopup>
          </MapMarker>

          {/* Marcadores de Referencia */}
          {PUNTOS.slice(1).map((ref) => (
            <MapMarker
              key={ref.id}
              longitude={ref.lng}
              latitude={ref.lat}
              onClick={() => setPuntoActivo(ref.id)}
            >
              <MarkerContent>
                <div
                  className={`size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white cursor-pointer transition-transform hover:scale-110 ${
                    ref.id === "plazavea" ? "bg-amber-700" : "bg-sky-700"
                  }`}
                >
                  {ref.id === "plazavea" ? (
                    <ShoppingBag className="size-3 text-white" />
                  ) : (
                    <Bus className="size-3 text-white" />
                  )}
                </div>
              </MarkerContent>

              <MarkerPopup className="p-0 w-64 overflow-hidden rounded-xl border border-black/10 shadow-2xl">
                <div className="h-28 overflow-hidden bg-muted">
                  <img
                    src={ref.imagen}
                    alt={ref.nombre}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#52525B]">
                    {ref.categoria}
                  </span>
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    {ref.nombre}
                  </h4>
                  <p className="text-xs text-[#52525B] mt-0.5">
                    {ref.descripcion}
                  </p>
                  <div className="mt-2.5">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-7 text-xs font-medium gap-1"
                      asChild
                    >
                      <a
                        href={ref.direcciones}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-3" />
                        Ver en Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}
        </Map>

        {/* Botón flotante para recientes/centrar */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <button
            type="button"
            onClick={() => irAPunto(PUNTOS[0])}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-foreground text-xs font-semibold shadow-md hover:bg-white border border-black/10 cursor-pointer active:scale-95 transition-all"
            title="Centrar en la Iglesia"
          >
            <Compass className="size-3.5 text-[#7D5836]" />
            Centrar en Iglesia
          </button>
        </div>
      </div>

      {/* Barra de ayuda rápida de ubicación */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-white/85 border border-black/5 text-sm">
        <div className="flex items-center gap-2 text-foreground/85">
          <MapPin className="size-4 text-[#7D5836] shrink-0" />
          <span className="font-medium text-xs sm:text-sm">Parque Ricardo Palma 144, Bellavista, Callao</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copiarDireccion}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-foreground hover:bg-black/5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
            {copied ? "¡Copiado!" : "Copiar dirección"}
          </button>
          <a
            href="https://maps.app.goo.gl/sL6Yk5uSMW56xvxu8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#7D5836] text-white hover:bg-[#69492C] transition-colors shadow-xs"
          >
            Abrir en Google Maps
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
