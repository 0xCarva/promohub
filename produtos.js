// ============================================================
// ARQUIVO DE PRODUTOS — OFERTATOP
// ============================================================
//
// ★ SUA TAG DE AFILIADO — só mexa aqui se mudar de conta
const AFILIADO_TAG = 'carva00-20';
//
// ── COMO FUNCIONA A TAG ──────────────────────────────────
// Você NÃO precisa colocar sua tag manualmente em cada link.
// O sistema injeta a tag carva00-20 automaticamente em
// QUALQUER link da Amazon antes de abrir — mesmo que você
// esqueça, copie errado ou cole um link sem tag.
//
// ── COMO ADICIONAR UM PRODUTO ────────────────────────────
// 1. Copie um bloco { ... } abaixo
// 2. Cole dentro do array PRODUTOS (antes do último })
// 3. Preencha os campos
// 4. No campo "link", cole o link do produto na Amazon
//    (pode ser qualquer URL da Amazon — a tag é injetada
//    automaticamente pelo sistema)
//
// ── COMO PEGAR O LINK DO PRODUTO ─────────────────────────
// Opção A (mais fácil): copie a URL da barra do navegador
//   Ex: https://www.amazon.com.br/dp/B09XYZ123
// Opção B (melhor rastreio): use o SiteStripe
//   → Instale a extensão Amazon SiteStripe
//   → Visite o produto, clique em "Texto" no topo
//   → Copie o link amzn.to/...
//
// ── COMO PEGAR A IMAGEM ───────────────────────────────────
// 1. Abra o produto na Amazon
// 2. Botão direito na imagem principal → "Copiar endereço"
// 3. Cole no campo "imagem"
// ============================================================

const PRODUTOS = [

  // ─── ELETRÔNICOS ────────────────────────────────────────
  {
    id: "fone-jbl-tune520",
    nome: "Fone de Ouvido Bluetooth JBL Tune 520BT Pure Bass",
    categoria: "Eletrônicos",
    emoji: "🎧",
    preco_de: "R$ 299,00",
    preco_por: "R$ 179,90",
    desconto: "40%",
    avaliacao: 4.7,
    avaliacoes: "12.847",
    badge: "hot",
    destaque: true,
    estoque: "Restam poucos!",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Som Pure Bass poderoso, até 57 horas de bateria, conexão Bluetooth 5.3 e dobrável para fácil transporte. Compatível com Alexa e Google Assistente.",
    features: [
      "Até 57 horas de bateria com case",
      "Bluetooth 5.3 multipoint",
      "Pure Bass Sound JBL",
      "Dobrável e leve — 168g",
      "Compatível com Alexa"
    ]
  },

  {
    id: "carregador-turbo-65w",
    nome: "Carregador Turbo USB-C 65W Anker GaN — 3 Portas",
    categoria: "Eletrônicos",
    emoji: "⚡",
    preco_de: "R$ 189,00",
    preco_por: "R$ 97,90",
    desconto: "48%",
    avaliacao: 4.8,
    avaliacoes: "8.234",
    badge: "hot",
    estoque: "Oferta relâmpago",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Carregador compacto GaN com 3 portas (2x USB-C + 1x USB-A). Carrega notebook, tablet e celular ao mesmo tempo.",
    features: [
      "Tecnologia GaN — 40% menor que carregadores comuns",
      "3 portas simultâneas",
      "65W total de potência",
      "Proteção contra sobrecarga",
      "Universal — funciona no mundo todo"
    ]
  },

  {
    id: "smartwatch-amazfit",
    nome: "Smartwatch Amazfit GTS 4 Mini — AMOLED 1.65\"",
    categoria: "Eletrônicos",
    emoji: "⌚",
    preco_de: "R$ 599,00",
    preco_por: "R$ 349,90",
    desconto: "42%",
    avaliacao: 4.5,
    avaliacoes: "5.621",
    badge: "new",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Smartwatch leve e estiloso com 120+ modos esportivos, GPS integrado, monitor de saúde e bateria de 15 dias.",
    features: [
      "Tela AMOLED 1.65\" sempre ativa",
      "GPS integrado",
      "120+ modos esportivos",
      "Monitor de SpO2 e frequência cardíaca",
      "15 dias de bateria"
    ]
  },

  {
    id: "camera-xiaomi-c400",
    nome: "Câmera de Segurança Xiaomi C400 WiFi 4MP Colorida",
    categoria: "Eletrônicos",
    emoji: "📷",
    preco_de: "R$ 279,00",
    preco_por: "R$ 154,90",
    desconto: "44%",
    avaliacao: 4.6,
    avaliacoes: "3.892",
    badge: "top",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Câmera IP 4MP com visão noturna colorida, AI para detecção de pessoas, integração com app Mi Home e Alexa.",
    features: [
      "Resolução 4MP (2560x1440)",
      "Visão noturna colorida full color",
      "Detecção de pessoas por IA",
      "Compatível com Alexa e Google",
      "Armazenamento na nuvem ou SD"
    ]
  },

  // ─── INFORMÁTICA ────────────────────────────────────────
  {
    id: "ssd-kingston-1tb",
    nome: "SSD Kingston NV2 1TB NVMe PCIe 4.0 — Leitura 3500MB/s",
    categoria: "Informática",
    emoji: "💻",
    preco_de: "R$ 399,00",
    preco_por: "R$ 219,90",
    desconto: "45%",
    avaliacao: 4.7,
    avaliacoes: "22.145",
    badge: "hot",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "SSD M.2 NVMe ultrarápido ideal para upgrade de notebook ou desktop. Até 3500 MB/s de leitura sequencial.",
    features: [
      "1TB de armazenamento",
      "Leitura: até 3500 MB/s",
      "Interface PCIe 4.0 NVMe",
      "Fator de forma M.2 2280",
      "Garantia de 3 anos Kingston"
    ]
  },

  {
    id: "mouse-logitech-m650",
    nome: "Mouse Sem Fio Logitech M650 Silencioso — Bolt + Bluetooth",
    categoria: "Informática",
    emoji: "🖱️",
    preco_de: "R$ 199,00",
    preco_por: "R$ 119,90",
    desconto: "40%",
    avaliacao: 4.8,
    avaliacoes: "9.773",
    badge: "top",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Mouse silencioso com 90% menos ruído nos cliques. Bateria de 24 meses, conexão Bluetooth ou USB Bolt.",
    features: [
      "90% mais silencioso",
      "Bateria de até 24 meses",
      "Conecte em 3 dispositivos (Easy-Switch)",
      "Scroll precisão SmartWheel",
      "Compatível com Windows, Mac, Linux"
    ]
  },

  // ─── CASA ───────────────────────────────────────────────
  {
    id: "luminaria-led-yeelight",
    nome: "Lâmpada Inteligente Yeelight E27 9W RGB 16M Cores WiFi",
    categoria: "Casa",
    emoji: "💡",
    preco_de: "R$ 89,00",
    preco_por: "R$ 44,90",
    desconto: "50%",
    avaliacao: 4.5,
    avaliacoes: "15.322",
    badge: "hot",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Lâmpada LED inteligente com 16 milhões de cores, compatível com Alexa, Google Home e Apple HomeKit.",
    features: [
      "16 milhões de cores RGB",
      "Compatível com Alexa e Google Home",
      "Controle por voz e pelo app",
      "Dimmer — ajuste de brilho e temperatura",
      "Encaixe padrão E27 (normal)"
    ]
  },

  {
    id: "organizador-gaveta-set10",
    nome: "Kit 10 Organizadores de Gaveta Modular — Plástico Reforçado",
    categoria: "Casa",
    emoji: "🏠",
    preco_de: "R$ 79,00",
    preco_por: "R$ 39,90",
    desconto: "50%",
    avaliacao: 4.4,
    avaliacoes: "7.891",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Kit com 10 divisórias modulares encaixáveis para organizar gavetas, closets e cozinha. Plástico ABS resistente.",
    features: [
      "10 peças de tamanhos variados",
      "Encaixe sem cola",
      "Plástico ABS resistente e lavável",
      "Serve para gavetas, armários e prateleiras",
      "Cores neutras — bege e branco"
    ]
  },

  // ─── COZINHA ────────────────────────────────────────────
  {
    id: "airfryer-philips-4l",
    nome: "Fritadeira Air Fryer Philips Walita Turbostar 4L Digital",
    categoria: "Cozinha",
    emoji: "🍳",
    preco_de: "R$ 699,00",
    preco_por: "R$ 399,90",
    desconto: "43%",
    avaliacao: 4.7,
    avaliacoes: "34.521",
    badge: "top",
    destaque: false,
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Air Fryer Philips original com tecnologia Turbostar, painel digital touchscreen e capacidade para 4 pessoas.",
    features: [
      "Capacidade 4 litros",
      "Painel digital com timer",
      "Tecnologia Turbostar para resultado mais crocante",
      "99% menos gordura",
      "Peças removíveis laváveis na lava-louça"
    ]
  },

  {
    id: "cafeteira-nespresso",
    nome: "Cafeteira Nespresso Essenza Mini D30 — Preta + Aeroccino",
    categoria: "Cozinha",
    emoji: "☕",
    preco_de: "R$ 799,00",
    preco_por: "R$ 489,90",
    desconto: "39%",
    avaliacao: 4.8,
    avaliacoes: "28.947",
    badge: "hot",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "A menor Nespresso do mundo acompanha o Aeroccino para fazer cappuccino e latte em casa. Aquece em 25 segundos.",
    features: [
      "Aquece em apenas 25 segundos",
      "Acompanha Aeroccino 3 para espuma de leite",
      "Compatível com cápsulas Nespresso Original",
      "Pressão de 19 bar",
      "Design compacto — cabe em qualquer bancada"
    ]
  },

  // ─── ESPORTES ────────────────────────────────────────────
  {
    id: "garrafa-termica-hydra",
    nome: "Garrafa Térmica Stanley Adventure 1L — Inox Vácuo 24h",
    categoria: "Esportes",
    emoji: "⚽",
    preco_de: "R$ 249,00",
    preco_por: "R$ 139,90",
    desconto: "44%",
    avaliacao: 4.9,
    avaliacoes: "45.213",
    badge: "top",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "A garrafa mais robusta do mercado. Inox 18/8 com isolamento a vácuo dupla parede. Mantém frio 24h e quente 12h.",
    features: [
      "Inox 18/8 — não deixa gosto",
      "Frio 24h, quente 12h",
      "Tampa que vira copo",
      "Resistente a quedas e impactos",
      "Livre de BPA"
    ]
  },

  {
    id: "band-elastica-set5",
    nome: "Kit 5 Faixas Elásticas de Resistência para Exercícios",
    categoria: "Esportes",
    emoji: "🏋️",
    preco_de: "R$ 79,00",
    preco_por: "R$ 37,90",
    desconto: "52%",
    avaliacao: 4.4,
    avaliacoes: "18.632",
    badge: "hot",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Kit com 5 níveis de resistência (2kg a 22kg) para treino em casa, academia ou viagem. Látex natural premium.",
    features: [
      "5 níveis: amarelo, vermelho, verde, azul e preto",
      "Resistência de 2kg a 22kg",
      "Látex natural antialérgico",
      "Acompanha bolsa e guia de exercícios",
      "Substituição total de aparelhos de academia"
    ]
  },

  // ─── BELEZA ─────────────────────────────────────────────
  {
    id: "secador-taiff-2200w",
    nome: "Secador de Cabelo Taiff New Action 2200W — Íon Cerâmica",
    categoria: "Beleza",
    emoji: "💄",
    preco_de: "R$ 229,00",
    preco_por: "R$ 129,90",
    desconto: "43%",
    avaliacao: 4.6,
    avaliacoes: "11.574",
    badge: "new",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Secador profissional 2200W com tecnologia de íons negativos e cerâmica para cabelos mais lisos e brilhosos.",
    features: [
      "2200W de potência",
      "Íons negativos reduzem o frizz",
      "Cerâmica — distribui calor uniformemente",
      "3 temperaturas e 2 velocidades",
      "Bico concentrador e difusor inclusos"
    ]
  },

  // ─── GAMES ──────────────────────────────────────────────
  {
    id: "controle-dualsense",
    nome: "Controle PS5 DualSense — Midnight Black Original Sony",
    categoria: "Games",
    emoji: "🎮",
    preco_de: "R$ 449,00",
    preco_por: "R$ 299,90",
    desconto: "33%",
    avaliacao: 4.8,
    avaliacoes: "67.892",
    badge: "top",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "Controle oficial Sony PS5 DualSense com feedback háptico avançado, gatilhos adaptativos e microfone integrado.",
    features: [
      "Feedback háptico de próxima geração",
      "Gatilhos adaptativos com resistência variável",
      "Microfone integrado",
      "Bateria recarregável via USB-C",
      "Compatível com PC também"
    ]
  },

  // ─── LIVROS ─────────────────────────────────────────────
  {
    id: "kindle-11gen",
    nome: "Kindle 11ª Geração — 6\" 16GB 300ppi Luz Embutida",
    categoria: "Eletrônicos",
    emoji: "📚",
    preco_de: "R$ 499,00",
    preco_por: "R$ 299,90",
    desconto: "40%",
    avaliacao: 4.8,
    avaliacoes: "89.234",
    badge: "hot",
    link: "https://amzn.to/SEU_LINK_AQUI",
    imagem: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    descricao: "O melhor Kindle básico com tela de 300ppi sem reflexos, luz embutida e bateria de semanas. Acesso a milhões de livros.",
    features: [
      "Tela 6\" antirreflexo 300ppi",
      "Luz embutida ajustável",
      "16GB — centenas de livros",
      "Bateria de semanas",
      "Resistente à água IPX8"
    ]
  },
  // ─── TV ─────────────────────────────────────────────────
  {
    id: "tcl-32s5k-google-tv",
    nome: "Smart TV TCL 32\" QLED Full HD Google TV Wi-Fi Bluetooth HDR10 Dolby Audio 32S5K",
    categoria: "Eletrônicos",
    emoji: "📺",
    preco_de: "R$ 1.299,00",
    preco_por: "R$ 811,80",
    desconto: "38%",
    avaliacao: 4.4,
    avaliacoes: "88",
    badge: "hot",
    destaque: true,
    estoque: "Mais de 500 vendidos esse mês",
    parcelamento: "12x de R$ 75,24 sem juros",
    link: "https://www.amazon.com.br/TCL-Polegadas-Bluetooth-Google-32S5K/dp/B0FTGL2XBC?linkCode=ll2&tag=carva00-20&linkId=651b459ccf8c5c0db04c85b6113815e1&ref_=as_li_ss_tl",
    imagem: "https://m.media-amazon.com/images/I/61jW+tFc5DL._AC_SL1000_.jpg",
    descricao: "Smart TV compacta com painel QLED Full HD, Google TV nativo com acesso a Netflix, YouTube e Disney+, Chromecast integrado, 20W RMS de som e design sem bordas. Ideal para quarto, escritório ou cozinha.",
    features: [
      "Tela QLED Full HD 32\" com HDR10 e Dolby Audio",
      "Google TV — acesso à Play Store, YouTube, Netflix, Disney+",
      "Chromecast e Miracast integrados",
      "Wi-Fi, Bluetooth 5.0, 2x HDMI, 1x USB, LAN",
      "20W RMS — som mais potente que TVs comuns de 32\""
    ]
  },

];

// ─── NÃO MEXA ABAIXO DESTA LINHA ────────────────────────
// Injeção automática da tag de afiliado em todos os links

function tagAmazonURL(url) {
  if (!url || typeof url !== 'string') return url;
  try {
    if (url.includes('amzn.to') || (url.includes('amzn.') && !url.includes('amazon.com'))) {
      const clean = url.replace(/([?&])tag=[^&]*/g, '$1').replace(/[?&]$/, '');
      const sep = clean.includes('?') ? '&' : '?';
      return clean + sep + 'tag=' + AFILIADO_TAG;
    }
    if (url.includes('amazon.com')) {
      const u = new URL(url);
      u.searchParams.set('tag', AFILIADO_TAG);
      if (!u.searchParams.get('linkCode')) u.searchParams.set('linkCode', 'll2');
      return u.toString();
    }
  } catch(e) {}
  return url;
}

PRODUTOS.forEach(p => { if (p.link) p.link = tagAmazonURL(p.link); });

console.log('[OfertaTop] ' + PRODUTOS.length + ' produtos carregados | tag: ' + AFILIADO_TAG);
