import React from 'react';

class PostForm extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           caption: "",
           photoFile: null,
           photoUrl: null,
           user_id: null,
       };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleFile = this.handleFile.bind(this);
   }

   handleSubmit(e){
       e.preventDefault();

       const formData = new FormData();
       formData.append('post[caption]', this.state.caption);
       formData.append('post[user_id]', this.state.user_id);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
       $.ajax({
           url: `/api/posts`,
           method: "POST",
           data: post,
           contentType: false,
           processData: false
       });
   }

   //What's the difference between e.target vs e.currentTarget?
   handleChange(field){
       return e => this.setState({[field]: e.target.value});
   }


    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        
        reader.onloadend = () => 
            this.setState({ imageUrl: reader.result, imageFile: file });
       
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

   render(){
       return (
           <div className="post-form">
               <form onSubmit={this.handleSubmit}>
                   <input type="text" value={this.state.caption} onChange={this.handleChange("caption")} />
                   <input className="create-post" type="file" onChange={this.handleFile} />
                   <button type="button" className="add-post-button">Add Post</button>
               </form>
           </div>
       )
   }
}

export default PostForm;