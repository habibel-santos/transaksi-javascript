let transactions = [
  {
    id: "ae7cc946-2af5-4298-bdbf-d1d390c9edd8",
    invoice_number: "SI/00079",
    invoice_date: "2026-08-04T00:00:00.000Z",
    company_id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
    company: {
      id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
      name: "Landtick Company",
      address: "Sleman, Yogyakarta",
      logo_url:
        "https://res.cloudinary.com/dwzhb0ozu/image/upload/v1778083818/companies/ao1jxojypeqmfi5rs9un.webp",
      email: "landtick99@gmail.com",
      phone: "0859106962315",
    },
    shift_id: "0bf0bafc-fac6-4cd9-bf52-8d9d70f2429d",
    shift: {
      id: "0bf0bafc-fac6-4cd9-bf52-8d9d70f2429d",
      shift_number: "SH-20260804-0002",
    },
    customer_id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
    customer: {
      id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
      name: "POS Customer",
      company_name: null,
      email: null,
      address: null,
      phone: null,
    },
    cashier_id: "8ad089c4-3e0f-470b-938d-f9f95bc854cb",
    cashier: {
      id: "8ad089c4-3e0f-470b-938d-f9f95bc854cb",
      full_name: "Kia",
    },
    currency: "IDR",
    subtotal: 160000,
    tax_total: 17600,
    total: 97600,
    document_status: "posted",
    payment_status: "paid",
    paid_amount: 97600,
    outstanding: 0,
    note: null,
    created_at: "2026-08-04T07:24:03.287Z",
    updated_at: "2026-08-04T07:24:23.589Z",
    is_pos: true,
    is_compliment: false,
    is_tax_inclusive: false,
    sales_invoice_items: [
      {
        id: "0a7e8830-16c3-4202-afa2-452df7c1ec09",
        product_id: "4de5d5e7-e645-4a0a-936d-5c39bade9b29",
        product: {
          id: "4de5d5e7-e645-4a0a-936d-5c39bade9b29",
          name: "Cleaning Macbook Semua Series ",
          sku: "SKU/00004",
          images: [],
          purchase_price: 100000,
          sale_price: 200000,
          is_stock_tracked: false,
          can_be_purchased: true,
          can_be_sold: true,
          sell_account_id: "2a68e875-3599-456a-b31f-124d1250cd0f",
          purchase_account_id: "6f67fd56-4487-4169-ada7-98c330efac59",
          track_account_id: "b2e18e99-080e-4df7-93ea-bbbdad631d58",
          product_category: {
            id: "0459f2b7-0cc5-4cd3-8c10-134e97a7412b",
            name: "Elektronik",
          },
          unit: {
            id: "5c6cb1f1-1b03-41b6-8c4b-90cb12118317",
            name: "Pcs",
            code: "Pcs",
          },
        },
        description: "Cleaning Macbook Semua Series ",
        quantity: 1,
        unit_price: 200000,
        discount: 20,
        tax_id: "d26a1f01-c24f-4e66-b624-4a2134d5fa23",
        tax: {
          id: "d26a1f01-c24f-4e66-b624-4a2134d5fa23",
          name: "PPN 11%",
          rate: 11,
        },
        line_total: 160000,
        is_compliment: false,
      },
    ],
    transaction_fees: [],
    additional_discounts: [
      {
        id: "274ac5da-2a5d-492e-bc6c-17132be74bff",
        name: "Diskon Owner",
        type: "percent",
        value: 50,
        amount: 80000,
      },
    ],
    payments: [
      {
        id: "ffc62162-56bb-4fc7-8c30-b4aaf83c0003",
        method: "QRIS JAGO",
        amount: 97600,
        account_id: "f62079f4-f6b0-4887-aea1-c30f9e0dcf83",
        account: {
          id: "f62079f4-f6b0-4887-aea1-c30f9e0dcf83",
          name: "Rekening Jago",
        },
        reference_no: "IP/00054",
        note: "Payment for SI/00079",
        payment_date: "2026-08-04T00:00:00.000Z",
      },
    ],
  },
  {
    id: "9e06faf9-f955-4def-b573-cb9f843f0dc4",
    invoice_number: "SI/00078",
    invoice_date: "2026-07-25T00:00:00.000Z",
    company_id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
    company: {
      id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
      name: "Landtick Company",
      address: "Sleman, Yogyakarta",
      logo_url:
        "https://res.cloudinary.com/dwzhb0ozu/image/upload/v1778083818/companies/ao1jxojypeqmfi5rs9un.webp",
      email: "landtick99@gmail.com",
      phone: "0859106962315",
    },
    shift_id: "f05b0045-c7ab-4160-9b87-7a1739be3b84",
    shift: {
      id: "f05b0045-c7ab-4160-9b87-7a1739be3b84",
      shift_number: "SH-20260721-0002",
    },
    customer_id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
    customer: {
      id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
      name: "POS Customer",
      company_name: null,
      email: null,
      address: null,
      phone: null,
    },
    cashier_id: "a3b31f88-2bdb-43a9-b18b-076834912283",
    cashier: {
      id: "a3b31f88-2bdb-43a9-b18b-076834912283",
      full_name: "Landtick",
    },
    currency: "IDR",
    subtotal: 5500000,
    tax_total: 0,
    total: 5500000,
    document_status: "posted",
    payment_status: "paid",
    paid_amount: 5500000,
    outstanding: 0,
    note: null,
    created_at: "2026-07-25T05:50:22.610Z",
    updated_at: "2026-07-25T05:50:52.396Z",
    is_pos: true,
    is_compliment: false,
    is_tax_inclusive: false,
    sales_invoice_items: [
      {
        id: "71f20ba4-746f-43a9-be82-67086c20a9e5",
        product_id: "5e557e4a-2f5b-411a-87fd-5c58e2a9999f",
        product: {
          id: "5e557e4a-2f5b-411a-87fd-5c58e2a9999f",
          name: 'Macbook Pro 2017 15" 16/512',
          sku: "SKU/00001",
          images: [
            "https://res.cloudinary.com/dwzhb0ozu/image/upload/v1777647195/products/x0zicqy20x8lhgxgm5th.webp",
          ],
          purchase_price: 4000000,
          sale_price: 5500000,
          is_stock_tracked: false,
          can_be_purchased: true,
          can_be_sold: true,
          sell_account_id: "2a68e875-3599-456a-b31f-124d1250cd0f",
          purchase_account_id: "6f67fd56-4487-4169-ada7-98c330efac59",
          track_account_id: "b2e18e99-080e-4df7-93ea-bbbdad631d58",
          product_category: {
            id: "0459f2b7-0cc5-4cd3-8c10-134e97a7412b",
            name: "Elektronik",
          },
          unit: {
            id: "5c6cb1f1-1b03-41b6-8c4b-90cb12118317",
            name: "Pcs",
            code: "Pcs",
          },
        },
        description: 'Macbook Pro 2017 15" 16/512',
        quantity: 1,
        unit_price: 5500000,
        discount: 0,
        tax_id: null,
        tax: null,
        line_total: 5500000,
        is_compliment: false,
      },
    ],
    transaction_fees: [],
    additional_discounts: [],
    payments: [
      {
        id: "bed418a8-ddec-4a46-a118-f358d85cfc87",
        method: "Cash (Tunai)",
        amount: 5500000,
        account_id: "e58b1d05-39b3-44a3-880c-d9a8a58e144b",
        account: {
          id: "e58b1d05-39b3-44a3-880c-d9a8a58e144b",
          name: "Kas",
        },
        reference_no: "IP/00053",
        note: null,
        payment_date: "2026-07-25T00:00:00.000Z",
      },
    ],
  },
  {
    id: "ce1969fa-c762-4809-aec3-dcd1c8c4e300",
    invoice_number: "SI/00077",
    invoice_date: "2026-07-21T00:00:00.000Z",
    company_id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
    company: {
      id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
      name: "Landtick Company",
      address: "Sleman, Yogyakarta",
      logo_url:
        "https://res.cloudinary.com/dwzhb0ozu/image/upload/v1778083818/companies/ao1jxojypeqmfi5rs9un.webp",
      email: "landtick99@gmail.com",
      phone: "0859106962315",
    },
    shift_id: "f05b0045-c7ab-4160-9b87-7a1739be3b84",
    shift: {
      id: "f05b0045-c7ab-4160-9b87-7a1739be3b84",
      shift_number: "SH-20260721-0002",
    },
    customer_id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
    customer: {
      id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
      name: "POS Customer",
      company_name: null,
      email: null,
      address: null,
      phone: null,
    },
    cashier_id: "a3b31f88-2bdb-43a9-b18b-076834912283",
    cashier: {
      id: "a3b31f88-2bdb-43a9-b18b-076834912283",
      full_name: "Landtick",
    },
    currency: "IDR",
    subtotal: 15000,
    tax_total: 0,
    total: 15000,
    document_status: "posted",
    payment_status: "paid",
    paid_amount: 15000,
    outstanding: 0,
    note: null,
    created_at: "2026-07-21T04:04:04.073Z",
    updated_at: "2026-07-21T04:04:44.540Z",
    is_pos: true,
    is_compliment: false,
    is_tax_inclusive: false,
    sales_invoice_items: [
      {
        id: "40318f4b-284c-4e88-b439-3e3fe6d58cfa",
        product_id: "7509a138-313c-45fd-9403-6197c869b6e1",
        product: {
          id: "7509a138-313c-45fd-9403-6197c869b6e1",
          name: "Paket Produk A",
          sku: "SKU/00011",
          images: [],
          purchase_price: 0,
          sale_price: 15000,
          is_stock_tracked: false,
          can_be_purchased: false,
          can_be_sold: true,
          sell_account_id: "2a68e875-3599-456a-b31f-124d1250cd0f",
          purchase_account_id: null,
          track_account_id: null,
          product_category: {
            id: "30c994c1-82bf-48d1-81e7-ed47a80a6936",
            name: "F&B",
          },
          unit: {
            id: "5c6cb1f1-1b03-41b6-8c4b-90cb12118317",
            name: "Pcs",
            code: "Pcs",
          },
        },
        description: "Paket Produk A",
        quantity: 1,
        unit_price: 15000,
        discount: 0,
        tax_id: null,
        tax: null,
        line_total: 15000,
        is_compliment: false,
      },
    ],
    transaction_fees: [],
    additional_discounts: [],
    payments: [
      {
        id: "8498b942-5625-4fd3-ac9e-ba8826128bbe",
        method: "Qris Dana",
        amount: 15000,
        account_id: "bc736afc-c23c-4e3e-9c1c-551c18239e2c",
        account: {
          id: "bc736afc-c23c-4e3e-9c1c-551c18239e2c",
          name: "Rekening Bank",
        },
        reference_no: "IP/00052",
        note: "Payment for SI/00077",
        payment_date: "2026-07-21T00:00:00.000Z",
      },
    ],
  },
  {
    id: "455e338d-e329-48a8-83af-fa3e8db65a91",
    invoice_number: "SI/00076",
    invoice_date: "2026-07-19T00:00:00.000Z",
    company_id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
    company: {
      id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
      name: "Landtick Company",
      address: "Sleman, Yogyakarta",
      logo_url:
        "https://res.cloudinary.com/dwzhb0ozu/image/upload/v1778083818/companies/ao1jxojypeqmfi5rs9un.webp",
      email: "landtick99@gmail.com",
      phone: "0859106962315",
    },
    shift_id: "b408fe7e-8f2f-4957-9f4c-c1906aa2c769",
    shift: {
      id: "b408fe7e-8f2f-4957-9f4c-c1906aa2c769",
      shift_number: "SH-20260702-0002",
    },
    customer_id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
    customer: {
      id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
      name: "POS Customer",
      company_name: null,
      email: null,
      address: null,
      phone: null,
    },
    cashier_id: "a3b31f88-2bdb-43a9-b18b-076834912283",
    cashier: {
      id: "a3b31f88-2bdb-43a9-b18b-076834912283",
      full_name: "Landtick",
    },
    currency: "IDR",
    subtotal: 15000,
    tax_total: 1650,
    total: 16650,
    document_status: "posted",
    payment_status: "paid",
    paid_amount: 20000,
    outstanding: 0,
    note: null,
    created_at: "2026-07-18T23:36:24.743Z",
    updated_at: "2026-07-18T23:36:30.918Z",
    is_pos: true,
    is_compliment: false,
    is_tax_inclusive: false,
    sales_invoice_items: [
      {
        id: "4a0d8b72-a9ab-4195-93eb-92fc98480c60",
        product_id: "7509a138-313c-45fd-9403-6197c869b6e1",
        product: {
          id: "7509a138-313c-45fd-9403-6197c869b6e1",
          name: "Paket Produk A",
          sku: "SKU/00011",
          images: [],
          purchase_price: 0,
          sale_price: 15000,
          is_stock_tracked: false,
          can_be_purchased: false,
          can_be_sold: true,
          sell_account_id: "2a68e875-3599-456a-b31f-124d1250cd0f",
          purchase_account_id: null,
          track_account_id: null,
          product_category: {
            id: "30c994c1-82bf-48d1-81e7-ed47a80a6936",
            name: "F&B",
          },
          unit: {
            id: "5c6cb1f1-1b03-41b6-8c4b-90cb12118317",
            name: "Pcs",
            code: "Pcs",
          },
        },
        description: "Paket Produk A",
        quantity: 1,
        unit_price: 15000,
        discount: 0,
        tax_id: "d26a1f01-c24f-4e66-b624-4a2134d5fa23",
        tax: {
          id: "d26a1f01-c24f-4e66-b624-4a2134d5fa23",
          name: "PPN 11%",
          rate: 11,
        },
        line_total: 15000,
        is_compliment: false,
      },
    ],
    transaction_fees: [],
    additional_discounts: [],
    payments: [
      {
        id: "84d9af8c-8b88-40f5-bfc5-d0581ac65aa8",
        method: "Cash (Tunai)",
        amount: 20000,
        account_id: "e58b1d05-39b3-44a3-880c-d9a8a58e144b",
        account: {
          id: "e58b1d05-39b3-44a3-880c-d9a8a58e144b",
          name: "Kas",
        },
        reference_no: "IP/00051",
        note: null,
        payment_date: "2026-07-18T00:00:00.000Z",
      },
    ],
  },
  {
    id: "9e94cbf7-3ba4-456f-a562-c097640410ff",
    invoice_number: "SI/00074",
    invoice_date: "2026-07-18T00:00:00.000Z",
    company_id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
    company: {
      id: "bb007318-c4a5-4a81-9518-d8260685bfc5",
      name: "Landtick Company",
      address: "Sleman, Yogyakarta",
      logo_url:
        "https://res.cloudinary.com/dwzhb0ozu/image/upload/v1778083818/companies/ao1jxojypeqmfi5rs9un.webp",
      email: "landtick99@gmail.com",
      phone: "0859106962315",
    },
    shift_id: "b408fe7e-8f2f-4957-9f4c-c1906aa2c769",
    shift: {
      id: "b408fe7e-8f2f-4957-9f4c-c1906aa2c769",
      shift_number: "SH-20260702-0002",
    },
    customer_id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
    customer: {
      id: "1cadb635-e5ea-4f2d-8f25-e0e8f639bb25",
      name: "POS Customer",
      company_name: null,
      email: null,
      address: null,
      phone: null,
    },
    cashier_id: "a3b31f88-2bdb-43a9-b18b-076834912283",
    cashier: {
      id: "a3b31f88-2bdb-43a9-b18b-076834912283",
      full_name: "Landtick",
    },
    currency: "IDR",
    subtotal: 15000,
    tax_total: 0,
    total: 15000,
    document_status: "posted",
    payment_status: "paid",
    paid_amount: 20000,
    outstanding: 0,
    note: null,
    created_at: "2026-07-18T05:36:46.900Z",
    updated_at: "2026-07-18T05:36:53.586Z",
    is_pos: true,
    is_compliment: false,
    is_tax_inclusive: false,
    sales_invoice_items: [
      {
        id: "0b327ac1-0a7c-4b62-865c-9c8de6ba1983",
        product_id: "7509a138-313c-45fd-9403-6197c869b6e1",
        product: {
          id: "7509a138-313c-45fd-9403-6197c869b6e1",
          name: "Paket Produk A",
          sku: "SKU/00011",
          images: [],
          purchase_price: 0,
          sale_price: 15000,
          is_stock_tracked: false,
          can_be_purchased: false,
          can_be_sold: true,
          sell_account_id: "2a68e875-3599-456a-b31f-124d1250cd0f",
          purchase_account_id: null,
          track_account_id: null,
          product_category: {
            id: "30c994c1-82bf-48d1-81e7-ed47a80a6936",
            name: "F&B",
          },
          unit: {
            id: "5c6cb1f1-1b03-41b6-8c4b-90cb12118317",
            name: "Pcs",
            code: "Pcs",
          },
        },
        description: "Paket Produk A",
        quantity: 1,
        unit_price: 15000,
        discount: 0,
        tax_id: null,
        tax: null,
        line_total: 15000,
        is_compliment: false,
      },
    ],
    transaction_fees: [],
    additional_discounts: [],
    payments: [
      {
        id: "e9e367da-381b-4f75-9d60-2621c68d0587",
        method: "Cash (Tunai)",
        amount: 20000,
        account_id: "e58b1d05-39b3-44a3-880c-d9a8a58e144b",
        account: {
          id: "e58b1d05-39b3-44a3-880c-d9a8a58e144b",
          name: "Kas",
        },
        reference_no: "IP/00050",
        note: null,
        payment_date: "2026-07-18T00:00:00.000Z",
      },
    ],
  },
];

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
  console.log("Perusahaan  :", company.name); // ambil "name" dari object company
  console.log("Kasir       :", cashier.full_name); // ambil "full_name" dari object cashier
  console.log("Status Bayar:", payment_status);

  console.log("Barang dibeli:");
  sales_invoice_items.forEach((item) => {
    const { description, quantity, unit_price } = item;
    console.log(" -", description, "| qty:", quantity, "| harga:", unit_price);
  });

  console.log("TOTAL       :", total);
});

function tambahTransaction(transactions, dataBaru) {
  const {
    invoice_number,
    invoice_date,
    company,
    cashier,
    total,
    sales_invoice_items,
  } = dataBaru;

  // bikin nota baru
  const notaBaru = {
    id: crypto.randomUUID(), // bikin id acak otomatis
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

tambahTransaction(transactions, {
  invoice_number: "SI/00080",
  invoice_date: "2026-08-05T00:00:00.000Z",
  company: transactions[0].company,
  cashier: transactions[0].cashier,
  total: 50000,
  sales_invoice_items: [
    { description: "Servis Charger", quantity: 1, unit_price: 50000 },
  ],
});

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

const hasil = bulkDeleteTransaction(
  transactions,
  "ae7cc946-2af5-4298-bdbf-d1d390c9edd8", // id nota SI/00079
  "9e06faf9-f955-4def-b573-cb9f843f0dc4", // id nota SI/00078
);

const container = document.getElementById("daftar-transaksi");

function tampilkanTransaksi() {
  container.innerHTML = "";

  transactions.forEach((transaction) => {
    const { id, invoice_number, invoice_date, company, cashier, total, payment_status } = transaction;

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

tampilkanTransaksi();

// ========== CREATE ==========
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
  tampilkanTransaksi(); // render ulang biar keliatan
}

// ========== DELETE ==========
function hapusTransaksi(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  tampilkanTransaksi(); // render ulang
}

// ========== UPDATE ==========
function editTransaksi(id) {
  const transaksi = transactions.find((transaction) => transaction.id === id);

  const invoiceBaru = prompt("No. Invoice baru:", transaksi.invoice_number);
  const totalBaru = prompt("Total baru:", transaksi.total);

  if (invoiceBaru !== null) {
    transaksi.invoice_number = invoiceBaru;
    transaksi.total = Number(totalBaru);
  }

  tampilkanTransaksi(); // render ulang
}