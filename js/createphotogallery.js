        // Function to create a single HTML piece based on the JSON data
        function createPhotobox(pieceData) {
            return `
            <!--Piece ${pieceData.length}-->
            <div class="photo-piece">

            <div class= "photoviewport">
                <h3><a href="${pieceData.src}">${pieceData.title}</a></h3>
                <p class="info">${pieceData.info}</p>
                <p class="brief">${pieceData.brief}</p>
            </div>
            
            <div class= "photogallery">
                <a href="${pieceData.src}">       
                <img src="${pieceData.img}" alt="Placeholder image">
                </a>  
            </div>

        </div>
            `;
        }

        // Function to append the HTML pieces to the 'other-pieces-container' div
        function appendBoxToContainer(data) {
            const container = document.getElementById('photocontainer');
            data.forEach((pieceData) => {
                container.innerHTML += createPhotobox(pieceData);
            });
        }

        // Fetch the JSON data from 'data.json'
        fetch('./js/photojournalism.json')
            .then(response => response.json())
            .then(data => {
                appendBoxToContainer(data);
            })
            .catch(error => console.error('Error fetching data:', error));