/* FieldTrak i18n - EL (default), EN, IT. Persist: fieldtrak_lang
 *
 * Translation keys and usage:
 * - nav.* (home, workorder, station, calendar, history): navbar links on all pages
 * - home.*: index.html (welcome, tile titles/descs, open button)
 * - workorder.*: work_order.html labels, placeholders, buttons; email/print body labels
 * - station.*: station.html form/print labels, anomaly options, placeholders; email/print body
 * - calendar.*: calendar.html title, buttons, weekdays, dialog, print section; month names via calendarMonths
 * - history.*: history.html tabs, counts, empty messages, View/Copy/Delete/Clear All, confirm text
 * - toast.*: history toasts (copied, deleted, cleared)
 * - app.footer: footer on all pages
 * - anomalyValueToKey: maps station <option value> (Greek) to station.anomaly* key for translated report text
 */
(function (global) {
  var LANG_KEY = 'fieldtrak_lang';
  var LANG = {
    el: {
      nav: { home: 'Αρχική', workorder: 'Εντολή Εργασίας', station: 'Έλεγχος Εγκαταστάσεων', calendar: 'Ημερολόγιο', history: 'Ιστορικό' },
      home: { welcome: 'Καλώς ήρθες', tileWorkOrderTitle: 'Εξαγωγή Εντολής Εργασίας', tileWorkOrderDesc: 'Συγκέντρωση εργασιών ημέρας, εκτύπωση ή email.', tileStationTitle: 'Έλεγχος Εγκαταστάσεων', tileStationDesc: 'Καταγραφή μετρήσεων και ανωμαλιών με φωτογραφία.', tileCalendarTitle: 'Ημερολόγιο', tileCalendarDesc: 'Σημειώσεις ανά ημέρα, εξαγωγή σε PDF/Email.', tileHistoryTitle: 'Ιστορικό', tileHistoryDesc: 'Εντολές εργασίας και ελέγχοι σταθμών, προβολή και αντιγραφή.', open: 'Άνοιγμα' },
      workorder: { title: 'Εντολή Εργασίας', date: 'Ημερομηνία', city: 'Πόλη Εργασίας', plate: 'Αρ. Πινακίδας Αυτοκινήτου', startTime: 'Ώρα Έναρξης', endTime: 'Ώρα Λήξης', technician: 'Ονοματεπώνυμο Τεχνικού', tasks: 'Εργασίες που πραγματοποιήθηκαν', tasksPlaceholder: '• Καθαρισμός φίλτρου\n• Αντικατάσταση αισθητήρα\n• Έλεγχος βανών...', print: 'Εκτύπωση / PDF', email: 'Αποστολή Email', clearDraft: 'Καθαρισμός Πρόχειρου', timestamp: 'Χρονική Σήμανση', subjectPrefix: 'Ημερήσια Εντολή Εργασίας' },
      station: { title: 'Έλεγχος Εγκαταστάσεων', date: 'Ημερομηνία', city: 'Πόλη', station: 'Όνομα Σταθμού', gasReading: 'Μετρητής Αερίου (m³)', electricReading: 'Μετρητής ΔΕΗ (kWh)', technician: 'Ονοματεπώνυμο Τεχνικού', anomaly: 'Ανωμαλίες', notes: 'Σημειώσεις', actions: 'Προτεινόμενες Ενέργειες', photo: 'Ενδεικτική φωτογραφία', notesPlaceholder: 'Πληκτρολογήστε παρατηρήσεις...', actionsPlaceholder: 'Π.χ. Αντικατάσταση φίλτρου, καθαρισμός, επιδιόρθωση...', print: 'Εκτύπωση / PDF', email: 'Αποστολή Email', clearDraft: 'Καθαρισμός Πρόχειρου', printTitle: 'Καταγραφή Σταθμού', gasLabel: 'Μετρητής Αερίου', elecLabel: 'Μετρητής ΔΕΗ', techLabel: 'Τεχνικός', photoNote: '(Η ενδεικτική φωτογραφία περιλαμβάνεται μόνο στο PDF/εκτύπωση)', subjectPrefix: 'Καταγραφή Σταθμού',
        anomalyNone: 'Καμία', anomalyGasLeak: 'Διαρροή Αερίου', anomalyPressureDrop: 'Πτώση Πίεσης', anomalyPressureSensor: 'Αισθητήρας Πίεσης', anomalyTempSensor: 'Αισθητήρας Θερμοκρασίας', anomalyBurner: 'Βλάβη Καυστήρα', anomalyFan: 'Βλάβη Κυκλοφορητή', anomalyFilter: 'Βουλωμένο φίλτρο', anomalyBarrier: 'Barrier/Steffel/PR', anomalyTR1: 'Σταθμός T/R-Δυναμικό Προστασίας', anomalyTR2: 'Σταθμός T/R-Ρεύμα(mAh)', anomalyTR3: 'Σταθμός T/R-Τάση', anomalyScada: 'Scada (Απώλεια Επικοινωνίας)', anomalyOther: 'Άλλο' },
      calendar: { title: 'Ημερολόγιο', prev: '‹ Προηγ.', today: 'Σήμερα', next: 'Επόμ. ›', print: 'Εκτύπωση / PDF', email: 'Αποστολή Email', weekdayMon: 'Δευ', weekdayTue: 'Τρ', weekdayWed: 'Τετ', weekdayThu: 'Πεμ', weekdayFri: 'Παρ', weekdaySat: 'Σαβ', weekdaySun: 'Κυρ', dialogTitle: 'Σημείωση', notePlaceholder: 'Γράψτε σημείωση για την ημέρα...', delete: 'Διαγραφή', cancel: 'Άκυρο', save: 'Αποθήκευση', printNotesTitle: 'Σημειώσεις Ημερολογίου', emptyNotes: 'Δεν υπάρχουν σημειώσεις για αυτόν τον μήνα.', emailSubject: 'Σημειώσεις Ημερολογίου', emailEmpty: '(Δεν υπάρχουν σημειώσεις για αυτόν τον μήνα)' },
      calendarMonths: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],
      history: { title: 'Ιστορικό', tabWorkOrder: 'Εντολές Εργασίας', tabStation: 'Ελέγχοι Σταθμών', view: 'Προβολή', copy: 'Αντιγραφή', delete: 'Διαγραφή', clearAll: 'Καθαρισμός Όλων', entries: 'εγγραφές', emptyWorkOrder: 'Δεν υπάρχουν εγγραφές εντολών εργασίας.', emptyStation: 'Δεν υπάρχουν εγγραφές ελέγχων σταθμών.', viewTitleWorkOrder: 'Εντολή Εργασίας', viewTitleStation: 'Έλεγχος Σταθμού', confirmClearWorkOrder: 'Να διαγραφούν όλες οι εγγραφές εντολών εργασίας;', confirmClearStation: 'Να διαγραφούν όλες οι εγγραφές ελέγχων σταθμών;' },
      toast: { copied: 'Αντιγραφή', deleted: 'Διαγραφή', cleared: 'Καθαρισμός ολοκληρώθηκε' },
      app: { footer: '© 2025 Theocharis Anastopoulos — FieldTrak' }
    },
    en: {
      nav: { home: 'Home', workorder: 'Work Order', station: 'Station Check', calendar: 'Calendar', history: 'History' },
      home: { welcome: 'Welcome', tileWorkOrderTitle: 'Work Order Export', tileWorkOrderDesc: 'Daily tasks, print or email.', tileStationTitle: 'Station Check', tileStationDesc: 'Record readings and issues with photo.', tileCalendarTitle: 'Calendar', tileCalendarDesc: 'Notes per day, PDF/Email export.', tileHistoryTitle: 'History', tileHistoryDesc: 'Work orders and station checks, view and copy.', open: 'Open' },
      workorder: { title: 'Work Order', date: 'Date', city: 'Work City', plate: 'Vehicle Plate', startTime: 'Start Time', endTime: 'End Time', technician: 'Technician Name', tasks: 'Tasks performed', tasksPlaceholder: '• Filter cleaning\n• Sensor replacement\n• Valve check...', print: 'Print / PDF', email: 'Send Email', clearDraft: 'Clear Draft', timestamp: 'Timestamp', subjectPrefix: 'Daily Work Order' },
      station: { title: 'Station Check', date: 'Date', city: 'City', station: 'Station Name', gasReading: 'Gas Meter (m³)', electricReading: 'Electric Meter (kWh)', technician: 'Technician Name', anomaly: 'Anomalies', notes: 'Notes', actions: 'Suggested Actions', photo: 'Photo (optional)', notesPlaceholder: 'Enter observations...', actionsPlaceholder: 'e.g. Filter replacement, cleaning...', print: 'Print / PDF', email: 'Send Email', clearDraft: 'Clear Draft', printTitle: 'Station Record', gasLabel: 'Gas Meter', elecLabel: 'Electric Meter', techLabel: 'Technician', photoNote: '(Photo included in PDF/print only)', subjectPrefix: 'Station Record',
        anomalyNone: 'None', anomalyGasLeak: 'Gas leak', anomalyPressureDrop: 'Pressure drop', anomalyPressureSensor: 'Pressure sensor', anomalyTempSensor: 'Temperature sensor', anomalyBurner: 'Burner fault', anomalyFan: 'Fan fault', anomalyFilter: 'Clogged filter', anomalyBarrier: 'Barrier/Steffel/PR', anomalyTR1: 'T/R station – protection potential', anomalyTR2: 'T/R station – current (mAh)', anomalyTR3: 'T/R station – voltage', anomalyScada: 'Scada (communication loss)', anomalyOther: 'Other' },
      calendar: { title: 'Calendar', prev: '‹ Prev', today: 'Today', next: 'Next ›', print: 'Print / PDF', email: 'Send Email', weekdayMon: 'Mon', weekdayTue: 'Tue', weekdayWed: 'Wed', weekdayThu: 'Thu', weekdayFri: 'Fri', weekdaySat: 'Sat', weekdaySun: 'Sun', dialogTitle: 'Note', notePlaceholder: 'Write a note for this day...', delete: 'Delete', cancel: 'Cancel', save: 'Save', printNotesTitle: 'Calendar Notes', emptyNotes: 'No notes for this month.', emailSubject: 'Calendar Notes', emailEmpty: '(No notes for this month)' },
      calendarMonths: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      history: { title: 'History', tabWorkOrder: 'Work Orders', tabStation: 'Station Checks', view: 'View', copy: 'Copy', delete: 'Delete', clearAll: 'Clear All', entries: 'entries', emptyWorkOrder: 'No work order entries.', emptyStation: 'No station check entries.', viewTitleWorkOrder: 'Work Order', viewTitleStation: 'Station Check', confirmClearWorkOrder: 'Delete all work order entries?', confirmClearStation: 'Delete all station check entries?' },
      toast: { copied: 'Copied', deleted: 'Deleted', cleared: 'Cleared' },
      app: { footer: '© 2025 Theocharis Anastopoulos — FieldTrak' }
    },
    it: {
      nav: { home: 'Home', workorder: 'Ordine di lavoro', station: 'Controllo stazione', calendar: 'Calendario', history: 'Cronologia' },
      home: { welcome: 'Benvenuto', tileWorkOrderTitle: 'Esporta ordine di lavoro', tileWorkOrderDesc: 'Attività giornaliere, stampa o email.', tileStationTitle: 'Controllo stazione', tileStationDesc: 'Registra letture e anomalie con foto.', tileCalendarTitle: 'Calendario', tileCalendarDesc: 'Note per giorno, export PDF/Email.', tileHistoryTitle: 'Cronologia', tileHistoryDesc: 'Ordini e controlli stazione, visualizza e copia.', open: 'Apri' },
      workorder: { title: 'Ordine di lavoro', date: 'Data', city: 'Città di lavoro', plate: 'Targa veicolo', startTime: 'Ora inizio', endTime: 'Ora fine', technician: 'Nome tecnico', tasks: 'Lavori eseguiti', tasksPlaceholder: '• Pulizia filtro\n• Sostituzione sensore\n• Controllo valvole...', print: 'Stampa / PDF', email: 'Invia email', clearDraft: 'Cancella bozza', timestamp: 'Timestamp', subjectPrefix: 'Ordine di lavoro giornaliero' },
      station: { title: 'Controllo stazione', date: 'Data', city: 'Città', station: 'Nome stazione', gasReading: 'Contatore gas (m³)', electricReading: 'Contatore elettrico (kWh)', technician: 'Nome tecnico', anomaly: 'Anomalie', notes: 'Note', actions: 'Azioni consigliate', photo: 'Foto (opzionale)', notesPlaceholder: 'Inserisci osservazioni...', actionsPlaceholder: 'es. Sostituzione filtro, pulizia...', print: 'Stampa / PDF', email: 'Invia email', clearDraft: 'Cancella bozza', printTitle: 'Registro stazione', gasLabel: 'Contatore gas', elecLabel: 'Contatore elettrico', techLabel: 'Tecnico', photoNote: '(Foto inclusa solo in PDF/stampa)', subjectPrefix: 'Registro stazione',
        anomalyNone: 'Nessuna', anomalyGasLeak: 'Perdita gas', anomalyPressureDrop: 'Caduta pressione', anomalyPressureSensor: 'Sensore pressione', anomalyTempSensor: 'Sensore temperatura', anomalyBurner: 'Guasto bruciatore', anomalyFan: 'Guasto ventilatore', anomalyFilter: 'Filtro intasato', anomalyBarrier: 'Barrier/Steffel/PR', anomalyTR1: 'Stazione T/R – potenziale protezione', anomalyTR2: 'Stazione T/R – corrente (mAh)', anomalyTR3: 'Stazione T/R – tensione', anomalyScada: 'Scada (perdita comunicazione)', anomalyOther: 'Altro' },
      calendar: { title: 'Calendario', prev: '‹ Prec', today: 'Oggi', next: 'Succ ›', print: 'Stampa / PDF', email: 'Invia email', weekdayMon: 'Lun', weekdayTue: 'Mar', weekdayWed: 'Mer', weekdayThu: 'Gio', weekdayFri: 'Ven', weekdaySat: 'Sab', weekdaySun: 'Dom', dialogTitle: 'Nota', notePlaceholder: 'Scrivi una nota per questo giorno...', delete: 'Elimina', cancel: 'Annulla', save: 'Salva', printNotesTitle: 'Note calendario', emptyNotes: 'Nessuna nota per questo mese.', emailSubject: 'Note calendario', emailEmpty: '(Nessuna nota per questo mese)' },
      calendarMonths: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
      history: { title: 'Cronologia', tabWorkOrder: 'Ordini di lavoro', tabStation: 'Controlli stazione', view: 'Visualizza', copy: 'Copia', delete: 'Elimina', clearAll: 'Cancella tutto', entries: 'voci', emptyWorkOrder: 'Nessun ordine di lavoro.', emptyStation: 'Nessun controllo stazione.', viewTitleWorkOrder: 'Ordine di lavoro', viewTitleStation: 'Controllo stazione', confirmClearWorkOrder: 'Eliminare tutti gli ordini di lavoro?', confirmClearStation: 'Eliminare tutti i controlli stazione?' },
      toast: { copied: 'Copiato', deleted: 'Eliminato', cleared: 'Cancellato' },
      app: { footer: '© 2025 Theocharis Anastopoulos — FieldTrak' }
    }
  };

  var anomalyValueToKey = { 'Καμία': 'anomalyNone', 'Διαρροή Αερίου': 'anomalyGasLeak', 'Πτώση Πίεσης': 'anomalyPressureDrop', 'Αισθητήρας Πίεσης': 'anomalyPressureSensor', 'Αισθητήρας Θερμοκρασίας': 'anomalyTempSensor', 'Βλάβη Καυστήρα': 'anomalyBurner', 'Βλάβη Κυκλοφορητή': 'anomalyFan', 'Βουλωμένο φίλτρο': 'anomalyFilter', 'Barrier/Steffel/PR': 'anomalyBarrier', 'Σταθμός T/R-Δυναμικό Προστασίας': 'anomalyTR1', 'Σταθμός T/R-Ρεύμα(mAh)': 'anomalyTR2', 'Σταθμός T/R-Τάση': 'anomalyTR3', 'Scada (Απώλεια Επικοινωνίας)': 'anomalyScada', 'Άλλο': 'anomalyOther' };

  var I18N = LANG;

  function getLang() {
    var l = (localStorage && localStorage.getItem(LANG_KEY)) || 'el';
    return LANG[l] ? l : 'el';
  }

  function getText(key, lang) {
    var obj = LANG[lang];
    var parts = key.split('.');
    for (var i = 0; i < parts.length && obj != null; i++) obj = obj[parts[i]];
    if (obj != null && typeof obj === 'string') return obj;
    obj = LANG.el;
    for (var j = 0; j < parts.length && obj != null; j++) obj = obj[parts[j]];
    return (obj != null && typeof obj === 'string') ? obj : key;
  }

  function t(key, lang) {
    return getText(key, (lang !== undefined && lang !== null) ? lang : getLang());
  }

  function setLang(lang) {
    if (lang !== 'el' && lang !== 'en' && lang !== 'it') return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function updateLangUI(lang) {
    var l = (lang !== undefined && lang !== null) ? lang : getLang();
    document.querySelectorAll('.lang-segment .lang-btn, [data-lang]').forEach(function (el) {
      var code = el.getAttribute('data-lang');
      if (!code) return;
      el.classList.toggle('active', code === l);
      el.setAttribute('aria-pressed', code === l ? 'true' : 'false');
    });
  }

  function applyLang(lang) {
    var l = (lang !== undefined && lang !== null) ? lang : getLang();
    if (document.documentElement) document.documentElement.lang = l === 'el' ? 'el' : l === 'it' ? 'it' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key) el.textContent = getText(key, l);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.placeholder = getText(key, l);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (key) el.title = getText(key, l);
    });
    updateLangUI(l);
    if (typeof window.onLanguageApplied === 'function') window.onLanguageApplied(l);
  }

  var _langControlInitialized = false;
  function initLangControl() {
    if (_langControlInitialized) return;
    _langControlInitialized = true;
    var lang = getLang();
    applyLang(lang);
    document.querySelectorAll('.lang-segment .lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var code = btn.getAttribute('data-lang');
        if (code) setLang(code);
      });
    });
  }

  global.FieldTrakI18n = { getLang: getLang, setLang: setLang, updateLangUI: updateLangUI, initLangControl: initLangControl, applyLang: applyLang, t: t, getText: getText, LANG: LANG, I18N: I18N, anomalyValueToKey: anomalyValueToKey };

  if (typeof document !== 'undefined') {
    function autoInit() {
      if (typeof FieldTrakI18n !== 'undefined' && FieldTrakI18n.initLangControl) FieldTrakI18n.initLangControl();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoInit);
    else autoInit();
  }
})(typeof window !== 'undefined' ? window : this);
