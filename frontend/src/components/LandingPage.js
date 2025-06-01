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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 80px rgba(124, 58, 237, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 2.5rem;
  position: relative;
  z-index: 2;
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(124, 58, 237, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
    border-color: rgba(124, 58, 237, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background: rgba(15, 23, 42, 0.6);
    box-shadow: inset 0 0 100px rgba(124, 58, 237, 0.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7c3aed, #3b82f6);
    border-radius: 2px;
  }
  
  span {
    background: ${({ theme }) => theme.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 4rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  letter-spacing: 0.01em;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    font-size: 1.35rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
  position: relative;
  z-index: 2;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.5);
  border-radius: 1.25rem;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #7c3aed, #3b82f6);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0) 100%);
    transform: rotate(45deg);
    z-index: -1;
    transition: all 0.6s ease;
    opacity: 0;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
    border-color: rgba(124, 58, 237, 0.4);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      animation: shimmer 2s infinite;
      opacity: 1;
    }
  }
  
  @keyframes shimmer {
    0% {
      top: -50%;
      left: -50%;
    }
    100% {
      top: 150%;
      left: 150%;
    }
  }
`;

const FeatureIcon = styled(motion.div)`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  position: relative;
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, #7c3aed, #3b82f6);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(59, 130, 246, 0.5));
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.4s ease;
  }
  
  svg {
    filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.5));
    transition: all 0.3s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 15px 30px rgba(124, 58, 237, 0.25);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
    
    svg {
      transform: scale(1.2);
      filter: drop-shadow(0 0 12px rgba(124, 58, 237, 0.8));
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 1rem;
  margin-top: 0.75rem;
  letter-spacing: 0.01em;
`;

// Removed unused CTA styled components

const GlassmorphicCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(16px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(125deg, rgba(124, 58, 237, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #7c3aed, #3b82f6, #06b6d4);
    opacity: 0.7;
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
  filter: blur(40px);
  pointer-events: none;
  mix-blend-mode: screen;
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
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundSecondary};
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0) 70%);
    z-index: 0;
    animation: floatAnimation 15s infinite ease-in-out;
  }
  
  &::before {
    top: 10%;
    left: -100px;
  }
  
  &::after {
    bottom: 20%;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%);
    animation-delay: 5s;
  }
  
  @keyframes floatAnimation {
    0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    25% { transform: translate(20px, 10px) scale(1.05); opacity: 0.6; }
    50% { transform: translate(0, 20px) scale(1); opacity: 0.5; }
    75% { transform: translate(-20px, 10px) scale(0.95); opacity: 0.4; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  }
  
  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
  }
  
  .particle:nth-child(1) { top: 20%; left: 10%; animation: particleFloat 20s infinite linear; }
  .particle:nth-child(2) { top: 70%; left: 20%; animation: particleFloat 25s infinite linear; animation-delay: 2s; }
  .particle:nth-child(3) { top: 40%; left: 80%; animation: particleFloat 22s infinite linear; animation-delay: 5s; }
  .particle:nth-child(4) { top: 80%; left: 70%; animation: particleFloat 28s infinite linear; animation-delay: 7s; }
  .particle:nth-child(5) { top: 30%; left: 50%; animation: particleFloat 24s infinite linear; animation-delay: 9s; }
  
  @keyframes particleFloat {
    0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
    25% { transform: translate(50px, 25px) scale(1.5); opacity: 0.6; }
    50% { transform: translate(100px, 0) scale(1); opacity: 0.3; }
    75% { transform: translate(50px, -25px) scale(0.5); opacity: 0.1; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.2));
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, rgba(124, 58, 237, 0.8), rgba(59, 130, 246, 0.8));
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 15px rgba(124, 58, 237, 0.6);
    opacity: 0.6;
    filter: blur(3px);
    animation: pulseTimeline 3s infinite alternate;
  }
  
  @keyframes pulseTimeline {
    0% { opacity: 0.3; box-shadow: 0 0 10px rgba(124, 58, 237, 0.3); }
    100% { opacity: 0.8; box-shadow: 0 0 20px rgba(124, 58, 237, 0.7); }
  }
  
  @media (max-width: 768px) {
    &::before, &::after {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
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

const timelineItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const TimelineDot = styled(motion.div)`
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #3b82f6);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4);
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(124, 58, 237, 0.5);
    opacity: 0;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 0.3; }
    100% { transform: scale(0.95); opacity: 0.7; }
  }
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineDate = styled(motion.div)`
  font-weight: 600;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  display: inline-block;
`;

const timelineDateVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const timelineContentVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const timelineContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3
    }
  }
};

const TimelineContent = styled(motion.div)`
  background: ${({ theme }) => `rgba(${theme.backgroundTertiaryRgb}, 0.7)`};
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => `rgba(${theme.borderRgb}, 0.6)`};
  width: calc(50% - 40px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #3b82f6);
    opacity: 0.8;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  
  p {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    font-size: 0.95rem;
    position: relative;
    z-index: 1;
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
  background-size: 30px 30px;
  z-index: 0;
  opacity: 0.5;
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
          width: '500px',
          height: '500px',
          top: '5%',
          left: '0%',
          opacity: 0.4,
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, rgba(59, 130, 246, 0.05) 70%)'
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <FloatingElement
        style={{
          width: '400px',
          height: '400px',
          top: '20%',
          right: '5%',
          opacity: 0.3,
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 70%)'
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <FloatingElement
        style={{
          width: '300px',
          height: '300px',
          bottom: '15%',
          left: '10%',
          opacity: 0.25,
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.05) 70%)'
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <FloatingElement
        style={{
          width: '250px',
          height: '250px',
          bottom: '25%',
          right: '15%',
          opacity: 0.2,
          background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.05) 70%)'
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <Hero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            AgentBattle<span style={{ color: "#3b82f6" }}>.space</span>
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The first evolutionary PvP trading arena where transparency, control, and competition align traders with AI.
          </HeroSubtitle>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <PrimaryButton
              as={Link}
              to="/demo"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(124, 58, 237, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Try Demo Arena <FaArrowDown style={{ transform: "rotate(-45deg)", marginLeft: "8px" }} />
            </PrimaryButton>
            
            <SecondaryButton
              onClick={() => {
                const featuresSection = document.getElementById('features');
                featuresSection.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, borderColor: "rgba(124, 58, 237, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
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
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <SectionTitle>
          <GradientText>Vision</GradientText> Timeline
        </SectionTitle>
        <SectionSubtitle>
          Our conceptual roadmap for the AgentBattle.space platform
        </SectionSubtitle>
        
        <Timeline
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={timelineContainerVariants}
        >
          <TimelineItem 
            right 
            variants={timelineItemVariants}
          >
            <TimelineDot 
              animate={{ 
                boxShadow: ['0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)', '0 0 0 4px rgba(124, 58, 237, 0.3), 0 0 25px rgba(124, 58, 237, 0.6)', '0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <TimelineDate variants={timelineDateVariants}>Phase 1</TimelineDate>
            <TimelineContent variants={timelineContentVariants}>
              <h3>Concept Development</h3>
              <p>Initial concept of AI agent trading arena with focus on transparency and user control.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem

            variants={timelineItemVariants}

          >
            <TimelineDot 
              animate={{ 
                boxShadow: ['0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)', '0 0 0 4px rgba(124, 58, 237, 0.3), 0 0 25px rgba(124, 58, 237, 0.6)', '0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)'] 
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <TimelineDate variants={timelineDateVariants}>Phase 2</TimelineDate>
            <TimelineContent variants={timelineContentVariants}>
              <h3>Demo Platform</h3>
              <p>Interactive demo showcasing the core mechanics of AI agent trading in a simulated environment.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem 
            right

            variants={timelineItemVariants}

          >
            <TimelineDot 
              animate={{ 
                boxShadow: ['0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)', '0 0 0 4px rgba(124, 58, 237, 0.3), 0 0 25px rgba(124, 58, 237, 0.6)', '0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)'] 
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <TimelineDate variants={timelineDateVariants}>Phase 3</TimelineDate>
            <TimelineContent variants={timelineContentVariants}>
              <h3>Evolution Mechanics</h3>
              <p>Introduction of agent evolution mechanics and family tree visualization for strategy tracking.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem

            variants={timelineItemVariants}

          >
            <TimelineDot 
              animate={{ 
                boxShadow: ['0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)', '0 0 0 4px rgba(124, 58, 237, 0.3), 0 0 25px rgba(124, 58, 237, 0.6)', '0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)'] 
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            />
            <TimelineDate variants={timelineDateVariants}>Phase 4</TimelineDate>
            <TimelineContent variants={timelineContentVariants}>
              <h3>Agent Breeding</h3>
              <p>Conceptual agent breeding feature allowing users to combine successful strategies.</p>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem 
            right

            variants={timelineItemVariants}

          >
            <TimelineDot 
              animate={{ 
                boxShadow: ['0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)', '0 0 0 4px rgba(124, 58, 237, 0.3), 0 0 25px rgba(124, 58, 237, 0.6)', '0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.4)'] 
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            />
            <TimelineDate variants={timelineDateVariants}>Phase 5</TimelineDate>
            <TimelineContent variants={timelineContentVariants}>
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
