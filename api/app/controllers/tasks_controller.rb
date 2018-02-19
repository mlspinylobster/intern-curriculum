class TasksController < ApplicationController
  def current
    @task = Task.current_task
    render json: @task.as_json(include: [:todos])
  end
  def update
    @task = Task.find(params[:id])
    @task.completed = params[:completed]
    @task.save
  end
end