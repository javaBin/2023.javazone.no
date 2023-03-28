'use client'

import React from "react";
import Lottie from 'lottie-react';
import animationData from '../public/animations/JavaZone-hero-flags.json';
import styles from './animatedHero.module.css';

const AnimatedHero = () => <Lottie animationData={animationData} loop={true} className={styles.animatedHero}/>;

export default AnimatedHero;
