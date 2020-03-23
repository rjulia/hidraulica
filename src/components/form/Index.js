import React from 'react'
import './form.scss'
import { Formik } from 'formik';
import { Input } from "components";

const Form = (props) => {
  const { t } = props
  return (
    <div className="from__container">
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
            <div className="rox">
              <div className="col-12">
                <Input
                  label={t('home.form_contact.message.label')}
                  value={''}
                  type={'text'}
                  handleChange={props.handleChange}
                  placeholder={t('home.form_contact.message.placeholder')}
                />
              </div>
            </div>

            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Form
