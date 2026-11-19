(() => {
  'use strict';
  const panel = document.querySelector('.network-panel');
  if (!panel) return;
  const controls = panel.querySelector('.network-controls');
  const buttons = [...panel.querySelectorAll('[data-network-theme]')];
  const views = [...panel.querySelectorAll('[data-network-view]')];
  const announcement = panel.querySelector('#network-announcement');

  function selectTheme(theme) {
    const selected = views.find(view => view.dataset.networkView === theme);
    if (!selected) return;
    panel.dataset.selected = theme;
    views.forEach(view => { view.hidden = view !== selected; });
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.networkTheme === theme));
    });
    announcement.textContent = selected.querySelector('.network-question').textContent;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => selectTheme(button.dataset.networkTheme));
  });
  controls.hidden = false;
})();
