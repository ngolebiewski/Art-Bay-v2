const prisma = require("./src/server/client");
const bcrypt = require("bcrypt");
const path = require('path');


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

              // Artists

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
                // NEW
      const artist4 = await prisma.artist.create({
        data: {
            name: "Davide Bramante",
            imgUrl: "https://i.imgur.com/OGY8d0L.jpg",
        },
      });

      const artist5 = await prisma.artist.create({
        data: {
            name: "Francioni Mastromarino",
            imgUrl: "https://i.imgur.com/N78JyKI.jpg",
        },
      });
      const artist6 = await prisma.artist.create({
      data: {
          name: "Angelo Salemi",
          imgUrl: "https://i.imgur.com/P1WEHY7.jpg",
      },
      });

      const artist7 = await prisma.artist.create({
      data: {
        name: "Orode Deoro",
        imgUrl: "https://i.imgur.com/jOT5q0T.jpg",
      }
      });
                  // Art

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

                  // NEW 

        const art6 = await prisma.art.create({
          data: {
            title: "Luminosa London",
            description: "A sensual layering of glimpses of St. Petersburg, London, and Madrid enriched with transparencies composes this stupefying photographic artwork.",
            price: 1100,
            inStock: true,
            dimensions: "40x28",
            year: 2023, 
            imgUrl: "https://i.imgur.com/qCPKDVc.jpg", 
            artistId: artist4.id
          },
        });

        const art7 = await prisma.art.create({
          data: {
            title: "Luminosa Hong Kong,",
            description: "Hong kong and london are among artist davide bramante's favorite travel destinations. Their eccentric and elegant attitudes are evoked in this photograph through assorted symbols that get layered and intricately intertwined for an impactful visual effect. ",
            price: 1100,
            inStock: true,
            dimensions: "40x28",
            year: 2023, 
            imgUrl: "https://i.imgur.com/zV4oQ4c.jpg", 
            medium: "Photography",
            artistId: artist4.id
          },
        });
  
        const art8 = await prisma.art.create({
          data: {
            title: "VENERE CONTEMPORANEA",
            description: "This stunning Contemporary Venus sustainable art piece embodies the divine feminine in ordinary women, where modernized gentle features are accented by scratches to emphasize the struggles and disappointments of everyday lives, and contrasted by an elegant neo-classic hairstyle. ",
            price: 1000,
            inStock: true,
            dimensions: "42x24",
            year: 2023, 
            imgUrl: "https://i.imgur.com/2yapIEF.jpg", 
            medium: "Sculpture",
            artistId: artist5.id
          },
        });

        const art9 = await prisma.art.create({
          data: {
            title: "LA BIBLIOTECA",
            description: "La Biblioteca di Leonardo Da Vinci, or Da Vinci's library, depicts the Italian genius hand-sculpted immersed in a pile of books, symbolic of the 200-book-filled library he carried with him everywhere.",
            price: 3000,
            inStock: true,
            dimensions: "200x400",
            year: 2023, 
            imgUrl: "https://i.imgur.com/dB1Ofb8.jpg", 
            medium: "Sculpture",
            artistId: artist5.id
          },
        });

        const art10 = await prisma.art.create({
          data: {
            title: "ORLANDO INNAMORATO ANTHROPOMOPRHIC",
            description: "A truly unique objet d'art crafted by the expert hands of master ceramist Angelo Salemi, this vase boasts a fierce anthropomorphic shape inspired by Orlando, the fictional knight from the medieval poem 'Orlando In Love'.",
            price: 1090,
            inStock: true,
            dimensions: "13x13x15",
            year: 2023, 
            imgUrl: "https://i.imgur.com/bbiriAJ.jpg", 
            medium: "Sculpture",
            artistId: artist6.id
          },
        });

        const art11 = await prisma.art.create({
          data: {
            title: "UN GIORNO VERRAI ",
            description: "An anthropomorphic design concealing a world of romantic, philosophical inspiration defines the sculptural look of this table lamp handcrafted by master ceramist Angelo Salemi.",
            price: 1090,
            inStock: true,
            dimensions: "15x10x23",
            year: 2023, 
            imgUrl: "https://i.imgur.com/ztofUFC.jpg", 
            medium: "Sculptural Furniture",
            artistId: artist6.id
          },
        });

        const art12 = await prisma.art.create({
          data: {
            title: "E IL MATTINO AVANZAVA MOSAIC",
            description: "Daring and sublime in its contemporary spirit, this mosaic on canvas flaunts a refined female subject emerging from a backdrop of black ceramic tiles and golden plaster. ",
            price: 1090,
            inStock: true,
            dimensions: "15x1x16",
            year: 2023, 
            imgUrl: "https://i.imgur.com/93b0MQ9.jpg", 
            medium: "Mosaic",
            artistId: artist7.id
          },
        });

                    // Order Details

      const OrderDetail1 = await prisma.orderDetail.create({
          data: {
              isComplete: false,
              userId: 1, 
              cartItems: {
                  create: [{ quantity: 5, artId: 3 }]
              }
          },
      })

      const OrderDetail2 = await prisma.orderDetail.create({
        data: {
            isComplete: false,
            userId: 2, 
            cartItems: {
                create: [{ quantity: 3, artId: 2 }]
            }
        },
    })

    const OrderDetail3 = await prisma.orderDetail.create({
      data: {
          isComplete: false,
          userId: 3, 
          cartItems: {
              create: [{ quantity: 1, artId: 5 }]
          }
      },
  })
  const OrderDetail4 = await prisma.orderDetail.create({
    data: {
        isComplete: true,
        userId: 1, 
        cartItems: {
            create: [{ quantity: 1, artId: 2 }]
        }
    },
})

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