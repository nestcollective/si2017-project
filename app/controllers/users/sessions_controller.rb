class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  skip_before_action :verify_signed_out_user

  respond_to :json

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    yield resource if block_given?
    if resource.present?
      render json: resource
    else
      render json: resource.errors
    end

  end

  # DELETE /resource/sign_out
  def destroy
    resource = User.find_by(logout_params)
    resource.authentication_token = nil
    resource.save
    render :json => {}.to_json, :status => :ok
  end

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
