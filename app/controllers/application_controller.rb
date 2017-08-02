class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :verify_authenticity_token

end
