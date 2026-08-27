"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  { title: "Succulent", cn: "多肉植物加湿器", type: "家居电器", image: "/works/humidifier-succulent.png", tone: "mint", idea: "把自然的生长感，带进日常空气。" },
  { title: "Air Column", cn: "立式空气调节器", type: "家居电器", image: "/works/tower-air.jpg", tone: "blue", idea: "以柔和曲线重塑功能性部件。" },
  { title: "A6 Interface", cn: "高端电梯操纵盘", type: "公共设施", image: "/works/elevator-panel.jpg", tone: "rose", idea: "让身份、触感与信息在一次按压中相遇。" },
  { title: "Fold 26", cn: "折面电梯交互面板", type: "公共设施", image: "/works/elevator-fold.jpg", tone: "blue", idea: "起伏有道，形态有源。" },
  { title: "Pure Kettle", cn: "智能电水壶", type: "家居电器", image: "/works/kettle.jpg", tone: "ice", idea: "让瓷的亲和与金属的秩序彼此平衡。" },
  { title: "Face++", cn: "模块化人脸识别终端", type: "智能设备", image: "/works/face-module.jpg", tone: "stone", idea: "可替换的感知模块，应对不断变化的空间。" },
  { title: "SMOIF", cn: "医疗显微操作系统", type: "医疗设备", image: "/works/microscope.jpg", tone: "white", idea: "精密设计，也可以拥有安静的人性关怀。" },
  { title: "SUPOR One", cn: "智能压力锅", type: "家居电器", image: "/works/rice-cooker.jpg", tone: "cyan", idea: "用一个强识别特征，建立整个产品家族。" },
  { title: "Kunpeng", cn: "智能破壁料理机", type: "家居电器", image: "/works/blender.jpg", tone: "sand", idea: "以有机形态，营造亲和的厨房体验。" },
  { title: "Parametric", cn: "参数化空气净化器", type: "概念探索", image: "/works/air-purifier-parametric.png", tone: "mint", idea: "参数化纹理，让风的路径变得可见。" },
  { title: "360° Cross", cn: "环绕式空气净化器", type: "概念探索", image: "/works/air-purifier-cross.png", tone: "lilac", idea: "连续曲面，回应全向流动。" },
  { title: "Retro Air", cn: "复古暖风机", type: "概念探索", image: "/works/heater-retro.png", tone: "sand", idea: "把熟悉的记忆，转译成当代触感。" },
  { title: "Little Devil", cn: "小恶魔暖风机", type: "概念探索", image: "/works/heater-devil.png", tone: "rose", idea: "为温度赋予一个有性格的表情。" },
  { title: "Tree Fairy", cn: "树精灵加湿器", type: "概念探索", image: "/works/humidifier-tree.png", tone: "mint", idea: "让家电成为空间里的小型生命。" },
];
const filters = ["全部", "家居电器", "公共设施", "医疗设备", "智能设备", "概念探索"];

export default function Home() {
  const [filter, setFilter] = useState("全部");
  const visible = filter === "全部" ? projects : projects.filter((p) => p.type === filter);
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Hchn 首页">Hchn<span>®</span></a>
        <nav aria-label="主导航"><a href="#works">作品</a><a href="#about">关于</a></nav>
        <p>Industrial Designer · CN</p>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SELECTED WORKS · 2018—2026</p>
          <h1>为梦想的<br />世界而设计<span>。</span></h1>
          <div className="hero-note"><span>HCHN / INDUSTRIAL DESIGN</span><p>在功能与情感之间，寻找产品真正<br className="desktop" />属于人的那一刻。</p></div>
        </div>
        <div className="hero-image"><Image src="/works/humidifier-succulent.png" alt="Succulent 多肉植物加湿器设计" fill priority sizes="(max-width: 800px) 100vw, 48vw" /><span className="image-index">01 / 14</span></div>
        <a className="scroll-cue" href="#works"><span>↓</span> SCROLL TO EXPLORE</a>
      </section>
      <section className="works" id="works">
        <div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>设计，是对未来<br />生活的具体想象。</h2></div><p className="section-intro">从家用电器、公共设施到医疗设备，持续探索形态、结构与体验之间更具温度的平衡。</p></div>
        <div className="filters" role="group" aria-label="按类别筛选作品">
          {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}<sup>{item === "全部" ? projects.length : projects.filter((p) => p.type === item).length}</sup></button>)}
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <article className={`project-card ${index % 5 === 0 ? "featured" : ""}`} key={project.title}>
              <div className={`project-visual ${project.tone}`}><Image src={project.image} alt={`${project.cn}工业设计`} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 40vw" /><span className="project-no">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div>
              <div className="project-meta"><div><p>{project.type}</p><h3>{project.title}</h3><span>{project.cn}</span></div><p className="idea">{project.idea}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="about" id="about">
        <p className="eyebrow">ABOUT HCHN</p>
        <div className="about-grid"><h2>我相信，好的设计不是装饰物，<br />而是人与世界建立关系的方式。</h2><div><p>专注于工业设计与产品体验，尝试从人的真实需求出发，把技术、制造、审美与情感组织成清晰而长久的产品语言。</p><p>这里收录了近年来关于家居、公共空间、医疗与未来生活的部分探索。</p></div></div>
      </section>
      <footer><div className="footer-title">LET’S SHAPE<br />WHAT’S NEXT<span>↗</span></div><div className="footer-bottom"><p>Hchn Design Portfolio</p><p>为梦想的世界而设计。</p><p>© 2026 Hchn</p></div></footer>
    </main>
  );
}
