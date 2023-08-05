        // Function to create a single HTML piece based on the JSON data
        function createPiece(pieceData) {
            return `
                <!--Piece ${pieceData.length}-->
                <div class="piece">
                    <div class="blog-card">
                    <a href="${pieceData.src}">
                        <img src="${pieceData.img}" alt="Placeholder image">
                        <h3>
                            ${pieceData.title}
                        </h3>
                        <p class="info">
                            ${pieceData.info}
                        </p>
                        <p class="brief">
                            ${pieceData.brief}
                        </p>
                    </a>
                    </div>
                </div>
            `;
        }

        // Function to append the HTML pieces to the 'other-pieces-container' div
        function appendPiecesToContainer(data) {
            const container = document.getElementById('pieces-container-2');
            data.forEach((pieceData) => {
                container.innerHTML += createPiece(pieceData);
            });
        }

        // Fetch the JSON data from 'data.json'
        fetch('./js/otherstory.json')
            .then(response => response.json())
            .then(data => {
                appendPiecesToContainer(data);
            })
            .catch(error => console.error('Error fetching data:', error));