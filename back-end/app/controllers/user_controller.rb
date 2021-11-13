class UserController < ApplicationController

    get "/user" do
        User.find(1).to_json
    end
end