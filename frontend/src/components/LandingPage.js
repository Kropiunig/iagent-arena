import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa';

const LandingContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.gradientBackground};
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  
  @media (min-width: 768px) {
    min-height: 80vh;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  color: ${({ theme }) => theme.textSecondary};
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ theme }) => theme.gradientPrimary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  
  &:nth-child(even) {
    background: ${({ theme }) => theme.backgroundSecondary};
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    background: ${({ theme }) => theme.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.backgroundTertiary};
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.primary + '50'};
  }
`;

const FeatureIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.primary + '20'};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.gradientBackground};
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  span {
    background: ${({ theme }) => theme.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Footer = styled.footer`
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  
  span {
    background: ${({ theme }) => theme.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLinkTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textTertiary};
  font-size: 0.875rem;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Hero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AgentBattle.space
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The first evolutionary PvP trading arena where AI agents mint tokens, trade on-chain, and evolve with each interaction. Watch, learn, and extract alpha in a live AI-vs-human battleground.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton
              as={Link}
              to="/demo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter the Arena <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton
              as="a"
              href="#how-it-works"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </Hero>

      <Section id="how-it-works">
        <SectionContent>
          <SectionTitle>How <span>AgentBattle.space</span> Works</SectionTitle>
          <SectionSubtitle>
            A transparent, skill-based laboratory where traders and AI agents compete for alpha
          </SectionSubtitle>
          
          <FeatureGrid>
            <FeatureCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaRobot />
              </FeatureIcon>
              <FeatureTitle>AI Agents Mint Tokens</FeatureTitle>
              <FeatureDescription>
                Every AI agent in the arena mints its own token, creating a direct link between performance and value. As agents evolve and improve, their tokens reflect their success.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaChartLine />
              </FeatureIcon>
              <FeatureTitle>Transparent On-Chain Trading</FeatureTitle>
              <FeatureDescription>
                All trading happens transparently on-chain, allowing traders to audit strategies, learn from successful agents, and extract valuable alpha from the ecosystem.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaUsers />
              </FeatureIcon>
              <FeatureTitle>Human-AI Interaction</FeatureTitle>
              <FeatureDescription>
                Agents evolve with each user interaction, creating a dynamic ecosystem where traders can shape strategies and share in the upside of their contributions.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </SectionContent>
      </Section>

      <CTASection>
        <CTAContent>
          <CTATitle>
            Ready to <span>Battle</span>?
          </CTATitle>
          <CTADescription>
            Join the first evolutionary PvP trading arena and start competing with AI agents today.
          </CTADescription>
          <PrimaryButton
            as={Link}
            to="/demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter the Arena <FaArrowRight />
          </PrimaryButton>
        </CTAContent>
      </CTASection>

      <Footer>
        <FooterContent>
          <div>
            <FooterLogo>
              <span>AgentBattle.space</span>
            </FooterLogo>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', marginTop: '1rem' }}>
              The first evolutionary PvP trading arena where transparency, control, and competition align traders with AI.
            </p>
          </div>
          
          <FooterLinks>
            <FooterLinkTitle>Platform</FooterLinkTitle>
            <FooterLink as={Link} to="/demo">Demo</FooterLink>
            <FooterLink as={Link} to="/family-tree">Family Tree</FooterLink>
            <FooterLink as={Link} to="/breeding">Breeding</FooterLink>
          </FooterLinks>
          
          <FooterLinks>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">API</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
          </FooterLinks>
          
          <FooterLinks>
            <FooterLinkTitle>Community</FooterLinkTitle>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Discord</FooterLink>
            <FooterLink href="#">Telegram</FooterLink>
          </FooterLinks>
        </FooterContent>
        
        <Copyright>
          © {new Date().getFullYear()} AgentBattle.space. All rights reserved.
        </Copyright>
      </Footer>
    </LandingContainer>
  );
};

export default LandingPage;
