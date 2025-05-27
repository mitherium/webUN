console.log('[Sample Addon] Дополнение загружено!');

window.registerAddon({
  name: 'Sample Addon',
  onLoad: () => {
    console.log('Sample Addon активен!');
    // Здесь можно подключить ассеты в редактор
  }
});