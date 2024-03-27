const searchForm = document.getElementById("search-form");
const searchBox= document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let access_key = "dtpCmfFTkCO_JzbTkVVF7gVW5c0kaf989O9Lv3jVpx8"
let keyword = "";
let page_no = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page_no}&query=${keyword}&client_id=${access_key}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    
    if(page_no === 1){
        searchResult.innerHTML = "";
    }
   
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");      
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    searchImage()
})

showMoreBtn.addEventListener("click",()=>{
page_no++;
searchImage()
})