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

        console.log("Help! I've fallen down and I can't stop plagiarizing back up!")

       const formData = new FormData();
       formData.append('post[caption]', this.state.caption);
       formData.append('post[user_id]', this.state.user_id);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }

        this.props.action(formData).then(() => this.props.history.push("/"));
    //    $.ajax({
    //        url: `/api/posts`,
    //        method: "POST",
    //        data: post,
    //        contentType: false,
    //        processData: false
    //    });
   }

   //What's the difference between e.target vs e.currentTarget?
   handleChange(field){
       return e => this.setState({[field]: e.target.value});
   }


    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        
        reader.onloadend = () => 
            this.setState({ photoUrl: reader.result, photoFile: file });
       
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }

   render(){
       return (
           <div className="index-right">
               <form>
                   <input className="create-post-choose-file" type="file" onChange={this.handleFile} />
                   <input className="create-post-caption" type="text" placeholder="Caption" value={this.state.caption} onChange={this.handleChange("caption")} />
                   <button type="button" onClick={this.handleSubmit} className="create-post-button">Add Post</button>
               </form>
           </div>
       )
   }
}

export default PostForm;