import React from "react";

export type NavItem = {
    href: string;
    label: string;
}

export type CategoriasProyectos = {
    id:string;
    href:string;
    desc:string;
}

import type { ImageMetadata } from "astro";

export type Capabilities = {
    id:string;
    icon: React.ElementType;
    titulo: string;
    img?: string | ImageMetadata | any;
    descripcion: string;
    long_desc:string;
    lista: string[];
    beneficio:string[];
    relacionados?: string;
    stack?: string[];
    tags?:string[];
    href?:string;
}

export type Experiencia = {
    puesto: string;
    empresa:string;
    fechaInicio: string;
    fechaFin: string;
    descripcion:string;
}

export type LinksInteres = {
    label:string;
    href:string;
}

// pagina clientes
export interface WorkflowStep {
  titulo: string;
  descripcion: string;
}

export interface ServiceWorkflow {
  id: string;
  encabezado: string;
  introduccion: string;
  condiciones: string;
  pasos: WorkflowStep[];
}

// FAQs
export interface FAQItem {
  pregunta: string;
  respuesta: string;
}