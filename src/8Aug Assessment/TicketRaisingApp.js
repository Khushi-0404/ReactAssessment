import React from "react"
import OpenTicket from './OpenTicket'
import CloseTickets from "./CloseTickets"
import './styling.css'
class TicketRaisingApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tickets:this.props.data,
            statusText:""
        }
    }
    //get Open Tickets
    getOpenTickets=()=>{
       const result= this.state.tickets.filter((item)=>item.ticketStatus===true)
       return result
    }
    //get Closed Tickets
    getClosedTickets=()=>{
        const result= this.state.tickets.filter((item)=>item.ticketStatus===false)
        return result
     }
     //Change Ticket Status to close tickets
     changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tickets]
        const obj=temp.find((item)=>item.id===itemid)
        obj.ticketStatus=!obj.ticketStatus
        this.setState({tickets:temp}) 
        this.setState({statusText:"Your Ticket has been Closed beacause it is resolved"})
     }
     //change ticket status to open tickets
     changeCompletionStatusto=(itemid)=>{
        const temp=[...this.state.tickets]
        const obj=temp.find((item)=>item.id===itemid)
        obj.ticketStatus=!obj.ticketStatus
        this.setState({tickets:temp}) 
        this.setState({statusText:"Your Ticket has been Restored"})
     }
     
    
    render(){
        
        console.log("render")
        return(
            <div>
                <h1 className="head">Ticket Raising Application</h1>
                <h2 className="statustext">{this.state.statusText}</h2>
               <OpenTicket open ={this.getOpenTickets()} changeCompletion={this.changeCompletionStatus} ></OpenTicket>
               <CloseTickets close={this.getClosedTickets()}changeCompletionto={this.changeCompletionStatusto}></CloseTickets>
            </div>
        )
    }
}
export default TicketRaisingApp