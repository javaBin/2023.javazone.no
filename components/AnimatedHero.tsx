'use client'

import Lottie from 'lottie-react';
import animationData from '../public/animations/JavaZone-hero-flags.json';
import styles from './animatedHero.module.css';

const AnimatedHero = () => <Lottie animationData={animationData} loop={false} className={styles.animatedHero}/>;

export default AnimatedHero;
