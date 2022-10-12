import './App.css'
import {useState} from 'react'

function App() {
  const [markCoords, setMarkCoords] = useState([]);

  function setMark (event) {
    const coordXPercnt = 100 / event.view.innerWidth * event.pageX
    const coordYPercnt = 100 / event.view.innerHeight * event.pageY
    setMarkCoords(current => [...current, {
      X: coordXPercnt,
      Y: coordYPercnt,
    }])
  }

  return (
    <div
      className="canvas"
      onClick={setMark}
    >
      {markCoords.map((coord, index) => {
        return (
          <div
            key={index}
            onClick={() => setMarkCoords([])}
            style={{
              position: 'absolute',
              top: coord.Y + '%',
              left: coord.X + '%',
              width: 10,
              height: 10,
              margin: '-5px 0 0 -5px',
              background: 'red',
              borderRadius: '50%',
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
