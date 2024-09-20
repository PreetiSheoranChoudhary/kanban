import React ,{useState} from 'react';
import './App.css';
import Board from './components/board/Board';
import EditTable from './components/Edittable/EditTable';


function App() {

  const [boards,setboards]=useState([
    {
      id:Date.now()+Math.random(),
      title:"To Do",
      cards:[
        {
          id:Date.now()+Math.random(),
          title:"Card 1",
          tasks:[],
          lables:[{
            text:"Frontend",
            color:"blue"
          }],
          desc:"asdnj sjdbjd jsdnjksd",
          date:"",
        },
        {
          id:Date.now()+Math.random(),
          title:"Card 2",
          tasks:[],
          lables:[{
            text:"Backend",
            color:"brown"
          }],
          desc:"asdnj sjdbjd jsdnjksd",
          date:"",
        }
      ]
    }
  ])
  return (
    <div className="App">
      <div className='app_navbar'>
        <p className="board_top_title">
          Kanban
        </p>
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
          {boards.map((board)=>(
            <Board key={board.id} title={board.title} cards={board.cards}/>
          ))}

<EditTable  text="Add board" placeholder="Enter board title" className="app_boards_board" displayClass="app_boards_board_add"/>
{/* <Board/>
<Board/>
<Board/> */}

        </div>
      </div>

    </div>
  );
}

export default App;
