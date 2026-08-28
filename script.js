const STORAGE_KEY = 'despejavi-state-v1';

const categoryMeta = {
  'terra-mitica': { icon: '🎢', label: 'TERRA MÍTICA' },
  karaoke: { icon: '🎤', label: 'KARAOKE' },
  'toro-mecanico': { icon: '🐂', label: 'TORO MECÁNICO' },
  varios: { icon: '🎉', label: 'VARIOS' },
};

const pruebas = [
  {
    id: 1,
    nombre: 'TORO',
    nombreCompacto: 'TORO',
    categoria: 'toro-mecanico',
    descripcion: 'Ha d’aguantar X segons damunt del toro mecànic mentre crida el nom de SONIA.',
    imagen: 'assets/images/toro.png',
    completada: false,
    activa: true,
  },
  {
    id: 2,
    nombre: 'KARAOKE',
    nombreCompacto: 'KARAOKE',
    categoria: 'karaoke',
    descripcion: 'Ha de cantar una cançó sencera damunt de l’escenari, elegida pel grup. Si el públic aplaudix al final, supera la prova. Si no... càstig!',
    imagen: 'assets/images/karaoke.png',
    completada: false,
    activa: true,
  },
  {
    id: 3,
    nombre: 'SONIA',
    nombreCompacto: 'SONIA',
    categoria: 'varios',
    descripcion: 'Ha de trobar una xica que es diga SONIA i fer-se un selfie amb ella.',
    imagen: 'assets/images/sonia.png',
    completada: false,
    activa: true,
  },
  {
    id: 4,
    nombre: 'CONSELL',
    nombreCompacto: 'CONSELL',
    categoria: 'varios',
    descripcion: 'Ha d’aconseguir un consell sobre el matrimoni d’una parella de guiris majors.',
    imagen: 'assets/images/consell.png',
    completada: false,
    activa: true,
  },
  {
    id: 5,
    nombre: 'PEDIDO',
    nombreCompacto: 'PEDIDO',
    categoria: 'varios',
    descripcion: 'Ha de demanar el sopar parlant únicament amb accent de telenovel·la o italià.',
    imagen: 'assets/images/pedido.png',
    completada: false,
    activa: true,
  },
  {
    id: 6,
    nombre: 'XUPITO',
    nombreCompacto: 'XUPITO',
    categoria: 'varios',
    descripcion: 'Ha de prendre’s un xupito de la casa sense utilitzar les mans.',
    imagen: 'assets/images/xupito.png',
    completada: false,
    activa: true,
  },
  {
    id: 7,
    nombre: 'GOL',
    nombreCompacto: 'GOL',
    categoria: 'varios',
    descripcion: 'Cada vegada que es demane una ronda de cerveses, el novio ha de fer, a ple pulmó, la celebració d’un jugador mític enmig del carrer o del pub.',
    imagen: 'assets/images/gol.png',
    completada: false,
    activa: true,
  },
  {
    id: 8,
    nombre: 'ALCOHOL',
    nombreCompacto: 'ALCOHOL',
    categoria: 'varios',
    descripcion: 'Ha d’aconseguir que algú del carrer li faça un “test de sobrietat” improvisat.',
    imagen: 'assets/images/alcohol.png',
    completada: false,
    activa: true,
  },
  {
    id: 9,
    nombre: 'DOBLE',
    nombreCompacto: 'DOBLE',
    categoria: 'varios',
    descripcion: 'Ha de trobar per la zona guiri un xic que s’assembli físicament a ell i fer-se una foto amb ell posant igual.',
    imagen: 'assets/images/doble.png',
    completada: false,
    activa: true,
  },
  {
    id: 10,
    nombre: 'BALL',
    nombreCompacto: 'BALL',
    categoria: 'varios',
    descripcion: 'Ha de fer un ball viral amb un grup de guiris al carrer i aconseguir que li seguisquen els passos.',
    imagen: 'assets/images/ball.png',
    completada: false,
    activa: true,
  },
  {
    id: 11,
    nombre: 'TRUEQUE',
    nombreCompacto: 'TRUEQUE',
    categoria: 'varios',
    descripcion: 'Ha de convéncer algú en un pub perquè intercanvie un objecte estrany per una xapa o adhesiu del novio.',
    imagen: 'assets/images/trueque.png',
    completada: false,
    activa: true,
  },
  {
    id: 12,
    nombre: 'VIDEOJOC',
    nombreCompacto: 'VIDEOJOC',
    categoria: 'varios',
    descripcion: 'Ha de quedar-se durant 2 minuts a la porta d’un pub repetint en bucle un moviment com si fora un personatge de videojoc.',
    imagen: 'assets/images/videojoc.png',
    completada: false,
    activa: true,
  },
  {
    id: 13,
    nombre: 'NOVIA',
    nombreCompacto: 'NOVIA',
    categoria: 'varios',
    descripcion: 'Ha de posar-se dret a la taula i fer un discurs d’1 minut sobre la seua novia utilitzant 3 paraules absurdes.',
    imagen: 'assets/images/novia.png',
    completada: false,
    activa: true,
  },
  {
    id: 14,
    nombre: 'SILENCI',
    nombreCompacto: 'SILENCI',
    categoria: 'varios',
    descripcion: 'El novio ha de fer sonar el xiulet i demanar silenci per “la pèrdua de la seua solteria”. Ha d’aguantar 15 segons solemne.',
    imagen: 'assets/images/silenci.png',
    completada: false,
    activa: true,
  },
  {
    id: 15,
    nombre: 'FALTA',
    nombreCompacto: 'FALTA',
    categoria: 'varios',
    descripcion: 'Ha d’aconseguir que 4 desconeguts es posen en fila a la vorera fent de barrera mentre ell llança una falta imaginària.',
    imagen: 'assets/images/prueba15.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 16,
    nombre: 'VAR',
    nombreCompacto: 'VAR',
    categoria: 'varios',
    descripcion: 'Ha de fer-li el gest de canvi de jugador a un xic del carrer i aconseguir que faça el xoc de mans amb ell.',
    imagen: 'assets/images/prueba16.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 17,
    nombre: 'PREMSA',
    nombreCompacto: 'PREMSA',
    categoria: 'varios',
    descripcion: 'Els amics el rodegen amb mòbils i li fan preguntes com si fora un periodista esportiu.',
    imagen: 'assets/images/prueba17.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 18,
    nombre: 'MIRADA',
    nombreCompacto: 'MIRADA',
    categoria: 'varios',
    descripcion: 'Ha de mantindre la mirada fixa amb un guiri durant 10 segons seguits fins que somrigue o brinde.',
    imagen: 'assets/images/prueba18.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 19,
    nombre: 'FUM',
    nombreCompacto: 'FUM',
    categoria: 'varios',
    descripcion: 'Ha d’intentar convéncer algú perquè li compre un objecte absurd per 50 cèntims o a canvi d’un glop de cervesa.',
    imagen: 'assets/images/prueba19.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 20,
    nombre: 'SING-ALONG',
    nombreCompacto: 'SING-ALONG',
    categoria: 'varios',
    descripcion: 'Ha d’aconseguir que tot el grup de la taula del costat cante a cor una frase d’una cançó abans de brindar.',
    imagen: 'assets/images/prueba20.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 21,
    nombre: 'LLEGENDA',
    nombreCompacto: 'LLEGENDA',
    categoria: 'varios',
    descripcion: 'Ha de trobar un altre novio d’una altra despedida, cridar “AURA BATTLE!” i fer-li la seqüència completa.',
    imagen: 'assets/images/prueba21.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 22,
    nombre: 'FLEXIONS',
    nombreCompacto: 'FLEXIONS',
    categoria: 'varios',
    descripcion: 'Ha de fer 10 flexions i, en l’última, beure’s un xupito sense tocar-lo amb les mans.',
    imagen: 'assets/images/prueba22.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 23,
    nombre: 'SEGREST',
    nombreCompacto: 'SEGREST',
    categoria: 'varios',
    descripcion: 'Ha de gravar un vídeo caracteritzat com si haguera sigut “segrestat” pel grup durant les pròximes 36 hores.',
    imagen: 'assets/images/prueba23.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 24,
    nombre: 'ORACLE',
    nombreCompacto: 'ORACLE',
    categoria: 'terra-mitica',
    descripcion: 'Després de passar per una atracció d’aigua, ha d’eixir banyat i anunciar una profecia a almenys 3 grups diferents.',
    imagen: 'assets/images/prueba24.jpg',
    completada: false,
    activa: true,
  },
  {
    id: 25,
    nombre: 'CUES',
    nombreCompacto: 'CUES',
    categoria: 'terra-mitica',
    descripcion: 'Com anirà vestit de romà, haurà d’intentar negociar prioritat a la cua amb serietat i fer unes flexions si falla.',
    imagen: 'assets/images/prueba25.jpg',
    completada: false,
    activa: true,
  },
];

let state = {
  completedIds: [],
  categoryEnabled: {},
};

let currentChallengeId = null;
let isSpinning = false;
let wheelRotation = 0;

const palette = [
  '#ff6b6b',
  '#ff9f43',
  '#ffd166',
  '#06d6a0',
  '#5ae3ff',
  '#6c5ce7',
  '#ff5bb8',
  '#f15bb5',
  '#7bdff2',
  '#8ac926',
  '#ff7f50',
  '#b5179e',
];

function initializeApp() {
  setupEventListeners();
  loadState();
  renderAll();
  registerServiceWorker();
}

function setupEventListeners() {
  document.getElementById('spinButton').addEventListener('click', spinWheel);
  document.getElementById('menuToggleButton').addEventListener('click', toggleMenu);
  document.getElementById('closeMenuButton').addEventListener('click', closeMenu);
  document.getElementById('menuBackdrop').addEventListener('click', closeMenu);
  document.getElementById('closeModalButton').addEventListener('click', closeChallengeModal);
  document.getElementById('completeChallengeButton').addEventListener('click', () => {
    if (currentChallengeId) {
      completeChallenge(currentChallengeId);
    }
  });
  document.getElementById('resetButton').addEventListener('click', resetGame);

  window.addEventListener('resize', drawWheel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      closeChallengeModal();
    }
  });

  bindFallbackImages();
}

function bindFallbackImages() {
  document.querySelectorAll('.image-with-fallback').forEach((image) => {
    image.addEventListener('error', () => {
      const frame = image.closest('.media-frame');
      if (frame) {
        frame.classList.add('fallback-visible');
      }
      image.style.display = 'none';
    });
  });
}

function getDefaultState() {
  const categoryEnabled = {};
  Object.keys(categoryMeta).forEach((key) => {
    categoryEnabled[key] = true;
  });

  return {
    completedIds: [],
    categoryEnabled,
  };
}

function loadState() {
  const defaults = getDefaultState();
  const rawValue = localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    state = defaults;
    saveState();
    return state;
  }

  try {
    const parsed = JSON.parse(rawValue);
    state = {
      completedIds: Array.isArray(parsed.completedIds) ? parsed.completedIds : [],
      categoryEnabled: {
        ...defaults.categoryEnabled,
        ...(parsed.categoryEnabled || {}),
      },
    };
  } catch (error) {
    console.warn('No se pudo cargar el estado guardado:', error);
    state = defaults;
  }

  const validIds = new Set(pruebas.map((prueba) => prueba.id));
  state.completedIds = state.completedIds.filter((id) => validIds.has(id));

  pruebas.forEach((prueba) => {
    prueba.completada = state.completedIds.includes(prueba.id);
    prueba.activa = state.categoryEnabled[prueba.categoria] !== false;
  });

  return state;
}

function saveState() {
  const nextState = {
    completedIds: [...new Set(state.completedIds)],
    categoryEnabled: { ...state.categoryEnabled },
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

function renderAll() {
  renderCategoryFilters();
  renderChallengeMenu();
  updateCounters();
  drawWheel();
}

function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  container.innerHTML = '';

  Object.keys(categoryMeta).forEach((categoryKey) => {
    const isEnabled = state.categoryEnabled[categoryKey] !== false;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-toggle ${isEnabled ? 'active' : ''}`;
    button.setAttribute('aria-pressed', String(isEnabled));
    button.innerHTML = `
      <span class="toggle-label">
        <span>${categoryMeta[categoryKey].icon}</span>
        <span>${categoryMeta[categoryKey].label}</span>
      </span>
      <span class="toggle-pill">${isEnabled ? 'ON' : 'OFF'}</span>
    `;

    button.addEventListener('click', () => toggleCategory(categoryKey));
    container.appendChild(button);
  });
}

function renderChallengeMenu() {
  const list = document.getElementById('challengeList');
  list.innerHTML = '';

  Object.keys(categoryMeta).forEach((categoryKey) => {
    const section = document.createElement('section');
    section.className = 'challenge-section';

    const title = document.createElement('h3');
    title.className = 'challenge-group-title';
    title.textContent = `${categoryMeta[categoryKey].icon} ${categoryMeta[categoryKey].label}`;
    section.appendChild(title);

    const categoryChallenges = pruebas.filter((prueba) => prueba.categoria === categoryKey);
    const enabled = state.categoryEnabled[categoryKey] !== false;

    if (!enabled) {
      const note = document.createElement('div');
      note.className = 'challenge-item muted';
      note.textContent = 'CATEGORÍA DESACTIVADA';
      section.appendChild(note);
      list.appendChild(section);
      return;
    }

    if (!categoryChallenges.length) {
      const note = document.createElement('div');
      note.className = 'challenge-item muted';
      note.textContent = 'SIN PRUEBAS';
      section.appendChild(note);
      list.appendChild(section);
      return;
    }

    let hasVisibleChallenge = false;

    categoryChallenges.forEach((prueba) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'challenge-item';

      if (prueba.completada) {
        item.classList.add('completed');
        item.disabled = true;
        item.innerHTML = `<span>✅ ${prueba.nombre} — COMPLETADA</span>`;
      } else {
        item.innerHTML = `<span>${prueba.nombre}</span><span class="challenge-action">VER PRUEBA</span>`;
        item.addEventListener('click', () => openChallengeModal(prueba.id));
        hasVisibleChallenge = true;
      }

      section.appendChild(item);
    });

    if (!hasVisibleChallenge && categoryChallenges.every((prueba) => prueba.completada)) {
      const note = document.createElement('div');
      note.className = 'challenge-item muted';
      note.textContent = 'TODO COMPLETADO';
      section.appendChild(note);
    }

    list.appendChild(section);
  });
}

function toggleCategory(categoryKey) {
  state.categoryEnabled[categoryKey] = !state.categoryEnabled[categoryKey];
  saveState();
  renderCategoryFilters();
  renderChallengeMenu();
  updateCounters();
  drawWheel();
}

function updateCounters() {
  const totalChallengeCount = pruebas.length;
  const completedCount = pruebas.filter((prueba) => prueba.completada).length;
  const activeCount = getAvailableChallenges().length;

  const statusHeading = document.getElementById('statusHeading');
  const pendingCounterValue = document.getElementById('pendingCounterValue');
  const completedCounter = document.getElementById('completedCounter');

  if (activeCount > 0) {
    statusHeading.textContent = 'PRUEBAS PENDIENTES';
    statusHeading.classList.remove('celebration');
    pendingCounterValue.textContent = `${activeCount} / ${totalChallengeCount}`;
  } else {
    statusHeading.textContent = '🏆 DESPEDIDA COMPLETADA';
    statusHeading.classList.add('celebration');
    pendingCounterValue.textContent = `0 / ${totalChallengeCount}`;
  }

  completedCounter.textContent = `🏆 ${completedCount} PRUEBAS COMPLETADAS`;
}

function getAvailableChallenges() {
  return pruebas.filter((prueba) => {
    const categoryEnabled = state.categoryEnabled[prueba.categoria] !== false;
    return categoryEnabled && !prueba.completada;
  });
}

function drawWheel() {
  const canvas = document.getElementById('wheelCanvas');
  const ctx = canvas.getContext('2d');
  const available = getAvailableChallenges();
  const size = Math.min(window.innerWidth * 0.78, 360);
  const ratio = window.devicePixelRatio || 1;

  canvas.width = size * ratio;
  canvas.height = size * ratio;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.42;

  if (available.length === 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#24162e';
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#ffdd66';
    ctx.font = '700 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏆', cx, cy - 12);
    ctx.font = '700 17px sans-serif';
    ctx.fillText('COMPLETADO', cx, cy + 20);
    ctx.restore();
    return;
  }

  const sliceAngle = (Math.PI * 2) / available.length;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(wheelRotation);

  available.forEach((prueba, index) => {
    const startAngle = index * sliceAngle - Math.PI / 2;
    const endAngle = startAngle + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = palette[index % palette.length];
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(startAngle) * radius, Math.sin(startAngle) * radius);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.save();
    const textAngle = startAngle + sliceAngle / 2;
    const textRadius = radius * 0.58;
    const x = Math.cos(textAngle) * textRadius;
    const y = Math.sin(textAngle) * textRadius;
    const label = prueba.nombre.toUpperCase();

    ctx.translate(x, y);
    ctx.rotate(textAngle);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#1c1a22';
    ctx.font = `800 ${Math.max(8, 15 - available.length * 0.3)}px sans-serif`;
    ctx.fillText(label, 0, 0);
    ctx.restore();
  });

  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.16, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(19,13,29,0.85)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function spinWheel() {
  const available = getAvailableChallenges();

  if (isSpinning) {
    return;
  }

  if (available.length === 0) {
    updateCounters();
    return;
  }

  const spinButton = document.getElementById('spinButton');
  spinButton.disabled = true;
  isSpinning = true;

  const selectedIndex = Math.floor(Math.random() * available.length);
  const selectedChallenge = available[selectedIndex];
  const sliceAngle = (Math.PI * 2) / available.length;
  const turns = 7 + Math.random() * 2;
  const targetRotation = wheelRotation + turns * Math.PI * 2 - (selectedIndex + 0.5) * sliceAngle;
  const startRotation = wheelRotation;
  const duration = 4200;
  const startTime = performance.now();

  function animateFrame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    wheelRotation = startRotation + (targetRotation - startRotation) * eased;
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animateFrame);
      return;
    }

    wheelRotation = targetRotation;
    drawWheel();
    isSpinning = false;
    spinButton.disabled = false;
    playSuccessSound();
    openChallengeModal(selectedChallenge.id);
  }

  requestAnimationFrame(animateFrame);
}

function openChallengeModal(challengeId) {
  const challenge = pruebas.find((prueba) => prueba.id === challengeId);
  if (!challenge) {
    return;
  }

  currentChallengeId = challengeId;
  closeMenu();
  const modal = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');

  modalTitle.textContent = challenge.nombre;
  modalCategory.textContent = `${categoryMeta[challenge.categoria].icon} ${categoryMeta[challenge.categoria].label}`;
  modalDescription.textContent = challenge.descripcion;

  modalImage.src = challenge.imagen;
  modalImage.alt = challenge.nombre;
  modalImage.style.display = 'block';

  const frame = modalImage.closest('.media-frame');
  frame.classList.remove('fallback-visible');
  modalImage.onerror = () => {
    frame.classList.add('fallback-visible');
    modalImage.style.display = 'none';
  };

  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}

function closeChallengeModal() {
  const modal = document.getElementById('modalOverlay');
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
  currentChallengeId = null;
}

function completeChallenge(challengeId) {
  if (!challengeId) {
    return;
  }

  const challenge = pruebas.find((prueba) => prueba.id === challengeId);
  if (!challenge) {
    return;
  }

  challenge.completada = true;
  if (!state.completedIds.includes(challengeId)) {
    state.completedIds.push(challengeId);
  }

  saveState();
  closeChallengeModal();
  renderCategoryFilters();
  renderChallengeMenu();
  updateCounters();
  drawWheel();
  playSuccessSound();
}

function toggleMenu() {
  const menu = document.getElementById('challengeMenu');
  const backdrop = document.getElementById('menuBackdrop');
  const isOpen = menu.classList.toggle('open');
  backdrop.classList.toggle('visible', isOpen);
}

function closeMenu() {
  document.getElementById('challengeMenu').classList.remove('open');
  document.getElementById('menuBackdrop').classList.remove('visible');
}

function resetGame() {
  const confirmed = window.confirm('¿Seguro que quieres recuperar todas las pruebas?');
  if (!confirmed) {
    return;
  }

  state = getDefaultState();
  pruebas.forEach((prueba) => {
    prueba.completada = false;
    prueba.activa = true;
  });
  localStorage.removeItem(STORAGE_KEY);
  saveState();
  closeMenu();
  renderAll();
}

function playSuccessSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  if (!window.despejaviAudioContext) {
    window.despejaviAudioContext = new AudioContextClass();
  }

  const audioContext = window.despejaviAudioContext;
  const sequence = [440, 587, 659];

  sequence.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const startTime = audioContext.currentTime + index * 0.08;

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, startTime);

    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, startTime + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.2);
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch((error) => {
        console.warn('Registro del service worker fallido:', error);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initializeApp);
