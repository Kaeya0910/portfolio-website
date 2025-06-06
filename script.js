console.log("JS loaded");

document.addEventListener('DOMContentLoaded', () => {
  const arrowRight = document.querySelector('.achievement-box .navigation .arrow-right');
  const arrowLeft = document.querySelector('.achievement-box .navigation .arrow-left');
  const imgSlide = document.querySelector('.achievement-carousel .img-slide');
  const achievementDetails = document.querySelectorAll('.achievement-detail');
  const maxIndex = achievementDetails.length - 1;

  let index = 0;

  const updateNavigationState = () => {
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === maxIndex);
  };

  const activeAchievement = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    achievementDetails.forEach(detail => detail.classList.remove('active'));
    achievementDetails[index].classList.add('active');
    updateNavigationState();
  };

  arrowRight.addEventListener('click', () => {
    if (index < maxIndex) {
      index++;
      activeAchievement();
    }
  });

  arrowLeft.addEventListener('click', () => {
    if (index > 0) {
      index--;
      activeAchievement();
    }
  });

  activeAchievement();
});