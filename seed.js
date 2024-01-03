const prisma = require("./src/server/client");
const bcrypt = require("bcrypt");


async function main() {
    //Admin
    const john = await prisma.user.create({
        data: {
          username: 'john_doe',
          password: await bcrypt.hash("123", 10),
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
          password: await bcrypt.hash("123", 10),
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
          password: await bcrypt.hash("123", 10),
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
          password: await bcrypt.hash("123", 10),
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

    const artist1 = await prisma.artist.create({
        data: {
          name: "Jon Shaw",
          imgUrl: "https://i.imgur.com/xvWaerZ.jpg", 
        },
      });
      
      const artist2 = await prisma.artist.create({
        data: {
          name: "William Whitaker",
          imgUrl: "https://i.imgur.com/uSAGNtP.png",
        },
      });
      
      const artist3 = await prisma.artist.create({
        data: {
          name: "Cristina Alfaro Eguiluz",
          imgUrl: "https://i.imgur.com/GYhUbIG.png", 
        },
      });

    const art1 = await prisma.art.create({
        data: {
          title: "Poppy Water",
          description: "Vancouver alleyways",
          price: 500,
          inStock: true,
          dimensions: "36x36",
          year: 2021,
          imgUrl: "https://i.imgur.com/QJeBB3V.jpeg",
          medium: "Ink and acrylic on wood",
          artistId: artist1.id
        },
      });

      const art2 = await prisma.art.create({
        data: {
          title: "Notre Dame",
          description: "A watercolor painting of Notre-Dame Cathedral",
          price: 200,
          inStock: true,
          dimensions: "20x20",
          year: 2019,
          imgUrl: "https://i.imgur.com/ye3qTxN.jpeg",
          medium: "Ink and acrylic",
          artistId: artist1.id
        },
      });
      const art3 = await prisma.art.create({
        data: {
          title: "Submerged Elegance",
          description: "A captivating portrait of a woman submerged in water, painted with vibrant blue tones and dramatic contrast.",
          price: 750,
          inStock: true,
          dimensions: "30x40",
          year: 2023,
          imgUrl: "https://i.imgur.com/jyyxFC4.jpeg",
          medium: "Acrylic on Canvas",
          artistId: artist3.id 
        },
      });
   
      const art4 = await prisma.art.create({
        data: {
          title: "Repose in Nature",
          description: "An evocative classical painting depicting a young woman in a white dress seated on a rocking chair amidst a blooming garden.",
          price: 800,
          inStock: true,
          dimensions: "20x25",
          year: 1943, 
          imgUrl: "https://i.imgur.com/OVxr5cL.jpeg", 
          medium: "Oil on Canvas",
          artistId: artist2.id 
        },
      });

      const art5 = await prisma.art.create({
        data: {
          title: "Fruitful Stillness",
          description: "A still life painting capturing a rich array of fruits with a teapot, evoking a sense of domestic tranquility.",
          price: 600,
          inStock: true,
          dimensions: "30x40",
          year: 2023, 
          imgUrl: "https://i.imgur.com/UIZkAPe.jpeg", 
          medium: "Digital Painting",
          artistId: artist3.id
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