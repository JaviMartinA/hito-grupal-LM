const marvel = {
    render: () =>{
        const urlApi = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=30cdef5fcee3c8955215281b76160593&hash=a93e0213728bcf8c65e0cfc0fab57057`;
        const container = document.querySelector('#marvel-row');

        let contentHTML = '';

        fetch(urlApi)
        .then(res => res.json())
        .then((json) =>{
            console.log(json)
            for(const personaje of json.data.results){
                let urlPersonaje = personaje.urls[0].url;
                contentHTML += `
                <div class="col-md-4 caja">
                    <div class= "bordeTop">
                        <a href="${urlPersonaje}" target="_blank">
                            <img class="imagen" src="${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" class="img-thumbnail">
                        </a>
                    </div>
                    <h3 class="title">
                        ${personaje.name}
                    </h3><hr>
                </div>`
            }
            container.innerHTML = contentHTML;
        })
    }
};


marvel.render();
