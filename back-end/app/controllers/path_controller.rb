class PathController < ApplicationController
    
    get "/paths" do
        Path.all.to_json
    end


    get "/paths/:user_id" do
        Path.find_by(user_id: params[user_id]).to_json
    end

end