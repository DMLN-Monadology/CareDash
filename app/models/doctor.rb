class Doctor < ApplicationRecord
  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many(
    :reviews,
    primary_key: :id,
    foreign_key: :doctor_id,
    dependent: :destroy, #if doctor destroyed, all reviews as well
    class_name: "Review"
  )

  attr_reader :password


  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end

end
