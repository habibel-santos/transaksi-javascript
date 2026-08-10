let transactions = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    transactions = data;
    tampilkanTransaksi();
  })
  .catch((error) => {
    console.log("Gagal membaca data.json:", error);
  });

function tampilkanInvoiceConsole() {
  transactions.forEach((transaction) => {
    const {
      invoice_number,
      invoice_date,
      company,
      cashier,
      total,
      payment_status,
      sales_invoice_items,
    } = transaction;

    console.log("========================================");
    console.log("No. Invoice :", invoice_number);
    console.log("Tanggal     :", invoice_date);
    console.log("Perusahaan  :", company.name);
    console.log("Kasir       :", cashier.full_name);
    console.log("Status Bayar:", payment_status);

    console.log("Barang dibeli:");
    sales_invoice_items.forEach((item) => {
      const { description, quantity, unit_price } = item;
      console.log(
        " -",
        description,
        "| qty:",
        quantity,
        "| harga:",
        unit_price,
      );
    });

    console.log("TOTAL       :", total);
  });
}

function tambahTransaction(transactions, dataBaru) {
  const {
    invoice_number,
    invoice_date,
    company,
    cashier,
    total,
    sales_invoice_items,
  } = dataBaru;

  const notaBaru = {
    id: crypto.randomUUID(),
    invoice_number,
    invoice_date,
    company,
    cashier,
    total,
    payment_status: "paid",
    sales_invoice_items,
  };

  transactions.push(notaBaru);
  console.log("Berhasil nambah nota:", invoice_number);
}

function bulkDeleteTransaction(transactions, ...id) {
  const sisaTransaksi = transactions.filter((transaction) => {
    return !id.includes(transaction.id);
  });

  console.log(
    "Jumlah nota yang dihapus:",
    transactions.length - sisaTransaksi.length,
  );
  return sisaTransaksi;
}

const container = document.getElementById("daftar-transaksi");

function tampilkanTransaksi() {
  container.innerHTML = "";

  transactions.forEach((transaction) => {
    const {
      id,
      invoice_number,
      invoice_date,
      company,
      cashier,
      total,
      payment_status,
    } = transaction;

    const kotakTransaksi = document.createElement("div");
    kotakTransaksi.className = "kartu-transaksi";

    kotakTransaksi.innerHTML = `
      <p><b>No. Invoice:</b> ${invoice_number}</p>
      <p><b>Tanggal:</b> ${invoice_date}</p>
      <p><b>Perusahaan:</b> ${company.name}</p>
      <p><b>Kasir:</b> ${cashier.full_name}</p>
      <p><b>Status:</b> ${payment_status}</p>
      <p><b>Total:</b> Rp${total.toLocaleString("id-ID")}</p>
      <button onclick="hapusTransaksi('${id}')">Hapus</button>
      <button onclick="editTransaksi('${id}')">Edit</button>
    `;

    container.appendChild(kotakTransaksi);
  });
}

function tambahTransaksiBaru() {
  const invoiceInput = document.getElementById("input-invoice").value;
  const totalInput = Number(document.getElementById("input-total").value);

  const transaksiBaru = {
    id: crypto.randomUUID(),
    invoice_number: invoiceInput,
    invoice_date: new Date().toISOString(),
    company: { name: "Landtick Company" },
    cashier: { full_name: "Kamu" },
    total: totalInput,
    payment_status: "paid",
  };

  transactions.push(transaksiBaru);
  tampilkanTransaksi();
}

function hapusTransaksi(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  tampilkanTransaksi();
}

function editTransaksi(id) {
  const transaksi = transactions.find((transaction) => transaction.id === id);

  const invoiceBaru = prompt("No. Invoice baru:", transaksi.invoice_number);
  const totalBaru = prompt("Total baru:", transaksi.total);

  if (invoiceBaru !== null) {
    transaksi.invoice_number = invoiceBaru;
    transaksi.total = Number(totalBaru);
  }

  tampilkanTransaksi();
}

function exportKeJSON() {
  const teksJSON = JSON.stringify(transactions, null, 2);
  const file = new Blob([teksJSON], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "data.json";
  link.click();
}
