class TasksController < ApplicationController
  def index
    response.headers['Access-Control-Allow-Origin'] = "*"
    dummy = {
            title: 'Gitの使い方を覚えよう',
            description: "チーム開発を円滑に進めるためにGitは超重要です。\n覚えましょう",
            todos: [
              {
                id: 1,
                text: 'このリンクを読む',
                link: '#',
                completed: false
              }, {
                id: 2,
                text: 'この学習教材の第4章まで進める',
                completed: true
              }
            ]
          };
    render json:dummy
  end
end
