import React from "react";
import './styling.css'
class OpenTicket extends React.PureComponent{
    constructor(props){
        super(props)
    }
   
    render(){
      console.log("In Open Ticket  Component")
      var bgColors = { Default: "#81b71a",
      Blue: "#00B1E1",
      "Cyan": "#37BC9B",
      "Green": "#8CC152",
      "Red": "#E9573F",
      "Yellow": "#F6BB42",
};

        const {open, changeCompletion}=this.props
        
        return(
            <div>
            <h2 className="heading">Open Tickets</h2>
            <div className="container">
           
                {
                    open.map((item)=>(
                        <div className="card" >
                            <h3 className="taskname">Ticket Description:{item.ticketdesc}</h3>
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority:{item.priority}</h3>
                            <div className="capsule">
                            <div className="right">50%</div>
                        
                            
                            <button className="button" onClick={()=>changeCompletion(item.id)}>Close Ticket</button>

                            
                            </div>
                            
                        </div>
                    ))
                }
            </div></div>

        )
    }
}
export default OpenTicket