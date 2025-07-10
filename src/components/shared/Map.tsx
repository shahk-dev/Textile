"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const coords: [number, number] = [40.74991, 72.37163];

const customIcon = L.icon({
    iconUrl: "/icons/mark.svg",
    iconSize: [20, 30],
    iconAnchor: [12, 30],
});

export default function Map() {
    const [address, setAddress] = useState("Yuklanmoqda...");

    useEffect(() => {
        fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
        )
            .then((res) => res.json())
            .then((data) => {
                setAddress(data.display_name || "Manzil topilmadi");
            })
            .catch(() => {
                setAddress("Manzilni yuklashda xatolik");
            });
    }, []);

    return (
            <div className="relative">
                <MapContainer
                    center={coords}
                    zoom={16}
                    scrollWheelZoom={false}
                    className="h-[400px] w-full rounded-2xl z-0"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={coords} icon={customIcon}>
                        <Popup>{address}</Popup>
                    </Marker>
                </MapContainer>
            </div>
    );
}