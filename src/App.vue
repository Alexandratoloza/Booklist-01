<template>
  <div id="app">
    <header>
      <h1>📚 BookList SPA</h1>
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/libros">Libros</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2026 Alexandra Toloza — Proyecto Libro M6</p>
      <p>Villa Alemana, Región de Valparaíso, Chile</p>
    </footer>
  </div>
</template>

<script setup>
// No necesitas lógica aquí
</script>

<style>
/* Tema global */
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  background: #f0f4f8;
  color: #333;
}

#app {
  max-width: 900px;
  margin: auto;
  padding: 1rem;
}

/* Header */
header {
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  margin: 0.5rem 0;
  color: #0077cc;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.navbar a {
  text-decoration: none;
  color: #0077cc;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar a.router-link-exact-active {
  color: #ff6600;
}

/* Main content */
main {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
}
</style>
