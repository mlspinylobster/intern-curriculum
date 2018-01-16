Rails.application.routes.draw do
  get '/task',to: 'tasks#index'
end
