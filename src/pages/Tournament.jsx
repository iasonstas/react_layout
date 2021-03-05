import React, { useState } from 'react';
import './Tournament.scss';
import tzimani from 'assets/images/eshop/tzimani.png';
import diakoptisGif from 'assets/images/eshop/diafimisi.gif';
import tzimani_givaway from 'assets/images/eshop/tzimani_post_givaway.png';
// import LoadingBar from 'react-top-loading-bar';

const img = [tzimani, diakoptisGif, tzimani_givaway];

export default function Tournament() {
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [progress, setProgress] = useState(0);
  const [winner, setWinner] = useState(false);
  const [search, setSearch] = useState(true);

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const callService = async () => {
    setInstagram(true);
    setLoading(true);
    setFacebook(true);
    await timeout(17000);
    // await timeout(3000);
    setInstagram(false);
    setLoading(false);
    setFacebook(false);
    setWinner(true);
  };

  return (
    <main className="containing w-100">
      {/* <nav className="navbar">
        <div className="diafimisi"></div>
        <img src={img[0]} width="700" alt={'header'} id="headerImg" /> 

       <div className="nav-item">Αρχική</div>
            <div className="nav-item">Επικοινωνία</div>
            <div className="nav-item">Σχετικά με εμάς</div>
            <div className="nav-item">Καλάθι 1880,00 &#8364;</div> 
       </nav> */}
      {/* <div className="extra"></div> */}
      <div className="d-flex flex-direction-column w-100">
        {/* <div className="diagonismos"></div> */}
        {/* <img src={img[2]} width="0" height="660" alt={'header'} id="headerImg" /> */}
        <img src={img[2]} width="1080" height="1080" alt={'header'} id="headerImg" />

        <div id="let-content" className="d-flex flex-column">
          {search && (
            <button
              id="buttonSearch"
              onClick={() => {
                callService();
                setSearch(false);
              }}
            >
              Search Winner
            </button>
          )}
          <div id="searching-tab">
            {instagram && (
              <div>
                <h3 className="m-auto w-100">
                  Searching on <span className="insta-text">Instagram</span>
                </h3>
                <div className="m-auto w-100">
                  <Dots className="m-auto w-100" />
                </div>
              </div>
            )}
            {facebook && (
              <div>
                <h3>
                  Searching on <span className="fb-text">Facebook</span>
                </h3>
                <div className="m-auto w-100">
                  <Dots className="m-auto w-100" />
                </div>
              </div>
            )}
            {loading && (
              <div>
                <h2>Loading Winner</h2>
                {/* <LoaderNice /> */}
                {/* <LoadingBar color="#005683" progress={progress} onLoaderFinished={() => setProgress(0)} /> */}
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
              </div>
            )}
            {winner && (
              <div>
                <div>
                  Οι νικητές του διαγωνισμού είναι οι
                  <div className="mt-5 w-100">
                    <p>
                      @panagiotis.sotiriou <span style={{ color: 'yellow' }}>Iphone 12 pro max</span>
                    </p>
                    <p className="mt-3">
                      @papakostopoulouu <p style={{ color: 'cyan' }}>Sony PS5</p>
                    </p>
                    <p>ΣΥΓΧΑΡΗΤΗΡΙΑ</p>
                  </div>
                </div>
                <div className="pyro">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/*<div className="diafimisi_diakopti">
           <div className="oddboxinner">
            <h1>ΠΡΟΣΦΟΡΑ!!!</h1>
          </div>
          <div>
            <img src={img[1]} width="350" height="400" alt={'diakoptis'} />
          </div>
          <h2>
            <span className="text-danger">
              <strike>105</strike>{' '}
            </span>
            <span className="text-muted">&#8594;</span>
            <span className="text-primary">75&#8364;</span>
          </h2>

          <div className="text-muted mt-2">test</div>
        </div>*/}
      </div>
    </main>
  );
}

export function LoaderNice() {
  return (
    <>
      <div className="sk-circle">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
    </>
  );
}

export function Dots() {
  return (
    <>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
