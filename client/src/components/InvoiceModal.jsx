import React, { useState } from "react";

const pricing = {
  Bali: 69999,
  Venice: 80999,
  Tokyo: 99000,
  India: 49999,
  Paris: 149999,
};

const formatCurrency = (value) => {
  return "₹" + Number(value).toLocaleString("en-IN");
};

const InvoiceModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Bali",
    checkIn: "",
    checkOut: "",
    guests: 2,
    payment: "UPI",
  });

  if (!open) return null;

  const unit = pricing[form.destination];
  const total = unit * Number(form.guests);

  const printInvoice = () => {
    const html = `
      <html>
      <head>
        <title>TripPartner Invoice</title>

        <style>
          body{
            font-family:Arial;
            padding:40px;
            color:#333;
          }

          h1{
            color:#059669;
            text-align:center;
          }

          table{
            width:100%;
            border-collapse:collapse;
            margin-top:20px;
          }

          td,th{
            border:1px solid #ddd;
            padding:10px;
          }

          th{
            background:#059669;
            color:white;
          }

          .total{
            margin-top:20px;
            font-size:22px;
            font-weight:bold;
            color:#059669;
          }

          .footer{
            margin-top:40px;
            text-align:center;
            color:#666;
          }
        </style>

      </head>

      <body>

      <h1>TripPartner Booking Invoice</h1>

      <table>

      <tr>
      <th colspan="2">Customer Details</th>
      </tr>

      <tr>
      <td>Name</td>
      <td>${form.name}</td>
      </tr>

      <tr>
      <td>Email</td>
      <td>${form.email}</td>
      </tr>

      <tr>
      <td>Phone</td>
      <td>${form.phone}</td>
      </tr>

      <tr>
      <th colspan="2">Booking Details</th>
      </tr>

      <tr>
      <td>Destination</td>
      <td>${form.destination}</td>
      </tr>

      <tr>
      <td>Check In</td>
      <td>${form.checkIn || "-"}</td>
      </tr>

      <tr>
      <td>Check Out</td>
      <td>${form.checkOut || "-"}</td>
      </tr>

      <tr>
      <td>Guests</td>
      <td>${form.guests}</td>
      </tr>

      <tr>
      <td>Payment Method</td>
      <td>${form.payment}</td>
      </tr>

      <tr>
      <td>Price Per Person</td>
      <td>${formatCurrency(unit)}</td>
      </tr>

      </table>

      <p class="total">
      Total Amount : ${formatCurrency(total)}
      </p>

      <div class="footer">
      Thank you for choosing <b>TripPartner</b>.<br/>
      Have a safe journey!
      </div>

      </body>
      </html>
    `;

    const invoice = window.open("", "_blank");

    invoice.document.write(html);
    invoice.document.close();

    setTimeout(() => {
      invoice.print();
    }, 500);
  };

  return (
    <div className=" inset-0 z-50 flex items-center justify-center bg-white/20">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">

        <h2 className="text-2xl font-bold text-slate-800">
          Book Your Trip
        </h2>

        <p className="mt-1 mb-5 text-sm text-slate-500">
          Fill your details to generate your booking invoice.
        </p>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border p-3"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full rounded-lg border p-3"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <select
            className="w-full rounded-lg border p-3"
            value={form.destination}
            onChange={(e) =>
              setForm({
                ...form,
                destination: e.target.value,
              })
            }
          >
            {Object.keys(pricing).map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-3">

            <input
              type="date"
              className="rounded-lg border p-3"
              value={form.checkIn}
              onChange={(e) =>
                setForm({
                  ...form,
                  checkIn: e.target.value,
                })
              }
            />

            <input
              type="date"
              className="rounded-lg border p-3"
              value={form.checkOut}
              onChange={(e) =>
                setForm({
                  ...form,
                  checkOut: e.target.value,
                })
              }
            />

          </div>

          <div className="grid grid-cols-2 gap-3">

            <select
              className="rounded-lg border p-3"
              value={form.guests}
              onChange={(e) =>
                setForm({
                  ...form,
                  guests: e.target.value,
                })
              }
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={5}>5 Guests</option>
              <option value={6}>6 Guests</option>
            </select>

            <select
              className="rounded-lg border p-3"
              value={form.payment}
              onChange={(e) =>
                setForm({
                  ...form,
                  payment: e.target.value,
                })
              }
            >
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Net Banking</option>
              <option>Cash On Arrival</option>
            </select>

          </div>

          <div className="rounded-xl bg-slate-100 p-4">

            <div className="flex justify-between">
              <span>Price / Person</span>
              <span>{formatCurrency(unit)}</span>
            </div>

            <div className="mt-2 flex justify-between">
              <span>Guests</span>
              <span>{form.guests}</span>
            </div>

            <div className="mt-2 flex justify-between text-xl font-bold text-emerald-600">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

          </div>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={printInvoice}
            className="rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700"
          >
            Download Invoice
          </button>

        </div>

      </div>
    </div>
  );
};

export default InvoiceModal;