function changeSliderStyle(event) {
  var slider = event.target;
  var output = event.target.nextElementSibling;
  
  console.log(slider);
  console.log(output);
  
  // change slider background color
  var x = slider.value;
  var backgroundPrecentage = (100 / 5) * x;
  
  switch (true) {
    case (x == 0):
      var color = '#F0F0F0';
      break;
    case (x == 1):
      var color = 'linear-gradient(90deg, rgba(181, 223, 200, 0.8)' + backgroundPrecentage + '%, rgb(240,240,240)' + backgroundPrecentage + '%)';
      break;
    case (x == 2):
      var color = 'linear-gradient(90deg, rgba(149, 209, 175, 0.85)' + backgroundPrecentage + '%, rgb(240,240,240)' + backgroundPrecentage + '%)';
      break;
    case (x == 3):
      var color = 'linear-gradient(90deg, rgba(117, 195, 152, 0.9)' + backgroundPrecentage + '%, rgb(240,240,240)' + backgroundPrecentage + '%)';
      break;
    case (x == 4):
      var color = 'linear-gradient(90deg, rgba(85, 182, 128, 0.95)' + backgroundPrecentage + '%, rgb(240,240,240)' + backgroundPrecentage + '%)';
      break;
    case (x == 5):
      var color = 'linear-gradient(90deg, rgb(53, 168, 104)' + backgroundPrecentage + '%, rgb(240,240,240)' + backgroundPrecentage + '%)';
      break;
  }
  
  slider.style.background = color;
  
  
  // change input value span
  const scores = [" ", "Very poor", "Below average", "Acceptable", "Good", "Very good"];
  output.innerHTML = scores[x];

  // change input span location
  const min = slider.min ? slider.min : 0;
  const max = slider.max ? slider.max : 100;
  const newVal = Number(((x - min) * 100) / (max - min));
  output.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  
}
