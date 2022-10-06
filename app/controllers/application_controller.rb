class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do
    { message: "Mind Garden" }.to_json
  end

  #Entry page path
  get "/dashboard/:id" do
    entries= Entry.find(params[:id])
    entries.to_json
  end

  get "/feelings" do
    feelings= Feeling.all
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
  
  get "/entries/:id" do
    entry = Entry.find(params[:id])
    entry.to_json
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
    entry.to_json
  end

  patch "/entries/:id" do
    # binding.pry
    entry = Entry.find(params[:id])

    # title = ""  
    # if(params[:title] == nil)
    #   title = entry.title
    # else
    #   title = params[:title]
    # end

    # e = ""
    # if(params[:entry] == nil)
    #   e = entry.entry
    # else
    #   e = params[:entry]
    # end

    # feeling_id = ""
    # if(params[:feeling_id] == nil)
    #   feeling_id = entry.feeling_id
    # else
    #   feeling_id = params[:feeling_id]
    # end

    # date = ""
    # if(params[:date] == nil)
    #   date = entry.date
    # else
    #   date = params[:date]
    # end

    # entry.update({title: title, entry: e, feeling_id: feeling_id, date: date})

    entry.update(
      title: params[:title] || entry.title, 
      entry: params[:entry] || entry.entry, 
      feeling_id: params[:feeling_id] || entry.feeling_id, 
      date: params[:date] || entry.date)  

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
