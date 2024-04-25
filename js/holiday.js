document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    let greeting = '👋 Hi there!';
  
    if (currentMonth === 12 && currentDate.getDate() >= 25) {
      greeting = '🎄 Happy Holidays!';
      showSnowflakes(); // Call function to show snowflakes
    } else if (currentMonth === 1 && currentDate.getDate() === 1) {
      greeting = '🎆 Happy New Year!';
      showSnowflakes(); // Call function to show snowflakes
    }
  
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = greeting;
  
    function showSnowflakes() {
      const snowflakesElement = document.getElementById('snowflakes');
      snowflakesElement.style.display = 'block'; // Show the snowflakes
    }
  });
  