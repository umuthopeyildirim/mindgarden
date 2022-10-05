class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do
    { message: "Mind Garden" }.to_json
  end

  #Entry page path
  get "/dashboard" do
    entries= Entry.all
    entries.to_json
  end
end
