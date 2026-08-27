const root = "https://raw.githubusercontent.com/hchn2010/hchn-design/main/public/works/";
const works = [
 ["01","Succulent","多肉植物加湿器","HOME OBJECT","humidifier-succulent.png","#c9e6d2"],
 ["02","Air Column","立式空气调节器","AIR SYSTEM","tower-air.jpg","#b9d0dc"],
 ["03","A6 Interface","高端电梯操纵盘","PUBLIC INTERFACE","elevator-panel.jpg","#e3cbc6"],
 ["04","Fold 26","折面电梯交互面板","PUBLIC INTERFACE","elevator-fold.jpg","#b8d3e3"],
 ["05","Pure Kettle","智能电水壶","KITCHEN OBJECT","kettle.jpg","#d9e1e3"],
 ["06","Face++","模块化人脸识别终端","SMART DEVICE","face-module.jpg","#d6cec3"],
 ["07","SMOIF","医疗显微操作系统","MEDICAL SYSTEM","microscope.jpg","#e7e5dd"],
 ["08","SUPOR One","智能压力锅","KITCHEN OBJECT","rice-cooker.jpg","#c7e9e7"],
 ["09","Kunpeng","智能破壁料理机","KITCHEN OBJECT","blender.jpg","#e7dec8"],
 ["10","Parametric","参数化空气净化器","AIR STUDY","air-purifier-parametric.png","#d6e9d4"],
 ["11","360° Cross","环绕式空气净化器","AIR STUDY","air-purifier-cross.png","#ded4eb"],
 ["12","Retro Air","复古暖风机","HEAT STUDY","heater-retro.png","#eadfd3"],
 ["13","Little Devil","小恶魔暖风机","HEAT STUDY","heater-devil.png","#efd7d1"],
 ["14","Tree Fairy","树精灵加湿器","AIR STUDY","humidifier-tree.png","#d6eadc"],
];
export default function Home(){
 return <main>
  <header><a href="#top" className="mark">H<span>/</span></a><nav><a href="#collection">COLLECTION</a><a href="#profile">PROFILE</a></nav><p>HCHN DESIGN ARCHIVE<br/>2018—2026</p></header>
  <section className="hero" id="top">
   <div className="hero-title"><p>INDUSTRIAL DESIGNER · CHINA</p><h1>OBJECTS<br/><i>FOR A</i> DREAM<br/>WORLD.</h1></div>
   <div className="poster poster-a"><img src={root+"microscope.jpg"} alt="医疗显微操作系统"/><b>07</b></div>
   <div className="poster poster-b"><img src={root+"heater-devil.png"} alt="小恶魔暖风机"/><b>13</b></div>
   <div className="poster poster-c"><img src={root+"elevator-panel.jpg"} alt="高端电梯操纵盘"/><b>03</b></div>
   <div className="hero-caption"><strong>为梦想的世界而设计。</strong><p>设计不只解决问题。<br/>它也创造一种值得期待的生活。</p></div>
   <a className="down" href="#collection">VIEW COLLECTION ↓</a>
  </section>
  <section className="intro" id="profile"><p className="label">CURATORIAL NOTE / 001</p><h2>从日常器物到精密系统，<br/>让每一种功能都拥有<br/><em>自己的性格。</em></h2><div><p>Hchn 关注产品如何被看见、理解与使用。通过比例、材料、触感与交互，把复杂技术整理成清晰、亲和而长久的体验。</p><p>FORM / FUNCTION / EMOTION<br/>形态 / 功能 / 情感</p></div></section>
  <section className="collection" id="collection">
   <div className="collection-head"><div><p className="label">PERMANENT COLLECTION / 14</p><h2>设计藏品</h2></div><p>拖动横向浏览<br/>SCROLL TO EXPLORE →</p></div>
   <div className="shelf">{works.map(w=><article className="work" key={w[0]} style={{"--tone":w[5]} as React.CSSProperties}><div className="work-top"><span>{w[0]}</span><p>{w[3]}</p></div><div className="frame"><img src={root+w[4]} alt={w[2]}/></div><div className="work-name"><h3>{w[1]}</h3><p>{w[2]}</p></div></article>)}</div>
  </section>
  <section className="quote"><p className="label">HCHN / MANIFESTO</p><blockquote>“真正的未来感，<br/>不是看起来来自未来，<br/>而是让未来的生活<br/><span>变得更加自然。</span>”</blockquote></section>
  <footer><div className="stamp">HCHN<br/><span>DESIGN</span></div><h2>MAKE<br/>TOMORROW<br/>TANGIBLE.</h2><div className="footline"><p>Industrial Design Portfolio</p><p>为梦想的世界而设计。</p><a href="#top">TOP ↑</a></div></footer>
 </main>
}
