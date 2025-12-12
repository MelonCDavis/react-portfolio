import React, { useState, useEffect, useRef } from "react";

import p1 from "../assets/1.PNG";
import p2 from "../assets/2.PNG";
import p3 from "../assets/3.PNG";
import p4 from "../assets/4.PNG";
import p5 from "../assets/5.PNG";
import p6 from "../assets/6.PNG";
import p7 from "../assets/7.PNG";
import p8 from "../assets/8.PNG";
import p9 from "../assets/9.PNG";

const initialPieces = [
  { id: "block1", img: p1 },
  { id: "block2", img: p2 },
  { id: "block3", img: p3 },
  { id: "block4", img: p4 },
  { id: "block5", img: p5 },
  { id: "block6", img: p6 },
  { id: "block7", img: p7 },
  { id: "block8", img: p8 },
  { id: "block9", img: p9 },
];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const Store = () => {
  const [sourcePieces, setSourcePieces] = useState([]);
  const [boardPieces, setBoardPieces] = useState(Array(9).fill(null));
  const pointerDragRef = useRef(null);

  useEffect(() => {
    setSourcePieces(shuffle(initialPieces));
  }, []);

  const puzzleSolved = boardPieces.every(
    (piece, i) => piece && piece.id === `block${i + 1}`
  );

  const handleReset = () => {
    setSourcePieces(shuffle(initialPieces));
    setBoardPieces(Array(9).fill(null));
  };

  const allowDrop = (e) => e.preventDefault();

  const handleDragStart = (e, from, index) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ from, index })
    );
  };

  const handleDropOnBoard = (e, boardIndex) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("application/json"));
    if (!data) return;

    const newBoard = [...boardPieces];
    const newSource = [...sourcePieces];

    if (newBoard[boardIndex]) return;

    if (data.from === "source") {
      const piece = newSource[data.index];
      newSource.splice(data.index, 1);
      piece.didSnap = true;
      newBoard[boardIndex] = piece;
      setSourcePieces(newSource);
    } else if (data.from === "board") {
      const piece = newBoard[data.index];
      newBoard[data.index] = null;
      piece.didSnap = true;
      newBoard[boardIndex] = piece;
    }

    setBoardPieces(newBoard);
  };

  const handleDropOnSource = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("application/json"));
    if (!data) return;

    const newBoard = [...boardPieces];
    const newSource = [...sourcePieces];

    if (data.from === "board") {
      const piece = newBoard[data.index];
      newBoard[data.index] = null;
      piece.didSnap = false;
      newSource.push(piece);
    }

    setBoardPieces(newBoard);
    setSourcePieces(newSource);
  };

  const handlePointerDown = (from, index) => {
    pointerDragRef.current = { from, index };
  };

  const handlePointerUpOnBoard = (boardIndex) => {
    const data = pointerDragRef.current;
    if (!data) return;

    const fakeEvent = {
      preventDefault: () => {},
      dataTransfer: {
        getData: () => JSON.stringify(data),
      },
    };

    handleDropOnBoard(fakeEvent, boardIndex);
    pointerDragRef.current = null;
  };

  const handlePointerUpOnSource = () => {
    const data = pointerDragRef.current;
    if (!data) return;

    const fakeEvent = {
      preventDefault: () => {},
      dataTransfer: {
        getData: () => JSON.stringify(data),
      },
    };

    handleDropOnSource(fakeEvent);
    pointerDragRef.current = null;
  };

  return (
    <main className="bg-secondary">
      <header className="pb-0">
        <div className="container-fluid bg-dark custom-tattoo-border py-3">
          <h1 className="display-1 text-center text-white">THE STORE</h1>
        </div>

        <div className="container-fluid bg-secondary text-center py-4">
          <h2 className="m-3 mx-auto px-3 rounded custom-tattoo-border my-text-shadow bg-light pb-2">
            COMING SOON! <br /> but hey...check this out
          </h2>
        </div>
      </header>

      {puzzleSolved && (
        <div className="fireworks-overlay">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="firework-burst"></div>
          ))}
          <h2 className="fireworks-text">🎉 Puzzle Complete! 🎉</h2>
        </div>
      )}

      <div className="text-center py-2">
        <button
          className="reset custom-tattoo-border rounded btn btn-light"
          onClick={handleReset}
        >
          Reset Puzzle
        </button>
      </div>

      <div id="puzzle" className="container py-0">
        <div className="row puzzle-align justify-content-center">
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div
              id="drag"
              className="drag"
              onDrop={handleDropOnSource}
              onDragOver={allowDrop}
              onPointerUp={handlePointerUpOnSource}
            >
              {sourcePieces.map((piece, index) => (
                <div className="dragBox" key={piece.id}>
                  <div
                    className={`images ${piece.didSnap ? "snap" : ""}`}
                    draggable
                    onDragStart={(e) =>
                      handleDragStart(e, "source", index)
                    }
                    onPointerDown={() =>
                      handlePointerDown("source", index)
                    }
                    style={{ "--img": `url(${piece.img})` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div className="board tattoo-frame rounded">
              {boardPieces.map((piece, index) => (
                <div
                  key={index}
                  className="dropBox"
                  onDrop={(e) => handleDropOnBoard(e, index)}
                  onDragOver={allowDrop}
                  onPointerUp={() => handlePointerUpOnBoard(index)}
                >
                  {piece && (
                    <div
                      className={`images ${piece.didSnap ? "snap" : ""}`}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, "board", index)
                      }
                      onPointerDown={() =>
                        handlePointerDown("board", index)
                      }
                      style={{ "--img": `url(${piece.img})` }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col bg-secondary">
          <h2 className="m-5 puzzle-footer-text text-center rounded custom-tattoo-border my-text-shadow bg-light pb-2">
            Put the puzzle together to get a sneak peek of one of my designs!
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Store;
