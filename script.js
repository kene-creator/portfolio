const burgerIcon = document.querySelector('.burger-icon');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const modalList = document.querySelector('.modal-list');
const btnSection = document.querySelectorAll('.btn-work-section');
const btnSectionClose = document.querySelector('.modal-phone-close');
const overlay = document.querySelector('.overlay');
const modalMarkup = document.querySelector('.modal-markup');

const modalOpen = () => {
  modal.classList.remove('hidden');
};

const modalSectionOpen = () => {
  overlay.classList.remove('hidden');
};

const modalSectionClose = () => {
  overlay.classList.add('hidden');
};

const modalClose = () => {
  modal.classList.add('hidden');
};

burgerIcon.addEventListener('click', (e) => {
  e.preventDefault();
  modalOpen();
});

btnCloseModal.addEventListener('click', modalClose);

modalList.addEventListener('click', (e) => {
  e.preventDefault();
  modalClose();

  if (e.target.classList.contains('modal-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const infoArr = [
  {
    nameMobile: 'Tonic',
    nameDesktop: 'Tonic',
    imgDesktop: 'img/Snapshoot-Desktop-1.png',
    imgMobile: 'img/Snapshoot-Portfolio.png',
    descriptionDesktop:
      'A daily selection of privately read personalized reads; no accounts or sign-ups required',
    descriptionMobile:
      'A daily selection of privately read personalized reads; no accounts or sign-ups required',
    technologyMobile: ['Html', 'Css', 'Javascript'],
    technologyDesktop: [
      'Html',
      'Css',
      'Javascript',
      'github',
      'Ruby',
      'Github',
      'Bootstrap',
    ],
    linkToLive: 'https://kene-creator.github.io/portfolio/',
    linktoSource: 'https://github.com/kene-creator/portfolio/tree/main',
  },
  {
    nameMobile: 'Multi-Post Stories',
    nameDesktop: 'Multi-Post Stories',
    imgDesktop: 'img/Snapshoot-Portfolio(3).png',
    imgMobile: 'img/Snapshoot-Portfolio(1).jpg',
    descriptionDesktop:
      ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionMobile:
      'A daily selection of privately read personalized reads; no accounts or sign-ups required',
    technologyMobile: ['Html', 'Css', 'Javascript'],
    technologyDesktop: [
      'Html',
      'Css',
      'Javascript',
      'github',
      'Ruby',
      'Github',
      'Bootstrap',
    ],
    linkToLive: 'https://kene-creator.github.io/portfolio/',
    linktoSource: 'https://github.com/kene-creator/portfolio/tree/main',
  },

  {
    nameMobile: 'Tonic',
    nameDesktop: 'Facebook 360',
    imgDesktop: 'img/Snapshoot-Portfolio.png',
    imgMobile: 'img/Snapshoot-Portfolio(2).png',
    descriptionDesktop:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    descriptionMobile:
      'A daily selection of privately read personalized reads; no accounts or sign-ups required',
    technologyMobile: ['Html', 'Css', 'Javascript'],
    technologyDesktop: [
      'Html',
      'Css',
      'Javascript',
      'github',
      'Ruby',
      'Github',
      'Bootstrap',
    ],
    linkToLive: 'https://kene-creator.github.io/portfolio/',
    linktoSource: 'https://github.com/kene-creator/portfolio/tree/main',
  },

  {
    nameMobile: 'Multi-Post Stories',
    nameDesktop: 'Uber Navigation',
    imgDesktop: 'img/Snapshoot-Portfolio(1).jpg',
    imgMobile: 'img/Snapshoot-Portfolio(3).png',
    descriptionDesktop:
      ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer car.',
    descriptionMobile:
      'A daily selection of privately read personalized reads; no accounts or sign-ups required',
    technologyMobile: ['Html', 'Css', 'Javascript'],
    technologyDesktop: [
      'Html',
      'Css',
      'Javascript',
      'github',
      'Ruby',
      'Github',
      'Bootstrap',
    ],
    linkToLive: 'https://kene-creator.github.io/portfolio/',
    linktoSource: 'https://github.com/kene-creator/portfolio/tree/main',
  },
];

const renderMarkup = (e) => {
  modalMarkup.innerHTML = '';
  const markupPhone = `

  <div class="modal-phone">
   
    <h2 class="modal-heading display">${infoArr[e].nameMobile}</h2>
    <h2 class="modal-heading display-none">${infoArr[e].nameDesktop}</h2>
  
    <div class="modal-sub-info">
      <p class="section-text-black display">canopy</p>
      <p class="section-text-black display-none">Uber</p>
      <span class="dot"></span>
      <p class="section-text-grey display">Back End Dev</p>
      <p class="section-text-grey display-none">Lead Developer</p>
      <span class="dot"></span>
      <p class="section-text-grey display">2015</p>
      <p class="section-text-grey display-none">2018</p>
    </div>
  
    <div class="modal-img">

      <img
      src="${infoArr[e].imgMobile}"
        alt="Tonic"
        class="img display modal-img-mobile"
      />

      <div class="display-none">
        <div class="">
        <img src="${infoArr[e].imgDesktop}" class="modal-img-desktop">
        </div>
      </div>
      
     
    </div>

    <div class="modal-text">
      <p class="modal-paragraph display">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essent
    </p>
    <p class="modal-paragraph display-none">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a 
    </p>

    <div>
    <div class="modal-info-btn">
    <ul class="info-list modal-mobile">
    ${infoArr[e].technologyMobile.map(
      (el) => ` <li class="info-btn">${el}</li>`
    )}
    </ul>
    <ul class="info-list modal-desktop">
    ${infoArr[e].technologyDesktop.map(
      (el) => ` <li class="modal-information">${el}</li>`
    )}
    </ul>
  </div>

  <div class="modal-btns">
    <a href="${infoArr[e].linkToLive}" class="modal-btn">
      See Live
      <img
        src="img/link-blue.png"
        alt="link icon"
        class="modal-link-img"
      />
    </a>

    <a href="${infoArr[e].linktoSource}" class="modal-btn">
      See Source
      <img
        src="img/github-blue.png"
        alt="github icon"
        class="modal-link-img"
      />
    </a>
  </div>
    </div>

 
    </div>
  
    
  </div>`;

  modalMarkup.insertAdjacentHTML('afterbegin', markupPhone);
};

for (let i = 0; i < btnSection.length; i++) {
  btnSection[i].addEventListener('click', () => {
    modalSectionOpen();
    if (i === 4) {
      return renderMarkup(i - 1);
    } else {
      return renderMarkup(i);
    }
  });
}

// btnSection.forEach((el, index) => {
//   el.addEventListener('click', (el) => {
//     console.log('this is the target', el.target);
//     console.log('this is the target', index);
//     if (index === 4) {
//       renderMarkup(index - 1);
//     } else {
//       renderMarkup(index);
//     }
//     Number(el.target.id.split('-')[1]) - 1;
//     modalSectionOpen(el);
//   });
// });
btnSectionClose.addEventListener('click', modalSectionClose);

// const generateLi = function(e) {
//   return ` <li class="info-btn">${}</li>`
// }
