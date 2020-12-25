//Minha key API
let apiKey = {
    key: "799c4046-0309-4406-93a2-7017c83a1532"
};

// GET Fetch
fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apiKey.key).then(
    (response) => {
        if(!response.ok) throw new Error("Erro na execução, status: " + response.status);
        return response.json();
    }
).then((api) => {

    let texto = "";

    for (let i = 0; i < 10; i++) {
        
        texto = texto + `
            
        <div class="media">
        <img src="assets/coin.png" alt="coin" class="align-self-center mr-3" width="80" height="80">
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
            </div>
        </div>
        <br>

        
        `;

        document.getElementById("coins").innerHTML = texto;
        
    }
    console.log(api);
}
).catch((error) => {
    console.error(error.message);
});