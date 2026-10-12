import React, { useState } from 'react'

export default function App() {
  const [contadorInteracciones, setContadorInteracciones] = useState(0)
  const [ramaSeleccionada, setRamaSeleccionada] = useState('main')

  const ramasDetalles = {
    main: {
      titulo: 'main (Producción)',
      desc: 'Rama protegida. Solo recibe cambios auditados mediante Pull Requests aprobados.',
      color: '#38bdf8'
    },
    develop: {
      titulo: 'develop (Integración)',
      desc: 'Base común donde convergen todas las funcionalidades desarrolladas.',
      color: '#a855f7'
    },
    'feature/primera-funcionalidad': {
      titulo: 'feature/primera-funcionalidad (Novedad)',
      desc: 'Primera funcionalidad interactiva desarrollada e integrada mediante Git Flow.',
      color: '#22c55e'
    },
    'release/1.0.0': {
      titulo: 'release/1.0.0 (Estabilización)',
      desc: 'Rama de congelamiento para validación, pruebas finales y versión candidata.',
      color: '#f59e0b'
    },
    'hotfix/1.0.1': {
      titulo: 'hotfix/1.0.1 (Parche crítico)',
      desc: 'Corrección directa aplicada sobre producción y sincronizada a develop.',
      color: '#f43f5e'
    }
  }

  const handleSeleccionarRama = (rama) => {
    setRamaSeleccionada(rama)
    setContadorInteracciones((prev) => prev + 1)
  }

  return (
    <div className="container">
      <header>
        <span className="badge">Práctica Universitaria</span>
        <h1>Flujo de Trabajo Git Flow y CI/CD</h1>
        <p className="subtitle">
          Demostración práctica de branching model con Git Flow, automatización de despliegue con GitHub Actions y publicación en rama build.
        </p>
      </header>

      {/* Funcionalidad interactiva implementada en feature/primera-funcionalidad */}
      <section className="workflow-status" style={{ marginBottom: '2.5rem' }}>
        <h2 className="section-title">✨ Funcionalidad Interactiva (feature/primera-funcionalidad)</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Selecciona una rama para inspeccionar su rol dentro del flujo de trabajo:
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {Object.keys(ramasDetalles).map((rama) => (
            <button
              key={rama}
              onClick={() => handleSeleccionarRama(rama)}
              style={{
                background: ramaSeleccionada === rama ? ramasDetalles[rama].color : 'rgba(255, 255, 255, 0.08)',
                color: ramaSeleccionada === rama ? '#0f172a' : '#f8fafc',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 0.9rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                transition: 'all 0.2s ease'
              }}
            >
              {rama}
            </button>
          ))}
        </div>
        <div
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            background: 'rgba(0,0,0,0.25)',
            borderLeft: `4px solid ${ramasDetalles[ramaSeleccionada].color}`
          }}
        >
          <h4 style={{ color: ramasDetalles[ramaSeleccionada].color, marginBottom: '0.25rem' }}>
            {ramasDetalles[ramaSeleccionada].titulo}
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {ramasDetalles[ramaSeleccionada].desc}
          </p>
          <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>
            Interacciones realizadas en esta sesión: {contadorInteracciones}
          </div>
        </div>
      </section>

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
