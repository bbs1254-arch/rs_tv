const videoGrid = document.getElementById("video-grid");
const loading = document.getElementById("loading");

const mockVideos = [
    { id: "v1", title: "RS_TV 2025 Short #1", date: "2025-12-05", thumbnailUrl: "assets/placeholder1.jpg" },
    { id: "v2", title: "RS_TV 2025 Short #2", date: "2025-12-06", thumbnailUrl: "assets/placeholder2.jpg" }
];

function renderVideo(video) {
    return `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="${video.thumbnailUrl}" class="w-full h-auto">
            <div class="p-4">
                <h3 class="text-lg font-semibold">${video.title}</h3>
                <p class="text-sm text-gray-400">${video.date}</p>
            </div>
        </div>
    `;
}

async function loadVideos() {
    loading.style.display = "block";
    videoGrid.innerHTML = "";

    setTimeout(() => {
        loading.style.display = "none";
        videoGrid.innerHTML = mockVideos.map(renderVideo).join("");
    }, 1200);
}

window.onload = loadVideos;
