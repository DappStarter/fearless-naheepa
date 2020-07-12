require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember slow half clinic foster security'; 
let testAccounts = [
"0xbbbbc4f9dad7901cd51a5da2209e7efa38f6c2b89b3ca70e444085b8f771a356",
"0x62885faea17f10302dbcdc00568d8f3152f3bae67ca949f22560baa73277f173",
"0x2f7c7f6a13860c28c3fc2ffb0bd4794f3b0d3d6d0a16235bc334c1484726108b",
"0xb51a02bf61ef84bb412f161d24f6b8207c95381d4b4ce6105da03cf52ab59214",
"0xbf035b97dc6c0a35a41b3f594cf3e7bc4fecf46207ab00adb52791f793d43c1f",
"0x88bcc7b99fa114560b5f9499981c9ae079c93c1dfc8ea6c9a1077db1f0cbe256",
"0xe1d41fc6050ab67ec2b46c267c9d28aeb8f9347277c666ce399c47bb94d1918a",
"0x9269f50aac2a4c6479964ec5f3d60d0a69860379ae98789996aa4e07a2dad29f",
"0x897af9b0d52250b2560337dba2c3a9ecdbb63e5fb04a367f1af211bbee280965",
"0x2a74697f36046b08014818dcf1f1bb67558676cddeb08a1d2d3f7a16c865141f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
