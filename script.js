const STORAGE_KEY = 'webide-project';
const DEFAULT_FILES = {
  'page.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <link rel="stylesheet" href="page.css">
</head>
<body>
  <h1>Hello, WebSpace Studio!</h1>
  <p>Edit this file and press <strong>F5</strong> to preview.</p>
  <script src="page.js"><\/script>
</body>
</html>`,
  'page.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

h1 {
  font-size: 3rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

p {
  margin-top: 1rem;
  opacity: 0.9;
}`,
  'page.js': `console.log('Hello from WebSpace Studio!');

document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.addEventListener('click', () => {
      h1.textContent = 'You clicked me! 🎉';
    });
  }
});`
};

const LANG_MAP = {
  html: 'html', htm: 'html', css: 'css', scss: 'scss',
  js: 'javascript', jsx: 'javascript', ts: 'typescript', tsx: 'typescript',
  json: 'json', md: 'markdown', xml: 'xml', py: 'python',
  java: 'java', cpp: 'cpp', c: 'c', cs: 'csharp',
  php: 'php', rb: 'ruby', go: 'go', rs: 'rust',
  sql: 'sql', yaml: 'yaml', yml: 'yaml', sh: 'shell',
  svg: 'xml', vue: 'html', svelte: 'html'
};

const FILE_ICONS = {
  html: 'https://cdn-icons-png.flaticon.com/512/1051/1051328.png',
  htm: 'https://cdn-icons-png.flaticon.com/512/1051/1051328.png',
  css: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
  js: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  jsx: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  ts: '🔷', json: '📋',
  md: '📝', py: '🐍', default: '📄'
};

const LOCALE_KEY = 'webide-locale';

const UI_LOCALES = [
  { id: 'fr', label: 'Français', keywords: 'francais french français' },
  { id: 'en', label: 'English', keywords: 'anglais english ingles' },
  { id: 'es', label: 'Español', keywords: 'espagnol spanish espanol español' },
  { id: 'de', label: 'Deutsch', keywords: 'allemand german deutsch allemand' },
  { id: 'nl', label: 'Nederlands', keywords: 'neerlandais dutch nederlands deutch hollandais' }
];

const I18N = {
  fr: {
    appName: 'WebSpace Studio',
    newFile: '+ Nouveau fichier',
    save: 'Enregistrer',
    run: '▶ Exécuter',
    format: 'Formater',
    import: 'Importer',
    export: 'Exporter',
    language: 'Langue',
    uiLang: "Langue de l'interface",
    searchLang: 'Rechercher une langue…',
    console: 'Console',
    theme: 'Thème',
    explorer: 'Explorateur',
    newFileSide: 'Nouveau fichier',
    welcomeTitle: 'WebSpace Studio',
    welcomeHint: "Ouvrez un fichier dans l'explorateur ou créez-en un nouveau",
    welcomeShortcuts: '<kbd>Ctrl</kbd> + <kbd>N</kbd> nouveau &nbsp; <kbd>Ctrl</kbd> + <kbd>S</kbd> enregistrer &nbsp; <kbd>F5</kbd> exécuter',
    problems: 'Problèmes',
    noFileOpen: 'Aucun fichier ouvert',
    saved: 'Enregistré',
    unsaved: 'Non enregistré',
    ctxOpen: 'Ouvrir',
    ctxRename: 'Renommer',
    ctxDelete: 'Supprimer',
    ctxNew: 'Nouveau fichier',
    modalNewFile: 'Nouveau fichier',
    modalRename: 'Renommer le fichier',
    modalPlaceholder: 'nomfichier.html',
    cancel: 'Annuler',
    create: 'Créer',
    noLangFound: 'Aucune langue trouvée',
    exportEmpty: 'Aucun fichier à exporter',
    exportOk: 'Projet exporté',
    importConfirm: 'Importer ce projet ? Les fichiers actuels seront remplacés.',
    importOk: 'Projet importé ({n} fichiers)',
    importFail: "Échec de l'import : {msg}",
    importInvalid: 'Format invalide',
    fileExists: 'Le fichier existe déjà : {name}',
    deleteConfirm: 'Supprimer {name} ?',
    deleted: 'Supprimé {name}',
    savedFile: 'Enregistré {name}',
    noHtml: 'Aucun fichier HTML pour la prévisualisation',
    preview: 'Aperçu : {file}',
    localeChanged: 'Interface : {lang}'
  },
  en: {
    appName: 'WebSpace Studio',
    newFile: '+ New File',
    save: 'Save',
    run: '▶ Run',
    format: 'Format',
    import: 'Import',
    export: 'Export',
    language: 'Language',
    uiLang: 'Interface language',
    searchLang: 'Search a language…',
    console: 'Console',
    theme: 'Theme',
    explorer: 'Explorer',
    newFileSide: 'New file',
    welcomeTitle: 'WebSpace Studio',
    welcomeHint: 'Open a file from the explorer or create a new one',
    welcomeShortcuts: '<kbd>Ctrl</kbd> + <kbd>N</kbd> new &nbsp; <kbd>Ctrl</kbd> + <kbd>S</kbd> save &nbsp; <kbd>F5</kbd> run',
    problems: 'Problems',
    noFileOpen: 'No file open',
    saved: 'Saved',
    unsaved: 'Unsaved',
    ctxOpen: 'Open',
    ctxRename: 'Rename',
    ctxDelete: 'Delete',
    ctxNew: 'New File',
    modalNewFile: 'New File',
    modalRename: 'Rename File',
    modalPlaceholder: 'filename.html',
    cancel: 'Cancel',
    create: 'Create',
    noLangFound: 'No language found',
    exportEmpty: 'No files to export',
    exportOk: 'Project exported',
    importConfirm: 'Import this project? Current files will be replaced.',
    importOk: 'Project imported ({n} files)',
    importFail: 'Import failed: {msg}',
    importInvalid: 'Invalid format',
    fileExists: 'File already exists: {name}',
    deleteConfirm: 'Delete {name}?',
    deleted: 'Deleted {name}',
    savedFile: 'Saved {name}',
    noHtml: 'No HTML file found to preview',
    preview: 'Preview: {file}',
    localeChanged: 'Interface: {lang}'
  },
  es: {
    appName: 'WebSpace Studio',
    newFile: '+ Nuevo archivo',
    save: 'Guardar',
    run: '▶ Ejecutar',
    format: 'Formatear',
    import: 'Importar',
    export: 'Exportar',
    language: 'Idioma',
    uiLang: 'Idioma de la interfaz',
    searchLang: 'Buscar un idioma…',
    console: 'Consola',
    theme: 'Tema',
    explorer: 'Explorador',
    newFileSide: 'Nuevo archivo',
    welcomeTitle: 'WebSpace Studio',
    welcomeHint: 'Abre un archivo del explorador o crea uno nuevo',
    welcomeShortcuts: '<kbd>Ctrl</kbd> + <kbd>N</kbd> nuevo &nbsp; <kbd>Ctrl</kbd> + <kbd>S</kbd> guardar &nbsp; <kbd>F5</kbd> ejecutar',
    problems: 'Problemas',
    noFileOpen: 'Ningún archivo abierto',
    saved: 'Guardado',
    unsaved: 'Sin guardar',
    ctxOpen: 'Abrir',
    ctxRename: 'Renombrar',
    ctxDelete: 'Eliminar',
    ctxNew: 'Nuevo archivo',
    modalNewFile: 'Nuevo archivo',
    modalRename: 'Renombrar archivo',
    modalPlaceholder: 'archivo.html',
    cancel: 'Cancelar',
    create: 'Crear',
    noLangFound: 'Ningún idioma encontrado',
    exportEmpty: 'No hay archivos para exportar',
    exportOk: 'Proyecto exportado',
    importConfirm: '¿Importar este proyecto? Los archivos actuales serán reemplazados.',
    importOk: 'Proyecto importado ({n} archivos)',
    importFail: 'Error al importar: {msg}',
    importInvalid: 'Formato no válido',
    fileExists: 'El archivo ya existe: {name}',
    deleteConfirm: '¿Eliminar {name}?',
    deleted: 'Eliminado {name}',
    savedFile: 'Guardado {name}',
    noHtml: 'No hay archivo HTML para la vista previa',
    preview: 'Vista previa: {file}',
    localeChanged: 'Interfaz: {lang}'
  },
  de: {
    appName: 'WebSpace Studio',
    newFile: '+ Neue Datei',
    save: 'Speichern',
    run: '▶ Ausführen',
    format: 'Formatieren',
    import: 'Importieren',
    export: 'Exportieren',
    language: 'Sprache',
    uiLang: 'Oberflächensprache',
    searchLang: 'Sprache suchen…',
    console: 'Konsole',
    theme: 'Design',
    explorer: 'Explorer',
    newFileSide: 'Neue Datei',
    welcomeTitle: 'WebSpace Studio',
    welcomeHint: 'Öffnen Sie eine Datei im Explorer oder erstellen Sie eine neue',
    welcomeShortcuts: '<kbd>Ctrl</kbd> + <kbd>N</kbd> neu &nbsp; <kbd>Ctrl</kbd> + <kbd>S</kbd> speichern &nbsp; <kbd>F5</kbd> ausführen',
    problems: 'Probleme',
    noFileOpen: 'Keine Datei geöffnet',
    saved: 'Gespeichert',
    unsaved: 'Nicht gespeichert',
    ctxOpen: 'Öffnen',
    ctxRename: 'Umbenennen',
    ctxDelete: 'Löschen',
    ctxNew: 'Neue Datei',
    modalNewFile: 'Neue Datei',
    modalRename: 'Datei umbenennen',
    modalPlaceholder: 'dateiname.html',
    cancel: 'Abbrechen',
    create: 'Erstellen',
    noLangFound: 'Keine Sprache gefunden',
    exportEmpty: 'Keine Dateien zum Exportieren',
    exportOk: 'Projekt exportiert',
    importConfirm: 'Dieses Projekt importieren? Aktuelle Dateien werden ersetzt.',
    importOk: 'Projekt importiert ({n} Dateien)',
    importFail: 'Import fehlgeschlagen: {msg}',
    importInvalid: 'Ungültiges Format',
    fileExists: 'Datei existiert bereits: {name}',
    deleteConfirm: '{name} löschen?',
    deleted: 'Gelöscht {name}',
    savedFile: 'Gespeichert {name}',
    noHtml: 'Keine HTML-Datei für die Vorschau',
    preview: 'Vorschau: {file}',
    localeChanged: 'Oberfläche: {lang}'
  },
  nl: {
    appName: 'WebSpace Studio',
    newFile: '+ Nieuw bestand',
    save: 'Opslaan',
    run: '▶ Uitvoeren',
    format: 'Formatteren',
    import: 'Importeren',
    export: 'Exporteren',
    language: 'Taal',
    uiLang: 'Interfacetaal',
    searchLang: 'Zoek een taal…',
    console: 'Console',
    theme: 'Thema',
    explorer: 'Verkenner',
    newFileSide: 'Nieuw bestand',
    welcomeTitle: 'WebSpace Studio',
    welcomeHint: 'Open een bestand in de verkenner of maak een nieuw bestand',
    welcomeShortcuts: '<kbd>Ctrl</kbd> + <kbd>N</kbd> nieuw &nbsp; <kbd>Ctrl</kbd> + <kbd>S</kbd> opslaan &nbsp; <kbd>F5</kbd> uitvoeren',
    problems: 'Problemen',
    noFileOpen: 'Geen bestand open',
    saved: 'Opgeslagen',
    unsaved: 'Niet opgeslagen',
    ctxOpen: 'Openen',
    ctxRename: 'Hernoemen',
    ctxDelete: 'Verwijderen',
    ctxNew: 'Nieuw bestand',
    modalNewFile: 'Nieuw bestand',
    modalRename: 'Bestand hernoemen',
    modalPlaceholder: 'bestandsnaam.html',
    cancel: 'Annuleren',
    create: 'Maken',
    noLangFound: 'Geen taal gevonden',
    exportEmpty: 'Geen bestanden om te exporteren',
    exportOk: 'Project geëxporteerd',
    importConfirm: 'Dit project importeren? Huidige bestanden worden vervangen.',
    importOk: 'Project geïmporteerd ({n} bestanden)',
    importFail: 'Importeren mislukt: {msg}',
    importInvalid: 'Ongeldig formaat',
    fileExists: 'Bestand bestaat al: {name}',
    deleteConfirm: '{name} verwijderen?',
    deleted: 'Verwijderd {name}',
    savedFile: 'Opgeslagen {name}',
    noHtml: 'Geen HTML-bestand voor voorbeeld',
    preview: 'Voorbeeld: {file}',
    localeChanged: 'Interface: {lang}'
  }
};

let currentLocale = 'fr';
let editor = null;
let files = {};
let openTabs = [];
let activeFile = null;
let dirty = false;
let contextTarget = null;
let modalCallback = null;

function loadProject() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (data && data.files) {
        files = data.files;
      } else {
        files = data;
      }
      return;
    }
  } catch (e) {}
  files = { ...DEFAULT_FILES };
}

function saveProject() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    version: 1,
    files
  }));
}

function t(key, vars = {}) {
  const str = I18N[currentLocale]?.[key] ?? I18N.en[key] ?? key;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

function loadLocale() {
  const saved = localStorage.getItem(LOCALE_KEY);
  if (saved && I18N[saved]) currentLocale = saved;
}

function saveLocale() {
  localStorage.setItem(LOCALE_KEY, currentLocale);
}

function applyLocale() {
  document.documentElement.lang = currentLocale;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text.includes('<')) el.innerHTML = text;
    else el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  const localeLabel = UI_LOCALES.find(l => l.id === currentLocale);
  document.getElementById('lang-current-label').textContent =
    localeLabel ? localeLabel.label : currentLocale;

  if (!activeFile) {
    document.getElementById('status-file').textContent = t('noFileOpen');
    document.getElementById('status-saved').textContent = t('saved');
  } else if (!dirty) {
    document.getElementById('status-saved').textContent = t('saved');
  } else {
    document.getElementById('status-saved').textContent = t('unsaved');
  }
}

function getLang(filename) {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  return LANG_MAP[ext] || 'plaintext';
}

function getIconHtml(filename) {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  const icon = FILE_ICONS[ext] || FILE_ICONS.default;
  if (typeof icon === 'string' && icon.startsWith('http')) {
    return `<img src="${icon}" alt="" width="16" height="16">`;
  }
  return icon;
}

require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
  const theme = document.body.dataset.theme === 'light' ? 'vs' : 'vs-dark';
  editor = monaco.editor.create(document.getElementById('monaco-editor'), {
    value: '',
    language: 'html',
    theme,
    fontSize: 14,
    fontFamily: "'Cascadia Code', 'Fira Code', Consolas, monospace",
    minimap: { enabled: true },
    wordWrap: 'on',
    automaticLayout: true,
    scrollBeyondLastLine: false,
    renderWhitespace: 'selection',
    bracketPairColorization: { enabled: true },
    padding: { top: 8 }
  });

  editor.onDidChangeModelContent(() => {
    if (activeFile) {
      dirty = true;
          updateStatus('unsaved');
      files[activeFile] = editor.getValue();
    }
  });

  editor.onDidChangeCursorPosition((e) => {
    document.getElementById('status-position').textContent =
      `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
  });

  loadProject();
  renderFileTree();
  if (files['page.html']) openFile('page.html');
});

loadLocale();
applyLocale();
renderLocaleList();

function renderFileTree() {
  const tree = document.getElementById('file-tree');
  tree.innerHTML = '';
  Object.keys(files).sort().forEach(name => {
    const item = document.createElement('div');
    item.className = 'file-item' + (name === activeFile ? ' active' : '');
    item.dataset.file = name;
    item.innerHTML = `<span class="icon">${getIconHtml(name)}</span><span class="name">${name}</span>`;
    item.addEventListener('click', () => openFile(name));
    item.addEventListener('contextmenu', (e) => showContextMenu(e, name));
    tree.appendChild(item);
  });
}

function renderTabs() {
  const tabsEl = document.getElementById('tabs');
  tabsEl.innerHTML = '';
  openTabs.forEach(name => {
    const tab = document.createElement('div');
    tab.className = 'tab' + (name === activeFile ? ' active' : '');
    tab.innerHTML = `
      <span class="icon">${getIconHtml(name)}</span>
      <span class="tab-name">${name}${dirty && name === activeFile ? ' •' : ''}</span>
      <button class="tab-close" data-file="${name}">×</button>`;
    tab.addEventListener('click', (e) => {
      if (!e.target.classList.contains('tab-close')) openFile(name);
    });
    tab.querySelector('.tab-close').addEventListener('click', (e) => {
      e.stopPropagation();
      closeTab(name);
    });
    tabsEl.appendChild(tab);
  });
}

function openFile(name) {
  if (!files[name]) return;
  if (!openTabs.includes(name)) openTabs.push(name);
  activeFile = name;
  dirty = false;

  const model = editor.getModel();
  if (model) model.dispose();

  const uri = monaco.Uri.parse('file:///' + name);
  const langId = getLang(name);
  const newModel = monaco.editor.createModel(files[name], langId, uri);
  editor.setModel(newModel);

  document.getElementById('welcome').style.display = 'none';
  document.getElementById('status-file').textContent = name;
  document.getElementById('status-syntax').textContent = langId.toUpperCase();
  updateStatus('saved');

  renderFileTree();
  renderTabs();
}

function setLocale(localeId) {
  if (!I18N[localeId]) return;
  currentLocale = localeId;
  saveLocale();
  applyLocale();
  renderLocaleList(document.getElementById('lang-search')?.value || '');
  logConsole(t('localeChanged', { lang: UI_LOCALES.find(l => l.id === localeId)?.label || localeId }), 'info');
  closeLangDropdown();
}

function renderLocaleList(filter = '') {
  const list = document.getElementById('lang-list');
  if (!list) return;
  const q = filter.trim().toLowerCase();
  list.innerHTML = '';

  const filtered = UI_LOCALES.filter(loc => {
    if (!q) return true;
    return loc.label.toLowerCase().includes(q) ||
           loc.id.includes(q) ||
           loc.keywords.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'no-results';
    empty.textContent = t('noLangFound');
    list.appendChild(empty);
    return;
  }

  filtered.forEach(loc => {
    const li = document.createElement('li');
    li.dataset.locale = loc.id;
    if (loc.id === currentLocale) li.classList.add('active');
    li.innerHTML = `<span>${loc.label}</span><span class="lang-id">${loc.id}</span>`;
    li.addEventListener('click', () => setLocale(loc.id));
    list.appendChild(li);
  });
}

function openLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  const search = document.getElementById('lang-search');
  dropdown.classList.add('open');
  search.value = '';
  renderLocaleList('');
  setTimeout(() => search.focus(), 0);
}

function closeLangDropdown() {
  document.getElementById('lang-dropdown')?.classList.remove('open');
}

function toggleLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown.classList.contains('open')) closeLangDropdown();
  else openLangDropdown();
}

function exportProject() {
  if (Object.keys(files).length === 0) {
    logConsole(t('exportEmpty'), 'error');
    return;
  }
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    locale: currentLocale,
    files
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'webspace-studio-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  logConsole(t('exportOk'), 'info');
}

function importProject(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      const newFiles = data.files || data;
      if (!newFiles || typeof newFiles !== 'object' || Array.isArray(newFiles)) {
        throw new Error(t('importInvalid'));
      }
      if (!confirm(t('importConfirm'))) return;

      files = newFiles;
      if (data.locale && I18N[data.locale]) currentLocale = data.locale;
      openTabs = [];
      activeFile = null;
      dirty = false;
      saveProject();
      saveLocale();
      applyLocale();
      renderFileTree();
      editor?.setModel(null);
      document.getElementById('welcome').style.display = 'flex';
      document.getElementById('status-file').textContent = t('noFileOpen');
      document.getElementById('status-syntax').textContent = '';

      const first = Object.keys(files).sort()[0];
      if (first) openFile(first);
      logConsole(t('importOk', { n: Object.keys(files).length }), 'info');
    } catch (err) {
      logConsole(t('importFail', { msg: err.message }), 'error');
    }
  };
  reader.readAsText(file);
}

function closeTab(name) {
  const idx = openTabs.indexOf(name);
  if (idx === -1) return;
  openTabs.splice(idx, 1);
  if (activeFile === name) {
    if (openTabs.length) {
      openFile(openTabs[Math.min(idx, openTabs.length - 1)]);
    } else {
      activeFile = null;
      editor.setModel(null);
      document.getElementById('welcome').style.display = 'flex';
      document.getElementById('status-file').textContent = t('noFileOpen');
      document.getElementById('status-syntax').textContent = '';
    }
  }
  renderTabs();
  renderFileTree();
}

function saveFile() {
  if (!activeFile) return;
  files[activeFile] = editor.getValue();
  saveProject();
  dirty = false;
  updateStatus('saved');
  renderTabs();
  logConsole(t('savedFile', { name: activeFile }), 'info');
}

function updateStatus(key) {
  document.getElementById('status-saved').textContent = t(key);
}

function showModal(title, placeholder, callback) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-input').value = '';
  document.getElementById('modal-input').placeholder = placeholder;
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-input').focus();
  modalCallback = callback;
}

function hideModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  modalCallback = null;
}

function newFile() {
  showModal(t('modalNewFile'), t('modalPlaceholder'), (name) => {
    if (!name || files[name]) {
      if (files[name]) logConsole(t('fileExists', { name }), 'error');
      return;
    }
    const ext = name.split('.').pop();
    files[name] = ext === 'html' ? '<!DOCTYPE html>\n<html>\n<head></head>\n<body>\n\n</body>\n</html>' :
                  ext === 'css' ? '/* styles */' :
                  ext === 'js' ? '// script' : '';
    saveProject();
    renderFileTree();
    openFile(name);
  });
}

function renameFile(oldName) {
  showModal(t('modalRename'), oldName, (newName) => {
    if (!newName || newName === oldName || files[newName]) return;
    files[newName] = files[oldName];
    delete files[oldName];
    openTabs = openTabs.map(f => f === oldName ? newName : f);
    if (activeFile === oldName) activeFile = newName;
    saveProject();
    renderFileTree();
    if (activeFile === newName) openFile(newName);
  });
}

function deleteFile(name) {
  if (!confirm(t('deleteConfirm', { name }))) return;
  delete files[name];
  closeTab(name);
  saveProject();
  renderFileTree();
  logConsole(t('deleted', { name }), 'warn');
}

function showContextMenu(e, name) {
  e.preventDefault();
  contextTarget = name;
  const menu = document.getElementById('context-menu');
  menu.style.left = e.clientX + 'px';
  menu.style.top = e.clientY + 'px';
  menu.classList.add('open');
}

function logConsole(msg, type = 'log') {
  const out = document.getElementById('console-output');
  const line = document.createElement('div');
  line.className = type;
  line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  out.appendChild(line);
  out.scrollTop = out.scrollHeight;
}

function runPreview() {
  const htmlFile = activeFile?.endsWith('.html') ? activeFile :
    Object.keys(files).find(f => f.endsWith('.html'));
  if (!htmlFile) {
    logConsole(t('noHtml'), 'error');
    return;
  }

  let html = files[htmlFile];
  html = html.replace(/<link[^>]+href=["']([^"']+\.css)["'][^>]*>/gi, (match, href) => {
    const cssFile = href.replace(/^\.\//, '');
    if (files[cssFile]) return `<style>${files[cssFile]}</style>`;
    return match;
  });
  html = html.replace(/<script[^>]+src=["']([^"']+\.js)["'][^>]*><\/script>/gi, (match, href) => {
    const jsFile = href.replace(/^\.\//, '');
    if (files[jsFile]) return `<script>${files[jsFile]}<\/script>`;
    return match;
  });

  const panel = document.getElementById('preview-panel');
  panel.classList.add('open');
  const iframe = document.getElementById('preview-frame');
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(html);
  doc.close();

  try {
    const win = iframe.contentWindow;
    ['log', 'error', 'warn', 'info'].forEach(method => {
      const orig = win.console[method].bind(win.console);
      win.console[method] = (...args) => {
        logConsole(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '), method === 'log' ? 'log' : method);
        orig(...args);
      };
    });
  } catch (e) {}

  document.getElementById('bottom-panel').classList.add('open');
  logConsole(t('preview', { file: htmlFile }), 'info');
}

function formatDocument() {
  if (!editor) return;
  editor.getAction('editor.action.formatDocument')?.run();
}

function toggleTheme() {
  const body = document.body;
  const isLight = body.dataset.theme === 'light';
  body.dataset.theme = isLight ? 'dark' : 'light';
  monaco.editor.setTheme(isLight ? 'vs-dark' : 'vs');
}

function setupResize(handleId, targetId, direction) {
  const handle = document.getElementById(handleId);
  const target = document.getElementById(targetId);

  handle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    handle.classList.add('dragging');
    const startX = e.clientX;
    const startW = target.offsetWidth;
    const onMove = (e) => {
      const delta = direction === 'left' ? e.clientX - startX : startX - e.clientX;
      const newW = Math.max(120, Math.min(400, startW + (direction === 'left' ? delta : -delta)));
      target.style.width = newW + 'px';
    };
    const onUp = () => {
      handle.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

setupResize('resize-sidebar', 'sidebar', 'left');

document.getElementById('resize-preview').addEventListener('mousedown', (e) => {
  e.preventDefault();
  const panel = document.getElementById('preview-panel');
  const startX = e.clientX;
  const startW = panel.offsetWidth;
  const onMove = (e) => {
    const newW = Math.max(200, startW + (startX - e.clientX));
    panel.style.width = newW + 'px';
    panel.classList.add('open');
  };
  const onUp = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
});

document.getElementById('btn-new-file').addEventListener('click', newFile);
document.getElementById('btn-new-file-side').addEventListener('click', newFile);
document.getElementById('btn-save').addEventListener('click', saveFile);
document.getElementById('btn-run').addEventListener('click', runPreview);
document.getElementById('btn-format').addEventListener('click', formatDocument);
document.getElementById('btn-console').addEventListener('click', () => {
  document.getElementById('bottom-panel').classList.toggle('open');
});
document.getElementById('btn-theme').addEventListener('click', toggleTheme);
document.getElementById('btn-export').addEventListener('click', exportProject);
document.getElementById('btn-import').addEventListener('click', () => {
  document.getElementById('import-input').click();
});
document.getElementById('import-input').addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (file) importProject(file);
  e.target.value = '';
});

document.getElementById('btn-lang').addEventListener('click', (e) => {
  e.stopPropagation();
  toggleLangDropdown();
});

document.getElementById('lang-search').addEventListener('input', (e) => {
  renderLocaleList(e.target.value);
});

document.getElementById('lang-search').addEventListener('keydown', (e) => {
  e.stopPropagation();
  if (e.key === 'Escape') closeLangDropdown();
});

document.getElementById('modal-confirm').addEventListener('click', () => {
  const val = document.getElementById('modal-input').value.trim();
  if (modalCallback) modalCallback(val);
  hideModal();
});
document.getElementById('modal-cancel').addEventListener('click', hideModal);
document.getElementById('modal-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('modal-confirm').click();
  if (e.key === 'Escape') hideModal();
});

document.getElementById('context-menu').addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;
  const name = contextTarget;
  document.getElementById('context-menu').classList.remove('open');
  if (action === 'open') openFile(name);
  else if (action === 'rename') renameFile(name);
  else if (action === 'delete') deleteFile(name);
  else if (action === 'new') newFile();
});

document.addEventListener('click', (e) => {
  document.getElementById('context-menu').classList.remove('open');
  if (!e.target.closest('#lang-dropdown-wrap')) closeLangDropdown();
});

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') { e.preventDefault(); saveFile(); }
  if (e.ctrlKey && e.key === 'n') { e.preventDefault(); newFile(); }
  if (e.key === 'F5') { e.preventDefault(); runPreview(); }
  if (e.shiftKey && e.altKey && e.key === 'f') { e.preventDefault(); formatDocument(); }
});
