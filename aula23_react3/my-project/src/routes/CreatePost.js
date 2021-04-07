import { useForm } from "react-hook-form"
import Post from "../services/Post"
import styles from "../styles/CreatePost.module.css"
import forms from '../images/forms.png'

const CreatePost = () =>{
    const {register, handleSubmit} = useForm({    //, setValue
        defaultValues: {
            title: "",
            userId: "",
            body: ""
        }
      })

    return (
        <div className={styles.containerIMG}> 
            <div className ={styles.containerDiv}>
                <h1 className={styles.containerH1}>
                    <img src={forms} className="google-form" alt="forms" />
                    Formulário
                </h1>
                
                    <form onSubmit={handleSubmit(Post)} className={styles.container}>
                        <p className={styles.containerP}>TÍTULO</p>
                        <input className={styles.containerInputs} placeholder = "email@email.com" name ="title" ref={register} />
                        <p className={styles.containerP}>BODY</p>
                        <input className={styles.containerInputs} placeholder = "password" name ="body" ref={register} />
                        <p className={styles.containerP}>ID DE USUÁRIO</p>
                        <input className={styles.containerInputs} name ="userId" placeholder = "userId" ref={register} />
                        <p></p>
                        <input className ={styles.containerButton}type="submit" value="enviar"/>
                    </form>
            </div>
        </div>
    )

}
export default CreatePost;