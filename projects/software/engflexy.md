---
layout: default
title: EngFlexy Platform
category: Software Systems
tags: [Spring Boot, Angular, PostgreSQL, Scheduling, Education]
---

# EngFlexy Platform
**Dynamic English learning platform with adaptive scheduling and instructor ranking**

Live platform: https://engflexy.com/

---

## Context & problem

Traditional online language platforms often suffer from:
- rigid schedules,
- poor alignment between student level and course content,
- limited instructor performance tracking,
- and inefficient group formation.

Students want **flexible learning**, while instructors expect **fair evaluation and compensation** based on their engagement and performance.

**EngFlexy** was designed to address these challenges by combining adaptive scheduling, level-based grouping, and performance-driven instructor management.

---

## My role

I designed and implemented the **backend architecture and core business logic**, including:
- student level assessment and grouping
- dynamic scheduling mechanisms
- instructor ranking and compensation logic
- API design and system integration

This project was delivered as a **production-grade freelance platform**, not an academic or experimental system.

---

## Functional overview

### Student experience
- Registration and profile creation
- In-app English level assessment
- Enrollment in **individual or group sessions**
- Automatic assignment to appropriate groups
- Access to scheduled sessions and instructors

### Instructor experience
- Profile creation with professional level
- Assignment to courses based on availability and level
- Rating by students after sessions
- Compensation adjusted according to:
  - instructor level
  - number of sessions delivered
  - aggregated ratings

---

## Dynamic scheduling logic

A core challenge of EngFlexy is **dynamic course scheduling**.

The system:
1. Collects availability from students and instructors
2. Groups students with compatible levels and schedules
3. Assigns instructors based on qualification and workload
4. Generates session schedules dynamically

This allows the platform to:
- optimize instructor utilization
- reduce idle time
- adapt quickly to demand changes
- support both individual and group sessions

---

## System architecture (high level)

- **Backend:** Spring Boot REST APIs
- **Database:** PostgreSQL
- **Frontend:** Angular
- **CMS / Content:** WordPress (public-facing content)
- **Scheduling engine:** custom backend logic
- **Rating & compensation:** rule-based backend workflows

The architecture separates **business logic** from **content management**, ensuring maintainability and scalability.

---

## Key technical decisions

- **Custom scheduling logic** implemented at backend level to handle complex constraints.
- **Rule-based instructor compensation** to ensure transparency and fairness.
- **Clear separation of concerns** between learning workflows and CMS content.
- **Relational data modeling** to manage users, sessions, ratings, and payments consistently.
- **API-first design** to support future mobile or third-party integrations.

---

## Technology stack

- **Backend:** Java, Spring Boot, Spring Security
- **Frontend:** Angular
- **Database:** PostgreSQL
- **CMS:** WordPress
- **APIs:** REST
- **Tooling:** Git

---

## Outcome & status

- Platform is **live and operational**
- Supports individual and group learning formats
- Demonstrates complex backend logic beyond CRUD
- Designed to evolve with new learning formats and pricing models

EngFlexy highlights my ability to **translate business rules into scalable backend systems**, particularly in education and scheduling-heavy platforms.

---

## Links

- Live platform: https://engflexy.com/
- (Source code is private)

---

*For platforms involving scheduling, marketplaces, or rule-based automation, feel free to reach out.*

