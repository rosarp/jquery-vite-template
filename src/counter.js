import $ from 'jquery'

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    $(element).html(`count is ${counter}`);
  }
  $(element).on(
    'click',
    () => setCounter(counter + 1)
  );
  setCounter(0)
}
