Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # root to: 'application#home'
  # get '*path', to: 'application#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

