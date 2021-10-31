// scripts/index.js
async function main () {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts();
  console.log(accounts);

  // Set up an ethers contract, representing our deployed Box instance
  // Replace address with the locally deployed contract address
  const address = '0x123456';
  const Box = await ethers.getContractFactory('Box');
  const box = await Box.attach(address);

  // Call the retrieve() function of the deployed Box contract
  let value = await box.retrieve();
  console.log('Box value is', value.toString());

  // Send a transaction to store() a new value in the Box
  await box.store(23);

  // Call the retrieve() function of the deployed Box contract
  value = await box.retrieve();
  console.log('Box value is', value.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
