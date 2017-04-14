class Review < ApplicationRecord
  validates :doctor_id, :description, presence: true

  belongs_to(
    :doctor,
    primary_key: :id,
    foreign_key: :doctor_id,
    class_name: "Doctor"
  )

end
