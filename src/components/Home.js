import React from 'react'
import Section from './Section'

const Home = () => {
  return (
    <div>
      <Section
        titel={'Model S'}
        description={'Order Online for Touchless Delivery'}
        backgroundImahe={'model-s.jpg'}
        leftBtnText={'Customer Order'}
        rightBtnText={'Existing inventory'}
      />
      <Section
        titel={'Model Y'}
        description={'Order Online for Touchless Delivery'}
        backgroundImahe={'model-y.jpg'}
        leftBtnText={'Customer Order'}
        rightBtnText={'Existing inventory'}
      />
      <Section
        titel={'Model X'}
        description={'Order Online for Touchless Delivery'}
        backgroundImahe={'model-x.jpg'}
        leftBtnText={'Customer Order'}
        rightBtnText={'Existing inventory'}
      />
      <Section
        titel={'Model 3'}
        description={'Order Online for Touchless Delivery'}
        backgroundImahe={'model-3.jpg'}
        leftBtnText={'Customer Order'}
        rightBtnText={'Existing inventory'}
      />
      <Section
        titel={'Lowest Cost Solar Panels in Amarica'}
        description={'Money-back guarantee'}
        backgroundImahe={'solar-panel.jpg'}
        leftBtnText={'Order Now'}
        rightBtnText={'Learn More'}
      />
    </div>
  )
}

export default Home