"use client";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "./button";

const referencias = [
  {
    id: 1,
    nombre: "Plaza Vea - Colonial",
    descripcion: "Av. Óscar R. Benavides 4929",
    imagen: "/images/PlazaVea.jpg",
    direcciones: "https://maps.app.goo.gl/b7iuACxLMk471SAS7",
    lng: -77.09274694653149,
    lat: -12.051840790799934,
  },
  {
    id: 2,
    nombre: "Paradero San Jose",
    descripcion: "Referencia de transporte",
    imagen: "/images/Paradero.jpeg",
    direcciones: "https://maps.app.goo.gl/g8a8R6ZDyR3XGxPd7",
    lng: -77.09618413842219, // coordenadas reales
    lat: -12.05330544500726,
  },
];

export default function MapSection() {
  return (
    <div className="h-100 rounded-xl overflow-hidden w-full touch-none">
      <Map
        center={[-77.09439411010005, -12.053034738407588]} // Coordenadas del Callao
        zoom={16}
        theme="light"
      >
        
        <MapControls
          position="bottom-right"
          showZoom
        />

        <MapMarker longitude={-77.0949062035683} latitude={-12.05147646370584}>
          <MarkerContent>
            <div className="cursor-pointer">
              <MapPin className="fill-rose-500 stroke-white" size={42} />
            </div>
          </MarkerContent>
          <MarkerPopup className="p-0 w-62">
            <div className="h-32 overflow-hidden rounded-t-md">
              <img
                src="/images/ExteriorIgle.jpg"
                alt="Jesus Camino de Vida"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <p className="font-semibold text-foreground leading-tight">
                Jesus Camino de Vida
              </p>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Parque Ricardo Palma 144 - Callao
              </p>
            </div>
            <div className="flex gap-2 pt-1">
              <Button
                size="sm"
                className="flex-1 h-8 bg-brand-black hover:bg-brand-black/90"
                asChild
              >
                <a
                  href="https://maps.app.goo.gl/sL6Yk5uSMW56xvxu8"
                  target="_blank"
                >
                  <Navigation className="size-3.5 mr-1.5" />
                  Direcciones
                </a>
              </Button>
            </div>
          </MarkerPopup>
        </MapMarker>

        {referencias.map((ref) => (
          <MapMarker key={ref.id} longitude={ref.lng} latitude={ref.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-rose-500 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
            </MarkerContent>
            <MarkerPopup className="p-0 w-62">
              <div className="h-32 overflow-hidden rounded-t-md">
                <img
                  src={ref.imagen}
                  alt={ref.nombre}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3">
                <p className="font-semibold text-foreground leading-tight">
                  {ref.nombre}
                </p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {ref.descripcion}
                </p>
              </div>

              <div className="flex gap-2 pt-1">
                <Button
                  size="sm"
                  className="flex-1 h-8 bg-brand-black hover:bg-brand-black/90"
                  asChild
                >
                  <a href={ref.direcciones} target="_blank">
                    <Navigation className="size-3.5 mr-1.5" />
                    Direcciones
                  </a>
                </Button>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
