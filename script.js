// Dados simulando uma API
const users = [
    {
        id: 1,
        name: "Alice Maria",
        avatar: "https://i.pravatar.cc/60?img=1",
        bio: "Desenvolvedora Full Stack apaixonada por criar experiências incríveis e resolução de problemas"
    },
    {
        id: 2,
        name: "Henrique Pedro",
        avatar: "https://i.pravatar.cc/60?img=3",
        bio: "UI/UX Designer focado em criar interfaces bonitas e funcionais."
    },
    {
        id: 3,
        name: "Amanda Carol",
        avatar: "https://i.pravatar.cc/60?img=5",
        bio: "Especializada em cibersegurança e banco de dados."
    }
];

const loadBtn = document.querySelector('.load-btn')
const cardsContainer = document.querySelector('.cards-container')

function createUser (user){
    return `
           <div class="card">
              <img class="avatar" src="${user.avatar}" alt="usuario">
              <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
              </div>
           </div>
    `
}

function createSkeleton(){
    return `
         <div class="card">
             <div class="skeleton skeleton-card"></div>
             <div class="skeleton-content">
                 <div class="skeleton skeleton-title"></div>
                 <div class="skeleton skeleton-text"></div>
                 <div class="skeleton skeleton-text short"></div>
             </div>
        </div>

    `
}

function loadData(){
    loadBtn.disabled = true
    loadBtn.textContent = 'Carregando...'


    cardsContainer.innerHTML = users.map(createSkeleton).join('')

    setTimeout(() => {

       cardsContainer.innerHTML = users.map(createUser).join('')

       // MAPEAR ITEM POR ITEM DO ARRAY

        loadBtn.disabled = false
        loadBtn.textContent = 'Recarregar'

    }, 2000);
}

loadBtn.addEventListener('click', loadData)