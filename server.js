const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/jenis-biota', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'jenis-biota.html'));
});

app.get('/konservasi', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'konservasi.html'));
});

app.get('/galeri', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'galeri.html'));
});

app.get('/kontak', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kontak.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});