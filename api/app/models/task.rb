class Task < ApplicationRecord
  has_many :todos

  def self.current_task
    Task.where("completed = ?", false).order("id ASC").first
  end

  def next_task_present?
    Task.where("id > ? and completed = ?",self.id, false).present?
  end

  def as_json(options = nil)
    super(options).tap do | hash |
      hash['isNextTaskPresent'] = next_task_present?
    end
  end
end
