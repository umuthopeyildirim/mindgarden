class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do
    { message: "Mind Garden" }.to_json
    status 200
  end

  #Entry page path
  get "/dashboard/:id" do
    entries= Entry.find(params[:id])
    status 200
    entries.to_json
  end

  get "/feelings" do
    feelings= Feeling.all
    status 200
    feelings.to_json
  end

  post "/feelings" do
    feeling= Feeling.new(params)
    if feeling.save
      status 201
      feeling.to_json
    else
      status 400
      { error: "Invalid feeling or emoji url" }.to_json
    end
  end
  
  get "/users" do
    users=User.all
    status 200
    users.to_json
  end

  post "/login" do
    user = User.find_by(login_params)
    if user.present?
      status 201
      user.to_json(only: [:id, :name, :username, :email])
    else
      status 400
      { error: "Invalid username or password" }.to_json
    end
  end

  post "/register" do
    user = User.new(params)
    if user.save
      status 201
      user.to_json
    else
      status 400
      { error: user.errors.full_messages }.to_json
    end
  end
  
  # Get entries by user_id
  get "/entries/user/:id" do
    entries = Entry.where(user_id: params[:id])
    status 200
    entries.to_json
  end

  post "/entries" do
    entry =Entry.new(params)
    if entry.save
      status 201
      entry.to_json
    else
      status 400
      { error: 'Invalid entry'}.to_json
    end
  end

  delete "/entries/:id" do
    entry = Entry.find(params[:id])
    entry.destroy
    status 200
    entry.to_json
  end

  patch "/entries/:id" do
    # binding.pry
    entry = Entry.find(params[:id])

    entry.update(
      title: params[:title] || entry.title, 
      entry: params[:entry] || entry.entry, 
      feeling_id: params[:feeling_id] || entry.feeling_id
    )
    status 200
    entry.to_json
  end

  private
  
  def register_params
    {name:params[:name], username:params[:username], email:params[:email], password:params[:password]}
  end
	
	def login_params
		{email:params[:email], password:params[:password]}
	end

end
