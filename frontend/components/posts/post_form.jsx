import React from 'react';

class PostForm extends React.Component {
   constructor(props){
       super(props);
       this.state = this.props.post;
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e){
       e.preventDefault();
       this.props.action(this.state);
   }

   //What's the difference between e.target vs e.currentTarget?
   handleChange(field){
       return e => this.setState({[field]: e.target.value});
   }


   render(){
       return (
           <div>
               <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.caption} onChange={this.handleChange("caption")} />
                    <input type="submit" value="Submit"/>
               </form>
           </div>
       )
   }
}

export default PostForm;