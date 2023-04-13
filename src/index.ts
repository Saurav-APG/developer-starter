import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Saurav';
  greetUser(name);
  document.body.style.backgroundColor = 'pink';
});
