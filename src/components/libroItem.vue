<template>
  <div class="libro">
    <h2>{{ libro.titulo }}</h2>
    <p><strong>Autor:</strong> {{ libro.autor }}</p>
    <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
    <button @click="$emit('eliminar')">Eliminar</button>
  </div>
</template>

<script setup>
defineProps({
  libro: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.libro {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  background: #fafafa;
}

h2 {
  margin: 0 0 0.5rem;
  color: #444;
}

button {
  background: #ff4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #cc0000;
}
</style>
