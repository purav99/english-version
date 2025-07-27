const express = require('express');
const app = express();
const path = require('path');

// Serve all static assets from the Public folder
app.use(express.static(path.join(__dirname, 'Public')));

// Route: Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/index.html'));
});

// outsourced-accounting.html (clean URL)
app.get('/outsourced-accounting', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/accounting/outsourced-accounting.html'));
});

// Route: Payroll Outsourcing (example)
app.get('/payroll-outsourcing', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/views/accounting/Payroll Outsourcing.html'));
});

// Route: Reconciliation & Backlog Accounting (example)
app.get('/reconciliation-backlog', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/views/accounting/Reconciliation & Backlog Accounting.html'));
});

// Route: Accounts Payable Outsourcing
app.get('/accounts-payable', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/views/accounting/Accounts Payable Outsourcing.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
