import React, {useState, useMemo} from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);

//   class form extends React.Component {
//       constructor(props) {
//           super(props);
//           this.state = {value: "sty"};
    
//         }
    
//         handleChange(event) {
//           this.setState({value: event.target.value});
//        }
//      }




root.render(<div className="main">
             
    
    <select className="months" id="months">
                <option id="sty" value="sty">Styczeń</option>
                <option id="lut" value="lut">Luty</option>
                <option id="mar" value="mar">Marzec</option>
                <option id="kwi" value="kwi">Kwiecień</option>
                <option id="maj" value="maj">Maj</option>
                <option id="cze" value="cze">Czerwiec</option>
                <option id="lip" value="lip">Lipiec</option>
                <option id="sie" value="sie">Sierpień</option>
                <option id="wrz" value="wrz">Wrzesień</option>
                <option id="paz" value="paz">Październik</option>
                <option id="lis" value="lis">Listopad</option>
                <option id="gru" value="gru">Grudzień</option>
            </select>
        
                <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
            </div>); 


const butt = document.getElementById("butt");
const months = document.getElementById("months");
const sty = document.getElementById("sty");
const lut = document.getElementById("lut");
const mar = document.getElementById("mar");
const kwi = document.getElementById("kwi");
const maj = document.getElementById("maj");
const cze = document.getElementById("cze");
const sie = document.getElementById("sie");
const wrz = document.getElementById("wrz");
const paz = document.getElementById("paz");
const lis = document.getElementById("lis");
const gru = document.getElementById("gru");



function selectMonth(){
    //alert(this.state.value);
    
    if(months === "sty"){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Styczeń - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/Merkury.jpg" className="jpg"></img><h4>Merkury</h4>najmniejsza i najbliższa Słońca planeta Układu Słonecznego.</div>
                    
                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Styczeń - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/Merkury.jpg" className="jpg"></img><h4>Merkury</h4>najmniejsza i najbliższa Słońca planeta Układu Słonecznego.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/saturn.png" className="jpg"></img><h4>Saturn</h4>gazowy olbrzym, szósta planeta Układu Słonecznego pod względem odległości od Słońca, druga po Jowiszu pod względem masy i wielkości.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Styczeń - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/Merkury.jpg" className="jpg"></img><h4>Merkury</h4>najmniejsza i najbliższa Słońca planeta Układu Słonecznego.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/uran.jpg" className="jpg"></img><h4>Uran</h4>gazowy olbrzym, siódma od Słońca planeta Układu Słonecznego, trzecia pod względem wielkości i czwarta pod względem masy.</div>
                    <div className="template"><img src="./css/neptun.jpg" className="jpg"></img><h4>Neptun</h4>Neptun jest ponad 17 razy masywniejszy od Ziemi i trochę masywniejszy od swojego bliźniaka, Urana.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Styczeń - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/uran.jpg" className="jpg"></img><h4>Uran</h4>gazowy olbrzym, siódma od Słońca planeta Układu Słonecznego, trzecia pod względem wielkości i czwarta pod względem masy.</div>
                <div className="template"><img src="./css/Merkury.jpg" className="jpg"></img><h4>Merkury</h4>najmniejsza i najbliższa Słońca planeta Układu Słonecznego.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months == "lut"){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Luty - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/wielkipies.png" className="jpg"></img><h4>Wielki pies</h4>gwiazdozbiór nieba zimowego półkuli południowej, znany już w starożytności.</div>
                    <div className="template"><img src="./css/byk.png" className="jpg"></img><h4>Byk</h4>duży i wyraźny, 17. co do wielkości, gwiazdozbiór zodiakalny nieba północnego, leżący w pobliżu równika niebieskiego.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/wenus.jpg" className="jpg"></img><h4>Wenus</h4>Jest trzecim pod względem jasności ciałem niebieskim widocznym na niebie, po Słońcu i Księżycu.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Luty - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/mars.jpg" className="jpg"></img><h4>Mars</h4>Krąży między orbitą Ziemi a pasem planetoid, dzielącym go od orbity Jowisza.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Luty - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/plejady.jpg" className="jpg"></img><h4>Plejady</h4>Znajduje się w gwiazdozbiorze Byka, w odległości około 444 lat świetlnych. Jest to młoda gromada, ma około 100 mln lat.</div>
                    <div className="template"><img src="./css/mglawicakraba.png" className="jpg"></img><h4>Mgławica kraba</h4>Jest skojarzona z supernową zauważoną przez chińskich oraz arabskich astronomów w 1054.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/mars.jpg" className="jpg"></img><h4>Mars</h4>Krąży między orbitą Ziemi a pasem planetoid, dzielącym go od orbity Jowisza.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Luty - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/m78.jpg" className="jpg"></img><h4>M78</h4>mgławica refleksyjna w gwiazdozbiorze Oriona znajdująca się w odległości około 1600 lat świetlnych.</div>
                <div className="template"><img src="./css/M81-82.png" className="jpg"></img><h4>M81 i M82</h4>Para galaktyk M81/M82 leży 11,8 miliona lat świetlnych od nas i jest jednym z najpiękniejszych celów obserwacyjnych północnego nieba gwiaździstego.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/mars.jpg" className="jpg"></img><h4>Mars</h4>Krąży między orbitą Ziemi a pasem planetoid, dzielącym go od orbity Jowisza.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === mar){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Marzec - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Marzec - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Marzec - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Marzec - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === kwi){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Kwiecień - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Kwiecień - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Kwiecień - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Kwiecień - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === maj){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Maj - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Maj - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Maj - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Maj - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === cze){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Czerwiec - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Czerwiec - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Czerwiec - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Czerwiec - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === lip){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Lipiec - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Lipiec - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Lipiec - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Lipiec - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === sie){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Sierpień - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Sierpień - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Sierpień - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Sierpień - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === wrz){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Wrzesień - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Wrzesień - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Wrzesień - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Wrzesień - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === paz){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Październik - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Październik - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Październik - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Październik - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === lis){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Listopad - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Listopad - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Listopad - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Listopad - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
    else if(months === gru){
        root.render(<div class="icons">
                 <button className="spec" onClick={selectSpec1}><div class="tekst"><div class="icon"><img src="./css/oko.png" class="print"></img></div>WZROK</div></button>
                 <button className="spec" onClick={selectSpec2}><div class="tekst"><div class="icon"><img src="./css/lornetka.png" class="print"></img></div>LORNETKA</div></button>
                 <button className="spec" onClick={selectSpec3}><div class="tekst"><div class="icon"><img src="./css/maly.png" class="print"></img></div>MAŁY TELESKOP</div></button>
                 <button className="spec" onClick={selectSpec4}><div class="tekst"><div class="icon"><img src="./css/duzy.png" class="print"></img></div>DUŻY TELESKOP</div></button>
             </div>);
             const duzy = document.getElementById("duzy");
             function selectSpec1(){
                root.render(<div className="all"><div className="spaceForButton">Grudzień - wzrok<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec2(){
                root.render(<div className="all"><div className="spaceForButton">Grudzień - lornetka<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec3(){
                root.render(<div className="all"><div className="spaceForButton">Grudzień - mały teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                    <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                    <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                    <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                    </div></div>);
                    function restart(){
                        root.render(<div className="main">
                        <select className="months" id="months">
                            <option id="sty">Styczeń</option>
                            <option id="lut">Luty</option>
                            <option id="mar">Marzec</option>
                            <option id="kwi">Kwiecień</option>
                            <option id="maj">Maj</option>
                            <option id="cze">Czerwiec</option>
                            <option id="lip">Lipiec</option>
                            <option id="sie">Sierpień</option>
                            <option id="wrz">Wrzesień</option>
                            <option id="paz">Październik</option>
                            <option id="lis">Listopad</option>
                            <option id="gru">Grudzień</option>
                        </select>
                        <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                    </div>);
                    }
            
        }
             function selectSpec4(){
                root.render(<div className="all"><div className="spaceForButton">Grudzień - duży teleskop<button className="again" onClick={restart}>cofnij do menu</button></div><div className="data">
                <div className="template"><img src="./css/andromeda.jpg" className="jpg"></img><h4>Andromeda</h4>galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.</div>
                <div className="template"><img src="./css/jowisz.png" className="jpg"></img><h4>Jowisz</h4> Masa Jowisza jest mniejsza niż jedna tysięczna masy Słońca, ale dwa i pół razy większa niż łączna masa reszty planet w Układzie Słonecznym.</div>
                <div className="template"><img src="./css/ksiezyc.jpg" className="jpg"></img><h4>Księżyc</h4>jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.</div>

                </div></div>);
                function restart(){
                    root.render(<div className="main">
                    <select className="months" id="months">
                        <option id="sty">Styczeń</option>
                        <option id="lut">Luty</option>
                        <option id="mar">Marzec</option>
                        <option id="kwi">Kwiecień</option>
                        <option id="maj">Maj</option>
                        <option id="cze">Czerwiec</option>
                        <option id="lip">Lipiec</option>
                        <option id="sie">Sierpień</option>
                        <option id="wrz">Wrzesień</option>
                        <option id="paz">Październik</option>
                        <option id="lis">Listopad</option>
                        <option id="gru">Grudzień</option>
                    </select>
                    <button onClick={selectMonth} id="butt">ZATWIERDŹ</button>
                </div>);
                }
                
            }
    }
}


