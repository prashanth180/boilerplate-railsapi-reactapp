if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_boilerplate', domain: ''
else
  Rails.application.config.session_store :cookie_store, key: '_boilerplate'
end