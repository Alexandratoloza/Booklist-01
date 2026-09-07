<template>
    <div class="container">
        <h1>📚 Lista de Libros</h1>

        <!-- Formulario -->
        <form class="form" @submit.prevent="agregarLibro">
            <input v-model="nuevoTitulo" placeholder="Título del libro" />
            <input v-model="nuevoAutor" placeholder="Autor" />
            <input v-model="nuevaCategoria" placeholder="Categoría" />
            <button type="submit">Agregar</button>
        </form>

        <p v-if="error" class="error">{{ error }}</p>

        <!-- Lista de libros -->
        <div class="lista">
            <libroItem v-for="libro in libros" :key="libro.id" :libro="libro" @eliminar="eliminarLibro(libro.id)" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import libroItem from '@/components/libroItem.vue'

const nuevoTitulo = ref('')
const nuevoAutor = ref('')
const nuevaCategoria = ref('')
const error = ref('')

const libros = ref([
  { id: 1, titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald', categoria: 'Novela' },
  { id: 2, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', categoria: 'Realismo Mágico' },
  { id: 3, titulo: '1984', autor: 'George Orwell', categoria: 'Distopía' }
])

function agregarLibro () {
  if (nuevoTitulo.value.trim() === '') {
    error.value = 'El título es obligatorio.'
    return
  }
  libros.value.push({
    id: Date.now(),
    titulo: nuevoTitulo.value,
    autor: nuevoAutor.value || 'Autor desconocido',
    categoria: nuevaCategoria.value || 'Sin categoría'
  })
  nuevoTitulo.value = ''
  nuevoAutor.value = ''
  nuevaCategoria.value = ''
  error.value = ''
}

function eliminarLibro (id) {
  libros.value = libros.value.filter(libro => libro.id !== id)
}
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    background: #fdfdfd;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 1.5rem;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1rem;
}

input {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
}

button {
    background: #0077cc;
    color: white;
    border: none;
    padding: 0.7rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background: #005fa3;
}

.error {
    color: red;
    font-weight: bold;
    margin-bottom: 1rem;
}

.lista {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
