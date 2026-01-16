---
layout: default
title: Quanoni Platform
category: Software Systems
tags: [Spring Boot, Angular, Kafka, PostgreSQL, AI, Payments]
---

# Quanoni Platform
**On-demand legal consultation platform with AI-based case routing**

Live platform: https://quanoni.com/

---

## Context & problem

Access to legal advice is often slow, opaque, and poorly adapted to urgent situations. Clients do not always know:
- which legal domain their case belongs to,
- which lawyer is relevant,
- or how to get fast availability.

At the same time, lawyers miss potential consultations due to:
- inefficient request distribution,
- lack of real-time notifications,
- poor matching between case domain and expertise.

**Quanoni** addresses this by providing an *on-demand and scheduled legal consultation platform*, inspired by the dispatch logic of ride-hailing systems.

---

## My role

I designed and implemented the **core backend architecture**, data flows, and system integrations, including:
- API design and backend services
- request distribution and messaging
- AI-based case domain detection
- database modeling
- integration with external services (notifications and payments)

This was a **production-grade freelance project**, not a prototype.

---

## Functional overview

### Client side
- Create an urgent or scheduled consultation request
- Describe the legal case in free text
- Complete payment securely
- Receive confirmation and consultation details

### Lawyer side
- Receive consultation requests in real time
- Accept or decline based on availability
- Manage consultations and client interactions

---

## AI-based case routing

When a client submits a request:
1. The case description is analyzed by an **AI model** to detect the legal domain (e.g. family law, commercial law, labor law, etc.).
2. The system identifies **eligible lawyers** based on:
   - legal specialization,
   - availability,
   - status (connected / disconnected).
3. Requests are distributed accordingly.

This reduces mismatch, response time, and manual filtering.

---

## System architecture (high level)

- **Backend:** Spring Boot REST APIs
- **Database:** PostgreSQL (relational domain modeling)
- **Frontend:** Angular
- **Messaging:** Kafka for asynchronous request distribution
- **Notifications:**  
  - Push notifications for connected lawyers  
  - WhatsApp API for eligible but disconnected lawyers
- **Payments:** NAPS payment service
- **AI layer:** Spring AI with a pre-trained model for domain detection

The system is designed to be **asynchronous, scalable, and fault-tolerant**.

---

## Key technical decisions

- **Kafka** was used to decouple client requests from lawyer availability, ensuring scalability under peak demand.
- **Asynchronous workflows** prevent blocking operations during notifications and routing.
- **AI inference integrated at API level** to keep the user experience fast and deterministic.
- **Relational data modeling** to ensure consistency across users, consultations, and transactions.
- **External service isolation** (payments, WhatsApp) to reduce blast radius in case of failure.

---

## Technology stack

- **Backend:** Java, Spring Boot, Spring Security, JWT
- **Frontend:** Angular
- **Database:** PostgreSQL
- **Messaging:** Apache Kafka
- **AI:** Spring AI, pre-trained classification model
- **Notifications:** WhatsApp API, push notifications
- **Payments:** NAPS
- **Tooling:** Git, REST APIs

---

## Outcome & status

- Platform is **live and operational**
- Handles real user requests and transactions
- Designed for extension (new domains, new notification channels, analytics)

Quanoni demonstrates my ability to **design, build, and operate a complex, real-world platform** combining backend engineering, asynchronous systems, AI integration, and third-party services.

---

## Links

- Live platform: https://quanoni.com/
- (Source code is private)

---

*Interested in similar backend-heavy or AI-integrated platforms?  
See my other projects or contact me directly.*

