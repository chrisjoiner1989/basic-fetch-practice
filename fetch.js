export async function fetchData() {
  try {
    const response = await fetch(
      "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "user-card";

  card.innerHTML = `
    <h3;>${user.name}</h3;
    <p><strong>Email:</strong>  ${user.email}</p>;
    <p><strong>Phone:</strong> ${user.phone}</p>;
    <p><strong>Company:</strong> ${user.company.name}</p>;
    <p><strong>Years at Company</strong> ${user.yearsEmployed}</p>`;
  return card;
}

export function filterUsers(users) {
  return users.filter((user) => user.yearsEmployed < 10);
}

export function renderCards(user, container) {
  clearCards(container);
  users.forEach((user) => {
    const card = createUserCard(user);
    container.appendChild(card);
  });
}

export function clearCards(container) {
  container.innerHTML = "";
}
