json.extract! @doctor, :id, :name, :email
json.reviews do
  json.array!(@doctor.reviews) do |review|
    json.extract! review, :id, :doctor_id, :description
  end
end
