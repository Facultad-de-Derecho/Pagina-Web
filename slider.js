document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    };

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});

<script>
        // Función para cargar las publicaciones desde la API de Facebook
        function loadFacebookPosts() {
            const pageId = 'facultaddederechomazatlan.uas.7';
            const accessToken = '{ACCESS_TOKEN}';  // Reemplaza con tu token de acceso

            // Realizar la solicitud a la API de Facebook
            fetch(`https://graph.facebook.com/v17.0/${pageId}/posts?access_token=${accessToken}`)
                .then(response => response.json())
                .then(data => {
                    const postsContainer = document.getElementById('facebook-posts');
                    data.data.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.innerHTML = `<p>${post.message}</p>`;
                        postsContainer.appendChild(postElement);
                    });
                })
                .catch(error => console.error('Error al cargar las publicaciones:', error));
        }

        // Cargar las publicaciones cuando la página esté lista
        document.addEventListener('DOMContentLoaded', loadFacebookPosts);
    </script>
