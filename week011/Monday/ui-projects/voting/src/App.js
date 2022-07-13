import React, { useState} from 'react'
import './App.css';
import fc_logo from './assets/fc.png';
import juv_logo from './assets/juv.png';
import mu_logo from './assets/mu.png';
import VotingCard from './VotingCard/Voting';


const data = [
  {id:'1', name:'FC Barcelona', image:fc_logo , votes:0},
  {id:'2', name:'Juventus F.C.', image:juv_logo , votes:0},
  {id:'3',  name:'Manchester United F.C.', image:mu_logo , votes:0},
]



function App() {

  let  [teams, setTeams] = useState(data);

  const vote = (team) => {
    let index = teams.findIndex((t) => t.id === team.id);
    teams[index].votes = teams[index].votes + 1;
    setTeams([...teams])
  }



  return (
		<div className="App container">
			<div className="row">
				{teams.map((team) => (
					<VotingCard
            key={ team.id }
            team={ team}
            onVote={ vote }
 					/>
				))}
			</div>
		</div>
	);
}

export default App;
