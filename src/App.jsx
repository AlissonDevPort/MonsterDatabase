import React, { useState } from "react";
import Axios from "axios";
import Modal from "./Modal";
import "./App.css";
import poring from "./assets/rag.png";
import linkedin from "./assets/linkd.svg";

function App() {
  const [data, setData] = useState()
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const find = () => {
    Axios.get(`/monsters/${id}`).then(({data}) => {
      console.log(data)
      setData(data);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="img-left">
            <img className="poring" src={poring} alt="" />
          </div>
          <div>
            <button className="modal-button2" onClick={() => setShow(true)}>
              Lista de Monstros
            </button>

            <Modal onClose={() => setShow(false)} show={show} />
          </div>
          <div>
            <input
              className="input"
              placeholder="ID"
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <button className="findBtn" onClick={find}>Procurar</button>
          </div>
          <div>
            {" "}
            <a href="https://www.linkedin.com/in/alisson-portela-686078232/">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="title">
            <h1>DATABASE</h1>
          </div>
        </section>
        <section className="monster">
          <div className="container-full">
            <div className="item-Ds">
              <div className="monster-name">
                <h2>{data?.monster_info}</h2>
                <div className="bg">
                  <img className="monster-img" src={data?.gif} alt="" />
                </div>
              </div>
              <div className="table-info">
                <div className="flex-2">
                  <div className="info">
                    <div className="title-out">
                      <span>Informações</span>
                    </div>
                    <ul className="list">
                      <li>Level: </li>
                      <li>{data?.main_stats.level}</li>
                      <li>Race: </li>
                      <li>{data?.race}</li>
                      <li>Type: </li>
                      <li>{data?.type}</li>
                      <li>Size: </li>
                      <li>{data?.size}</li>
                      <li>Exp Base: </li>
                      <li>{data?.main_stats.base_exp}</li>
                      <li>Exp Classe: </li>
                      <li>{data?.main_stats.job_exp}</li>
                    </ul>
                  </div>
                  <div className="monster-table" id="responsive">
                    <div className="title-out">
                      <div className="title-out">
                        <span>Resistências</span>
                      </div>
                    </div>
                    <ul className="flex-4">
                      <li>Neutral: </li>
                      <li>{data?.elementalDamage.neutral}</li>
                      <li>Earth: </li>
                      <li>{data?.elementalDamage.earth}</li>
                      <li>Wind: </li>
                      <li>{data?.elementalDamage.wind}</li>
                      <li>Holy: </li>
                      <li>{data?.elementalDamage.holy}</li>
                      <li>Water: </li>
                      <li>{data?.elementalDamage.water}</li>
                      <li>Fire: </li>
                      <li>{data?.elementalDamage.fire}</li>
                      <li>Poison</li>
                      <li>{data?.elementalDamage.poison}</li>
                      <li>Shadow: </li>
                      <li>{data?.elementalDamage.shadow}</li>
                      <li>Undead: </li>
                      <li>{data?.elementalDamage.undead}</li>
                      <li>Ghost: </li>
                      <li>{data?.elementalDamage.ghost}</li>
                    </ul>
                  </div>
                </div>
                <div className="two-flexbox">
                  <div className="info">
                    <div className="full-title">
                      <span className="orange-label">Atributos</span>
                    </div>
                    <ul className="list">
                      <li>HP: </li>
                      <li>{data?.main_stats.hp}</li>
                      <li>Attack: </li>
                      <li>{data?.main_stats.attack}</li>
                      <li>Range: </li>
                      <li>{data?.main_stats.range}</li>
                      <li>Hit: </li>
                      <li>{data?.main_stats.hit}</li>
                      <li>Flee: </li>
                      <li>{data?.main_stats.flee}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
