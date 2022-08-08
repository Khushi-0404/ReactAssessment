import React from "react";
import './styling.css'
class CloseTickets extends React.PureComponent{
    constructor(props){
        super(props)
    }
  
    render(){
        console.log("In Close Component")
        const {close, changeCompletionto}=this.props
       
        return(
            <div>
                <h2 className="heading">Closed Tickets</h2>
            <div className="container">
                
                {
                    close.map((item)=>(
                        <div className="card">
                            
                        <h3 className="taskname">{item.ticketdesc}</h3>
                        
                            <h3 className="timpespan">Raised Time:{item.timespan}</h3>
                            <h3 className="priority">Priority:{item.priority}</h3>
                            <button className="button" onClick={()=>changeCompletionto(item.id)}>Restore</button>
                            
                            
                        </div>
                    ))
                }
            </div></div>

        )
    }
}
export default CloseTickets