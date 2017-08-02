require 'rails_helper'

RSpec.describe User, type: :model do
  let(:valid_user) { build :user }
  let(:empty_first_name) { build :user, :empty_first_name }
  let(:empty_last_name) { build :user, :empty_last_name }
  let(:empty_email) { build :user, :empty_email }
  let(:empty_password) { build :user, :empty_password }
  let(:invalid_email) { build :user, :invalid_email }
  let(:short_password) { build :user, :invalid_password }
  let(:duplicate_email) { build :user, email: 'email@email.com' }

  describe 'Valid User' do
    it 'should be able to create a valid user' do
      expect(valid_user).to be_valid
    end

    it 'should not be able to create a user without first name' do
      expect(empty_first_name).not_to be_valid
    end

    it 'should not be able to create a user without last name' do
      expect(empty_last_name).not_to be_valid
    end

    it 'should not be able to create a user without email' do
      expect(empty_email).not_to be_valid
    end

    it 'should not be able to create a user without password' do
      expect(empty_password).not_to be_valid
    end

    it 'should not be able to create a user with invalid email' do
      expect(invalid_email).not_to be_valid
    end

    it 'should not be able to create a user with short password' do
      expect(short_password).not_to be_valid
    end
    before do
      create :user, email: 'email@email.com'
    end

    it 'should not be able to create a user with a duplicate email' do
      expect(duplicate_email).not_to be_valid
    end
  end
end
