import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import styles from './ContactForm.module.scss';


const CustomInput = ({field, form, ...props}) => {
  return (
    <div className={styles.form__group}>
      <label>{field.name}</label>
      <input {...field} {...props} type="text"></input>
    </div>
  )
}

const CustomError = (props) => <div>{props.children}</div>


const ContactForm = () => {

  const userSchema = Yup.object().shape({
    lastName: Yup.string().min(2, 'Le nom renseigné est trop court').required('Ce champs est obligatoire'),
    firstName: Yup.string().min(2, 'Le prénom renseigné est trop court').required('Ce champs est obligatoire'),
    email: Yup.string().email("E-mail erroné").required('Ce champs est obligatoire'),
    tel: Yup.number().min(10, 'Numéro erroné (trop court)').max(10, 'Numéro erroné (trop long)').required('Ce champs est obligatoire'),
    message: Yup.string().min(3, 'Message trop court').max(235, 'Votre message dépasse les 235 caractères autorisés'),
  });

  const submit = (values, actions) => {
    // console.log(values);
    actions.setSubmitting(false);
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formWrapper__title}>Contactez-nous</h2>
      <p className={styles.formWrapper__text}>Pour prendre rendez-vous avec nos professionels veuillez remplir le formulaire</p>
      <Formik 
      onSubmit={submit} 
      initialValues={{lastName: "", firstName: "", email: "", tel: "", message: ""}}
      validationSchema={userSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field name="lastName" component={CustomInput} />
            <ErrorMessage name="lastName" component={CustomError} />
            <Field name="firstName" component={CustomInput} />
            <ErrorMessage name="firstName" component={CustomError} />
            <Field name="email" type="email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="tel" type="number" component={CustomInput} />
            <ErrorMessage name="tel" component={CustomError} />
            <Field name="message" component={CustomInput} />
            <ErrorMessage name="message" component={CustomError} />
            <button type="submit" disabled={isSubmitting}>Envoyer</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm