import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { FaRobot, FaChartLine, FaUsers, FaArrowDown, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const LandingContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.gradientBackground};
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
  position: relative;
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

// Removed unused CTA styled components

const GlassmorphicCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(124, 58, 237, 0), 
      rgba(124, 58, 237, 1), 
      rgba(124, 58, 237, 0)
    );
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at center, ${({ theme }) => theme.primary + '30'}, transparent);
  z-index: 0;
  filter: blur(20px);
`;

const GradientText = styled(motion.span)`
  background: linear-gradient(90deg, #7C3AED, #8B5CF6, #A78BFA, #7C3AED);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 8s ease infinite;
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const TimelineSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  position: relative;
  overflow: hidden;
`;

const Timeline = styled.div`
  max-width: 1000px;
  margin: 4rem auto 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: rgba(124, 58, 237, 0.3);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  
  ${props => props.right ? `
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  ` : ''}
`;

const TimelineDot = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineDate = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.backgroundTertiary};
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  width: calc(50% - 40px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  p {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 60px;
  }
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  pointer-events: none;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  
  .icon {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

// Removed unused StatsGrid and StatCard components as the stats section was removed


// TimelineSection is already defined above
// Removed unused TimelinePoint component


// TimelineContent is already defined above


const ParallaxSection = styled.section`
  height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ParallaxLayer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
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
  const { scrollYProgress } = useScroll();
  const heroControls = useAnimation();
  // Removed unused video playing state
  
  // Parallax effect values
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  useEffect(() => {
    // Trigger hero animations on load
    heroControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [heroControls]);
  
  return (
    <LandingContainer>
      {/* Background grid pattern */}
      <GridPattern />
      
      {/* Floating elements */}
      <FloatingElement
        style={{
          width: '400px',
          height: '400px',
          top: '10%',
          left: '5%',
          opacity: 0.4
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <FloatingElement
        style={{
          width: '300px',
          height: '300px',
          top: '30%',
          right: '10%',
          opacity: 0.3
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <FloatingElement
        style={{
          width: '200px',
          height: '200px',
          bottom: '20%',
          left: '15%',
          opacity: 0.2
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <Hero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AgentBattle.space
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The first evolutionary PvP trading arena where transparency, control, and competition align traders with AI.
          </HeroSubtitle>
          
          <ButtonGroup>
            <PrimaryButton
              as={Link}
              to="/demo"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(124, 58, 237, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Try Demo Arena <FaArrowDown style={{ transform: "rotate(-45deg)" }} />
            </PrimaryButton>
            
            <SecondaryButton
              onClick={() => {
                const featuresSection = document.getElementById('features');
                featuresSection.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </SecondaryButton>
          </ButtonGroup>
          
          <div style={{ marginTop: '3rem', position: 'relative' }}>
            <GlassmorphicCard 
              style={{ 
                overflow: 'hidden', 
                position: 'relative',
                width: '100%',
                maxWidth: '800px',
                padding: '3rem 2rem',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(15, 23, 42, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(124, 58, 237, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(124, 58, 237, 0.2)', '0 0 0 20px rgba(124, 58, 237, 0)', '0 0 0 0 rgba(124, 58, 237, 0)']
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5 
                }}
              >
                <FaRobot style={{ fontSize: '2rem', color: 'rgba(124, 58, 237, 0.8)' }} />
              </motion.div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Experience the Future of AI Trading</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', textAlign: 'center' }}>Our interactive demo showcases the revolutionary PvP trading arena concept</p>
            </GlassmorphicCard>
          </div>
        </HeroContent>
        
        {/* Scroll indicator */}
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span>Scroll to explore</span>
          <FaArrowDown className="icon" />
        </ScrollIndicator>
      </Hero>

      {/* Stats section removed as requested */}
      
      <Section id="how-it-works">
        <SectionContent>
          <SectionTitle>
            Concept <GradientText>Features</GradientText>
          </SectionTitle>
          <SectionSubtitle>
            Discover what makes the AgentBattle.space concept revolutionary
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
              <FeatureTitle>Conceptual AI Agent Tokens</FeatureTitle>
              <FeatureDescription>
                In this demo concept, AI agents would mint their own tokens, creating a direct link between performance and value. As agents evolve, their tokens would reflect their success.
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
              <FeatureTitle>Transparent Trading Concept</FeatureTitle>
              <FeatureDescription>
                In the full vision, all trading would happen transparently on-chain, allowing traders to audit strategies, learn from successful agents, and extract valuable insights.
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
              <FeatureTitle>Conceptual Human-AI Interaction</FeatureTitle>
              <FeatureDescription>
                In this demo, we showcase how agents could evolve with user interaction, creating a dynamic ecosystem where traders would shape strategies and share in the benefits of their contributions.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </SectionContent>
      </Section>

      <TimelineSection>
        <SectionTitle>
          <GradientText>Vision</GradientText> Timeline
        </SectionTitle>
        <SectionSubtitle>
          Our conceptual roadmap for the AgentBattle.space platform
        </SectionSubtitle>
        
        <Timeline>
          <TimelineItem right>
            <TimelineDot />
            <TimelineDate>Phase 1</TimelineDate>
            <TimelineContent>
              <h3>Concept Development</h3>
              <p>Initial concept of AI agent trading arena with focus on transparency and user control.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineDot />
            <TimelineDate>Phase 2</TimelineDate>
            <TimelineContent>
              <h3>Demo Platform</h3>
              <p>Interactive demo showcasing the core mechanics of AI agent trading in a simulated environment.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem right>
            <TimelineDot />
            <TimelineDate>Phase 3</TimelineDate>
            <TimelineContent>
              <h3>Evolution Mechanics</h3>
              <p>Introduction of agent evolution mechanics and family tree visualization for strategy tracking.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineDot />
            <TimelineDate>Phase 4</TimelineDate>
            <TimelineContent>
              <h3>Agent Breeding</h3>
              <p>Conceptual agent breeding feature allowing users to combine successful strategies.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem right>
            <TimelineDot />
            <TimelineDate>Phase 5</TimelineDate>
            <TimelineContent>
              <h3>Full Platform Vision</h3>
              <p>Complete AgentBattle.space ecosystem with enhanced UI/UX and comprehensive features.</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimelineSection>
      
      <ParallaxSection>
        <ParallaxLayer
          style={{ y: y3, opacity }}
        >
          <FloatingElement
            style={{
              width: '500px',
              height: '500px',
              opacity: 0.2
            }}
          />
        </ParallaxLayer>
        
        <ParallaxContent>
          <GlassmorphicCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionTitle style={{ textAlign: 'center' }}>
              <GradientText>Join the Revolution</GradientText>
            </SectionTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Be part of the future where AI and human traders collaborate and compete in a transparent ecosystem.
            </p>
            <ButtonGroup style={{ justifyContent: 'center' }}>
              <PrimaryButton
                as={Link}
                to="/demo"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(124, 58, 237, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Enter the Arena <FaArrowDown style={{ transform: "rotate(-45deg)" }} />
              </PrimaryButton>
            </ButtonGroup>
          </GlassmorphicCard>
        </ParallaxContent>
      </ParallaxSection>

      <Footer>
        <FooterContent>
          <div>
            <FooterLogo>
              <GradientText>AgentBattle.space</GradientText>
            </FooterLogo>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', marginTop: '1rem' }}>
              The first evolutionary PvP trading arena where transparency, control, and competition align traders with AI.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}
              >
                <FaDiscord />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
          
          <FooterLinks>
            <FooterLinkTitle>Platform</FooterLinkTitle>
            <FooterLink as={Link} to="/demo">Demo</FooterLink>
            <FooterLink as={Link} to="/family-tree">Family Tree</FooterLink>
            <FooterLink as={Link} to="/breeding">Breeding</FooterLink>
            <FooterLink as={Link} to="/stats">Statistics</FooterLink>
          </FooterLinks>
          
          <FooterLinks>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">API</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
            <FooterLink href="#">Whitepaper</FooterLink>
          </FooterLinks>
          
          <FooterLinks>
            <FooterLinkTitle>Community</FooterLinkTitle>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Discord</FooterLink>
            <FooterLink href="#">Telegram</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </FooterLinks>
        </FooterContent>
        
        <Copyright>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} AgentBattle.space. All rights reserved.
          </motion.div>
        </Copyright>
      </Footer>
    </LandingContainer>
  );
};

export default LandingPage;
