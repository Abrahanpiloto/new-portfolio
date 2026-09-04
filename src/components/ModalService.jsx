import React, { useEffect, useRef } from "react";

const ModalService = ({ service, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return undefined;
    // Apertura instantánea vía API nativa; el foco y Escape los gestiona <dialog>.
    el.show();
    const handleClose = () => onClose();
    el.addEventListener("e-close", handleClose);
    return () => el.removeEventListener("e-close", handleClose);
  }, [onClose]);

  if (!service) return null;

  return (
    <e-dialog
      ref={dialogRef}
      heading={service.label || service.title}
      size="large"
    >
      {/* Imagen en escala de grises con marco tinta */}
      <div className="relative border-2 border-[#111111] mb-4">
        <img
          src={service.image}
          alt={service.label}
          className="epaper-photo w-full h-56 md:h-72 object-cover"
        />
        <div
          className="epaper-halftone pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      </div>

      {/* Descripción */}
      <e-text kind="prose" as="p">
        {service.description}
      </e-text>

      {/* Incluye */}
      {service.included && service.included.length > 0 && (
        <e-list bordered header-title="INCLUYE">
          {service.included.map((item, index) => (
            <e-list-item key={index} title={`■ ${item}`} />
          ))}
        </e-list>
      )}

      {/* Casos de uso */}
      {service.useCases && service.useCases.length > 0 && (
        <e-list bordered header-title="CASOS DE USO">
          {service.useCases.map((item, index) => (
            <e-list-item key={index} title={`■ ${item}`} />
          ))}
        </e-list>
      )}

      {/* Precio: solo dentro del modal, en tinta tabular */}
      {service.price && (
        <p className="text-[20px] font-bold tabular-nums mt-4">
          S/ {service.price}
          {service.priceUsd && (
            <span className="block text-[14px] font-medium">
              O en dólares: USD {service.priceUsd}
            </span>
          )}
        </p>
      )}

      {/* Acciones en el pie del diálogo */}
      {service.link ? (
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Conversar por WhatsApp sobre ${service.label}`}
          className="inline-flex min-h-[48px] items-center focus-visible:outline-3"
          slot="footer"
        >
          <e-button variant="primary" className="epaper-btn-orange">
            LO QUIERO, CONVERSEMOS
          </e-button>
        </a>
      ) : (
        <p
          className="inline-flex min-h-[48px] items-center gap-2 font-bold text-[16px]"
          slot="footer"
        >
          <e-tag>ESTADO</e-tag>
          <span>Próximamente…</span>
        </p>
      )}
      <e-button variant="secondary" slot="footer" onClick={onClose}>
        CERRAR
      </e-button>
    </e-dialog>
  );
};

export default ModalService;
