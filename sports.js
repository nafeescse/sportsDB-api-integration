
// const searchText = searchField.value;/
const searchSport = () => {
    let searchField = document.getElementById('searchField');
    let searchText = searchField.value;
    if(searchText == ''){
        window.alert('Search something')
    }else{
    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;

    document.getElementById('spinner').style.display = 'block';
    fetch(url)
        .then(res => res.json())
        .then(data => loadSearch(data.player));
    }
        // searchField.value =  '';
}

// searchSport();

const loadSearch = results => {
    document.getElementById('spinner').style.display = 'none';
    // console.log(results);
    if (results == null) {
        console.log('nothing found');
    } else {

        // const container = document.getElementById('container');
        const card = document.getElementById('card');
        card.innerHTML = '';

        for (const result of results) { 
            console.log(result);
            
            const div = document.createElement('col');
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${result.strThumb}" class="card-img-top img-fluid">
            <div class="card-body">
            <h5 class="card-title">${result.strNationality}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button onclick='details(${result.idPlayer})' class="btn btn-primary">Details</button>
            </div>
            </div>
            `
            card.appendChild(div);

        }
    }
}

const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.players[0].strPlayer));
    

}