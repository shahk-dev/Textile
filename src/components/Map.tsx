"use client";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslations } from "next-intl";

const coords: [number, number] = [40.74991, 72.37163];

const customIcon = L.icon({
  iconUrl: "/icons/mark.svg",
  iconSize: [20, 30],
  iconAnchor: [12, 30],
});

function MarkerWithPopup({ address }: { address: string }) {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, []);

  return (
    <Marker ref={markerRef} position={coords} icon={customIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
}

export default function Map() {
  const t = useTranslations("Map");
  const [address, setAddress] = useState(t('loading'));



  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.display_name || t("manzil-topilmadi"));
      })
      .catch(() => {
        setAddress(t('yuklashda-xatolik'));
      });
  }, []);

  const handleOpenGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      <MapContainer
        center={coords}
        zoom={16}
        scrollWheelZoom={false}
        className="h-[400px] w-full rounded-2xl z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerWithPopup address={address} />
      </MapContainer>

      {/* Google Maps tugmasi */}
      <button
        onClick={handleOpenGoogleMaps}
        className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md shadow hover:bg-blue-400 hover:text-blue-900 cursor-pointer transition z-[1000] capitalize"
      >
        {t("map-show")}
      </button>
    </div>
  );
}
