export default class Popover {
  constructor() {
    this.div = document.createElement('div');
    this.button = document.querySelector('.button');

    this._createPopover();
  }

  _createPopover() {
    this.div.className = 'popover';
    this.div.innerHTML = `
      <div class="popover_header">Popover title</div>
      <div class="popover_text">And here's some amazing content It's very engaging. Right?</div>
    `;
  }

  _showPopover() {
    const { left, top } = this.button.getBoundingClientRect();
    this.div.style.top = `${top - 110}px`;
    this.div.style.left = `${left + (this.button.offsetWidth / 2) - 125}px`;

    document.querySelector('.container').append(this.div);
  }

  _hidePopover() {
    this.div.remove();
  }

  showHide() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.button.classList.toggle('show');
      if (this.button.classList.contains('show')) {
        this._showPopover();
      } else {
        this._hidePopover();
      }
    });
  }
}
