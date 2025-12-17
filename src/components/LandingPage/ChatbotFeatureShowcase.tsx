/**
 * ChatbotFeatureShowcase component
 *
 * This component showcases the key features of the RAG chatbot.
 */
import React from 'react';
import styles from './LandingPage.module.css';

const features = [
  {
    title: 'Neural Interface Learning',
    description: 'Query the knowledge matrix in natural language. Receive instantaneous, context-synthesized responses from the collective intelligence.',
    icon: '💬',
  },
  {
    title: 'Quantum Content Processing',
    description: 'RAG-enhanced neural networks decode complex robotics architectures, delivering precision-engineered insights on demand.',
    icon: '🧠',
  },
  {
    title: 'Targeted Knowledge Extraction',
    description: 'Isolate specific data nodes for deep analysis. Highlight any passage to unlock granular technical breakdowns.',
    icon: '📌',
  },
];

export function ChatbotFeatureShowcase() {
  return (
    <div className={styles.featureShowcase}>
      <div className={styles.featureContainer}>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
