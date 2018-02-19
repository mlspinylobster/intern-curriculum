FROM ruby:2.5-alpine

RUN apk add --update --no-cache \
      # for nio4r
      build-base \
      # for nokogiri
      linux-headers \
      # for pg
      postgresql-dev \
      # for activesupport
      tzdata

WORKDIR /app

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install --without development test

COPY . $APP_HOME

CMD ["bundle","exec","rails","s","-p","3000","-b","0.0.0.0"]