async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
async function main() {
  const users = await fetchData();
  const userCardsContainer = document.getElementById('user-cards');
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-md', 'p-6', 'w-64');
    card.innerHTML = `
      <h2 class="text-xl font-bold mb-2">${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <a href="#"><strong>Website:</strong> ${user.website}</a>
    `;
    userCardsContainer.appendChild(card);
  });
}
main();