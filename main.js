import { fetchData } from "./modules/fetch.js";
import { renderCards, clearCards } from "./modules/render.js";
import { filterUsers } from "./modules/filter.js";

const container = document.getElementById("card-container");

document.getElementById("show-all").addEventListener("click", async () => {
  const users = await fetchData();
  renderCards(users, container);
});

document.getElementById("show-less-ten").addEventListener("click", async () => {
  const users = await fetchData();
  const filtered = filterUsers(users);
  renderCards(filtered, container);
});

document.getElementById("clear").addEventListener("click", () => {
  clearCards(container);
});
