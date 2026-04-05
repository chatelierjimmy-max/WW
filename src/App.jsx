import { useState } from "react";

export default function App() {
  const [callOnlyMode, setCallOnlyMode] = useState(false);

  const features = [
    {
      title: "Filtrez le contenu",
      text: "Bloquez ou limitez les sites et applications inappropriés pour une navigation plus sûre.",
    },
    {
      title: "Suivi en temps réel",
      text: "Consultez l’activité numérique, les alertes et les habitudes d’utilisation en un coup d’œil.",
    },
    {
      title: "Limites intelligentes",
      text: "Définissez du temps d’écran, des pauses et des horaires adaptés au quotidien.",
    },
    {
      title: "Localisation",
      text: "Recevez des alertes de zone et visualisez la position des appareils liés au compte famille.",
    },
  ];

  const reviews = [
    {
      name: "Camille",
      role: "Parent de deux enfants",
      text: "WW nous aide à poser des règles claires à la maison sans conflit permanent autour des écrans.",
    },
    {
      name: "Sofiane",
      role: "Père d’un adolescent",
      text: "Le mode appels uniquement est très utile pour l’école et les moments de concentration.",
    },
    {
      name: "Julie",
      role: "Mère de trois enfants",
      text: "L’interface est claire, simple et rassurante. On comprend tout rapidement.",
    },
  ];

  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      desc: "Pour découvrir la plateforme.",
      features: ["Suivi basique", "1 appareil", "Réglages simples"],
      featured: false,
    },
    {
      name: "Premium",
      price: "9,99€",
      desc: "Le meilleur équilibre pour les familles.",
      features: [
        "Toutes les fonctionnalités",
        "Plusieurs appareils",
        "Rapports détaillés",
      ],
      featured: true,
    },
    {
      name: "Complete",
      price: "15,99€",
      desc: "Protection avancée et accompagnement renforcé.",
      features: [
        "Alertes avancées",
        "Routines personnalisées",
        "Support prioritaire",
      ],
      featured: false,
    },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <div className="brand-logo">W</div>
            <div>
              <h1 className="brand-name">WW</h1>
              <p className="brand-subtitle">
                Contrôle parental & bien-être numérique
              </p>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#features">Fonctionnalités</a>
            <a href="#phone-lock">Mode appels</a>
            <a href="#reviews">Avis</a>
            <a href="#pricing">Tarifs</a>
          </nav>

          <div className="nav-actions">
            <button className="btn btn-light">Se connecter</button>
            <button className="btn btn-primary">Commencer</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg"></div>

          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">CONTRÔLE PARENTAL WW</span>
              <h2>
                La solution de contrôle parental et de bien-être numérique tout
                en un
              </h2>
              <p>
                WW aide les familles à gérer le temps d’écran, sécuriser les
                usages numériques et appliquer des restrictions fortes sur
                mobile, y compris un mode spécial “Appels uniquement”.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary btn-large">
                  Lancez-vous gratuitement
                </button>
                <button className="btn btn-outline btn-large">
                  Voir les forfaits
                </button>
              </div>

              <div className="platforms">
                <p className="platforms-label">Disponible sur</p>
                <div className="platform-list">
                  <span>iOS</span>
                  <span>Android</span>
                  <span>Windows</span>
                  <span>macOS</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="dashboard-card">
                <div className="dashboard-top">
                  <div>
                    <p className="dashboard-label">Tableau de bord WW</p>
                    <h3>Vue famille</h3>
                  </div>
                  <span className="live-pill">En direct</span>
                </div>

                <div className="dashboard-stats">
                  <div className="stat-box">
                    <span>Temps d’écran</span>
                    <strong>2h 14</strong>
                    <small>Dans la limite définie</small>
                  </div>
                  <div className="stat-box">
                    <span>Alertes</span>
                    <strong>03</strong>
                    <small className="warning-text">À vérifier</small>
                  </div>
                </div>

                <div className="usage-card">
                  <div className="usage-head">
                    <span>Applications les plus utilisées</span>
                    <span>Aujourd’hui</span>
                  </div>

                  <div className="usage-item">
                    <div className="usage-row">
                      <span>YouTube</span>
                      <span>48 min</span>
                    </div>
                    <div className="bar">
                      <div className="fill fill-72"></div>
                    </div>
                  </div>

                  <div className="usage-item">
                    <div className="usage-row">
                      <span>WhatsApp</span>
                      <span>35 min</span>
                    </div>
                    <div className="bar">
                      <div className="fill fill-53"></div>
                    </div>
                  </div>

                  <div className="usage-item">
                    <div className="usage-row">
                      <span>TikTok</span>
                      <span>22 min</span>
                    </div>
                    <div className="bar">
                      <div className="fill fill-34"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mini-card">
                <span>Zone sécurisée</span>
                <strong>École · Maison</strong>
                <small>Alertes d’arrivée et de départ activées</small>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section section-light">
          <div className="container">
            <div className="section-title center">
              <p>Fonctionnalités</p>
              <h2>Tout ce qu’il faut pour protéger vos enfants en ligne</h2>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="phone-lock" className="section">
          <div className="container phone-lock-box">
            <div>
              <p className="section-kicker">Restriction téléphone</p>
              <h2>Mode Appels uniquement</h2>
              <p className="lead-text">
                Activez un verrouillage renforcé où tout est bloqué sauf les
                appels entrants, sortants et les numéros d’urgence.
              </p>

              <div className="restriction-preview">
                <div className="preview-row">
                  <span>Téléphone</span>
                  <strong className="allowed-text">Autorisé</strong>
                </div>
                <div className="preview-row">
                  <span>Messages</span>
                  <strong>Bloqué</strong>
                </div>
                <div className="preview-row">
                  <span>Réseaux sociaux</span>
                  <strong>Bloqué</strong>
                </div>
                <div className="preview-row">
                  <span>Jeux</span>
                  <strong>Bloqué</strong>
                </div>
                <div className="preview-row">
                  <span>Navigateur</span>
                  <strong>Bloqué</strong>
                </div>
              </div>
            </div>

            <div className="phone-lock-panel">
              <div className={`lock-status ${callOnlyMode ? "active" : ""}`}>
                <span className="status-dot"></span>
                <strong>
                  {callOnlyMode
                    ? "Mode Appels uniquement activé"
                    : "Mode désactivé"}
                </strong>
              </div>

              <div className="allowed-blocked-grid">
                <div className="lock-list">
                  <h3>Autorisé</h3>
                  <ul>
                    <li>✅ Appels entrants</li>
                    <li>✅ Appels sortants</li>
                    <li>✅ Numéros d’urgence</li>
                  </ul>
                </div>

                <div className="lock-list blocked">
                  <h3>Bloqué</h3>
                  <ul>
                    <li>⛔ SMS / Messages</li>
                    <li>⛔ Réseaux sociaux</li>
                    <li>⛔ Jeux</li>
                    <li>⛔ Navigateur web</li>
                    <li>⛔ Vidéo / Streaming</li>
                  </ul>
                </div>
              </div>

              <div className="lock-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => setCallOnlyMode(!callOnlyMode)}
                >
                  {callOnlyMode ? "Désactiver le mode" : "Activer le mode"}
                </button>

                <button
                  className="btn btn-outline"
                  onClick={() =>
                    alert(
                      callOnlyMode
                        ? "Appel autorisé : les appels restent accessibles."
                        : "Mode désactivé : appels disponibles normalement.",
                    )
                  }
                >
                  Tester un appel
                </button>
              </div>

              <p className="lock-note">
                {callOnlyMode
                  ? "Toutes les fonctions non essentielles sont simulées comme bloquées."
                  : "Le téléphone fonctionne normalement pour le moment."}
              </p>
            </div>
          </div>
        </section>

        <section id="reviews" className="section section-accent">
          <div className="container">
            <div className="section-title center">
              <p>Témoignages</p>
              <h2>Une expérience plus sereine pour la famille</h2>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-mark">“</div>
                  <p>{review.text}</p>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <div className="section-title center">
              <p>Tarifs</p>
              <h2>Choisissez la formule adaptée</h2>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`price-card ${plan.featured ? "featured" : ""}`}
                  key={plan.name}
                >
                  <div className="price-top">
                    <h3>{plan.name}</h3>
                    {plan.featured && (
                      <span className="price-badge">Populaire</span>
                    )}
                  </div>

                  <div className="price-value">
                    <strong>{plan.price}</strong>
                    <span>/ mois</span>
                  </div>

                  <p className="price-desc">{plan.desc}</p>

                  <ul className="price-list">
                    {plan.features.map((item) => (
                      <li key={item}>
                        <span className="price-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="btn">Choisir {plan.name}</button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <span>© 2026 WW. Tous droits réservés.</span>
          <div className="footer-links">
            <a href="#">Confidentialité</a>
            <a href="#">Conditions</a>
            <a href="#">Assistance</a>
          </div>
        </div>
      </footer>
    </>
  );
}
