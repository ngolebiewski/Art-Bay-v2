const prisma = require("./src/server/client");


async function main() {
    //Admin
    const john = await prisma.user.create({
        data: {
          username: 'john_doe',
          password: '123',
          email: 'johndoe@example.com',
          isAdmin: true,
          firstName: 'John',
          lastName: 'Doe',
          streetAddress: '123 Apple St',
          secondaryStreetAddress: 'apt 5',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          phoneNumber: 1234567890,
          zipCode: 10001,
        },
      });
      //Users
      const jane = await prisma.user.create({
        data: {
          username: 'jane_smith',
          password: '123',
          email: 'janesmith@example.com',
          isAdmin: false,
          firstName: 'Jane',
          lastName: 'Smith',
          streetAddress: '456 Berry Ln',
          secondaryStreetAddress: 'floor 2',
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          phoneNumber: 1276543210,
          zipCode: 90001,
        },
    });
    const alice = await prisma.user.create({
        data: {
          username: 'alice_jones',
          password: '123',
          email: 'alicejones@example.com',
          isAdmin: false,
          firstName: 'Alice',
          lastName: 'Jones',
          streetAddress: '789 Peach Ave',
          secondaryStreetAddress: 'apt 6',
          city: 'Chicago',
          state: 'IL',
          country: 'USA',
          phoneNumber: 1551234567,
          zipCode: 60601,
        },
    });
    
    const mike = await prisma.user.create({
        data: {
          username: 'mike_brown',
          password: '123',
          email: 'mikebrown@example.com',
          isAdmin: false,
          firstName: 'Mike',
          lastName: 'Brown',
          streetAddress: '101 Orange Blvd',
          secondaryStreetAddress: 'floor 9',
          city: 'Houston',
          state: 'TX',
          country: 'USA',
          phoneNumber: 1334445555,
          zipCode: 77001,
        },
    });


  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })