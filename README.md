Ejercicio 3: Intro section with dropdown navigation

Este ejercicio crea una pagina responsive con html, css, javascript.

![image](https://github.com/user-attachments/assets/354e17bc-8594-4d34-a4a4-7c46af8d30a1)

## Código
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
  <link rel="stylesheet" href="./styles.css">
  <title>Frontend Mentor | Intro section with dropdown navigation</title>
</head>
<body>
  <div class="prueba">
    <div class="prueba__hijo">
    </div>
  </div>
  <header>
    <img class="logo" src="./images/logo.svg" alt="logo" />
    <img id="hamburger-menu" class="hamburger-menu" src="./images/icon-menu.svg" alt="">
    <nav>
      <div class="back"></div>
        <div class="front">
          <div class="close-img-container">
            <img id="close-btn" src="./images/icon-close-menu.svg" alt="">
          </div>
          <ul>
            <li class="features-ul-container">
              <button id="features-btn" class="menu-btn">Features <img id="features-btn-arrow" src="./images/icon-arrow-down.svg" alt=""> </button>
              <ul id="features-ul" class="features-ul">
                <li>
                  <img class="features-img" src="./images/icon-todo.svg" alt="">
                  <span>Todo List</span>
                </li>
                <li> 
                  <img class="features-img" src="./images/icon-calendar.svg" alt="">
                  <span>Calendar</span>
                </li>
                <li>
                  <img class="features-img" src="./images/icon-reminders.svg" alt="">
                  <span>Reminders</span>
                </li>
                <li>
                  <img class="features-img" src="./images/icon-planning.svg" alt="">
                  <span>Planning</span>
                </li>
              </ul>
            </li>
            <li class="company-ul-container">
              <button id="company-btn" class="menu-btn">Company <img id="company-btn-arrow" src="./images/icon-arrow-down.svg" alt=""> </button>
              <ul id="company-ul" class="company-ul">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div class="btns-container">
            <button class="login-btn btn">Login</button>
            <button class="register-btn btn">Register</button>
          </div>
        </div>
      
    </nav>
  </header>

  <main>
    <section>
      <h2>Make remote work</h2>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button>Learn more</button>
      <div class="logos-container">
        <img class="databiz" src="./images/client-databiz.svg" alt="" />
        <img class="audio" src="./images/client-audiophile.svg" alt="" />
        <img class="meet" src="./images/client-meet.svg" alt="" />
        <img class="maker" src="./images/client-maker.svg" alt="" />
      </div>
    </section>
    <picture >
      <source
        srcset="./images/image-hero-mobile.png"
        media="(max-width: 1023px)"
      />
      <source
        srcset="./images/image-hero-desktop.png"
        media="(min-width: 1024px)"
      />
      <img class="hero-image" src="./images/image-hero-mobile.png" alt="hero-image" />
    </picture>
  </main>

  <script src="main.js"></script>

</body>
</html>
