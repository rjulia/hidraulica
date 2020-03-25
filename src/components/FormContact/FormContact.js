import React from 'react'
import './form.scss'
import { Formik } from 'formik';
import { Input, TextArea } from "components";

const FormContact = (props) => {
  const { t } = props
  return (
    <div className="form__container">
      <Formik
        initialValues={{ name: 'jared' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-4">
                <Input
                  label={t('home.form_contact.person.label')}
                  value={''}
                  type={'text'}
                  handleChange={props.handleChange}
                  placeholder={t('home.form_contact.person.placeholder')}
                />
              </div>
              <div className="col-12 col-md-4">
                <Input
                  label={t('home.form_contact.company.label')}
                  value={''}
                  type={'text'}
                  handleChange={props.handleChange}
                  placeholder={t('home.form_contact.company.placeholder')}
                />
              </div>
              <div className="col-12 col-md-4">
                <Input
                  label={t('home.form_contact.email.label')}
                  value={''}
                  type={'email'}
                  handleChange={props.handleChange}
                  placeholder={t('home.form_contact.email.placeholder')}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TextArea
                  label={t('home.form_contact.message.label')}
                  value={''}
                  row={'3'}
                  col={''}
                  type={'text'}
                  handleChange={props.handleChange}
                  placeholder={t('home.form_contact.message.placeholder')}
                />
              </div>
            </div>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <div className="form__button__box">
              <p>{t('home.form_contact.remark')}</p>
              <button className="buttton form__button" type="submit">Submit</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default FormContact
