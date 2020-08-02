import React from 'react';

const SectionFour = () => {
  return (
    <div className="participates grid-y">
      <div className="grid-container">
        <div className='participates__wrapper'>
          <h1 className="title">Participate in the network</h1>

          <div className="grid-x align-justify">
            <div className="participates__item cell medium-24 grid-x align-middle">
              <div className="cell image small-4">
                <img src='./images/network_tokens.png' alt="network_tokens" />
              </div>
              <div className='grid-y align-top small-20'>
                <div className="participates__item__title">Get Fuse tokens</div>
                <div className="text">Fuse network's native currency, FUSE, works to align the incentives of all the network users. FUSE is currently being traded publicly on decentralized exchanges such as Uniswap.</div>

                <div className='grid-x links align-center'>
                  <div className="link">
                    <a rel="noreferrer noopener" target='_blank'
                      href='https://docs.fuse.io/the-fuse-chain/fuse-token'>
                      <span>FUSE tokenomics</span>
                    </a>
                    <img src="./images/network_arrow.svg" alt="network_arrow" />
                  </div>
                  <div className="link">
                    <a rel="noreferrer noopener" target='_blank'
                      href='https://uniswap.info/token/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d'>
                      <span>FUSE on tokenomics</span>
                    </a>
                    <img src="./images/network_arrow.svg" alt="network_arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="participates__item cell medium-24 grid-x align-middle">
              <div className="cell image small-4">
                <img src='./images/network_tokens_wallet.png' alt="network_tokens_wallet" />
              </div>
              <div className='grid-y align-top small-20'>
                <div className="participates__item__title">Become A Fuse Validator</div>
                <div className="text">In order to ensure the security and speed of all transactions on the Fuse blockchain, validators compete with one another to validate the state of the chain. For this important work validators are rewarded in FUSE.</div>
                <div className='grid-x links align-center'>
                  <div className="link">
                    <a rel="noreferrer noopener" target='_blank'
                      href='https://docs.fuse.io/become-a-validator/getting-started'>
                      <span>Learn how to run a Fuse node</span>
                    </a>
                    <img src="./images/network_arrow.svg" alt="network_arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="participates__item cell medium-24 grid-x align-middle">
              <div className="image small-4">
                <img src='./images/network_pig.png' alt="network_pig" />
              </div>
              <div className='grid-y align-top small-20'>
                <div className="participates__item__title">Stake Fuse tokens</div>
                <span className="small">(coming soon)</span>
                <div className="text">Any network participant can stake their FUSE to a validator of their choice in order to contribute to the security of the chain and in return earn passive income for doing so.</div>
                <div className='grid-x links align-center'>
                  <div className="link">
                    {/* <a rel="noreferrer noopener" target='_blank'> */}
                    <span>Learn more about Staking</span>
                    {/* </a> */}
                    <img src="./images/network_arrow.svg" alt="network_arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;