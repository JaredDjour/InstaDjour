import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';

class PostForm extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           caption: "",
           photoFile: null,
           photoUrl: null,
           user_id: null
       };
       this.handleSubmit = _.debounce(this.handleSubmit.bind(this), 700, {
           'leading': true,
           'trailing': false
       }); 
        // this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleFile = this.handleFile.bind(this);
       this.handleEnter = this.handleEnter.bind(this);
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

    handleEnter(e) {
        e.preventDefault();
        if (e.keyCode === 13 && this.state.photoFile) {
            e.preventDefault();
            const formData = new FormData();
            formData.append('post[caption]', this.state.caption);
            formData.append('post[userId]', this.state.userId);

            if (this.state.photoFile) {

                formData.append('post[photo]', this.state.photoFile);
                this.props.action(formData).then(
                    (response) => console.log(response.message),
                    (response) => {
                        console.log(response.responseJSON);
                    }
                );
            }

            this.setState({ caption: "", photoFile: null, photoUrl: null, userId: null });
        }
    }

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
            <img className="create-post-img-preview" src={this.state.photoUrl}></img> 
            :
            null;
       
        let error;
        if (this.state.caption && !this.state.photoUrl) {
            error = <div className="error">Attach a photo!</div>;
        } else if (!this.state.caption && this.state.photoUrl) {
            error = <div className="error">Add a Caption!</div>;
        } else error = null;

       let userPic;
       if (this.props.username === "JaneDoe") {
           userPic = <img className="index-right-user-pic" src="https://image.flaticon.com/icons/svg/219/219990.svg" />
       } else if (this.props.username === "JohnTho") {
           userPic = <img className="index-right-user-pic" src="https://countrybutchers.co.uk/wp-content/uploads/2016/05/Man-Placeholder-768x512.jpg" />
       } else if (this.props.username === "DemoUser") {
           userPic = <img className="index-right-user-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviq0vi_kFNfszVCvxMb8BKc26jnVeQtWTFoH1LxLhBO1PXP8O" />
       } else userPic = <img className="index-right-user-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviq0vi_kFNfszVCvxMb8BKc26jnVeQtWTFoH1LxLhBO1PXP8O" />

       if (!this.props.username) return null
       return (
           <div className="index-right">
               <div className="index-right-user-container">
                {/* <div className="index-right-user-pic"></div> */}
                {userPic}
                <div className="index-right-user-names-container">
                        <Link className="index-right-current-user" 
                            to={`/users/${this.props.currentUser}/posts`}>
                            {this.props.username}
                        </Link>
                        <br/>
                        <Link className="index-right-user-name" 
                            to={`/users/${this.props.currentUser}/posts`}>
                            {this.props.fullName}
                        </Link>
                </div>
               </div>
               <form className="create-post-form">
                        <h4 className="upload-post">Upload Post</h4>
                   <label className="create-post-choose-file" >
                        Choose File
                        <input className="create-post-file-input" type="file" onChange={this.handleFile} />
                    </label>
                    {preview_img}
                    <label className="create-post-caption-container">
                    {error}
                       <input className="create-post-caption" type="text" placeholder="Caption" value={this.state.caption} onChange={this.handleChange("caption")} onKeyUp={this.handleEnter} />
                    </label>
                   <button type="button" disabled={!this.state.photoUrl || !this.state.caption} onClick={this.handleSubmit} className="create-post-button">Post</button>
                </form>
               <h4 className="trademark">© 2019 INSTADJOUR</h4>
           </div>
       )
   }

    // constructor(props) {
    //     super(props);
    //     this.state = { pictures: [] };
    //     this.onDrop = this.onDrop.bind(this);
    // }

    // onDrop(picture) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(picture),
    //     });
    // }

    // render() {
    //     return (
    //         <ImageUploader
    //             withIcon={true}
    //             buttonText='Choose images'
    //             onChange={this.onDrop}
    //             imgExtension={['.jpg', '.gif', '.png', '.gif']}
    //             maxFileSize={5242880}
    //         />
    //     );
    // }
}

export default PostForm;