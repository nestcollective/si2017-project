FactoryGirl.define do
  factory :user do
    first_name {Faker::Name.first_name }
    last_name {Faker::Name.last_name }
    email { Faker::Internet.email }
    password { Faker::Internet.password }
  end

  trait :empty_first_name do
    first_name nil
  end

  trait :empty_last_name do
    last_name nil
  end

  trait :empty_email do
    email nil
  end

  trait :invalid_email do
    email 'email'
  end

  trait :empty_password do
    password nil 
  end

  trait :invalid_password do
    password '123'
  end
end
