const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const services = [
  {
    serviceImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
    serviceTitle: "Premium Car Engine Tuning",
    companyName: "AutoTech Masters",
    website: "https://autotechmasters.com",
    description: "Boost your car's performance with our state-of-the-art engine tuning services. We optimize fuel efficiency and power output for a smoother ride.",
    category: "Auto Services",
    price: "150",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  },
  {
    serviceImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    serviceTitle: "Home Electrical Repair",
    companyName: "Sparky Solutions",
    website: "https://sparkysolutions.com",
    description: "Expert electrical repair services for your home. From fixing wiring issues to installing new fixtures, our certified electricians handle it all safely.",
    category: "Home Services",
    price: "80",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  },
  {
    serviceImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2084&auto=format&fit=crop",
    serviceTitle: "Professional Deep Cleaning",
    companyName: "CleanSweep Pro",
    website: "https://cleansweeppro.com",
    description: "Experience a spotless home with our deep cleaning services. We use eco-friendly products to ensure a healthy environment for your family.",
    category: "Home Services",
    price: "120",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  },
  {
    serviceImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    serviceTitle: "Laptop & PC Repair",
    companyName: "TechFix Squad",
    website: "https://techfixsquad.com",
    description: "Fast and reliable computer repair services. Whether it's hardware failure or software issues, our technicians will get your device running like new.",
    category: "Tech Support",
    price: "60",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  },
  {
    serviceImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop",
    serviceTitle: "Plumbing & Pipe Fitting",
    companyName: "FlowMasters Plumbing",
    website: "https://flowmasters.com",
    description: "Emergency plumbing services available 24/7. We fix leaks, unclog drains, and install new piping systems with a guarantee of quality.",
    category: "Home Services",
    price: "95",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  },
  {
    serviceImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    serviceTitle: "Digital Marketing Strategy",
    companyName: "GrowthHackers Agency",
    website: "https://growthhackers.com",
    description: "Scale your business with our data-driven digital marketing strategies. SEO, social media, and content marketing tailored to your brand.",
    category: "Other",
    price: "200",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  },
  {
    serviceImage: "https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2080&auto=format&fit=crop",
    serviceTitle: "Organic Gardening Service",
    companyName: "GreenThumb Gardens",
    website: "https://greenthumb.com",
    description: "Transform your backyard into a lush oasis. We offer landscaping, planting, and maintenance services using organic and sustainable practices.",
    category: "Home Services",
    price: "75",
    userEmail: "admin@example.com",
    userName: "Admin User",
    addedDate: new Date()
  }
];

async function run() {
  try {
    await client.connect();
    const database = client.db("serviceReviewDB");
    const servicesCollection = database.collection("services");

    const result = await servicesCollection.insertMany(services);
    console.log(`${result.insertedCount} services were inserted successfully.`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
