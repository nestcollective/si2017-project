class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  # skip_before_action :verify_signed_out_user
  skip_before_action :verify_authenticity_token, only: [:create]

  respond_to :json

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    user = User.find_by_email(params[:user][:email])

    if user.present? && user.valid_password?(params[:user][:password])
      render json: user
    else
      render json: { error: 'Credentials not matching' }
    end

  end

  # DELETE /resource/sign_out=end
  #def destroy
    #resource = User.find_by(logout_params)
    #if resource
      #resource.authentication_token = nil
      #resource.save
      #render :json => {}.to_json, :status => :ok
    #else
      #render json: { error: resource.errors.full_messages.join(' ') }
    #end
  #end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  private
  def logout_params
    params.require(:user).permit(:email, :authentication_token)
  end
end
