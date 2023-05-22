import React from 'react'
import Layout from '../components/layout'
import HeroSection from '../components/Sections/HeroSection'
import PartnerSection from '../components/Sections/PartnerSection'
import Features from '../components/Sections/Features'
import Services from '../components/Sections/Services'
import Projects from '../components/Sections/Projects'
import CalltoAction from '../components/Sections/CalltoAction'
import Logo from '../images/logo.svg'

export default function Index() {
  return (
    <>
    <Layout>
      <HeroSection />
      <PartnerSection />
      <Features />
      <Services />
      <Projects />
    </Layout><CalltoAction />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="text-[#A3A3A3] grid place-items-center">©2023 FUTURIOR - All Rights Reserved.</div>
    <br></br>
    </>
  )
}
