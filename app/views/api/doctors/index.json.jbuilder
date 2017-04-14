json.array!(@doctors) do |doctor|
  json.extract! doctor, :id, :email, :name
  json.reviews do
    json.array!(doctor.reviews) do |review|
      json.extract! review, :id, :doctor_id, :description
    end
  end
end
