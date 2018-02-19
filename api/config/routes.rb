Rails.application.routes.draw do
  get '/tasks/current',to: 'tasks#current'
  patch '/tasks/:id',to: 'tasks#update'
  patch '/todos/:id',to: 'todos#update'
end
