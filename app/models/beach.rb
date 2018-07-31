class Beach < ApplicationRecord
    has_many :review, dependent: :destroy
end
