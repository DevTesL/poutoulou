const WA = '22870915759';
const DELIVERY_LOME = 1000;
const WA_SVG = `<svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const products = [
  // POUTOULOU
  {
    id: 1,
    name: 'Poutoulou Plus Huile',
    cat: 'poutoulou',
    catLbl: 'Poutoulou',
    // emoji: '📿',
    image: 'img/poutoulou/poutoulou1.jpeg',
    price: 14900,
    desc: "Poutoulou plus huile, formule améliorée pour augmenter la taille du pénis, favoriser l'érection et améliorer la performance sexuelle.",
    badge: 'hot',
    bg: 'linear-gradient(135deg,#5a2d0c,#a06030)'
  },

  {
    id: 2,
    name: 'Poutoulou mélangé 35 g',
    cat: 'poutoulous',
    catLbl: 'Poutoulou', 
    // emoji: '💙', 
    image: 'img/poutoulou/poutoulou2.jpeg',
    price: 10000, 
    desc: "Poutoulou mélangé 35g, formule naturelle pour améliorer la performance sexuelle. NB : 1 pot de 35 grammes", 
    badge: 'new', 
    bg: 'linear-gradient(135deg,#0a2a5a,#1a5080)'
  },

  { id: 3, 
    name: 'Poudre', 
    cat: 'Poutoulou', 
    catLbl: 'Poutoulou', 
    // emoji: '🤍', 
    image: 'img/poutoulou/poutoulou3.jpeg',
    price: 10000, 
    desc: 'Poudre naturelle pour améliorer la performance sexuelle.', 
    badge: 'new', 
    bg: 'linear-gradient(135deg,#5a4a30,#8a7050)' 
  },
  
  { id: 4, 
    name: 'Papier magic', 
    cat: 'Poutoulou', 
    catLbl: 'Papier magic', 
    // emoji: '⭐', 
    image: 'img/poutoulou/poutoulou4.jpeg',
    price: 2500,
    desc: 'Papier magique pour améliorer la performance sexuelle, facile à utiliser et discret', 
    badge: 'excl', 
    bg: 'linear-gradient(135deg,#3a2a00,#7a5a00)' 
  },
  
  { id: 5, 
    name: 'Tisane naturelle', 
    cat: 'Poutoulou', 
    catLbl: 'Tisane naturelle', 
    // emoji: '❤️', 
    image: 'img/poutoulou/poutoulou5.jpeg',
    price: 8000, 
    desc: 'Tisane pour le traitement de l\'impuissance, composée d\'herbes médicinales traditionnelles reconnues pour leurs propriétés aphrodisiaques et revitalisantes',
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  { id: 6, 
    name: 'Erection mole', 
    cat: 'erection', 
    catLbl: 'Erection mole', 
    // emoji: '❤️', 
    image: 'img/poutoulou/poutoulou6.jpeg',
    price: 5000, 
    desc: 'Erection mole, solution naturelle pour améliorer la qualité de l\'érection, composée d\'ingrédients naturels reconnus pour leurs propriétés stimulantes et revitalisantes',
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  { id: 7, 
    name: 'Poutoulou', 
    cat: 'poutoulou', 
    catLbl: 'Poutoulou', 
    // emoji: '❤️', 
    image: 'img/poutoulou/poutoulou7.jpeg',
    price: 5000, 
    desc: 'Poutoulou, solution naturelle pour améliorer la performance sexuelle, composée d\'ingrédients naturels reconnus pour leurs propriétés stimulantes et revitalisantes', 
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  { id: 8, 
    name: 'Poudre pour érection', 
    cat: 'erection', 
    catLbl: 'Erection mole', 
    // emoji: '❤️', 
    image: 'img/poutoulou/poutoulou8.jpeg',
    price: 15000, 
    desc: 'Poudre pour érection, solution naturelle pour améliorer la qualité de l\'érection, composée d\'ingrédients naturels reconnus pour leurs propriétés stimulantes et revitalisantes', 
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  { id: 9, 
    name: 'Viga', 
    cat: 'Poutoulou', 
    catLbl: 'Poutoulou', 
    // emoji: '❤️', 
    image: 'img/poutoulou/poutoulou9.jpeg',
    price: 5000, 
    desc: 'Viga, solution naturelle pour améliorer la performance sexuelle, composée d\'ingrédients naturels reconnus pour leurs propriétés stimulantes et revitalisantes', 
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  { id: 10, 
    name: 'Bracelet en coris', 
    cat: 'bracelets', 
    catLbl: 'Bracelet', 
    // emoji: '❤️', 
    image: 'img/bracelets/bracelet10.jpeg',
    price: 1500, 
    desc: 'Bracelet en coris, symbolise la protection et la connexion à la mer, parfait pour les amateurs de bijoux bruts et authentiques', 
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  { id: 11, 
    name: 'Bracelet en acier inoxidable', 
    cat: 'bracelets', 
    catLbl: 'Bracelet', 
    // emoji: '❤️', 
    image: 'img/bracelets/bracelet11.jpeg',
    price: 7000, 
    desc: 'Bracelet en acier inoxidable, parfait pour les amateurs de bijoux bruts et authentiques', 
    badge: null, 
    bg: 'linear-gradient(135deg,#5a0a0a,#900000)' 
  },

  // COLLIERS
  { id: 6, 
    name: 'Collier au pierre naturelle', 
    cat: 'colliers', 
    catLbl: 'Collier', 
    // emoji: '👑',
    image: 'img/colliers/collier1.jpeg',
    price: 3000,
    desc: 'Collier en pierres naturelles, allie beauté brute et énergie positive', 
    badge: 'excl', 
    bg: 'linear-gradient(135deg,#001a3a,#003a6a)' 
  },
  
  { id: 7, 
    name: 'Collier Soleil Togolais', 
    cat: 'colliers', 
    catLbl: 'Collier', 
    // emoji: '🌟',
    image: 'img/colliers/collier2.jpeg',
    price: 4000,
    desc: 'Perles dorées et orange, ode aux couleurs du Togo', 
    badge: 'hot', 
    bg: 'linear-gradient(135deg,#5a2a00,#c06000)' 
  },
  
  { id: 8, 
    name: 'Collier Cascade Ivoire', 
    cat: 'colliers', 
    catLbl: 'Collier', 
    // emoji: '🤍',
    image: 'img/colliers/collier3.jpeg',
    price: 3000,
    desc: 'Long collier multi-rangs en perles blanches naturelles', 
    badge: 'new', 
    bg: 'linear-gradient(135deg,#3a3020,#7a6a50)' 
  },
  
  { id: 9, 
    name: 'Collier Ethnique Kente', 
    cat: 'colliers', 
    catLbl: 'Collier', 
    // emoji: '🎨',
    image: 'img/colliers/collier4.jpeg',
    price: 5000,
    desc: 'Perles multicolores inspirées du tissu kente traditionnel', 
    badge: null, 
    bg: 'linear-gradient(135deg,#2a1a00,#6a4000)' 
  },

  { id: 10, 
    name: 'Collier Ethnique Kente', 
    cat: 'colliers', 
    catLbl: 'Collier', 
    // emoji: '🎨',
    image: 'img/colliers/collier5.jpeg',
    price: 2000,
    desc: 'Perles multicolores inspirées du tissu kente traditionnel', 
    badge: null, 
    bg: 'linear-gradient(135deg,#2a1a00,#6a4000)' 
  },

  { id: 11, 
    name: 'Collier Ethnique Kente', 
    cat: 'colliers', 
    catLbl: 'Collier', 
    // emoji: '🎨',
    image: 'img/colliers/collier7.jpeg',
    price: 2000,
    desc: 'Perles multicolores inspirées du tissu kente traditionnel', 
    badge: null, 
    bg: 'linear-gradient(135deg,#2a1a00,#6a4000)' 
  },

  // BOUCLES
  { id: 10, name: 'Boucles Gouttes d\'Or', cat: 'boucles', catLbl: "Boucles d'oreilles", emoji: '✨', price: 4500, desc: 'Perles dorées en gouttelettes, légères et élégantes', badge: 'hot', bg: 'linear-gradient(135deg,#3a2a00,#8a6010)' },
  { id: 11, name: 'Boucles Cercles Bleus', cat: 'boucles', catLbl: "Boucles d'oreilles", emoji: '💙', price: 3800, desc: 'Cerceaux ornés de perles bleues, style bohème chic', badge: null, bg: 'linear-gradient(135deg,#0a1a3a,#1a3a6a)' },
  { id: 12, name: 'Boucles Fleur de Perle', cat: 'boucles', catLbl: "Boucles d'oreilles", emoji: '🌸', price: 5500, desc: 'Fleurs en perles de nacre, délicatesse et féminité', badge: 'new', bg: 'linear-gradient(135deg,#3a0a1a,#7a2a4a)' },
  // ENSEMBLES
  { id: 13, name: 'Parure Noces d\'Or', cat: 'ensembles', catLbl: 'Parure complète', emoji: '💍', price: 28000, desc: 'Bracelet + collier + boucles · Perles dorées & cristaux · Idéal mariage', badge: 'excl', bg: 'linear-gradient(135deg,#2a1a00,#7a5000)' },
  { id: 14, name: 'Parure Océan Bleu', cat: 'ensembles', catLbl: 'Parure complète', emoji: '🌊', price: 22000, desc: 'Bracelet + collier + boucles · Perles turquoise & argent', badge: null, bg: 'linear-gradient(135deg,#001a3a,#003a6a)' },
  { id: 15, name: 'Ensemble Fête', cat: 'ensembles', catLbl: 'Ensemble', emoji: '🎉', price: 16000, desc: 'Bracelet x2 + boucles · Couleurs festives, parfait pour célébrations', badge: 'new', bg: 'linear-gradient(135deg,#3a0a1a,#8a2a4a)' },
];

let cart = [];

function badgeHTML(b) {
  if (!b) return '';
  const map = { hot: ['badge-hot', '✦ Populaire'], new: ['badge-new', 'Nouveau'], excl: ['badge-excl', 'Exclusif'] };
  const [cls, txt] = map[b] || ['badge-new', b];
  return `<div class="prod-badge ${cls}">${txt}</div>`;
}

function renderProducts(list) {
  document.getElementById('prodGrid').innerHTML = list.map(p => `
    <div class="prod-card">
      <div class="prod-img" style="background:${p.bg}">
        <img src="${p.image}" alt="${p.name}" class="prod-img-tag">
        ${badgeHTML(p.badge)}
      </div>
      <div class="prod-body">
        <div class="prod-cat">${p.catLbl}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-footer">
          <div class="prod-price">${p.price.toLocaleString('fr-FR')}<small> FCFA</small></div>
          <button class="buy-btn" onclick="addCart(${p.id})">
            ${WA_SVG} Ajouter
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterCat(cat, btn) {
  if (btn) {
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderProducts(cat === 'all' ? products : products.filter(p => p.cat === cat));
  if (btn) scroll2('#collection');
}

function addCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCart();
  // showToast(`${p.emoji} ${p.name} ajouté !`);
  showToast(`🛒 ${p.name} ajouté au panier !`);
}

function removeCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cartBadge').textContent = totalItems;
  const items = document.getElementById('drawerItems');
  const foot = document.getElementById('drawerFoot');
  if (!cart.length) {
    items.innerHTML = `<div class="drawer-empty"><div class="drawer-empty-ico">📿</div><p>Votre panier est vide</p></div>`;
    foot.innerHTML = ''; return;
  }
  items.innerHTML = cart.map(x => `
    <div class="cart-item">
      <div class="cart-item-ico">${x.emoji || '🛍️'}</div>
      <div class="cart-item-info">
        <div class="cart-item-cat">${x.catLbl}</div>
        <div class="cart-item-name">${x.name} × ${x.qty}</div>
        <div class="cart-item-price">${(x.price * x.qty).toLocaleString('fr-FR')} FCFA</div>
      </div>
      <button class="cart-item-del" onclick="removeCart(${x.id})">✕</button>
    </div>
  `).join('');
  // const sum = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
const delivery = subtotal > 0 ? DELIVERY_LOME : 0;
const total = subtotal + delivery;
  foot.innerHTML = `
  <div class="drawer-foot">

    <div class="drawer-total-line">
      <span>Sous-total: </span>
      <span>${subtotal.toLocaleString('fr-FR')} FCFA</span>
    </div>

    <div class="drawer-total-line">
      <span>Livraison Lomé: </span>
      <span>${delivery.toLocaleString('fr-FR')} FCFA</span>
    </div>

    <div class="drawer-total">
      <span>Total: </span>
      <span>${total.toLocaleString('fr-FR')} FCFA</span>
    </div>

    <small style="display:block;margin-top:8px;color:#777">
      Hors Lomé : frais de livraison à discuter.
    </small>

    <button class="wa-order-btn" onclick="orderWA()">
      ${WA_SVG} Commander via WhatsApp
    </button>

  </div>
`;
}
function orderWA() {
  let msg = '📿 *Nouvelle Commande POUTOULOU*\n\n';
  cart.forEach(x => {
    msg += `🛍️ *${x.name}* × ${x.qty} = ${(x.price * x.qty).toLocaleString('fr-FR')} FCFA\n`
  });

  const subtotal = cart.reduce((t, x) => t + x.price * x.qty, 0);

const delivery = DELIVERY_LOME;

const total = subtotal + delivery;

msg += `\n📦 *Livraison Lomé :* ${delivery.toLocaleString('fr-FR')} FCFA`;

msg += `\n💰 *Total Facture :* ${total.toLocaleString('fr-FR')} FCFA`;

msg += `\n\n⚠️ Hors Lomé : frais de livraison à discuter.`;

msg += `\n\nBonjour POUTOULOU ! Je souhaite passer cette commande. Merci !`;

  // 👉 Ouvre WhatsApp
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');

  // ✅ VIDER LE PANIER
  cart = [];
  updateCart();

  // ✅ feedback utilisateur
  showToast('✅ Commande envoyée, panier vidé !');

  // (optionnel) fermer le drawer
  closeDrawer();
}

function toggleDrawer() {
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

function toggleMob() { 
  document.getElementById('mobMenu').classList.toggle('open') 
}

function scroll2(sel) { 
  document.querySelector(sel).scrollIntoView({ behavior: 'smooth' }) 
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

renderProducts(products);