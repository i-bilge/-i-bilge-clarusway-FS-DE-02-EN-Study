import React from 'react'


const VotingCard = ({  onVote, team}) => {
  return (
		<div className="card text-center col m-2 p-0" style={{ width: "18rem" , height:'350px'}}>
      <img src={ team.image } className="card-img-top" alt="team-image" style={ {width:'100%', height:'50%', marginTop:'5px'} }/>
			<div className="card-body">
        <h5 className="card-title">{ team.name}</h5>
				<div className="d-grid">
          <button className="btn btn-success btn-block" onClick={ ()=>onVote(team)}> vote </button>
				</div>
			</div>
      <div className="card-footer text-muted">vote count: { team.votes}</div>
		</div>
	);
}

export default VotingCard