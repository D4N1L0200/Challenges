const container = document.getElementById("challenges");

async function loadChallenge(num) {
	try {
		const response = await fetch(`challenges/${num}/info.json`);
		const data = await response.json();

		const card = document.createElement("div");
		card.className = "challenge-card";
		card.onclick = () =>
			(window.location.href = `challenges/${num}/main.html`);

		card.innerHTML = `
              <img src="challenges/${num}/preview.png" alt="${data.title}" />
              <h2>${data.title}</h2>
              <p class="date">${data.date}</p>
            `;

		container.appendChild(card);
	} catch (error) {
		console.error(`Error loading challenge ${num}:`, error);
	}
}

async function loadChallenges() {
	try {
		const challengeList = [0, 1, 2, 3];

		for (let num of challengeList) {
			await loadChallenge(num);
		}
	} catch (error) {
		console.error("Error loading challenge list:", error);
	}
}

loadChallenges();
