import React, { useEffect, useMemo, useState } from 'react';
import './xpark.css';

const translations = {
  zh: {
    nav: {
      about: '关于',
      how: '运作方式',
      strategy: '市场策略',
      team: '团队',
      future: '未来展望',
    },
    cta: {
      start: '开始体验',
      explore: '探索平台',
    },
    hero: {
      title: '重新定义知识产权与实物资产数字化',
      desc:
        '区块链驱动的平台，将知识产权与实物资产转化为可交易、可分割的数字资产，连接传统资产与去中心化金融',
    },
    how: {
      title: '运作机制',
      desc: 'XPark通过先进的区块链技术，为知识产权和实物资产提供完整的数字化解决方案',
      items: [
        {
          icon: 'fas fa-file-contract',
          title: '资产通证化',
          desc:
            '将专利、音乐版权、商标等知识产权转化为区块链上的数字代币（NFT或证券型代币），并通过法律框架确保所有权',
        },
        {
          icon: 'fas fa-file-code',
          title: '智能合约',
          desc: '通过智能合约自动化版税分配、许可协议和IP交易，支持DAO模型进行去中心化治理',
        },
        {
          icon: 'fas fa-chart-line',
          title: '流动性解决方案',
          desc: '通证化IP可在二级市场交易、分割，或作为DeFi协议的抵押品，提供前所未有的流动性',
        },
        {
          icon: 'fas fa-shield-alt',
          title: '合规与验证',
          desc: '全面的KYC/AML检查，遵守SEC、欧盟等监管要求，确保平台符合全球法律标准',
        },
      ],
    },
    stats: {
      items: [
        { value: '$10T', label: '2030年预测市场规模' },
        { value: '10%', label: '全球GDP将通证化' },
        { value: '100+', label: '知识产权类型支持' },
        { value: '24/7', label: '全球市场交易' },
      ],
    },
    strategy: {
      title: '市场策略',
      desc: '连接知识产权所有者、投资者和企业，构建完整的数字资产生态系统',
      blocks: [
        {
          title: '目标用户',
          list: [
            '知识产权所有者：发明家、艺术家、持有未充分利用IP的公司',
            '投资者：加密原生交易者、机构投资者、DeFi流动性提供者',
            '企业：寻求许可或投资知识产权的公司',
          ],
        },
        {
          title: '关键渠道',
          list: [
            '合作伙伴：律师事务所、知识产权机构、行业协会',
            '社区建设：Discord、Twitter、Telegram等Web3社区',
            '企业销售：针对持有大量IP组合的公司的B2B推广',
            '交易所上市：OpenSea、Rarible等NFT市场',
          ],
        },
        {
          title: '激励机制',
          list: [
            '空投、质押奖励或收入分成吸引早期采用者',
            '创作者资助计划，鼓励在平台通证化其IP',
            '与法律专家合作确保美国、欧盟、新加坡等关键司法管辖区合规',
            '获取必要的许可证（如证券监管机构批准）',
          ],
        },
      ],
    },
    team: {
      title: '核心团队',
      desc: '跨领域专业团队，推动知识产权与实物资产数字化革命',
      items: [
        { icon: 'fas fa-code', title: '区块链开发', desc: '智能合约专家（Solidity, Rust），构建安全高效的底层架构' },
        { icon: 'fas fa-balance-scale', title: '法律合规', desc: '知识产权律师、证券监管专家，确保全球合规性' },
        { icon: 'fas fa-handshake', title: '业务发展', desc: '与知识产权公司、投资者和企业建立战略合作关系' },
        { icon: 'fas fa-bullhorn', title: '市场营销', desc: '增长黑客、内容创作者和社区经理，推动平台采用' },
        { icon: 'fas fa-users', title: '顾问委员会', desc: '知识产权法、DeFi和通证化领域的行业资深专家' },
      ],
    },
    future: {
      title: '未来展望',
      desc: '知识产权数字化与实物资产通证化将重塑金融、所有权和投资模式',
      blocks: [
        {
          title: '关键趋势',
          list: [
            '机构采用：BlackRock、Franklin Templeton探索通证化基金',
            '监管明确：MiCA（欧盟）、美国SEC指南塑造合规框架',
            '流动性增强：碎片化所有权解锁全球投资机会',
            'AI与IP货币化：AI生成内容通证化为可交易数字资产',
          ],
        },
        {
          title: '主要领域',
          list: [
            '房地产：Propy、RealT等平台实现通证化房产销售',
            '私人信贷：Goldfinch、Maple Finance提供链上借贷',
            '商品：PAX Gold（黄金支持代币）、Tinlake（资产支持贷款）',
            '政府债券：新加坡Project Guardian、香港通证化绿色债券',
          ],
        },
        {
          title: '融合创新',
          list: [
            '混合资产：知识产权作为实物资产（如产生许可收入的可通证化专利）',
            'IP证券化：音乐目录或专利通证化为可交易证券',
            '动态NFT：具有演进能力的IP资产（如游戏皮肤、带版税的AI生成艺术）',
          ],
        },
      ],
    },
    footer: {
      aboutTitle: '关于XPark',
      aboutDesc:
        '区块链驱动的平台，将知识产权与实物资产转化为可交易、可分割的数字资产，连接传统资产与去中心化金融。',
      featuresTitle: '平台功能',
      features: ['资产通证化', '二级市场交易', 'DeFi整合', 'DAO治理', '合规框架'],
      resourcesTitle: '资源',
      resources: ['开发文档', 'API集成', '法律合规', '常见问题'],
      contactTitle: '联系我们',
      contact: [
        { icon: 'fas fa-envelope', text: 'contact@xpark.io' },
        { icon: 'fas fa-map-marker-alt', text: '新加坡 | 瑞士 | 美国' },
        { icon: 'fas fa-briefcase', text: '合作伙伴申请' },
        { icon: 'fas fa-newspaper', text: '媒体咨询' },
      ],
      copyright:
        '© 2025 XPark - IP Digitalized Assets RWA Platform. 保留所有权利。',
    },
    switchLang: 'EN',
  },
  en: {
    nav: {
      about: 'About',
      how: 'How it Works',
      strategy: 'Strategy',
      team: 'Team',
      future: 'Roadmap',
    },
    cta: {
      start: 'Get Started',
      explore: 'Explore Platform',
    },
    hero: {
      title: 'Redefining IP and Real-World Asset Digitalization',
      desc:
        'A blockchain-powered platform that tokenizes IP and real-world assets into tradable, fractionalized digital assets, bridging TradFi and DeFi.',
    },
    how: {
      title: 'How It Works',
      desc: 'XPark provides a full-stack tokenization solution for IP and RWAs using advanced blockchain technology',
      items: [
        {
          icon: 'fas fa-file-contract',
          title: 'Asset Tokenization',
          desc:
            'Convert patents, music rights, trademarks and more into on-chain tokens (NFTs or security tokens) with legal frameworks to ensure ownership.',
        },
        {
          icon: 'fas fa-file-code',
          title: 'Smart Contracts',
          desc: 'Automate royalties, licensing and IP trading with DAOs for decentralized governance.',
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Liquidity Solutions',
          desc: 'Trade, fractionalize, or collateralize tokenized IP in DeFi protocols to unlock liquidity.',
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Compliance & Verification',
          desc: 'Comprehensive KYC/AML and global regulatory compliance (SEC, EU and more).',
        },
      ],
    },
    stats: {
      items: [
        { value: '$10T', label: '2030 Market Size Forecast' },
        { value: '10%', label: 'Global GDP to be Tokenized' },
        { value: '100+', label: 'IP Types Supported' },
        { value: '24/7', label: 'Global Markets' },
      ],
    },
    strategy: {
      title: 'Market Strategy',
      desc: 'Connecting IP owners, investors and enterprises to build a complete digital asset ecosystem',
      blocks: [
        {
          title: 'Target Users',
          list: [
            'IP owners: inventors, artists, and enterprises with underutilized IP',
            'Investors: crypto-native traders, institutions, and DeFi LPs',
            'Enterprises: companies seeking IP licensing or investment',
          ],
        },
        {
          title: 'Key Channels',
          list: [
            'Partnerships: law firms, IP agencies, industry associations',
            'Community: Discord, Twitter, Telegram and other Web3 hubs',
            'Enterprise Sales: B2B motion for large IP portfolios',
            'Exchange Listings: NFT marketplaces like OpenSea, Rarible',
          ],
        },
        {
          title: 'Incentives',
          list: [
            'Airdrops, staking rewards or revenue sharing for early adopters',
            'Creator grants to encourage IP tokenization',
            'Legal partnerships to ensure compliance in US, EU, SG and more',
            'Obtain necessary licenses (e.g., securities regulators)',
          ],
        },
      ],
    },
    team: {
      title: 'Core Team',
      desc: 'A cross-disciplinary team driving the digitalization of IP and real-world assets',
      items: [
        { icon: 'fas fa-code', title: 'Blockchain Dev', desc: 'Smart contract experts (Solidity, Rust) building secure, efficient infra' },
        { icon: 'fas fa-balance-scale', title: 'Legal & Compliance', desc: 'IP lawyers and securities experts ensuring global compliance' },
        { icon: 'fas fa-handshake', title: 'Business Development', desc: 'Strategic partnerships with IP firms, investors and enterprises' },
        { icon: 'fas fa-bullhorn', title: 'Marketing', desc: 'Growth, content and community to drive adoption' },
        { icon: 'fas fa-users', title: 'Advisors', desc: 'Veterans in IP law, DeFi and tokenization' },
      ],
    },
    future: {
      title: 'Roadmap',
      desc: 'IP digitalization and RWA tokenization will reshape finance, ownership and investment',
      blocks: [
        {
          title: 'Key Trends',
          list: [
            'Institutional: BlackRock and Franklin Templeton exploring tokenized funds',
            'Regulatory clarity: EU MiCA, US SEC guidance shaping frameworks',
            'Liquidity: fractional ownership unlocks global access',
            'AI monetization: AI-generated content as tokenized assets',
          ],
        },
        {
          title: 'Key Verticals',
          list: [
            'Real Estate: tokenized property sales via platforms like Propy, RealT',
            'Private Credit: on-chain lending via Goldfinch, Maple Finance',
            'Commodities: PAX Gold, Tinlake and more',
            'Gov Bonds: Project Guardian (SG), tokenized green bonds (HK)',
          ],
        },
        {
          title: 'Fusion',
          list: [
            'Hybrid assets: IP bundled with RWAs (e.g., licensing-revenue patents)',
            'IP Securitization: music catalogs or patents as tradable securities',
            'Dynamic NFTs: evolving IP assets (game skins, AI art w/ royalties)',
          ],
        },
      ],
    },
    footer: {
      aboutTitle: 'About XPark',
      aboutDesc:
        'A blockchain-powered platform that tokenizes IP and RWAs into tradable, fractionalized assets, bridging TradFi and DeFi.',
      featuresTitle: 'Features',
      features: ['Tokenization', 'Secondary Markets', 'DeFi Integration', 'DAO Governance', 'Compliance'],
      resourcesTitle: 'Resources',
      resources: ['Developer Docs', 'API Integration', 'Legal & Compliance', 'FAQ'],
      contactTitle: 'Contact',
      contact: [
        { icon: 'fas fa-envelope', text: 'contact@xpark.io' },
        { icon: 'fas fa-map-marker-alt', text: 'Singapore | Switzerland | USA' },
        { icon: 'fas fa-briefcase', text: 'Partnerships' },
        { icon: 'fas fa-newspaper', text: 'Press' },
      ],
      copyright:
        '© 2025 XPark - IP Digitalized Assets RWA Platform. All rights reserved.',
    },
    switchLang: '中文',
  },
};

export default function XParkLanding() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    // set <html lang>
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  useEffect(() => {
    // init particles if available
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00f7ff' },
          shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#2563eb', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, out_mode: 'out' },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }

    // animate on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.process-card, .strategy-card, .team-card, .future-card')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="particles-js"></div>

      <header>
        <div className="container">
          <div className="nav-container">
            <div className="logo" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/XParkRWA_logo.png" alt="XPark Logo" style={{ height: 36 }} />
              <span>XPARK</span>
            </div>
            <nav className="nav-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }}>{t.nav.about}</a>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToId('how-it-works'); }}>{t.nav.how}</a>
              <a href="#strategy" onClick={(e) => { e.preventDefault(); scrollToId('strategy'); }}>{t.nav.strategy}</a>
              <a href="#team" onClick={(e) => { e.preventDefault(); scrollToId('team'); }}>{t.nav.team}</a>
              <a href="#future" onClick={(e) => { e.preventDefault(); scrollToId('future'); }}>{t.nav.future}</a>
            </nav>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="secondary-button" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
                {t.switchLang}
              </button>
              <button className="cta-button">{t.cta.start}</button>
            </div>
          </div>
        </div>
      </header>

      <main id="about">
        <section className="hero">
          <div className="container">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.desc}</p>
            <div className="hero-buttons">
              <button className="cta-button">{t.cta.explore}</button>
              {/* Whitepaper removed as requested */}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-title">
              <h2>{t.how.title}</h2>
              <p>{t.how.desc}</p>
            </div>
            <div className="process-container">
              {t.how.items.map((it, idx) => (
                <div className="process-card" key={idx}>
                  <i className={`${it.icon} process-icon`} />
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-container">
              {t.stats.items.map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="strategy" className="section">
          <div className="container">
            <div className="section-title">
              <h2>{t.strategy.title}</h2>
              <p>{t.strategy.desc}</p>
            </div>
            <div className="strategy-container">
              {t.strategy.blocks.map((b, idx) => (
                <div className="strategy-card" key={idx}>
                  <h3>{b.title}</h3>
                  <ul className="strategy-list">
                    {b.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section">
          <div className="container">
            <div className="section-title">
              <h2>{t.team.title}</h2>
              <p>{t.team.desc}</p>
            </div>
            <div className="team-container">
              {t.team.items.map((m, i) => (
                <div className="team-card" key={i}>
                  <i className={`${m.icon} team-icon`} />
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="future" className="section">
          <div className="container">
            <div className="section-title">
              <h2>{t.future.title}</h2>
              <p>{t.future.desc}</p>
            </div>
            <div className="future-container">
              {t.future.blocks.map((b, i) => (
                <div className="future-card" key={i}>
                  <h3>{b.title}</h3>
                  <ul>
                    {b.list.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-column">
              <h3>{t.footer.aboutTitle}</h3>
              <p>{t.footer.aboutDesc}</p>
              <div className="social-links">
                <a href="https://x.com/XPark_RWA" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="Discord"><i className="fab fa-discord" /></a>
                <a href="#" aria-label="Telegram"><i className="fab fa-telegram" /></a>
                <a href="#" aria-label="Medium"><i className="fab fa-medium" /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>{t.footer.featuresTitle}</h3>
              <ul className="footer-links">
                {t.footer.features.map((f, i) => (
                  <li key={i}><a href="#"><i className="fas fa-chevron-right" /> {f}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t.footer.resourcesTitle}</h3>
              <ul className="footer-links">
                {t.footer.resources.map((r, i) => (
                  <li key={i}><a href="#"><i className="fas fa-chevron-right" /> {r}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t.footer.contactTitle}</h3>
              <ul className="footer-links">
                {t.footer.contact.map((c, i) => (
                  <li key={i}><a href="#"><i className={c.icon} /> {c.text}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="copyright">{t.footer.copyright}</div>
        </div>
      </footer>
    </>
  );
}
