class CreateDoctors < ActiveRecord::Migration[5.0]
  def change
    create_table :doctors do |t|
        t.string :email, null: false
        t.string :name, null: false
        t.string :password_digest, null: false
      t.timestamps
    end

    add_index :doctors, :email, unique: true #for quick indexing and checking for unique emails
  end
end
