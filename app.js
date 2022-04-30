// function  wrok when you press button "Click"

// https://docs.walletconnect.com/quick-start/dapps/web3-provider
var provider = new WalletConnectProvider.default({
    rpc: {
        1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
        137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
        // ...

    },
    // bridge: 'https://bridge.walletconnect.org',
});

async function loginWithEth() {

    //          WALLETCONNECT
    // activate QR qode
    await provider.enable();

    //  Create Ethers instance
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();

    //          METAMASK ONLY
    // if (window.ethereum) {
        // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    //     // Prompt user for account connections
        // await provider.send("eth_requestAccounts", []);
        // const signer = provider.getSigner();
    //     // show in console your address. (you can comment console.log)
    //     console.log("Account:", await signer.getAddress());


    //     // edit text from "Address" to "0x123..."
        document.querySelector('.walletAddress').innerHTML = await signer.getAddress();
    // } else {
    //     alert('You must install MetaMask')
    // }
}