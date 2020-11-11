Rails.application.routes.draw do
  get 'cards/index'
  root 'cards#index'
end
