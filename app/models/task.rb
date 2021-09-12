class Task < ApplicationRecord
  validate :title, presence: true

end
