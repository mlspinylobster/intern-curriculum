class TodosController < ApplicationController
  def update
    @todo = Todo.find(params[:id])
    @todo.completed = params[:completed]
    @todo.save
  end
end