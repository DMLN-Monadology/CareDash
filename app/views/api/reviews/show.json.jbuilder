json.extract! @review, :id, :doctor_id, :description
json.doctor do
  json.extract! @review.doctor, :id, :name
end
