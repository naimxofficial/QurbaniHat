'use client';

import Link from 'next/link';

export default function NotFound() {
    const primaryColor = '#000000';

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
            padding: '20px',
        },
        errorCode: {
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontWeight: '900',
            margin: '0',
            color: primaryColor,
            letterSpacing: '-0.05em',
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1rem',
        },
        description: {
            fontSize: '1rem',
            color: '#4b5563',
            maxWidth: '420px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.6',
        },
        button: {
            padding: '12px 32px',
            backgroundColor: primaryColor,
            color: '#ffffff',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 4px 12px rgba(36, 77, 63, 0.15)',
        }
    };

    return (
        <main style={styles.container}>
            
            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>

            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.title}>Something went wrong.</h2>
            <p style={styles.description}>
                The page you&apos;re looking for has either moved to a new permanent 
                location or doesn&apos;t exist anymore.
            </p>

            <Link 
                href="/" 
                style={styles.button}
                onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                Return to Safety
            </Link>
        </main>
    );
}