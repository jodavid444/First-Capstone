const speakers = {
    one: {
      image: 'images/Crosby.0368d0d0.png',
      title: 'Niall Crosby',
      decription: 'CEO / Founder',
      descriptioninfo: 'Providing a library that supports multiple frameworks is a huge challenge, my team an I came up with a way for our grid component to support all frameworks.',
    },
    two: {
      image: 'images/Rakowski.317b77c2.png',
      title: 'Nivetha Maran',
      decription: 'Software Engineer Pro',
      descriptioninfo: 'Learn all about the react hooks, the main advantages of react hooks, different type of hooks, and how it can replace with redux in most of the applications.',
    },
    three: {
      image: 'images/Hawkins.d3e858f0.png',
      title: 'Tyler Hawkins',
      decription: 'Senior Software Engineer',
      descriptioninfo: 'Test-driven development is a programming paradigm in which you write your tests first and your source code. It is perfect when you’re writing code that has clear inputs and outputs, like pure functions',
    },
  
    four: {
      image: 'images/Kehl.6d83b400.png',
      title: 'Roy Derks',
      decription: 'Developer Experience',
      descriptioninfo: 'Type systems like TypeScript are important when developing JavaScript applications. They make sure that your props are passed in the correct form and shape throughout your application. Together with GraphQLs query ,',
    },
  
  };
  
  const body = document.querySelector('#feature-section');
  
  const main = document.createElement('div');
  
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
      <div class="main-sub-feature">
          <div class="feature-img-container">
              <img class="feature-img" src="${speakers.one.image}" alt="feature-img">
          </div>
          <div>
              <h3>${speakers.one.title}</h3>
              <span class="feature-span">${speakers.one.decription}</span>
              <div class="feature-sub-hr-container">
                  <hr class="feature-sub-hr">
              </div>
              <p class="feature-description">
              ${speakers.one.descriptioninfo}
              </p>
          </div>
      </div>
      <div class="main-sub-feature section-1">
          <div class="feature-img-container">
              <img class="feature-img" src="${speakers.two.image}" alt="feature-img">
          </div>
          <div>
              <h3>${speakers.two.title}</h3>
              <span class="feature-span">${speakers.two.decription}</span>
              <div class="feature-sub-hr-container">
                  <hr class="feature-sub-hr">
              </div>
              <p class="feature-description">
              ${speakers.two.descriptioninfo}
              </p>
          </div>
      </div>
  </div>
  <div class="main-feature section-2">
      <div class="main-sub-feature">
          <div class="feature-img-container">
              <img class="feature-img" src="${speakers.three.image}" alt="feature-img">
          </div>
          <div>
              <h3>${speakers.three.title}</h3>
              <span class="feature-span">${speakers.three.decription}</span>
              <div class="feature-sub-hr-container">
                  <hr class="feature-sub-hr">
              </div>
              <p class="feature-description">
              ${speakers.three.descriptioninfo}
              </p>
          </div>
      </div>
      <div class="main-sub-feature">
          <div class="feature-img-container">
              <img class="feature-img" src="${speakers.four.image}" alt="feature-img">
          </div>
          <div>
              <h3>Niall Crosby</h3>
              <span class="feature-span">${speakers.four.decription}</span>
              <div class="feature-sub-hr-container">
                  <hr class="feature-sub-hr">
              </div>
              <p class="feature-description">
              ${speakers.four.descriptioninfo}
              </p>
          </div>
      </div>
  </div>
  <button class="btn"><span class="btn-text">MORE <i class="fa-solid fa-caret-down "></i></button>
  </div>
  
  `;
  
  const mobileDisplayBtn = document.querySelector('.btn');
  const cardSection = document.querySelector('.section-2');
  let showMore = true;
  
  mobileDisplayBtn.addEventListener('click', () => {
    if (showMore) {
      cardSection.classList.add('active');
      mobileDisplayBtn.innerHTML = ('LESS <i class="fa-solid fa-caret-up"></i>');
      showMore = false;
    } else {
      cardSection.classList.remove('active');
      mobileDisplayBtn.innerHTML = ' MORE <i class="fa-solid fa-caret-down"></i>';
      showMore = true;
    }
  });
  