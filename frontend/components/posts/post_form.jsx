import React from 'react';

class PostForm extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           caption: "",
           photoFile: null,
           photoUrl: null,
           user_id: null
       };
    //    this.state = this.props.post;
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleFile = this.handleFile.bind(this);
   }

   handleSubmit(e) {
       e.preventDefault();

       const formData = new FormData();
       formData.append('post[caption]', this.state.caption);
       formData.append('post[userId]', this.state.userId);

      
        if (this.state.photoFile) {
          
            formData.append('post[photo]', this.state.photoFile);
        }
     
       this.props.action(formData).then(
           (response) => console.log(response.message),
           (response) => {
               console.log(response.responseJSON);
           }
       );
        this.setState({ caption: "", photoFile: null, photoUrl: null, userId: null });
    

   }

   //What's the difference between e.target vs e.currentTarget?
   handleChange(field) {
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
            this.setState({ photoUrl: "", photoFile: null});
        }
    }

   render() { 

       const preview_img = this.state.photoUrl ?
            <img className="create-post-img-preview" src={this.state.photoUrl}></img> :
            null;
        const error = (this.state.caption && !this.state.photoUrl) ?
        <div className="error">Attach a photo!</div>
        :
        null;
       return (
           <div className="index-right">
               <form className="create-post-form">
                        <h4 className="upload-post">Upload Post</h4>
                   <label className="create-post-choose-file" >
                        Choose File
                        <input className="create-post-file-input" type="file" onChange={this.handleFile} />
                    </label>
                    {preview_img}
                    <label className="create-post-caption-container">
                    {error}
                        <input className="create-post-caption" type="text" placeholder="Caption" value={this.state.caption} onChange={this.handleChange("caption")} />
                    </label>
                   <button type="button" onClick={this.handleSubmit} className="create-post-button">Post</button>
               </form>
           </div>
       )
   }
}

export default PostForm;