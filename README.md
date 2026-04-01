# 🏛️ The Art History Vault

## 📖 Project Overview
The **Art History Vault** is a curated digital gallery that brings the masterpieces of the past into a modern, interactive web experience. Using data from the **Art Institute of Chicago**, this application allows users to explore a vast collection of classical artworks, ranging from oil paintings to ancient sculptures.

The project is designed with a **retro-vintage aesthetic**, utilizing a "Polaroid" grid layout to give digital art a tactile, nostalgic feel.

## 🚀 Features
* **Dynamic Data Fetching:** Integrates the Art Institute of Chicago API to display real-time artwork data.
* **Aesthetic UI:** A fully responsive, dark-themed interface with custom "Polaroid" styling for every artwork.
* **Smart Search:** Search for specific masterpieces by title or artist name using JavaScript `filter()`.
* **Categorical Filtering:** Narrow down the vault by medium (e.g., Paintings, Textiles, Sculptures).
* **Chronological Sorting:** Organize the gallery by the year of creation using JavaScript `sort()`.
* **Loading States:** Visual feedback provided while art data is being retrieved.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure for accessibility and SEO.
* **CSS3:** Custom styling featuring Flexbox/Grid and a retro-vintage color palette.
* **JavaScript (ES6+):** * `fetch` API for asynchronous data retrieval.
    * **Higher-Order Functions (HOFs):** Used exclusively for data manipulation (Map, Filter, Sort).
* **Version Control:** Managed via GitHub.

## 🌐 API Reference
This project uses the [Art Institute of Chicago API](https://api.artic.edu/docs/). 
* **Endpoint used:** `/api/v1/artworks`
* **Image Server:** Uses the IIIF (International Image Interoperability Framework) for high-quality image rendering.

## 📥 Setup & Installation
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/KartikNst/Art-History-Vault.git](https://github.com/KartikNst/Art-History-Vault.git)
