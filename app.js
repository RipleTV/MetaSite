// function  wrok when you press button "Click"
async function loginWithEth() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        // show in console your address. (you can comment console.log)
        console.log("Account:", await signer.getAddress());

        // edit text from "Address" to "0x123..."
        document.querySelector('.walletAddress').innerHTML = await signer.getAddress();
    } else {
        alert('You must install MetaMask')
    }
}