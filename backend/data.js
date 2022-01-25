import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Semaa',
      email: 'admin@apothecary2go.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Moderna',
        logo: '/images/logo2.png',
        description: 'second best supplier',
        rating: 4.2,
        numReviews: 100,
      },
    },
    {
      name: 'Amin',
      email: 'seller@pfizer.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: 'Pfizer',
        logo: '/images/logo1.png',
        description: 'best supplier',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Rachel',
      email: 'seller@tylenol.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: 'tylenol',
        logo: '/images/logo3.png',
        description: 'best supplier',
        rating: 4.8,
        numReviews: 5321,
      },
    },


    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Acetaminophen',
      dose: '325 mg',
      category: 'Fast-Movers',
      image: '/images/p1.jpg',
      price: 1,
      countInStock: 1000,
      brand: 'Tylenol',
      rating: 4.5,
      numReviews: 10,
      description: 'Acetaminophen is a pain reliever and a fever reducer. Acetaminophen is used to treat mild to moderate and pain, to treat moderate to severe pain in conjunction with opiates, or to reduce fever. Common conditions treated include headache, muscle aches, arthritis, backache, toothaches, sore throat, colds, flu, and fevers.',
    },


    {
      name: 'Amoxicillin',
      category: 'Fast-Movers',
      image: '/images/p2.jpg',
      price: 2,
      countInStock: 200,
      brand: 'TEVA',
      rating: 4.0,
      numReviews: 10,
      description: 'Amoxicillin is a penicillin antibiotic that fights bacteria.\nAmoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.',
    },
    {
      name: 'Gabapentin',
      category: 'Fast-Movers',
      image: '/images/p3.jpg',
      price: 0.5,
      countInStock: 100,
      brand: 'APO',
      rating: 4.8,
      numReviews: 17,
      description: 'Gabapentin is an anti-epileptic drug, also called an anticonvulsant. \nIt affects chemicals and nerves in the body that are involved in the cause of seizures and some types of pain.\nGabapentin is used together with other medicines to treat partial seizures in adults and children at least 3 years old.\nGabapentin is also used to treat neuropathic pain (nerve pain) caused by herpes virus or shingles (herpes zoster) in adults.',
    },
    {
      name: 'Adderall',
      category: 'Narcotics',
      image: '/images/p4.jpg',
      price: 5,
      countInStock: 50,
      brand: 'Adderall',
      rating: 4.5,
      numReviews: 14,
      description: 'Adderall contains a combination of amphetamine and dextroamphetamine. Amphetamine and dextroamphetamine are central nervous system stimulants that affect chemicals in the brain and nerves that contribute to hyperactivity and impulse control.\n\nAdderall is used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy.\n\nAdderall may also be used for purposes not listed in this medication guide.',
    },
    {
      name: 'Oxycodone',
      category: 'Narcotics',
      image: '/images/p5.jpg',
      price: 2,
      countInStock: 120,
      brand: 'OxyContin',
      rating: 4.5,
      numReviews: 10,
      description: 'Oxycodone is an opioid pain medication sometimes called a narcotic.\nOxycodone is used to treat moderate to severe pain.\nThe extended-release form of oxycodone is for around-the-clock treatment of pain and should not be used on an as-needed basis for pain.',
    },
    {
      name: 'Percocet',
      category: 'Controlled',
      image: '/images/p6.jpg',
      price: 3,
      countInStock: 50,
      brand: 'Percocet',
      rating: 4.5,
      numReviews: 15,
      description: 'Percocet contains a combination of acetaminophen and oxycodone. Oxycodone is an opioid pain medication. An opioid is sometimes called a narcotic. Acetaminophen is a less potent pain reliever that increases the effects of oxycodone.\nPercocet is used to relieve moderate to severe pain.\nDue of the risks of addiction, abuse, and misuse, even at recommended doses, Percocet is only prescribed when treatment with non-opioid pain relieving medication has not been tolerated or has not provided adequate pain relief.high quality product',
    },
  ],
};
export default data;
