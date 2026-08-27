"use client";
import Image from "next/image";
import { useState } from "react";

const works = [
 {n:"01",title:"Succulent",cn:"多肉植物加湿器",kind:"HOME / HUMIDIFIER",img:"/works/humidifier-succulent.png",note:"将植物生长的意象，转译成具有生命感的空气体验。"},
 {n:"02",title:"A6 Interface",cn:"高端电梯操纵盘",kind:"PUBLIC / INTERFACE",img:"/works/elevator-panel.jpg",note:"从一次按压开始，重新定义公共空间里的身份与触感。"},
 {n:"03",title:"Fold 26",cn:"折面电梯交互面板",kind:"PUBLIC / INTERFACE",img:"/works/elevator-fold.jpg",note:"折面容纳功能，光线勾勒秩序；形态始终服务于体验。"},
 {n:"04",title:"Face++",cn:"模块化人脸识别终端",kind:"SMART / VISION",img:"/works/face-module.jpg",note:"用可替换的感知模块，让一套设备适应多种空间。"},
 {n:"05",title:"SMOIF",cn:"医疗显微操作系统",kind:"MEDICAL / PRECISION",img:"/works/microscope.jpg",note:"精密并不意味着冰冷。专业、信赖与关怀可以共存。"},
 {n:"06",title:"SUPOR One",cn:"智能压力锅",kind:"HOME / COOKING",img:"/works/rice-cooker.jpg",note:"以高识别度的旋把贯穿交互、结构与产品家族语言。"},
 {n:"07",title:"Pure Kettle",cn:"智能电水壶",kind:"HOME / KITCHEN",img:"/works/kettle.jpg",note:"瓷的温润与金属的精确，在同一件日常器物上相遇。"},
 {n:"08",title:"Kunpeng",cn:"智能破壁料理机",kind:"HOME / KITCHEN",img:"/works/blender.jpg",note:"柔和有机的体量，为厨房科技带来亲和而克制的表达。"},
 {n:"09",title:"Parametric",cn:"参数化空气净化器",kind:"FUTURE / AIR",img:"/works/air-purifier-parametric.png",note:"参数化表面，让不可见的气流成为产品最鲜明的语言。"},
 {n:"10",title:"360° Cross",cn:"环绕式空气净化器",kind:"FUTURE / AIR",img:"/works/air-purifier-cross.png",note:"连续旋转的格栅回应全向进风，也制造光影的节奏。"},
 {n:"11",title:"Retro Air",cn:"复古暖风机",kind:"FUTURE / HEAT",img:"/works/heater-retro.png",note:"熟悉的记忆被简化、重组，成为当代空间里的温暖物件。"},
 {n:"12",title:"Little Devil",cn:"小恶魔暖风机",kind:"FUTURE / HEAT",img:"/works/heater-devil.png",note:"用一点幽默打破家电的沉默，让产品拥有可被记住的性格。"},
 {n:"13",title:"Tree Fairy",cn:"树精灵加湿器",kind:"FUTURE / AIR",img:"/works/humidifier-tree.png",note:"以树枝般的分叉建立功能，也让机器显露自然的生命感。"},
 {n:"14",title:"Air Column",cn:"立式空气调节器",kind:"HOME / AIR",img:"/works/tower-air.jpg",note:"柔和而连续的曲面，隐藏风道的复杂，留下安静的存在感。"},
];

export default function Home(){
 const [active,setActive]=useState(0); const work=works[active];
 return <main>
  <header><a href="#top" className="logo">HCHN<span>●</span></a><p>INDUSTRIAL DESIGN / SELECTED WORKS</p><nav><a href="#index">INDEX</a><a href="#statement">STATEMENT</a></nav></header>
  <section className="stage" id="top">
   <div className="ambient"/>
   <div className="stage-copy"><p className="mono">{work.kind}</p><div><span className="giant-no">{work.n}</span><h1>{work.title}</h1><p className="cn">{work.cn}</p></div><p className="note">{work.note}</p></div>
   <div className="stage-image"><Image key={work.img} src={work.img} fill priority alt={work.cn} sizes="(max-width: 800px) 100vw, 62vw"/></div>
   <div className="rail" aria-label="选择作品">{works.map((w,i)=><button key={w.n} onClick={()=>setActive(i)} className={i===active?"active":""} aria-label={w.cn}><span>{w.n}</span><i/></button>)}</div>
   <p className="rotate">为梦想的世界而设计。</p>
  </section>
  <section className="manifesto" id="statement"><p className="mono">HCHN / DESIGN STATEMENT</p><h2>物体不只是物体。<br/>它是人与未来之间，<br/><em>一段可以触摸的关系。</em></h2><div className="manifesto-foot"><p>我关注技术如何进入生活，也关注人在使用产品时那些细微、真实而难以言说的感受。</p><p>FORM · FUNCTION · EMOTION<br/>形态 · 功能 · 情感</p></div></section>
  <section className="archive" id="index"><div className="archive-head"><p className="mono">PROJECT ARCHIVE / 14 OBJECTS</p><h2>Selected objects</h2></div>
   <div className="archive-grid">{works.map((w,i)=><button className="object" key={w.n} onClick={()=>{setActive(i);document.querySelector("#top")?.scrollIntoView()}}><div><Image src={w.img} fill alt={w.cn} sizes="(max-width: 700px) 100vw, 33vw"/></div><p><span>{w.n} — {w.kind}</span><b>{w.title}</b><small>{w.cn}</small></p></button>)}</div>
  </section>
  <footer><p className="mono">HCHN DESIGN PORTFOLIO · 2026</p><h2>DESIGN THE<br/><span>WORLD</span> YOU DREAM.</h2><div><p>Hchn / Industrial Designer</p><p>为梦想的世界而设计。</p><a href="#top">BACK TO TOP ↑</a></div></footer>
 </main>
}
