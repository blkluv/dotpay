<img src="https://github.com/Zhixuan0318/Emissary/assets/69501009/7e23934e-7378-483b-a03b-6dde82bdee29" width=80>

# Introducing Emissary

<img src="https://github.com/Zhixuan0318/Emissary/assets/69501009/afade70f-e79c-4aa3-90ae-503cea1e6c17" width=90%>

Emissary is a comprehensive payout solution designed for Polkadot and Substrate-based Parachains. This platform is specifically tailored for DAO organizations, Web 3.0 companies, and individual projects, offering seamless payout management 🪙 With Emissary, you can easily create your own white-label token emissary, simplifying the onboarding process for your community members and users.

Consolidating all essential features in one place, Emissary provides a convenient and efficient one-stop solution for your payout needs. From handling transfer requests and implementing multi-signature safe to setting up token-gated access and incorporating NFT-derived functionalities, our platform covers it all. Additionally, Emissary facilitates treasury management with role setup, ensuring smooth and organized payout operations.

Our platform boasts extensive compatibility, currently supporting **70 networks** (Polkadot, Kusama, and various Substrate-based Parachains). Furthermore, we offer compatibility with **300+ token assets** within the ecosystem.

👇 Here's a demo video to have a quick overview of Emissary 👇

https://github.com/Zhixuan0318/Emissary/assets/69501009/120d0a13-4abd-4694-a247-d90f670daed4

# Key Features

### 1️⃣ White-label Token Emissary Builder

![screenshots4](https://github.com/Zhixuan0318/Emissary/assets/69501009/c1303ef2-c510-4c11-9e99-bbea0d2f93e5)

Emissary offers support to numerous organizations and projects within 77 networks, including Polkadot, Kusama, and other Substrate-based Parachains. Each of these entities possesses its own community and unique brand identity. Therefore, it is crucial to enable users to create and customize their token emissary. Emissary simplifies the entire token emissary creation process, providing features such as general information input, color theme selection, logo media integration, token assets setup, custom emissary subdomain, and more.

### 2️⃣ User Onboarding Experience

![screenshots8](https://github.com/Zhixuan0318/Emissary/assets/69501009/f7cb2db0-4350-45f5-817a-3616bd627106)

Emissary is dedicated to ensuring a seamless and effortless onboarding experience for your clients. To achieve this, Emissary offers two convenient options for clients to access their own accounts and initiate payouts within your token emissary.

The first option involves using a unique emissary code. Whenever a new token emissary is created in Emissary, it automatically generates a six-digit code specific to that emissary. Copy and share this code with your clients. They can then paste it into the designated field on the emissary login page, granting them immediate access.

Alternatively, the second option allows clients to access the login page by directly browsing the custom domain of your token emissary. With these two choices available, your clients can select the method that best suits their preferences and get started with ease!

### 3️⃣ Transfer Request Management

![screenshots1](https://github.com/Zhixuan0318/Emissary/assets/69501009/7bd9fbc3-aa24-4c4b-ac42-800f38787c50)

When a client needs to request a payout from an organization or project related to a specific program or event, the most efficient method is to submit a transfer request. Initiating a transfer request is a straightforward process: the client needs to provide some general information, select the relevant program, specify the desired payout amount, and upload any necessary tax documents. Once these steps are completed, the transfer request is ready for review.

Controllers, who have access to their own controllers' account, will be responsible for reviewing all transfer requests. Once the payout request undergoes the review process and receives approval, the controllers can proceed with the payout. This involves transferring the token assets from the treasury to the applicant's wallet.

To ensure transparency and accountability, both parties can track all transactions. This can be done through the Subscan chain explorer, which allows them to monitor the real-time progress of the transfer, or by referencing the transfer record memo to review the transaction history.

### 4️⃣ Multi-signature Emissary's Safe

![screenshots2](https://github.com/Zhixuan0318/Emissary/assets/69501009/264f2e74-ae4d-4d7f-be6e-4f6b98b2e62c)

Emissary's multi-signature safe serves as a secure solution tailored for milestone-based projects, separate payouts, or lump-sum payments. The key distinction between a transfer request and the multi-sig safe lies in the approval process. With the multi-signature safe, a designated group of controllers must collectively approve the transaction before the transfer can take place.

To clarify, once the number of controllers approving the transaction surpasses a specified approval threshold, the token assets held within the multi-signature smart contract will be transferred to the intended recipient's wallet. The design of Emissary's multi-sig safe is built upon the architecture of the SAFE core protocol and incorporates advanced implementation techniques for multi-signature smart contracts, ensuring a robust and reliable mechanism for secure fund transfers.

### 5️⃣ Decentralized Transfer Record Memo

![screenshots3](https://github.com/Zhixuan0318/Emissary/assets/69501009/8d7cba1f-b127-4659-b565-323c1f1c4228)

In token asset transfers and treasury management for DAO organizations and Web 3.0 companies, transparency and decentralization are crucial. Emissary addresses this need by generating a transfer record memo, which meticulously records the entire history and processes of token asset transfers. This comprehensive record encompasses recipient addresses, token transfer amounts, transfer request statuses, timestamps for each process, and more. The transfer record memo is formatted in JSON data and is deployed into the IPFS network.

IPFS is a decentralized storage network powered by Filecoin, ensuring that the transfer record memos are stored in a distributed and tamper-resistant manner. Each token asset transfer record memo is assigned a unique CID (Content Identifier) that facilitates easy retrieval. Furthermore, these records can be readily utilized by third-party applications, fostering greater accessibility and utilization of the data. This approach strengthens transparency and enables seamless integration of Emissary's services with other blockchain-based platforms and applications.

### 6️⃣ Token-Gated Accesess Setup

![screenshots7](https://github.com/Zhixuan0318/Emissary/assets/69501009/4d4d2e27-0442-4bd0-b513-77806b4827db)

NFTs offer boundless possibilities for implementing various use cases, especially when it comes to payouts and setting up token-gated access. Emissary introduces multiple NFT use cases that can be integrated into your payout operations or utilized for managing your token emissary.

One of these features is the token-gated emissary, which allows you to control access to your emissary and restrict who can log in. By default, anyone with a Polkadot or Substrate Wallet can access your token emissary. However, to prevent spam or unauthorized access, you have the option to limit login access to only your community members. This can be achieved by using your community's unique token as a pass to enter your token emissary.

Additionally, Emissary supports token-gated programs, which involve restricting access to certain programs using event-related NFTs. In essence, clients will need to possess specific event NFTs in order to open a transfer request for the corresponding program. 

### 7️⃣ NFT-Derived Features

![screenshots5](https://github.com/Zhixuan0318/Emissary/assets/69501009/c4be2677-bccb-4479-ae4b-f8d7a42497f2)

NFTs open up exciting possibilities for enhancing client experiences during payouts. With Emissary, payouts are no longer tedious tasks. One of Emissary's innovative features is NFT redemption, which empowers controllers to create an NFT collection simultaneously when setting up a program. This NFT collection is then linked to the program. When a client submits a transfer request for a program associated with an NFT collection, they have the opportunity to mint the NFT upon receiving their payout. This feature is perfect for events like hackathons, as winners can mint a special hackathon NFT as a memento after receiving their prize payout.

Another valuable NFT-related feature is the specially designed NFT auto request submission. This feature streamlines the payout management process for events. Instead of sending out emails and instructing payout applicants on how to create transfer requests, Emissary enables you to bind all transfer request information to a specific NFT collection. When applicants have this particular NFT collection in their wallets, they can simply scan their wallet on the transfer request page and select the NFT collection. Emissary then automatically populates the necessary information for them, making the submission process seamless. For instance, if you create an NFT for the champion of a hackathon and link the payout information to that NFT, you can send it to the winner's wallet. They just need to scan it, and Emissary takes care of the rest, simplifying the entire submission process.

### 8️⃣ Treasury Management with Role Setup

![screenshots5](https://github.com/Zhixuan0318/Emissary/assets/69501009/9d3881f5-e856-4f35-9ba3-5d574246c841)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



