const singersArray = [
  {
    name: 'Celines Diaz',
    picture: '../images/sing-celines.png',
    pictureAlt: 'Celines Singer photo',
    txtFeatures: 'She was born on December 31, in the city of Santo Domingo',
    txtExperience: 'In 2001, she signed a recording contract with BMG US Latin, in the city of Miami, and recorded her first album as a singer-songwriter, entitled "Seliné".',
  },
  {
    name: 'Martin Valverde',
    picture: './images/sin-valverde.png',
    pictureAlt: 'Valverde Singer photo',
    txtFeatures: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    txtExperience: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perspiciatis a sunt ullam deleniti! Pariatur temporibus cum voluptatem officiis quidem! Consectetur pariatur possimus perferendis ratione id rem, iure alias eligendi.',
  },
  {
    name: 'Athenas María Venica',
    picture: 'images/sing-athenas.png',
    pictureAlt: 'Athenas Singer photo',
    txtFeatures: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    txtExperience: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perspiciatis a sunt ullam deleniti! Pariatur temporibus cum voluptatem officiis quidem! Consectetur pariatur possimus perferendis ratione id rem, iure alias eligendi.',
  },
  {
    name: 'Hna. Glenda Hernández',
    picture: 'images/sing-glenda.png',
    pictureAlt: 'Hna. Glenda Singer photo',
    txtFeatures: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    txtExperience: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perspiciatis a sunt ullam deleniti! Pariatur temporibus cum voluptatem officiis quidem! Consectetur pariatur possimus perferendis ratione id rem, iure alias eligendi.',
  },
  {
    name: 'Yuli & Josh',
    picture: 'images/sing-JulyJosh.png',
    pictureAlt: 'Yuli & Josh Singers photo',
    txtFeatures: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    txtExperience: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perspiciatis a sunt ullam deleniti! Pariatur temporibus cum voluptatem officiis quidem! Consectetur pariatur possimus perferendis ratione id rem, iure alias eligendi.',
  },
  {
    name: 'Pbro. Rob Galea',
    picture: 'images/sing-pGalea.png',
    pictureAlt: 'Pbro. Rob Galea Singer photo',
    txtFeatures: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    txtExperience: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perspiciatis a sunt ullam deleniti! Pariatur temporibus cum voluptatem officiis quidem! Consectetur pariatur possimus perferendis ratione id rem, iure alias eligendi.',
  },
];

const singerContainer = document.querySelector('.singers-cards');
let singersHtml = '';

singersArray.forEach((card) => {
  singersHtml += `<div class="card-singer">
    <img src="${card.picture}" alt="${card.pictureAlt}" class="singer">
    <div class="singer-description">
      <h3>${card.name}</h3>                
      <p class="fetures">${card.txtFeatures}</p>
      <hr class="small-gray">
      <p class="singer-experience">${card.txtExperience}</p>
    </div>
  </div>
  `;
});

singerContainer.innerHTML = singersHtml;
