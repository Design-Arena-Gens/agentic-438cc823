'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    {
      name: "The Outback Carne Asada",
      price: "$8.50",
      description: "Grilled carne asada with beetroot relish, crispy onions, and bush tomato salsa"
    },
    {
      name: "Barbie Shrimp Taco",
      price: "$9.00",
      description: "Grilled prawns (shrimp on the barbie, mate!), mango salsa, and macadamia crema"
    },
    {
      name: "Kangaroo Al Pastor",
      price: "$10.00",
      description: "Tender roo meat marinated al pastor style with grilled pineapple and Vegemite glaze"
    },
    {
      name: "The Wallaby Carnitas",
      price: "$8.00",
      description: "Slow-cooked pork carnitas with Aussie coleslaw and tangy lemon myrtle aioli"
    },
    {
      name: "Pavlova Fish Taco",
      price: "$9.50",
      description: "Crispy battered fish with tropical fruit salsa and passionfruit crema"
    },
    {
      name: "Veggie Ripper",
      price: "$7.50",
      description: "Grilled halloumi, roasted veggies, avocado, and Tim Tam crumble (yes, really)"
    }
  ]

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)',
    },
    header: {
      background: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      padding: '20px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    logo: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#ffd23f',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    nav: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '4px',
      transition: 'all 0.3s',
    },
    hero: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#fff',
      textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: 'bold',
      margin: '0 0 20px 0',
      lineHeight: 1.2,
    },
    heroSubtitle: {
      fontSize: '24px',
      margin: '0 0 30px 0',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    sectionTitle: {
      fontSize: '42px',
      color: '#fff',
      textAlign: 'center',
      marginBottom: '40px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    menuCard: {
      background: '#fff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
    },
    menuCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
    },
    menuName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ff6b35',
      marginBottom: '8px',
    },
    menuPrice: {
      fontSize: '20px',
      color: '#f7931e',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    menuDescription: {
      fontSize: '16px',
      color: '#555',
      lineHeight: 1.6,
    },
    aboutBox: {
      background: '#fff',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      fontSize: '18px',
      lineHeight: 1.8,
      color: '#333',
    },
    locationBox: {
      background: '#fff',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
    locationItem: {
      marginBottom: '24px',
    },
    locationLabel: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ff6b35',
      marginBottom: '8px',
    },
    locationText: {
      fontSize: '18px',
      color: '#333',
      lineHeight: 1.6,
    },
    footer: {
      background: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '60px',
    },
    emoji: {
      fontSize: '64px',
      marginBottom: '20px',
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>🌮 G'day Tacos 🦘</div>
          <nav style={styles.nav}>
            <button
              style={{
                ...styles.navButton,
                background: activeSection === 'home' ? '#ff6b35' : 'none'
              }}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button
              style={{
                ...styles.navButton,
                background: activeSection === 'menu' ? '#ff6b35' : 'none'
              }}
              onClick={() => setActiveSection('menu')}
            >
              Menu
            </button>
            <button
              style={{
                ...styles.navButton,
                background: activeSection === 'about' ? '#ff6b35' : 'none'
              }}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button
              style={{
                ...styles.navButton,
                background: activeSection === 'location' ? '#ff6b35' : 'none'
              }}
              onClick={() => setActiveSection('location')}
            >
              Find Us
            </button>
          </nav>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section style={styles.hero}>
            <div style={styles.emoji}>🌮🦘🌊</div>
            <h1 style={styles.heroTitle}>G'day Tacos</h1>
            <p style={styles.heroSubtitle}>South Central LA's Only Aussie-Mexican Fusion Taco Truck</p>
            <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
              Where the flavors of Mexico meet the spirit of Australia, right here in the heart of South Central!
            </p>
          </section>
        </>
      )}

      {activeSection === 'menu' && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Ripper Menu</h2>
          <div style={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                style={styles.menuCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)'
                }}
              >
                <div style={styles.menuName}>{item.name}</div>
                <div style={styles.menuPrice}>{item.price}</div>
                <div style={styles.menuDescription}>{item.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <div style={styles.aboutBox}>
            <p>
              <strong>G'day, mates!</strong> 🦘
            </p>
            <p>
              We're a family-run taco truck bringing together the best of two worlds: the bold, authentic flavors of South Central LA's Mexican cuisine and the laid-back, adventurous spirit of Australia.
            </p>
            <p>
              Started by Carlos and his partner Sheila (a chef from Sydney who fell in love with LA tacos), we've been serving up our unique fusion creations since 2019. Our mission? To make you say "Crikey, these are bloody good tacos!" while keeping it real with our South Central roots.
            </p>
            <p>
              Every taco is made with love, fresh ingredients sourced locally, and a dash of Aussie creativity that'll make your taste buds do a walkabout. Whether you're after a classic with a twist or something totally unique, we've got you sorted!
            </p>
            <p>
              <strong>Come say g'day and grab a feed that'll knock your socks off! 🌮✨</strong>
            </p>
          </div>
        </section>
      )}

      {activeSection === 'location' && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Find Our Truck</h2>
          <div style={styles.locationBox}>
            <div style={styles.locationItem}>
              <div style={styles.locationLabel}>📍 Location</div>
              <div style={styles.locationText}>
                We roll around South Central LA! <br/>
                <strong>Regular spot:</strong> Corner of Vermont Ave & Slauson Ave<br/>
                (Near the South Central Plaza)
              </div>
            </div>

            <div style={styles.locationItem}>
              <div style={styles.locationLabel}>🕐 Hours</div>
              <div style={styles.locationText}>
                <strong>Mon-Thu:</strong> 11am - 9pm<br/>
                <strong>Fri-Sat:</strong> 11am - 11pm<br/>
                <strong>Sun:</strong> 12pm - 8pm
              </div>
            </div>

            <div style={styles.locationItem}>
              <div style={styles.locationLabel}>📱 Contact</div>
              <div style={styles.locationText}>
                <strong>Phone:</strong> (323) TACOS-AU<br/>
                <strong>Instagram:</strong> @gdaytacosla<br/>
                <strong>Email:</strong> eatup@gdaytacos.com
              </div>
            </div>

            <div style={styles.locationItem}>
              <div style={styles.locationLabel}>💳 Payment</div>
              <div style={styles.locationText}>
                We accept cash, all major cards, Venmo, and Cash App!
              </div>
            </div>
          </div>
        </section>
      )}

      <footer style={styles.footer}>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>
          🌮 G'day Tacos - Where South Central meets the Outback 🦘
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          © 2024 G'day Tacos. All rights reserved. Made with ❤️ in South Central LA
        </p>
      </footer>
    </div>
  )
}
