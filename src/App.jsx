import React from 'react'

export default function App() {
  return (
    <div className="container">
      <header>
        <span className="badge">Práctica Universitaria</span>
        <h1>Flujo de Trabajo Git Flow y CI/CD</h1>
        <p className="subtitle">
          Demostración práctica de branching model con Git Flow, automatización de despliegue con GitHub Actions y publicación en rama build.
        </p>
      </header>

      <section>
        <h2 className="section-title">🌿 Modelo de Ramas (Git Flow)</h2>
        <div className="grid">
          <div className="card">
            <span className="branch-tag main">main</span>
            <h3>Rama Principal</h3>
            <p>Contiene el código estable y listo para producción. Protegida con reglas de validación y Pull Requests.</p>
          </div>
          <div className="card">
            <span className="branch-tag develop">develop</span>
            <h3>Rama de Desarrollo</h3>
            <p>Integra las nuevas características terminadas y sirve como base para las versiones de lanzamiento.</p>
          </div>
          <div className="card">
            <span className="branch-tag feature">feature/*</span>
            <h3>Ramas de Funcionalidad</h3>
            <p>Nacen de <code>develop</code> para trabajar en módulos o características específicas sin afectar el tronco común.</p>
          </div>
          <div className="card">
            <span className="branch-tag release">release/*</span>
            <h3>Ramas de Preparación</h3>
            <p>Nacen de <code>develop</code> para estabilizar una versión (v1.0.0), preparar notas de versión y finalizar detalles.</p>
          </div>
          <div className="card">
            <span className="branch-tag hotfix">hotfix/*</span>
            <h3>Ramas de Corrección Urgente</h3>
            <p>Nacen de <code>main</code> para solucionar fallos críticos en producción y se integran en <code>main</code> y <code>develop</code>.</p>
          </div>
          <div className="card">
            <span className="branch-tag build">build</span>
            <h3>Rama de Artefactos</h3>
            <p>Generada automáticamente por GitHub Actions. Almacena únicamente los archivos compilados en <code>dist</code>.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">⚙️ Pipeline de GitHub Actions</h2>
        <div className="workflow-status">
          <div className="status-step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h4>Disparador (Trigger)</h4>
              <p>Se activa ante cualquier evento de <code>push</code> hacia la rama <code>main</code>.</p>
            </div>
          </div>
          <div className="status-step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h4>Entorno de Ejecución</h4>
              <p>Runner <code>ubuntu-latest</code> configurado con Node.js 20 y permisos de escritura.</p>
            </div>
          </div>
          <div className="status-step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h4>Instalación y Compilación</h4>
              <p>Ejecución limpia con <code>npm ci</code> y generación del bundle con <code>npm run build</code>.</p>
            </div>
          </div>
          <div className="status-step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h4>Publicación Automatizada</h4>
              <p>La acción <code>s0/git-publish-subdir-action</code> publica el contenido de <code>dist</code> en la rama <code>build</code>.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Práctica 1 — Git Flow & GitHub Actions &bull; Repositorio Universitario</p>
      </footer>
    </div>
  )
}
