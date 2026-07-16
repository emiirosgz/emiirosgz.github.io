import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
    loader: glob({base: './src/content/proyectos', pattern: '**/*.{md,mdx}'}),
    schema: ({ image }) =>
        z.object({
            // cabecera principal
            categoria: z.string(),
            titulo: z.string(),
            short_desc: z.string(),
            anno: z.number(),
            // detalles
            cliente: z.string(),
            rol: z.string(),
            stack_tools: z.union([z.string(), z.array(z.string())]).optional(),
            // imagen 
            imagen: z.union([image(), z.string()]).optional(),
            // col 2
            overview: z.string(),
            reto: z.string(),
            solucion: z.string(),
            tags: z.array(z.string()).optional(),
            link: z.string().optional(),
            
        })
})

export const collections = {
    proyectos
}