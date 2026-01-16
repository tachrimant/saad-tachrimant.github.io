---
layout: default
title: Peer-to-Peer Thermal Forecasting (Edge AI)
category: AI & Applied ML
tags: [Time-Series, LSTM, Edge AI, IoT, InfluxDB, Distributed Learning]
---

# Peer-to-Peer Thermal Forecasting (Edge AI)
**Two-stage time-series forecasting with on-device learning and distributed coordination**

---

## Context & problem

Accurate thermal forecasting in buildings is challenging due to:
- heterogeneous environments,
- privacy constraints on sensor data,
- limited computational resources at the edge,
- and the coexistence of short-term dynamics with long-term thermal inertia.

Centralized models often fail to adapt to local conditions or require raw data aggregation, which is undesirable in real-world deployments.

This project explores a **peer-to-peer and edge-based approach** to thermal forecasting, where learning and inference happen **close to the data source**, while still benefiting from coordination across devices.

---

## My role

I designed and implemented the **end-to-end AI and data pipeline**, including:
- forecasting model design and evaluation,
- two-stage inference and reconciliation logic,
- peer-to-peer learning setup,
- edge deployment on IoT devices,
- real-time data storage and monitoring.

This is an **applied research and engineering project**, grounded in realistic deployment constraints.

---

## Two-stage forecasting approach

The system uses **two complementary forecasting horizons**:

### 1. Short-term (minute-level)
- Predicts the next minute temperature
- Captures fast dynamics and transient effects
- Implemented using recurrent neural networks (LSTM / GRU)

### 2. Long-term (hour-level)
- Predicts the mean thermal behavior over the next hour
- Captures slower thermal inertia
- Provides a stable reference signal

---

## Forecast reconciliation

To ensure consistency between horizons, a **reconciliation mechanism** is applied:

- Minute-level predictions are progressively constrained to **converge toward the hourly forecast**
- This avoids drift and instability in long rollouts
- The approach balances short-term reactivity with long-term physical realism

This design significantly improves forecast robustness in operational settings.

---

## Peer-to-peer & on-device learning

Each node in the system:
- runs on a **Raspberry Pi**
- connects to real sensors (e.g., temperature control devices)
- maintains a **private, local dataset**
- trains or fine-tunes a **personalized thermal model**

Key properties:
- No raw data sharing between nodes
- Learning happens **on-device**
- Coordination supports experimentation with peer-to-peer and federated learning strategies

This setup respects privacy while allowing scalable deployment.

---

## Data pipeline & monitoring

- Sensor data is collected in real time from connected devices
- Data is stored in **InfluxDB**, optimized for time-series workloads
- Dashboards and monitoring enable:
  - live inspection of sensor signals,
  - forecast outputs,
  - system health and performance

The pipeline supports both **online inference** and **offline evaluation**.

---

## System architecture (high level)

- **Edge devices:** Raspberry Pi nodes with sensors
- **Models:** LSTM / GRU-based time-series predictors
- **Learning:** local training with peer-to-peer coordination
- **Storage:** InfluxDB for real-time and historical data
- **Monitoring:** dashboards for data and predictions

The architecture is designed to be **modular, privacy-aware, and resource-efficient**.

---

## Technology stack

- **ML:** LSTM, GRU, RNN-based time-series models
- **Programming:** Python
- **Edge devices:** Raspberry Pi
- **Sensors:** smart temperature control devices
- **Database:** InfluxDB
- **Learning paradigms:** on-device, peer-to-peer, federated (experimental)

---

## Outcome & status

- Functional edge-based forecasting system
- Real sensor data and live inference
- Demonstrates applied AI under real deployment constraints
- Actively used as a research and experimentation platform

This project highlights my ability to **design and deploy applied AI systems** that combine machine learning, data engineering, and edge computing in realistic environments.

---

*Interested in edge AI, time-series forecasting, or distributed learning systems?  
Feel free to reach out to discuss similar use cases.*

