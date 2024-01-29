<svg fill="none" viewBox="0 0 600 300" width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        @keyframes mv  {
            0% { transform: rotate( 0.0deg) }
           10% { transform: rotate(14.0deg) }
           20% { transform: rotate(-8.0deg) }
           30% { transform: rotate(14.0deg) }
           40% { transform: rotate(-4.0deg) }
           50% { transform: rotate(10.0deg) }
           60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .body{
          background-color: white;
        }

        .container {
          --color-main: gold;
          --color-primary: #7704CF;
          --color-secondary: #02F0E0;
          --color-tertiary: #F002DC;

          background: linear-gradient(-45deg, var(--color-main), var(--color-primary), var(--color-secondary), var(--color-tertiary));
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;

          width: 100%;
          height: 300px;

          display: flex;
          justify-content: center;
          align-items: center;
          color: white;

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        .mv {
          animation: mv 1.5s linear -0.5s infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
        
        h2 {
          font-size: 10px;
          color: #CF6E00;
        }
        
        .blue {
          background-color: blue;
        }
        .red {
          background-color: red;
        }
        .green {
          background-color: green;
        }

        @media (prefers-color-scheme: light) {
          .container {
            --color-main: gold;
            --color-primary: #7704CF;
            --color-secondary: #02F0E0;
            --color-tertiary: #F002DC;
          }
        }

        @media (prefers-reduced-motion) {
          .container {
            animation: none;
          }

          .hi {
            animation: none;
          }
        }
      </style>

  <div class="body">
  <div class="container">
  <h1>TIDE</h1>
  <p>Welcome to Tide <span class="mv">📚</span></p>
  </div>
  <div>
    <h2>About</h2>
    <p>Tide is an inclusive educational app for individuals in Africa with audio, visual, and verbal impairments, aiming to transcend limitations and provide a transformative learning experience. Our goal is to ensure online education becomes accessible and empowering for all.</p>
  </div>
  <div>
    <h2>Goal</h2>
    <div><span class"green">Building TIDE aligns with our group's larger goal of leveraging technology for positive social impact. By addressing a critical gap in accessible education, we aim to contribute to the empowerment of marginalized communities, fostering positive societal change.</span>
    
    <span class"blue">To create an app for impaired learners in Africa struggling to access online educational content, TIDE empowers users through adaptive learning, offering accessibility and personalization. Unlike traditional methods, our inclusive design ensures every learner can thrive.</span>
    
    <span class"red">TIDE is more than a product; it is a commitment to inclusivity, driven by the conviction that everyone, regardless of abilities or any impediment, deserves an equal opportunity to learn and grow.</span>
    </div>
  </div>
  <div>
    <h2>Background</h2>
    <p>Inspired by the United Nations Sustainable Development Goal 4, emphasizing inclusive and equitable quality education, TIDE addresses challenges faced by learners with diverse abilities, promoting a safe and inclusive learning environment.</p>
</div>
</div>
  </foreignObject>
</svg>
