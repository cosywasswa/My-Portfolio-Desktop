const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const container = document.querySelector('.container-all');
const allDetails = document.createElement('div');
container.appendChild(allDetails);
allDetails.innerHTML = `
<section class="grid-container" id="grid-container">
        <div class="recent-works">
          <h3>My Recent works</h3>
          <img class="line" src="images/images-self/line (2).png" />
        </div>
        <div class="works-container">
          <div class="box"></div>
          <div class="works1">
            <div class="works-head">
              <h3>Save The Planet</h3>
              <p class="paragraph">
              Save the plannet conference-website is a project for a global conference on climate change and Carbon-Zero. 
              It contains two pages i.e the home page and about me page.
              </p>
            </div>
            <div class="languages">
              <ul class="langul">
                <li><a href="index.html">CSS</a></li>
                <li><a href="index.html">HTML</a></li>
                <li><a href="index.html">Bootstrap</a></li>
                <li><a href="index.html">Ruby</a></li>
              </ul>
            </div>
            <div class="visit">
            <button type="button" class="btn-1" id="btn-1" onclick="popupopen()">See Project</button>
            </div>
           
          </div>
        </div>
        </section>
       
      <div class="all-projects">
        <section class="project">
          <div class="text1">
            <h2>Proffessional Art Printing Data</h2>
          </div>
          <div class="text2 none">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has ben the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
          <div class="projlang none">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">Bootstrap</a></li>
              <li><a href="index.html">Ruby</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open1" id="btn-2" onclick="popupopen1()">See Project</button>
          </div>
        </section>
        <section class="project1">
          <div class="text1">
            <h2>Data Dashboard Healthcare</h2>
          </div>
          <div class="text2">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has ben the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">Bootstrap</a></li>
              <li><a href="index.html">Ruby</a></li>
            </ul>
          </div>
          <div class="seeproject none">
          <button type="button" class="btn-1" btn-open2" id="btn-3" onclick="popupopen2()">See Project</button>
          </div>
        </section>
        <section class="project2">
          <div class="text1">
            <h2>Proffessional Art Printing Data</h2>
          </div>
          <div class="text2">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has ben the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">Bootstrap</a></li>
              <li><a href="index.html">Ruby</a></li>
            </ul>
          </div>
          <div class="seeproject none">
          <button type="button" class="btn-1" btn-open3" id="btn-4" onclick="popupopen3()">See Project</button>
          </div>
        </section>
        <section class="project3">
          <div class="text1">
            <h2>Proffessional Art Printing Data More</h2>
          </div>
          <div class="text2">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has ben the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">Bootstrap</a></li>
              <li><a href="index.html">Ruby</a></li>
            </ul>
          </div>
          <div class="seeproject none">
          <button type="button" class="btn-1" btn-open4" id="btn-5" onclick="popupopen4()">See Project</button>
          </div>
        </section>
        <section class="project4">
          <div class="text1">
            <h2>Data Dashboard Healthcare</h2>
          </div>
          <div class="text2">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has ben the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">Bootstrap</a></li>
              <li><a href="index.html">Ruby</a></li>
            </ul>
          </div>
          <div class="seeproject none">
          <button type="button" class="btn-1" btn-open5" id="btn-6" onclick="popupopen5()">See Project</button>
          </div>
        </section>
        <section class="project5">
          <div class="text1">
            <h2>Data Dashboard Healthcare</h2>
          </div>
          <div class="text2">
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has ben the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">Bootstrap</a></li>
              <li><a href="index.html">Ruby</a></li>
            </ul>
          </div>
          <div class="seeproject none">
          <button type="button" class="btn-1" btn-open6" id="btn-7" onclick="popupopen6()">See Project</button>
          </div>
        </section>
      </div>
    
`;

const popup = `
  
  <section class="project-details1" id="modal1" >
              <h2>Multi-Post Stories</h2>
              <h3 class="h3tittle">Keeping track of hundreds of components website</h3>
              <button onclick="popupclose()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/shotsforportfolio/desktop.PNG" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              Save the plannet conference-website is a project for a global conference on climate change and Carbon-Zero.
               It contains two pages i.e the home page and about me page.
              it is a responsive site for both mobile and desktop users

                   <p class="p-elements"> In recent years, the concept of achieving carbon zero or carbon neutrality has gained significant attention in the global effort to combat climate change. 
                   Carbon zero refers to the state in which the net emissions of carbon dioxide and other greenhouse gases produced by human activities are effectively balanced or offset by carbon removal or reduction methods. 
                   It is a crucial goal to mitigate the impacts of climate change and create a sustainable future for our planet..</p>
              </p>
            <ul class="clicks">
              <li><a href="https://cosywasswa.github.io/Capstone-Project1/">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/Capstone-Project1">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
        `;

const sectionWorks = document.querySelector('.container-all');

const popwindow = document.createElement('div');
popwindow.innerHTML = popup;

popwindow.classList.add('close1');

function popupopen() {
  sectionWorks.prepend(popwindow);
  popwindow.classList.remove('close1');
  popwindow.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose() {
  popwindow.classList.remove('.popup-container');
  popwindow.classList.add('close1');
  sectionWorks.removeChild(popwindow);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup1 = `
<section class="project-details1" id="modal2" >
              <h2>Proffessional Art Printing Data</h2>
              <h3 class="h3tittle">Keeping track of hundreds of components website</h3>
               <button onclick="popupclose1()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/pop-up/Snapshoot Portfolio.svg" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.

                   <p class="p-elements"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.</p>
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
      `;

const popwindow1 = document.createElement('div');
popwindow1.innerHTML = popup1;

popwindow1.classList.add('close1');

function popupopen1() {
  sectionWorks.prepend(popwindow1);
  popwindow1.classList.remove('close1');
  popwindow1.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose1() {
  popwindow1.classList.remove('.popup-container');
  popwindow1.classList.add('close1');
  sectionWorks.removeChild(popwindow1);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup2 = `
<section class="project-details1">
              <h2>Data Dashboard HealthCare</h2>
               <button onclick="popupclose2()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <img class="details-img1" src="images/pop-up/back2.svg" alt=" " />

              <p class="project-text">

                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
          </div>
        </section>
`;

const popwindow2 = document.createElement('div');
popwindow2.innerHTML = popup2;

popwindow2.classList.add('close1');

function popupopen2() {
  sectionWorks.prepend(popwindow2);
  popwindow2.classList.remove('close1');
  popwindow2.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose2() {
  popwindow2.classList.remove('.popup-container');
  popwindow2.classList.add('close1');
  sectionWorks.removeChild(popwindow2);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup3 = `
<section class="project-details1">
              <h2>Website Portfolio</h2>
               <button onclick="popupclose3()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <img class="details-img1" src="images/pop-up/back4.svg" alt=" " />

              <p class="project-text">

                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
          </div>
        </section>
`;

const popwindow3 = document.createElement('div');
popwindow3.innerHTML = popup3;

popwindow3.classList.add('close1');

function popupopen3() {
  sectionWorks.prepend(popwindow3);
  popwindow3.classList.remove('close1');
  popwindow3.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose3() {
  popwindow3.classList.remove('.popup-container');
  popwindow3.classList.add('close1');
  sectionWorks.removeChild(popwindow3);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup4 = `
<section class="project-details1">
              <h2>Proffessional Art Printing Data</h2>
               <button onclick="popupclose4()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <img class="details-img1" src="images/pop-up/back2.svg" alt=" " />

              <p class="project-text">

                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
          </div>
        </section>
`;

const popwindow4 = document.createElement('div');
popwindow4.innerHTML = popup4;

popwindow4.classList.add('close1');

function popupopen4() {
  sectionWorks.prepend(popwindow4);
  popwindow4.classList.remove('close1');
  popwindow4.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose4() {
  popwindow4.classList.remove('.popup-container');
  popwindow4.classList.add('close1');
  sectionWorks.removeChild(popwindow4);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup5 = `
<section class="project-details1">
              <h2>Data Dashboard Healthcare</h2>
               <button onclick="popupclose5()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <img class="details-img1" src="images/pop-up/back3.svg" alt=" " />

              <p class="project-text">

                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
          </div>
        </section>
`;
const popwindow5 = document.createElement('div');
popwindow5.innerHTML = popup5;

popwindow5.classList.add('close1');

function popupopen5() {
  sectionWorks.prepend(popwindow5);
  popwindow5.classList.remove('close1');
  popwindow5.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose5() {
  popwindow5.classList.remove('.popup-container');
  popwindow5.classList.add('close1');
  sectionWorks.removeChild(popwindow5);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup6 = `
<section class="project-details1">
              <h2>Website Portfolio</h2>
               <button onclick="popupclose6()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Ruby on Rails</li>
                </ul>
                </div>
                <img class="details-img1" src="images/pop-up/back3.svg" alt=" " />

              <p class="project-text">

                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essential.
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
          </div>
        </section>
`;

const popwindow6 = document.createElement('div');
popwindow6.innerHTML = popup6;

popwindow6.classList.add('close1');

function popupopen6() {
  sectionWorks.prepend(popwindow6);
  popwindow6.classList.remove('close1');
  popwindow6.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose6() {
  popwindow6.classList.remove('.popup-container');
  popwindow6.classList.add('close1');
  sectionWorks.removeChild(popwindow6);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

popupclose();
popupclose1();
popupclose2();
popupclose3();
popupclose4();
popupclose5();
popupclose6();
popupopen();
popupopen1();
popupopen2();
popupopen3();
popupopen4();
popupopen5();
popupopen6();
