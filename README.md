# Portal Institucional - Facultad de Ciencias Económicas (UNMSM)

&gt; Proyecto de titulación – Trabajo de Suficiencia Profesional  
&gt; Autor: **Bach. JOSÉ DAVID ALCALDE CABRERA**  
&gt; Asesor: **Nombre del asesor**  
&gt; Fecha límite: 15 de noviembre de 2025

## Stack
- Front: React 18 + Vite + Tailwind CSS  
- Back: Node.js 20 + Express (Dockerizado)  
- DB: PostgreSQL  
- Deploy: Vercel (front) – Render (back)

## Peso de imagen Docker
`fce-backend: xx MB` (objetivo &lt; 100 MB)

## Scripts
```bash
# Back
cd backend
npm install
npm run dev        # localhost:8080

# Front (próximamente)
cd frontend
npm install
npm run dev        # localhost:5173
