---
layout: default
title: THERMODSET Dataset
category: Data Engineering & Research
tags: [Data Engineering, Time-Series, Anomaly Detection, Imputation, Reproducibility]
---

# THERMODSET
**An anomaly-free thermal dataset for hot climate regions**

---

## Context & motivation

High-quality datasets are critical for developing, validating, and benchmarking thermal models in buildings. However:
- open-access thermal datasets are scarce,
- datasets representing **hot climate regions** (e.g., Africa) are particularly limited,
- and real-world data often suffers from missing values and anomalies.

**THERMODSET** was created to address this gap by providing a **clean, reliable, and openly accessible dataset** specifically designed for thermal modeling in hot climate environments.

---

## My role

I was the **main data engineer and system implementer** for THERMODSET, responsible for:
- data ingestion and structuring,
- anomaly detection and cleaning pipelines,
- missing data analysis and imputation strategies,
- reproducible preprocessing workflows,
- preparation of the dataset for public release.

This project required both **methodological rigor** and **engineering execution**.

---

## Dataset overview

- **Source:** Smart Building Project “Bosphorus”, Morocco  
- **Climate:** Hot climate region  
- **Signals:**  
  - indoor temperature  
  - humidity  
  - environmental conditions  
- **Resolution:** High temporal resolution time-series  
- **Usage:** Thermal modeling, forecasting, benchmarking

---

## Data challenges addressed

Real-world building data is imperfect. In this dataset:
- ~**38%** of values were missing
- ~**18%** of observations were affected by anomalies

These issues made the raw data unsuitable for direct modeling.

---

## Preprocessing & imputation strategy

A **rigorous, multi-stage preprocessing pipeline** was applied:

1. **Anomaly detection**
   - Identification of outliers using statistical and ML-based techniques
2. **Missing data analysis**
   - Characterization of missingness patterns over time
3. **Imputation**
   - Interpolation-based methods for short gaps
   - Machine learning-based methods for complex missing segments
4. **Validation**
   - Consistency checks
   - Distribution analysis before and after preprocessing

The goal was to preserve **physical plausibility** while minimizing modeling bias.

---

## Reproducibility & openness

To ensure transparency and reuse:
- preprocessing algorithms are documented,
- code is made available alongside the dataset,
- methodological choices are clearly explained.

This allows researchers and practitioners to:
- audit the preprocessing pipeline,
- reproduce results,
- adapt the methods to other datasets.

---

## Use cases

THERMODSET supports:
- thermal model calibration
- time-series forecasting
- anomaly detection benchmarking
- energy efficiency research
- smart building analytics

---

## Outcome & impact

- Publicly available, anomaly-free dataset
- One of the few open datasets targeting **hot climate regions**
- Enables fair comparison of thermal modeling approaches
- Bridges a data gap for building energy research

THERMODSET demonstrates my ability to **engineer reliable datasets from imperfect real-world data**, a critical skill for applied AI and data-driven systems.

---

## Links

- Dataset & preprocessing code: *(link to be added)*
- Research paper: *(link to be added)*

---

*If you are working on data quality, time-series modeling, or energy-related analytics, this dataset illustrates the level of rigor I bring to data engineering projects.*

