const galleryGrid = document.getElementById('gallery-grid');
const loadingStatus = document.getElementById('loading');

async function fetchArtworks() {
    try {
        loadingStatus.classList.remove('hidden');

        const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=12&fields=id,title,artist_display,date_display,image_id');
        const data = await response.json();

        galleryGrid.innerHTML = '';
        loadingStatus.classList.add('hidden');

        displayArt(data.data);
    } catch (error) {
        console.error("Error fetching art:", error);
        loadingStatus.innerText = "Failed to load gallery. Please try again later.";
    }
}

function displayArt(artArray) {
    artArray.forEach(art => {
        if (!art.image_id) return;

        const card = document.createElement('div');
        card.className = 'art-card';

        const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`;

        card.innerHTML = `
            <div class="polaroid-frame">
                <img src="${imageUrl}" alt="${art.title}">
                <div class="art-info">
                    <h3>${art.title}</h3>
                    <p>${art.artist_display}</p>
                    <span class="date">${art.date_display}</span>
                </div>
            </div>
        `;
        galleryGrid.appendChild(card);
    });
}

fetchArtworks();
