# FieldTrak

**FieldTrak** is a lightweight browser-based tool designed to help field technicians quickly log work orders, station inspections, and daily notes directly from a phone, tablet, or laptop.

It focuses on **simple data capture in the field**, while keeping compatibility with existing company systems.

---

## Why FieldTrak?

Field technicians often face several challenges:

- Handwritten work orders that are hard to read
- Double entry of data (paper → system)
- Delays in transferring field notes to databases
- Lack of standardized reports
- Difficulty attaching photos to field logs

FieldTrak aims to simplify this process with a **minimal, offline-friendly digital tool**.

---

## Features

### Work Order Logging
Technicians can record:

- Date
- Work location
- Vehicle plate
- Start and end time
- Technician name
- Tasks performed

Reports can be exported as **PDF or email summaries**.

---

### Station Inspection Reports

FieldTrak allows technicians to log station inspections including:

- Gas meter reading
- Electric meter reading
- Technician name
- Station name and location
- Anomaly reporting
- Notes and recommended actions
- Optional photo documentation

Reports can be exported for **email or PDF printing**.

---

### Calendar Notes

A built-in calendar allows technicians to:

- Save notes per day
- Track site visits
- Export monthly notes via PDF or email

---

### History

The system stores previous entries locally so technicians can:

- Review past work orders
- View station inspections
- Copy previous reports

---

## Key Design Principles

FieldTrak was designed with the following goals:

- **Offline-first** – works without internet connection
- **Mobile-friendly** – optimized for phones and tablets
- **Non-intrusive** – does not replace existing company systems
- **Lightweight** – no backend or database required
- **Easy to deploy** – can run directly from GitHub Pages

All records are stored locally in the browser using `localStorage`.

---

## Technology

FieldTrak is intentionally simple:

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage for local data storage
- PWA support (Service Worker + Manifest)

This makes it easy to deploy, audit, and adapt.

---

## Deployment

You can deploy FieldTrak easily using **GitHub Pages**.

Steps:

1. Upload the repository to GitHub
2. Go to **Settings → Pages**
3. Select **Deploy from branch**
4. Choose the `main` branch
5. Set folder to `/root`
6. Save

Your app will be available at:
https://theo79.github.io/fieldtrak

---

## Project Status

FieldTrak is currently a **prototype / experimental tool**.

The goal is to evaluate how a lightweight field logging system can improve:

- reporting clarity
- technician productivity
- field documentation

Future improvements may include:

- cloud sync
- export to structured formats (CSV/API)
- integration with SCADA or maintenance systems

---

## Author

Theocharis Anastopoulos

---

## License

This project is currently released for **demonstration and research purposes**.
