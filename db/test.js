const connectDB = require('./dbConnection');

async function testConnectDB() {
  try {
    await connectDB();
    console.log('Connection to MongoDB successful');
    // You can add additional code here to perform other tests or operations
    // that depend on the database connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // You can also add cleanup code here if needed
    process.exit(); // Exit the script after testing
  }
}

testConnectDB();