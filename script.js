//Variables
const carAPI = "https://source.unsplash.com/featured/?cars";
const flowerAPI = `https://source.unsplash.com/featured/?flowers`;
let catImg = document.getElementById("catimg");
let changeBtn = [...document.getElementsByClassName("change_image")];
let imageUrl;
//Default Call
apiCall(flowerAPI);

async function apiCall(API) {
    const response = await fetch(API);
    console.log(response);
    imageUrl = response.url;
    catImg.src = imageUrl;
}
catImg.addEventListener("click", () => {
    openLinkInBackground(imageUrl);
});

changeBtn.forEach((e) => {
    e.addEventListener("click", async () => {
        changeBtn.forEach((e) => {
            e.disabled = true;
        });
        if (e.id == "flower-image") {
            await apiCall(flowerAPI);
        } else if (e.id === "car-image") {
            await apiCall(carAPI)
        }

        catImg.addEventListener("load", () => {
            changeBtn.forEach((e) => {
                e.disabled = false;
            });
        });
    });
});

function openLinkInBackground(url) {
    var link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
