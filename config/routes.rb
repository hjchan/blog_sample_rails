Rails.application.routes.draw do

  get 'vue/hello'
  get 'vue/latest_comments'

  resources :articles do
    resources :comments do
    end
  end

  get 'static/about'
  get 'static/services'
  get 'static/contact'

  root 'articles#index'
end
