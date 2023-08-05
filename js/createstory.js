        // Function to create a single HTML piece based on the JSON data
        function createStoryPiece(pieceData) {
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

        // Function to append the HTML pieces to the 'pieces-container' div
        function appendPiecesToStoryContainer(data) {
            const container = document.getElementById('pieces-container-1');
            data.forEach((pieceData) => {
                container.innerHTML += createStoryPiece(pieceData);
            });
        }

        // Fetch the JSON data from 'data.json'
        fetch('./js/datastory.json')
            .then(response => response.json())
            .then(data => {
                appendPiecesToStoryContainer(data);
            })
            .catch(error => console.error('Error fetching data:', error));