const block = document.querySelector('.list');
const smth = document.getElementById('smth')

fetch('https://fakestoreapi.com/products?limit=10')
.then(res => res.json())
.then(info =>{
    function renderUser(user){
        block.innerHTML = '';
        user.forEach(object => {
            const newLi = document.createElement('li');
            newLi.className = 'box'
            newLi.innerHTML = `
            <div class='card'>
                <img src="${object.image}" alt="${object.title}">
                <div class="text">
                    <h2>${object.title}</h2>
                    <h3>$${object.price}</h3>
                </div>
            </div>
            `;
            block.appendChild(newLi);
        });
    }
    renderUser(info);
        smth.addEventListener('input', () =>{
            const value = smth.value.toLowerCase().trim();
            const filtered = info.filter(user =>
                user.title.toLowerCase().includes(value) ||
                user.price.toLowerCase().includes(value)
            );
            renderUser(filtered);

        });
})
.catch(error => alert('Error!!!'));