if @review.persisted?
  json.form render(partial: "reviews/form", formats: :html, locals: { restaurant: @restaurant, review: Review.new })
  json.inserted_review render(partial: "restaurants/review", formats: :html, locals: { review: @review })
  json.updated_counter render(partial: "restaurants/reviews_counter", formats: :html, locals: { restaurant: @restaurant })
else
  json.form render(partial: "reviews/form", formats: :html, locals: { restaurant: @restaurant, review: @review })
end