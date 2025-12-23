# alexmerle.es
personal porfolio
# 🚀 Proyecto: alexmerle.es (Portal & Embudo de Ventas)

Este documento centraliza la estrategia de marca personal, el stack técnico y el flujo de despliegue automatizado para el dominio www.alexmerle.es.

---

## 1. Visión Estratégica
* **Propósito:** Convertir visitas en clientes (Embudo de Ventas).
* **Diferenciador:** Estética técnica "High-End", minimalista, rápida y con integraciones dinámicas (GitHub API).
* **Público Objetivo:** Empresas y clientes en busca de soluciones web y automatización.

---

## 2. Stack Tecnológico
* **IDE:** Project IDX (Google) con asistencia de Gemini IA.
* **Backend:** PHP 8.x (Estabilidad, SEO y compatibilidad nativa con Hostinger).
* **Frontend:** HTML5, CSS3 (Modern Grid/Flexbox) y JavaScript Vanilla para animaciones.
* **Control de Versiones:** GitHub (Repositorio Privado).
* **Infraestructura:** Hostinger (Hosting compartido/Cloud).

---

## 3. Arquitectura del Proyecto (Estructura de Carpetas)

```text
/
├── .github/workflows/
│   └── deploy.yml      <-- Configuración de Auto-despliegue
├── .idx/
│   └── dev.nix         <-- Configuración del entorno en la nube
├── css/
│   └── style.css       <-- Estilos, Glassmorphism y Animaciones
├── js/
│   └── main.js         <-- Lógica de GitHub API e Interacciones
├── includes/
│   └── github-api.php  <-- Lógica backend para traer repositorios
├── index.php           <-- Página principal (Hero + Portfolio)
└── .gitignore          <-- Excluir archivos sensibles