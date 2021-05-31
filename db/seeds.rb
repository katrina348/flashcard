Category.destroy_all

js = Category.create(name:'JavaScript')
science = Category.create(name:"Science")
random = Category.create(name:'Random')

js.cards.create(question:'True or false, let is preffered over var', answer:'false', answered:false)
js.cards.create(question:"1 == '1' ", answer:'true', answered:false)

science.cards.create(question:"What is the max speed limit in the universe ", answer:'speed of light', answered:false)
science.cards.create(question:"What is the symbo for water", answer:'H20', answered:false)
