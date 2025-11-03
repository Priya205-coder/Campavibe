const addEventForm = document.getElementById('add-event-form');
      const eventContainer = document.getElementById('event-container');
      const searchForm = document.getElementById('search-form');
      const searchInput = document.getElementById('search-input');


      addEventForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('event-name').value;
        const date = document.getElementById('event-date').value;
        const desc = document.getElementById('event-desc').value;


        const card = document.createElement('div');
        card.classList.add('event-card');
        card.innerHTML = `
        <h3>${name}</h3>
        <p class="date">${date}</p>
        <p>${desc}</p>
      `;


        eventContainer.appendChild(card);


        addEventForm.reset();
      });


      searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();

        const cards = document.querySelectorAll('.event-card');

        if (query === '') {
          alert('Please enter a search term.');
          return;
        }

        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(query) ? '' : 'none';
        });
      });