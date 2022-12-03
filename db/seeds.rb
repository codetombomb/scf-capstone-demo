User.create(username: "tombomb", email: "tombomb@gmail.com", password: "tombomb")

store_open = [true, false]
10.times do
    name = Faker::Restaurant.name
    address = Faker::Address.street_address
    city = Faker::Address.city
    state = Faker::Address.state
    zip = Faker::Address.zip
    phone_number = Faker::PhoneNumber.cell_phone

    Store.create(
        name: name, 
        address: address,
        city: city,
        state: state,
        zip: zip,
        open: store_open.sample,
        phone_number: phone_number
    )

end


5.times do
    user = User.create(Faker::Internet.user('username', 'email', 'password'))
    5.times do
        customer_name = Faker::Name.name
        address = Faker::Address.street_address
        city = Faker::Address.city
        state = Faker::Address.state
        zip = Faker::Address.zip
        store_id = Store.all.sample.id

        delivery = Delivery.create(
            customer_name: customer_name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            store_id: store_id
        )

        user.deliveries << delivery
        Order.create(
            total_price: 12.00,
            tip: 2.00,
            payment_type: "Visa",
            delivery_id: delivery.id
        )
    end

end


