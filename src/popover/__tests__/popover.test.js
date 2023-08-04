import Popover from '../js/popover.js';

beforeEach(() => {
  document.body.innerHTML = `
    <main class="content">
      <div class="container">
        <form class="popover_form">
          <button class="button">
            Click to toggle popover
          </button>
        </form>
      </div>
    </main>
  `;
});

test('Popover._createPopover()', () => {
  const popover = new Popover();
  const result = popover.div.className;

  expect(result).toBe('popover');
});

test('Popover.showHide()', () => {
  const popover = new Popover();
  popover.showHide();
  popover.button.click();
  let result1 = document.querySelector('.popover') ? true : false;
  let result2 = popover.button.classList.contains('show');

  expect(result1).toBe(true);
  expect(result2).toBe(true);

  popover.button.click();
  result1 = document.querySelector('.popover') ? true : false;
  result2 = popover.button.classList.contains('show');

  expect(result1).toBe(false);
  expect(result2).toBe(false);
});
