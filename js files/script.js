const speakers = [
  {
    image: 'images/Crosby.0368d0d0.png',
    title: 'Niall Crosby',
    decription: 'CEO / Founder',
    descriptioninfo: 'Providing a library that supports multiple frameworks is a huge challenge, my team an I came up with a way for our grid component to support all frameworks.',

  },
  {
    image: 'images/Rakowski.317b77c2.png',
    title: 'Nivetha Maran',
    decription: 'Software Engineer Pro',
    descriptioninfo: 'Learn all about the react hooks, the main advantages of react hooks, different type of hooks, and how it can replace with redux in most of the applications.',
  },
  {
    image: 'images/Hawkins.d3e858f0.png',
    title: 'Tyler Hawkins',
    decription: 'Senior Software Engineer',
    descriptioninfo: 'Test development is a programming paradigm in which you write your tests first and your source code. It is perfect when you’re writing code that has clear inputs',
  },

  {
    image: 'images/Kehl.6d83b400.png',
    title: 'Roy Derks',
    decription: 'Developer Experience',
    descriptioninfo: 'TypeScript aids JavaScript applications. They make sure that your props are passed in the correct form and shape throughout your application.',
  },

];

const body = document.querySelector('#feature-section');

const main = document.createElement('div');

function speaker(speaker) {
  return `
  <div class="main-sub-feature">

    

    <div class="feature-img-container">
      <img class="background-img" src="./images/Screenshot 2023-03-21 065729 (2).png" alt="">
      <img class="feature-img" src="${speaker.image}" alt="feature-img">
    </div>

    <div class="nab">
      <h3>${speaker.title}</h3>
      <span class="feature-span">${speaker.decription}</span>
      <div class="feature-sub-hr-container">
      <hr class="feature-sub-hr">
      </div>
      <p class="feature-description">
      ${speaker.descriptioninfo}
      </p>
    </div>

    
  </div>`;
}

body.appendChild(main);
main.innerHTML = ` 
  <div class="feature-container">

  <div class="feature-sub-container">
      <div class="feature-title">
          <h2 class="feature-text">
              Featured Speakers
          </h2>
          <hr class="feature-hr">
      </div>
  </div>

  <div class="main-feature">
  ${speakers.map((s) => speaker(s))}
  </div>
<div class="button-container">
<button class="btn check-button"><span class="btn-text">MORE <i class="fa-solid fa-caret-down "></i></button>
</div>
</div>
  
  `;
